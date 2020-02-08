package com.efraiser.test.scheduler.task;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Types;
import java.util.List;

import com.alibaba.druid.pool.DruidDataSource;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.nutz.R;
import org.nutz.dao.Dao;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.trans.Atom;
import org.nutz.trans.Trans;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProcessTaskUtil {
    static Logger log = LoggerFactory.getLogger(ProcessTaskUtil.class);

    @Autowired
    private DruidDataSource druidDataSource;

    @Autowired
    private Dao dao;


    public String runSql(String sqlString, String dataDate) {
        String sqlDate = DateUtil.parseStr(dataDate);
        log.info("开始执行SQL语句任务:{}", sqlString);
        String errorMessage = "";
        try {
            if (dao == null) {
                log.error("运行SQL任务时,未能获取名为{}的数据库操作对象!!!");
                errorMessage = "运行SQL任务时,未能获取数据库操作对象!!!";
                return errorMessage;
            }
            // 替换特殊字符
            final String sqlStr = sqlString.replace("$UUID$", R.UU16()).replace("$dataDate$", sqlDate).replace("$数据日期YYYY-MM-DD$", sqlDate).replace("$数据日期YYYY-MM$", sqlDate.substring(0, 7)).replace("$数据日期YYYYMMDD$", sqlDate.replace("-", "")).replace("$数据日期YYYYMM$", sqlDate.replace("-", "").subSequence(0, 6)).trim();
            if (sqlStr.contains(";")) {
                Trans.exec(new Atom() {
                    @Override
                    public void run() {
                        List<String> sqlLists = StrUtil.convertToList(sqlStr, ";");
                        for (String string : sqlLists) {
                            Sql sql = Sqls.create(string);
                            dao.execute(sql);
                        }
                    }
                });
            } else {
                Sql sql = Sqls.create(sqlStr);
                dao.execute(sql);
            }
            return errorMessage;
        } catch (Exception e) {
            log.error("执行语句发生错误! sql:{" + sqlString + "}", e);
            errorMessage += "执行语句发生错误!!原因为:" + e.getMessage();
            return errorMessage;
        }
    }

    public String runProc(String procFuc) {
        String errorMessage = "";
        try {

            if (druidDataSource == null) {
                log.error("获取druidDataSource为{}对象失败!!");
                errorMessage += "获取druidDataSource对象失败!!";
                return errorMessage;
            }
            log.info("         开始执行存储过程{}", procFuc);
            Connection con = druidDataSource.getConnection();
            CallableStatement proc = con.prepareCall("{call " + procFuc + "}");
            proc.registerOutParameter(1, Types.VARCHAR);
            proc.execute();
            String result = proc.getString(1);
            proc.close();
            if (!con.isClosed()) {
                con.close();
            }
            if ("0".equals(result)) {
                return errorMessage;
            } else {
                log.error("存储过程{}执行结果:不成功;", procFuc);
                errorMessage += "存储过程{" + procFuc + "}执行结果:不成功;";
                return errorMessage;
            }
        } catch (Exception e) {
            log.error("         执行存储过程时发生异常!!!!\n{}", e.getMessage(), e);
            errorMessage += " 执行存储过程时发生异常!!!!\n{" + e.getMessage() + "}";
            return errorMessage;
        }
    }

    public boolean runBat(String batPath) {
        log.info("开始执行bat文件{}", batPath);
        try {
            Runtime rt = Runtime.getRuntime();
            rt.exec("cmd.exe /c start " + batPath);
            return true;
        } catch (IOException e) {
            log.error("执行bat文件时,发生异常!!{}" + e.getMessage(), e);
            return false;
        }
    }

    public String runClass(String className) {
        String errorMessage = "";
        log.info("开始执行class类任务:{}", className);
        try {
            QuartzTask quartzTask = generateTask(className);
            if (quartzTask == null) {
                log.error("实例化{}类失败...", className);
                errorMessage += "实例化{" + className + "}类失败...";
                return errorMessage;
            } else {
                log.debug("运行{}类execute方法", className);
                quartzTask.execute();
                log.debug("运行完成!!");
                return errorMessage;
            }
        } catch (Exception e) {
            log.error("执行class任务时,出现异常{}", e.getMessage(), e);
            errorMessage += "执行class任务时,出现异常{" + e.getMessage() + "}";
            return errorMessage;
        }
    }

    /**
     * 生成任务实例
     *
     * @return
     */
    private static QuartzTask generateTask(String className) {
        try {
            Class<?> taskClz = Class.forName(className);
            return (QuartzTask) taskClz.newInstance();
        } catch (ClassNotFoundException e) {
            log.error("未能找到类:" + className, e);
        } catch (InstantiationException e) {
            log.error("实例化类:{" + className + "} 时出错!!", e);
        } catch (IllegalAccessException e) {
            log.error("反射人物类异常!" + e.getMessage(), e);
        }
        return null;
    }
}
