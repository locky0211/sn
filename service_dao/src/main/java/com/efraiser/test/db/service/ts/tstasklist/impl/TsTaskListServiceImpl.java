package com.efraiser.test.db.service.ts.tstasklist.impl;

import com.efraiser.test.db.model.ts.TsTaskList;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ts.tstasklist.TsTaskListService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TsTaskListServiceImpl extends BaseServiceImpl<TsTaskList> implements TsTaskListService {


    @Override
    public int getMaxTaskIndex() {
        String sqlString = "SELECT decode(max(task_index),NULL,0,max(task_index)+1) FROM TS_TASK_LIST";
        return super.singleInt(sqlString);
    }

    @Override
    public List<TsTaskList> getTaskListsByCycleId(String cycleId) {
        return super.query(Cnd.where("cycleId", "=", cycleId).and("flag", "=", "1").asc("taskIndex"), null);
    }

    @Override
    public TsTaskList updateTaskFlag(String id, String flag) throws Exception {
        String sqlString = "UPDATE TS_TASK_LIST SET FLAG=@flag WHERE ID=@id";
        Sql sql = Sqls.create(sqlString);
        if ("1".equals(flag)) {
            sql.params().set("flag", "0");
        } else {
            sql.params().set("flag", "1");

        }
        sql.params().set("id", id);
        super.dao().execute(sql);
        return super.dao().fetchLinks(super.fetch(id), "taskCycle");
    }
}
