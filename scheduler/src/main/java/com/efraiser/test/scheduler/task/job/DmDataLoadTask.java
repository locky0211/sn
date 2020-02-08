package com.efraiser.test.scheduler.task.job;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.DmDataTaskList;
import com.efraiser.test.db.model.rd.DmDataTaskLogInfo;
import com.efraiser.test.db.model.sys.SysSchedule;
import com.efraiser.test.db.service.rd.dmdatatasklist.DmDataTaskListService;
import com.efraiser.test.db.service.rd.dmdatatasklist.impl.DmDataTaskListServiceImpl;
import com.efraiser.test.db.service.rd.dmdatataskloginfo.DmDataTaskLogInfoService;
import com.efraiser.test.db.service.sys.sysschedule.SysScheduleService;
import com.efraiser.test.db.service.sys.sysschedule.impl.SysScheduleServiceImpl;
import com.efraiser.test.db.util.EastConUtil;
import com.efraiser.test.scheduler.task.QuartzTask;
import com.efraiser.test.scheduler.util.RdCheckAutoUtil;
import com.efraiser.test.scheduler.util.RdCheckWaveAvgUtil;
import com.efraiser.test.scheduler.util.RdReportMidDataUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Dao;
import org.nutz.dao.Sqls;
import org.nutz.dao.entity.Record;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.nutz.dao.util.DaoUp;
import org.nutz.trans.Atom;
import org.nutz.trans.Trans;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * 类描述：1104自动取数任务
 */
public class DmDataLoadTask implements QuartzTask {

    final static Logger logger = LoggerFactory.getLogger(DmDataLoadTask.class);
    private StringBuffer taskLogInfo;// 日志信息
    private DmDataTaskLogInfo dmDataTaskLogInfo;


    private String reportDate;// 报表日期
    private String reportType;// 报表类型
    private String systemDate;// 系统日程日期
    private String taskState;

    private String tempStringPath;// 系统临时目录
    // private int taskFlag = 0;
    private boolean isManual = false;// 手动标识，默认为否
    private int loadNum = 0;
    private int extractNum = 0;
    private int partNum = 1;// 过程编号 1-自动取数据转化 2-自动进行逻辑校验 3-自动生成异动公式 4-自动进行全表异动校验 5-自动进行指标计算
    private boolean partFlag = false;// 执行部分操作标识

    public DmDataLoadTask() {
        tempStringPath = LocalConfig.getInstance().getProperties().getTempStringPath();
    }

    public DmDataLoadTask(boolean isManual, String reportDate, String reportType, int partNum, boolean partFlag) {
        this();
        this.isManual = isManual;
        this.reportDate = reportDate;
        this.reportType = reportType;
        this.partNum = partNum;
        this.partFlag = partFlag;

    }

    @Override
    public void execute() {

        DmDataTaskListServiceImpl dmDataTaskListService = (DmDataTaskListServiceImpl) SpringContextUtil.getBean("dmDataTaskListServiceImpl");
        DmDataTaskLogInfoService dmDataTaskLogInfoService = (DmDataTaskLogInfoService)SpringContextUtil.getBean("dmDataTaskLogInfoServiceImpl");
        SysScheduleServiceImpl  sysScheduleService =  (SysScheduleServiceImpl)SpringContextUtil.getBean("sysScheduleServiceImpl");
        if (isManual) {
            dmDataTaskLogInfo = dmDataTaskLogInfoService.getDataImportLogInfo(reportDate, reportType);
        } else {
            SysSchedule sysSchedule = sysScheduleService.getObjectBySql(Sqls.create("SELECT * FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + DateUtil.getNow(DateUtil.FORMAT_DATE_SHORT) + "' AND TASK_TYPE='1' AND STATUS='0' ORDER BY REPORTDATE FETCH FIRST 1 ROW ONLY"), null, null);
            if (sysSchedule != null) {
                dmDataTaskLogInfo = dmDataTaskLogInfoService.getDataImportLogInfo(sysSchedule.getReportDate(), sysSchedule.getReportType());
            }
        }
        System.out.println(sysScheduleService.checkScheduleStatus(DateUtil.getNow(DateUtil.FORMAT_DATE_SHORT), "1"));
        if ((isManual && !dmDataTaskLogInfo.getTaskState().equals("2"))
                || (sysScheduleService.checkScheduleStatus(DateUtil.getNow(DateUtil.FORMAT_DATE_SHORT), "1") && (dmDataTaskLogInfo == null || (dmDataTaskLogInfo != null && dmDataTaskLogInfo.getTaskState().equals("1"))))) {
            // 判断是否手动开始
            if (!isManual) {
                SysSchedule sysSchedule = sysScheduleService.getObjectBySql(Sqls.create("SELECT * FROM SAM.SYS_SCHEDULE WHERE TASK_TIME='" + DateUtil.getNow(DateUtil.FORMAT_DATE_SHORT) + "' AND TASK_TYPE='1' AND STATUS='0' ORDER BY REPORTDATE FETCH FIRST 1 ROW ONLY"), null, null);
                reportDate = sysSchedule.getReportDate();
                reportType = sysSchedule.getReportType();
            }
            systemDate = DateUtil.getNow(DateUtil.FORMAT_DATE_SHORT);
            taskState = "2";
            Dao remoteDao = null;
            DaoUp remoteDaoUp = null;
            Dao dcDao = null;
            DaoUp dcDaoUp = null;
            taskLogInfo = new StringBuffer();
            try {
                dmDataTaskLogInfoService.updateImportLogInfo(reportDate, reportType, "2", "------开始执行" + reportDate + "报表自动导入任务[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]----------<br><br>");
                if (partNum == 1) {
                    // 获取1104数据仓库数据库地址配置
                    // 获取1104数据仓库连接
                    logger.info("第一部分：报表导入开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    taskLogInfo.append("第一部分：报表导入开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                    String remoteDataBaseUserName = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_CONFIG' AND ZD_VALUE='USERNAME'");
                    String remoteDataBasePassword = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_CONFIG' AND ZD_VALUE='PASSWORD'");

                    if (remoteDaoUp == null) {
                        String remoteDataBaseURL = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_CONFIG' AND ZD_VALUE='URL'");
                        String remoteDataBaseDriver = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_CONFIG' AND ZD_VALUE='DRIVER'");
                        remoteDaoUp = EastConUtil.getInstance().getNewConnert(remoteDataBaseURL, remoteDataBaseUserName, remoteDataBasePassword, remoteDataBaseDriver);
                    }
                    remoteDao = remoteDaoUp.dao();

                    // 获取审核系统数据库连接
                    String remoteDCUserName = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_DC1104' AND ZD_VALUE='USERNAME'");
                    String remoteDCPassword = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_DC1104' AND ZD_VALUE='PASSWORD'");

                    if (dcDaoUp == null) {
                        String remoteDCDriver = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_DC1104' AND ZD_VALUE='DRIVER'");
                        String remoteDCURL = dmDataTaskListService.singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='DM_DATABASE_DC1104' AND ZD_VALUE='URL'");
                        dcDaoUp = EastConUtil.getInstance().getNewConnert(remoteDCURL, remoteDCUserName, remoteDCPassword, remoteDCDriver);
                        dcDao = dcDaoUp.dao();
                    }

                    List<DmDataTaskList> list = dmDataTaskListService.query(Cnd.where("TASK_FLAG", "=", "1").and("TASK_AUTO", "=", "1").asc("TASK_INDEX"), null);
                    taskLogInfo = new StringBuffer();

                    taskLogInfo.append("=========需要执行" + list.size() + "个任务========<br>");
                    int taskNum = 1;
                    //int Dnum = 1;// 导出表方法数目
                    for (DmDataTaskList dmDataTask : list) {
                        dmDataTask.setTaskContent(dmDataTask.getTaskContent().replace("$reportDate$", reportDate).replace("$reportType$", reportType).replace("$YEAR$", reportDate.substring(0, 4)));
                        taskLogInfo.append("--------执行第" + taskNum + "个任务:" + dmDataTask.getTaskName() + "[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]---------<br>");
                        if (dmDataTask.getTaskType().equals("L")) {
                            if (dmDataTask.getDataSource().equals("DM_DATABASE_CONFIG")) {
                                List<Record> recordList = EastConUtil.getRecord1(remoteDao, dmDataTask.getTaskContent(), dmDataTask.getTaskTableName());
                                dmDataTaskListService.dao().fastInsert(recordList);
                            } else {
                                List<Record> recordList = EastConUtil.getRecord1(dcDao, dmDataTask.getTaskContent(), dmDataTask.getTaskTableName());
                                dmDataTaskListService.dao().fastInsert(recordList);
                            }
                            loadNum++;
                        } else if (dmDataTask.getTaskType().equals("D")) {
                            String str = dmDataTask.getTaskContent();
                            StringBuffer batFileBuffer = new StringBuffer();
                            batFileBuffer.append("@echo off\r\n");
                            if (dmDataTask.getDataSource().equals("DM_DATABASE_CONFIG")) {
                                batFileBuffer.append("db2 connect to dw_shsj" + " user " + remoteDataBaseUserName + " using " + remoteDataBasePassword + "\r\n");
                            } else {
                                batFileBuffer.append("db2 connect to dc_shsj" + " user " + remoteDCUserName + " using " + remoteDCPassword + "\r\n");
                            }
                            batFileBuffer.append("db2 export to D:\\" + dmDataTask.getTaskTableName() + ".txt of del " + str + "\r\n");
                            taskLogInfo.append("<br>生成的入库bat文件内容如下!!<br>");
                            taskLogInfo.append(batFileBuffer.toString().replace("\r\n", "<br>"));
                            logger.debug("执行bat命令信息,如下:\r\n");
                            File batFile = new File("D:\\export.bat");
                            Process p = null;
                            try {
                                FileWriter fw = new FileWriter(batFile);
                                fw.write(batFileBuffer.toString());
                                fw.close();
                                p = Runtime.getRuntime().exec("db2cmd -c -w -i " + batFile.getAbsolutePath());
                                InputStream in = p.getInputStream();
                                String s = "";
                                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in, "GBK"));
                                taskLogInfo.append("bat文件执行成功,入库信息如下!");
                                while ((s = bufferedReader.readLine()) != null) {
                                    if (StrUtil.isNotNull(s)) {
                                        taskLogInfo.append(s + "<br>");
                                    }
                                }
                                in.close();
                                bufferedReader.close();
                            } catch (Exception e) {
                                taskLogInfo.append("创建,执行 bat 导出文件时,异常...<br>" + e.getMessage());
                            } finally {
                                if (p != null) {
                                    p.destroy();
                                }
                            }

                            String sqltdr = "CALL SYSPROC.ADMIN_CMD('load from D:\\$TaskTableName.txt of del insert into $TaskTableName')";
                            Sql sqls = Sqls.create(sqltdr);
                            sqls.vars().set("TaskTableName", dmDataTask.getTaskTableName());
                            List<String> drrz = new ArrayList<String>();
                            drrz = loadRz(sqls, dmDataTaskListService);// 导出及导出日志
                            taskLogInfo.append("读取行数:" + drrz.get(0) + "<br>" + "跳过行数:" + drrz.get(1) + "<br>" + "装入行数:" + drrz.get(2) + "<br>" + "拒绝行数:" + drrz.get(3) + "<br>" + "删除行数:" + drrz.get(4) + "<br>" + "落实行数:"
                                    + drrz.get(5) + "<br>" + "[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]---------<br><br>");
                            loadNum++;

                        } else {
                            final String sqlStr = dmDataTask.getTaskContent();
                            // 支持一个任务中有多条语句
                            if (sqlStr.contains(";")) {
                                Trans.exec(new Atom() {
                                    @Override
                                    public void run() {
                                        List<String> sqlLists = StrUtil.convertToList(sqlStr, ";");
                                        for (String string : sqlLists) {
                                            Sql sql = Sqls.create(string);
                                            dmDataTaskListService.dao().execute(sql);

                                        }
                                    }
                                });
                                extractNum++;
                            } else {
                                Sql sql = Sqls.create(sqlStr);
                                dmDataTaskListService.dao().execute(sql);
                                extractNum++;
                            }
                        }
                        // taskLogInfo.append("--------第" + taskNum + "个任务:" +
                        // dmDataTask.getTaskName() + "执行成功[" +
                        // DateUtil.getNow(DateUtil.FORMAT_LONG) +
                        // "]---------<br><br>");
                        taskNum++;
                        dmDataTaskLogInfoService.updateImportTableNum(reportDate, reportType, loadNum, extractNum);
                    }
                    logger.info("调用转化程序----------------------------------");
                    RdReportMidDataUtil.makeReportDataMove();
                    logger.info("第一部分：报表导入结束*******[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    taskLogInfo.append("第一部分：报表导入结束-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                    if (!partFlag) {
                        partNum++;
                    } else {
                        partNum = 0;
                    }
                }

                if (partNum == 2) {
                    taskLogInfo.append("第二部分：报表逻辑校验开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                    logger.info("第二部分：报表逻辑校验开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    RdCheckAutoUtil.toReportCheckAuto(reportDate, reportType);
                    RdCheckAutoUtil.matchNum(reportDate, reportType);// 预追溯匹配
                    logger.info("第二部分：报表逻辑校验结束*******[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    taskLogInfo.append("第二部分：报表逻辑校验结束*******[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                    if (!partFlag) {
                        partNum++;
                    } else {
                        partNum = 0;
                    }
                }

                // 生成与上期比较的异动公式
                if (partNum == 3) {
                    taskLogInfo.append("第三部分：报表异动公式生成开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                    logger.info("第三部分：报表异动公式生成开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    if (reportType.equals("50")) {
                        RdCheckWaveAvgUtil.makeCheckWaveFormula(reportDate, reportType, "1");
                    } else if (reportType.equals("40")) {
                        RdCheckWaveAvgUtil.makeCheckWaveFormula(reportDate, reportType, "2");
                        //RdCheckWaveAvgUtil.makeCheckWaveFormulaNotClear(reportDate, "50", "1");
                    } else if (reportType.equals("80")) {
                        RdCheckWaveAvgUtil.makeCheckWaveFormula(reportDate, reportType, "3");
                        //RdCheckWaveAvgUtil.makeCheckWaveFormulaNotClear(reportDate, "40", "2");
                        //RdCheckWaveAvgUtil.makeCheckWaveFormulaNotClear(reportDate, "50", "1");
                    } else {
                        RdCheckWaveAvgUtil.makeCheckWaveFormula(reportDate, reportType, "4");
                        //RdCheckWaveAvgUtil.makeCheckWaveFormulaNotClear(reportDate, "80", "3");
                        //RdCheckWaveAvgUtil.makeCheckWaveFormulaNotClear(reportDate, "40", "2");
                        //RdCheckWaveAvgUtil.makeCheckWaveFormulaNotClear(reportDate, "50", "1");
                    }
                    logger.info("第三部分：报表异动公式生成结束*******[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    taskLogInfo.append("第三部分：报表异动公式生成结束*******[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                    if (!partFlag) {
                        partNum++;
                    } else {
                        partNum = 0;
                    }
                }
                if (partNum == 4) {
                    taskLogInfo.append("第四部分：报表异动校验成开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                    logger.info("第四部分：报表异动校验成开始-------[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    if (reportType.equals("50")) {
                        RdCheckAutoUtil.toReportCheckYdAutoNew(reportDate, reportType, "1");
                    } else if (reportType.equals("40")) {
                        RdCheckAutoUtil.toReportCheckYdAutoNew(reportDate, reportType, "2");
                    } else if (reportType.equals("80")) {
                        RdCheckAutoUtil.toReportCheckYdAutoNew(reportDate, reportType, "3");
                    } else {
                        RdCheckAutoUtil.toReportCheckYdAutoNew(reportDate, reportType, "4");
                    }
                    logger.info("第四部分：报表异动校验结束*******[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]");
                    taskLogInfo.append("第四部分：报表异动校验结束*******[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]<br>");
                }
                //RdCheckAutoUtil.toRdIndCheckAuto(reportDate, reportType);
                sysScheduleService.updateScheduleStatus(systemDate, reportDate, reportType, "1");
                taskState = "1";


            } catch (Exception e) {
                taskState = "0";
                e.printStackTrace();
                taskLogInfo.append("====第" + partNum + "部分执行错误===处理报错，报错信息如下[" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "]========<br>" + e.getMessage() + "<br>" + e.getLocalizedMessage() + "<br>"
                        + e.getStackTrace().toString());
            } finally {
                dmDataTaskLogInfoService.updateImportLogInfo(reportDate, reportType, taskState, taskLogInfo.toString());
                if (!partFlag) {
                    dmDataTaskLogInfoService.updateImportTableNum(reportDate, reportType, loadNum, extractNum);
                }

                if (remoteDaoUp != null) {
                    remoteDaoUp.close();
                }
                if (dcDaoUp != null) {
                    dcDaoUp.close();
                }

            }

        }
    }

    public boolean isStart() {
        return false;
    }

    /**
     * 功能描述：导出表时日志
     *
     * @param sql
     * @param remoteDao
     * @return
     * @author
     * @date 2017年9月26日
     * @modify log:
     */
    private List<String> exportRz(Sql sql, Dao remoteDao) {
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection arg0, ResultSet rs, Sql arg2) throws SQLException {
                List<String> list = new ArrayList<>();
                if (rs.next()) {
                    list.add(rs.getString(1));
                    list.add(rs.getString(2));
                    list.add(rs.getString(3));
                }
                return list;
            }
        });
        remoteDao.execute(sql);
        return sql.getList(String.class);
    }

    /**
     * 功能描述：导入表时日志
     *
     * @param sqls
     * @param dmDataTaskListService
     * @return
     * @author
     * @date 2017年9月26日
     * @modify log:
     */
    private List<String> loadRz(Sql sqls, DmDataTaskListServiceImpl dmDataTaskListService) {
        sqls.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection arg0, ResultSet rs, Sql arg2) throws SQLException {

                List<String> list = new ArrayList<>();
                if (rs.next()) {
                    list.add(rs.getString(1));
                    list.add(rs.getString(2));
                    list.add(rs.getString(3));
                    list.add(rs.getString(4));
                    list.add(rs.getString(5));
                    list.add(rs.getString(6));
                }
                return list;
            }
        });
        dmDataTaskListService.dao().execute(sqls);
        return sqls.getList(String.class);
    }

}
