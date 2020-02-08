package com.efraiser.test.db.service.rd.rdreportmidpcthelper.impl;

import com.efraiser.test.db.model.rd.RdReportMidPctHelper;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdreportmidpcthelper.RdReportMidPctHelperService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RdReportMidPctHelperServiceImpl extends BaseServiceImpl<RdReportMidPctHelper> implements RdReportMidPctHelperService {

    @Override
    public List<RdReportMidPctHelper> getPctHelper() {
        Sql sql = Sqls.create("SELECT tp.TABLE_ID,r.REPORT_ID,t.TABCODE,tp.FIELD_LOCATION "
                + "FROM RD_TABLE_MODEL_PCT tp,RD_TABLE_INFO t,RD_REPORT_INFO r "
                + "WHERE tp.TABLE_ID=t.TABLE_ID AND tp.TABLE_ID=r.TABLE_ID "
                + "ORDER BY tp.TABLE_ID,r.REPORT_ID");
        return super.getListBySql(sql);
    }

    @Override
    public List<RdReportMidPctHelper> getPctHelperByReportId(String reportId) {
        Sql sql = Sqls.create("SELECT tp.TABLE_ID,r.REPORT_ID,t.TABCODE,tp.FIELD_LOCATION "
                + "FROM RD_TABLE_MODEL_PCT tp,RD_TABLE_INFO t,RD_REPORT_INFO r "
                + "WHERE tp.TABLE_ID=t.TABLE_ID AND tp.TABLE_ID=r.TABLE_ID "
                + "AND r.REPORT_ID='" + reportId + "' ORDER BY tp.TABLE_ID,r.REPORT_ID");
        return super.getListBySql(sql);
    }

}
