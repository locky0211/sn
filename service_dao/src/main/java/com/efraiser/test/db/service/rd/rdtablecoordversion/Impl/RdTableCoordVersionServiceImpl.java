package com.efraiser.test.db.service.rd.rdtablecoordversion.Impl;

import com.efraiser.test.db.model.rd.RdTableCoordVersion;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdtablecoordversion.RdTableCoordVersionService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RdTableCoordVersionServiceImpl extends BaseServiceImpl<RdTableCoordVersion> implements RdTableCoordVersionService<RdTableCoordVersion> {

    @Override
    public void deleteRdTableCoordVersion(String id) {
        this.clear(Cnd.where("id", "=", id));
    }

    @Override
    public RdTableCoordVersion updateRdTableCoordVersionStatus(String id, String status) {
        RdTableCoordVersion rtb = this.fetch(id);
        rtb.setValidFlag(status);
        super.dao().updateIgnoreNull(rtb);
        return rtb;
    }

    @Override
    public void saveOrUpdateTableInfo(RdTableCoordVersion record, String model) throws Exception {
        if (model.equals("edit")) {
            this.dao().update(record);
        } else {
            record.setValidFlag("1");
            this.dao().insert(record);
        }
    }

    @Override
    public List<RdTableCoordVersion> getAll() {
        String sqlStr = "SELECT * FROM RdTableCoordVersion";
        List<RdTableCoordVersion> list = super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public Map<String, String> getUpCoordinateList(String tabCode) {
        final Map<String, String> map = new HashMap<String, String>();
        Sql sql = Sqls.create("SELECT OLD_VERSION_NO||'_'||OLD_LOCATE,NEW_VERSION_NO||'_'||NEW_LOCATE FROM SAM.RD_TABLE_COORD_VERSION WHERE TABCODE='" + tabCode + "'");
        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                while (rs.next()) {
                    String key = rs.getString(1);
                    String value = rs.getString(2);
                    map.put(key, value);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return map;
    }

    @Override
    public Map<String, String> getDownCoordinateList(String tabCode) {
        final Map<String, String> map = new HashMap<String, String>();
        Sql sql = Sqls.create("SELECT NEW_VERSION_NO||'_'||NEW_LOCATE,OLD_VERSION_NO||'_'||OLD_LOCATE FROM SAM.RD_TABLE_COORD_VERSION WHERE TABCODE='" + tabCode + "'");
        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                while (rs.next()) {
                    String key = rs.getString(1);
                    String value = rs.getString(2);
                    map.put(key, value);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return map;
    }
}
