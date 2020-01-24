package com.efraiser.test.db.service.dy.dycheckwithRrdbfresultsrecord.impl;

import com.efraiser.test.db.model.dy.DyCheckWithRdBfResultsRecord;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dycheckwithRrdbfresultsrecord.DyCheckWithRdBfResultsRecordService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class DyCheckWithRdBfResultsRecordServiceImpl  extends BaseServiceImpl<DyCheckWithRdBfResultsRecord> implements DyCheckWithRdBfResultsRecordService {

    @Override
    public String findRemarksById(String organNoDy, String organNoRd,
                                  String organNoBf, String reportDate,
                                  String formula) {
        String sqlStr="SELECT FORMULA_MARK FROM DY.DY_CHECK_WITH_RD_BF_RESULTS_RECORD WHERE ORGAN_NO_DY=@organNoDy AND ORGAN_NO_RD=@organNoRd AND ORGAN_NO_Bf=@organNoBf AND REPORT_DATE=@reportDate  AND FORMULA=@attention";
        Sql sql= Sqls.create(sqlStr);
        sql.params().set("organNoDy",organNoDy);
        sql.params().set("organNoRd",organNoRd);
        sql.params().set("organNoBf",organNoBf);
        sql.params().set("reportDate",reportDate );
        sql.params().set("attention",formula);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if(rs.next()){
                    return rs.getString(1);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return sql.getString();
    }

}
