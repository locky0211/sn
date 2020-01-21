package com.efraiser.test.db.service.sys.jgyrecord;

import com.efraiser.test.db.service.BaseService;

public interface JgyRecordService  extends BaseService{


    void loginOpJgyRecord(String userId);

    Boolean checkJqy(String userId);
}
