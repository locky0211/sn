package com.efraiser.test.scheduler.manager.east;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EastQuartzJob implements Job {
	private Logger logger = LoggerFactory.getLogger(EastQuartzJob.class);
	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		logger.debug("进入EastQuartzJob方法");

		String cycleId = context.getJobDetail().getKey().getName();
		String cycleName = context.getJobDetail().getJobDataMap().getString("cycleName");
		EastSchedulerManager.getInstance().exceteCycleTask(cycleId, cycleName);
	}

}
