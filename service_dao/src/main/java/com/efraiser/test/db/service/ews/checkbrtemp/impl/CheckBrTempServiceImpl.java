package com.efraiser.test.db.service.ews.checkbrtemp.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.CheckBrTemp;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checkbrtemp.CheckBrTempService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Criteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CheckBrTempServiceImpl extends BaseServiceImpl<CheckBrTemp> implements CheckBrTempService {

    @Autowired
    private LocalConfig localConfig;

    @Override
    public List<CheckBrTemp> getCheckBrTempList() {
        Criteria cri = Cnd.cri();
        cri.getOrderBy().asc("sort_num");
        return dao().query(CheckBrTemp.class, cri);
    }


    @Override
    public List<CheckBrTemp> getCheckBrTempByBrNo(String brNo, String reportDate, String version, String repCode) {
        Criteria cri = Cnd.cri();
        cri.where().and("brno", "=", brNo);
        cri.where().and("sjrq", "=", reportDate);
        cri.where().and("version", "=", version);
        if(localConfig.getDriver().toUpperCase().contains("ORACLE")){
            cri.where().andIsNull("tableRange");
        }else {
            cri.where().and("tableRange", "=", repCode);
        }
        return dao().query(CheckBrTemp.class, cri);
    }


    @Override
    public void addCheckBrTemp(String brNo, String reportDate, String version, String formulaType, int sortNum,
                               String tableRange) {
        CheckBrTemp checkBrTemp = new CheckBrTemp();
        checkBrTemp.setBrNO(brNo);
        checkBrTemp.setSjRQ(reportDate);
        checkBrTemp.setVersion(version);
        checkBrTemp.setFormulaType(formulaType);
        checkBrTemp.setSortNum(sortNum);
        checkBrTemp.setTableRange(tableRange);
        checkBrTemp.setStatus("0");// 等待中
        dao().insert(checkBrTemp);
    }

    @Override
    public void deleteCheckBrTempByBrNo(String brNo, String reportDate, String version, String tableRange) {
        String deleteStr = "delete from check_br_temp where brno='" + brNo + "' and sjrq='" + reportDate
                + "'and version='" + version + "' ";
        if(localConfig.getDriver().toUpperCase().contains("ORACLE") ){
            if(StrUtil.isNull(tableRange)){
                deleteStr+= " and tablerange is null";
            }else{
                deleteStr+= " and tablerange='" + tableRange + "'";
            }

        }else {
            deleteStr+= " and tablerange='" + tableRange + "'";
        }
        dao().execute(Sqls.create(deleteStr));
    }

    @Override
    public void updateCheckBrTempByBrNo(String brNo, String reportDate, String version, String tableRange) {
        String updateStr = "update check_br_temp set status='1' where brno='" + brNo + "' and sjrq='" + reportDate
                + "'and version='" + version + "' ";
        if(localConfig.getDriver().toUpperCase().contains("ORACLE")){
            updateStr+= " and tablerange is null";
        }else {
            updateStr+= " and tablerange='" + tableRange + "'";
        }
        dao().execute(Sqls.create(updateStr));
    }

    @Override
    public GridQueryPageResult getResultList(int pageIndex, int pageSize) {

        String sqlStr = "SELECT ID,	BRNO,GET_BM_NAME(BRNO) AS BRNAME,SJRQ,FORMULATYPE,VERSION,SORT_NUM,TABLERANGE,STATUS FROM CHECK_BR_TEMP ORDER BY SORT_NUM";
        GridQueryPageResult gqpr = new GridQueryPageResult();
        List<CheckBrTemp> list = this.getListObjectBySql(sqlStr, CheckBrTemp.class);
        List<CheckBrTemp> lists = new ArrayList<CheckBrTemp>();
        gqpr.setTotal(list.size());
        for (int j = pageIndex * pageSize; j < (pageIndex + 1) * pageSize; j++) {
            if (j < list.size()) {
                lists.add(list.get(j));
            }
        }
        gqpr.setData(lists);
        return gqpr;
    }

    @Override
    public GridQueryPageResult getResultList(String brNo, String reportDate, String repCode, String version,
                                             int pageIndex, int pageSize) {

        String sqlStr = "SELECT ID,	BRNO,GET_BM_NAME(BRNO) AS BRNAME,SJRQ,FORMULATYPE,VERSION,SORT_NUM,TABLERANGE,STATUS FROM CHECK_BR_TEMP WHERE ID IS NOT NULL";
        if (StrUtil.isNotNull(brNo)) {
            sqlStr += " and BRNO = '" + brNo + "'";
        }
        if (StrUtil.isNotNull(reportDate)) {
            sqlStr += " and sjrq = '" + reportDate.replace("-", "") + "'";
        }
        if (StrUtil.isNotNull(repCode)) {
            sqlStr += " and TABLERANGE = '" + repCode + "'";
        }
        if (StrUtil.isNotNull(version)) {
            sqlStr += " and version = '" + version + "'";
        }
        sqlStr += " ORDER BY SORT_NUM";
        GridQueryPageResult gqpr = new GridQueryPageResult();
        List<CheckBrTemp> list = this.getListObjectBySql(sqlStr, CheckBrTemp.class);
        List<CheckBrTemp> lists = new ArrayList<CheckBrTemp>();
        gqpr.setTotal(list.size());
        for (int j = pageIndex * pageSize; j < (pageIndex + 1) * pageSize; j++) {
            if (j < list.size()) {
                lists.add(list.get(j));
            }
        }
        gqpr.setData(lists);
        return gqpr;
    }
}
