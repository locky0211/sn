package com.efraiser.test.db.service.dy.dycheckwithRrdbfresultsrecord;

import com.efraiser.test.db.service.BaseService;

public interface DyCheckWithRdBfResultsRecordService extends BaseService {

    String findRemarksById(String organNoDy, String organNoRd,
                           String organNoBf, String reportDate,
                           String formula);
}
