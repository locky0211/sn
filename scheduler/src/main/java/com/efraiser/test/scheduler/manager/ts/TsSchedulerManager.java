package com.efraiser.test.scheduler.manager.ts;

import java.util.List;

import com.efraiser.test.db.model.ts.TsTaskList;
import com.efraiser.test.db.service.ts.tstasklist.TsTaskListService;
import com.efraiser.test.scheduler.manager.AbstractSchedulerManagerBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


/**
 * 调度管理器
 */
@Component
public class TsSchedulerManager extends AbstractSchedulerManagerBase {

    private Logger log = LoggerFactory.getLogger(AbstractSchedulerManagerBase.class);

    private static TsSchedulerManager manager;

    public TsSchedulerManager() {
        super();
        manager = this;
    }

    public static TsSchedulerManager getInstance() {
        return manager;
    }

    @Autowired
    private TsTaskListService tsTaskListService;

    @Override
    public void exceteCycleTask(String cycleId, String cycleName) {

        List<TsTaskList> tLists = tsTaskListService.getTaskListsByCycleId(cycleId);
        // 循环执行周期任务子任务项
        for (TsTaskList td : tLists) {
            executeTask(td);
        }
        log.info("调度任务-----[ {} ]----完成执行", cycleName);
    }


    private void executeTask(TsTaskList tl) {
        //log.info("---开始执行子项任务:[{}]", tl.getTaskName());
        try {
            String taskConString = tl.getTaskContent().trim();
            String taskType = tl.getTaskType().toUpperCase();
            if ("CLASS".equals(taskType)) {// 任务类型CLASS
                processTaskUtil.runClass(taskConString);
            } else if ("SQL".equals(taskType)) {// 任务类型SQL
                processTaskUtil.runSql(taskConString,"");
            } else if ("BAT".equals(taskType)) {// 执行文件bat
                processTaskUtil.runBat(taskConString);
            } else if ("PROCEDURE".equals(taskType)) {// 执行存储过程
                processTaskUtil.runProc(taskConString);
            }
        } catch (Exception e) {
            log.error("--执行任务{" + tl.getTaskContent() + "}时出项异常{" + e.getMessage() + "}", e);
        }

        log.info("---任务子项执行完成:[{}]", tl.getTaskName());
    }
}
