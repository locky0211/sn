package com.efraiser.test.scheduler.manager.east;

import java.util.List;

import com.efraiser.test.db.model.ews.EastTask;
import com.efraiser.test.db.service.ews.easttask.EastTaskService;
import com.efraiser.test.db.service.ews.easttask.impl.EastTaskServiceImpl;
import com.efraiser.test.scheduler.manager.AbstractSchedulerManagerBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


/**
 * 调度管理器
 */
@Component
public class EastSchedulerManager extends AbstractSchedulerManagerBase {

    private Logger log = LoggerFactory.getLogger(EastSchedulerManager.class);

    private static EastSchedulerManager manager;


    @Autowired
    private EastTaskService eastTaskService;

    public EastSchedulerManager() {
        super();
        manager = this;
    }


    public static EastSchedulerManager getInstance() {
        return manager;
    }


    @Override
    public void exceteCycleTask(String cycleId, String cycleName) {
        EastTaskServiceImpl eastTaskDao;

        try {
            eastTaskDao = (EastTaskServiceImpl) eastTaskService;
        } catch (Exception e) {
            log.error("未能获取调度任务Service类!!", e);
            return;
        }
        List<EastTask> tLists = eastTaskDao.getTaskListsByFlag(cycleId);
        // 循环执行周期任务子任务项
        for (EastTask td : tLists) {
            log.info("调度任务-----[ {} ]----开始执行", td.getCricleExplain());
            executeTask(td);
            log.info("调度任务-----[ {} ]----完成执行", td.getCricleExplain());
        }

    }

    private void executeTask(EastTask tl) {
        log.info("---开始执行子项任务:[{}]", tl.getCricleExplain());
        try {
            String taskConString = "com.efraiser.test.scheduler.task.job.ExcuteFileTask";
            processTaskUtil.runClass(taskConString);
        } catch (Exception e) {
            log.error("--执行任务{" + tl.getCricleExplain() + "}时出项异常{" + e.getMessage() + "}", e);
        }

        log.info("---任务子项执行完成:[{}]", tl.getCricleExplain());
    }
}
