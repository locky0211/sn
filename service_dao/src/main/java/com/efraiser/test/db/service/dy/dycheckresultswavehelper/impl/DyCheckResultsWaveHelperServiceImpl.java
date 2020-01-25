package com.efraiser.test.db.service.dy.dycheckresultswavehelper.impl;

import com.efraiser.test.db.model.dy.DyCheckResultsWaveHelper;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckresultswavehelper.DyCheckResultsWaveHelperService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

@Service
public class DyCheckResultsWaveHelperServiceImpl   extends BaseServiceImpl<DyCheckResultsWaveHelper> implements DyCheckResultsWaveHelperService {

    @Override
    public DyCheckResultsWaveHelper fetchDyCheckResultsForViewCS(String id) {
        String sqlStr = "SELECT  A.ID,GET_BM_NAME(A.ORGAN_NO) AS ORGAN_NAME,A.ORGAN_NO,A.REPORT_DATE,A.REPORT_RATE,GET_GGZD_NAME(A.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,FORMULA,A.REPORT_NO_STR,GET_GGZD_NAME(A.CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK,A.VALUE,A.D_VALUE,A.FORMULA_MARK,A.C_USER,B.VALUE_AREA FROM DY.DY_CHECK_RESULTS_WAVE A LEFT JOIN DY.DY_CHECK_FORMULA_WAVE B ON A.FORMULA_ID=B.ID WHERE a.id=@id";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        return getObjectBySql(sql, null, null);
    }
}
