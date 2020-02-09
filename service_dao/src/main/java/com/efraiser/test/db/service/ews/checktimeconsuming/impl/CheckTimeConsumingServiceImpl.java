package com.efraiser.test.db.service.ews.checktimeconsuming.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.db.model.ews.CheckTimeConsuming;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checktimeconsuming.CheckTimeConsumingService;
import org.nutz.dao.Sqls;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckTimeConsumingServiceImpl extends BaseServiceImpl<CheckTimeConsuming> implements CheckTimeConsumingService {

    @Override
    public void insertTimeConsuming(String brNo, String reportDate, String version, String formulaId) {
        CheckTimeConsuming consuming = new CheckTimeConsuming();
        consuming.setBrno(brNo);
        consuming.setSjrq(reportDate);
        consuming.setVersion(version);
        consuming.setFormulaid(formulaId);
        consuming.setStarttime(DateUtil.getNow(DateUtil.FORMAT_FULL));
        this.dao().insert(consuming);
    }

    @Override
    public void updateConsuming(String brNo, String reportDate, String version, String formulaId) {
        String endTime = DateUtil.getNow(DateUtil.FORMAT_FULL);
        String sql = "SELECT ID,BRNO,SJRQ,VERSION,FORMULAID,STARTTIME,ENDTIME,TIMECONSUMING FROM SAM.CHECK_TIME_CONSUMING WHERE BRNO='"
                + brNo + "' AND SJRQ ='" + reportDate + "'AND VERSION='" + version + "' AND FORMULAID ='" + formulaId + "'";
        List<CheckTimeConsuming> consumings = this.getListObjectBySql(sql, CheckTimeConsuming.class);
        for (CheckTimeConsuming c : consumings) {
            c.setEndtime(endTime);
            c.setTimeconsuming(DateUtil.parse(endTime, DateUtil.FORMAT_FULL).getTime()
                    - DateUtil.parse(c.getStarttime(), DateUtil.FORMAT_FULL).getTime() + "");
            this.dao().update(c);
        }
    }

    @Override
    public void deleteConsuming(String brNo, String reportDate, String version, String formulaId) {
        String sql = "DELETE FROM SAM.CHECK_TIME_CONSUMING WHERE BRNO='" + brNo + "' AND SJRQ ='" + reportDate
                + "'AND VERSION='" + version + "' AND FORMULAID ='" + formulaId + "'";
        dao().execute(Sqls.create(sql));
    }
}
