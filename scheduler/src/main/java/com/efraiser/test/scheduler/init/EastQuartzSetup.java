package com.efraiser.test.scheduler.init;

import java.util.List;

import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.db.model.ews.EastTask;
import com.efraiser.test.db.service.ews.easttask.impl.EastTaskServiceImpl;
import com.efraiser.test.scheduler.manager.east.EastQuartzJob;
import com.efraiser.test.scheduler.manager.east.EastSchedulerManager;
import org.quartz.SchedulerException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Component;

@Component
public class EastQuartzSetup {
    private static final Logger logger = LoggerFactory.getLogger(EastQuartzSetup.class);


    private static EastQuartzSetup eastQuartzSetup;

    public EastQuartzSetup() {
        eastQuartzSetup = this;
    }

    public static EastQuartzSetup getInstance() {
        return eastQuartzSetup;
    }


    public void init() {
        EastTaskServiceImpl eastTaskServiceImpl = (EastTaskServiceImpl) SpringContextUtil.getBean("eastTaskServiceImpl");
        List<EastTask> etList = eastTaskServiceImpl.query(null, null);
        for (EastTask et : etList) {
            EastSchedulerManager.getInstance().addJob(et, EastQuartzJob.class);
        }
        logger.info("任务调度启动成功!!!....................任务周期数[ {} ]", etList.size());
    }

    public void destroy() {
        try {
            EastSchedulerManager.getInstance().shutdown();
        } catch (SchedulerException e) {
            logger.error("停止任务调度异常....");
            e.printStackTrace();
        }
    }

}
