package com.efraiser.test.db.service.dy.dyreportinfosummary.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.vo.NutzCallbackObject;
import com.efraiser.test.db.model.dy.DyReportData;
import com.efraiser.test.db.model.dy.DyReportInfo;
import com.efraiser.test.db.model.dy.DyReportInfoSummary;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.dy.dyreportinfosummary.DyReportInfoSummaryService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
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
public class DyReportInfoSummaryServiceImpl extends BaseServiceImpl<DyReportInfoSummary> implements DyReportInfoSummaryService {

    private Logger logger = LoggerFactory.getLogger(DyReportInfoSummaryServiceImpl.class);

    @Autowired
    private DyTableInfoService dyTableInfoService;


    @Override
    public void initDyReportData(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception {

        NutzCallbackObject nco = new NutzCallbackObject();
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
            DyReportInfoSummary reportInfo = this.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
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

    private DyReportInfoSummary getReportInfo(String tableId, String brNo, String reportDate, String dataType) {
        return this.fetch(Cnd.where("tableId", "=", tableId).and("brNo", "=", brNo).and("reportDate", "=", reportDate).and("dataType", "=", dataType));
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
            logger.error("saveReportInfoData() error! reportInfo:[" + JSONObject.toJSONString(reportInfo) + "],reportDatas:[" + JSONArray.toJSONString(reportDatas) + "]," +
                    "reportInfo2:[" + JSONObject.toJSONString(reportInfo2) + "],reportDatas2:[" + JSONArray.toJSONString(reportDatas2) + "]", e);
            throw e;
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
            logger.error("updateReportInfoData() error! reportInfo:[" + JSONObject.toJSONString(reportInfo) + "],reportDatas:[" + JSONArray.toJSONString(reportDatas) + "]", e);
            throw e;
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

}
