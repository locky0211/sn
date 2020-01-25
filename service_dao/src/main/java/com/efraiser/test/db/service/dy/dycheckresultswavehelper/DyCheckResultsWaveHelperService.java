package com.efraiser.test.db.service.dy.dycheckresultswavehelper;

import com.efraiser.test.db.model.dy.DyCheckResultsWaveHelper;
import com.efraiser.test.db.service.BaseService;

public interface DyCheckResultsWaveHelperService  extends BaseService {

    DyCheckResultsWaveHelper fetchDyCheckResultsForViewCS(String id);
}
