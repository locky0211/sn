package com.efraiser.test.db.service.dy.dychecklog.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckLog;
import com.efraiser.test.db.model.dy.DyCheckLogHelper;
import com.efraiser.test.db.model.dy.DyCheckResults;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dychecklog.DyCheckLogService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.util.DyTableUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DyCheckLogServiceImpl  extends BaseServiceImpl<DyCheckLog> implements DyCheckLogService {

    @Autowired
    private SysGgzdService sysGgzdService;

    @Autowired
    private LocalConfig localConfig;

    @Override
    public void saveDyCheckLog(String organNo, String reportDate, String tabType, String cUserName) {
        DyCheckLog rcLog = new DyCheckLog();
        rcLog.setcTime(DateUtil.getNow(DateUtil.FORMAT_LONG));
        rcLog.setOrganNo(organNo);
        rcLog.setReportDate(reportDate);
        rcLog.setTabType(tabType);
        rcLog.setcUserName(cUserName);
        this.clear(Cnd.where("organNo", "=", organNo).and("reportDate", "=", reportDate).and("tabType", "=", tabType));
        this.dao().fastInsert(rcLog);
    }

    @Override
    public List<DyCheckLogHelper> getDyCheckLogHelperList(String reportDate, String tabType) {
        String sqlStr = "SELECT zd_value as areaCode,ZD_NAME AS areaCodeName,'$reportDate' AS reportDate,'$tabType' AS tabType,checkNum,doCheckNum,checkNum-doCheckNum AS noCheckNum,checkNoPassNum1,checkNoPassNum2  FROM(SELECT ggzd.ZD_VALUE,ggzd.ZD_NAME,count(*) checkNum,GET_CHECK_NUM(ggzd.ZD_VALUE,'$reportDate','$tabType') AS doCheckNum,GET_CHECK_NO_PASS_NUM(ggzd.ZD_VALUE,'$reportDate','$tabType','1') AS checkNoPassNum1,GET_CHECK_NO_PASS_NUM(ggzd.ZD_VALUE,'$reportDate','$tabType','2') AS checkNoPassNum2 FROM SYS_GGZD ggzd,SYS_BMGL bm WHERE ggzd.G_ID='SYS_USER_ORGAN' AND bm.COUNT_FLAG='1' AND ggzd.ZD_VALUE!='JSS' AND bm.BM_AREA=ggzd.ZD_VALUE GROUP BY ggzd.ZD_VALUE,ggzd.ZD_NAME,ggzd.SORT_NUM ORDER BY ggzd.SORT_NUM )";
        Sql sql = Sqls.create(sqlStr);
        sql.vars().set("reportDate", reportDate);
        sql.vars().set("tabType", tabType);
        return super.getListObjectBySql(sql, DyCheckLogHelper.class);
    }

    @Override
    public List<DyCheckLogHelper> getDyCheckLogHelperListRecord(String areaCode, String reportDate, String tabType, String sortField, String sortOrder) {
        String sqlStr = "SELECT ORGAN_NO AS areaCode,GET_BM_NAME(ORGAN_NO) AS areaCodeName,SUM(CASE WHEN CHECK_RISK='1' THEN 1 ELSE 0 END) AS checkNoPassNum1,SUM(CASE WHEN CHECK_RISK='2' THEN 1 ELSE 0 END) AS checkNoPassNum2 FROM DY.DY_CHECK_RESULTS_RECORD rc WHERE REPORT_DATE='"
                + reportDate + "' AND TAB_TYPE='" + tabType + "' AND EXISTS(SELECT * FROM SYS_BMGL bm WHERE bm.BM_CODE=rc.ORGAN_NO AND bm.BM_AREA='" + areaCode + "') GROUP BY ORGAN_NO";
        if (StrUtil.isNotNull(sortField)) {
            sqlStr += " ORDER BY " + sortField + " " + sortOrder;
        }
        Sql sql = Sqls.create(sqlStr);
        return super.getListObjectBySql(sql, DyCheckLogHelper.class);
    }

    @Override
    public String getNoCheckNum(String bmArea, String reportDate, String tabType) {
        String sqlStr = "SELECT count(*) FROM SYS_BMGL bmgl WHERE bmgl.COUNT_FLAG='1' AND bmgl.BM_AREA='" + bmArea
                + "' AND  NOT EXISTS(SELECT 1 FROM DY.DY_CHECK_LOG cl WHERE bmgl.BM_CODE = cl.organ_no AND cl.REPORT_DATE='" + reportDate + "' AND cl.TAB_TYPE='" + tabType + "')";
        return singleString(sqlStr);

    }

    @Override
    public List<SysBmgl> getNoCheckBmList(String bmArea, String reportDate, String tabType) {
        String sqlStr = "SELECT * FROM SYS_BMGL bmgl WHERE bmgl.COUNT_FLAG='1' AND bmgl.BM_AREA='" + bmArea
                + "' AND  NOT EXISTS(SELECT 1 FROM DY.DY_CHECK_LOG cl WHERE bmgl.BM_CODE = cl.organ_no AND cl.REPORT_DATE='" + reportDate + "' AND cl.TAB_TYPE='" + tabType + "')";
        Sql sql = Sqls.create(sqlStr);
        return super.getListObjectBySql(sql, SysBmgl.class);

    }

    @Override
    public String getCheckNoPassNum(String bmArea, String reportDate, String tabType, String checkRisk) {
        String sqlStr = "SELECT count(*) FROM DY.DY_CHECK_RESULTS cr WHERE cr.C_USER='admin' AND cr.REPORT_DATE='" + reportDate + "' AND cr.TAB_TYPE='" + tabType + "' AND cr.CHECK_RISK='" + checkRisk
                + "' AND  EXISTS(SELECT 1 FROM SYS_BMGL bm WHERE bm.bm_code=cr.organ_no AND bm.bm_area='" + bmArea + "')";
        return singleString(sqlStr);
    }


    @Override
    public List<DyCheckResults> getCheckNoPassNumCheckResults(String bmArea, String reportDate, String tabType, String checkRisk) {
        String sqlStr = "SELECT ID,GET_BM_NAME(ORGAN_NO) ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK FROM DY.DY_CHECK_RESULTS cr WHERE  cr.C_USER='admin' AND    cr.REPORT_DATE='"
                + reportDate
                + "' AND cr.TAB_TYPE='"
                + tabType
                + "' AND cr.CHECK_RISK='"
                + checkRisk
                + "' AND  EXISTS(SELECT 1 FROM SYS_BMGL bm WHERE bm.bm_code=cr.organ_no AND bm.bm_area='"
                + bmArea
                + "')";
        Sql sql = Sqls.create(sqlStr);
        return super.getListObjectBySql(sql, DyCheckResults.class);
    }

    @Override
    public List<DyCheckResults> getCheckNoPassNumCheckResultsRecord(String bmArea, String reportDate, String tabType, String checkRisk) {
        String sqlStr = "SELECT ID,GET_BM_NAME(ORGAN_NO) ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK FROM DY.DY_CHECK_RESULTS_RECORD cr WHERE  cr.C_USER='admin' AND    cr.REPORT_DATE='"
                + reportDate
                + "' AND cr.TAB_TYPE='"
                + tabType
                + "' AND cr.CHECK_RISK='"
                + checkRisk
                + "' AND  EXISTS(SELECT 1 FROM SYS_BMGL bm WHERE bm.bm_code=cr.organ_no AND bm.bm_area='"
                + bmArea
                + "')";
        Sql sql = Sqls.create(sqlStr);
        return super.getListObjectBySql(sql, DyCheckResults.class);
    }

    @Override
    public List<DyCheckLogHelper> getDyReportCheckLogForUser(String reportDate, String userId, String sortField, String sortOrder) {
        String sqlStr = "SELECT ORGAN_NO as areaCode,GET_BM_NAME(ORGAN_NO) as areaCodeName,sum(case when  check_risk='1' THEN 1 ELSE 0 END) AS checkNoPassNum1,sum(case when  check_risk='2' THEN 1 ELSE 0 END) AS checkNoPassNum2 FROM DY.DY_CHECK_RESULTS t WHERE t.REPORT_DATE=@reportDate AND EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.DEP_ID=t.ORGAN_NO AND ud.USER_ID=@userId) GROUP BY t.ORGAN_NO";
        if (StrUtil.isNotNull(sortField)) {
            sqlStr += " ORDER BY " + sortField + " " + sortOrder;
        } else {
            sqlStr += " ORDER BY checkNoPassNum1 desc";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("reportDate", reportDate);
        sql.params().set("userId", userId);
        return super.getListObjectBySql(sql, DyCheckLogHelper.class);
    }

    @Override
    public List<DyCheckLogHelper> getDyReportCheckLogForUserRecord(String reportDate, String userId, String sortField, String sortOrder) {
        String sqlStr = "SELECT ORGAN_NO as areaCode,GET_BM_NAME(ORGAN_NO) as areaCodeName,sum(case when  check_risk='1' THEN 1 ELSE 0 END) AS checkNoPassNum1,sum(case when  check_risk='2' THEN 1 ELSE 0 END) AS checkNoPassNum2 FROM DY.DY_CHECK_RESULTS_RECORD t WHERE t.REPORT_DATE=@reportDate AND EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.DEP_ID=t.ORGAN_NO AND ud.USER_ID=@userId) GROUP BY t.ORGAN_NO";
        if (StrUtil.isNotNull(sortField)) {
            sqlStr += " ORDER BY " + sortField + " " + sortOrder;
        } else {
            sqlStr += " ORDER BY checkNoPassNum1 desc";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("reportDate", reportDate);
        sql.params().set("userId", userId);
        return super.getListObjectBySql(sql, DyCheckLogHelper.class);
    }

    @Override
    public DyCheckLogHelper getDyReportChekNum(String reportDate, String userId) {
        String  databaseType= localConfig.getDriver();
        Sql sql ;
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            sql = Sqls.create("SELECT (SELECT count(*)  FROM SYS_BMGL bm,SYS_GGZD zd WHERE zd.G_ID='DY_TABLE_TAB_TYPE' AND BM.COUNT_FLAG='1' AND bm.BM_AREA IS NOT NULL AND zd.ZD_VALUE IN("
                    + DyTableUtil.getRdTabType(DateUtil.parse(reportDate, "yyyyMM"))
                    + ")  AND EXISTS (SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.DEP_ID=bm.BM_CODE)) AS checkNoPassNum1 ,(SELECT count(*)  FROM DY.DY_CHECK_LOG rl WHERE rl.REPORT_DATE=@reportDate AND EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.DEP_ID=rl.ORGAN_NO)) AS checkNoPassNum2 FROM dual");
        }
        else{ sql = Sqls.create("SELECT (SELECT count(*) AS checkNoPassNum1  FROM SYS_BMGL bm,SYS_GGZD zd WHERE zd.G_ID='DY_TABLE_TAB_TYPE' AND BM.COUNT_FLAG='1' AND bm.BM_AREA IS NOT NULL AND zd.ZD_VALUE IN("
                + DyTableUtil.getRdTabType(DateUtil.parse(reportDate, "yyyyMM"))
                + ")  AND EXISTS (SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.DEP_ID=bm.BM_CODE)),(SELECT count(*) AS checkNoPassNum2 FROM DY.DY_CHECK_LOG rl WHERE rl.REPORT_DATE=@reportDate AND EXISTS(SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.DEP_ID=rl.ORGAN_NO))FROM SYSIBM.SYSDUMMY1");
        }
        sql.params().set("reportDate", reportDate);
        sql.params().set("userId", userId);
        return super.getObjectBySql(sql, null, null, DyCheckLogHelper.class);
    }

    @Override
    public List<DyCheckResults> getNoCheckReportList(String reportDate, String userId) {
        Sql sql = Sqls
                .create("SELECT bm.BM_NAME AS ORGAN_NO,zd.ZD_NAME AS tab_type FROM SYS_BMGL bm,SYS_GGZD zd WHERE zd.G_ID='DY_TABLE_TAB_TYPE'  AND BM.COUNT_FLAG='1' AND bm.BM_AREA IS NOT NULL AND zd.ZD_VALUE IN("
                        + DyTableUtil.getRdTabType(DateUtil.parse(reportDate, "yyyyMM"))
                        + ")  AND EXISTS (SELECT 1 FROM SYS_USER_DEP ud WHERE ud.USER_ID=@userId AND ud.DEP_ID=bm.BM_CODE)AND NOT EXISTS(SELECT 1 FROM DY.DY_CHECK_LOG cl WHERE cl.ORGAN_NO=bm.BM_CODE AND cl.REPORT_DATE=@reportDate)");
        sql.params().set("reportDate", reportDate);
        sql.params().set("userId", userId);
        return super.getListObjectBySql(sql, DyCheckResults.class);
    }
}
