package com.efraiser.test.scheduler;

import static org.quartz.CronScheduleBuilder.cronSchedule;
import static org.quartz.JobBuilder.newJob;
import static org.quartz.TriggerBuilder.newTrigger;

import java.text.ParseException;
import java.util.List;

import com.efraiser.test.db.model.ts.TsTaskCycle;
import com.efraiser.test.db.model.ts.TsTaskList;
import com.efraiser.test.db.service.ts.tstasklist.TsTaskListService;
import com.efraiser.test.scheduler.task.ProcessTaskUtil;
import com.efraiser.test.scheduler.task.QuartzJob;
import com.efraiser.test.scheduler.task.QuartzTask;
import org.quartz.CronTrigger;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


/**
 * 调度管理器
 */
@Component
public class SchedulerManager {

    private Logger log = LoggerFactory.getLogger(SchedulerManager.class);

    private static final String JOB_DETAIL_GROUP_NAME = "defaultGroup";

    private static SchedulerManager manager;
    private SchedulerFactory schedulerFactory;

    private SchedulerManager() {
        manager = this;
        schedulerFactory = new StdSchedulerFactory();
    }

    public static SchedulerManager getInstance() {
        return manager;
    }

    @Autowired
    private TsTaskListService tsTaskListService;

    @Autowired
    private ProcessTaskUtil processTaskUtil;


    /**
     * 添加工作项到调度中
     *
     * @throws SchedulerException
     * @throws ParseException
     */
    public void addJob(TsTaskCycle tc) {
        try {
            Scheduler scheduler = schedulerFactory.getScheduler();
            JobDetail job = newJob(QuartzJob.class).withIdentity(tc.getId(), JOB_DETAIL_GROUP_NAME).usingJobData("cycleName", tc.getCycleName())
                    .build();
            CronTrigger trigger = newTrigger().withIdentity("trigger:" + tc.getId(), JOB_DETAIL_GROUP_NAME)
                    .withSchedule(cronSchedule(tc.getRunExpr().trim())).build();
            scheduler.scheduleJob(job, trigger);
            if (!scheduler.isShutdown()) {
                scheduler.start();
            }
            log.info("加载任务调度 [ {} ] 成功!!", tc.getCycleName());
        } catch (SchedulerException e) {
            log.error("获取Scheduler调度器时错误!!" + e.getMessage(), e);
        }

    }

    public void updateJob(TsTaskCycle tc) {
        try {
            Scheduler scheduler = schedulerFactory.getScheduler();
            JobKey jk = JobKey.jobKey(tc.getId(), JOB_DETAIL_GROUP_NAME);
            if (scheduler.checkExists(jk)) {
                log.info("开始更新任务调度 [ {} ]!!", tc.getCycleName());
                scheduler.deleteJob(jk);
                log.debug("删除任务调度 [ {} ] 成功!!", tc.getCycleName());
                this.addJob(tc);
                log.info("任务调度 [{} ] 更新成功!!", tc.getCycleName());
            } else {
                log.error("更新任务调度时,未能找到JobKey[{}]的现有调度任务!!", tc.getId());
            }
        } catch (SchedulerException e) {
            log.error("获取Scheduler调度器时错误!!" + e.getMessage(), e);
        }
    }

    public void exceteCycleTask(String cycleId, String cycleName) {

        List<TsTaskList> tLists = tsTaskListService.getTaskListsByCycleId(cycleId);
        // 循环执行周期任务子任务项
        for (TsTaskList td : tLists) {
            SchedulerManager.getInstance().executeTask(td);
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
            e.printStackTrace();
            log.error("--执行任务{}时出项异常{}", tl.getTaskName(), e.getMessage());
        }

        log.info("---任务子项执行完成:[{}]", tl.getTaskName());
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
            log.error("未能找到类:" + className);
            e.printStackTrace();
        } catch (InstantiationException e) {
            log.error("实例化类:{} 时出错!!", className);
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            log.error("反射人物类异常!" + e.getMessage());
            e.printStackTrace();
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
        if (scheduler.isStarted()) {
            scheduler.shutdown();
        }
        log.info("调度器停止运行");
    }

}
