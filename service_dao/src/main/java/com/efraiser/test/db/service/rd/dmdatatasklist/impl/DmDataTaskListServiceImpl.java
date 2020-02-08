package com.efraiser.test.db.service.rd.dmdatatasklist.impl;

import com.efraiser.test.db.model.rd.DmDataTaskList;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.dmdatatasklist.DmDataTaskListService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

@Service
public class DmDataTaskListServiceImpl extends BaseServiceImpl<DmDataTaskList> implements DmDataTaskListService {


    @Override
    public DmDataTaskList updateDataTaskFlag(String id, String flag) {
        String sqlString = "UPDATE DM_DATA_TASK_LIST SET TASK_FLAG=@flag WHERE ID=@id";
        Sql sql = Sqls.create(sqlString);
        if ("1".equals(flag)) {
            sql.params().set("flag", "0");
        } else {
            sql.params().set("flag", "1");

        }
        sql.params().set("id", id);
        super.dao().execute(sql);
        return super.fetch(id);
    }

    @Override
    public int getMaxTaskIndex() {
        String sqlString = "SELECT decode(max(task_index),NULL,0,max(task_index)+1) FROM DM_DATA_TASK_LIST";
        return super.singleInt(sqlString);
    }
}
