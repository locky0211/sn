package com.efraiser.test.db.service.ews.checktimeconsuming;

import com.efraiser.test.db.service.BaseService;

public interface CheckTimeConsumingService extends BaseService {

    void insertTimeConsuming(String brNo, String reportDate, String version, String formulaId);

    void updateConsuming(String brNo, String reportDate, String version, String formulaId);

    void deleteConsuming(String brNo, String reportDate, String version, String formulaId);
}
