package com.efraiser.test.db.service.dy.dyvaluechangerecord;

import com.efraiser.test.db.model.dy.DyValueChangeRecordHelper;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyValueChangeRecordService extends BaseService {


    List<DyValueChangeRecordHelper> getValueChangeRecord(String userId,
                                                         String date, String tabCode);
}
