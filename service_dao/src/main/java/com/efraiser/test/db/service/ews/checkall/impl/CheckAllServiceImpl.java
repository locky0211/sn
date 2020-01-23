package com.efraiser.test.db.service.ews.checkall.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.CheckAll;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checkall.CheckAllService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysggzd.impl.SysGgzdServiceImpl;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class CheckAllServiceImpl extends BaseServiceImpl<CheckAll> implements CheckAllService {


    @Autowired
    private SysGgzdService sysGgzdService;


    @Override
    public GridQueryPageResult getResultList(String brNo, String reportDate, String tableName, String checkDate,
                                             String formulaType, int pageIndex, int pageSize) {
        Criteria cri = Cnd.cri();
        String sqlStr = "select count(*) from check_all where id is not null ";
        if (StrUtil.isNotNull(brNo)) {
            cri.where().andIn("brNo", brNo);
            sqlStr += " and brNo in ('" + brNo + "')";
        }
        if (StrUtil.isNotNull(reportDate)) {
            cri.where().and("sjrq", "=", reportDate.replace("-", ""));
            sqlStr += " and sjrq = '" + reportDate.replace("-", "") + "'";
        }
        if (StrUtil.isNotNull(tableName)) {
            cri.where().and("tableName", "like", '%' + tableName + '%');
            sqlStr += "and tableName like '%" + tableName + "%' ";
        }
        if (StrUtil.isNotNull(checkDate)) {
            cri.where().and("checkDate", "=", checkDate);
            sqlStr += "and checkDate = '" + checkDate + "'";
        }
        if (StrUtil.isNotNull(formulaType)) {
            cri.where().and("formulaType", "=", formulaType);
            sqlStr += "and formulaType = '" + formulaType + "'";
        }
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(CheckAll.class, cri, pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }

    @Override
    public List<CheckAll> getCheckAlls(String brno, String reportDate) {
        Criteria cri = Cnd.cri();
        cri.where().and("brno", "=", brno);
        cri.where().and("sjrq", "=", reportDate.replace("-", ""));
        cri.where().and("FORMULATYPE", "=", "1");
        return dao().query(CheckAll.class, cri);
    }

    @Override
    public GridQueryPageResult getResultListOrderByTableNumber(String brNo, String reportDate, String tableName,
                                                               String checkDate, String formulaType, int pageIndex, int pageSize) {
        String sqlStr = "SELECT ID,FORMULAID,FORMULATYPE,TABLENAME,FIELDCODE,FIELDNAME,CHECKDESC,NUMBER,DATANUMBER,SJRQ,BRNO,CHECKDATE,GET_GGZD_NAME(TABLENAME||'_TABLENUMBER','EAST_3_TABLENUMBER') AS TABLENUMBER FROM CHECK_ALL WHERE ID IS NOT NULL ";
        if (StrUtil.isNotNull(brNo)) {
            sqlStr += " and brNo in ('" + brNo + "')";
        }
        if (StrUtil.isNotNull(reportDate)) {
            sqlStr += " and sjrq = '" + reportDate.replace("-", "") + "'";
        }
        if (StrUtil.isNotNull(tableName)) {
            sqlStr += "and tableName like '%" + tableName + "%' ";
        }
        if (StrUtil.isNotNull(checkDate)) {
            sqlStr += "and checkDate = '" + checkDate + "'";
        }
        if (StrUtil.isNotNull(formulaType)) {
            sqlStr += "and formulaType = '" + formulaType + "'";
        }

        sqlStr += " ORDER BY INT(TABLENUMBER) ASC";

        GridQueryPageResult gqpr = new GridQueryPageResult();
        Sql sql = Sqls.create(sqlStr);
        Pager pager = super.dao().createPager(pageIndex + 1, pageSize);
        gqpr.setData(super.getListBySql(sql, null, pager));
        gqpr.setTotal(super.countBySql(sqlStr));
        return gqpr;
    }

    @Override
    public List<CheckAll> getcheckAlls(String brno, String reportDate,
                                       String repCode, String formulaType) {
        String sqlStr = "select * from CHECK_ALL WHERE BRNO='" + brno + "' AND sjrq ='" + reportDate.replace("-", "") + "'";
        if (StrUtil.isNotNull(repCode)) {
            String zdValue = "";
            Pattern p = Pattern.compile("[\u4e00-\u9fa5]");
            Matcher m = p.matcher(repCode);
            if (m.find()) {

                SysGgzdServiceImpl sysGgzdDao = (SysGgzdServiceImpl) sysGgzdService;
                zdValue = sysGgzdDao.singleString("SELECT zd_value FROM SYS_GGZD WHERE G_ID='EastTableName' AND ZD_NAME='" + repCode + "' ");
                sqlStr += "and TABLENAME = '" + zdValue + "'";
            } else {
                sqlStr += "and TABLENAME = '" + repCode + "'";
            }
        }
        if (StrUtil.isNotNull(formulaType)) {
            sqlStr += "and formulaType = '" + formulaType + "'";
        }
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }

}
