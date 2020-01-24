package com.efraiser.test.db.service.rd.rdreportdata.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.RdReportData;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.RdTableModelCache;
import com.efraiser.test.db.service.rd.rdreportdata.RdReportDataService;
import com.efraiser.test.db.util.RdTableUtil;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class RdReportDataServiceImpl extends BaseServiceImpl<RdReportData> implements RdReportDataService {

    @Override
    public Map<String, String> doInitDataMap(String tableId, String reportId, String reportDate) {
        String querySqlStr= RdTableModelCache.getModelQuerySqlStr(tableId);
        String[] querySqls = querySqlStr.split(";");
        final Map<String, String> dataMap = new HashMap<String, String>();
        for (String sqlStr : querySqls) {
            Sql sql = Sqls.create(sqlStr);
            sql.vars().set("reportDate", reportDate.substring(0, 4));
            sql.params().set("reportId", reportId);
            sql.setCallback(new SqlCallback() {
                @Override
                public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                    ResultSetMetaData rSmd = rs.getMetaData();
                    int colCount = rSmd.getColumnCount();
                    while (rs.next()) {
                        String rowNum = rs.getString(1);
                        for (int j = 2; j <= colCount; j++) {// 循环装载列
                            String value = rs.getString(j);
                            if (StrUtil.isNull(value)) {
                                continue;
                            }
                            String key = rowNum + "_" + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                            dataMap.put(key, value);
                        }
                    }
                    return null;
                }
            });
            dao().execute(sql);
        }
        return dataMap;
    }

    @Override
    public List<RdReportData> getReportDataList(String tableId, String reportDate, String brNo, String dateType) {
        Sql sql = Sqls
                .create("SELECT * FROM RD_REPORT_DATA_$rdDate rd WHERE EXISTS( SELECT * FROM RD_REPORT_INFO ri WHERE rd.REPORT_ID=ri.REPORT_ID AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo AND ri.TABLE_ID=@tableId AND ri.DATA_TYPE=@dataType)");
        sql.vars().set("rdDate", reportDate.substring(0, 4));
        sql.params().set("tableId", tableId);
        sql.params().set("reportDate", reportDate);
        sql.params().set("brNo", brNo);
        sql.params().set("dataType", dateType);
        return super.getListBySql(sql);
    }

    @Override
    public void updateValue(String reportId, String[] area, double changeValue, String date) {
        Sql sql=Sqls.create("UPDATE RD_REPORT_DATA_$rdDate SET VALUE_$con="+changeValue+" WHERE REPORT_ID='"+reportId+"'and REPORT_ROW_NUM="+area[1]+"");
        sql.vars().set("rdDate",date);
        sql.vars().set("con",area[2]);
        dao().execute(sql);
    }


    @Override
    public List<RdReportData> getReportDataListToDownload(String reportId,String reportDate) {
        Sql sql=Sqls.create("SELECT * FROM RD_REPORT_DATA_$rdDate WHERE REPORT_ID='"+reportId+"'");
        sql.vars().set("rdDate", reportDate.substring(0, 4));
        return super.getListBySql(sql);
    }

    @Override
    public Map<String, String> getRdDataMap(List<String> tabCodes,String reportDate,final Map<String, String> dataMap) {
        for(final String tabCode:tabCodes){
            String sqlStr = "select * from SAM.RD_REPORT_DATA_"+ reportDate.substring(0,4)+ " c join (select report_id from sam.rd_report_info a join sam.rd_table_info b on a.table_id=b.table_id where tabcode=@tabcode) t on t.report_id= c.report_id";
            Sql sql = Sqls.create(sqlStr);
            sql.params().set("tabcode", tabCode);
            sql.setCallback(new SqlCallback() {

                @Override
                public Object invoke(Connection conn, ResultSet rs, Sql sql)
                        throws SQLException {
                    ResultSetMetaData rSmd = rs.getMetaData();
                    int colCount = rSmd.getColumnCount();
                    while(rs.next()){
                        String rowNum = rs.getString(2);
                        for(int j = 3; j <= colCount; j++){
                            String value = rs.getString(j);
                            if (StrUtil.isNull(value)) {
                                continue;
                            }

                            String key = rowNum + "_" + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                            System.err.println("rowNum行数:"+rowNum);
                            System.err.println("key值："+key);
                            dataMap.put(key, value);
                        }
                    }
                    return null;
                }
            });
            dao().execute(sql);
        }
        return dataMap;
    }

    @Override
    public void deleteByRowNum(String reportDate, int rowNum) {
        Sql sql=Sqls.create("DELETE FROM SAM.RD_REPORT_DATA_"+ reportDate.substring(0,4)+ " WHERE REPORT_ROW_NUM = "+ rowNum +"");
        dao().execute(sql);
    }

}
