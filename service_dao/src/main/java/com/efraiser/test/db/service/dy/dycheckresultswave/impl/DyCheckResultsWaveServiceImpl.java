package com.efraiser.test.db.service.dy.dycheckresultswave.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckResultsHelper;
import com.efraiser.test.db.model.dy.DyCheckResultsRecord;
import com.efraiser.test.db.model.dy.DyCheckResultsWave;
import com.efraiser.test.db.model.dy.DyCheckResultsWaveHelper;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dycheckresultswave.DyCheckResultsWaveService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.mvc.Mvcs;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class DyCheckResultsWaveServiceImpl   extends BaseServiceImpl<DyCheckResultsWave> implements DyCheckResultsWaveService {


    @Override
    public List<DyCheckResultsWave> getDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM DY.DY_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkArea $type AND A.C_USER IN('admin',@cUser) ORDER BY CASE WHEN CHECK_RISK = '数值准确' THEN 1 WHEN CHECK_RISK = '敏感关注' THEN 2 END,REPORT_NO_STR,ORGAN_NO,A.C_USER,FORMULA";
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
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        if ("1".equals(checkArea)) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR NOT LIKE '%@%'");
        }else if("2".equals(checkArea)){
            sql.vars().set("checkArea", " AND REPORT_NO_STR LIKE '%@%'");
        }
        if (StrUtil.isNotNull(type)) {
            sql.vars().set("type", " AND TYPE='" + type + "'");
        }

        return this.getListBySql(sql);
    }

    @Override
    public List<DyCheckResultsWave> getDyReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String checkType,String checkArea) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM DY.DY_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkType $checkArea AND A.C_USER IN('admin',@cUser) ORDER BY ORGAN_NO,A.C_USER,FORMULA";
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
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        if(("1".equals(checkArea))){
            sql.vars().set("checkArea", " AND REPORT_NO_STR NOT LIKE '%@%'");
        }else if(("2").equals(checkArea)){
            sql.vars().set("checkArea", " AND REPORT_NO_STR LIKE '%@%'");
        }
        return this.getListBySql(sql);
    }

    @Override
    public List<DyCheckResultsWave> getDyReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM DY.DY_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk AND A.C_USER = @cUser ORDER BY ORGAN_NO,A.C_USER,FORMULA";
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
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        return this.getListBySql(sql);
    }

    @Override
    public List<DyCheckResultsHelper> getDyReportCheckResultsYidong(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_YIDONG_FORMULA_TYPE') AS TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') AS CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER,CHECK_PROJECT,VALUE_AREA,FORMULA_MODEL,REPORT_RATE,A.DVALUE FROM DY.DY_CHECK_RESULTS A LEFT JOIN DY.DY_CHECK_FORMULA B ON A.FORMULA_ID=B.ID WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkType  AND A.C_USER IN('admin',@cUser) AND A.ISERROR='1'  ORDER BY ORGAN_NO,REPORT_NO_STR,length(element),element,report_rate DESC";
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
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        sql.vars().set("checkType", " AND a.TYPE='" + 2 + "'");
        List<DyCheckResultsHelper> lists=this.getListObjectBySql(sql,DyCheckResultsHelper.class);
        return lists;
    }

    @Override
    public List<DyCheckResultsHelper> getSummaryDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String formulaType) {
        String name="";
        String bmCode[]=brNo.split(",");
        for(int i=0;i<bmCode.length;i++){
            if(i==bmCode.length-1){
                name+= SysBmglCache.getBmName(bmCode[i]);
            }else{
                name+=""+SysBmglCache.getBmName(bmCode[i])+",";

            }
        }
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String sqlStr = "SELECT  A.ID,'"+ name +"' AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER,CHECK_PROJECT,VALUE_AREA,FORMULA_MODEL,REPORT_RATE FROM DY.DY_CHECK_RESULTS A LEFT JOIN DY.DY_CHECK_FORMULA B ON A.FORMULA=B.CHECK_FORMULA WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $type AND A.C_USER IN('admin',@cUser) AND B.START_DATE <= '"+startDate+"' AND B.END_DATE >= '"+reportDate + maxDays+"' ORDER BY ORGAN_NO,A.C_USER,FORMULA";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(brNo)) {
            if (brNo.contains(",")) {
                sql.vars().set("brNo", "ORGAN_NO ='" + brNo + "'");
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
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        if (StrUtil.isNotNull(formulaType)) {
            sql.vars().set("type", " AND a.TYPE='" + formulaType+"2" + "'");
        }
        return this.getListObjectBySql(sql,DyCheckResultsHelper.class);
    }

    @Override
    public List<DyCheckResultsWave> getDyReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String checkType,String checkArea) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS_RECORD WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkArea AND C_USER IN('admin',@cUser) ORDER BY ORGAN_NO,C_USER,FORMULA";
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
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        if(("1".equals(checkArea))){
            sql.vars().set("checkArea", " AND REPORT_NO_STR NOT LIKE '%@%'");
        }else if(("2").equals(checkArea)){
            sql.vars().set("checkArea", " AND REPORT_NO_STR LIKE '%@%'");
        }

        return this.getListBySql(sql);
    }

    @Override
    public List<DyCheckResultsWaveHelper> getDyReportCheckResultsRecordYD(String brNo, String reportDate, String reportRate, String tabType) {

        StringBuilder sb=new StringBuilder();
        sb.append("SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NO,A.REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA FROM DY.DY_CHECK_RESULTS_WAVE A INNER JOIN DY.DY_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE  A.ORGAN_NO='"+brNo+"' AND A.REPORT_DATE='" + reportDate + "'");
        if(StrUtil.isNotNull(reportRate)){
            sb.append(" AND A.REPORT_RATE='" + reportRate + "'");
        }
        if(StrUtil.isNotNull(tabType)){
            sb.append("AND A.TAB_TYPE='" + tabType + "'");
        }
        sb.append("ORDER BY A.ORGAN_NO,A.REPORT_NO_STR,A.VALUE");
        String sqlStr=sb.toString();
        Sql sql = Sqls.create(sqlStr);
        return this.getListObjectBySql(sql,DyCheckResultsWaveHelper.class);
    }

    @Override
    public DyCheckResultsWave fetchDyCheckResultsWaveForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public DyCheckResultsWave fetchDyCheckResultsWaveRecordForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS_RECORD WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<DyCheckResultsWave> checkResults,String formulaType,String checkArea) throws Exception {
        String[] cUsers = new String[3];
        cUsers[0] = "admin";
        cUsers[1] = cUser;
        cUsers[2] = "repay";
        if(StrUtil.isNotNull(checkArea)){
            if("1".equals(checkArea)){
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("TYPE", "=", formulaType).and("REPORT_NO_STR","NOT LIKE","%@%"));
            }else if("2".equals(checkArea)){
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("TYPE", "=", formulaType).and("REPORT_NO_STR","LIKE","%@%"));
            }else{
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("TYPE", "=", formulaType));
            }
        }else{
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("TYPE", "=", formulaType));
        }

        insertResult(checkResults,formulaType);
        insertResultRecord(brNo, reportDate, tabType,formulaType);

    }


    private void insertResult(List<DyCheckResultsWave> checkResults,String formulaType) {
        for(int i=0;i<checkResults.size();i++){
            String sqlStr="INSERT INTO DY.DY_CHECK_RESULTS_WAVE(id,ORGAN_NO,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CHECK_RISK,CONTENT,DVALUE,FORMULA_MARK,TYPE,ISERROR,FORMULA_ID) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CHECK_RISK,@CONTENT,@DVALUE,@FORMULA_MARK,@TYPE,@ISERROR,@FORMULAID)";
            Sql sql = Sqls.create(sqlStr);
//			String formula=FormulaEncrypt.getFormulaEnctypt(checkResults.get(i).getFormula());
            String formula=checkResults.get(i).getFormula();
            sql.params().set("ORGAN_NO", checkResults.get(i).getOrganNo());
            sql.params().set("REPORT_DATE", checkResults.get(i).getReportDate());
            sql.params().set("TAB_TYPE", checkResults.get(i).getTabType());
            sql.params().set("REPORT_NO_STR", checkResults.get(i).getReportNoStr());
            sql.params().set("FORMULA", formula);
            sql.params().set("C_USER", checkResults.get(i).getcUser());
            sql.params().set("CHECK_RISK", checkResults.get(i).getCheckRisk());
            sql.params().set("VALUE", checkResults.get(i).getValue());
            sql.params().set("FORMULA_MARK", checkResults.get(i).getFormulaMark());
            sql.params().set("TYPE",formulaType);
            dao().execute(sql);
        }
    }
    /**
     * 插入检验结果信息,重复的不插入
     *
     * @author efraiser.xiaxiaofeng
     */
    private void insertResultRecord(String brNo, String reportDate, String tabType,String formulaType) {
        // megre into不重复的插入
        String databaseType= Mvcs.ctx().getDefaultIoc().get(String.class,"driver");
        String sqlStr;
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            sqlStr = "MERGE INTO DY.DY_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK,TYPE FROM DY.DY_CHECK_RESULTS WHERE ORGAN_NO='"
                    + brNo
                    + "' AND TAB_TYPE='"
                    + tabType
                    + "' AND REPORT_DATE='"
                    + reportDate
                    + "' AND CONTENT NOT LIKE '%未取到值%' ) t1 ON(t.ORGAN_NO=t1.ORGAN_NO AND t.REPORT_DATE=t1.REPORT_DATE AND t.TAB_TYPE=t1.TAB_TYPE AND t.REPORT_NO_STR=t1.REPORT_NO_STR AND t.CHECK_RISK=t1.CHECK_RISK AND t.FORMULA=t1.FORMULA AND t.CONTENT=t1.CONTENT AND t.C_USER=t1.C_USER AND t.TYPE=t1.TYPE AND t.FORMULA_MARK=t1.FORMULA_MARK) WHEN NOT MATCHED THEN INSERT (ID,	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK, TYPE)	values(UUID(),	t1.ORGAN_NO,	t1.REPORT_DATE,	t1.TAB_TYPE,	t1.IS_REPAY,	t1.REPORT_NO_STR,	t1.FORMULA,	t1.CHECK_RISK,	t1.C_USER,	t1.CONTENT,	t1.FORMULA_MARK,t1.TYPE)";
        }
        else{ sqlStr = "MERGE INTO DY.DY_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK,TYPE FROM DY.DY_CHECK_RESULTS WHERE ORGAN_NO='"
                + brNo
                + "' AND TAB_TYPE='"
                + tabType
                + "' AND REPORT_DATE='"
                + reportDate
                + "' AND CONTENT NOT LIKE '%未取到值%' ) t1 ON(t.ORGAN_NO=t1.ORGAN_NO AND t.REPORT_DATE=t1.REPORT_DATE AND t.TAB_TYPE=t1.TAB_TYPE AND t.REPORT_NO_STR=t1.REPORT_NO_STR AND t.CHECK_RISK=t1.CHECK_RISK AND t.FORMULA=t1.FORMULA AND t.CONTENT=t1.CONTENT AND t.C_USER=t1.C_USER AND t.TYPE=t1.TYPE AND t.FORMULA_MARK=t1.FORMULA_MARK) WHEN NOT MATCHED THEN INSERT (ID,	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK, TYPE)	values(UUID(),	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK,TYPE)";
        }
        this.dao().execute(Sqls.create(sqlStr));
    }

    @Override
    public int getDyReportCheckResultCount(String brNo, String reportDate, String tabType, String checkRisk) {
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        return super.count(criteria);
    }

    @Override
    public int getDyReportCheckResultCountRecord(String brNo, String reportDate, String tabType, String checkRisk) {
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        return super.dao().count(DyCheckResultsRecord.class, criteria);
    }

    @Override
    public List<DyCheckResultsWave> getDyReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
        Sql sql = Sqls
                .create("SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS  $condition");
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }

        return this.getListBySql(sql, criteria, pager);
    }

    @Override
    public List<DyCheckResultsWave> getDyReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
        Sql sql = Sqls
                .create("SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS_RECORD  $condition");
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }

        return this.getListBySql(sql, criteria, pager);
    }


    @Override
    public int getDyReportCheckResultCountArea(String brNo, String reportDate, String tabType, String checkRisk,String checkType,String  checkArea ) {
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        if(("1".equals(checkArea))){
            criteria.where().and("REPORT_NO_STR", "NOT LIKE", "%@%");
        }else if(("2").equals(checkArea)){
            criteria.where().and("REPORT_NO_STR", "LIKE", "%@%");
        }
        if(StrUtil.isNotNull(checkType)){
            criteria.where().and("TYPE", "=", checkType);
        }
        return super.count(criteria);
    }


    @Override
    public int getDyReportCheckResultCountAreaYidong(String brNo, String reportDate, String tabType, String checkRisk,String checkType,String  checkArea ) {
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        if(("1".equals(checkArea))){
            criteria.where().and("REPORT_NO_STR", "NOT LIKE", "%@%");
        }else if(("2").equals(checkArea)){
            criteria.where().and("REPORT_NO_STR", "LIKE", "%@%");
        }
        if(("2".equals(checkType))){
            criteria.where().and("TYPE", "=",checkType);
        }
        return super.count(criteria);
    }

    @Override
    public List<DyCheckResultsWave> getDyReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager,String formulaType,String checkArea) {
        Sql sql = Sqls
                .create("SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS  $condition");
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        //校验范围区分(表内校验,表间校验)
        if(("1".equals(checkArea))){
            criteria.where().and("REPORT_NO_STR", "NOT LIKE", "%@%");
        }else if(("2").equals(checkArea)){
            criteria.where().and("REPORT_NO_STR", "LIKE", "%@%");
        }
        if(StrUtil.isNotNull(formulaType)){
            criteria.where().and("TYPE", "=", formulaType);
        }

        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }

        return this.getListBySql(sql, criteria, pager);
    }

    @Override
    public Map<String, String> doInitDataMap(String tabCode, String brNo,
                                             String reportDate, String checkType, String isdValue, String cUser) {
        List<DyCheckResultsWave> results=getDyCheckResultsWave(tabCode,brNo,reportDate,checkType,cUser);
        final Map<String, String> dataMap = new HashMap<String, String>();
        for (int i = 0;i < results.size();i++) {
            String[] locate=results.get(i).getFormula().split("_");
            String key=locate[1]+"_"+locate[2];
            if(isdValue.equals("0")){
                String value=results.get(i).getValue()+"_"+results.get(i).getIsError()+"_"+results.get(i).getCheckRisk();
                dataMap.put(key, value);
            }else{
                String value=results.get(i).getdValue()+"_"+results.get(i).getIsError()+"_"+results.get(i).getCheckRisk();
                dataMap.put(key, value);
            }
        }
        return dataMap;
    }

    private List<DyCheckResultsWave> getDyCheckResultsWave(String tabCode, String brNo,
                                                           String reportDate,String checkType,String cUser) {
        String sql="";
        if(cUser.equals("admin")){
            sql="SELECT * FROM DY.DY_CHECK_RESULTS WHERE TYPE='2' AND TAB_TYPE=" + checkType + " AND REPORT_NO_STR='" + tabCode + "' AND REPORT_DATE='" + reportDate + "' AND ORGAN_NO='"+brNo+"' AND C_USER='admin'";
        }else{
            sql="SELECT * FROM DY.DY_CHECK_RESULTS WHERE TYPE='2' AND TAB_TYPE=" + checkType + " AND REPORT_NO_STR='" + tabCode + "' AND REPORT_DATE='" + reportDate + "' AND ORGAN_NO='"+brNo+"' AND C_USER='"+cUser+"'";
        }
        return super.getListBySql(sql,null,null) ;
    }

    @Override
    public void insertCheckResultsForYD(String tabCodes,String brNo, String reportDate,
                                        String checkType, String userId, List<DyCheckResultsWave> checkResults,
                                        String formulaType, String checkArea) {
        if(StrUtil.isNotNull(checkArea)){
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_NO_STR","IN",StrUtil.convertQuoMarksSQL(tabCodes)).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", checkType).and("C_USER", "=", userId).and("TYPE", "=", "2"));
        }else{
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_NO_STR","IN",StrUtil.convertQuoMarksSQL(tabCodes)).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", checkType).and("C_USER", "=", userId).and("TYPE", "=", "2"));
        }

        insertResult(checkResults,formulaType);

    }

    @Override
    public List<DyCheckResultsHelper> getDyReportCheckResultsRecord2(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS_RECORD WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk  AND C_USER IN('admin',@cUser) ORDER BY ORGAN_NO,C_USER,FORMULA";
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
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        return this.getListObjectBySql(sql,DyCheckResultsHelper.class);
    }

    @Override
    public void insertCheckResultsCS(String brNo, String reportDate,
                                     String reportRate,String tabType, List<DyCheckResultsWave> checkResults) {
        this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("TAB_TYPE","=",tabType).and("REPORT_DATE", "=", reportDate).and("REPORT_RATE", "IN", StrUtil.convertQuoMarksSQL(reportRate)));
        insertResultCS(checkResults);

    }

    private void insertResultCS(List<DyCheckResultsWave> checkResults) {
        for(int i=0;i<checkResults.size();i++){
            String sqlStr="INSERT INTO DY.DY_CHECK_RESULTS_WAVE(ID,ORGAN_NO,REPORT_DATE,REPORT_RATE,TAB_TYPE,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,VALUE,D_VALUE,FORMULA_MARK,FORMULA_ID) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@REPORT_RATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@CHECK_RISK,@C_USER,@VALUE,@DVALUE,@FORMULA_MARK,@FORMULA_ID)";
            Sql sql = Sqls.create(sqlStr);
//			String formula=FormulaEncrypt.getFormulaEnctypt(checkResults.get(i).getFormula());
            String formula=checkResults.get(i).getFormula();
            sql.params().set("ORGAN_NO", checkResults.get(i).getOrganNo());
            sql.params().set("REPORT_DATE", checkResults.get(i).getReportDate());
            sql.params().set("REPORT_RATE",checkResults.get(i).getReportRate());
            sql.params().set("TAB_TYPE",checkResults.get(i).getTabType());
            sql.params().set("REPORT_NO_STR", checkResults.get(i).getReportNoStr());
            sql.params().set("FORMULA", formula);
            sql.params().set("CHECK_RISK",checkResults.get(i).getCheckRisk());
            sql.params().set("C_USER", checkResults.get(i).getcUser());
            sql.params().set("VALUE",checkResults.get(i).getValue());
            sql.params().set("DVALUE",checkResults.get(i).getdValue());
            sql.params().set("FORMULA_MARK",checkResults.get(i).getFormulaMark());
            sql.params().set("FORMULA_ID",checkResults.get(i).getFormulaId());
            dao().execute(sql);
        }
    }

    @Override
    public List<DyCheckResultsWaveHelper> getReportCheckResults(String brNo, String reportDate, String reportRate,String tabType, String cUser) {
        String sqlStr = "SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NO,A.REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA FROM DY.DY_CHECK_RESULTS_WAVE A INNER JOIN DY.DY_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE A.ORGAN_NO='"+brNo+"'AND A.REPORT_DATE='"+reportDate+"' $reportRate $tabType ORDER BY A.ORGAN_NO,A.REPORT_NO_STR,A.CHECK_RISK,A.VALUE";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND A.TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        return this.getListObjectBySql(sql,DyCheckResultsWaveHelper.class);
    }
}
