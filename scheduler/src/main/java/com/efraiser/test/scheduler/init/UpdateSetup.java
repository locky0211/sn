package com.efraiser.test.scheduler.init;

import java.util.Timer;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.db.service.rd.rdcheckformula.RdCheckFormulaService;
import com.efraiser.test.db.service.rd.rdtablebasicinfo.RdTableBasicInfoService;
import com.efraiser.test.db.service.rd.rdtablecolumncontrast.RdTableColumnContrastService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtablemodel.RdTableModelService;
import com.efraiser.test.db.service.rd.rdtablemodelpct.RdTableModelPCTService;
import com.efraiser.test.db.service.rd.rdtableorgans.RdTableOrgansService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.scheduler.task.job.TimerAction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class UpdateSetup {
    static Logger logger = LoggerFactory.getLogger(UpdateSetup.class);

    private Timer timer = null;

    private static UpdateSetup updateSetup;

    @Autowired
    private LocalConfig localConfig;

    @Autowired
    private RdCheckFormulaService rdCheckFormulaService;

    @Autowired
    private RdTableBasicInfoService rdTableBasicInfoService;

    @Autowired
    private RdTableColumnContrastService rdTableColumnContrastService;

    @Autowired
    private RdTableInfoService rdTableInfoService;

    @Autowired
    private RdTableModelService rdTableModelService;

    @Autowired
    private RdTableModelPCTService rdTableModelPCTService;

    @Autowired
    private RdTableOrgansService rdTableOrgansService;

    @Autowired
    private SysUserService sysUserService;


    public UpdateSetup() {
        updateSetup = this;
    }

    public static UpdateSetup getInstance() {
        return updateSetup;
    }

    public void init() {

        TimerAction.updateUrl = localConfig.getProperties().getUpdateUrl();
        TimerAction.updateEnabled = localConfig.getProperties().getUpdateEnabled();

        TimerAction.rdCheckFormulaService = rdCheckFormulaService;
        TimerAction.rdTableBasicInfoService = rdTableBasicInfoService;
        TimerAction.rdTableColumnContrastService = rdTableColumnContrastService;
        TimerAction.rdTableInfoService = rdTableInfoService;
        TimerAction.rdTableModelService = rdTableModelService;
        TimerAction.rdTableModelPCTService = rdTableModelPCTService;
        TimerAction.rdTableOrgansService = rdTableOrgansService;
        TimerAction.sysUserService = sysUserService;

        if ("true".equals(TimerAction.updateEnabled)) {
            timer = new Timer(true);
            timer.schedule(new TimerAction(), 0, 24 * 3600 * 1000);
        }
    }

    public void destroy() {
        timer.cancel();
    }

}
