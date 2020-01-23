package com.efraiser.test.db.service.dy.dyreportinfo.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.vo.NutzCallbackObject;
import com.efraiser.test.db.model.dy.DyReportData;
import com.efraiser.test.db.model.dy.DyReportInfo;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.util.DyTableUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.TableName;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class DyReportInfoServiceImpl extends BaseServiceImpl<DyReportInfo> implements DyReportInfoService {

    private Logger logger = LoggerFactory.getLogger(DyReportInfoServiceImpl.class);

    @Autowired
    private DyTableInfoService dyTableInfoService;

    @Autowired
    private DyTableModelPCTService dyTableModelPCTService;


    @Override
    public void initDyReportData(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception {
        final NutzCallbackObject nco = new NutzCallbackObject();
        String isRepay = "";
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = DyTableUtil.getLastReportDate(reportDate, tabType);
            nco.setField1("$");
        } else if ("2".equals(flag)) {
            reportDate = DyTableUtil.getReportDateEndOfYear(reportDate);
            nco.setField1("@");
        } else if ("3".equals(flag)) {
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("4".equals(flag)) {
            isRepay = "true";
            nco.setField1("^");
        } else if ("5".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("6".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("7".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("8".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("€");
            }
        } else if ("9".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("10".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        } else if ("11".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("12".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        }

        for (String tabCode : tabCodes) {
            DyTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoDao.getRdTableInfo(tc[0], tc[1]);
            // } else {
            tableInfo = dyTableInfoService.getDyTableInfoByReportDate(tabCode, reportDate, isRepay);
            // }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            DyReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = DyTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
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
                                String key = tCode + nco.getField1() + rowNum + nco.getField1() + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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
    public DyReportInfo getReportInfo(String tableId, String brNo, String reportDate, String dataType) {
        return this.fetch(Cnd.where("tableId", "=", tableId).and("brNo", "=", brNo).and("reportDate", "=", reportDate).and("dataType", "=", dataType));
    }

    @Override
    public DyReportInfo getReportInfoSummary(String tableId, String brNo, String reportDate, String dataType) {
        String sqlStr = "SELECT * FROM DY.DY_REPORT_INFO_SUMMARY WHERE TABLE_ID='" + tableId + "' AND BR_NO='" + brNo + "'AND REPORT_DATE='" + reportDate + "' AND DATA_TYPE='" + dataType + "'";
        Sql sql = Sqls.create(sqlStr);
        return getObjectBySql(sql, null, null);
    }

    @Override
    public void saveReportInfoData(DyReportInfo reportInfo, List<DyReportData> reportDatas, DyReportInfo reportInfo2, List<DyReportData> reportDatas2) throws Exception {
        try {
            TableName.set(reportInfo.getReportDate().substring(0, 4));
            if (reportInfo != null) {
                super.dao().clear(DyReportData.class, Cnd.where("reportId", "=", reportInfo.getReportId()));
            }
            if (reportInfo2 != null) {
                super.dao().clear(DyReportData.class, Cnd.where("reportId", "=", reportInfo2.getReportId()));
            }
            super.clear(Cnd.where("tableId", "=", reportInfo.getTableId()).and("brNo", "=", reportInfo.getBrNo()).and("reportDate", "=", reportInfo.getReportDate()));
            super.dao().fastInsert(reportInfo);
            super.dao().fastInsert(reportDatas);
            if (reportInfo2 != null) {
                super.dao().fastInsert(reportInfo2);
            }
            if (reportDatas2 != null) {
                super.dao().fastInsert(reportDatas2);
            }
        } catch (Exception e) {
            logger.error("saveReportInfoData() error! reportInfo:[" + JSONObject.toJSONString(reportInfo) + "],reportInfo2:[" + JSONObject.toJSONString(reportInfo2) + "]" +
                    ",reportDatas:" + JSONArray.toJSONString(reportDatas) + "reportDatas2:" + JSONArray.toJSONString(reportDatas2), e);
        } finally {
            TableName.clear();
        }

    }

    @Override
    public void updateReportInfoData(DyReportInfo reportInfo, List<DyReportData> reportDatas) throws Exception {
        try {
            TableName.set(reportInfo.getReportDate().substring(0, 4));
            super.dao().update(reportInfo);
            super.dao().clear(DyReportData.class, Cnd.where("reportId", "=", reportInfo.getReportId()));
            super.dao().fastInsert(reportDatas);
        } catch (Exception e) {
            logger.error("updateReportInfoData() error! reportInfo:[" + JSONObject.toJSONString(reportInfo) + "]" +
                    ",reportDatas:" + JSONArray.toJSONString(reportDatas), e);
        } finally {
            TableName.clear();
        }
    }

    @Override
    public int getReportInfoCount(String brNo, String reportDate, String tabType, List<String> tabCodes) {
        String sqlStr = "SELECT COUNT(*) FROM DY.DY_REPORT_INFO ri WHERE  ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo  AND ri.TABLE_ID IN (SELECT TABLE_ID FROM DY.DY_TABLE_INFO ti WHERE ti.TAB_TYPE=@tabType AND ti.TABCODE in ($conn))";
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

    @Override
    public int getReportInfoCount(String brNo, String reportDate, String tableId) {
        return super.count(Cnd.where("brNo", "=", brNo).and("reportDate", "=", reportDate).and("tableId", "=", tableId));
    }

    @Override
    public void saveDyReportInfoForReplace(String reportId, List<DyReportData> rds) throws Exception {
        super.dao().clear(DyReportData.class, Cnd.where("reportId", "=", reportId));
        super.dao().fastInsert(rds);

    }

    @Override
    public void initDyReportDataOfSummary(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception {
        final NutzCallbackObject nco = new NutzCallbackObject();
        //£€®©μ
        String isRepay = "";
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = DyTableUtil.getLastReportDate(reportDate, tabType);
            nco.setField1("$");
        } else if ("2".equals(flag)) {
            reportDate = DyTableUtil.getReportDateEndOfYear(reportDate);
            nco.setField1("@");
        } else if ("3".equals(flag)) {
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("4".equals(flag)) {
            isRepay = "true";
            nco.setField1("^");
        } else if ("5".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("6".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("7".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("8".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("€");
            }
        } else if ("9".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("10".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        } else if ("11".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("12".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        }

        for (String tabCode : tabCodes) {
            DyTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoDao.getRdTableInfo(tc[0], tc[1]);
            // } else {
            tableInfo = dyTableInfoService.getDyTableInfoByReportDateOfSummary(tabCode, reportDate, isRepay);
            // }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            DyReportInfo reportInfo = this.getReportInfoSummary(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = DyTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
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
                                String key = tCode + nco.getField1() + rowNum + nco.getField1() + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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
    public int getReportInfoCount(String brNo, List<String> tabCodeList,String reportDate) {
        String sqlStr = "SELECT COUNT(*) FROM DY.DY_REPORT_INFO ri WHERE  ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo  AND ri.TABLE_ID IN (SELECT TABLE_ID FROM DY.DY_TABLE_INFO ti WHERE ti.TABCODE in ($conn))";
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
    public void initDyReportDataForYD(Set<String> tabCodes, String brNo,
                                      String reportDate, String checkType, String flag,
                                      final Map<String, String> dataMap, List<String> pctCellLists) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("2".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("3".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("4".equals(flag)) {
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("5".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("6".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        } else if ("7".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("8".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        }

        for (String tabCode : tabCodes) {
            DyTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoDao.getRdTableInfo(tc[0], tc[1]);
            // } else {
            tableInfo = dyTableInfoService.getDyTableInfoByReportDate(tabCode, reportDate, "");
            // }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            DyReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = DyTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
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
                                String key = tCode + nco.getField1() + rowNum + nco.getField1() + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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
    public void initDyReportDataCS(Set<String> tabCodes, String brNo,
                                   String reportDate, String checkType, String flag,
                                   final Map<String, String> dataMap, List<String> pctCellLists) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastMonth(reportDate);
            nco.setField1("&");
        } else if ("2".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("|");
            }
        } else if ("3".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("`");
            }
        } else if ("4".equals(flag)) {
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        } else if ("5".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(":");
            }
        } else if ("6".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1(";");
            }
        } else if ("7".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￥");
            }
        } else if ("8".equals(flag)) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            if (reportDate == null) {
            } else {
                nco.setField1("￠");
            }
        }

        for (String tabCode : tabCodes) {
            DyTableInfo tableInfo = null;
            // if (tabCode.contains("_")) {
            // String[] tc = tabCode.split("_");
            // tableInfo = rdTableInfoDao.getRdTableInfo(tc[0], tc[1]);
            // } else {
            tableInfo = dyTableInfoService.getDyTableInfoByReportDate(tabCode, reportDate, "");
            // }
            final String tCode = tableInfo.getTabCode();
            // 加载百分比单元格
            List<String> pcList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
            for (String pl : pcList) {
                pctCellLists.add(pl.replace("_", nco.getField1()));
            }
            DyReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
            if (reportInfo == null) {
                continue;
            }

            String[] querySqls = DyTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
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
                                String key = tCode + nco.getField1() + rowNum + nco.getField1() + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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
    public void initDyReportDataForRdAndBf(List<String> tabCodes, String brNo,
                                           String reportDate, final Map<String, String> dataMap) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        nco.setField1("_");
        for (String tabCode : tabCodes) {
            DyTableInfo tableInfo = null;
            tableInfo = dyTableInfoService.getDyTableInfoByReportDate(tabCode, reportDate, "");
            if (tableInfo != null) {
                final String tCode = tableInfo.getTabCode();
                DyReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
                if (reportInfo == null) {
                    continue;
                }

                String[] querySqls = DyTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
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
                                    String key = tCode + nco.getField1() + rowNum + nco.getField1() + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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
    public void initRdReportDataForRdAndBf(List<String> iTabCodesDy,
                                           String dyBmcode, String reportDate, final Map<String, String> dataMap) {
        final NutzCallbackObject nco = new NutzCallbackObject();
        nco.setField1("_");
        for (String tabCode : iTabCodesDy) {
            DyTableInfo tableInfo = null;
            tableInfo = dyTableInfoService.getRdTableInfoByReportDate(tabCode, reportDate, "");
            if (tableInfo != null) {
                final String tCode = tableInfo.getTabCode();
                DyReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), dyBmcode, reportDate, "1");
                if (reportInfo == null) {
                    continue;
                }

                String[] querySqls = DyTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
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
                                    String key = tCode + nco.getField1() + rowNum + nco.getField1() + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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
    public void initDyReportData_dy_rd(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception {
        final NutzCallbackObject nco = new NutzCallbackObject();
        if ("0".equals(flag)) {
            nco.setField1("_");
        } else if ("1".equals(flag)) {
            reportDate = DyTableUtil.getLastReportDate(reportDate, tabType);
            nco.setField1("$");
        } else if ("2".equals(flag)) {
            reportDate = DyTableUtil.getReportDateEndOfYear(reportDate);
            nco.setField1("@");
        } else if ("3".equals(flag)) {
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
            nco.setField1("~");
        }

        for (String tabCode : tabCodes) {
            DyTableInfo tableInfo = dyTableInfoService.getDyTableInfoByReportDate(tabCode, reportDate, "");
            if (tableInfo != null) {
                final String tCode = tableInfo.getTabCode();
                // 加载百分比单元格
                List<String> pcList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
                for (String pl : pcList) {
                    pctCellLists.add(pl.replace("_", nco.getField1()));
                }
                DyReportInfo reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
                if (reportInfo == null) {
                    continue;
                }
                String[] querySqls = DyTableModelCache.getModelQueryValueSqlStr(tableInfo.getTableId()).split(";");
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
                                    String key = tCode + nco.getField1() + rowNum + nco.getField1() + DyTableUtil.getReportColumnName(rSmd.getColumnName(j));
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


}
