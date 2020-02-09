package com.efraiser.test.db.service.ews.checklog;

import com.efraiser.test.db.service.BaseService;

public interface CheckLogService  extends BaseService {

    void insertInform(StringBuffer msg, String checkType, String brNo);

    void insertLog(StringBuffer msg, String checkType, String brNo, String repCode, String sjrq);
}
