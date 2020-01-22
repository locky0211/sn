package com.efraiser.test.db.service.sys.systablequery.impl;

import com.alibaba.druid.pool.DruidDataSource;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.systablequery.SysTableQueryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

@Service
public class SysTableQueryServiceImpl extends BaseServiceImpl<Object> implements SysTableQueryService {

    private Logger logger = LoggerFactory.getLogger(SysTableQueryServiceImpl.class);

    @Autowired
    private DruidDataSource druidDataSource;


    @Override
    public HashMap<String, Object> getQueryResult(String sqls) throws Exception {


        ArrayList<String[]> dataList = new ArrayList<String[]>();

        Connection conn = null;
        Statement stmt = null;
        int index = 0;
        try {
            conn = druidDataSource.getConnection();
            stmt = conn.createStatement();

            index = getQueryResult(stmt, sqls, dataList);
        } catch (Exception e) {
            throw e;
        } finally {

            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (Exception e) {
                logger.error("", e);
            }

            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (Exception e) {
                logger.error("", e);
            }
        }

        HashMap<String, Object> lists = new HashMap<>();
        lists.put("maplist", dataList);
        lists.put("index", index);
        return lists;
    }


    private int getQueryResult(Statement stmt, String sqls, ArrayList<String[]> dataList) throws Exception {
        int index = 0;


        String[] sqlList = sqls.split(";");
        String selectSql = "";
        for (String list : sqlList) {
            try {
                if ("select".equalsIgnoreCase(list.substring(0, 6))) {
                    selectSql = list;
                    index++;
                } else {
                    stmt.execute(list);
                    index++;
                }
            } catch (Exception e) {
                logger.error("getQueryResult() error! sql:[" + list + "]", e);
                throw new Exception(e.toString() + ";</br>sql语句执行了" + index + "行");
            }
        }
        if (StrUtil.isNotNull(selectSql)) {
            ResultSet result = stmt.executeQuery(selectSql);
            ResultSetMetaData rsmd = result.getMetaData();
            int colCount = rsmd.getColumnCount();// 获取列数
            String[] columnarr = new String[colCount];
            for (int s = 0; s < colCount; s++) {
                columnarr[s] = rsmd.getColumnName(s + 1);
            }
            dataList.add(columnarr);
            while (result.next()) {
                try {
                    String[] data = new String[rsmd.getColumnCount()];
                    for (int i = 0; i < data.length; i++) {
                        data[i] = result.getString(i + 1);
                    }
                    dataList.add(data);
                } catch (Exception e) {
                    logger.error("getQueryResult() error! ", e);
                }
            }
        }

        return index;
    }

}
