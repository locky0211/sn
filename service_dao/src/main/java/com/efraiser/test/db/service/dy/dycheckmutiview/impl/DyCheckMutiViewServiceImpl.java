package com.efraiser.test.db.service.dy.dycheckmutiview.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckMutiResults;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckmutiview.DyCheckMutiViewService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DyCheckMutiViewServiceImpl extends BaseServiceImpl<DyCheckMutiResults> implements DyCheckMutiViewService {

    @Override
    public List<DyCheckMutiResults> getDyReportCheckMutiResults(String brNo, String reportDate, String tabType, String cUser) {
        String sqlStr = "SELECT ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,"
                + "GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE_WJ') as TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CONTENT "
                + "FROM DY.DY_CHECK_MUTI_RESULTS WHERE $brNo AND REPORT_DATE=@reportDate $tabType AND C_USER IN('admin',@cUser) "
                + "ORDER BY REPORT_NO_STR,ORGAN_NO,C_USER,FORMULA";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(brNo)) {
            if (brNo.contains(",")) {
                sql.vars().set("brNo", "ORGAN_NO in(" + StrUtil.convertQuoMarksSQL(brNo) + ")");
            } else {
                sql.vars().set("brNo", "ORGAN_NO ='" + brNo + "'");
            }
        } else {
            sql.vars().set("brNo", "1=1");
        }
        sql.params().set("cUser", cUser);
        sql.params().set("reportDate", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND TAB_TYPE='" + tabType + "'");
        }

        return this.getListBySql(sql);
    }

    @Override
    public DyCheckMutiResults fetchDyCheckMutiResultForView(String id) {
        String sqlStr = "SELECT ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE_WJ') AS TAB_TYPE_NAME,TAB_TYPE,REPORT_NO_STR,FORMULA,CONTENT,C_USER FROM DY.DY_CHECK_MUTI_RESULTS WHERE ID=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public String fetchPisaTableCode(String quotacode){
        String sqlstr = "SELECT TABLECODE FROM PI.PI_MAIN_TABLE_INFO WHERE ID = (SELECT DISTINCT TABLE_ID FROM PI.PI_ATTACH_TABLE_INFO WHERE QUOTA_CODE = '"+quotacode+"')";
        return singleString(sqlstr);
    }
}
