package com.efraiser.test.scheduler.init;

import com.efraiser.test.db.model.ts.TsTaskCycle;
import com.efraiser.test.db.service.ts.tstaskcycle.TsTaskCycleService;
import com.efraiser.test.db.service.ts.tstaskcycle.impl.TsTaskCycleServiceImpl;
import com.efraiser.test.scheduler.SchedulerManager;
import org.quartz.SchedulerException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 定时任务初始化
 */
@Component
public class TsQuartzSetup {

    private Logger logger = LoggerFactory.getLogger(TsQuartzSetup.class);


    private static TsQuartzSetup tsQuartzSetup;

    @Autowired
    private TsTaskCycleService tsTaskCycleService;

    @Autowired
    private SchedulerManager schedulerManager;


    public TsQuartzSetup() {
        tsQuartzSetup = this;
    }

    public static TsQuartzSetup getInstance() {
        return tsQuartzSetup;
    }


    public void init() {
        TsTaskCycleServiceImpl tsTaskCycleServiceImpl = (TsTaskCycleServiceImpl) tsTaskCycleService;

        List<TsTaskCycle> tcList = tsTaskCycleServiceImpl.query(null, null);
        for (TsTaskCycle tc : tcList) {
            schedulerManager.addJob(tc);
        }
        logger.info("任务调度启动成功!!!....................任务周期数[ {} ]", tcList.size());
    }

    public void destroy() {
        try {
            schedulerManager.shutdown();
        } catch (SchedulerException e) {
            logger.error("停止任务调度异常....", e);
        }
    }
}
