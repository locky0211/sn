package com.efraiser.test.db.service.ews.easttask;

import com.efraiser.test.db.model.ews.EastTask;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface EastTaskService extends BaseService {


    EastTask updateTaskFlag(String id, String flag) throws Exception;

    /**
     * 根据任务周期获取调度任务列表
     *
     * @param cycleId
     * @return
     */
    List<EastTask> getTaskListsByFlag(String cycleId);
}
