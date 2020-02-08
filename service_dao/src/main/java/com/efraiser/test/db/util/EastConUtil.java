package com.efraiser.test.db.util;

import com.alibaba.druid.pool.DruidDataSource;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.CheckFormulaExpend;
import com.efraiser.test.db.model.ews.ScoreZfphSql;
import com.efraiser.test.db.model.ews.ScoreZfphSum;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysEastUrl;
import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.service.ews.checkall.CheckAllService;
import com.efraiser.test.db.service.ews.checkall.impl.CheckAllServiceImpl;
import com.efraiser.test.db.service.ews.checkformulaexpend.CheckFormulaExpendService;
import com.efraiser.test.db.service.ews.checkformulaexpend.impl.CheckFormulaExpendServiceImpl;
import com.efraiser.test.db.service.ews.scorezfphsql.ScoreZfphSqlService;
import com.efraiser.test.db.service.ews.scorezfphsql.impl.ScoreZfphSqlServiceImpl;
import com.efraiser.test.db.service.ews.scorezfphsum.ScoreZfphSumService;
import com.efraiser.test.db.service.ews.scorezfphsum.impl.ScoreZfphSumServiceImpl;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import com.efraiser.test.db.service.sys.syseasturl.SysEastUrlService;
import com.efraiser.test.db.service.sys.syseasturl.impl.SysEastUrlServiceImpl;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysggzd.impl.SysGgzdServiceImpl;
import org.nutz.dao.Cnd;
import org.nutz.dao.Dao;
import org.nutz.dao.Sqls;
import org.nutz.dao.entity.Record;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.nutz.dao.util.DaoUp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

@Component
public class EastConUtil {

    private Logger logger = LoggerFactory.getLogger(EastConUtil.class);

    @Autowired
    private SysEastUrlService sysEastUrlService;

    @Autowired
    private SysGgzdService sysGgzdService;

    @Autowired
    private SysBmglService sysBmglService;

    @Autowired
    private ScoreZfphSumService scoreZfphSumService;

    @Autowired
    private ScoreZfphSqlService scoreZfphSqlService;

    @Autowired
    private CheckAllService checkAllService;

    @Autowired
    private CheckFormulaExpendService checkFormulaExpendService;


    private static EastConUtil eastConUtil;

    public EastConUtil(){
        eastConUtil = this;
    }

    public static EastConUtil getInstance(){
        return eastConUtil ;
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
    public DaoUp getNewConnect(String brNo) {

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
            logger.error("getNewConnect()! error! brNo:[" + brNo + "]");
            return null;
        }
    }

    public DaoUp getNewConnert(String URL, String userName, String password, String driver) throws SQLException {
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driver);
        ds.setUrl(URL);
        ds.setUsername(userName);
        ds.setPassword(password);
        ds.getConnection();
        DaoUp daoUp = new DaoUp("remote") {
        };
        daoUp.setDataSource(ds);
        return daoUp;
    }

    public DaoUp getCollectPortConfig(String URL, String userName, String password, String driver) throws SQLException {
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driver);
        ds.setUrl(URL);
        ds.setUsername(userName);
        ds.setPassword(password);
        ds.setMinIdle(5);

        ds.getConnection();
        DaoUp daoUp = new DaoUp("collectPortConfig") {
        };
        daoUp.setDataSource(ds);
        return daoUp;
    }

    public DaoUp getDC1104Config(String URL, String userName, String password, String driver) throws SQLException {
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driver);
        ds.setUrl(URL);
        ds.setUsername(userName);
        ds.setPassword(password);
        ds.setMinIdle(5);

        ds.getConnection();
        DaoUp daoUp = new DaoUp("remoteConfig") {
        };
        daoUp.setDataSource(ds);
        return daoUp;
    }

    /**
     * 功能描述：根据传入的sql语句返回第一行的结果数
     *
     * @param dao
     * @param sqlStr
     * @return
     * @author wushuo
     * @date 2016年3月10日
     * @modify log:
     */
    public int getCount(Dao dao, String sqlStr) {
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {
            @Override
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

    /**
     * 功能描述：功能描述：根据传入的sql语句返回第一行double值
     *
     * @param dao
     * @param sqlStr
     * @return
     * @author
     * @date 2016年3月15日
     * @modify log:
     */
    public double getDouble(Dao dao, String sqlStr) {
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs != null && rs.next()) {
                    return rs.getDouble(1);
                } else {
                    return 0;
                }
            }
        });
        dao.execute(sql);
        return (double) sql.getResult();
    }

    /**
     * 功能描述：执行总分平衡计算公式
     *
     * @param brNo       机构编号
     * @param reportDate 报表日期
     * @param daoUp      远端数据库接口
     * @author
     * @date 2017年3月13日
     * @modify log:
     */
    public void toCalculateZfph(String brNo, String reportDate, DaoUp daoUp) {

        // 删除之前可能存在的结果
        ScoreZfphSumServiceImpl scoreZfphSumServiceImpl = (ScoreZfphSumServiceImpl) scoreZfphSumService;

        ScoreZfphSqlServiceImpl scoreZfphSqlServiceImpl = (ScoreZfphSqlServiceImpl) scoreZfphSqlService;
        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;


        scoreZfphSumServiceImpl.dao().execute(
                Sqls.create("DELETE FROM SAM.SCORE_ZFPH_SUM WHERE BRNO='" + brNo + "' AND SJRQ='" + reportDate + "'"));
        scoreZfphSumServiceImpl.dao().execute(Sqls.create("DELETE FROM SAM.SCORE_HELP_SUM WHERE BRNO='" + brNo + "'"));
        // 建立远端数据库连接
        // daoUp = EastConUtil.getNewConnect(brNo);
        // 获取数据库相关信息
        SysEastUrl sysEastUrl = sysEastUrlServiceImpl.fetch(Cnd.where("BRNO", "=", brNo));
        // 获取内部机构号信息
        //SysGgzd sysGgzd = sysGgzdDao.fetch(Cnd.where("ZD_VALUE", "=", brNo).and("G_ID", "=", "EastNBJGH"));
        List<ScoreZfphSql> scoreZfphSqls = scoreZfphSqlServiceImpl.query(Cnd.where("SQL_STATE", "=", "1"), null);

        for (int i = 0; i < scoreZfphSqls.size(); i++) {
            String sqlStr = scoreZfphSqls.get(i).getStaSql();
            sqlStr = sqlStr.replace("$Schema$", sysEastUrl.getTableSchema());
            sqlStr = sqlStr.replace("$YYYYMMDD$", reportDate.replace("-", ""));
            // 机构账目可能汇总到多个机构上，所以内部机构号要运行填写多个由“,”号隔开;
            //sqlStr = sqlStr.replace("'$NBJGH$'", StrUtil.convertQuoMarksSQL(sysGgzd.getZdName()));

            String sjbh = scoreZfphSqls.get(i).getZbbh();
            String zbmc = scoreZfphSqls.get(i).getZbmc();
            Sql sql = Sqls.create(sqlStr);
            final String finalBrno = brNo;
            final String finalSjrq = reportDate.replace("-", "");
            final String finalSjbh = sjbh;
            final String finalZbmc = zbmc;
            sql.setCallback(new SqlCallback() {
                @Override
                public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                    List<ScoreZfphSum> scoreZfphSums = new LinkedList<ScoreZfphSum>();
                    while (rs.next()) {
                        ScoreZfphSum scoreZfphSum = new ScoreZfphSum();
                        scoreZfphSum.setZbbh("  " + rs.getString("KMBH"));
                        scoreZfphSum.setZbmc(rs.getString("KMMC"));
                        scoreZfphSum.setSjbh(finalSjbh);
                        scoreZfphSum.setZbye(rs.getDouble("ye"));
                        scoreZfphSum.setBrno(finalBrno);
                        scoreZfphSum.setSjrq(finalSjrq);
                        scoreZfphSum.setParent(finalSjbh);
                        scoreZfphSums.add(scoreZfphSum);
                    }
                    return scoreZfphSums;
                }
            });
            daoUp.dao().execute(sql); // 执行语句
            List<ScoreZfphSum> list = sql.getList(ScoreZfphSum.class); // 返回结果
            if (list != null && list.size() > 0) {
                // 创建单项汇总项
                ScoreZfphSum parent = new ScoreZfphSum();
                parent.setZbbh(finalSjbh + "-" + brNo);
                parent.setZbmc(finalZbmc);
                parent.setSjbh("");
                parent.setBrno(finalBrno);
                parent.setSjrq(finalSjrq);
                parent.setParent("");
                double zye = 0.0;
                for (ScoreZfphSum szs : list) {
                    szs.setParent(szs.getParent() + "-" + brNo);
                    zye += szs.getZbye();
                }
                parent.setZbye(zye);
                scoreZfphSumServiceImpl.dao().insert(parent);
                scoreZfphSumServiceImpl.dao().insert(list);
                scoreZfphSumServiceImpl.dao().execute(Sqls
                        .create("INSERT INTO SCORE_HELP_SUM VALUES('" + finalSjbh + "'," + zye + ",'" + brNo + "')"));

            } else {
                scoreZfphSumServiceImpl.dao().execute(
                        Sqls.create("INSERT INTO SCORE_HELP_SUM VALUES('" + finalSjbh + "',0,'" + brNo + "')"));
            }
        }
    }

    /**
     * 功能描述：根据SQL返回查询结果
     *
     * @param eastDao
     * @param sqlStr
     * @return 查询结果序列(字段序号从1开始)
     * @author wushuo
     * @date 2016年3月10日
     * @modify log:
     */
    public static List<Record> getRecord(Dao eastDao, String sqlStr, Pager page) {
        List<Record> records = null;
        Sql sql = Sqls.create(sqlStr);
        sql.setPager(page);
        sql.setCallback(new SqlCallback() {
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<Record> list = new LinkedList<Record>();
                ResultSetMetaData rsm = rs.getMetaData();
                int col = rsm.getColumnCount();
                Record record;
                while (rs.next()) {
                    record = new Record();
                    for (int i = 1; i <= col; i++) {
                        record.set(rsm.getColumnName(i), rs.getString(i));
                    }
                    list.add(record);
                }
                return list;
            }
        });
        eastDao.execute(sql);
        records = sql.getList(Record.class);
        return records;
    }

    /**
     * 功能描述：根据SQL返回查询结果
     *
     * @param eastDao
     * @param sqlStr
     * @return 查询结果序列(字段序号从1开始)
     * @author wushuo
     * @date 2016年3月10日
     * @modify log:
     */
    public static List<Record> getRecord1(Dao eastDao, String sqlStr, String tableName) {
        List<Record> records = null;
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<Record> list = new LinkedList<Record>();
                ResultSetMetaData rsm = rs.getMetaData();
                int col = rsm.getColumnCount();
                Record record;
                while (rs.next()) {
                    record = new Record();
                    for (int i = 1; i <= col; i++) {
                        record.set(rsm.getColumnName(i), rs.getString(i));
                    }
                    list.add(record);
                }
                return list;
            }
        });
        eastDao.execute(sql);
        records = sql.getList(Record.class);
        for (int i = 0; i < records.size(); i++) {
            records.get(i).put(".table", tableName);
        }
        return records;
    }

    /**
     * 功能描述：将查询出来的结果插入到本地数据库的结果集中
     *
     * @param re        结果集
     * @param brNo      机构
     * @param tableName 插入表名称
     * @author wushuo
     * @date 2016年3月10日
     * @modify log:
     */
    public void setResultToDB(List<Record> re, String brNo, String tableName, String formulaId) {

        CheckAllServiceImpl checkAllDao = (CheckAllServiceImpl) checkAllService;
        for (Record record : re) {
            String sqlStr = "insert into EDW.RE_" + tableName + " values(uuid(),'" + formulaId + "',";
            for (int i = 1; i <= record.size(); i++) {
                // 判断字段是否为NULL或是小数
                if (record.getString("" + i + "") == null) {
                    sqlStr += record.getString("" + i + "") + ",";// 根据字段的序号获取字段的值（序号从1开始）
                } else {
                    sqlStr += "'" + record.getString("" + i + "") + "',";
                }
            }
            sqlStr += "'" + brNo + "')";
            checkAllDao.dao().execute(Sqls.create(sqlStr));
        }

    }

    /**
     * 功能描述：将查询的结果集插入到数据表中
     *
     * @param re        结果集
     * @param tableName 表名称
     * @param brNo      机构名称
     * @author wushuo
     * @date 2016年3月15日
     * @modify log:
     */
    public void importResultToDB(List<Record> re, String tableName, String brNo) {
        CheckAllServiceImpl checkAllDao = (CheckAllServiceImpl) checkAllService;
        for (Record record : re) {
            String sqlStr = "insert into EDW." + tableName + " values(";
            for (int i = 1; i <= record.size(); i++) {
                // 判断字段是否为NULL或是小数
                if (record.getString("" + i + "") == null || StrUtil.isNumeric(record.getString("" + i + ""))) {
                    sqlStr += record.getString("" + i + "") + ",";// 根据字段的序号获取字段的值（序号从1开始）
                } else {
                    sqlStr += "'" + record.getString("" + i + "") + "',";
                }
            }
            sqlStr += "'" + brNo + "')";
            checkAllDao.dao().execute(Sqls.create(sqlStr));
        }

    }

    private void importResultToJYLS(List<Record> re, String tableName, String reportDate) {
        CheckAllServiceImpl checkAllDao = (CheckAllServiceImpl) checkAllService;
        for (Record record : re) {
            String sqlStr = "insert into EDW." + tableName + " values(";
            for (int i = 1; i <= record.size(); i++) {
                sqlStr += "'" + record.getString("" + i + "") + "',";
            }
            sqlStr += "'" + reportDate + "')";
            checkAllDao.dao().execute(Sqls.create(sqlStr));
        }

    }

    /**
     * 功能描述：将远程数据库的EAST客户风险表引入本地的数据库中
     *
     * @param brNo       机构代码
     * @param reportDate 报表日期
     * @throws ClassNotFoundException
     * @throws SQLException
     * @author wushuo
     * @date 2016年3月15日
     * @modify log:
     */
    public void importEastTable(String brNo, String reportDate) throws ClassNotFoundException, SQLException {
        DaoUp daoUp = getNewConnect(brNo);

        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;
        SysGgzdServiceImpl sysGgzdServiceImpl = (SysGgzdServiceImpl) sysGgzdService;

        SysEastUrl sysEastUrl = sysEastUrlServiceImpl.fetch(brNo);
        List<SysGgzd> lists = sysGgzdServiceImpl.query(Cnd.wrap("G_ID = 'ImportEastTable'"), null);
        String nbjgStr = sysGgzdServiceImpl
                .singleString("SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='EastWithDCKNBJGH' AND ZD_VALUE='" + brNo + "'");
        for (SysGgzd sysGgzd : lists) {
            // 删除之前导入的同期的数据
            sysGgzdServiceImpl.dao().execute(Sqls.create("DELETE from EDW." + sysGgzd.getZdValue() + " where cjrq = '"
                    + reportDate + "' and brNo='" + brNo + "'"));
            // 获取远程数据库中表的数据
            List<Record> records = getRecord1(daoUp.dao(), "select * from " + sysEastUrl.getTableSchema() + "."
                            + sysGgzd.getZdValue() + " where cjrq = '" + reportDate + "' AND " + nbjgStr,
                    "EDW." + sysGgzd.getZdValue());
            for (int i = 0; i < records.size(); i++) {
                records.get(i).put("brno", brNo);
            }
            sysGgzdServiceImpl.dao().fastInsert(records);
        }
        // 关闭数据连接
        daoUp.close();
    }

    /**
     * 功能描述：生成交易流水表的将要比较的字段
     *
     * @param brNo
     * @param reportDate
     * @throws ClassNotFoundException
     * @throws SQLException
     * @author
     * @date 2016年3月17日
     * @modify log:
     */
    public void readlyEastDate(String brNo, String reportDate) throws ClassNotFoundException, SQLException {
        System.out.println("开始形成交易流水表");
        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;

        DaoUp daoUp = getNewConnect(brNo);
        List<Record> lists = getRecord(daoUp.dao(), "select HXJYLSH,ZJYLSH,BCXH,JYRQ,JYSJ FROM "
                + sysEastUrlServiceImpl.fetch(brNo).getTableSchema() + ".T_JL_JYLS WHERE cjrq='" + reportDate + "'", null);
        importResultToJYLS(lists, "HELP_JYLSH", reportDate);
        daoUp.close();
    }

    /**
     * 功能描述：统计将要校验的数据表的条数
     *
     * @param brNo
     * @param reportDate
     * @throws ClassNotFoundException
     * @throws SQLException
     * @author
     * @date 2016年3月17日
     * @modify log:
     */
    public void readlyEastNumber(String brNo, String reportDate, String version)
            throws ClassNotFoundException, SQLException {
        if (version == null) {
            version = "2";
        }

        // 先删除重复的数据
        CheckAllServiceImpl checkAllDao = (CheckAllServiceImpl) checkAllService;
        String sqlStr = "delete from EDW.HELP_JYSJL where reportDate='" + reportDate + "' and brNo ='" + brNo
                + "' and version ='" + version + "'";
        checkAllDao.dao().execute(Sqls.create(sqlStr));
        System.out.println("开始计算表的数据条目");

        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;
        SysGgzdServiceImpl sysGgzdServiceImpl = (SysGgzdServiceImpl) sysGgzdService;
        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;

        String tableSchema = sysEastUrlServiceImpl.fetch(brNo).getTableSchema();
        DaoUp daoUp = getNewConnect(brNo);
        SysBmgl sysBmgl = sysBmglServiceImpl.fetch(brNo);
        List<SysGgzd> lists = new ArrayList();
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
            }
        } else {
            if (version.equals("2")) {
                lists = sysGgzdServiceImpl.query(Cnd.wrap("G_ID = 'EastTableName'"), null);
            } else if (version.equals("3")) {
                lists = sysGgzdServiceImpl.query(Cnd.wrap("G_ID = 'East_3_TableName'"), null);
            }
        }
        for (SysGgzd sysGgzd : lists) {
            int num;
            if (!sysGgzd.getZdValue().equals("T_KJ_ZZQKM")) {
                num = getCount(daoUp.dao(), "select count(*) from " + tableSchema + "." + sysGgzd.getZdValue()
                        + " where cjrq ='" + reportDate + "'");
            } else {
                num = getCount(daoUp.dao(), "select count(*) from " + tableSchema + "." + sysGgzd.getZdValue()
                        + " where kjrq ='" + reportDate + "'");
            }
            sysGgzdServiceImpl.dao().execute(Sqls.create("insert into EDW.HELP_JYSJL values('" + sysGgzd.getZdValue() + "',"
                    + num + ",'" + brNo + "','" + reportDate + "','" + version + "')"));
        }
        daoUp.close();
    }

    /**
     * 功能描述：统计将要校验的数据表的条数
     *
     * @param brNo
     * @param reportDate
     * @param version
     * @param repCode
     * @throws ClassNotFoundException
     * @throws SQLException
     * @author
     * @date 2017年7月7日
     * @modify log:
     */
    public void readlyEastNumber(String brNo, String reportDate, String version, String repCode)
            throws ClassNotFoundException, SQLException {
        if (version == null) {
            version = "2";
        }
        // 先删除重复的数据
        CheckAllServiceImpl checkAllDao = (CheckAllServiceImpl) checkAllService;
        String sqlStr = "delete from EDW.HELP_JYSJL where reportDate='" + reportDate + "' and brNo ='" + brNo
                + "' and version ='" + version + "'";
        if (StrUtil.isNotNull(repCode)) {
            sqlStr += " and tableName ='" + repCode + "'";
        }
        checkAllDao.dao().execute(Sqls.create(sqlStr));
        System.out.println("开始计算表的数据条目");

        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;
        SysGgzdServiceImpl sysGgzdServiceImpl = (SysGgzdServiceImpl) sysGgzdService;

        String tableSchema = sysEastUrlServiceImpl.fetch(brNo).getTableSchema();
        DaoUp daoUp = getNewConnect(brNo);
        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;

        SysBmgl sysBmgl = sysBmglServiceImpl.fetch(brNo);
        List<SysGgzd> lists = new ArrayList();
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

        CheckFormulaExpendServiceImpl checkFormulaExpendDao = (CheckFormulaExpendServiceImpl)checkFormulaExpendService;
        for (SysGgzd sysGgzd : lists) {
            int num = 0;
            if (StrUtil.isNotNull(repCode)) {
                if (repCode.equals(sysGgzd.getZdValue())) {
                    List<CheckFormulaExpend> expends = checkFormulaExpendDao.getFormulaExpendList(brNo,
                            sysGgzd.getZdValue(), version);
                    String formulaExpend = "";
                    if (!expends.isEmpty()) {
                        formulaExpend = expends.get(0).getFormulaExpend();
                    }
                    if (!sysGgzd.getZdValue().equals("T_KJ_ZZQKM")) {
                        num = getCount(daoUp.dao(), "select count(*) from " + tableSchema + "."
                                + sysGgzd.getZdValue() + " A where cjrq ='" + reportDate + "' " + formulaExpend);
                    } else {
                        num = getCount(daoUp.dao(), "select count(*) from " + tableSchema + "."
                                + sysGgzd.getZdValue() + " A where kjrq ='" + reportDate + "' " + formulaExpend);
                    }
                    sysGgzdServiceImpl.dao().execute(Sqls.create("insert into EDW.HELP_JYSJL values('" + sysGgzd.getZdValue()
                            + "'," + num + ",'" + brNo + "','" + reportDate + "','" + version + "')"));
                }
            } else {
                List<CheckFormulaExpend> expends = checkFormulaExpendDao.getFormulaExpendList(brNo,
                        sysGgzd.getZdValue(), version);
                String formulaExpend = "";
                if (!expends.isEmpty()) {
                    formulaExpend = expends.get(0).getFormulaExpend();
                }
                if (!sysGgzd.getZdValue().equals("T_KJ_ZZQKM")) {
                    num = getCount(daoUp.dao(), "select count(*) from " + tableSchema + "." + sysGgzd.getZdValue()
                            + " A where cjrq ='" + reportDate + "' " + formulaExpend);
                } else {
                    num = getCount(daoUp.dao(), "select count(*) from " + tableSchema + "." + sysGgzd.getZdValue()
                            + " A where kjrq ='" + reportDate + "' " + formulaExpend);
                }
                sysGgzdServiceImpl.dao().execute(Sqls.create("insert into EDW.HELP_JYSJL values('" + sysGgzd.getZdValue() + "',"
                        + num + ",'" + brNo + "','" + reportDate + "','" + version + "')"));
            }
        }
        daoUp.close();
    }

    public List<Record> getRecord(Dao eastDao, String sqlStr, String tableName, String formulaId,
                                  String formulaType, String brNo) {
        List<Record> records = null;
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<Record> list = new LinkedList<Record>();
                ResultSetMetaData rsm = rs.getMetaData();
                int col = rsm.getColumnCount();
                Record record;
                while (rs.next()) {
                    record = new Record();
                    for (int i = 1; i <= col; i++) {
                        record.set(rsm.getColumnName(i), rs.getString(i));
                    }
                    list.add(record);
                }
                return list;
            }
        });
        eastDao.execute(sql);
        records = sql.getList(Record.class);
        for (Record re : records) {
            String uuid = UUID.randomUUID().toString();
            re.set("ID", uuid);
            re.set("FORMULAID", formulaId);
            re.set("FORMULATYPE", formulaType);
            re.set("BRNO", brNo);
            re.remove(".table");
            re.put(".table", tableName);
        }
        return records;
    }

    public String getString(Dao dao, String formula) {
        Sql sql = Sqls.create(formula);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs != null && rs.next()) {
                    return rs.getString(1);
                } else {
                    return 0;
                }
            }
        });
        dao.execute(sql);
        return (String) sql.getResult();
    }

}
