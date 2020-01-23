package com.efraiser.test.db.service.dy.dyreportinfo;

import com.efraiser.test.db.model.dy.DyReportData;
import com.efraiser.test.db.model.dy.DyReportInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface DyReportInfoService extends BaseService {

    /**
     * 获取报表数据Map集合:G0100_6_A:123.00
     *
     * @param tabCodes   需要加载的报表id集合
     * @param brNo       报表ID
     * @param reportDate 数据日期
     * @param flag       0:本期 1:上期 2:年初 3:去年同期 4:同期补报5:上月6：上季度7：上半年8：上年9:前三季度10：第四季度
     */
    void initDyReportData(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, Map<String, String> dataMap, List<String> pctCellLists) throws Exception;

    DyReportInfo getReportInfo(String tableId, String brNo, String reportDate, String dataType);


    DyReportInfo getReportInfoSummary(String tableId, String brNo, String reportDate, String dataType);


    /**
     * 保存报表数据信息
     *
     * @param reportInfo
     * @param reportDatas
     * @throws Exception
     */
    void saveReportInfoData(DyReportInfo reportInfo, List<DyReportData> reportDatas, DyReportInfo reportInfo2, List<DyReportData> reportDatas2) throws Exception;


    /**
     * 保存报表数据信息
     *
     * @param reportInfo
     * @param reportDatas
     * @throws Exception
     */
    void updateReportInfoData(DyReportInfo reportInfo, List<DyReportData> reportDatas) throws Exception;


    /**
     * 获取机构某个日期下某个类型的导入报表数
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @return
     */
    int getReportInfoCount(String brNo, String reportDate, String tabType, List<String> tabCodes);


    /**
     * 获取机构某个日期下某报表数
     *
     * @param brNo
     * @param reportDate
     * @param tableId
     * @return
     */
    int getReportInfoCount(String brNo, String reportDate, String tableId);


    void saveDyReportInfoForReplace(String reportId, List<DyReportData> rds) throws Exception;


    /**
     * 获取报表数据Map集合:G0100_6_A:123.00
     *
     * @param tabCodes   需要加载的报表id集合
     * @param brNo       报表ID
     * @param reportDate 数据日期
     * @param flag       0:本期 1:上期 2:年初 3:去年同期 4:同期补报5:上月6：上季度7：上半年8：上年9:前三季度10：第四季度
     */
    void initDyReportDataOfSummary(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, Map<String, String> dataMap, List<String> pctCellLists) throws Exception;


    int CheckParent(String brNo);


    int getReportInfoCount(String brNo, List<String> tabCodeList, String reportDate);


    void initDyReportDataForYD(Set<String> tabCodes, String brNo, String reportDate, String checkType, String flag, Map<String, String> dataMap, List<String> pctCellLists);


    void initDyReportDataCS(Set<String> tabCodes, String brNo, String reportDate, String checkType, String flag, Map<String, String> dataMap, List<String> pctCellLists);


    void initDyReportDataForRdAndBf(List<String> tabCodes, String brNo, String reportDate, Map<String, String> dataMap);

    void initRdReportDataForRdAndBf(List<String> iTabCodesDy, String dyBmcode, String reportDate, Map<String, String> dataMap);


    /**
     * 功能描述：获取报表数据Map集合 (DY和RD校验)
     *
     * @param tabCodes
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param flag         0:本期 1:上期 2:年初 3:去年同期
     * @param dataMap
     * @param pctCellLists
     * @throws Exception
     * @author
     * @date 2017年7月27日
     * @modify log:
     */
    void initDyReportData_dy_rd(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception;
}
