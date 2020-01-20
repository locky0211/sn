package com.efraiser.test.db.service.rd.rdreprotinfo.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.vo.NutzCallbackObject;
import com.efraiser.test.db.model.rd.RdOperateRecord;
import com.efraiser.test.db.model.rd.RdReportData;
import com.efraiser.test.db.model.rd.RdReportInfo;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.RdTableModelCache;
import com.efraiser.test.db.service.rd.rdreprotinfo.RdRepordService;
import com.efraiser.test.db.service.rd.rdtablecoordversion.RdTableCoordVersionService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtableinfo.impl.RdTableInfoServiceImpl;
import com.efraiser.test.db.service.rd.rdtablemodelpct.RdTableModelPCTService;
import com.efraiser.test.db.util.RdTableUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.TableName;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.*;

@Service
public class RdRepordServiceImpl extends BaseServiceImpl<RdReportInfo> implements RdRepordService<RdReportInfo> {

    @Autowired
    private RdTableInfoService rdTableInfoService;

    @Autowired
    private RdTableModelPCTService rdTableModelPCTService;

    @Autowired
    private RdTableCoordVersionService rdTableCoordVersionService;

    public RdTableInfoService getRdTableInfoService() {
        return rdTableInfoService;
    }

    public void setRdTableInfoService(RdTableInfoService rdTableInfoService) {
        this.rdTableInfoService = rdTableInfoService;
    }

    @Override
    public void initRdReportData(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag,
                                 final Map<String, String> dataMap, List<String> pctCellLists) throws Exception {
        final NutzCallbackObject nco = new NutzCallbackObject();
        String isRepay = "";
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = RdTableUtil.getLastReportDate(reportDate, tabType);
            nco.setField1("$");
        } else if ("2".equals(flag)) {
            reportDate = RdTableUtil.getReportDateEndOfYear(reportDate);
            nco.setField1("@");
        } else if ("3".equals(flag)) {
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("4".equals(flag)) {
            isRepay = "true";
            nco.setField1("^");
        } else if ("5".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("6".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("7".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("8".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("€");
            }
        } else if ("9".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("10".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        } else if ("11".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("12".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        }

        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoService.getRdTableInfo(tc[0], tc[1]);
            // } else {
            tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, isRepay);
            // }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = RdTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
            for (String sqlStr : querySqls) {
                Sql sql = Sqls.create(sqlStr);
                sql.vars().set("reportDate", reportDate.substring(0, 4));
                sql.params().set("reportId", reportInfo.getReportId());
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
                                String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                        + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                dataMap.put(key, value);
                            }
                        }
                        return null;
                    }
                });
                dao().execute(sql);
            }

        }

    }


    private RdReportInfo getReportInfo(String tableId, String brNo, String reportDate, String dataType) {
        return this.fetch(Cnd.where("tableId", "=", tableId).and("brNo", "=", brNo).and("reportDate", "=", reportDate)
                .and("dataType", "=", dataType));
    }

    private RdReportInfo getReportInfoSummary(String tableId, String brNo, String reportDate, String dataType) {
        String sqlStr = "SELECT * FROM RD_REPORT_INFO_SUMMARY WHERE TABLE_ID='" + tableId + "' AND BR_NO='" + brNo
                + "'AND REPORT_DATE='" + reportDate + "' AND DATA_TYPE='" + dataType + "'";
        Sql sql = Sqls.create(sqlStr);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void saveReportInfoData(RdReportInfo reportInfo, List<RdReportData> reportDatas, RdReportInfo reportInfo2,
                                   List<RdReportData> reportDatas2) throws Exception {
        try {
            TableName.set(reportInfo.getReportDate().substring(0, 4));
            if (reportInfo != null) {
                super.dao().clear(RdReportData.class, Cnd.where("reportId", "=", reportInfo.getReportId()));
            }
            if (reportInfo2 != null) {
                super.dao().clear(RdReportData.class, Cnd.where("reportId", "=", reportInfo2.getReportId()));
            }
            super.clear(Cnd.where("tableId", "=", reportInfo.getTableId()).and("brNo", "=", reportInfo.getBrNo())
                    .and("reportDate", "=", reportInfo.getReportDate()));
            super.dao().fastInsert(reportInfo);
            super.dao().fastInsert(reportDatas);
            if (reportInfo2 != null) {
                super.dao().fastInsert(reportInfo2);
            }
            if (reportDatas2 != null) {
                super.dao().fastInsert(reportDatas2);
            }

        } finally {
            TableName.clear();
        }

    }

    @Override
    public void updateReportInfoData(RdReportInfo reportInfo, List<RdReportData> reportDatas) throws Exception {
        try {
            TableName.set(reportInfo.getReportDate().substring(0, 4));
            super.dao().update(reportInfo);
            super.dao().clear(RdReportData.class, Cnd.where("reportId", "=", reportInfo.getReportId()));
            super.dao().fastInsert(reportDatas);
        } finally {
            TableName.clear();
        }
    }

    @Override
    public int getReportInfoCount(String brNo, String reportDate, String tabType, List<String> tabCodes) {
        String sqlStr = "SELECT COUNT(*) FROM RD_REPORT_INFO ri WHERE  ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo  AND ri.TABLE_ID IN (SELECT TABLE_ID FROM RD_TABLE_INFO ti WHERE ti.TAB_TYPE=@tabType AND ti.TABCODE in ($conn))";
        Sql sql = Sqls.create(sqlStr);
        sql.vars().set("conn", StrUtil.convertJoin(tabCodes, null));
        sql.params().set("brNo", brNo);
        sql.params().set("reportDate", reportDate);
        sql.params().set("tabType", tabType);
        sql.setCallback(new SqlCallback() {
            @Override
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

    /**
     * 获取机构某个日期下某报表数
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param tabCodes
     * @return
     */
    @Override
    public int getReportInfoCount(String brNo, String reportDate, String tableId) {
        return super.count(
                Cnd.where("brNo", "=", brNo).and("reportDate", "=", reportDate).and("tableId", "=", tableId));
    }


    @Override
    public void saveRdReportInfoForReplace(String reportId, List<RdReportData> rds) throws Exception {
        super.dao().clear(RdReportData.class, Cnd.where("reportId", "=", reportId));
        super.dao().fastInsert(rds);

    }

    @Override
    public void initRdReportDataOfSummary(Set<String> tabCodes, String brNo, String reportDate, String tabType,
                                          String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception {
        final NutzCallbackObject nco = new NutzCallbackObject();
        // £€®©μ
        String isRepay = "";
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = RdTableUtil.getLastReportDate(reportDate, tabType);
            nco.setField1("$");
        } else if ("2".equals(flag)) {
            reportDate = RdTableUtil.getReportDateEndOfYear(reportDate);
            nco.setField1("@");
        } else if ("3".equals(flag)) {
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("4".equals(flag)) {
            isRepay = "true";
            nco.setField1("^");
        } else if ("5".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("6".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("7".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("8".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("€");
            }
        } else if ("9".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("10".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        } else if ("11".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("12".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        }

        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoService.getRdTableInfo(tc[0], tc[1]);
            // } else {
            tableInfo = rdTableInfoService.getRdTableInfoByReportDateOfSummary(tabCode, reportDate, isRepay);
            // }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = RdTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            RdReportInfo reportInfo = this.getReportInfoSummary(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
            for (String sqlStr : querySqls) {
                Sql sql = Sqls.create(sqlStr);
                sql.vars().set("reportDate", "SUMMARY");
                sql.params().set("reportId", reportInfo.getReportId());
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
                                String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                        + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                dataMap.put(key, value);
                            }
                        }
                        return null;
                    }
                });
                dao().execute(sql);
            }

        }

    }

    @Override
    public int CheckParent(String brNo) {
        String sql = "SELECT COUNT(*) FROM SYS_BMGL WHERE P_ID='" + brNo + "'";
        return singleInt(sql);
    }

    @Override
    public int getReportInfoCount(String brNo, List<String> tabCodeList, String reportDate) {
        String sqlStr = "SELECT COUNT(*) FROM RD_REPORT_INFO ri WHERE  ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo  AND ri.TABLE_ID IN (SELECT TABLE_ID FROM RD_TABLE_INFO ti WHERE ti.TABCODE in ($conn))";
        Sql sql = Sqls.create(sqlStr);
        sql.vars().set("conn", StrUtil.convertJoin(tabCodeList, null));
        sql.params().set("brNo", brNo);
        sql.params().set("reportDate", reportDate);
        sql.setCallback(new SqlCallback() {
            @Override
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
    public void initRdReportDataForYD(Set<String> tabCodes, String brNo, String reportDate, String checkType,
                                      String flag, final Map<String, String> dataMap, List<String> pctCellLists) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("2".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("3".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("4".equals(flag)) {
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("5".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("6".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        } else if ("7".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("8".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        }

        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoService.getRdTableInfo(tc[0], tc[1]);
            // } else {
            try {
                tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
                // }
                if (tableInfo == null) {
                    continue;
                }
                final String tCode = tableInfo.getTabCode();
                // 加载百分比单元格
                List<String> pcList = RdTableModelCache.getModelPCTList(tableInfo.getTableId());
                for (String pl : pcList) {
                    pctCellLists.add(pl.replace("_", nco.getField1()));
                }
                RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
                if (reportInfo == null) {
                    continue;
                }

                String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
                for (String sqlStr : querySqls) {
                    Sql sql = Sqls.create(sqlStr);
                    sql.vars().set("reportDate", reportDate.substring(0, 4));
                    sql.params().set("reportId", reportInfo.getReportId());
                    sql.setCallback(new SqlCallback() {
                        @Override
                        public Object invoke(Connection conn, ResultSet rs, Sql sql) {
                            try {
                                ResultSetMetaData rSmd = rs.getMetaData();
                                int colCount = rSmd.getColumnCount();
                                while (rs.next()) {
                                    String rowNum = rs.getString(1);
                                    for (int j = 2; j <= colCount; j++) {// 循环装载列
                                        String value = rs.getString(j);
                                        if (StrUtil.isNull(value)) {
                                            continue;
                                        }
                                        String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                                + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                        dataMap.put(key, value);
                                    }
                                }

                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                            return null;
                        }
                    });
                    dao().execute(sql);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

    @Override
    public Map<String, String> initRdReportDataForYD_JG(final String tabCode, String brNo, String reportDate,
                                                        String flag) {
        final Map<String, String> dataMap = new HashMap<String, String>();
        final NutzCallbackObject nco = new NutzCallbackObject();
        final DecimalFormat df = new DecimalFormat("####,##0.00");
        // 本期
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            // 上月
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("2".equals(flag)) {
            // 上季度
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("3".equals(flag)) {
            // 上半年
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("4".equals(flag)) {
            // 去年同期
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("5".equals(flag)) {
            // 上半年度
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("6".equals(flag)) {
            // 下半年度
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        } else if ("7".equals(flag)) {
            // 前三季度
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("8".equals(flag)) {
            // 前四季度
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        }

        RdTableInfo tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
        RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo != null) {
            String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
            for (String sqlStr : querySqls) {
                Sql sql = Sqls.create(sqlStr);
                sql.vars().set("reportDate", reportDate.substring(0, 4));
                sql.params().set("reportId", reportInfo.getReportId());
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
                                String key = tabCode + nco.getField1() + rowNum + nco.getField1()
                                        + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                dataMap.put(key, String.valueOf(df.format(Double.parseDouble(value))));
                            }
                        }
                        return null;
                    }
                });
                dao().execute(sql);
            }
        }
        return dataMap;
    }

    @Override
    public void initRdReportDataCS(Set<String> tabCodes, String brNo, String reportDate, String checkType, String flag,
                                   final Map<String, String> dataMap, List<String> pctCellLists) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("2".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("3".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("4".equals(flag)) {
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("5".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("6".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        } else if ("7".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("8".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        }

        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoService.getRdTableInfo(tc[0], tc[1]);
            // } else {
            tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
            // }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = RdTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
            for (String sqlStr : querySqls) {
                Sql sql = Sqls.create(sqlStr);
                sql.vars().set("reportDate", reportDate.substring(0, 4));
                sql.params().set("reportId", reportInfo.getReportId());
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
                                String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                        + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                dataMap.put(key, value);
                            }
                        }
                        return null;
                    }
                });
                dao().execute(sql);
            }
        }
    }

    @Override
    public void initRdReportDataForRdAndBf(List<String> tabCodes, String brNo, String reportDate,
                                           final Map<String, String> dataMap) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        nco.setField1("_");
        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = null;
            tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
            if (tableInfo != null) {
                final String tCode = tableInfo.getTabCode();
                RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
                if (reportInfo == null) {
                    continue;
                }

                String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
                for (String sqlStr : querySqls) {
                    Sql sql = Sqls.create(sqlStr);
                    sql.vars().set("reportDate", reportDate.substring(0, 4));
                    sql.params().set("reportId", reportInfo.getReportId());
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
                                    String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                            + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                    dataMap.put(key, value);
                                }
                            }
                            return null;
                        }
                    });
                    dao().execute(sql);
                }
            }
        }
    }

    @Override
    public void saveReportInfoDatacs(RdReportInfo reportInfo, List<RdReportData> reportDatas, RdReportInfo reportInfo2,
                                     List<RdReportData> reportDatas2, RdOperateRecord opRecord) throws Exception {
        try {
            TableName.set(reportInfo.getReportDate().substring(0, 4));
            if (reportInfo != null) {
                super.dao().clear(RdReportData.class, Cnd.where("reportId", "=", reportInfo.getReportId()));
            }
            if (reportInfo2 != null) {
                super.dao().clear(RdReportData.class, Cnd.where("reportId", "=", reportInfo2.getReportId()));
            }
            super.clear(Cnd.where("tableId", "=", reportInfo.getTableId()).and("brNo", "=", reportInfo.getBrNo())
                    .and("reportDate", "=", reportInfo.getReportDate()));
            super.dao().fastInsert(reportInfo);
            super.dao().fastInsert(reportDatas);
            if (reportInfo2 != null) {
                super.dao().fastInsert(reportInfo2);
            }
            if (reportDatas2 != null) {
                super.dao().fastInsert(reportDatas2);
            }
            String sqlStr = "DELETE FROM RD_OPERATE_RECORD WHERE BMCODE=@bmcode AND REPORTDATE=@reportDate AND REPORTCODE=@reportCode AND STATUSTYPE=@statusType";
            Sql sql = Sqls.create(sqlStr);
            sql.params().set("bmcode", opRecord.getBmCode());
            sql.params().set("reportDate", opRecord.getReportDate());
            sql.params().set("reportCode", opRecord.getReportCode());
            sql.params().set("statusType", opRecord.getStatusType());
            super.dao().execute(sql);
            super.dao().fastInsert(opRecord);
        } finally {
            TableName.clear();
        }

    }

    @Override
    public void initRdReportData_dy_rd(Set<String> tabCodes, String brNo, String reportDate, String tabType,
                                       String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = RdTableUtil.getLastReportDate(reportDate, tabType);
            nco.setField1("$");
        } else if ("2".equals(flag)) {
            reportDate = RdTableUtil.getReportDateEndOfYear(reportDate);
            nco.setField1("@");
        } else if ("3".equals(flag)) {
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        }

        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
            if (tableInfo != null) {
                final String tCode = tableInfo.getTabCode();
                // 加载百分比单元格
                List<String> pcList = RdTableModelCache.getModelPCTList(tableInfo.getTableId());
                for (String pl : pcList) {
                    pctCellLists.add(pl.replace("_", nco.getField1()));
                }
                RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
                if (reportInfo == null) {
                    continue;
                }
                String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
                for (String sqlStr : querySqls) {
                    Sql sql = Sqls.create(sqlStr);
                    sql.vars().set("reportDate", reportDate.substring(0, 4));
                    sql.params().set("reportId", reportInfo.getReportId());
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
                                    String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                            + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                    dataMap.put(key, value);
                                }
                            }
                            return null;
                        }
                    });
                    dao().execute(sql);
                }
            }
        }
    }

    @Override
    public void initRdLastReportDataShangHai(Set<String> tabCodes, String brNo, String reportDate, String flag,
                                             String newVersion, final Map<String, String> dataMap, List<String> pctCellLists,
                                             final List<String> dataMapKeyList) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("2".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("3".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("4".equals(flag)) {
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        }


        RdTableInfoServiceImpl rdTableInfoServiceImpl = (RdTableInfoServiceImpl) rdTableInfoService;

        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = null;
            tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = RdTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
            } else {
                final List<String> spanFlag = new ArrayList();
                final Map<String, String> spanMap = new HashMap<String, String>();
                String spanVsrsion = rdTableInfoService.getVersionInfo(tabCode, reportDate);
                String tempVersion;
                // 跨一个版本
                if (!spanVsrsion.equals(newVersion)) {
                    spanFlag.add("Y");
                    tempVersion = newVersion;
                    tempVersion = rdTableInfoServiceImpl.singleString(
                            "SELECT VERSION_NO FROM RD_TABLE_INFO WHERE VERSION_NO<'" + tempVersion + "' AND TABCODE='"
                                    + tabCode + "' ORDER BY VERSION_NO DESC FETCH FIRST 1 ROW ONLY");
                    String zhSqlStr = "SELECT A.XBBDWXX,A.LBBDWXX FROM RD_REP_ZJZHB A WHERE A.BBBH='" + tabCode
                            + "' AND A.LBBBHXX='" + newVersion + "'";
                    // 跨两个版本
                    if (tempVersion != null && !tempVersion.equals(spanVsrsion)) {
                        tempVersion = rdTableInfoServiceImpl
                                .singleString("SELECT VERSION_NO FROM RD_TABLE_INFO WHERE VERSION_NO<'" + tempVersion
                                        + "' AND TABCODE='" + tabCode
                                        + "' ORDER BY VERSION_NO DESC FETCH FIRST 1 ROW ONLY");
                        zhSqlStr = "SELECT A.XBBDWXX,nvl(B.LBBDWXX,A.LBBDWXX) FROM RD_REP_ZJZHB A LEFT JOIN RD_REP_ZJZHB B ON A.LBBBHXX=B.XBBBHXX AND A.LBBDWXX=B.XBBDWXX WHERE A.BBBH='"
                                + tabCode + "' AND A.LBBBHXX='" + newVersion + "'";
                        // 跨3个版本
                        if (tempVersion != null && !tempVersion.equals(spanVsrsion)) {
                            tempVersion = rdTableInfoServiceImpl
                                    .singleString("SELECT VERSION_NO FROM RD_TABLE_INFO WHERE VERSION_NO<'"
                                            + tempVersion + "' AND TABCODE='" + tabCode
                                            + "' ORDER BY VERSION_NO DESC FETCH FIRST 1 ROW ONLY");
                            zhSqlStr = "SELECT A.XBBDWXX,nvl(nvl(C.LBBDWXX,B.LBBDWXX),A.LBBDWXX) FROM RD_REP_ZJZHB A LEFT JOIN RD_REP_ZJZHB B ON A.LBBBHXX=B.XBBBHXX AND A.LBBDWXX=B.XBBDWXX LEFT JOIN RD_REP_ZJZHB C ON B.LBBBHXX=C.XBBBHXX AND B.LBBDWXX=C.XBBDWXX  WHERE A.BBBH='"
                                    + tabCode + "' AND A.LBBBHXX='" + newVersion + "'";
                            // 跨4个版本，系统最多运行跨四个版本
                            if (tempVersion != null && !tempVersion.equals(spanVsrsion)) {
                                tempVersion = rdTableInfoServiceImpl
                                        .singleString("SELECT VERSION_NO FROM RD_TABLE_INFO WHERE VERSION_NO<'"
                                                + tempVersion + "' AND TABCODE='" + tabCode
                                                + "' ORDER BY VERSION_NO DESC FETCH FIRST 1 ROW ONLY");
                                zhSqlStr = "SELECT A.XBBDWXX,nvl(nvl(C.LBBDWXX,B.LBBDWXX),A.LBBDWXX) FROM RD_REP_ZJZHB A LEFT JOIN RD_REP_ZJZHB B ON A.LBBBHXX=B.XBBBHXX AND A.LBBDWXX=B.XBBDWXX LEFT JOIN RD_REP_ZJZHB C ON B.LBBBHXX=C.XBBBHXX AND B.LBBDWXX=C.XBBDWXX  WHERE A.BBBH='"
                                        + tabCode + "' AND A.LBBBHXX='" + newVersion + "'";
                            }

                        }
                    }
                    Sql spanSql = Sqls.create(zhSqlStr);
                    spanSql.setCallback(new SqlCallback() {
                        @Override
                        public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                            ResultSetMetaData rSmd = rs.getMetaData();
                            int colCount = rSmd.getColumnCount();
                            while (rs.next()) {
                                String key = rs.getString(2);
                                String value = rs.getString(1);
                                spanMap.put(key, value);
                            }
                            return null;
                        }
                    });
                }
                String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
                for (String sqlStr : querySqls) {
                    Sql sql = Sqls.create(sqlStr);
                    sql.vars().set("reportDate", reportDate.substring(0, 4));
                    sql.params().set("reportId", reportInfo.getReportId());
                    sql.setCallback(new SqlCallback() {
                        @Override
                        public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                            ResultSetMetaData rSmd = rs.getMetaData();
                            int colCount = rSmd.getColumnCount();
                            while (rs.next()) {
                                String rowNum = rs.getString(1);
                                for (int j = 2; j <= colCount; j++) {// 循环装载列
                                    String value = rs.getString(j);
                                    if (StrUtil.isNull(value) || !StrUtil.isNumberByBank(value)) {
                                        continue;
                                    }
                                    String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                            + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                    if (spanFlag.size() > 0) {
                                        key = spanMap.get(key);
                                    }
                                    if (dataMapKeyList != null) {

                                        dataMapKeyList.add(key);
                                    }
                                    dataMap.put(key, value);
                                }
                            }
                            return null;
                        }
                    });
                    dao().execute(sql);
                }
            }
        }
    }

    @Override
    public void initRdReportDataShangHai(Set<String> tabCodes, String brNo, String reportDate, String flag,
                                         final Map<String, String> dataMap, List<String> pctCellLists, final List<String> dataMapKeyList) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("2".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("3".equals(flag)) {
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("4".equals(flag)) {
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        }

        for (String tabCode : tabCodes) {
            RdTableInfo tableInfo = null;
            tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
            if (tableInfo == null) {
                continue;
            }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = RdTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
            for (String sqlStr : querySqls) {
                Sql sql = Sqls.create(sqlStr);
                sql.vars().set("reportDate", reportDate.substring(0, 4));
                sql.params().set("reportId", reportInfo.getReportId());
                sql.setCallback(new SqlCallback() {
                    @Override
                    public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                        ResultSetMetaData rSmd = rs.getMetaData();
                        int colCount = rSmd.getColumnCount();
                        while (rs.next()) {
                            String rowNum = rs.getString(1);
                            for (int j = 2; j <= colCount; j++) {// 循环装载列
                                String value = rs.getString(j);
                                if (StrUtil.isNull(value) || !StrUtil.isNumberByBank(value)) {
                                    continue;
                                }
                                String key = tCode + nco.getField1() + rowNum + nco.getField1()
                                        + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                if (dataMapKeyList != null) {
                                    dataMapKeyList.add(key);
                                }
                                dataMap.put(key, value);
                            }
                        }
                        return null;
                    }
                });
                dao().execute(sql);
            }
        }
    }

    @Override
    public void initRdReportDataForAutoCaculateWaveFormula(final String nowVersion, String tabCode, String brNo,
                                                           String reportDate, String flag, final Map<String, String> dataMap, List<String> pctCellLists,
                                                           final List<String> dataMapKeyList) {
        final Map<String, String> coordMap = rdTableCoordVersionService.getUpCoordinateList(tabCode);
        final RdTableInfo tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
        final String tCode = tableInfo.getTabCode();
        RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo == null) {
            return;
        }
        String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
        for (String sqlStr : querySqls) {
            Sql sql = Sqls.create(sqlStr);
            sql.vars().set("reportDate", reportDate.substring(0, 4));
            sql.params().set("reportId", reportInfo.getReportId());
            sql.setCallback(new SqlCallback() {
                @Override
                public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                    ResultSetMetaData rSmd = rs.getMetaData();
                    int colCount = rSmd.getColumnCount();
                    while (rs.next()) {
                        String rowNum = rs.getString(1);
                        for (int j = 2; j <= colCount; j++) {// 循环装载列
                            String value = rs.getString(j);
                            if (StrUtil.isNull(value) || !StrUtil.isNumberByBank(value)) {
                                continue;
                            }
                            String local = rowNum + "_" + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                            // 判断是否跨版本
                            if (!tableInfo.getVersionNo().equals(nowVersion)) {
                                String turnStr = RdTableUtil.convertCoordinate(coordMap, tableInfo.getVersionNo(),
                                        nowVersion, local);
                                if (turnStr != null) {
                                    local = turnStr;
                                }
                            }
                            dataMap.put(tCode + "_" + local, value);
                        }
                    }
                    return null;
                }
            });
            dao().execute(sql);
        }
    }

    @Override
    public List<String> getDateMapKeyList(String brNo, String tabCode, String reportDate, final String flag) {
        RdTableInfo tableInfo = rdTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
        if (tableInfo != null) {
            RdReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo != null) {
                final String tCode = tableInfo.getTabCode();
                final List<String> keyList = new ArrayList<>();
                String[] querySqls = RdTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
                for (String sqlStr : querySqls) {
                    Sql sql = Sqls.create(sqlStr);
                    sql.vars().set("reportDate", reportDate.substring(0, 4));
                    sql.params().set("reportId", reportInfo.getReportId());
                    sql.setCallback(new SqlCallback() {
                        @Override
                        public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                            ResultSetMetaData rSmd = rs.getMetaData();
                            int colCount = rSmd.getColumnCount();
                            while (rs.next()) {
                                String rowNum = rs.getString(1);
                                for (int j = 2; j <= colCount; j++) {// 循环装载列
                                    String value = rs.getString(j);
                                    // 去除空的值或非数字类型的值
                                    if (StrUtil.isNull(value) || !StrUtil.isNumberByBank(value)) {
                                        continue;
                                    }
                                    String key = tCode + flag + rowNum + flag
                                            + RdTableUtil.getReportColumnName(rSmd.getColumnName(j));
                                    keyList.add(key);
                                }
                            }
                            return null;
                        }
                    });
                    dao().execute(sql);
                }
                return keyList;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public String delParentNode(String brNos) {
        String brNo = "";
        String brnos[] = brNos.split(",");
        for (int i = 0; i < brnos.length; i++) {
            int num = CheckParent(brnos[i]);
            if (num == 0) {
                if (i == brnos.length - 1) {
                    brNo += "" + brnos[i] + "";
                } else {
                    brNo += "" + brnos[i] + ",";
                }
            }

        }

        return brNo;

    }
}
