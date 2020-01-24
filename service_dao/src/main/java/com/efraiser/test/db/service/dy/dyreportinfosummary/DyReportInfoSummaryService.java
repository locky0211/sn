package com.efraiser.test.db.service.dy.dyreportinfosummary;

import com.efraiser.test.db.model.dy.DyReportData;
import com.efraiser.test.db.model.dy.DyReportInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface DyReportInfoSummaryService extends BaseService {

    /**
     * 获取报表数据Map集合:G0100_6_A:123.00
     *
     * @param tabCodes   需要加载的报表id集合
     * @param brNo       报表ID
     * @param reportDate 数据日期
     * @param flag       0:本期 1:上期 2:年初 3:去年同期 4:同期补报
     */
    void initDyReportData(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception;

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

    void saveDyReportInfoForReplace(String reportId, List<DyReportData> rds) throws Exception ;
}
