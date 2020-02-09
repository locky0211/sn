package com.efraiser.test.db.service.ews.checkFformulaqueue.impl;

import com.efraiser.test.db.model.ews.CheckFormulaQueue;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.checkFformulaqueue.CheckFormulaQueueService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckFormulaQueueServiceImpl extends BaseServiceImpl<CheckFormulaQueue> implements CheckFormulaQueueService {


    @Override
    public List<CheckFormulaQueue> getQueueList(String brNo, String reportDate, String version, String repCode) {

        Criteria cri = Cnd.cri();
        cri.where().and("brNo", "=", brNo);
        cri.where().and("sjrq", "=", reportDate);
        cri.where().and("version", "=", version);
        cri.where().and("tableRange", "=", repCode);
        cri.getOrderBy().asc("SORTNUM");
        return dao().query(CheckFormulaQueue.class, cri);
    }

    @Override
    public List<CheckFormulaQueue> getQueueListActive(String brNo, String reportDate, String version, String repCode) {

        Criteria cri = Cnd.cri();
        cri.where().and("brNo", "=", brNo);
        cri.where().and("sjrq", "=", reportDate);
        cri.where().and("version", "=", version);
        cri.where().and("tableRange", "=", repCode);
        cri.where().and("STATUS", "=", "1");
        cri.getOrderBy().asc("SORTNUM");
        return dao().query(CheckFormulaQueue.class, cri);
    }

    @Override
    public void deleteQueue(String brNo, String reportDate, String version, String repCode) {
        String queueSql = "DELETE FROM CHECK_FORMULA_QUEUE WHERE BRNO='" + brNo + "'AND SJRQ ='" + reportDate
                + "'AND VERSION='" + version + "' AND TABLERANGE ='" + repCode + "'";
        Sql deleteQueueStr = Sqls.create(queueSql);
        dao().execute(deleteQueueStr);
    }
}
