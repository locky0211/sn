package com.efraiser.test.db.service.dy.dychecklog;

import com.efraiser.test.db.model.dy.DyCheckLogHelper;
import com.efraiser.test.db.model.dy.DyCheckResults;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyCheckLogService extends BaseService {

    void saveDyCheckLog(String organNo, String reportDate, String tabType, String cUserName);

    List<DyCheckLogHelper> getDyCheckLogHelperList(String reportDate, String tabType);

    List<DyCheckLogHelper> getDyCheckLogHelperListRecord(String areaCode, String reportDate, String tabType, String sortField, String sortOrder);

    String getNoCheckNum(String bmArea, String reportDate, String tabType);

    List<SysBmgl> getNoCheckBmList(String bmArea, String reportDate, String tabType);

    String getCheckNoPassNum(String bmArea, String reportDate, String tabType, String checkRisk);

    List<DyCheckResults> getCheckNoPassNumCheckResults(String bmArea, String reportDate, String tabType, String checkRisk);

    List<DyCheckResults> getCheckNoPassNumCheckResultsRecord(String bmArea, String reportDate, String tabType, String checkRisk);

    List<DyCheckLogHelper> getDyReportCheckLogForUser(String reportDate, String userId, String sortField, String sortOrder);


    /**
     * 首页获取检验记录数方法, 11/4日修改为获取历史表记录
     *
     * @author efraiser.xiaxiaofeng
     * @param reportDate
     * @param userId
     * @param sortField
     * @param sortOrder
     * @return
     */
    List<DyCheckLogHelper> getDyReportCheckLogForUserRecord(String reportDate, String userId, String sortField, String sortOrder);

    DyCheckLogHelper getDyReportChekNum(String reportDate, String userId);

    List<DyCheckResults> getNoCheckReportList(String reportDate, String userId);
}
