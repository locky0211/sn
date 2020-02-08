package com.efraiser.test.scheduler.task;

import com.efraiser.test.scheduler.SchedulerManager;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class QuartzJob implements Job {
	private Logger logger = LoggerFactory.getLogger(QuartzJob.class);
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		logger.debug("进入QuartzJob方法");

		String cycleId = context.getJobDetail().getKey().getName();
		String cycleName = context.getJobDetail().getJobDataMap().getString("cycleName");
		SchedulerManager.getInstance().exceteCycleTask(cycleId, cycleName);
	}

}
