package com.efraiser.test.db.service.ews.checkbrtemp;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.ews.CheckBrTemp;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface CheckBrTempService extends BaseService {

    List<CheckBrTemp> getCheckBrTempList();

    List<CheckBrTemp> getCheckBrTempByBrNo(String brNo, String reportDate, String version, String repCode);

    void addCheckBrTemp(String brNo, String reportDate, String version, String formulaType, int sortNum,
                        String tableRange);

    void deleteCheckBrTempByBrNo(String brNo, String reportDate, String version, String tableRange);

    void updateCheckBrTempByBrNo(String brNo, String reportDate, String version, String tableRange);

    GridQueryPageResult getResultList(int pageIndex, int pageSize);

    GridQueryPageResult getResultList(String brNo, String reportDate, String repCode, String version,
                                      int pageIndex, int pageSize);
}
