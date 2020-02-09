package com.efraiser.test.db.service.ews.checkFformulaqueue;

import com.efraiser.test.db.model.ews.CheckFormulaQueue;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface CheckFormulaQueueService extends BaseService {

    List<CheckFormulaQueue> getQueueList(String brNo, String reportDate, String version, String repCode);

    List<CheckFormulaQueue> getQueueListActive(String brNo, String reportDate, String version, String repCode);

    void deleteQueue(String brNo, String reportDate, String version, String repCode);
}
