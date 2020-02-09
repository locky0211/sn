package com.efraiser.test.db.service.ews.checklog.impl;

import com.efraiser.test.db.model.ews.CheckLog;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checklog.CheckLogService;
import org.nutz.dao.Cnd;
import org.springframework.stereotype.Service;

@Service
public class CheckLogServiceImpl extends BaseServiceImpl<CheckLog> implements CheckLogService {

    @Override
    public void insertInform(StringBuffer msg, String checkType, String brNo) {
        dao().clear(CheckLog.class, Cnd.where("CHECK_TYPE", "=", checkType).and("BRNO", "=", brNo)
                .and("tableRange", "is", null).and("sjrq", "is", null));
        CheckLog logInfo = new CheckLog();
        logInfo.setLogInfo(msg.toString());
        logInfo.setCheckType(checkType);
        logInfo.setBrNo(brNo);
        dao().insert(logInfo);
    }

    @Override
    public void insertLog(StringBuffer msg, String checkType, String brNo, String repCode, String sjrq) {
        dao().clear(CheckLog.class, Cnd.where("CHECK_TYPE", "=", checkType).and("BRNO", "=", brNo)
                .and("tableRange", "=", repCode).and("sjrq", "=", sjrq.replace("-", "")));
        CheckLog logInfo = new CheckLog();
        logInfo.setLogInfo(msg.toString());
        logInfo.setCheckType(checkType);
        logInfo.setBrNo(brNo);
        logInfo.setTableRange(repCode);
        logInfo.setSjrq(sjrq);
        dao().insert(logInfo);

    }
}
