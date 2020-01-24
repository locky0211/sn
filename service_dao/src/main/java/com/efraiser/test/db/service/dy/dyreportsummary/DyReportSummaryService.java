package com.efraiser.test.db.service.dy.dyreportsummary;

import com.efraiser.test.db.model.dy.DyReportData;
import com.efraiser.test.db.model.dy.DyReportDataSummary;
import com.efraiser.test.db.model.dy.DyReportInfoSummary;
import com.efraiser.test.db.model.dy.DyTableImportHelper;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface DyReportSummaryService extends BaseService {

    int noImportReport(String bmCode, String reportDate, String tabType);


    List<DyReportData> getRowNum(String reportDate, String reportId);

    void saveDate(DyReportDataSummary rdpd);

    DyReportDataSummary getData(String reportDate, String reportId, int reportRowNum);

    void saveReportInfo(DyReportInfoSummary reportInfo);

    Object getDyTableInfoListByBrNo(String brNo, String tabType,String reportDate, String flag);

    List<DyTableImportHelper> getAllReporIdtList(String bmCodes, String reportDate, String tableId);

    String getTableId(String reportId);

    Map<String, String> doInitDataMap(String tableId, String reportId, String reportDate);

    void delReportInfo(String tableId3, String brNo, String reportDate);

    int reportCount(String tableId3, String brNo, String reportDate);

    List<String> getTabCodeList(String brNo, String reportDate, String tabType, boolean include, boolean isRepay);

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
     * 获取汇总机构汇总的报表情况
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @return
     */
   List<DyTableImportHelper> getDyTableInfoListByBmCodes(String brNo, String tabType, String reportDate, String flag) throws Exception;

    /**
     * 获取汇总机构所需要汇总的报表
     *
     * @param bmCode
     * @param reportDate
     * @param tabType
     * @return
     */
    List<DyTableImportHelper> getDyTableInfoListByBmCode(List<String> bmCode, String tabType, String reportDate, String flag) throws Exception;

    List<DyReportDataSummary> getDate(String reportId);

    /**
     *
     *
     * 功能描述：列出哪些机构未导入报表
     * @author
     * @date 2016年4月25日
     * @param table_id
     * @param brNo
     * @param tabType
     * @param reportDate
     * @return
     * @throws Exception
     * @modify log:
     */
     List<DyTableImportHelper> getDyReportBrno(String table_id, String brNo, String tabType, String reportDate) throws Exception;
}
