package com.efraiser.test.scheduler.task.job;

import java.sql.SQLException;
import java.util.List;
import java.util.TimerTask;

import com.efraiser.test.db.model.ews.CheckAllInfo;
import com.efraiser.test.db.model.ews.CheckBrTemp;
import com.efraiser.test.db.model.ews.CheckFormula;
import com.efraiser.test.db.model.sys.SysEastUrl;
import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.service.ews.checkFformulaqueue.CheckFormulaQueueService;
import com.efraiser.test.db.service.ews.checkall.CheckAllService;
import com.efraiser.test.db.service.ews.checkallinfo.CheckAllInfoService;
import com.efraiser.test.db.service.ews.checkbrtemp.CheckBrTempService;
import com.efraiser.test.db.service.ews.checkformula.CheckFormulaService;
import com.efraiser.test.db.service.ews.checkformula.impl.CheckFormulaServiceImpl;
import com.efraiser.test.db.service.ews.checkformulaexpend.CheckFormulaExpendService;
import com.efraiser.test.db.service.ews.checklog.CheckLogService;
import com.efraiser.test.db.service.ews.checktimeconsuming.CheckTimeConsumingService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.syseasturl.SysEastUrlService;
import com.efraiser.test.db.service.sys.syseasturl.impl.SysEastUrlServiceImpl;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import org.nutz.dao.Dao;
import org.nutz.dao.util.DaoUp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alibaba.druid.pool.DruidDataSource;

public class TimerCheckingAction extends TimerTask {

    private Logger logger = LoggerFactory.getLogger(TimerCheckingAction.class);

    public static CheckAllInfoService checkAllInfoService;
    public static CheckAllService checkAllService;
    public static CheckFormulaService checkFormulaService;
    public static CheckLogService checkLogService;
    public static SysGgzdService sysGgzdService;
    public static SysEastUrlService sysEastUrlService;
    public static CheckBrTempService checkBrTempService;
    public static SysBmglService sysBmglService;
    public static CheckTimeConsumingService checkTimeConsumingService;
    public static CheckFormulaExpendService checkFormulaExpendService;
    public static CheckFormulaQueueService checkFormulaQueueService;

    private TimerCheckingAction() {
    }

    private volatile static TimerCheckingAction timerCheckingAction = null;

    public static TimerCheckingAction getSingleton() {
        if (timerCheckingAction != null) {
            timerCheckingAction.cancel();
            timerCheckingAction = null;
        }
        synchronized (TimerCheckingAction.class) {
            if (timerCheckingAction == null) {
                timerCheckingAction = new TimerCheckingAction();
            }
        }
        return timerCheckingAction;
    }

    @Override
    public void run() {
        logger.info("开始校验");
        doCheck();
    }

    private void doCheck() {
        // 获取公共字典的准许运行线程数
        List<SysGgzd> hzCodes = sysGgzdService.getGgzdListByGroupId("EAST_CHECK_THREAD_MAX_NUMBER", false);
        int threadTotalCount = Integer.parseInt(hzCodes.get(0).getZdName());
        // checkallinfo表中状态不为2的机构执行校验
        List<CheckAllInfo> checkAllInfos = checkAllInfoService.getCheckAllInfoList();

        CheckFormulaServiceImpl checkFormulaService1Impl = (CheckFormulaServiceImpl) checkFormulaService;

        for (CheckAllInfo checkAllInfo : checkAllInfos) {
            boolean flag = false;
            for (Thread td : findAllThreads()) {
                if (td.getName().equals("ThreadOfEASTCheck-" + checkAllInfo.getBrNO() + checkAllInfo.getSjRQ()
                        + checkAllInfo.getVersion() + checkAllInfo.getTableRange())) {
                    flag = true;
                    break;
                }
            }
            // 判断该机构的校验线程是否正在工作，没有则进行校验
            if (!flag) {
                // 获取当前线程执行数
                int checkingNumber = getThreadCount();
                // 当前线程执行数小于等于准许线程数
                if (checkingNumber < threadTotalCount) {
                    CheckFormula checkFormula = checkFormulaService1Impl.dao().fetch(CheckFormula.class,
                            checkAllInfo.getFormulaId());
                    check(checkAllInfo.getBrNO(), checkAllInfo.getSjRQ(), checkFormula.getVersion(),
                            checkAllInfo.getTableRange(), checkAllInfo.getFormulaType(), false);
                }
            }
        }

        // 校验临时表进行校验
        List<CheckBrTemp> checkBrTemps = checkBrTempService.getCheckBrTempList();
        for (CheckBrTemp checkBrTemp : checkBrTemps) {
            boolean flag = false;
            for (Thread td : findAllThreads()) {
                if (td.getName().equals("ThreadOfEASTCheck-" + checkBrTemp.getBrNO() + checkBrTemp.getSjRQ()
                        + checkBrTemp.getVersion() + checkBrTemp.getTableRange())) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                int checkingNumber = getThreadCount();
                // 当前线程执行数小于等于准许线程数
                if (checkingNumber < threadTotalCount) {
                    check(checkBrTemp.getBrNO(), checkBrTemp.getSjRQ(), checkBrTemp.getVersion(),
                            checkBrTemp.getTableRange(), checkBrTemp.getFormulaType(), false);
                }
            }
        }

        if (checkBrTempService.getCheckBrTempList().isEmpty() && checkAllInfoService.getCheckAllInfoList().isEmpty()) {
            this.cancel();
        }

    }

    private void check(String brNo, String reportDate, String version, String repCode, String formulaType,
                       boolean flag) {
        reportDate = reportDate.replace("-", "");
        DaoUp daoUp = null;
        try {
            daoUp = this.getNewConnect(brNo);
            if (daoUp != null) {
                Dao eastDao = daoUp.dao();// 获取数据库连接

                SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;
                String tableSchema = sysEastUrlServiceImpl.fetch(brNo).getTableSchema();
                CheckAllThread checkAllThread = new CheckAllThread(brNo, reportDate, version, tableSchema, repCode,
                        formulaType, eastDao, checkFormulaService, checkAllService, checkLogService, checkAllInfoService, daoUp,
                        sysGgzdService, sysEastUrlService, sysBmglService, checkBrTempService, checkTimeConsumingService,
                        checkFormulaExpendService, checkFormulaQueueService);
                checkAllThread.setName("ThreadOfEASTCheck-" + brNo + reportDate + version + repCode);
                checkAllThread.start();
            }
        } catch (Exception e) {
            logger.error("check() error!", e);
        }finally {
            if(daoUp != null){
                daoUp.close();
            }

        }
    }

    /**
     * 获取Java VM中当前运行的所有线程
     *
     * @return
     */
    private Thread[] findAllThreads() {
        ThreadGroup group = Thread.currentThread().getThreadGroup();
        ThreadGroup topGroup = group;
        // 遍历线程组树，获取根线程组
        while (group != null) {
            topGroup = group;
            group = group.getParent();
        }
        // 激活的线程数加倍
        int estimatedSize = topGroup.activeCount() * 2;
        Thread[] slacks = new Thread[estimatedSize];
        // 获取根线程组的所有线程
        int actualSize = topGroup.enumerate(slacks);
        Thread[] threads = new Thread[actualSize];
        System.arraycopy(slacks, 0, threads, 0, actualSize);
        return threads;
    }

    /**
     * 功能描述：根据数据库连接信息连接数据库，并返回一个改DataSource的NutDao
     *
     * @param brNo
     * @return Dao
     * @throws ClassNotFoundException
     * @throws SQLException
     * @author wushuo
     * @date 2016年3月10日
     * @modify log:
     */
    private DaoUp getNewConnect(String brNo) {

        SysEastUrlServiceImpl sysEastUrlService1mpl = (SysEastUrlServiceImpl) sysEastUrlService;

        try {
            SysEastUrl sysEastUrl = sysEastUrlService1mpl.fetch(brNo);
            if (sysEastUrl != null) {
                DruidDataSource ds = new DruidDataSource();
                ds.setDriverClassName(sysEastUrl.getDriver());
                ds.setUrl(sysEastUrl.getUrlStr());
                ds.setUsername(sysEastUrl.getUserName());
                ds.setPassword(sysEastUrl.getPassword());
                ds.getConnection();
                DaoUp daoUp = new DaoUp(brNo) {
                };
                daoUp.setDataSource(ds);
                return daoUp;
            } else {
                return null;
            }
        } catch (Exception e) {
            logger.error("getNewConnect() error!", e);
            return null;
        }
    }

    /**
     * 功能描述：查询机构运行数
     *
     * @return
     * @author
     * @date 2017年6月6日
     * @modify log:
     */
    private int getThreadCount() {
        int count = 0;
        for (Thread td : findAllThreads()) {
            if (td.getName().indexOf("ThreadOfEASTCheck-") != -1) {
                count++;
            }
        }
        return count;
    }
}
