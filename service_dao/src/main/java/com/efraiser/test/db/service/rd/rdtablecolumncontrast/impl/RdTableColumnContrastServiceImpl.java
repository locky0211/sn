package com.efraiser.test.db.service.rd.rdtablecolumncontrast.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.RdTableColumnContrast;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.rdtablecolumncontrast.RdTableColumnContrastService;
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
public class RdTableColumnContrastServiceImpl extends BaseServiceImpl<RdTableColumnContrast> implements RdTableColumnContrastService {


    @Override
    public List<Integer> getColNames(String tableId, Integer part, List<Integer> valueCols) {
        Sql sql = Sqls.create("SELECT FILE_INDEX FROM RD_TABLE_COLUMN_CONTRAST WHERE TABLE_ID=@tableId AND PART_NUM=@partNum AND COL_NUM IN ($colNums)");
        sql.params().set("tableId", tableId);
        sql.params().set("partNum", part);
        sql.vars().set("colNums", StrUtil.convertJoinInteger(valueCols, null));
        return super.getListIntegerBySqlStr(sql);
    }

    @Override
    public Map<String, String> getColNumMap(String tableId) {
        Sql sql = Sqls.create("SELECT PART_NUM,COL_NUM,FILE_INDEX FROM RD_TABLE_COLUMN_CONTRAST WHERE TABLE_ID=@tableId");
        sql.params().set("tableId", tableId);
        final Map<String, String> dataMap = new HashMap<String, String>();
        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                while (rs.next()) {
                    dataMap.put(rs.getString(1) + "_" + rs.getString(3), rs.getString(2));
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return dataMap;
    }

   @Override
    public Map<String, String> getFileNumMap(String tableId) {
        Sql sql = Sqls.create("SELECT PART_NUM,COL_NUM,FILE_INDEX FROM RD_TABLE_COLUMN_CONTRAST WHERE TABLE_ID=@tableId");
        sql.params().set("tableId", tableId);
        final Map<String, String> dataMap = new HashMap<String, String>();
        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                while (rs.next()) {
                    dataMap.put(rs.getString(1) + "_" + rs.getString(2), rs.getString(3));
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return dataMap;
    }

    @Override
    public List<RdTableColumnContrast> getRdTableColumnContrastList(String tableId, int partNum) {
        return this.query(Cnd.where("partNum", "=", partNum).and("tableId", "=", tableId), null);
    }

    @Override
    public boolean isCell(String tableId, int part_num, int col_num) {
        int count = this.count(Cnd.where("TABLE_ID", "=", tableId).and("PART_NUM", "=", part_num).and("FILE_INDEX","=",col_num-1));
        if (count > 0) {
            return true;
        }
        return false;
    }

    @Override
    public List<RdTableColumnContrast> getAll()
    {
        String sqlStr = "SELECT * FROM RD_TABLE_COLUMN_CONTRAST";
        List<RdTableColumnContrast> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr="DELETE FROM RD_TABLE_COLUMN_CONTRAST";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(RdTableColumnContrast item) {
        dao().insert(item);
    }

}
