package com.efraiser.test.db.service.dy.dyreportconfig;

import com.efraiser.test.db.model.dy.DyReportConfig;
import com.efraiser.test.db.service.BaseService;

public interface DyReportConfigService extends BaseService {


    void addOrUpdateConfig(DyReportConfig dyReportConfig);
}
