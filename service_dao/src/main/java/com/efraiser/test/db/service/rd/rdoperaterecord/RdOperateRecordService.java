package com.efraiser.test.db.service.rd.rdoperaterecord;

import com.efraiser.test.common.vo.RdAuditScheduleHelp;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface RdOperateRecordService extends BaseService {


    List<RdAuditScheduleHelp> showRdAuditSchedule(String reportDate, String tabType);

    int calculate(String tabType, String organNo, String reportDate);
}
