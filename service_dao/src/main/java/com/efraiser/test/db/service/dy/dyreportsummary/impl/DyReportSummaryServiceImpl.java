package com.efraiser.test.db.service.dy.dyreportsummary.impl;

import com.efraiser.test.common.util.CommUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyReportData;
import com.efraiser.test.db.model.dy.DyReportDataSummary;
import com.efraiser.test.db.model.dy.DyReportInfoSummary;
import com.efraiser.test.db.model.dy.DyTableImportHelper;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dyreportsummary.DyReportSummaryService;

import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.DyTableUtil;
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
public class DyReportSummaryServiceImpl extends BaseServiceImpl<DyReportDataSummary> implements DyReportSummaryService {

    @Override
    public int noImportReport(String bmCode, String reportDate, String tabType) {
        SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode);
        String sqlStr = "";
        sqlStr += "SELECT count(*) FROM(";
        sqlStr += " SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri";
        sqlStr += " ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE='" + reportDate + "' AND ri.BR_NO='" + bmCode + "')";
        sqlStr += " WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE='" + bmgl.getBmType() + "')";
        sqlStr += " AND ti.TAB_TYPE='" + tabType + "'";
        sqlStr += " AND ti.TAB_BR_TYPE='" + bmgl.getBmCategory() + "'";
        sqlStr += " AND '" + CommUtil.getSysDateByReportDate(reportDate) + "' BETWEEN ti.start_date AND ti.end_date";
        sqlStr += " AND ti.TABCODE NOT IN ('G1301','G1302','G1303','G1304','G1401','G1402','G1403','G1500','G2300','G2400')";

        sqlStr += ") t WHERE t.row_num=1 AND t.report_id IS NULL ";
        return singleInt(sqlStr);
    }

    @Override
    public List<DyReportData> getRowNum(String reportDate, String reportId) {
        String date = reportDate.substring(0, 4);
        String sqlStr = "SELECT REPORT_ROW_NUM FROM DY.DY_REPORT_DATA_" + date + " WHERE REPORT_ID='" + reportId + "'";
        return super.getListObjectBySql(sqlStr, DyReportData.class);
    }

    @Override
    public void saveDate(DyReportDataSummary rdpd) {
        super.dao().fastInsert(rdpd);
    }

    @Override
    public DyReportDataSummary getData(String reportDate, String reportId, int reportRowNum) {
        String date = reportDate.substring(0, 4);
        String sqlStr = "SELECT * FROM DY.DY_REPORT_DATA_" + date + " WHERE REPORT_ID='" + reportId + "' and REPORT_ROW_NUM = @reportRowNum";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("reportRowNum", reportRowNum);
        return getObjectBySql(sql, null, null);
    }


    @Override
    public void saveReportInfo(DyReportInfoSummary reportInfo) {
        super.dao().fastInsert(reportInfo);
    }

    @Override
    public Object getDyTableInfoListByBrNo(String brNo, String tabType, String reportDate, String flag) {
        flag = "add";
        String[] brnoa = brNo.split(",");
        String brNos = "";
        for (int i = 0; i < brnoa.length; i++) {
            brNos = brnoa[i];
        }
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNos);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO_SUMMARY ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        sqlStr.append(" AND ti.TAB_BR_TYPE=@tabBrType");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(" AND ti.TABCODE NOT IN ('G1301','G1302','G1303','G1304','G1401','G1402','G1403','G1500','G2300','G2400')");

        if ("repay".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num>1 OR t.start_date='" + reportDate + "01'");
        } else if ("add".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num=1");
        } else {
            sqlStr.append(") t");
        }
        sqlStr.append("   ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, DyTableImportHelper.class);
    }

    @Override
    public List<DyTableImportHelper> getAllReporIdtList(String bmCodes, String reportDate, String tableId) {
        String sqlStr = "SELECT * FROM DY.DY_REPORT_INFO WHERE REPORT_DATE='" + reportDate + "' AND BR_NO IN " + bmCodes + " and table_Id='" + tableId + "' and ERROR_MSG IS NULL";
        return super.getListObjectBySql(sqlStr, DyTableImportHelper.class);
    }

    @Override
    public String getTableId(String reportId) {
        String sql = "SELECT TABLE_ID FROM DY.DY_REPORT_INFO WHERE REPORT_ID='" + reportId + "'";
        return singleString(sql);
    }

    @Override
    public Map<String, String> doInitDataMap(String tableId, String reportId, String reportDate) {
        String[] querySqls = DyTableModelCache.getModelQuerySqlStr(tableId).split(";");
        final Map<String, String> dataMap = new HashMap<String, String>();
        for (String sqlStr : querySqls) {
            Sql sql = Sqls.create(sqlStr);
            sql.vars().set("reportDate", "SUMMARY");
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
                            String key = rowNum + "_" + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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
    public void delReportInfo(String tableId3, String brNo, String reportDate) {
        String sqlStr = "DELETE FROM DY.DY_REPORT_INFO_SUMMARY WHERE TABLE_ID='" + tableId3 + "' AND BR_NO='" + brNo + "' AND REPORT_DATE='" + reportDate + "'";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public int reportCount(String tableId3, String brNo, String reportDate) {
        String sqlStr = "SELECT COUNT(*) FROM DY.DY_REPORT_INFO_SUMMARY WHERE TABLE_ID='" + tableId3 + "' AND BR_NO='" + brNo + "' AND REPORT_DATE='" + reportDate + "'";
        return singleInt(sqlStr);
    }

    @Override
    public List<String> getTabCodeList(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {
        String tabBrType = "";
        String organType = "";
        String bmCode[] = brNo.split(",");
        for (int i = 0; i < bmCode.length; i++) {
            if (i == bmCode.length - 1) {
                SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode[i]);
                tabBrType += "'" + bmgl.getBmCategory() + "'";
                organType += "'" + bmgl.getBmType() + "'";
            } else {
                SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode[i]);
                tabBrType += "'" + bmgl.getBmCategory() + "',";
                organType += "'" + bmgl.getBmType() + "',";

            }
        }
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO_SUMMARY ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE in( " + organType + " ))");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND ti.TAB_BR_TYPE in( " + tabBrType + " )");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(" AND tI.TABCODE NOT IN ('G1301','G1302','G1303','G1304','G1401','G1402','G1403','G1500','G2300','G2400')");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        if (include) {
            sql.vars().set("tabType", "ti.tab_type in (" + DyCheckUtil.getTabtypesForCheck(tabType) + ")");
        } else {
            sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
        }

        sql.params().set("brNo", brNo);
        sql.params().set("reportDate", reportDate);

        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));

        return super.getListStringBySqlStr(sql);
    }

    @Override
    public int getReportInfoCount(String brNo, String reportDate, String tabType, List<String> tabCodes) {
        String sqlStr = "SELECT COUNT(*) FROM DY.DY_REPORT_INFO_SUMMARY ri WHERE  ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo  AND ri.TABLE_ID IN (SELECT TABLE_ID FROM DY.DY_TABLE_INFO ti WHERE ti.TAB_TYPE=@tabType AND ti.TABCODE in ($conn))";
        Sql sql = Sqls.create(sqlStr);
        sql.vars().set("conn", StrUtil.convertJoin(tabCodes, null));
        sql.params().set("brNo", brNo);
        sql.params().set("reportDate", reportDate);
        sql.params().set("tabType", tabType);
        sql.setCallback(new SqlCallback() {
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs != null && rs.next()) {
                    return rs.getInt(1);
                } else {
                    return 0;
                }
            }
        });
        dao().execute(sql);
        return sql.getInt();
    }


    @Override
    public List<DyTableImportHelper> getDyTableInfoListByBmCodes(String brNo, String tabType, String reportDate, String flag) throws Exception {
        String name = "";
        String tabBrType = "'法人分支',";
        String organType = "";
        if (brNo.contains(",")) {
            String bmCode[] = brNo.split(",");
            for (int i = 0; i < bmCode.length; i++) {
                if (i == bmCode.length - 1) {
                    SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode[i]);
                    name += SysBmglCache.getBmName(bmCode[i]);
                    tabBrType += "'" + bmgl.getBmCategory() + "'";
                    organType += "'" + bmgl.getBmType() + "'";
                } else {
                    SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode[i]);
                    name += "" + SysBmglCache.getBmName(bmCode[i]) + ",";
                    tabBrType += "'" + bmgl.getBmCategory() + "',";
                    organType += "'" + bmgl.getBmType() + "',";

                }
            }
        } else {
            SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
            name += "" + SysBmglCache.getBmName(brNo) + "";
            tabBrType += "'" + bmgl.getBmCategory() + "'";
            organType += "'" + bmgl.getBmType() + "'";
        }
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT distinct t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO_SUMMARY ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO ='" + brNo + "')");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE in (" + organType + "))");
        sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        sqlStr.append(" AND ti.TAB_BR_TYPE in( " + tabBrType + " )");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t WHERE t.row_num=1");
        sqlStr.append("   AND t.TABCODE NOT IN ('G1301','G1302','G1303','G1304','G1401','G1402','G1403','G1500','G2300','G2400')");
        sqlStr.append("   ORDER BY  t.TABCODE");

        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, DyTableImportHelper.class);
    }


    @Override
    public List<DyTableImportHelper> getDyTableInfoListByBmCode(List<String> bmCode, String tabType, String reportDate, String flag) throws Exception {
        String name = "";
        String tabBrType = "'法人分支',";
        String organType = "";
        //String bmCode[]=brNo.split(",");
        for (int i = 0; i < bmCode.size(); i++) {
            if (i == bmCode.size() - 1) {
                SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode.get(i));
                name += "'" + bmCode.get(i) + "'";
                tabBrType += "'" + bmgl.getBmCategory() + "'";
                organType += "'" + bmgl.getBmType() + "'";
            } else {
                SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode.get(i));
                name += "'" + bmCode.get(i) + "',";
                tabBrType += "'" + bmgl.getBmCategory() + "',";
                organType += "'" + bmgl.getBmType() + "',";

            }
        }
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT distinct t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO in(" + name + "))");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE in (" + organType + "))");
        sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        sqlStr.append(" AND ti.TAB_BR_TYPE in( " + tabBrType + " )");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        if ("repay".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num>1 OR t.start_date='" + reportDate + "01'");
        } else if ("add".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num=1");
        } else {
            sqlStr.append(") t");
        }
        sqlStr.append("   AND t.TABCODE NOT IN ('G1301','G1302','G1303','G1304','G1401','G1402','G1403','G1500','G2300','G2400')");
        sqlStr.append("   ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, DyTableImportHelper.class);
    }

    @Override
    public List<DyReportDataSummary> getDate(String reportId) {
        String sql = "SELECT * FROM DY.DY_REPORT_DATA_SUMMARY WHERE REPORT_ID='" + reportId + "'ORDER BY REPORT_ROW_NUM ";
        return this.getListObjectBySql(sql, DyReportDataSummary.class);
    }


    @Override
    public List<DyTableImportHelper> getDyReportBrno(String table_id, String brNo, String tabType, String reportDate) throws Exception {
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t WHERE t.row_num=1");
        sqlStr.append(" AND t.TABLE_ID=@table_id");
        sqlStr.append(" AND (t.REPORT_ID IS NULL");
        sqlStr.append(" OR t.ERROR_MSG IS NOT NULL)");
        sqlStr.append("   ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("table_id", table_id);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, DyTableImportHelper.class);
    }


}
