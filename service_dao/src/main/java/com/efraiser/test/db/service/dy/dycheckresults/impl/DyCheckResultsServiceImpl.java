package com.efraiser.test.db.service.dy.dycheckresults.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckResults;
import com.efraiser.test.db.model.dy.DyCheckResultsHelper;
import com.efraiser.test.db.model.dy.DyCheckResultsRecord;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dycheckresults.DyCheckResultsService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.mvc.Mvcs;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyCheckResultsServiceImpl  extends BaseServiceImpl<DyCheckResults> implements DyCheckResultsService {

    @Override
    public List<DyCheckResults> getDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM DY.DY_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkArea AND A.C_USER IN('admin',@cUser) ORDER BY CASE WHEN CHECK_RISK = '数值准确' THEN 1 WHEN CHECK_RISK = '敏感关注' THEN 2 END,REPORT_NO_STR,ORGAN_NO,A.C_USER,FORMULA";
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

        return this.getListBySql(sql);
    }

    @Override
    public List<DyCheckResults> getDyReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String checkType,String checkArea) {
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
    public List<DyCheckResults> getDyReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
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
    public List<DyCheckResults> getDyReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String checkType,String checkArea) {
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
    public List<DyCheckResultsHelper> getDyReportCheckResultsRecordYD(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
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
    public DyCheckResults fetchDyCheckResultsForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public DyCheckResults fetchDyCheckResultsRecordForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM DY.DY_CHECK_RESULTS_RECORD WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<DyCheckResults> checkResults,String formulaType,String checkArea) throws Exception {
        String[] cUsers = new String[3];
        cUsers[0] = "admin";
        cUsers[1] = cUser;
        cUsers[2] = "repay";
        if(StrUtil.isNotNull(checkArea)){
            if("1".equals(checkArea)){
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR","NOT LIKE","%@%"));
            }else if("2".equals(checkArea)){
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR","LIKE","%@%"));
            }else{
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
            }
        }else{
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
        }

        insertResult(checkResults,formulaType);
        insertResultRecord(brNo, reportDate, tabType,formulaType);
    }

    private void insertResult(List<DyCheckResults> checkResults,String formulaType) {
        for(int i=0;i<checkResults.size();i++){
            String sqlStr="INSERT INTO DY.DY_CHECK_RESULTS(id,ORGAN_NO,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CHECK_RISK,CONTENT,FORMULA_MARK) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CHECK_RISK,@CONTENT,@FORMULA_MARK)";
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
            sql.params().set("CONTENT", checkResults.get(i).getContent());
            sql.params().set("FORMULA_MARK", checkResults.get(i).getFormulaMark());
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
            sqlStr = "MERGE INTO DY.DY_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK FROM DY.DY_CHECK_RESULTS WHERE ORGAN_NO='"
                    + brNo
                    + "' AND TAB_TYPE='"
                    + tabType
                    + "' AND REPORT_DATE='"
                    + reportDate
                    + "' AND CONTENT NOT LIKE '%未取到值%' ) t1 ON(t.ORGAN_NO=t1.ORGAN_NO AND t.REPORT_DATE=t1.REPORT_DATE AND t.TAB_TYPE=t1.TAB_TYPE AND t.REPORT_NO_STR=t1.REPORT_NO_STR AND t.CHECK_RISK=t1.CHECK_RISK AND t.FORMULA=t1.FORMULA AND t.CONTENT=t1.CONTENT AND t.C_USER=t1.C_USER  AND t.FORMULA_MARK=t1.FORMULA_MARK) WHEN NOT MATCHED THEN INSERT (ID,	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK)	values(UUID(),	t1.ORGAN_NO,	t1.REPORT_DATE,	t1.TAB_TYPE,	t1.IS_REPAY,	t1.REPORT_NO_STR,	t1.FORMULA,	t1.CHECK_RISK,	t1.C_USER,	t1.CONTENT,	t1.FORMULA_MARK)";
        }
        else{ sqlStr = "MERGE INTO DY.DY_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK FROM DY.DY_CHECK_RESULTS WHERE ORGAN_NO='"
                + brNo
                + "' AND TAB_TYPE='"
                + tabType
                + "' AND REPORT_DATE='"
                + reportDate
                + "' AND CONTENT NOT LIKE '%未取到值%' ) t1 ON(t.ORGAN_NO=t1.ORGAN_NO AND t.REPORT_DATE=t1.REPORT_DATE AND t.TAB_TYPE=t1.TAB_TYPE AND t.REPORT_NO_STR=t1.REPORT_NO_STR AND t.CHECK_RISK=t1.CHECK_RISK AND t.FORMULA=t1.FORMULA AND t.CONTENT=t1.CONTENT AND t.C_USER=t1.C_USER AND t.FORMULA_MARK=t1.FORMULA_MARK) WHEN NOT MATCHED THEN INSERT (ID,	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK)	values(UUID(),	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK)";
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
    public List<DyCheckResults> getDyReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
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
    public List<DyCheckResults> getDyReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
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
    public List<DyCheckResults> getDyReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager,String formulaType,String checkArea) {
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
    public void insertCheckResultsForYD(String tabCodes,String brNo, String reportDate,
                                        String checkType, String userId, List<DyCheckResults> checkResults,
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


}
