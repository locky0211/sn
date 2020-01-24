package com.efraiser.test.db.service.dy.dyreportconfig.impl;

import com.efraiser.test.db.model.dy.DyReportConfig;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyreportconfig.DyReportConfigService;
import org.springframework.stereotype.Service;

@Service
public class DyReportConfigServiceImpl extends BaseServiceImpl<DyReportConfig> implements DyReportConfigService {

    public void addOrUpdateConfig(DyReportConfig dyReportConfig) {
        this.clear();
        dao().insert(dyReportConfig);

    }
}
