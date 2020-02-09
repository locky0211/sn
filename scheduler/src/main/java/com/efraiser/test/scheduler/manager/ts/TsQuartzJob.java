package com.efraiser.test.scheduler.manager.ts;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TsQuartzJob implements Job {
	private Logger logger = LoggerFactory.getLogger(TsQuartzJob.class);
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		logger.debug("进入TsQuartzJob方法");

		String cycleId = context.getJobDetail().getKey().getName();
		String cycleName = context.getJobDetail().getJobDataMap().getString("cycleName");
		TsSchedulerManager.getInstance().exceteCycleTask(cycleId, cycleName);
	}

}
