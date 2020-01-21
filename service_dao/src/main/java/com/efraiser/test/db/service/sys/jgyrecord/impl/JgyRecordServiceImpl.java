package com.efraiser.test.db.service.sys.jgyrecord.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.db.model.sys.JgyRecord;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.jgyrecord.JgyRecordService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
public class JgyRecordServiceImpl extends BaseServiceImpl<JgyRecord> implements JgyRecordService {

    @Autowired
    private SysUserService sysUserService;

    @Override
    public void loginOpJgyRecord(String userId) {
        if (checkJqy(userId)) {// 监管员记录
            JgyRecord record;
            String sqlStr = "SELECT * FROM JGY_RECORD WHERE LOGIN_MONTHS='" + DateUtil.getNow("yyyyMM") + "'";
            List<JgyRecord> jlist = getListObjectBySql(sqlStr, JgyRecord.class);
            if (jlist.isEmpty()) {
                List<String> list = sysUserService.findSysUserbyRole("2");
                for (String id : list) {
                    record = new JgyRecord(id, DateUtil.getNow("yyyyMM"), "0", "0", "0");
                    dao().insert(record);
                }
            } else {
                record = fetchx(userId, DateUtil.getNow("yyyyMM"));
                if (record == null) {
                    record = new JgyRecord(userId, DateUtil.getNow("yyyyMM"), "0", "0", "0");
                    dao().insert(record);
                }
            }

            record = fetchx(userId, DateUtil.getNow("yyyyMM"));
            int count = Integer.parseInt(record.getLoginCount());
            record.setLoginCount(String.valueOf(count + 1));
            dao().update(record);
        }
    }


    @Override
    public Boolean checkJqy(String userId) {

        String sqlstr = "SELECT ROLE_ID FROM SYS_USER_ROLE WHERE USER_ID=@userId ";
        Sql sql = Sqls.create(sqlstr);
        sql.params().set("userId", userId);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getString("ROLE_ID");
                }
                return null;
            }
        });
        dao().execute(sql);
        String role = sql.getString();
        if ("2".equals(role)) {
            return true;
        }
        return false;
    }
}
