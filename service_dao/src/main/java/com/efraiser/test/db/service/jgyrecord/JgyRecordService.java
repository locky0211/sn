package com.efraiser.test.db.service.jgyrecord;

import com.efraiser.test.db.service.BaseService;

public interface JgyRecordService<JgyRecord>  extends BaseService{


    void loginOpJgyRecord(String userId);

    Boolean checkJqy(String userId);
}
