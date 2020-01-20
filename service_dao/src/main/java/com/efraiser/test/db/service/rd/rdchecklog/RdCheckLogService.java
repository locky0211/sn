package com.efraiser.test.db.service.rd.rdchecklog;

import com.efraiser.test.db.model.rd.RdCheckResults;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.tmp.RdCheckLogHelper;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdCheckLogService <T> extends BaseService {

    void saveRdCheckLog(String organNo, String reportDate, String tabType, String cUserName);

    List<RdCheckLogHelper> getRdCheckLogHelperList(String reportDate, String tabType);

    List<RdCheckLogHelper> getRdCheckLogHelperListRecord(String areaCode, String reportDate, String tabType, String sortField, String sortOrder);

    String getNoCheckNum(String bmArea, String reportDate, String tabType);

    List<SysBmgl> getNoCheckBmList(String bmArea, String reportDate, String tabType);

    String getCheckNoPassNum(String bmArea, String reportDate, String tabType, String checkRisk);

    List<RdCheckResults> getCheckNoPassNumCheckResults(String bmArea, String reportDate, String tabType, String checkRisk);

    List<RdCheckResults> getCheckNoPassNumCheckResultsRecord(String bmArea, String reportDate, String tabType, String checkRisk);

    List<RdCheckLogHelper> getRdReportCheckLogForUser(String reportDate, String userId, String sortField, String sortOrder);

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
     List<RdCheckLogHelper> getRdReportCheckLogForUserRecord(String reportDate, String userId, String sortField, String sortOrder);

    RdCheckLogHelper getRdReportChekNum(String reportDate, String userId);

    List<RdCheckResults> getNoCheckReportList(String reportDate, String userId);
}
