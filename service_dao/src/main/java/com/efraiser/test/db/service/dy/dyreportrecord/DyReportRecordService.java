package com.efraiser.test.db.service.dy.dyreportrecord;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.service.BaseService;

public interface DyReportRecordService extends BaseService {

    GridQueryPageResult getDyReportRecordList(int pageIndex, int pageSize, String userId, String reportDate, String tabType);
}
