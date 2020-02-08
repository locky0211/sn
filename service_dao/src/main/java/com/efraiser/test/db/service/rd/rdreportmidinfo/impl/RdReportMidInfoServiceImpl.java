package com.efraiser.test.db.service.rd.rdreportmidinfo.impl;

import com.efraiser.test.db.model.rd.RdReportMidInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdreportmidinfo.RdReportMidInfoService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RdReportMidInfoServiceImpl  extends BaseServiceImpl<RdReportMidInfo> implements RdReportMidInfoService {

    @Override
    public List<RdReportMidInfo> getReportMidInfoList() {
        Sql sql = Sqls.create("SELECT * FROM DW.RD_REPORT_MID_INFO");
        return super.getListBySql(sql);
    }
}
