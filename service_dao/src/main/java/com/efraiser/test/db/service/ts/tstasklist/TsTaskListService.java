package com.efraiser.test.db.service.ts.tstasklist;

import com.efraiser.test.db.model.ts.TsTaskList;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface TsTaskListService extends BaseService {


    /**
     * 获取执行顺序最高值+1
     *
     * @return
     */
    int getMaxTaskIndex();


    /**
     * 根据任务周期获取调度任务列表
     *
     * @param cycleId
     * @return
     */
    List<TsTaskList> getTaskListsByCycleId(String cycleId);


     TsTaskList updateTaskFlag(String id, String flag) throws Exception;
}
