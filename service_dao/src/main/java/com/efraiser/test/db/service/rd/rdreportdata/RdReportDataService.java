package com.efraiser.test.db.service.rd.rdreportdata;

import com.efraiser.test.db.model.rd.RdReportData;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface RdReportDataService extends BaseService {


    Map<String, String> doInitDataMap(String tableId, String reportId, String reportDate);

    List<RdReportData> getReportDataList(String tableId, String reportDate, String brNo, String dateType);

    void updateValue(String reportId, String[] area, double changeValue, String date);

    List<RdReportData> getReportDataListToDownload(String reportId, String reportDate);

    Map<String, String> getRdDataMap(List<String> tabCodes, String reportDate, Map<String, String> dataMap);

    /**
     * 功能描述：根据rowNum删除数据
     *
     * @param reportDate
     * @param rowNum
     * @author
     * @date 2017年9月29日
     * @modify log:
     */
    void deleteByRowNum(String reportDate, int rowNum);
}
