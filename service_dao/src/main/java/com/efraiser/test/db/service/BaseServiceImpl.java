package com.efraiser.test.db.service;

import com.efraiser.test.db.service.common.IdEntityService;
import org.nutz.dao.Condition;
import org.nutz.dao.Dao;
import org.nutz.dao.SqlNotFoundException;
import org.nutz.dao.Sqls;
import org.nutz.dao.entity.MappingField;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.nutz.lang.Strings;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public abstract class BaseServiceImpl<T> extends IdEntityService<T> {

    public BaseServiceImpl() {
        super();
    }


    public int delete(String name) {
        return dao().delete(getEntityClass(), name);
    }

    public T fetch(String name) {
        return dao().fetch(getEntityClass(), name);
    }

    protected List<String> getListStringBySqlStr(Sql sql) {
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> list = new LinkedList<String>();
                while (rs.next()) {
                    list.add(rs.getString(1));
                }
                return list;
            }
        });
        dao().execute(sql);
        return sql.getList(String.class);
    }

    protected List<Integer> getListIntegerBySqlStr(Sql sql) {

        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<Integer> list = new LinkedList<Integer>();
                while (rs.next()) {
                    list.add(rs.getInt(1));
                }
                return list;
            }
        });
        dao().execute(sql);
        return sql.getList(Integer.class);
    }

    /**
     * 根据自定义SQL,获取数据库多少条数据
     *
     * @param sqlStrings 查询的SQL语句
     * @return
     */
    protected int countBySql(String sqlStrings) {
        String sqlStr = sqlStrings.replace("from", "FROM").replace("order", "ORDER");
        System.out.println(sqlStr);
        String sqlN = "select count(*)   ";
        if (sqlStr.lastIndexOf("ORDER") > 0) {
            sqlN += sqlStr.substring(sqlStr.indexOf("FROM"), sqlStr.lastIndexOf("ORDER"));
        } else {
            sqlN += sqlStr.substring(sqlStr.indexOf("FROM"));
        }

        Sql sql = Sqls.create(sqlN);
        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                int c = 0;
                while (rs.next()) {
                    c = rs.getInt(1);
                }
                return c;
            }
        });
        dao().execute(sql);
        return sql.getInt();
    }

    /**
     * 根据传入的SQL语句,获取第一行第一列结果(INT类型)
     *
     * @param sqlStr
     * @return
     */
    public int singleInt(String sqlStr) {
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
        dao().execute(sql);
        return sql.getInt();
    }

    /**
     * 功能描述：根据传入的SQL语句,获取第一行第一列结果(double类型)
     *
     * @param sqlStr
     * @return
     * @author wushuo
     * @date 2016年2月26日
     * @modify log:
     */
    public double singleDouble(String sqlStr) {
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs != null && rs.next()) {
                    return rs.getDouble(1);
                } else {
                    return 0.0;
                }
            }
        });
        dao().execute(sql);
        return (double) sql.getResult();
    }

    /**
     * 根据传入的SQL语句,获取第一行第一列结果(String类型)
     *
     * @param sqlStr
     * @return
     */
    public String singleString(String sqlStr) {
        Sql sql = Sqls.create(sqlStr);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs != null && rs.next()) {
                    return rs.getString(1);
                } else {
                    return null;
                }
            }
        });
        dao().execute(sql);
        return sql.getString();
    }

    /**
     * 根据自定义语句,不分页取数据
     *
     * @return
     */
    public T getObjectBySql(Sql sql, Condition cnd, Pager pager) {
        if (cnd != null) {
            sql.setCondition(cnd);
        }
        if (pager != null) {
            sql.setPager(pager);
        }
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.getEntity());
        dao().execute(sql);
        return sql.getObject(super.getEntityClass());

    }

    public <F> F getObjectBySql(Sql sql, Condition cnd, Pager pager, Class<F> clz) {
        if (cnd != null) {
            sql.setCondition(cnd);
        }
        if (pager != null) {
            sql.setPager(pager);
        }
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.dao().getEntity(clz));
        dao().execute(sql);
        return sql.getObject(clz);

    }

    /**
     * 根据自定义语句,不分页取数据
     *
     * @param sqlStr
     * @return
     */
    public List<T> getListBySql(String sqlStr, Condition cnd, Pager pager) {
        Sql sql = Sqls.create(sqlStr);
        if (cnd != null) {
            sql.setCondition(cnd);
        }
        if (pager != null) {
            sql.setPager(pager);
        }
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.getEntity());
        dao().execute(sql);
        return sql.getList(super.getEntityClass());

    }

    public <E> List<E> getListObjectBySql(String sqlStr, Class<E> clz) {
        return this.getListObjectBySql(sqlStr, null, null, clz);
    }

    public <E> List<E> getListObjectBySql(String sqlStr, Condition cnd, Class<E> clz) {
        return this.getListObjectBySql(sqlStr, cnd, null, clz);
    }

    /**
     * 根据自定义语句,不分页取数据
     *
     * @param sqlStr
     * @return
     */
    public <E> List<E> getListObjectBySql(String sqlStr, Condition cnd, Pager pager, Class<E> clz) {
        Sql sql = Sqls.create(sqlStr);
        if (cnd != null) {
            sql.setCondition(cnd);
        }
        if (pager != null) {
            sql.setPager(pager);
        }
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.dao().getEntity(clz));
        dao().execute(sql);
        return sql.getList(clz);
    }

    /**
     * 根据自定义语句,不分页取数据
     *
     * @return
     */
    public <E> List<E> getListObjectBySql(Sql sql, Class<E> clz) {
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.dao().getEntity(clz));
        dao().execute(sql);
        return sql.getList(clz);
    }

    /**
     * 根据自定义语句,不分页取数据
     *
     * @return
     */
    public List<T> getListBySql(Sql sql, Condition cnd, Pager pager) {
        if (cnd != null) {
            sql.setCondition(cnd);
        }
        if (pager != null) {
            sql.setPager(pager);
        }
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.getEntity());
        dao().execute(sql);
        return sql.getList(super.getEntityClass());

    }

    public List<T> getListBySql(Sql sql) {
        return this.getListBySql(sql, null, null);
    }

    public List<T> getListBySql(Sql sql, Condition cnd) {
        return this.getListBySql(sql, cnd, null);
    }

    public String conEntityExp(Object obj) {
        List<MappingField> mfList = dao().getEntity(obj.getClass()).getMappingFields();
        StringBuilder sb = new StringBuilder();
        sb.append(" 1=1 ");
        for (MappingField mf : mfList) {
            Object value = mf.getValue(obj);
            if (null == value) {
                continue;
            }
            if (Strings.isEmpty(value.toString())) {
                continue;
            }
            sb.append(" and ").append(mf.getColumnName()).append(" = ");
            if ((String.class == mf.getType()) || (Date.class == mf.getType())) {
                sb.append("'").append(value).append("'");
            } else {
                sb.append(value);
            }
        }
        return sb.toString();
    }

    /**
     * 根据配置文件SQL语句查询数据集合
     *
     * @param sqlsKey
     * @return
     * @throws SqlNotFoundException
     */
    public List<T> getListBySqlsFile(String sqlsKey, Map<String, Object> varsMap, Map<String, Object> paramsMap) throws SqlNotFoundException {
        Sql sql = super.dao().sqls().create(sqlsKey);
        sql.vars().putAll(varsMap);// 设置变量
        sql.params().putAll(paramsMap);// 设置参数
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.getEntity());
        dao().execute(sql);
        return sql.getList(super.getEntityClass());
    }

    /**
     * 根据配置文件SQL语句查询数据集合
     *
     * @param sqlsKey
     * @return
     * @throws SqlNotFoundException
     */
    public <E> List<E> getListObjectBySqlsFile(String sqlsKey, Map<String, Object> varsMap, Map<String, Object> paramsMap, Class<E> clz)
            throws SqlNotFoundException {
        Sql sql = super.dao().sqls().create(sqlsKey);
        sql.vars().putAll(varsMap);// 设置变量
        sql.params().putAll(paramsMap);// 设置参数
        sql.setCallback(Sqls.callback.entities());
        sql.setEntity(super.dao().getEntity(clz));
        dao().execute(sql);
        return sql.getList(clz);
    }

    /**
     * 根据传入的SQL语句,获取Map(key:第一个字段，value:第二个字段)
     *
     * @param sql
     * @return
     */
    protected Map<String, String> getHashMapBySqlStr(Sql sql) {
        final Map<String, String> sqlMap = new HashMap<String, String>();
        sql.setCallback(new SqlCallback() {
            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                while (rs.next()) {
                    sqlMap.put(rs.getString(1), rs.getString(2));
                }
                return sqlMap;
            }
        });
        dao().execute(sql);
        return sqlMap;
    }
}
