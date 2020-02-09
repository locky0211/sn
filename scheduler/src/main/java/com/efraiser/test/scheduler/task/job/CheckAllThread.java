package com.efraiser.test.scheduler.task.job;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.nutz.FormulaEncryptThead;
import com.efraiser.test.db.model.ews.CheckAllInfo;
import com.efraiser.test.db.model.ews.CheckFormula;
import com.efraiser.test.db.model.ews.CheckFormulaExpend;
import com.efraiser.test.db.model.ews.CheckFormulaQueue;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysEastUrl;
import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.service.cache.CommonCache;
import com.efraiser.test.db.service.ews.checkFformulaqueue.CheckFormulaQueueService;
import com.efraiser.test.db.service.ews.checkFformulaqueue.impl.CheckFormulaQueueServiceImpl;
import com.efraiser.test.db.service.ews.checkall.CheckAllService;
import com.efraiser.test.db.service.ews.checkall.impl.CheckAllServiceImpl;
import com.efraiser.test.db.service.ews.checkallinfo.CheckAllInfoService;
import com.efraiser.test.db.service.ews.checkallinfo.impl.CheckAllInfoServiceImpl;
import com.efraiser.test.db.service.ews.checkbrtemp.CheckBrTempService;
import com.efraiser.test.db.service.ews.checkformula.CheckFormulaService;
import com.efraiser.test.db.service.ews.checkformula.impl.CheckFormulaServiceImpl;
import com.efraiser.test.db.service.ews.checkformulaexpend.CheckFormulaExpendService;
import com.efraiser.test.db.service.ews.checklog.CheckLogService;
import com.efraiser.test.db.service.ews.checktimeconsuming.CheckTimeConsumingService;
import com.efraiser.test.db.service.ews.checktimeconsuming.impl.CheckTimeConsumingServiceImpl;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import com.efraiser.test.db.service.sys.syseasturl.SysEastUrlService;
import com.efraiser.test.db.service.sys.syseasturl.impl.SysEastUrlServiceImpl;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysggzd.impl.SysGgzdServiceImpl;
import com.efraiser.test.db.util.EastConUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Dao;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.nutz.dao.util.DaoUp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alibaba.druid.pool.DruidDataSource;

public class CheckAllThread extends Thread {

    private Logger log = LoggerFactory.getLogger(CheckAllThread.class);

    private String brNo;

    private String reportDate;

    private String version;

    private String tableSchema;

    private String repCode;

    private String type;

    private Dao eastDao;
    private DaoUp daoUp;


    private CheckAllInfoService checkAllInfoService;
    private CheckAllService checkAllService;
    private CheckFormulaService checkFormulaService;
    private CheckLogService checkLogService;
    private SysGgzdService sysGgzdService;
    private SysEastUrlService sysEastUrlService;
    private CheckBrTempService checkBrTempService;
    private SysBmglService sysBmglService;
    private CheckTimeConsumingService checkTimeConsumingService;
    private CheckFormulaExpendService checkFormulaExpendService;
    private CheckFormulaQueueService checkFormulaQueueService;

    static Logger logger = LoggerFactory.getLogger(CheckAllThread.class);

    public CheckAllThread(String brNo, String reportDate, String version, String tableSchema, String repCode,
                          String type, Dao eastDao, CheckFormulaService checkFormulaDao, CheckAllService checkAllDao, CheckLogService checkLogDao,
                          CheckAllInfoService checkAllInfoDao, DaoUp daoUp, SysGgzdService sysGgzdDao, SysEastUrlService sysEastUrlDao,
                          SysBmglService sysBmglDao, CheckBrTempService checkBrTempDao, CheckTimeConsumingService checkTimeConsumingDao,
                          CheckFormulaExpendService checkFormulaExpendDao, CheckFormulaQueueService checkFormulaQueueDao) {
        super();
        this.brNo = brNo;
        this.reportDate = reportDate;
        this.version = version;
        this.tableSchema = tableSchema;
        this.repCode = repCode;
        this.type = type;
        this.eastDao = eastDao;
        this.checkFormulaService = checkFormulaDao;
        this.checkAllService = checkAllDao;
        this.checkLogService = checkLogDao;
        this.checkAllInfoService = checkAllInfoDao;
        this.daoUp = daoUp;
        this.sysGgzdService = sysGgzdDao;
        this.sysEastUrlService = sysEastUrlDao;
        this.sysBmglService = sysBmglDao;
        this.checkBrTempService = checkBrTempDao;
        this.checkTimeConsumingService = checkTimeConsumingDao;
        this.checkFormulaExpendService = checkFormulaExpendDao;
        this.checkFormulaQueueService = checkFormulaQueueDao;
    }

    @Override
    public void run() {
        final List<CheckFormula> lists = checkFormulaService.getFormulaListOrderByID(type, repCode, version);
        List<CheckAllInfo> checkAllInfoList = checkAllInfoService.getCheckAllInfoByBrNo(brNo, reportDate, version, repCode);
        final List<CheckFormulaExpend> expends = checkFormulaExpendService.getFormulaExpendList(brNo, null, version);
        Sql listStr = Sqls.create("SELECT ZD_VALUE FROM SYS_GGZD WHERE G_ID='EAST_HZ_NBJGH'");
        listStr.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> list = new LinkedList<String>();
                while (rs.next()) {
                    list.add(rs.getString(1));
                }
                return list;
            }
        });

        CheckAllInfoServiceImpl checkAllInfoService1mpl = (CheckAllInfoServiceImpl) checkAllInfoService;
        checkAllInfoService1mpl.dao().execute(listStr);
        final String nbjghStr = StrUtil.convertJoin(listStr.getList(String.class), null);

        // 获取公共字典的准许运行线程数
        List<SysGgzd> hzCodes = sysGgzdService.getGgzdListByGroupId("EAST_CHECK_FORMULA_MAX_NUMBER", false);
        int threadTotalCount = Integer.parseInt(hzCodes.get(0).getZdName());
        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(threadTotalCount);
        CheckAllInfo checkAllInfo;
        if (checkAllInfoList.size() == 0) {
            checkBrTempService.updateCheckBrTempByBrNo(brNo, reportDate, version, repCode);
            this.readlyEastNumber(brNo, reportDate, version, repCode);
            // 删除缓存队列机构
            checkBrTempService.deleteCheckBrTempByBrNo(brNo, reportDate, version, repCode);
            // 机构加入执行队列
            checkAllInfoService.addCheckAllInfo(brNo, reportDate, type, lists.get(0).getId(), version, repCode);
            List<CheckAllInfo> newList = checkAllInfoService.getCheckAllInfoByBrNo(brNo, reportDate, version, repCode);
            checkAllInfo = newList.get(0);
        } else {
            checkAllInfo = checkAllInfoList.get(0);
        }
        if (checkAllInfo.getCompletedFormulaNumber() == 0) {
            String sql = "DELETE FROM CHECK_all WHERE sjrq='" + reportDate + "' and brNo = '" + brNo + "'";
            if (StrUtil.isNotNull(repCode)) {
                sql += "and tablename ='" + repCode + "'";
            }
            Sql deleteStr = Sqls.create(sql);
            CheckAllServiceImpl checkAllService1mpl = (CheckAllServiceImpl) checkAllService;
            checkAllService1mpl.dao().execute(deleteStr);
            // 删除耗时表数据
            String consumingSql = "DELETE FROM CHECK_TIME_CONSUMING WHERE BRNO='" + brNo + "'AND SJRQ ='" + reportDate
                    + "'AND VERSION='" + version + "'";
            Sql deleteConsumingStr = Sqls.create(consumingSql);

            CheckTimeConsumingServiceImpl checkTimeConsumingService1mpl = (CheckTimeConsumingServiceImpl) checkTimeConsumingService;
            checkTimeConsumingService1mpl.dao().execute(deleteConsumingStr);
        }

        CheckFormulaQueueServiceImpl checkFormulaQueueService1mpl = (CheckFormulaQueueServiceImpl) checkFormulaQueueService;
        // 校验规则队列
        List<CheckFormulaQueue> queueList = checkFormulaQueueService.getQueueList(brNo, reportDate, version, repCode);
        if (queueList.isEmpty()) {
            int sortNum = 0;
            for (CheckFormula formula : lists) {
                CheckFormulaQueue queue = new CheckFormulaQueue();
                queue.setId(UUID.randomUUID().toString().replace("-", ""));
                queue.setBrNO(brNo);
                queue.setSjrq(reportDate);
                queue.setFormulaId(formula.getId());
                queue.setVersion(version);
                queue.setTableRange(repCode);
                queue.setStatus("0");// 未执行
                queue.setSortNum(sortNum);
                sortNum++;
                queueList.add(queue);
            }

            checkFormulaQueueService1mpl.dao().fastInsert(queueList);
        }

        checkAllInfo.setFormulaTotalCount(lists.size());
        final CheckAllInfo oldInfo = checkAllInfoService.updateCheckAllInfo(checkAllInfo, true);
        final StringBuffer msg = new StringBuffer();// 存放报错信息
        final CheckAllInfo newInfo = new CheckAllInfo();
        //新增代码
        List<String> wxzfList = sysGgzdService.getZdNameByGid("EAST_WXZF");
        final String wxzf = StrUtil.convertJoin(wxzfList, ",");
        List<String> mcList = sysGgzdService.getZdNameByGid("EAST_YHMC");
        final String mc = StrUtil.convertJoin(mcList, ",");
        List<String> dzList = sysGgzdService.getZdNameByGid("EAST_YHDZ");
        final String dz = StrUtil.convertJoin(dzList, ",");
        List<String> xkzList = sysGgzdService.getZdValueByGid("EAST_YHMC");
        final String xkz = StrUtil.convertJoin(xkzList, ",");


        CheckFormulaServiceImpl checkFormulaService1mpl = (CheckFormulaServiceImpl) checkFormulaService;
        CheckAllServiceImpl checkAllServiceImpl = (CheckAllServiceImpl) checkAllService;
        EastConUtil eastConUtil = (EastConUtil) SpringContextUtil.getBean("eastConUtil");
        CheckTimeConsumingServiceImpl checkTimeConsumingServiceImpl = (CheckTimeConsumingServiceImpl) SpringContextUtil.getBean("checkTimeConsumingServiceImpl");

        for (int i = 0; i < queueList.size(); i++) {
            // 查找规则信息
            final CheckFormulaQueue queue = queueList.get(i);
            final CheckFormula list = getCheckForm(lists, queue.getFormulaId());
            final String queueId = queue.getId();
            // 找不到则继续下一条
            if (list == null) {
                continue;
            }
            fixedThreadPool.execute(new Runnable() {
                public void run() {
                    CheckAllInfo infoTemp = new CheckAllInfo();
                    int number = 0;
                    int dataNumber = 0;
                    String sqlStr;
                    Sql sqlStrRes;
                    String uuid;
                    String status;
                    while (true) {
                        if (StrUtil.isNotNull(newInfo.getStatus())) {
                            status = newInfo.getStatus();
                        } else {
                            status = oldInfo.getStatus();
                        }
                        if (status.equals("0")) {
                            CheckFormula formulaIsExist = checkFormulaService1mpl.fetch(list.getId());
                            if (formulaIsExist == null) {
                                // 公式不存在就退出
                                return;
                            }
                            if (("1").equals(formulaIsExist.getFormulaState())) {
                                String formulaId = list.getId();
                                String formulaType = list.getFormulaType();
                                String tableName = list.getRepCode();
                                String fieldCode = list.getFieldCode();
                                String fieldName = list.getFieldName();
                                String checkDesc = list.getFormulaDesc();
                                try {
                                    // 更新校验规则队列中相应规则的状态
                                    queue.setStatus("1");// 正在执行
                                    checkFormulaQueueService1mpl.dao().update(queue);
                                    list.setFormula(FormulaEncryptThead.getFormulaDecrypt(list.getFormula()));
                                    uuid = UUID.randomUUID().toString();
                                    // 获取公式扩展
                                    String expend = getFormulaExpend(tableName, expends);
                                    // 公式执行开始时间
                                    checkTimeConsumingService.insertTimeConsuming(brNo, reportDate, version, formulaId);
                                    if (!list.getFormulaType().equals("6") && !list.getFormulaType().equals("5")) {
                                        sqlStr = "select count(1) from " + tableSchema + "." + tableName + " A where "
                                                + list.getFormula().replace("$Schema$", tableSchema)
                                                .replace("$YYYYMMDD$", reportDate).replace("$YYYYMM$", reportDate.substring(0, 6)).replace("$NBJGH$", nbjghStr)
                                                + expend;
                                        // 删除该机构校验任务时会访问数据库出现异常
                                        number = eastConUtil.getCount(eastDao, sqlStr);
                                    } else {
                                        sqlStr = list.getFormula().replace("$Schema$", tableSchema)
                                                .replace("$YYYYMMDD$", reportDate).replace("$YYYYMM$", reportDate.substring(0, 6)).replace("$NBJGH$", nbjghStr).replace("$EAST_WXZF$", wxzf).replace("$EAST_YHMC$", mc).replace("$EAST_YHDZ$", dz).replace("$EAST_JRXKZ$", xkz) + expend;
                                        if (!list.getFormula().contains("TABLENUMBER")) {
                                            number = eastConUtil.getCount(eastDao,
                                                    "select count(1) from (" + sqlStr + ") A");
                                        } else {
                                            number = checkAllServiceImpl
                                                    .singleInt("select \"NUMBER\" from EDW.HELP_JYSJL where tableName='"
                                                            + list.getRepCode() + "' and brNo='" + brNo
                                                            + "' and reportDate='" + reportDate + "' and version='"
                                                            + version + "'");
                                        }
                                    }
                                    if (number > 0) {
                                        dataNumber = checkAllServiceImpl
                                                .singleInt("select \"NUMBER\" from EDW.HELP_JYSJL where tableName='"
                                                        + list.getRepCode() + "' and brNo='" + brNo
                                                        + "' and reportDate='" + reportDate + "' and version='"
                                                        + version + "'");
                                        if (dataNumber < number) {
                                            dataNumber = number;
                                        }
                                    }
                                    if (number > 0 && !list.getFormula().contains("TABLENUMBER")) {
                                        sqlStrRes = Sqls.create("INSERT INTO check_all VALUES('" + uuid + "','"
                                                + formulaId + "','" + formulaType + "','" + tableName + "','"
                                                + fieldCode + "','" + fieldName + "','" + checkDesc + "'," + number
                                                + "," + dataNumber + ",'" + reportDate + "','" + brNo + "','"
                                                + DateUtil.getNow(DateUtil.FORMAT_DATE) + "')");
                                        checkAllServiceImpl.dao().execute(sqlStrRes);
                                    } // 带TABLENUMBER的校验规则没有查询结果明细
                                    else if (number == 0 && list.getFormula().contains("TABLENUMBER")) {
                                        sqlStrRes = Sqls.create("INSERT INTO check_all VALUES('" + uuid + "','"
                                                + formulaId + "','" + formulaType + "','" + tableName + "','"
                                                + fieldCode + "','" + fieldName + "','" + checkDesc + "'," + 1 + "," + 1
                                                + ",'" + reportDate + "','" + brNo + "','"
                                                + DateUtil.getNow(DateUtil.FORMAT_DATE) + "')");
                                        checkAllServiceImpl.dao().execute(sqlStrRes);
                                    }
                                } catch (Exception e) {
                                    e.printStackTrace();
                                    msg.append("[表：" + list.getRepCode() + "的" + list.getFieldCode() + "字段校验报错<br>校验描述:"
                                            + list.getFormulaDesc() + "<br>报错信息为{" + e.getMessage() + "}]<br>");
                                }
                                // 公式执行结束时间
                                checkTimeConsumingService.updateConsuming(brNo, reportDate, version, formulaId);
                                // 删除校验规则队列中已完成的规则
                                checkTimeConsumingServiceImpl.delete(queueId);
                                infoTemp = doUpdateAndGet(infoTemp, checkAllInfoService1mpl, oldInfo, lists);
                                if (infoTemp == null) {
                                    return;
                                }
                                newInfo.setBrName(infoTemp.getBrName());
                                newInfo.setBrNO(infoTemp.getBrNO());
                                newInfo.setCheckEndTime(infoTemp.getCheckEndTime());
                                newInfo.setCheckStartTime(infoTemp.getCheckStartTime());
                                newInfo.setCompletedFormulaNumber(infoTemp.getCompletedFormulaNumber());
                                newInfo.setFormulaId(infoTemp.getFormulaId());
                                newInfo.setFormulaTotalCount(infoTemp.getFormulaTotalCount());
                                newInfo.setFormulaType(infoTemp.getFormulaType());
                                newInfo.setId(infoTemp.getId());
                                newInfo.setSjRQ(infoTemp.getSjRQ());
                                newInfo.setStatus(infoTemp.getStatus());
                                newInfo.setTableRange(infoTemp.getTableRange());
                                newInfo.setVersion(infoTemp.getVersion());
                            }
                            return;
                        } else if (status.equals("1")) {// 暂停
                            try {
                                sleep(5000);
                            } catch (InterruptedException e) {
                            }
                            infoTemp = checkAllInfoService1mpl.fetch(oldInfo.getId());
                            if (infoTemp == null) {
                                return;
                            }
                            newInfo.setBrName(infoTemp.getBrName());
                            newInfo.setBrNO(infoTemp.getBrNO());
                            newInfo.setCheckEndTime(infoTemp.getCheckEndTime());
                            newInfo.setCheckStartTime(infoTemp.getCheckStartTime());
                            newInfo.setCompletedFormulaNumber(infoTemp.getCompletedFormulaNumber());
                            newInfo.setFormulaId(infoTemp.getFormulaId());
                            newInfo.setFormulaTotalCount(infoTemp.getFormulaTotalCount());
                            newInfo.setFormulaType(infoTemp.getFormulaType());
                            newInfo.setId(infoTemp.getId());
                            newInfo.setSjRQ(infoTemp.getSjRQ());
                            newInfo.setStatus(infoTemp.getStatus());
                            newInfo.setTableRange(infoTemp.getTableRange());
                            newInfo.setVersion(infoTemp.getVersion());
                        } else {
                            if (status.equals("3")) {
                                checkAllInfoService1mpl.delete(oldInfo.getId());
                                // 删除队列表数据
                                checkFormulaQueueService1mpl.deleteQueue(brNo, reportDate, version, repCode);
                            }
                            // 删除执行队列中该条信息
                            CommonCache.getInstance().remove(brNo);
                            daoUp.close();
                            return;
                        }
                    }
                }
            });

        }
        fixedThreadPool.shutdown();
        while (true) {
            CheckAllInfo infoNow = checkAllInfoService1mpl.fetch(oldInfo.getId());
            if (infoNow == null) {
                // 删除队列表数据
                checkFormulaQueueService1mpl.deleteQueue(brNo, reportDate, version, repCode);
                daoUp.close();
                return;
            }
            if (infoNow.getStatus().equals("3")) {
                fixedThreadPool.shutdownNow();
                // 删除队列表数据
                checkFormulaQueueService1mpl.deleteQueue(brNo, reportDate, version, repCode);
                checkAllInfoService1mpl.delete(infoNow.getId());
                daoUp.close();
                return;
            }
            if (fixedThreadPool.isTerminated()) {
                msg.append("  校验完成!");
                checkLogService.insertLog(msg, "8", brNo, repCode, reportDate);
                // 删除执行队列中该条信息
                CommonCache.getInstance().remove(brNo);
                daoUp.close();
                return;
            }
            try {
                Thread.sleep(10000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

    private CheckFormula getCheckForm(List<CheckFormula> lists, String id) {
        for (CheckFormula formula : lists) {
            if (id.equals(formula.getId())) {
                return formula;
            }
        }
        return null;
    }

    /**
     * 功能描述： 同步更新checkallinfo
     *
     * @param infoTemp
     * @param checkAllInfoDao
     * @param oldInfo
     * @param lists
     * @return
     * @author
     * @date 2017年11月15日
     * @modify log:
     */
    private synchronized static CheckAllInfo doUpdateAndGet(CheckAllInfo infoTemp, CheckAllInfoServiceImpl checkAllInfoDao,
                                                            CheckAllInfo oldInfo, List<CheckFormula> lists) {
        CheckAllInfo infoNow = checkAllInfoDao.fetch(oldInfo.getId());
        if (infoNow == null) {
            return null;
        }
        infoNow.setCompletedFormulaNumber(infoNow.getCompletedFormulaNumber() + 1);
        if (infoNow.getCompletedFormulaNumber() < lists.size() - 1) {
            // infoNow.setFormulaId(lists.get(infoNow.getCompletedFormulaNumber()).getId());
        }
        infoTemp = checkAllInfoDao.updateCheckAllInfo(infoNow, true);
        if (infoTemp.getCompletedFormulaNumber() == lists.size()) {
            // 判断校验是否结束
            infoTemp.setCheckEndTime(DateUtil.getNow(DateUtil.FORMAT_LONG));
            infoTemp = checkAllInfoDao.updateCheckAllInfo(infoTemp, false);
        }
        return infoTemp;
    }

    /**
     * 功能描述：获取公式扩展信息
     *
     * @param repCode
     * @param expends
     * @return
     * @author
     * @date 2017年7月4日
     * @modify log:
     */
    private String getFormulaExpend(String repCode, List<CheckFormulaExpend> expends) {
        String formulaExpend = "";
        for (CheckFormulaExpend expend : expends) {
            if (expend.equals(repCode)) {
                formulaExpend = " " + expend.getFormulaExpend();
            }
        }
        return formulaExpend;
    }

    /**
     * 功能描述：统计将要校验的数据表的条数
     *
     * @param brNo
     * @param reportDate
     * @throws ClassNotFoundException
     * @throws SQLException
     * @author
     * @date 2017年6月16日
     * @modify log:
     */
    private void readlyEastNumber(String brNo, String reportDate, String version, String repCode) {
        // 先删除重复的数据
        String sqlStr = "delete from EDW.HELP_JYSJL where reportDate='" + reportDate + "' and brNo ='" + brNo
                + "' and version='" + version + "'";
        if (StrUtil.isNotNull(repCode)) {
            sqlStr += " and tableName ='" + repCode + "'";
        }
        CheckAllServiceImpl checkAllServiceImpl = (CheckAllServiceImpl) checkAllService;
        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;
        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;
        SysGgzdServiceImpl sysGgzdServiceImpl = (SysGgzdServiceImpl) sysGgzdService;

        checkAllServiceImpl.dao().execute(Sqls.create(sqlStr));
        logger.info(brNo + "开始计算表的数据条目");
        String tableSchema = sysEastUrlServiceImpl.fetch(brNo).getTableSchema();
        DaoUp readlyDaoUp = getNewConnect(brNo);
        SysBmgl sysBmgl = sysBmglServiceImpl.fetch(brNo);
        List<SysGgzd> lists = new ArrayList<SysGgzd>();
        if (sysBmgl.getBmCategory().equals("分支")) {

            if (version.equals("2")) {
                lists = sysGgzdServiceImpl.query(
                        Cnd.wrap(
                                "G_ID = 'EastTableName' AND ZD_VALUE NOT LIKE 'T_KFX_%' AND ZD_VALUE NOT IN ('T_SJD_BHYWXX','T_XG_DHJCB')"),
                        null);
            } else if (version.equals("3")) {
                lists = sysGgzdServiceImpl.query(
                        Cnd.wrap(
                                "G_ID = 'East_3_TableName' AND ZD_VALUE NOT LIKE 'T_KFX_%' AND ZD_VALUE NOT IN ('T_SJD_BHYWXX','T_XG_DHJCB')"),
                        null);
            } else {
                lists = sysGgzdServiceImpl.query(
                        Cnd.wrap(
                                "G_ID = 'EastTableName' AND ZD_VALUE NOT LIKE 'T_KFX_%' AND ZD_VALUE NOT IN ('T_SJD_BHYWXX','T_XG_DHJCB')"),
                        null);
            }
        } else {
            if (version.equals("2")) {
                lists = sysGgzdServiceImpl.query(Cnd.wrap("G_ID = 'EastTableName'"), null);
            } else if (version.equals("3")) {
                lists = sysGgzdServiceImpl.query(Cnd.wrap("G_ID = 'East_3_TableName'"), null);
            } else {
                lists = sysGgzdServiceImpl.query(Cnd.wrap("G_ID = 'EastTableName'"), null);
            }
        }

        for (SysGgzd sysGgzd : lists) {
            int num = 0;

            if (StrUtil.isNotNull(repCode)) {
                if (repCode.equals(sysGgzd.getZdValue())) {
                    List<CheckFormulaExpend> expends = checkFormulaExpendService.getFormulaExpendList(brNo,
                            sysGgzd.getZdValue(), version);
                    String formulaExpend = "";
                    if (!expends.isEmpty()) {
                        formulaExpend = expends.get(0).getFormulaExpend();
                    }
                    if (!sysGgzd.getZdValue().equals("T_KJ_ZZQKM")) {
                        num = getCount(readlyDaoUp.dao(), "select count(*) from " + tableSchema + "."
                                + sysGgzd.getZdValue() + " A where cjrq ='" + reportDate + "' " + formulaExpend);
                    } else {
                        num = getCount(readlyDaoUp.dao(), "select count(*) from " + tableSchema + "."
                                + sysGgzd.getZdValue() + " A where kjrq ='" + reportDate + "' " + formulaExpend);
                    }
                    sysGgzdServiceImpl.dao().execute(Sqls.create("insert into EDW.HELP_JYSJL values('" + sysGgzd.getZdValue()
                            + "'," + num + ",'" + brNo + "','" + reportDate + "','" + version + "')"));
                }
            } else {
                List<CheckFormulaExpend> expends = checkFormulaExpendService.getFormulaExpendList(brNo,
                        sysGgzd.getZdValue(), version);
                String formulaExpend = "";
                if (!expends.isEmpty()) {
                    formulaExpend = expends.get(0).getFormulaExpend();
                }
                if (!sysGgzd.getZdValue().equals("T_KJ_ZZQKM")) {
                    num = getCount(readlyDaoUp.dao(), "select count(*) from " + tableSchema + "." + sysGgzd.getZdValue()
                            + " A where cjrq ='" + reportDate + "' " + formulaExpend);
                } else {
                    num = getCount(readlyDaoUp.dao(), "select count(*) from " + tableSchema + "." + sysGgzd.getZdValue()
                            + " A where kjrq ='" + reportDate + "' " + formulaExpend);
                }
                sysGgzdServiceImpl.dao().execute(Sqls.create("insert into EDW.HELP_JYSJL values('" + sysGgzd.getZdValue() + "',"
                        + num + ",'" + brNo + "','" + reportDate + "','" + version + "')"));
            }

        }
        readlyDaoUp.close();
    }

    /**
     * 功能描述：根据数据库连接信息连接数据库，并返回一个改DataSource的NutDao
     *
     * @param brNo
     * @return Dao
     * @author wangfei
     * @date 2017年6月16日
     * @modify log:
     */
    private DaoUp getNewConnect(String brNo) {
        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;

        try {
            SysEastUrl sysEastUrl = sysEastUrlServiceImpl.fetch(brNo);
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
            log.error("getNewConnect() error! brNo:[" + brNo + "]", e);
            return null;
        }
    }

    /**
     * 功能描述：根据传入的sql语句返回第一行的结果数
     *
     * @param dao
     * @param sqlStr
     * @return
     * @author wangfei
     * @date 2017年6月16日
     * @modify log:
     */
    private int getCount(Dao dao, String sqlStr) {
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs != null && rs.next()) {
                    return rs.getInt(1);
                } else {
                    return 0;
                }
            }
        });
        dao.execute(sql);
        return sql.getInt();
    }
}
