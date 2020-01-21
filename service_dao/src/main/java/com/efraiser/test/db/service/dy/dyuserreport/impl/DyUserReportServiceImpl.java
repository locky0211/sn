package com.efraiser.test.db.service.dy.dyuserreport.impl;

import com.efraiser.test.db.model.dy.DyUserReport;
import com.efraiser.test.db.model.sys.JgyRecord;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyuserreport.DyUserReportService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyUserReportServiceImpl extends BaseServiceImpl<JgyRecord> implements DyUserReportService {


    @Override
    public void deleteReportManage(String tableId, String userId) {
        String sqlStr = "DELETE FROM DY_SH.DY_USER_REPORT WHERE USER_ID = '" + userId + "' AND TABLE_ID = '" + tableId + "'";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(List<DyUserReport> userReportList) {
        this.dao().fastInsert(userReportList);
    }
}
