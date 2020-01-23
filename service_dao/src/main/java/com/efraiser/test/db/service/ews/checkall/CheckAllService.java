package com.efraiser.test.db.service.ews.checkall;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.ews.CheckAll;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface CheckAllService extends BaseService {

    GridQueryPageResult getResultList(String brNo, String reportDate, String tableName, String checkDate,
                                      String formulaType, int pageIndex, int pageSize);

    List<CheckAll> getCheckAlls(String brno, String reportDate);

    GridQueryPageResult getResultListOrderByTableNumber(String brNo, String reportDate, String tableName,
                                                        String checkDate, String formulaType, int pageIndex, int pageSize);


    List<CheckAll> getcheckAlls(String brno, String reportDate,
                                String repCode, String formulaType);
}
