package com.efraiser.test.db.service.dy.dycheckmutiresults.impl;

import com.efraiser.test.db.model.dy.DyCheckMutiResults;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckmutiresults.DyCheckMutiResultsService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyCheckMutiResultsServiceImpl extends BaseServiceImpl<DyCheckMutiResults> implements DyCheckMutiResultsService {


   @Override
    public List<String> getTabCodeList(String brNo, String reportDate, String tabType, String DEPARTMENT) {

        StringBuffer sqlStr = new StringBuffer();

        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE IN "+DEPARTMENT+")");
        sqlStr.append(" AND ti.TAB_TYPE = @tabType");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("reportDate", reportDate);
        sql.params().set("tabType", tabType);
        sql.params().set("sysDate", reportDate);

        return super.getListStringBySqlStr(sql);
    }

    @Override
    public void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<DyCheckMutiResults> checkResults) throws Exception {
        String[] cUsers = new String[3];
        cUsers[0] = "admin";
        cUsers[1] = cUser;
        cUsers[2] = "repay";
        this.clear(Cnd.where("ORGAN_NO", "=", brNo).and("REPORT_DATE", "=", reportDate).and("TAB_TYPE", "=", tabType).and("C_USER", "in", cUsers));

        insertResult(checkResults);

    }

    /**
     *
     * 功能描述：插入校验结果
     * @author
     * @date 2017年7月13日
     * @param checkResults
     * @modify log:
     */
    private void insertResult(List<DyCheckMutiResults> checkResults) {
        for(int i=0;i<checkResults.size();i++){
            String sqlStr="INSERT INTO DY.DY_CHECK_MUTI_RESULTS(id,ORGAN_NO,REPORT_DATE,TAB_TYPE,REPORT_NO_STR,FORMULA,C_USER,CONTENT) VALUES(uuid(),@ORGAN_NO,@REPORT_DATE,@TAB_TYPE,@REPORT_NO_STR,@FORMULA,@C_USER,@CONTENT)";
            Sql sql = Sqls.create(sqlStr);
            String formula=checkResults.get(i).getFormula();
            sql.params().set("ORGAN_NO", checkResults.get(i).getOrganNo());
            sql.params().set("REPORT_DATE", checkResults.get(i).getReportDate());
            sql.params().set("TAB_TYPE", checkResults.get(i).getTabType());
            sql.params().set("REPORT_NO_STR", checkResults.get(i).getReportNoStr());
            sql.params().set("FORMULA", formula);
            sql.params().set("C_USER", checkResults.get(i).getcUser());
            sql.params().set("CONTENT", checkResults.get(i).getContent());
            dao().execute(sql);
        }
    }
}
