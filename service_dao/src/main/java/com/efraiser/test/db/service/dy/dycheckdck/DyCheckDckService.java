package com.efraiser.test.db.service.dy.dycheckdck;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.service.BaseService;

public interface DyCheckDckService extends BaseService {

    GridQueryPageResult getCheckDckList(String brNo, String reportDate, String reportCode, String checkDate, int pageIndex, int pageSize);
}
