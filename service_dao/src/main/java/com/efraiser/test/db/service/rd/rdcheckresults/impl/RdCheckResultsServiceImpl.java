package com.efraiser.test.db.service.rd.rdcheckresults.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.FormulaEncrypt;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.nutz.FormulaEncryptThead;
import com.efraiser.test.common.util.nutz.R;
import com.efraiser.test.db.model.rd.RdCheckResults;
import com.efraiser.test.db.model.rd.RdCheckResultsHelper;
import com.efraiser.test.db.model.rd.RdCheckResultsRecord;
import com.efraiser.test.db.model.rd.RdOperateRecord;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.rd.rdcheckresults.RdCheckResultsService;
import com.efraiser.test.db.service.rd.rdoperaterecord.RdOperateRecordService;
import com.efraiser.test.db.service.rd.rdoperaterecord.impl.RdOperateRecordServiceImpl;
import com.efraiser.test.db.service.sys.sysorgsummer.SysOrgSummerService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.entity.Record;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class RdCheckResultsServiceImpl extends BaseServiceImpl<RdCheckResults> implements RdCheckResultsService {


    static Logger logger = LoggerFactory.getLogger(RdCheckResultsServiceImpl.class);

    @Autowired
    private RdOperateRecordService rdOperateRecordService;

    @Autowired
    private SysOrgSummerService sysOrgSummerService;

    @Autowired
    private LocalConfig localConfig;

    @Override
    public List<RdCheckResults> getRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,GET_GGZD_NAME(A.CHECK_FLAG,'RD_CHECK_FLAG') as CHECK_FLAG,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM RD_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $checkFlag $checkArea AND A.C_USER IN('admin','rdformula',@cUser) ORDER BY ORGAN_NO,CASE WHEN CHECK_FLAG = '已通过' THEN 0 WHEN CHECK_RISK = '未通过' THEN 1 END,CASE WHEN CHECK_RISK = '数值准确' THEN 1 WHEN CHECK_RISK = '敏感关注' THEN 2 END,REPORT_NO_STR,A.C_USER,FORMULA";
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
        } else if ("2".equals(checkArea)) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR LIKE '%@%'");
        }
        logger.info("开始执行SQL——————————" + sql + "————————————");
        return this.getListBySql(sql);

    }

    @Override
    public List<RdCheckResults> getRdReportCheckResultSj(String brNo, String reportDate, String checkFormula, String formulaId, String tabType, String checkRisk, String cUser, String checkArea, String type) {
        String sqlStr = "SELECT  A.ID,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER FROM RD_CHECK_RESULTS A WHERE $brNo AND REPORT_DATE=@reportDate $checkFormula $formulaId $tabType $checkRisk $checkArea AND A.C_USER IN('admin','rdformula',@cUser) ORDER BY ORGAN_NO,CASE WHEN CHECK_RISK = '数值准确' THEN 1 WHEN CHECK_RISK = '敏感关注' THEN 2 END,REPORT_NO_STR,A.C_USER,FORMULA";
        Sql sql = Sqls.create(sqlStr);
        brNo = sysOrgSummerService.getbrNos(brNo);
        System.out.println(brNo);
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
        if (StrUtil.isNotNull(checkFormula)) {
            sql.vars().set("checkFormula", " AND FORMULA='" + FormulaEncrypt.getFormulaEnctypt(checkFormula) + "'");
        }
        if (StrUtil.isNotNull(formulaId)) {
            sql.vars().set("formulaId", " AND FORMULA_ID='" + formulaId + "'");
        }
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND TAB_TYPE='" + tabType + "'");
        }
        if (StrUtil.isNotNull(checkRisk)) {
            sql.vars().set("checkRisk", " AND CHECK_RISK='" + checkRisk + "'");
        }
        if ("1".equals(checkArea)) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR NOT LIKE '%@%'");
        } else if ("2".equals(checkArea)) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR LIKE '%@%'");
        }

        return this.getListBySql(sql);
    }

    @Override
    public List<RdCheckResults> getRdReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea) {
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
        if (("1".equals(checkArea))) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR NOT LIKE '%@%'");
        } else if (("2").equals(checkArea)) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR LIKE '%@%'");
        }
        return this.getListBySql(sql);
    }

    @Override
    public List<RdCheckResults> getRdReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
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
        List<RdCheckResultsHelper> lists = this.getListObjectBySql(sql, RdCheckResultsHelper.class);
        return lists;
    }

    @Override
    public List<RdCheckResultsHelper> getSummaryRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType) {
        String name = "";
        String bmCode[] = brNo.split(",");
        for (int i = 0; i < bmCode.length; i++) {
            if (i == bmCode.length - 1) {
                name += SysBmglCache.getBmName(bmCode[i]);
            } else {
                name += "" + SysBmglCache.getBmName(bmCode[i]) + ",";

            }
        }
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String sqlStr = "SELECT  A.ID,'" + name + "' AS ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(A.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,A.C_USER,CHECK_PROJECT,VALUE_AREA,FORMULA_MODEL,REPORT_RATE FROM RD_CHECK_RESULTS A LEFT JOIN RD_CHECK_FORMULA B ON A.FORMULA=B.CHECK_FORMULA WHERE $brNo AND REPORT_DATE=@reportDate $tabType $checkRisk $type AND A.C_USER IN('admin',@cUser) AND B.START_DATE <= '" + startDate + "' AND B.END_DATE >= '" + reportDate + maxDays + "' ORDER BY ORGAN_NO,A.C_USER,FORMULA";
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
		/*if (StrUtil.isNotNull(formulaType)) {
			sql.vars().set("type", " AND a.TYPE='" + formulaType+"2" + "'");
		}*/
        return this.getListObjectBySql(sql, RdCheckResultsHelper.class);
    }


    @Override
    public List<RdCheckResults> getRdReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea) {
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
        if (("1".equals(checkArea))) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR NOT LIKE '%@%'");
        } else if (("2").equals(checkArea)) {
            sql.vars().set("checkArea", " AND REPORT_NO_STR LIKE '%@%'");
        }

        return this.getListBySql(sql);
    }

    @Override
    public List<RdCheckResultsHelper> getRdReportCheckResultsRecordYD(String brNo, String reportDate, String tabType, String checkRisk, String cUser) {
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
        return this.getListObjectBySql(sql, RdCheckResultsHelper.class);
    }

    @Override
    public RdCheckResults fetchRdCheckResultsForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public RdCheckResults fetchRdCheckResultsRecordForView(String id) {
        String sqlStr = "SELECT  ID,GET_BM_NAME(ORGAN_NO) AS ORGAN_NAME,ORGAN_NO,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,GET_GGZD_NAME(CHECK_RISK,'RD_CHECK_RISK') as CHECK_RISK,CONTENT,FORMULA_MARK,IS_REPAY,C_USER FROM RD_CHECK_RESULTS_RECORD WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResults> checkResults, String formulaType, String checkArea) throws Exception {
        String[] cUsers = new String[3];
        cUsers[0] = "admin";
        cUsers[1] = cUser;
        cUsers[2] = "repay";
        if (StrUtil.isNotNull(checkArea)) {
            if ("1".equals(checkArea)) {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR", "NOT LIKE", "%@%"));
            } else if ("2".equals(checkArea)) {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR", "LIKE", "%@%"));
            } else {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
            }
        } else {
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
        }

        insertResult(checkResults, formulaType);
        insertResultRecord(brNo, reportDate, tabType, formulaType);

    }


    @Override
    public void insertCheckResultsSh(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResults> checkResults, String formulaType, String checkArea) throws Exception {
        String[] cUsers = new String[3];
        cUsers[0] = "admin";
        cUsers[1] = cUser;
        cUsers[2] = "repay";
        if (StrUtil.isNotNull(checkArea)) {
            if ("1".equals(checkArea)) {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR", "NOT LIKE", "%@%"));
            } else if ("2".equals(checkArea)) {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR", "LIKE", "%@%"));
            } else {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
            }
        } else {
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
        }

        insertResultSh(checkResults, formulaType);

    }

    @Override
    public void insertCheckResultsJs(List<RdCheckResults> checkResults, String formulaType) throws Exception {
        insertResultSh(checkResults, formulaType);

    }

    private void insertResult(List<RdCheckResults> checkResults, String formulaType) {
        for (int i = 0; i < checkResults.size(); i++) {
            String sqlStr = "INSERT INTO RD_CHECK_RESULTS(id,ORGAN_NO,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CHECK_RISK,CONTENT,FORMULA_MARK) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CHECK_RISK,@CONTENT,@FORMULA_MARK)";
            Sql sql = Sqls.create(sqlStr);
            String formula = FormulaEncrypt.getFormulaEnctypt(checkResults.get(i).getFormula());
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

    /*
     * 上海方法
     */
    private void insertResultSh(List<RdCheckResults> checkResults, String formulaType) {
		/*for(int i=0;i<checkResults.size();i++){
			String sqlStr="INSERT INTO RD_CHECK_RESULTS(id,ORGAN_NO,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CHECK_RISK,CONTENT,FORMULA_MARK) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CHECK_RISK,@CONTENT,@FORMULA_MARK)";
			Sql sql = Sqls.create(sqlStr);
			String formula=FormulaEncrypt.getFormulaEnctypt1(checkResults.get(i).getFormula1());
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
		}*/
        List<Record> records = new ArrayList<>();
        for (int i = 0; i < checkResults.size(); i++) {
            Record record = new Record();
            record.set(".table", "SAM.RD_CHECK_RESULTS");
            String formula = FormulaEncryptThead.getFormulaEnctypt1(checkResults.get(i).getFormula1());
            record.set("ID", UUID.randomUUID().toString().replaceAll("-", ""));
            record.set("ORGAN_NO", checkResults.get(i).getOrganNo());
            record.set("REPORT_DATE", checkResults.get(i).getReportDate());
            record.set("TAB_TYPE", checkResults.get(i).getTabType());
            record.set("REPORT_NO_STR", checkResults.get(i).getReportNoStr());
            record.set("FORMULA", formula);
            record.set("C_USER", checkResults.get(i).getcUser());
            record.set("CHECK_RISK", checkResults.get(i).getCheckRisk());
            record.set("CONTENT", checkResults.get(i).getContent());
            record.set("FORMULA_MARK", checkResults.get(i).getFormulaMark());
            records.add(record);
        }
        dao().fastInsert(records);

    }

    /**
     * 插入检验结果信息,重复的不插入
     *
     * @author efraiser.xiaxiaofeng
     */
    private void insertResultRecord(String brNo, String reportDate, String tabType, String formulaType) {
        // megre into不重复的插入
        String databaseType = localConfig.getDriver();
        String sqlStr;
        if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
            sqlStr = "MERGE INTO RD_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK FROM RD_CHECK_RESULTS WHERE ORGAN_NO='"
                    + brNo
                    + "' AND TAB_TYPE='"
                    + tabType
                    + "' AND REPORT_DATE='"
                    + reportDate
                    + "' AND CONTENT NOT LIKE '%未取到值%' ) t1 ON(t.ORGAN_NO=t1.ORGAN_NO AND t.REPORT_DATE=t1.REPORT_DATE AND t.TAB_TYPE=t1.TAB_TYPE AND t.REPORT_NO_STR=t1.REPORT_NO_STR AND t.CHECK_RISK=t1.CHECK_RISK AND t.FORMULA=t1.FORMULA AND t.CONTENT=t1.CONTENT AND t.C_USER=t1.C_USER  AND t.FORMULA_MARK=t1.FORMULA_MARK) WHEN NOT MATCHED THEN INSERT (ID,	ORGAN_NO,	REPORT_DATE,	TAB_TYPE,	IS_REPAY,	REPORT_NO_STR,	FORMULA,	CHECK_RISK,	C_USER,	CONTENT,	FORMULA_MARK)	values(UUID(),	t1.ORGAN_NO,	t1.REPORT_DATE,	t1.TAB_TYPE,	t1.IS_REPAY,	t1.REPORT_NO_STR,	t1.FORMULA,	t1.CHECK_RISK,	t1.C_USER,	t1.CONTENT,	t1.FORMULA_MARK)";
        } else {
            sqlStr = "MERGE INTO RD_CHECK_RESULTS_RECORD t USING(SELECT DISTINCT ORGAN_NO,REPORT_DATE,TAB_TYPE,IS_REPAY,REPORT_NO_STR,FORMULA,CHECK_RISK,C_USER,CONTENT,FORMULA_MARK FROM RD_CHECK_RESULTS WHERE ORGAN_NO='"
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
    public List<RdCheckResults> getRdReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
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
    public List<RdCheckResults> getRdReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager) {
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
    public int getRdReportCheckResultCountArea(String brNo, String reportDate, String tabType, String checkRisk, String checkType, String checkArea) {
        Criteria criteria = Cnd.cri();
        criteria.where().and("ORGAN_NO", "in", StrUtil.convertQuoMarksSQL(brNo));
        criteria.where().and("REPORT_DATE", "=", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            criteria.where().and("TAB_TYPE", "=", tabType);
        }
        if (StrUtil.isNotNull(checkRisk)) {
            criteria.where().and("CHECK_RISK", "=", checkRisk);
        }
        if (("1".equals(checkArea))) {
            criteria.where().and("REPORT_NO_STR", "NOT LIKE", "%@%");
        } else if (("2").equals(checkArea)) {
            criteria.where().and("REPORT_NO_STR", "LIKE", "%@%");
        }
        if (StrUtil.isNotNull(checkType)) {
            criteria.where().and("TYPE", "=", checkType);
        }
        return super.count(criteria);
    }

    @Override
    public List<RdCheckResults> getRdReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager, String formulaType, String checkArea) {
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
        //校验范围区分(表内校验,表间校验)
        if (("1".equals(checkArea))) {
            criteria.where().and("REPORT_NO_STR", "NOT LIKE", "%@%");
        } else if (("2").equals(checkArea)) {
            criteria.where().and("REPORT_NO_STR", "LIKE", "%@%");
        }
        if (StrUtil.isNotNull(formulaType)) {
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
    public void insertCheckResultsForYD(String tabCodes, String brNo, String reportDate,
                                        String checkType, String userId, List<RdCheckResults> checkResults,
                                        String formulaType, String checkArea) {
        if (StrUtil.isNotNull(checkArea)) {
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_NO_STR", "IN", StrUtil.convertQuoMarksSQL(tabCodes)).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", checkType).and("C_USER", "=", userId).and("TYPE", "=", "2"));
        } else {
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_NO_STR", "IN", StrUtil.convertQuoMarksSQL(tabCodes)).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", checkType).and("C_USER", "=", userId).and("TYPE", "=", "2"));
        }

        insertResult(checkResults, formulaType);

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
        return this.getListObjectBySql(sql, RdCheckResultsHelper.class);
    }

    @Override
    public void insertCheckResultscs(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResults> checkResults, String formulaType, String checkArea) throws Exception {
        String[] cUsers = new String[4];
        cUsers[0] = "admin";
        cUsers[1] = cUser;
        cUsers[2] = "repay";
        cUsers[3] = "rdformula";
        if (StrUtil.isNotNull(checkArea)) {
            if ("1".equals(checkArea)) {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR", "NOT LIKE", "%@%"));
            } else if ("2".equals(checkArea)) {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers).and("REPORT_NO_STR", "LIKE", "%@%"));
            } else {
                this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
            }
        } else {
            this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));
        }

        insertResultcs(brNo, reportDate, tabType, cUser, checkResults, formulaType);
        insertResultRecord(brNo, reportDate, tabType, formulaType);

    }


    private void insertResultcs(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResults> checkResults, String formulaType) {
        String databaseType =localConfig.getDriver();
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        for (int i = 0; i < checkResults.size(); i++) {
            String sqlStr = "INSERT INTO RD_CHECK_RESULTS(id,ORGAN_NO,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CHECK_RISK,CONTENT,FORMULA_MARK) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CHECK_RISK,@CONTENT,@FORMULA_MARK)";
            Sql sql = Sqls.create(sqlStr);
            String formula = FormulaEncrypt.getFormulaEnctypt(checkResults.get(i).getFormula());
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
        Sql codeStr = Sqls.create("SELECT A.TABCODE FROM RD_TABLE_INFO A INNER JOIN SAM.SYS_BMGL B ON B.BM_CATEGORY =A.TAB_BR_TYPE AND INSTR(A.REPORT_ORGAN_TYPES,B.BM_TYPE)>0 LEFT JOIN RD_TABLE_BASIC_INFO C ON C.TABCODE=A.TABCODE  WHERE A.START_DATE<=@startDate AND A.END_DATE>=@endDate AND A.TAB_TYPE='" + tabType + "' AND B.BM_CODE='" + brNo + "' AND C.STATUS='y'");
        codeStr.params().set("startDate", startDate);
        codeStr.params().set("endDate", reportDate + maxDays);
        codeStr.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> list = new ArrayList<String>();
                while (rs.next())
                    list.add(rs.getString(1));
                return list;
            }
        });

        this.dao().execute(codeStr);
        List<String> codeList = codeStr.getList(String.class);

        RdOperateRecordServiceImpl rdOperateRecordServiceImpl = (RdOperateRecordServiceImpl)rdOperateRecordService;

        for (String tabCode : codeList) {
            RdOperateRecord bfOperateRecord = new RdOperateRecord();
            bfOperateRecord.setId(R.UU16());
            bfOperateRecord.setBmCode(brNo);
            bfOperateRecord.setReportCode(tabCode);
            bfOperateRecord.setOpDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            bfOperateRecord.setOpUser(cUser);
            bfOperateRecord.setReportDate(reportDate);
            int count;
            if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
                count = super.singleInt("SELECT count(1) FROM RD_CHECK_RESULTS WHERE ORGAN_NO='" + brNo + "' AND REPORT_DATE='" + reportDate + "' AND TAB_TYPE='" + tabType + "' AND INSTR(REPORT_NO_STR,'" + tabCode + "')>0");
            } else {
                count = super.singleInt("SELECT count(1) FROM RD_CHECK_RESULTS WHERE ORGAN_NO='" + brNo + "' AND REPORT_DATE='" + reportDate + "' AND TAB_TYPE='" + tabType + "' AND LOCATE('" + tabCode + "',REPORT_NO_STR)>0");
            }
            if (count > 0) {
                bfOperateRecord.setStatusType("C1");
            } else {
                bfOperateRecord.setStatusType("C0");
            }
            //判断校验记录之前是否存在
            RdOperateRecord opRecord = rdOperateRecordServiceImpl.fetch(Cnd.where("BMCODE", "=", brNo).and("REPORTDATE", "=", reportDate).and("REPORTCODE", "=", tabCode).and("STATUSTYPE", "LIKE", "C%"));
            if (opRecord != null) {
                bfOperateRecord.setId(opRecord.getId());
                rdOperateRecordServiceImpl.dao().update(bfOperateRecord);
            } else {
                rdOperateRecordServiceImpl.dao().insert(bfOperateRecord);
            }

        }
    }

    @Override
    public List<RdCheckResults> getFormulaByCon(String brno, String reportDate, String reportType) {
        String sqlstr = "SELECT * FROM SAM.RD_CHECK_RESULTS WHERE ORGAN_NO = '" + brno + "' AND REPORT_DATE = '" + reportDate + "' AND TAB_TYPE = '" + reportType + "' ORDER BY FORMULA";
        Sql sql = Sqls.create(sqlstr);
        return getListBySql(sql);
    }
}
