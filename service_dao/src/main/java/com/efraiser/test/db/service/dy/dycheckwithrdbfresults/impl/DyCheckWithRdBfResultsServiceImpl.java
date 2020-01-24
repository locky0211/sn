package com.efraiser.test.db.service.dy.dycheckwithrdbfresults.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckWithRdBfResults;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckwithrdbfresults.DyCheckWithRdBfResultsService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
public class DyCheckWithRdBfResultsServiceImpl extends BaseServiceImpl<DyCheckWithRdBfResults> implements DyCheckWithRdBfResultsService {

    @Override
    public void insertResults(String brNoDy, String brNoRd, String brNoBf, String reportDate, String tabType, List<DyCheckWithRdBfResults> checkResults) {
        this.clear(Cnd.where("ORGAN_NO_DY", "=", brNoDy).and("ORGAN_NO_RD", "=", brNoRd).and("ORGAN_NO_BF", "=", brNoBf).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType));
        for (int i = 0; i < checkResults.size(); i++) {
            String sqlStr = "INSERT INTO DY.DY_CHECK_WITH_RD_BF_RESULTS(id,ORGAN_NO_DY,ORGAN_NO_RD,ORGAN_NO_BF,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CONTENT,FORMULA_MARK) VALUES(uuid(),@ORGAN_NO_DY,@ORGAN_NO_RD,@ORGAN_NO_BF,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CONTENT,@FORMULA_MARK)";
            Sql sql = Sqls.create(sqlStr);
            String formula = checkResults.get(i).getFormula();
            sql.params().set("ORGAN_NO_DY", checkResults.get(i).getOrganNoDy());
            if (checkResults.get(i).getOrganNoRd() != "") {
                sql.params().set("ORGAN_NO_RD", checkResults.get(i).getOrganNoRd());
            } else {
                sql.params().set("ORGAN_NO_RD", "");
            }
            if (checkResults.get(i).getOrganNoBf() != "") {
                sql.params().set("ORGAN_NO_BF", checkResults.get(i).getOrganNoBf());
            } else {
                sql.params().set("ORGAN_NO_BF", "");
            }
            sql.params().set("REPORT_DATE", checkResults.get(i).getReportDate());
            sql.params().set("TAB_TYPE", checkResults.get(i).getTabType());
            sql.params().set("REPORT_NO_STR", checkResults.get(i).getReportNoStr());
            sql.params().set("FORMULA", formula);
            sql.params().set("C_USER", checkResults.get(i).getcUser());
            sql.params().set("CONTENT", checkResults.get(i).getContent());
            sql.params().set("FORMULA_MARK", checkResults.get(i).getFormulaMark());
            this.dao().execute(sql);
        }
    }

    @Override
    public List<DyCheckWithRdBfResults> getDyCheckWithRdBfResults(
            String brNoDy, String brNoRd, String brNoBf, String reportDate,
            String tabType, String userId) {
        String sqlStr = "Select ID,GET_BM_NAME(ORGAN_NO_DY) AS ORGAN_NAME_DY,GET_BM_NAME(ORGAN_NO_RD) AS ORGAN_NAME_RD,ORGAN_NO_DY,ORGAN_NO_RD,ORGAN_NO_BF,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,CONTENT,C_USER from DY.DY_CHECK_WITH_RD_BF_RESULTS where $brNoDy $brNoRd $brNoBf and REPORT_DATE=@reportDate  $tabType  ORDER BY ORGAN_NO_DY,REPORT_NO_STR,C_USER ";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(brNoDy)) {
            if (brNoDy.contains(",")) {
                sql.vars().set("brNoDy", "ORGAN_NO_DY in(" + StrUtil.convertQuoMarksSQL(brNoDy) + ")");
            } else {
                sql.vars().set("brNoDy", "ORGAN_NO_DY ='" + brNoDy + "'");
            }
        } else {
            sql.vars().set("brNoDy", "1=1");
        }

        if (StrUtil.isNotNull(brNoRd)) {
            if (brNoRd.contains(",")) {
                sql.vars().set("brNoRd", "AND ORGAN_NO_RD in(" + StrUtil.convertQuoMarksSQL(brNoRd) + ")");
            } else {
                sql.vars().set("brNoRd", "AND ORGAN_NO_RD ='" + brNoRd + "'");
            }
        }

//		if(StrUtil.isNotNull(brNoBf)){
//			if (brNoBf.contains(",")) {
//				sql.vars().set("brNoBf", "AND ORGAN_NO_BF in(" + StrUtil.convertQuoMarksSQL(brNoBf) + ")");
//			} else {
//				 sql.vars().set("brNoBf", "AND ORGAN_NO_BF ='" + brNoBf + "'");
//			}
//		}

        sql.params().set("reportDate", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND TAB_TYPE='" + tabType + "'");
        }

        return this.getListBySql(sql);
    }

    @Override
    public DyCheckWithRdBfResults fetchDyCheckResultsForView(String id) {
        String sqlStr = "Select ID,GET_BM_NAME(ORGAN_NO_DY) AS ORGAN_NAME_DY,GET_BM_NAME(ORGAN_NO_RD) AS ORGAN_NAME_RD,GET_BM_NAME(ORGAN_NO_BF) AS ORGAN_NAME_BF,ORGAN_NO_DY,ORGAN_NO_RD,ORGAN_NO_BF,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,CONTENT,C_USER,FORMULA_MARK from DY.DY_CHECK_WITH_RD_BF_RESULTS WHERE id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public List<DyCheckWithRdBfResults> getDyCheckWithRdBfResultsRecord(
            String brNoDy, String brNoRd, String brNoBf, String reportDate,
            String tabType, String userId) {
        String sqlStr = "Select ID,GET_BM_NAME(ORGAN_NO_DY) AS ORGAN_NAME_DY,GET_BM_NAME(ORGAN_NO_RD) AS ORGAN_NAME_RD,GET_BM_NAME(ORGAN_NO_BF) AS ORGAN_NAME_BF,ORGAN_NO_DY,ORGAN_NO_RD,ORGAN_NO_BF,REPORT_DATE,GET_GGZD_NAME(TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,REPORT_NO_STR,CONTENT,C_USER,FORMULA_MARK from DY.DY_CHECK_WITH_RD_BF_RESULTS where $brNo $brNoRd $brNoBf  and REPORT_DATE=@reportDate and c_user=@cUser  $tabType  ORDER BY ORGAN_NO_DY,REPORT_NO_STR,C_USER,FORMULA ";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(brNoDy)) {
            if (brNoDy.contains(",")) {
                sql.vars().set("brNo", "ORGAN_NO_DY in(" + StrUtil.convertQuoMarksSQL(brNoDy) + ")");
            } else {
                sql.vars().set("brNo", "ORGAN_NO_DY ='" + brNoDy + "'");
            }
        } else {
            sql.vars().set("brNo", "AND 1=1");
        }
        if (StrUtil.isNotNull(brNoRd)) {
            if (brNoRd.contains(",")) {
                sql.vars().set("brNoRd", " AND ORGAN_NO_RD in(" + StrUtil.convertQuoMarksSQL(brNoRd) + ")");
            } else {
                sql.vars().set("brNoRd", "AND ORGAN_NO_RD ='" + brNoRd + "'");
            }
        }
        if (StrUtil.isNotNull(brNoBf)) {
            if (brNoBf.contains(",")) {
                sql.vars().set("brNoBf", "AND ORGAN_NO_DY in(" + StrUtil.convertQuoMarksSQL(brNoBf) + ")");
            } else {
                sql.vars().set("brNoBf", "AND ORGAN_NO_BF ='" + brNoBf + "'");
            }
        }
        sql.params().set("cUser", userId);
        sql.params().set("reportDate", reportDate);
        if (StrUtil.isNotNull(tabType)) {
            sql.vars().set("tabType", " AND TAB_TYPE='" + tabType + "'");
        }

        return this.getListBySql(sql);
    }

    @Override
    public void insertCheckResults(List<DyCheckWithRdBfResults> checkResults) {
        for (int i = 0; i < checkResults.size(); i++) {
            String sqlStr = "INSERT INTO DY.DY_CHECK_WITH_RD_BF_RESULTS(id,ORGAN_NO_DY,ORGAN_NO_RD,ORGAN_NO_BF,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CONTENT,FORMULA_MARK) VALUES(uuid(),@ORGAN_NO_DY,@ORGAN_NO_RD,@ORGAN_NO_BF,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CONTENT,@FORMULA_MARK)";
            Sql sql = Sqls.create(sqlStr);
            String formula = checkResults.get(i).getFormula();
            sql.params().set("ORGAN_NO_DY", checkResults.get(i).getOrganNoDy());
            if (checkResults.get(i).getOrganNoRd() != "") {
                sql.params().set("ORGAN_NO_RD", checkResults.get(i).getOrganNoRd());
            } else {
                sql.params().set("ORGAN_NO_RD", "null");
            }
            if (checkResults.get(i).getOrganNoBf() != "") {
                sql.params().set("ORGAN_NO_BF", checkResults.get(i).getOrganNoBf());
            } else {
                sql.params().set("ORGAN_NO_BF", "null");
            }
            sql.params().set("REPORT_DATE", checkResults.get(i).getReportDate());
            sql.params().set("TAB_TYPE", checkResults.get(i).getTabType());
            sql.params().set("FORMULA", formula);
            sql.params().set("C_USER", checkResults.get(i).getcUser());
            sql.params().set("CONTENT", checkResults.get(i).getContent());
            sql.params().set("FORMULA_MARK", checkResults.get(i).getFormulaMark());
            sql.params().set("REPORT_NO_STR", checkResults.get(i).getReportNoStr());
            this.dao().execute(sql);
        }

    }


    @Override
    public String getZdNameByZdValue(String zdValue) {
        String sqlStr = "SELECT DISTINCT ZD_NAME FROM SYS_GGZD WHERE ZD_VALUE=@zdValue ";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("zdValue", zdValue);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getString(1);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return sql.getString();
    }

}
