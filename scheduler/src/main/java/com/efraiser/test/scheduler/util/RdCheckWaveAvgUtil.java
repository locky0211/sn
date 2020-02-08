package com.efraiser.test.scheduler.util;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.service.rd.rdcheckrormulawave.Impl.RdCheckFormulaWaveServiceImpl;
import com.efraiser.test.db.service.rd.rdcheckrormulawave.RdCheckFormulaWaveService;
import com.efraiser.test.db.service.rd.rdreportinfo.RdReportInfoService;
import com.efraiser.test.db.service.rd.rdtablecoordversion.RdTableCoordVersionService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.util.RdTableUtil;
import org.nutz.dao.entity.Record;

/**
 * @author
 * @ProjectName: [com.efraiser.sam]
 * @Package: [com.efraiser.rd.util]
 * @ClassName: [RdCheckWaveAvgUtil] 类描述：上海异动监测计算生成公式
 * @date 2017年10月26日
 * @modify log:
 */
public class RdCheckWaveAvgUtil {

    /**
     * 功能描述：生成异动校验公式
     *
     * @param reportDate 报表日期
     * @param tabType    报表类型
     * @param reportRate 校验频度
     * @return
     * @author
     * @date 2017年10月26日
     * @modify log:
     */
    public static void makeCheckWaveFormula(String reportDate, String tabType, String reportRate) throws Exception {

        RdCheckFormulaWaveService rdCheckFormulaWaveDao = (RdCheckFormulaWaveService) SpringContextUtil.getBean("rdCheckFormulaWaveServiceImpl");
        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");
        reportDate = reportDate.replace("-", "").substring(0, 6);
        rdCheckFormulaWaveDao.clearCheckFormulaShangHai(reportDate, tabType);
        List<SysGgzd> list = sysGgzdDao.getGgzdListByGid("FORMULATYPE");
        for (SysGgzd sysGgzd : list) {
            String brno = sysGgzd.getZdValue();
            String flag = sysGgzd.getZdName();
            doMakeCheckWaveFormula(brno, reportDate, tabType, reportRate, flag);
        }
    }

    /**
     * 功能描述：生成同月不同频度的异动公式（不清表）
     *
     * @param reportDate
     * @param tabType
     * @param reportRate
     * @throws Exception
     * @author
     * @date 2018年1月25日
     * @modify log:
     */
    public static void makeCheckWaveFormulaNotClear(String reportDate, String tabType, String reportRate) throws Exception {
        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");

        reportDate = reportDate.replace("-", "").substring(0, 6);
        List<SysGgzd> list = sysGgzdDao.getGgzdListByGid("FORMULATYPE");
        for (SysGgzd sysGgzd : list) {
            String brno = sysGgzd.getZdValue();
            String flag = sysGgzd.getZdName();
            doMakeCheckWaveFormula(brno, reportDate, tabType, reportRate, flag);
        }
    }

    /**
     * 功能描述：根据公共字典配置的机构生成异动校验公式
     *
     * @param brNo       机构
     * @param reportDate 报表日期
     * @param tabType    报表类型
     * @param reportRate 校验频度
     * @param flag       法人还是分支（fr,fz）
     * @return
     * @author
     * @date 2017年10月26日
     * @modify log:
     */
    private static void doMakeCheckWaveFormula(String brNo, String reportDate, String tabType, String reportRate, String flag) throws Exception {
        String lastReportDate = getLastReportDate(reportDate, reportRate);

        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");
        RdReportInfoService rdReportInfoDao = (RdReportInfoService) SpringContextUtil.getBean("rdReportInfoServiceImpl");
        // 获取需要校验的所有表编号集合
        List<String> rTabCodesAll = rdTableInfoDao.getTabCodeListCS(brNo, lastReportDate, tabType, true, false);
        if (rTabCodesAll.size() > 0) {
            int count = rdReportInfoDao.getReportInfoCount(brNo, lastReportDate, tabType, rTabCodesAll);
            if (count > 0) {
                // ------ 计算波动差波动范围平均值 ------
                Map<String, String> diffAndRangeDataMap = getDiffAndRangeData(brNo, reportDate, reportRate, tabType, rTabCodesAll);

                if (diffAndRangeDataMap != null && diffAndRangeDataMap.size() > 0) {
                    // ------ 校验 Start ------

                    // 需要校验的报表编号
                    Set<String> tabCodes = new HashSet<String>();
                    // 报表的版本号
                    Map<String, String> tabVersionMap = new HashMap<>();
                    for (String tabCode : rTabCodesAll) {
                        String nowVersion = rdTableInfoDao.getVersionInfo(tabCode, reportDate);
                        String lastVersion = rdTableInfoDao.getVersionInfo(tabCode, lastReportDate);
                        tabVersionMap.put(tabCode, nowVersion + "-" + lastVersion);
                        tabCodes.add(tabCode);
                    }
                    // 百分比单元格坐标集合
                    List<String> pctCellLists = new ArrayList<>();
                    // dataMap中的主键列表（本期）
                    List<String> dateMapKeyList = new ArrayList<>();
                    Map<String, String> nowDataMap = new HashMap<String, String>();// 本期数据
                    // Map<String, String> lastDataMap = new HashMap<String,
                    // String>();// 上期数据
                    if (tabCodes.size() > 0) {
                        // Date raw = DateUtil.parse(reportDate, "yyyyMM");
                        // int month = DateUtil.getMonth(raw);
                        // 本期数据初始化

                        rdReportInfoDao.initRdReportDataShangHai(tabCodes, brNo, reportDate, "0", nowDataMap, pctCellLists, dateMapKeyList);
                        /*
                         * // ------ 上期数据初始化 Start ------ if
                         * ("1".equals(reportRate)) {// 上月
                         * rdReportInfoDao.initRdReportDataShangHai(tabCodes,
                         * brNo, reportDate, "1", lastDataMap, pctCellLists,
                         * null); } else if ("2".equals(reportRate)) { // 上季 if
                         * (month == 3 || month == 6 || month == 9 || month ==
                         * 12) {
                         * rdReportInfoDao.initRdReportDataShangHai(tabCodes,
                         * brNo, reportDate, "2", lastDataMap, pctCellLists,
                         * null); } } else if ("3".equals(reportRate)) {// 上半年
                         * if (month == 6 || month == 12) {
                         * rdReportInfoDao.initRdReportDataShangHai(tabCodes,
                         * brNo, reportDate, "3", lastDataMap, pctCellLists,
                         * null); } } else if ("4".equals(reportRate)) {// 去年同期
                         * rdReportInfoDao.initRdReportDataShangHai(tabCodes,
                         * brNo, reportDate, "4", lastDataMap, pctCellLists,
                         * null); }
                         */
                        // ------ 上期数据初始化 End ------
                        insertFormula(flag, brNo, reportDate, tabType, reportRate, pctCellLists, dateMapKeyList, diffAndRangeDataMap, tabVersionMap);
                    }
                    // ------ 校验 End ------
                }
            }
        }
    }

    /**
     * 功能描述：获取校验结果并转换成公式
     *
     * @param flag           法人还是分支（fr,fz）
     * @param brNo           机构
     * @param reportDate     日期
     * @param tabType        类型
     * @param reportRate     频度
     * @param nowDataMap     本期数据
     * @param lastDataMap    上期数据
     * @param pCellList      百分比单元格
     * @param dataMapKeyList 本期主键
     * @param tabVersionMap  报表版本（不考虑跨版本）
     * @return
     * @author
     * @date 2017年10月24日
     * @modify log:
     */
    private static void insertFormula(String flag, String brNo, String reportDate, String tabType, String reportRate, List<String> pCellList, List<String> dataMapKeyList, Map<String, String> diffAndRangeDataMap,
                                      Map<String, String> tabVersionMap) throws Exception {

        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");
        RdTableCoordVersionService rdTableCoordVersionDao = (RdTableCoordVersionService) SpringContextUtil.getBean("rdTableCoordVersionServiceImpl");
        RdCheckFormulaWaveServiceImpl rdCheckFormulaWaveDao = (RdCheckFormulaWaveServiceImpl) SpringContextUtil.getBean("rdCheckFormulaWaveServiceImpl");
        RdTableUtil rTableUtil = (RdTableUtil)SpringContextUtil.getBean("rTableUtil");

        List<Record> records = new ArrayList<>();
        Map<String, Map<String, String>> coordMap = new HashMap<String, Map<String, String>>();
        DecimalFormat dfInt = new DecimalFormat("###00.00");
        SimpleDateFormat dateF = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        //Date raw = DateUtil.parse(reportDate, "yyyyMM");
        //int month = DateUtil.getMonth(raw);
        // 波动范围容忍值
        //String rangDefine = sysGgzdDao.getZdNamebyZdValue("rangeDefine", "RANGE_DEFINE");
        Double rangeRatio = Double.valueOf(sysGgzdDao.getZdNamebyZdValue("RATIO", "RANGE_RATIO"));
        //Double rangeDefineD = Double.valueOf(rangDefine);
        // 波动范围的最大值
        //Double rangMax = Double.valueOf(sysGgzdDao.getZdNamebyZdValue("rangeMax", "RANGE_MAX"));
        for (String dataMapKey : dataMapKeyList) {
            String diffAndRange = diffAndRangeDataMap.get(dataMapKey);
            // 可能有些指标为空，去除空值对应的波动范围
            if (StrUtil.isNull(diffAndRange)) {
                continue;
            }
            // Double diffValueAvg =
            // Double.valueOf(diffAndRange.split(";")[0]);//波动差平均
            // 四舍五入取波动范围平均(小数点保留2位)
            // String rangeValueAvgTemp = diffAndRange.split(";")[1];
            // if (StrUtil.isNull(rangeValueAvgTemp)) {
            // continue;
            // }
            // Double rangeValueAvgD = Double.valueOf(rangeValueAvgTemp);//
            // double类型的值（平均原值）
            // 校验超过该值校验不通过（平均+容忍值）
            // Double rangeFinal = rangeValueAvgD + rangeDefineD;
            Double maxDiff = Double.valueOf(diffAndRange.split(";")[0]);
            Double minDiff = Double.valueOf(diffAndRange.split(";")[1]);
            /*
             * if (rangeFinal > rangMax) { rangeFinal = rangMax; }
             */
            // String rangeValueAvgS = dfInt.format(rangeFinal * 100);//
            // string类型的值（扩大了100倍的整数）
            String lString = dfInt.format(minDiff * rangeRatio * 100) + "%";
            String rString = dfInt.format(maxDiff * rangeRatio * 100) + "%";
            /*
             * String lastDataKey = ""; if ("1".equals(reportRate)) {// 上月
             * lastDataKey = dataMapKey.replace("_", "&"); } else if
             * ("2".equals(reportRate)) { // 上季 if (month == 3 || month == 6
             * || month == 9 || month == 12) { lastDataKey =
             * dataMapKey.replace("_", "|"); } } else if
             * ("3".equals(reportRate)) {// 上半年 if (month == 6 || month ==
             * 12) { lastDataKey = dataMapKey.replace("_", "`"); } } else if
             * ("4".equals(reportRate)) {// 去年同期 lastDataKey =
             * dataMapKey.replace("_", "~"); } String nowDataValue =
             * CommUtil.trimStr(nowDataMap.get(dataMapKey)); String
             * lastDataValue =
             * CommUtil.trimStr(lastDataMap.get(lastDataKey));
             */
            String tabCode = dataMapKey.split("_")[0];
            String thisVersion = tabVersionMap.get(tabCode).split("-")[0];
            String lastVersion = tabVersionMap.get(tabCode).split("-")[1];
            if (thisVersion != lastVersion && (coordMap.get(tabCode) == null || coordMap.get(tabCode).size() == 0)) {
                coordMap.put(tabCode, rdTableCoordVersionDao.getDownCoordinateList(tabCode));
            }
            String lastDataKeyoper = dataMapKey.replace("_", "$oper$");
            if (thisVersion != lastVersion) {
                String coordStr = RdTableUtil.convertCoordinate(coordMap.get(tabCode), thisVersion, lastVersion, dataMapKey.split("_")[1] + "_" + dataMapKey.split("_")[2]);
                if (coordStr != null) {
                    lastDataKeyoper = tabCode + "_" + coordStr;
                    lastDataKeyoper = lastDataKeyoper.replace("_", "$oper$");
                }
            }
            // String rValueAvg = rangeValueAvgS + "%";
            String checkFormula = "";
            String valueArea = "";
            /*
             * if ("0".equals(rangeValueAvgS)) { valueArea = "(" + rValueAvg
             * + "," + rValueAvg + ")"; checkFormula = "(" + rValueAvg +
             * "<(" + dataMapKey + "-(" + lastDataKeyoper + "))/(" +
             * lastDataKeyoper + "))" + "AND((" + dataMapKey + "-(" +
             * lastDataKeyoper + "))/(" + lastDataKeyoper + ")<" + rValueAvg
             * + ")"; } else {
             */
            valueArea = "(" + lString + "," + rString + ")";
            checkFormula = "(" + lString + "<=(" + dataMapKey + "-(" + lastDataKeyoper + "))/ABS(" + lastDataKeyoper + "))" + "AND((" + dataMapKey + "-(" + lastDataKeyoper + "))/ABS(" + lastDataKeyoper + ")<=" + rString
                    + ")";
            // }

            String dValueFormula = dataMapKey + "-(" + lastDataKeyoper + ")";

            // int leftValue = -Integer.valueOf(lString);
            // int rightValue = Integer.valueOf(rString);

            Record record = new Record();
            // if (StrUtil.isNull(nowDataValue) ||
            // StrUtil.isNull(lastDataValue)) {
            String checkProject = rTableUtil.getCheckProject(dataMapKey, thisVersion);
            record.set(".table", "SAM.RD_CHECK_FORMULA_WAVE");
            record.set("ID", UUID.randomUUID().toString().replaceAll("-", ""));
            record.set("TABCODE", tabCode);
            record.set("CHECK_FORMULA", checkFormula);
            record.set("DVALUE_FORMULA", dValueFormula);
            record.set("THIS_VERSION", thisVersion);
            record.set("LAST_VERSION", lastVersion);
            record.set("VALID_FLAG", "y");
            record.set("CHECK_RISK", "1");
            record.set("C_USER", "admin");
            record.set("UPDATE_DATE", dateF.format(new Date()));
            record.set("CHECK_PROJECT", checkProject);
            record.set("VALUE_AREA", valueArea);
            record.set("REPORT_RATE", reportRate);
            record.set("LEFT_VALUE", lString);
            record.set("RIGHT_VALUE", rString);
            record.set("ELEMENT", dataMapKey);
            record.set("LAST_ELEMENT", lastDataKeyoper);
            if ("fr".equals(flag)) {
                record.set("TYPE", "fr_" + reportDate + "_" + tabType);
            } else if ("fz".equals(flag)) {
                record.set("TYPE", "fz_" + reportDate + "_" + tabType);
            } else {
                record.set("TYPE", "2");
            }
            // } else if (StrUtil.isNotNull(nowDataValue) &&
            // StrUtil.isNotNull(lastDataValue)) {
            /*
             * Double nValue = Double.valueOf(nowDataValue); Double lValue =
             * Double.valueOf(lastDataValue); // 波动差 Double dValue =
             * Math.abs(nValue - lValue);
             *
             * // 波动范围 Double rValue; if (dValue == (double) 0 && lValue ==
             * (double) 0) { rValue = 0.00; } else if (dValue != (double) 0
             * && lValue == (double) 0) { rValue = rangMax + 1; } else {
             * rValue = Math.abs(dValue / lValue); }
             *
             * if (rValue >= rangeFinal) { String checkProject =
             * RdTableUtil.getCheckProject(dataMapKey, version);
             * record.set(".table", "SAM.RD_CHECK_FORMULA_WAVE");
             * record.set("ID", UUID.randomUUID().toString().replaceAll("-",
             * "")); record.set("TABCODE", tabCode);
             * record.set("CHECK_FORMULA", checkFormula);
             * record.set("DVALUE_FORMULA", dValueFormula);
             * record.set("THIS_VERSION", version);
             * record.set("LAST_VERSION", version); record.set("VALID_FLAG",
             * "y"); record.set("CHECK_RISK", "1"); record.set("C_USER",
             * "admin"); record.set("UPDATE_DATE", dateF.format(new
             * Date())); record.set("CHECK_PROJECT", checkProject);
             * record.set("VALUE_AREA", valueArea);
             * record.set("REPORT_RATE", reportRate);
             * record.set("LEFT_VALUE", leftValue);
             * record.set("RIGHT_VALUE", rightValue); record.set("ELEMENT",
             * dataMapKey); record.set("LAST_ELEMENT", dataMapKey); if
             * ("fr".equals(flag)) { record.set("TYPE", "fr"); } else if
             * ("fz".equals(flag)) { record.set("TYPE", "fz"); } else {
             * record.set("TYPE", "2"); } } }
             */
            if (record.size() > 0) {
                records.add(record);
            }

            if (records.size() > dataMapKeyList.size() / 4) {
                rdCheckFormulaWaveDao.dao().fastInsert(records);
                records = new ArrayList<>();
            }
        }
        if (records.size() > 0) {
            rdCheckFormulaWaveDao.dao().fastInsert(records);
        }
        /*
         * System.out.println(records); for(Record record:records){
         * rdCheckFormulaWaveDao.dao().insert(record); }
         */
    }

    /**
     * 功能描述：根据报表日期和校验频度获取上一期的报表日期
     *
     * @param reportDate
     * @param checkType
     * @return
     * @author
     * @date 2017年10月26日
     * @modify log:
     */
    private static String getLastReportDate(String reportDate, String checkType) {
        if ("1".equals(checkType)) {// 上月
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
        } else if ("2".equals(checkType)) {// 上季
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
        } else if ("3".equals(checkType)) {// 上半年
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
        } else if ("4".equals(checkType)) {// 去年同期
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
        }
        return reportDate;
    }

    /**
     * 功能描述：波动差和波动范围的平均值
     *
     * @param brNo
     * @param reportDate   需要检验报表日期
     * @param reportRate
     * @param tabType
     * @param rTabCodesAll 需要校验的报表编号集合
     * @return
     * @throws Exception
     * @author
     * @date 2017年10月24日
     * @modify log:
     */
    private static Map<String, String> getDiffAndRangeData(String brNo, String reportDate, String reportRate, String tabType, List<String> rTabCodesAll) throws Exception {
        DecimalFormat df = new DecimalFormat("############0.0000");
        // 波动范围的最大值
        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");

        Double rangMax = Double.valueOf(sysGgzdDao.getZdNamebyZdValue("rangeMax", "RANGE_MAX"));
        // ------需要计算的报表日期 Start-----
        List<String> reportDateList = new ArrayList<>();
        if ("50".equals(tabType)) {// 月报
            String countDate = reportDate;
            for (int i = 0; i < 12; i++) {
                countDate = RdTableUtil.getReportDateLastMonth(countDate);
                reportDateList.add(countDate);
            }
        } else if ("40".equals(tabType)) {// 季报
            String countDate = reportDate;
            for (int i = 0; i < 4; i++) {
                countDate = RdTableUtil.getReportDateLastQuarter(countDate);
                reportDateList.add(countDate);
            }

        } else if ("80".equals(tabType)) {// 半年报
            String countDate = reportDate;
            for (int i = 0; i < 2; i++) {
                countDate = RdTableUtil.getReportDateLastHalfYear(countDate);
                reportDateList.add(countDate);
            }
        } else if ("00".equals(tabType)) { // 年报
            String countDate = reportDate;
            for (int i = 0; i < 2; i++) {
                countDate = RdTableUtil.getReportDateLastYear(countDate);
                reportDateList.add(countDate);
            }
        }
        // ------需要计算的报表日期 END-----

        /**
         * diffAndRangeDateMap：波动差波动范围的map key：例如G0100_1_A value为diffAndRange
         * 例如：-100;-0.1
         */
        Map<String, String> diffAndRangeDataMap = new HashMap<>();

        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");
        RdReportInfoService rdReportInfoDao = (RdReportInfoService) SpringContextUtil.getBean("rdReportInfoServiceImpl");
        if (rTabCodesAll.size() > 0) {
            for (String tabCode : rTabCodesAll) {
                // 当前报表版本
                String nowVersion = rdTableInfoDao.getVersionInfo(tabCode, reportDate);
                // ------版本核对 Start------
                Iterator<String> itDate = reportDateList.iterator();
                while (itDate.hasNext()) {
                    String reportDateItem = itDate.next();
                    String checkVersion = rdTableInfoDao.getVersionInfo(tabCode, reportDateItem);
                    if (StrUtil.isNull(checkVersion)) {
                        itDate.remove();
                    }
                }

                /*
                 * 调整系统支持跨版本
                 */
                // ------版本核对 END------

                // ------获取当前报表编号的往期数据 Start------
                Map<String, Map<String, String>> allDataMap = new HashMap<>();
                // dataMap主键list 报表的单元格坐标信息如G0100_10_A
                List<String> dataMapKeyList = rdReportInfoDao.getDateMapKeyList(brNo, tabCode, reportDate, "_");
                if (reportDateList.size() > 0) {
                    for (String checkReportDate : reportDateList) {
                        Map<String, String> dateMap = new HashMap<>();
                        // 跨版本信息在此处进行调整
                        // dateMap = getReportDataShangHai(tabCode, brNo,
                        // checkReportDate, nowVersion, null);
                        dateMap = getReportDataForAutoCaculateWaveFormula(tabCode, brNo, checkReportDate, nowVersion, null);
                        if (dateMap.size() > 0 && dateMap != null) {
                            allDataMap.put(checkReportDate, dateMap);
                        }
                    }
                }
                // ------获取当前报表编号的往期数据 END------

                // ------计算波动差和波动范围 Start------
                if (allDataMap != null && allDataMap.size() > 0 && dataMapKeyList != null && dataMapKeyList.size() > 0 && reportDateList != null && reportDateList.size() > 0) {
                    String checkDate = "";
                    for (String dataMapKey : dataMapKeyList) {
                        // 存放数据key:月份，value:数据
                        Map<String, Double> dataMapValueMap = new HashMap<>();
                        checkDate = getLastReportDate(reportDate, reportRate);
                        // 获取单指标各期数据，存入dataMapValueMap中
                        for (int d = 0; d < reportDateList.size(); d++) {
                            Map<String, String> valueDataMap = allDataMap.get(checkDate);
                            if (valueDataMap != null && valueDataMap.size() > 0) {
                                String dataValue = valueDataMap.get(dataMapKey);
                                if (StrUtil.isNotNull(dataValue) && StrUtil.isNumberByBank(dataValue)) {
                                    Double dValue = Double.valueOf(dataValue);
                                    dataMapValueMap.put(checkDate, dValue);
                                }
                            }
                            checkDate = getLastReportDate(checkDate, reportRate);
                        }

                        // 存放波动差和波动范围用;隔开
                        String diffAndRange = "";
                        if (dataMapValueMap.size() > 0) {
                            // ------计算波动差波动范围的平均值 Start------
                            List<Double> diffValueList = new ArrayList<>();// 波动差的list
                            List<Double> rangeValueList = new ArrayList<>();// 波动范围的list
                            List<String> checkDateList = new ArrayList<>();
                            for (String key : dataMapValueMap.keySet()) {
                                checkDateList.add(key);
                            }
                            Collections.sort(checkDateList);
                            int monthDiff = getMonthDiff(checkDateList.get(0), getLastReportDate(reportDate, reportRate));
                            String checkDateLeft = getLastReportDate(reportDate, reportRate);
                            String checkDateRight = getLastReportDate(checkDateLeft, reportRate);
                            if (monthDiff == 0) {
                                monthDiff = 1;
                            }
                            // 当首个月份数值为空时取map中月份靠近的那个数值
                            String firstDate = getLastReportDate(reportDate, reportRate);
                            Double firstValue = dataMapValueMap.get(firstDate);
                            if (firstValue == null) {
                                firstValue = dataMapValueMap.get(checkDateList.get(checkDateList.size() - 1));
                                dataMapValueMap.put(firstDate, firstValue);
                            }
                            // 将需要计算的数值为空的以靠近的月份的数值作为自己的数值
                            for (int i = 0; i < monthDiff + 1; i++) {
                                Double leftValue = dataMapValueMap.get(checkDateLeft);
                                Double rightValue = dataMapValueMap.get(checkDateRight);
                                if (rightValue == null) {
                                    dataMapValueMap.put(checkDateRight, leftValue);
                                }
                                checkDateLeft = getLastReportDate(checkDateLeft, reportRate);
                                checkDateRight = getLastReportDate(checkDateRight, reportRate);
                            }

                            checkDateLeft = getLastReportDate(reportDate, reportRate);
                            checkDateRight = getLastReportDate(checkDateLeft, reportRate);
                            for (int i = 0; i < monthDiff; i++) {
                                Double leftValue = dataMapValueMap.get(checkDateLeft);
                                Double rightValue = dataMapValueMap.get(checkDateRight);
                                // 波动差
                                Double diff = null;
                                // 波动范围
                                Double range = null;
                                if (leftValue == null || rightValue == null) {
                                    diff = 0.00;
                                    range = 0.00;
                                } else {
                                    // diff = Math.abs(leftValue - rightValue);
                                    diff = leftValue - rightValue;
                                    if (diff == (double) 0 && rightValue == (double) 0) {
                                        range = rangMax * -1;
                                    } else if (diff != (double) 0 && rightValue == (double) 0) {
                                        range = rangMax;
                                    } else {
                                        range = diff / Math.abs(rightValue);
                                        /*
                                         * if (Math.abs(range) > rangMax) {
                                         * range = rangMax; }
                                         */
                                    }

                                }
                                diffValueList.add(diff);

                                rangeValueList.add(range);

                                checkDateLeft = getLastReportDate(checkDateLeft, reportRate);
                                checkDateRight = getLastReportDate(checkDateRight, reportRate);
                            }

                            // 当是月报时排序去掉最小值和最大值
                            /*
                             * if ("50".equals(tabType) && diffValueList.size()
                             * > 2) {// 月报且取到的数大于两期
                             * Collections.sort(diffValueList);
                             * diffValueList.remove(0);
                             * diffValueList.remove(diffValueList.size() - 1); }
                             * if ("50".equals(tabType) && rangeValueList.size()
                             * > 2) {// 月报且取到的数大于两期
                             * Collections.sort(rangeValueList);
                             * rangeValueList.remove(0);
                             * rangeValueList.remove(rangeValueList.size() - 1);
                             * }
                             */
                            // 波动差平均计算
                            // Double totalDiff = 0.0;
                            // 取最大波动上限和最小波动下限
                            Double maxDiff = 0.0;
                            Double minDiff = 0.0;
                            for (Double rangeValue : rangeValueList) {
                                if (maxDiff < rangeValue) {
                                    maxDiff = rangeValue;
                                }
                                if (minDiff > rangeValue) {
                                    minDiff = rangeValue;
                                }
                            }
                            /*
                             * String diffValueAvg = df.format(totalDiff /
                             * diffValueList.size()); // 波动范围平均计算 Double
                             * totalRange = 0.0; for (Double rangeValue :
                             * rangeValueList) { totalRange += rangeValue; }
                             * String rangeValueAvg = df.format(totalRange /
                             * rangeValueList.size());
                             */
                            // ------计算波动差波动范围的平均值 End------
                            diffAndRange = maxDiff + ";" + minDiff;
                            diffAndRangeDataMap.put(dataMapKey, diffAndRange);
                        }
                    }
                }
                // ------计算波动差和波动范围 End------
            }
        }
        return diffAndRangeDataMap;
    }

    /**
     * 功能描述：异动自动计算：获取当前报表数据
     *
     * @param tabCode
     * @param brNo
     * @param reportDate
     * @param dataMapKeyList
     * @return
     * @throws Exception
     * @author
     * @date 2018年3月2日
     * @modify log:
     */

    private static Map<String, String> getReportDataForAutoCaculateWaveFormula(String tabCode, String brNo, String reportDate, String nowVersion, List<String> dataMapKeyList) throws Exception {
        Map<String, String> dataMap = new HashMap<String, String>();
        // 百分比单元格坐标集合
        List<String> pctCellLists = new ArrayList<String>();

        RdReportInfoService rdReportInfoDao = (RdReportInfoService) SpringContextUtil.getBean("rdReportInfoServiceImpl");

        rdReportInfoDao.initRdReportDataForAutoCaculateWaveFormula(nowVersion, tabCode, brNo, reportDate, "0", dataMap, pctCellLists, dataMapKeyList);
        return dataMap;
    }

    /**
     * 功能描述：根据起止日期，获取月份的差值
     *
     * @param date1
     * @param date2
     * @return
     * @author
     * @date 2017年10月31日
     * @modify log:
     */
    private static int getMonthDiff(String date1, String date2) {
        Date raw1 = DateUtil.parse(date1, "yyyyMM");
        Date raw2 = DateUtil.parse(date2, "yyyyMM");
        int year1 = DateUtil.getYear(raw1);
        int year2 = DateUtil.getYear(raw2);
        int Month1 = DateUtil.getMonth(raw1);
        int Month2 = DateUtil.getMonth(raw2);
        int diffYear = year1 - year2;
        int diffMonth = Month1 - Month2;
        int result = Math.abs(diffYear * 12 + diffMonth);
        return result;
    }

}
