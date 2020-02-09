package com.efraiser.test.db.service.ews.easttask.impl;

import com.efraiser.test.db.model.ews.EastTask;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.easttask.EastTaskService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EastTaskServiceImpl extends BaseServiceImpl<EastTask> implements EastTaskService {

    @Override
    public EastTask updateTaskFlag(String id, String flag) throws Exception {
        String sqlString = "UPDATE SAM.EAST_TASK SET FLAG=@flag WHERE ID=@id";
        Sql sql = Sqls.create(sqlString);
        if ("1".equals(flag)) {
            sql.params().set("flag", "0");
        } else {
            sql.params().set("flag", "1");
        }
        sql.params().set("id", id);
        super.dao().execute(sql);
        return super.dao().fetchLinks(super.fetch(id), "eastTask");
    }

    @Override
    public List<EastTask> getTaskListsByFlag(String cycleId) {
        return super.query(Cnd.where("flag", "=", 1).and("id", "=", cycleId), null);
    }
}
