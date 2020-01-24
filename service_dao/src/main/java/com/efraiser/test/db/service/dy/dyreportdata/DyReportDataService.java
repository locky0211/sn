package com.efraiser.test.db.service.dy.dyreportdata;

import com.efraiser.test.db.model.dy.DyReportData;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface DyReportDataService extends BaseService {


    Map<String, String> doInitDataMap(String tableId, String reportId, String reportDate);


    List<DyReportData> getReportDataList(String tableId, String reportDate, String brNo, String dateType);


    void updateValue(String reportId, String[] area, double changeValue, String date);

    List<DyReportData> getReportDataListToDownload(String reportId,String reportDate);


    Map<String, String> getDyDataMap(List<String> tabCodes,String reportDate,  Map<String, String> dataMap);
}
