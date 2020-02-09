package com.efraiser.test.scheduler.init;

import java.util.Timer;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.db.service.ews.checkFformulaqueue.CheckFormulaQueueService;
import com.efraiser.test.db.service.ews.checkall.CheckAllService;
import com.efraiser.test.db.service.ews.checkallinfo.CheckAllInfoService;
import com.efraiser.test.db.service.ews.checkbrtemp.CheckBrTempService;
import com.efraiser.test.db.service.ews.checkformula.CheckFormulaService;
import com.efraiser.test.db.service.ews.checkformulaexpend.CheckFormulaExpendService;
import com.efraiser.test.db.service.ews.checklog.CheckLogService;
import com.efraiser.test.db.service.ews.checktimeconsuming.CheckTimeConsumingService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.syseasturl.SysEastUrlService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.scheduler.task.job.TimerCheckingAction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EastCheckSetup {
	static Logger logger = LoggerFactory.getLogger(EastCheckSetup.class);

	private Timer timer = null;

	private static EastCheckSetup eastCheckSetup;

	@Autowired
	private LocalConfig localConfig;

	@Autowired
	private CheckAllInfoService checkAllInfoService;
	@Autowired
	private CheckAllService checkAllService;
	@Autowired
	private CheckFormulaService checkFormulaService;
	@Autowired
	private CheckLogService checkLogService;
	@Autowired
	private SysGgzdService sysGgzdService;
	@Autowired
	private SysEastUrlService sysEastUrlService;
	@Autowired
	private CheckBrTempService checkBrTempService;
	@Autowired
	private SysBmglService sysBmglService;
	@Autowired
	private CheckTimeConsumingService checkTimeConsumingService;
	@Autowired
	private CheckFormulaExpendService checkFormulaExpendService;
	@Autowired
	private CheckFormulaQueueService checkFormulaQueueService;


	public EastCheckSetup() {
		eastCheckSetup = this;
	}

	public static EastCheckSetup getInstance() {
		return eastCheckSetup;
	}

	public void init() {

//		TimerCheckingAction.updateUrl = localConfig.getProperties().getUpdateUrl();
//		TimerCheckingAction.updateEnabled = localConfig.getProperties().getUpdateEnabled();

		TimerCheckingAction.checkAllService = checkAllService;
		TimerCheckingAction.checkAllInfoService = checkAllInfoService;
		TimerCheckingAction.checkFormulaService = checkFormulaService;
		TimerCheckingAction.checkLogService = checkLogService;
		TimerCheckingAction.sysGgzdService = sysGgzdService;
		TimerCheckingAction.sysEastUrlService = sysEastUrlService;
		TimerCheckingAction.checkBrTempService = checkBrTempService;
		TimerCheckingAction.sysBmglService = sysBmglService;
		TimerCheckingAction.checkTimeConsumingService = checkTimeConsumingService;
		TimerCheckingAction.checkFormulaExpendService = checkFormulaExpendService;
		TimerCheckingAction.checkFormulaQueueService = checkFormulaQueueService;
		timer = new Timer(true);
		timer.schedule(TimerCheckingAction.getSingleton(), 0, 60 * 1000);
	}

	public void destroy() {
		timer.cancel();
	}

}
