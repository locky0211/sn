package com.efraiser.test.db.service.dy.dycheckwithrdbfresults;

import com.efraiser.test.db.model.dy.DyCheckWithRdBfResults;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyCheckWithRdBfResultsService extends BaseService {

    void insertResults(String brNoDy, String brNoRd, String brNoBf, String reportDate, String tabType, List<DyCheckWithRdBfResults> checkResults);

    List<DyCheckWithRdBfResults> getDyCheckWithRdBfResults(
            String brNoDy, String brNoRd, String brNoBf, String reportDate,
            String tabType, String userId);

    DyCheckWithRdBfResults fetchDyCheckResultsForView(String id);

    List<DyCheckWithRdBfResults> getDyCheckWithRdBfResultsRecord(
            String brNoDy, String brNoRd, String brNoBf, String reportDate,
            String tabType, String userId);

    void insertCheckResults(List<DyCheckWithRdBfResults> checkResults);

    String getZdNameByZdValue(String zdValue);
}
