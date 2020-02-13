package com.efraiser.test.scheduler.manager;

import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.db.task.AbstractTaskBase;
import com.efraiser.test.scheduler.task.ProcessTaskUtil;
import com.efraiser.test.scheduler.task.QuartzTask;
import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;

import static org.quartz.CronScheduleBuilder.cronSchedule;
import static org.quartz.JobBuilder.newJob;
import static org.quartz.TriggerBuilder.newTrigger;


/**
 * 调度管理器
 */
public abstract class AbstractSchedulerManagerBase {

    private Logger log = LoggerFactory.getLogger(AbstractSchedulerManagerBase.class);

    private static final String JOB_DETAIL_GROUP_NAME = "defaultGroup";

    private SchedulerFactory schedulerFactory;
    public ProcessTaskUtil processTaskUtil;

    public AbstractSchedulerManagerBase() {
        schedulerFactory = new StdSchedulerFactory();
        processTaskUtil = (ProcessTaskUtil) SpringContextUtil.getBean("processTaskUtil");
    }

    public abstract void exceteCycleTask(String cycleId, String cycleName);


    /**
     * 添加工作项到调度中
     *
     * @throws SchedulerException
     * @throws ParseException
     */
    public void addJob(AbstractTaskBase tc, Class<? extends Job> jobClass) {
        try {
            Scheduler scheduler = schedulerFactory.getScheduler();
            JobDetail job = newJob(jobClass).withIdentity(tc.taskId(), JOB_DETAIL_GROUP_NAME).usingJobData("cycleName", tc.cycleName())
                    .build();
            CronTrigger trigger = newTrigger().withIdentity("trigger:" + tc.taskId(), JOB_DETAIL_GROUP_NAME)
                    .withSchedule(cronSchedule(tc.cronExpression().trim())).build();
            scheduler.scheduleJob(job, trigger);
            if (!scheduler.isShutdown()) {
                scheduler.start();
            }
            log.info("加载任务调度 [ {} ] 成功!!", tc.cycleName());
        } catch (SchedulerException e) {
            log.error("获取Scheduler调度器时错误!!" + e.getMessage(), e);
        }

    }

    public void updateJob(AbstractTaskBase tc, Class<? extends Job> jobClass) {
        try {
            Scheduler scheduler = schedulerFactory.getScheduler();
            JobKey jk = JobKey.jobKey(tc.taskId(), JOB_DETAIL_GROUP_NAME);
            if (scheduler.checkExists(jk)) {
                log.info("开始更新任务调度 [ {} ]!!", tc.cycleName());
                scheduler.deleteJob(jk);
                log.debug("删除任务调度 [ {} ] 成功!!", tc.cycleName());
                this.addJob(tc, jobClass);
                log.info("任务调度 [{} ] 更新成功!!", tc.cycleName());
            } else {
                log.error("更新任务调度时,未能找到JobKey[{}]的现有调度任务!!", tc.taskId());
            }
        } catch (SchedulerException e) {
            log.error("获取Scheduler调度器时错误!!" + e.getMessage(), e);
        }
    }


    /**
     * 生成任务实例
     *
     * @param className
     * @return
     */
    public QuartzTask generateTask(String className) {
        try {
            Class<?> taskClz = Class.forName(className);
            return (QuartzTask) taskClz.newInstance();
        } catch (ClassNotFoundException e) {
            log.error("未能找到类:" + className, e);
        } catch (InstantiationException e) {
            log.error("实例化类:{} 时出错!!", className, e);
        } catch (IllegalAccessException e) {
            log.error("反射人物类异常!" + e.getMessage(), e);
        }
        return null;
    }

    /**
     * @throws SchedulerException
     */
    public void pauseAll() throws SchedulerException {
        Scheduler scheduler = schedulerFactory.getScheduler();
        scheduler.pauseAll();
        log.info("调度器暂停运行");
    }

    /**
     * @throws SchedulerException
     */
    public void resumeAll() throws SchedulerException {
        Scheduler scheduler = schedulerFactory.getScheduler();
        scheduler.resumeAll();
        log.info("调度器恢复运行");
    }

    /**
     * @throws SchedulerException
     */
    public void shutdown() throws SchedulerException {
        Scheduler scheduler = schedulerFactory.getScheduler();
        //if (scheduler.isStarted()) {
            scheduler.shutdown();
       // }
        log.info("调度器停止运行");
    }

}
