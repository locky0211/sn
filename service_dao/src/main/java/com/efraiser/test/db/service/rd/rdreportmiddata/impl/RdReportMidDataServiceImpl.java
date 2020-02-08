package com.efraiser.test.db.service.rd.rdreportmiddata.impl;

import com.efraiser.test.db.model.rd.RdReportMidData;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdreportmiddata.RdReportMidDataService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RdReportMidDataServiceImpl extends BaseServiceImpl<RdReportMidData> implements RdReportMidDataService {

  @Override
    public List<RdReportMidData> getRdReportMidDataList(String reportId) {
        Sql sql = Sqls.create("SELECT * FROM DW.RD_REPORT_MID_DATA WHERE REPORT_ID=@reportId ORDER BY INTEGER(ROWID),INTEGER(COLID)");
        sql.params().set("reportId", reportId);
        return super.getListBySql(sql);
    }

}
