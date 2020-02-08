package com.efraiser.test.db.service.rd.rdcheckresultswave.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.FormulaEncrypt;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.nutz.FormulaEncryptThead;
import com.efraiser.test.db.model.rd.RdCheckResultsHelper;
import com.efraiser.test.db.model.rd.RdCheckResultsRecord;
import com.efraiser.test.db.model.rd.RdCheckResultsWave;
import com.efraiser.test.db.model.rd.RdCheckResultsWaveHelper;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.rd.rdcheckresultswave.RdCheckResultsWaveService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysorgsummer.SysOrgSummerService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.entity.Record;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RdCheckResultsWaveServiceImpl  extends BaseServiceImpl<RdCheckResultsWave> implements RdCheckResultsWaveService {

    @Autowired
    private SysOrgSummerService sysOrgSummerService;

    @Autowired
    private SysGgzdService sysGgzdService;

    @Autowired
    private LocalConfig localConfig;


    @Override
    public List<RdCheckResultsWave> getRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM RD_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkArea $type AND A.C_USER IN('admin',@cUser) ORDER BY CASE WHEN CHECK_RISK = '数值准确' THEN 1 WHEN CHECK_RISK = '敏感关注' THEN 2 END,REPORT_NO_STR,ORGAN_NO,A.C_USER,FORMULA";
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
    public List<RdCheckResultsWave> getRdReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String checkType,String checkArea) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM RD_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkType $checkArea AND A.C_USER IN('admin',@cUser) ORDER BY ORGAN_NO,A.C_USER,FORMULA";
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
    public List<RdCheckResultsWave> getRdReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM RD_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk AND A.C_USER = @cUser ORDER BY ORGAN_NO,A.C_USER,FORMULA";
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
    public List<RdCheckResultsHelper> getRdReportCheckResultsYidong(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_YIDONG_FORMULA_TYPE') AS TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') AS CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER,CHECK_PROJECT,VALUE_AREA,FORMULA_MODEL,REPORT_RATE,A.DVALUE FROM RD_CHECK_RESULTS A LEFT JOIN RD_CHECK_FORMULA B ON A.FORMULA_ID=B.ID WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkType  AND A.C_USER IN('admin',@cUser) AND A.ISERROR='1'  ORDER BY ORGAN_NO,REPORT_NO_STR,length(element),element,report_rate DESC";
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
        List<RdCheckResultsHelper> lists=this.getListObjectBySql(sql,RdCheckResultsHelper.class);
        return lists;
    }

    @Override
    public List<RdCheckResultsHelper> getSummaryRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String formulaType) {
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
        String sqlStr = "SELECT  A.ID,'"+ name +"' AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER,CHECK_PROJECT,VALUE_AREA,FORMULA_MODEL,REPORT_RATE FROM RD_CHECK_RESULTS A LEFT JOIN RD_CHECK_FORMULA B ON A.FORMULA=B.CHECK_FORMULA WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $type AND A.C_USER IN('admin',@cUser) AND B.START_DATE <= '"+startDate+"' AND B.END_DATE >= '"+reportDate + maxDays+"' ORDER BY ORGAN_NO,A.C_USER,FORMULA";
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
        return this.getListObjectBySql(sql,RdCheckResultsHelper.class);
    }

    @Override
    public List<RdCheckResultsWave> getRdReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser,String checkType,String checkArea) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS_RECORD WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkArea AND C_USER IN('admin',@cUser) ORDER BY ORGAN_NO,C_USER,FORMULA";
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
    public List<RdCheckResultsWaveHelper> getRdReportCheckResultsRecordYD(String brNo, String reportDate, String reportRate, String tabType) {

        StringBuilder sb=new StringBuilder();
        sb.append("SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,GET_GGZD_NAME(A.CHECK_RISK,'WAVE_CHECK_RISK') AS CHECK_RISK,A.REPORT_NO_STR,A.FORMULA,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA,A.CONTENT FROM RD_CHECK_RESULTS_WAVE A INNER JOIN RD_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE  A.ORGAN_NO='"+brNo+"' AND A.REPORT_DATE='" + reportDate + "'");
        if(StrUtil.isNotNull(reportRate)){
            sb.append(" AND A.REPORT_RATE='" + reportRate + "'");
        }
        if(StrUtil.isNotNull(tabType)){
            sb.append("AND A.TAB_TYPE='" + tabType + "'");
        }
        sb.append("ORDER BY A.ORGAN_NO,A.REPORT_NO_STR,LENGTH(ELEMENT),ELEMENT,A.VALUE");
        String sqlStr=sb.toString();
        Sql sql = Sqls.create(sqlStr);
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }

    @Override
    public RdCheckResultsWave fetchRdCheckResultsWaveForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public RdCheckResultsWave fetchRdCheckResultsWaveRecordForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS_RECORD WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResultsWave> checkResults,String formulaType,String checkArea) throws Exception {
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


    private void insertResult(List<RdCheckResultsWave> checkResults,String formulaType) {
        for(int i=0;i<checkResults.size();i++){
            String sqlStr="INSERT INTO RD_CHECK_RESULTS_WAVE(ID,ORGAN_NO,REPORT_DATE,REPORT_RATE,TAB_TYPE,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,VALUE,D_VALUE,FORMULA_MARK,ISERROR,FORMULA_ID) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@REPORT_RATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@CHECK_RISK,@C_USER,@VALUE,@DVALUE,@FORMULA_MARK,@ISERROR,@FORMULA_ID)";
            Sql sql = Sqls.create(sqlStr);
            String formula= FormulaEncrypt.getFormulaEnctypt(checkResults.get(i).getFormula());
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
            sql.params().set("ISERROR",checkResults.get(i).getIsError());
            sql.params().set("FORMULA_ID",checkResults.get(i).getFormulaId());
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
        String databaseType=localConfig.getDriver();
        String sqlStr;
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            sqlStr = "MERGE INTO RD_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK,TYPE FROM RD_CHECK_RESULTS WHERE ORGAN_NO='"
                    + brNo
                    + "' AND TAB_TYPE='"
                    + tabType
                    + "' AND REPORT_DATE='"
                    + reportDate
                    + "' AND CONTENT NOT LIKE '%未取到值%' ) t1 ON(t.ORGAN_NO=t1.ORGAN_NO AND t.REPORT_DATE=t1.REPORT_DATE AND t.TAB_TYPE=t1.TAB_TYPE AND t.REPORT_NO_STR=t1.REPORT_NO_STR AND t.CHECK_RISK=t1.CHECK_RISK AND t.FORMULA=t1.FORMULA AND t.CONTENT=t1.CONTENT AND t.C_USER=t1.C_USER AND t.TYPE=t1.TYPE AND t.FORMULA_MARK=t1.FORMULA_MARK) WHEN NOT MATCHED THEN INSERT (ID,	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK, TYPE)	values(UUID(),	t1.ORGAN_NO,	t1.REPORT_DATE,	t1.TAB_TYPE,	t1.IS_REPAY,	t1.REPORT_NO_STR,	t1.FORMULA,	t1.CHECK_RISK,	t1.C_USER,	t1.CONTENT,	t1.FORMULA_MARK,t1.TYPE)";
        }
        else{ sqlStr = "MERGE INTO RD_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK,TYPE FROM RD_CHECK_RESULTS WHERE ORGAN_NO='"
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
    public int getRdReportCheckResultCount(String brNo, String reportDate, String tabType, String checkRisk) {
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
    public int getRdReportCheckResultCountRecord(String brNo, String reportDate, String tabType, String checkRisk) {
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        return super.dao().count(RdCheckResultsRecord.class, criteria);
    }

    @Override
    public List<RdCheckResultsWave> getRdReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
        Sql sql = Sqls
                .create("SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS  $condition");
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
    public List<RdCheckResultsWave> getRdReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
        Sql sql = Sqls
                .create("SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS_RECORD  $condition");
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
    public int getRdReportCheckResultCountArea(String brNo, String reportDate, String tabType, String checkRisk,String checkType,String  checkArea ) {
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
        return super.count(criteria);
    }

    @Override
    public int getRdReportCheckResultCountAreaYidong(String brNo, String reportDate, String tabType, String checkRisk,String checkType,String  checkArea ) {
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
        return super.count(criteria);
    }

    @Override
    public List<RdCheckResultsWave> getRdReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager,String formulaType,String checkArea) {
        Sql sql = Sqls
                .create("SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS_WAVE  $condition");
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
                                             String reportDate,String checkType,String isdValue,String cUser) {
        List<RdCheckResultsWave> results=getRdCheckResultsWave(tabCode,brNo,reportDate,checkType,cUser);
        final Map<String, String> dataMap = new HashMap<String, String>();
        for (int i = 0;i < results.size();i++) {
            String[] locate=results.get(i).getFormula().split("_");
            String key=locate[1]+"_"+locate[2];
            if(isdValue.equals("0")){
                String value=results.get(i).getValue()+"_"+results.get(i).getIsError()+"_"+results.get(i).getCheckRisk()+"_"+results.get(i).getId();
                dataMap.put(key, value);
            }else{
                String value=results.get(i).getdValue()+"_"+results.get(i).getIsError()+"_"+results.get(i).getCheckRisk()+"_"+results.get(i).getId();
                dataMap.put(key, value);
            }
        }
        return dataMap;
    }


    /*
     * 南京初审异动追溯
     */
    private List<RdCheckResultsWave> getRdCheckResultsWave(String tabCode, String brNo,
                                                           String reportDate,String checkType,String cUser) {
        String sql="SELECT * FROM RD_CHECK_RESULTS_WAVE WHERE  REPORT_RATE=" + checkType + " AND REPORT_NO_STR='" + tabCode + "' AND REPORT_DATE='" + reportDate + "' AND ORGAN_NO='"+brNo+"' AND C_USER='"+cUser+"'";
        return super.getListBySql(sql,null,null) ;
    }

    @Override
    public void insertCheckResultsForYD(String tabCodes,String brNo, String reportDate,
                                        String checkType, String userId, List<RdCheckResultsWave> checkResults,
                                        String formulaType, String checkArea) {
        if(StrUtil.isNotNull(checkArea)){
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_NO_STR","IN",StrUtil.convertQuoMarksSQL(tabCodes)).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", checkType).and("C_USER", "=", userId));
        }else{
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_NO_STR","IN",StrUtil.convertQuoMarksSQL(tabCodes)).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", checkType).and("C_USER", "=", userId));
        }

        insertResult(checkResults,formulaType);

    }
    @Override
    public List<RdCheckResultsHelper> getRdReportCheckResultsRecord2(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS_RECORD WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk  AND C_USER IN('admin',@cUser) ORDER BY ORGAN_NO,C_USER,FORMULA";
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
        return this.getListObjectBySql(sql,RdCheckResultsHelper.class);
    }

    @Override
    public void insertCheckResultsCS(String brNo, String reportDate,
                                     String reportRate,String tabType, List<RdCheckResultsWave> checkResults) {
        this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("TAB_TYPE","=",tabType).and("REPORT_DATE", "=", reportDate).and("REPORT_RATE", "IN", StrUtil.convertQuoMarksSQL(reportRate)));
        insertResultCS(checkResults);

    }

    @Override
    public void insertCheckResultsSh(String brNo, String reportDate,
                                     String reportRate,String tabType, List<RdCheckResultsWave> checkResults) {
        this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("TAB_TYPE","=",tabType).and("REPORT_DATE", "=", reportDate).and("REPORT_RATE", "IN", StrUtil.convertQuoMarksSQL(reportRate)));
        insertResultSh(checkResults);

    }


    private void insertResultCS(List<RdCheckResultsWave> checkResults) {
        for(int i=0;i<checkResults.size();i++){
            String sqlStr="INSERT INTO RD_CHECK_RESULTS_WAVE(ID,ORGAN_NO,REPORT_DATE,REPORT_RATE,TAB_TYPE,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,VALUE,D_VALUE,FORMULA_MARK,FORMULA_ID) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@REPORT_RATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@CHECK_RISK,@C_USER,@VALUE,@DVALUE,@FORMULA_MARK,@FORMULA_ID)";
            Sql sql = Sqls.create(sqlStr);
            String formula=FormulaEncrypt.getFormulaEnctypt(checkResults.get(i).getFormula());
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
    /*
     * 上海方法
     */
    private void insertResultSh(List<RdCheckResultsWave> checkResults) {
		/*for(int i=0;i<checkResults.size();i++){
			String sqlStr="INSERT INTO RD_CHECK_RESULTS_WAVE(ID,ORGAN_NO,REPORT_DATE,REPORT_RATE,TAB_TYPE,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,VALUE,D_VALUE,FORMULA_MARK,FORMULA_ID) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@REPORT_RATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@CHECK_RISK,@C_USER,@VALUE,@DVALUE,@FORMULA_MARK,@FORMULA_ID)";
			Sql sql = Sqls.create(sqlStr);
			String formula=FormulaEncrypt.getFormulaEnctypt1(checkResults.get(i).getFormula1());
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
		}*/

        List<Record> records = new ArrayList<>();
        for(int i=0;i<checkResults.size();i++){
            Record record = new Record();
            String formula= FormulaEncryptThead.getFormulaEnctypt1(checkResults.get(i).getFormula());
            record.set(".table", "SAM.RD_CHECK_RESULTS_WAVE");
            record.set("ID", UUID.randomUUID().toString().replaceAll("-", ""));
            record.set("ORGAN_NO", checkResults.get(i).getOrganNo());
            record.set("REPORT_DATE", checkResults.get(i).getReportDate());
            record.set("REPORT_RATE",checkResults.get(i).getReportRate());
            record.set("TAB_TYPE",checkResults.get(i).getTabType());
            record.set("REPORT_NO_STR", checkResults.get(i).getReportNoStr());
            record.set("FORMULA", formula);
            record.set("CHECK_RISK",checkResults.get(i).getCheckRisk());
            record.set("C_USER", checkResults.get(i).getcUser());
            record.set("VALUE",checkResults.get(i).getValue());
            record.set("D_VALUE",checkResults.get(i).getdValue());
            record.set("FORMULA_MARK",checkResults.get(i).getFormulaMark());
            record.set("FORMULA_ID",checkResults.get(i).getFormulaId());
            records.add(record);
        }
        dao().fastInsert(records);
    }

    @Override
    public List<RdCheckResultsWaveHelper> getReportCheckResults(String brNo, String reportDate, String reportRate,String tabType, String cUser) {
        String sqlStr = "SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA,A.CONTENT FROM RD_CHECK_RESULTS_WAVE A INNER JOIN RD_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE A.ORGAN_NO='"+brNo+"'AND A.REPORT_DATE='"+reportDate+"' $reportRate $tabType ORDER BY A.ORGAN_NO,A.REPORT_NO_STR,LENGTH(ELEMENT),ELEMENT,A.VALUE";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND A.TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }

    @Override
    public void updateContent(RdCheckResultsWave rdCheckResultsWave) {
        String sqlStr = "UPDATE SAM.RD_CHECK_RESULTS_WAVE SET CONTENT='" + rdCheckResultsWave.getContent() + "' WHERE ID='" + rdCheckResultsWave.getId() + "'";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);

    }

    @Override
    public List<RdCheckResultsWaveHelper> getReportCheckResultsSearch(String brno,String reportDate,String tabType,String reportRate,String tabcode,String checkProject,String checkRisk, String cUser,String sortField, String sortOrder) {
        String sqlStr = "SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA,C.CONTENT FROM RD_CHECK_RESULTS_WAVE A INNER JOIN RD_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID LEFT JOIN RD_CHECK_RESULTS_WAVE_CONTENT C ON A.ORGAN_NO=C.ORGAN_NO AND A.REPORT_DATE= C.REPORT_DATE AND A.TAB_TYPE= C.TAB_TYPE AND  A.REPORT_NO_STR=C.REPORT_NO_STR AND A.FORMULA_ID=C.FORMULA_ID WHERE A.ORGAN_NO='"+brno+"' $reportDate $tabType $reportRate $tabcode $checkProject $checkRisk $order ";
        Sql sql = Sqls.create(sqlStr);
        if("oracle.jdbc.driver.OracleDriver".equals(localConfig.getDriver())){
            sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN INSTR(A.D_VALUE,'公式')>0 THEN '0' WHEN INSTR(A.D_VALUE,'∞')>0 THEN '0' WHEN INSTR(A.D_VALUE,'%')>0 THEN REPLACE(A.D_VALUE,'%','') ELSE A.D_VALUE END) desc");
            if("D_VALUE".equals(sortField)&&"asc".equals(sortOrder)){
                sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN INSTR(A.D_VALUE,'公式')>0 THEN '0' WHEN INSTR(A.D_VALUE,'∞')>0 THEN '0' WHEN INSTR(A.D_VALUE,'%')>0 THEN REPLACE(A.D_VALUE,'%','') ELSE A.D_VALUE END) asc");
            }else if("VALUE".equals(sortField)&&"desc".equals(sortOrder)){
                sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN INSTR(A.D_VALUE,'公式')>0 THEN '0' WHEN INSTR(A.D_VALUE,'∞')>0 THEN '0' WHEN INSTR(A.D_VALUE,'%')>0 THEN REPLACE(A.VALUE,'%','') ELSE A.D_VALUE END) desc");
            }else if("VALUE".equals(sortField)&&"asc".equals(sortOrder)){
                sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN INSTR(A.D_VALUE,'公式')>0 THEN '0' WHEN INSTR(A.D_VALUE,'∞')>0 THEN '0' WHEN INSTR(A.D_VALUE,'%')>0 THEN REPLACE(A.VALUE,'%','') ELSE A.D_VALUE END) asc");
            }
        }else {
            sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN LOCATE('公式',A.D_VALUE)>0 THEN '0' WHEN LOCATE('∞',A.D_VALUE)>0 THEN '0' WHEN LOCATE('%',A.D_VALUE)>0 THEN REPLACE(A.D_VALUE,'%','') ELSE A.D_VALUE END) desc");
            if("D_VALUE".equals(sortField)&&"asc".equals(sortOrder)){
                sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN LOCATE('公式',A.D_VALUE)>0 THEN '0' WHEN LOCATE('∞',A.D_VALUE)>0 THEN '0' WHEN LOCATE('%',A.D_VALUE)>0 THEN REPLACE(A.D_VALUE,'%','') ELSE A.D_VALUE END) asc");
            }else if("VALUE".equals(sortField)&&"desc".equals(sortOrder)){
                sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN LOCATE('公式',A.VALUE)>0 THEN '0' WHEN LOCATE('∞',A.VALUE)>0 THEN '0' WHEN LOCATE('%',A.VALUE)>0 THEN REPLACE(A.VALUE,'%','') ELSE A.D_VALUE END) desc");
            }else if("VALUE".equals(sortField)&&"asc".equals(sortOrder)){
                sql.vars().set("order", " ORDER BY A.ORGAN_NO ASC,A.REPORT_NO_STR ASC,LENGTH(B.ELEMENT) ASC,B.ELEMENT ASC,abs(CASE WHEN LOCATE('公式',A.VALUE)>0 THEN '0' WHEN LOCATE('∞',A.VALUE)>0 THEN '0' WHEN LOCATE('%',A.VALUE)>0 THEN REPLACE(A.VALUE,'%','') ELSE A.D_VALUE END) asc");
            }
        }




        if (StrUtil.isNotNull(reportDate)) {
            sql.vars().set("reportDate"," AND A.REPORT_DATE='"+reportDate+"'");
        }
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND A.TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        if (StrUtil.isNotNull(tabcode)) {
            sql.vars().set("tabcode", " AND A.REPORT_NO_STR='" + tabcode + "'");
        }
        if (StrUtil.isNotNull(checkProject)) {
            sql.vars().set("checkProject", " AND B.CHECK_PROJECT LIKE '%" + checkProject + "%'");
        }
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND A.CHECK_RISK='" + checkRisk + "'");
        }
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }


    @Override
    public List<RdCheckResultsWaveHelper> getReportCheckResultsSearchSj_ZS(String brNo,String reportDate,String checkFormula,String tabType,String reportRate,String tabcode,String checkProject,String checkRisk, String cUser,String sortField, String sortOrder) {
        String sqlStr = "SELECT A.ID,A.ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA,A.CONTENT FROM RD_CHECK_RESULTS_WAVE A LEFT JOIN RD_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE $brNo $reportDate $checkFormula $tabType $reportRate $tabcode $checkProject $checkRisk $order ";
        Sql sql = Sqls.create(sqlStr);
        brNo= sysOrgSummerService.getbrNos(brNo);
        sql.vars().set("order", " ORDER BY abs(DOUBLE(CASE WHEN LOCATE('公式',A.D_VALUE)>0 THEN 0 WHEN LOCATE('∞',A.D_VALUE)>0 THEN 0 WHEN LOCATE('%',A.D_VALUE)>0 THEN REPLACE(A.D_VALUE,'%','') ELSE A.D_VALUE END)) desc");
        if(sortField.equals("D_VALUE")&&"asc".equals(sortOrder)){
            sql.vars().set("order", " ORDER BY abs(DOUBLE(CASE WHEN LOCATE('公式',A.D_VALUE)>0 THEN 0 WHEN LOCATE('∞',A.D_VALUE)>0 THEN 0 WHEN LOCATE('%',A.D_VALUE)>0 THEN REPLACE(A.D_VALUE,'%','') ELSE A.D_VALUE END)) asc");
        }else if(sortField.equals("VALUE")&&"desc".equals(sortOrder)){
            sql.vars().set("order", " ORDER BY abs(DOUBLE(CASE WHEN LOCATE('公式',A.VALUE)>0 THEN 0 WHEN LOCATE('∞',A.VALUE)>0 THEN 0 WHEN LOCATE('%',A.VALUE)>0 THEN REPLACE(A.VALUE,'%','') ELSE A.D_VALUE END)) desc");
        }else if(sortField.equals("VALUE")&&"asc".equals(sortOrder)){
            sql.vars().set("order", " ORDER BY abs(DOUBLE(CASE WHEN LOCATE('公式',A.VALUE)>0 THEN 0 WHEN LOCATE('∞',A.VALUE)>0 THEN 0 WHEN LOCATE('%',A.VALUE)>0 THEN REPLACE(A.VALUE,'%','') ELSE A.D_VALUE END)) asc");
        }
        if (StrUtil.isNotNull(brNo)) {
            if (brNo.contains(",")) {
                sql.vars().set("brNo", "A.ORGAN_NO in(" + StrUtil.convertQuoMarksSQL(brNo) + ")");
            } else {
                sql.vars().set("brNo", "A.ORGAN_NO ='" + brNo + "'");
            }
        } else {
            sql.vars().set("brNo", "1=1");
        }
        if (StrUtil.isNotNull(reportDate)) {
            sql.vars().set("reportDate"," AND A.REPORT_DATE='"+reportDate+"'");
        }
        if (StrUtil.isNotNull(checkFormula)) {
            sql.vars().set("checkFormula"," AND A.Formula='"+checkFormula+"'");
        }
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND A.TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        if (StrUtil.isNotNull(tabcode)) {
            sql.vars().set("tabcode", " AND A.REPORT_NO_STR='" + tabcode + "'");
        }
        if (StrUtil.isNotNull(checkProject)) {
            sql.vars().set("checkProject", " AND B.CHECK_PROJECT LIKE '%" + checkProject + "%'");
        }
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND A.CHECK_RISK='" + checkRisk + "'");
        }
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }

    @Override
    public List<RdCheckResultsWaveHelper> getReportCheckResultsSearch_NJ(String brno,String reportDate,String tabType,String reportRate,String tabcode,String checkProject,String checkRisk, String cUser) {
        String sqlStr = "SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA,A.CONTENT FROM RD_CHECK_RESULTS_WAVE_NJ A INNER JOIN RD_CHECK_FORMULA_WAVE_NJ B ON A.FORMULA_ID=B.ID WHERE A.ORGAN_NO='"+brno+"' $reportDate $tabType $reportRate $tabcode $checkProject $checkRisk ORDER BY A.ORGAN_NO,A.REPORT_NO_STR,LENGTH(ELEMENT),ELEMENT,A.VALUE,A.C_USER";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(reportDate)) {
            sql.vars().set("reportDate"," AND A.REPORT_DATE='"+reportDate+"'");
        }
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND A.TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        if (StrUtil.isNotNull(tabcode)) {
            sql.vars().set("tabcode", " AND A.REPORT_NO_STR='" + tabcode + "'");
        }
        if (StrUtil.isNotNull(checkProject)) {
            sql.vars().set("checkProject", " AND B.CHECK_PROJECT LIKE '%" + checkProject + "%'");
        }
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND A.CHECK_RISK='" + checkRisk + "'");
        }
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }

    @Override
    public List<RdCheckResultsWaveHelper> getReportCheckResultsSearchNj(String brno,String reportDate,String formulaId) {
        String sqlStr = "SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA,A.CONTENT FROM RD_CHECK_RESULTS_WAVE_NJ A INNER JOIN RD_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE A.ORGAN_NO='"+brno+"' $reportDate $formulaId ORDER BY A.ORGAN_NO,A.REPORT_NO_STR,LENGTH(ELEMENT),ELEMENT,A.VALUE,A.C_USER";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(reportDate)) {
            sql.vars().set("reportDate"," AND A.REPORT_DATE='"+reportDate+"'");
        }
        if (StrUtil.isNotNull(formulaId)) {
            sql.vars().set("formulaId", " AND A.FORMULA_ID='" + formulaId + "'");
        }

        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }

    @Override
    public List<RdCheckResultsWaveHelper> getReportCheckResultsSearchSj(String brNo,String reportDate,String checkFormula,String tabType,String reportRate,String tabcode,String checkProject,String checkRisk, String cUser) {
        String sqlStr = "SELECT A.ID,A.ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.VALUE_AREA,A.CONTENT FROM RD_CHECK_RESULTS_WAVE A LEFT JOIN RD_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE $brNo $reportDate $checkFormula $tabType $reportRate $tabcode $checkProject $checkRisk ORDER BY A.D_VALUE desc,A.ORGAN_NO,A.REPORT_NO_STR,LENGTH(ELEMENT),ELEMENT";
        Sql sql = Sqls.create(sqlStr);
        brNo= sysOrgSummerService.getbrNos(brNo);
        System.out.println(brNo);
        if (StrUtil.isNotNull(brNo)) {
            if (brNo.contains(",")) {
                sql.vars().set("brNo", "A.ORGAN_NO in(" + StrUtil.convertQuoMarksSQL(brNo) + ")");
            } else {
                sql.vars().set("brNo", "A.ORGAN_NO ='" + brNo + "'");
            }
        } else {
            sql.vars().set("brNo", "1=1");
        }
        if (StrUtil.isNotNull(reportDate)) {
            sql.vars().set("reportDate"," AND A.REPORT_DATE='"+reportDate+"'");
        }
        if (StrUtil.isNotNull(checkFormula)) {
            sql.vars().set("checkFormula"," AND A.Formula='"+FormulaEncrypt.getFormulaEnctypt(checkFormula)+"'");
        }
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND A.TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        if (StrUtil.isNotNull(tabcode)) {
            sql.vars().set("tabcode", " AND A.REPORT_NO_STR='" + tabcode + "'");
        }
        if (StrUtil.isNotNull(checkProject)) {
            sql.vars().set("checkProject", " AND B.CHECK_PROJECT LIKE '%" + checkProject + "%'");
        }
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND A.CHECK_RISK='" + checkRisk + "'");
        }
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }

    @Override
    public List<RdCheckResultsWaveHelper> getReportCheckResultsSearchNj_zs(String brNo,String reportDate,String formulaId,String tabType,String reportRate,String tabcode,String checkProject,String checkRisk, String cUser) {
        //String sqlStr = "SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NAME,A.ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.FORMULA_ID,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.ELEMENT,B.VALUE_AREA,A.CONTENT FROM RD_CHECK_RESULTS_WAVE_NJ A LEFT JOIN RD_CHECK_FORMULA_WAVE_NJ B ON A.FORMULA_ID=B.ID WHERE $brNo $reportDate $formulaId $tabType $reportRate $tabcode $checkProject $checkRisk AND A.ISERROR='1' ORDER BY A.D_VALUE desc,A.ORGAN_NO,A.REPORT_NO_STR,LENGTH(ELEMENT),ELEMENT";
        String sqlStr = "SELECT * FROM (SELECT RANK() OVER(PARTITION BY T.ORGAN_NO ORDER BY T.UPDATETIME DESC) RK,T.* FROM (SELECT A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NAME,A.ORGAN_NO,GET_GGZD_NAME(A.REPORT_RATE,'RD_YIDONG_FORMULA_TYPE') AS REPORT_RATE,A.REPORT_NO_STR,A.FORMULA,A.FORMULA_ID,A.CHECK_RISK,A.VALUE,B.VALUE_AREA,A.D_VALUE,A.C_USER,B.CHECK_PROJECT,B.ELEMENT,B.VALUE_AREA,A.CONTENT,CASE WHEN C.CONTENT IS NULL THEN D.JGTBYREMARK ELSE C.CONTENT END  AS YDDESC,CASE WHEN C.CONTENT IS NOT NULL THEN C.DESC_STATE END  AS DESC_STATE,C.ID  AS DESCID,D.ID AS PROBLEMID,D.UPDATETIME FROM RD_CHECK_RESULTS_WAVE_NJ A LEFT JOIN RD_CHECK_FORMULA_WAVE_NJ B ON A.FORMULA_ID=B.ID LEFT JOIN RD_IMPORT_WAVE_DESC C ON c.ORGAN_NO=A.ORGAN_NO AND A.REPORT_DATE=c.REPORT_DATE AND b.ELEMENT=c.ELEMENT AND C.COMMIT_STATE='1' AND C.DESC_STATE!='2' LEFT JOIN RD_PROBLEM_SUMMARY_SJ D ON D.ORGAN_NO=A.ORGAN_NO AND A.REPORT_DATE=D.REPORT_DATE AND b.ELEMENT=D.PROBLEMCELL  WHERE $brNo $reportDate $formulaId $tabType $reportRate $tabcode $checkProject $checkRisk AND A.ISERROR='1' ORDER BY A.D_VALUE desc,A.ORGAN_NO,A.REPORT_NO_STR,LENGTH(ELEMENT),ELEMENT)T) AS Y WHERE Y.RK<=1";
        Sql sql = Sqls.create(sqlStr);
        brNo= sysOrgSummerService.getbrNos(brNo);
        System.out.println(brNo);
        if (StrUtil.isNotNull(brNo)) {
            if (brNo.contains(",")) {
                sql.vars().set("brNo", "A.ORGAN_NO in(" + StrUtil.convertQuoMarksSQL(brNo) + ")");
            } else {
                sql.vars().set("brNo", "A.ORGAN_NO ='" + brNo + "'");
            }
        } else {
            sql.vars().set("brNo", "1=1");
        }
        if (StrUtil.isNotNull(reportDate)) {
            sql.vars().set("reportDate"," AND A.REPORT_DATE='"+reportDate+"'");
        }
        if (StrUtil.isNotNull(formulaId)) {
            sql.vars().set("formulaId"," AND B.ID='"+formulaId+"'");
        }
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND A.TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        if (StrUtil.isNotNull(tabcode)) {
            sql.vars().set("tabcode", " AND A.REPORT_NO_STR='" + tabcode + "'");
        }
        if (StrUtil.isNotNull(checkProject)) {
            sql.vars().set("checkProject", " AND B.CHECK_PROJECT LIKE '%" + checkProject + "%'");
        }
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND A.CHECK_RISK='" + checkRisk + "'");
        }
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }

    @Override
    public List<RdCheckResultsWaveHelper> getResultsHandlingStatus(String tabcode,String brNo,String reportDate,String reportRate,String cUser) {
        String sqlStr = "SELECT * FROM (SELECT RANK() OVER(PARTITION BY T.ELEMENT ORDER BY T.UPDATETIME DESC) RK,T.* FROM (SELECT B.ELEMENT,CASE WHEN C.DESC_STATE = '1' THEN '1' WHEN (c.DESC_STATE='2' OR C.DESC_STATE IS NULL) AND D.STATE IN ('C4','R4','P7') THEN '1' WHEN (c.DESC_STATE='2' OR C.DESC_STATE IS NULL) AND D.STATE NOT IN ('C4','R4','P7') THEN '2'  END  AS DESC_STATE,D.UPDATETIME FROM RD_CHECK_RESULTS_WAVE A LEFT JOIN RD_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID LEFT JOIN RD_IMPORT_WAVE_DESC C ON c.ORGAN_NO=A.ORGAN_NO AND A.REPORT_DATE=c.REPORT_DATE AND b.ELEMENT=c.ELEMENT AND C.COMMIT_STATE='1' AND C.DESC_STATE!='2' LEFT JOIN RD_PROBLEM_SUMMARY_SJ D ON D.ORGAN_NO=A.ORGAN_NO AND A.REPORT_DATE=D.REPORT_DATE AND b.ELEMENT=D.PROBLEMCELL  WHERE $brNo $reportRate $reportDate $cUser $tabcode)T) AS Y WHERE Y.RK<=1 ORDER BY LENGTH(ELEMENT),ELEMENT";
        Sql sql = Sqls.create(sqlStr);
        brNo= sysOrgSummerService.getbrNos(brNo);
        System.out.println(brNo);
        if (StrUtil.isNotNull(brNo)) {
            if (brNo.contains(",")) {
                sql.vars().set("brNo", "A.ORGAN_NO in(" + StrUtil.convertQuoMarksSQL(brNo) + ")");
            } else {
                sql.vars().set("brNo", "A.ORGAN_NO ='" + brNo + "'");
            }
        } else {
            sql.vars().set("brNo", "1=1");
        }
        if (StrUtil.isNotNull(reportDate)) {
            sql.vars().set("reportDate"," AND A.REPORT_DATE='"+reportDate+"'");
        }

        if (StrUtil.isNotNull(reportRate)) {
            sql.vars().set("reportRate", " AND A.REPORT_RATE='" + reportRate + "'");
        }
        if (StrUtil.isNotNull(tabcode)) {
            sql.vars().set("tabcode", " AND A.REPORT_NO_STR='" + tabcode + "'");
        }
        if (StrUtil.isNotNull(cUser)) {
            sql.vars().set("cUser", " AND A.C_USER='" + cUser + "'");
        }
        return this.getListObjectBySql(sql,RdCheckResultsWaveHelper.class);
    }
}
