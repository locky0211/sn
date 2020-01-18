package com.efraiser.test.db.service.sys.sysggzd.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysggzdzu.SysGgzdZuService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
public class SysGgzdServiceImpl extends BaseServiceImpl<SysGgzd> implements SysGgzdService<SysGgzd> {


    @Autowired
    private SysGgzdZuService sysGgzdZuService;

    @Override
    public boolean checkGgzd(String value, String column, String zuId) {
        return super.count(Cnd.wrap(column + "='" + value + "' AND G_Id = '" + zuId + "'")) > 0;
    }

    @Override
    public void deleteGgzd(String id) throws Exception {
        String sqlStr = "WITH report(ID,ZD_VALUE, PID) AS  (  SELECT ID,ZD_VALUE, PID  FROM  SYS_GGZD WHERE ID = @id  UNION ALL SELECT b.ID, b.ZD_VALUE, b.PID FROM report a, SYS_GGZD b WHERE b.PID = a.ZD_VALUE ) select ID from report";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("id", id);
        List<String> zdIdList = super.getListStringBySqlStr(sql);
        super.clear(Cnd.wrap(" ID in(" + StrUtil.convertJoin(zdIdList, null) + ")"));
    }

    @Override
    public List<SysGgzd> getGgzdListNotLower(String id, String gId, boolean expanded) {
        String sqlStr2 = "SELECT id,zd_value,zd_name,pid,G_id,sort_num,'true' as isLeaf,'" + expanded + "' as expanded FROM SYS_GGZD $condition";
        Criteria criteria = Cnd.cri();
        if (StrUtil.isNotNull(id)) {
            String sqlStr = "WITH report(ID,ZD_VALUE, PID) AS  (  SELECT ID,ZD_VALUE, PID  FROM  SYS_GGZD WHERE ID = @id  UNION ALL SELECT b.ID, b.ZD_VALUE, b.PID FROM report a, SYS_GGZD b WHERE b.PID = a.ZD_VALUE ) select ID from report";
            Sql sql = Sqls.create(sqlStr);
            sql.params().set("id", id);
            List<String> zdIdList = super.getListStringBySqlStr(sql);
            criteria.where().andNotIn("ID", zdIdList.toArray(new String[zdIdList.size()])).and("G_ID", "=", gId);
        } else {
            criteria.where().and("G_ID", "=", gId);
        }
        criteria.getOrderBy().asc("sort_num");
        return super.getListBySql(sqlStr2, criteria, null);
    }

    @Override
    public List<SysGgzd> getGgzdListByGroupId(String groupId, boolean expanded) {
        if (StrUtil.isNotNull(groupId)) {
            String sqlStr = "SELECT id,zd_value,zd_name,pid,G_id,sort_num,SYS_GGZD_IS_LEAF(zd_value,@gId) as isLeaf,'" + expanded
                    + "' as expanded FROM SYS_GGZD 	WHERE G_ID=@gId ORDER BY sort_num,zd_value";
            Sql sql2 = Sqls.create(sqlStr);
            sql2.params().set("gId", groupId);
            return super.getListBySql(sql2);
        }
        return null;
    }

    @Override
    public List<SysGgzd> getGgzdListByGroupIdForLazy(String zdValue, String groupId) {
        if (StrUtil.isNotNull(groupId)) {
            StringBuffer sqlStr = new StringBuffer(
                    "SELECT id,zd_value,zd_name,pid,G_id,sort_num,SYS_GGZD_IS_LEAF(zd_value,@gId) as isLeaf,'false' as expanded FROM SYS_GGZD 	WHERE G_ID=@gId  ");
            if (StrUtil.isNotNull(zdValue)) {
                sqlStr.append(" AND PID='" + zdValue + "'");
            } else {
                sqlStr.append(" AND (PID IS NULL OR PID='' or PID='undefined')");
            }
            sqlStr.append(" ORDER BY sort_num");
            Sql sql2 = Sqls.create(sqlStr.toString());
            sql2.params().set("gId", groupId);
            return super.getListBySql(sql2);
        }
        return null;
    }

    @Override
    public SysGgzd getGgzdByZdValue(String zdValue, String gId) {
        SysGgzd sg = this.fetch(Cnd.where("zdValue", "=", zdValue).and("gId", "=", gId));
        return sg == null ? new SysGgzd() : sg;
    }

    @Override
    public List<String> getGidList() {
        String sqlStr = "SELECT DISTINCT G_ID FROM SYS_GGZD";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public String getZdValuebyZdName(String zdName, String g_Id) {
        String zdValue = dao().query(SysGgzd.class, Cnd.wrap("ZD_NAME=" + "'" + zdName + "'" + " and G_ID=" + "'" + g_Id + "'"), null).get(0).getZdValue();
        return zdValue;
    }

    @Override
    public List<String> getBrnoType() {
        String sqlStr = "SELECT ZD_VALUE FROM SYS_GGZD WHERE G_ID='SYS_BM_TYPE'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public String getZdNameByZdValue(String zdValue) {
        String sqlStr = "SELECT ZD_NAME FROM SYS_GGZD WHERE ZD_VALUE=@zdValue AND G_ID='DJZHZCZB'";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("zdValue", zdValue);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getString(1);
                }
                return null;
            }
        });
        this.dao().execute(sql);
        return sql.getString();
    }

    @Override
    public List<String> getSysGgzdInCi(String infoType, String bGTableName) {
        String sqlStr = "SELECT ZD_VALUE FROM SYS_GGZD WHERE ZD_NAME LIKE '%" + infoType + "%' AND G_ID='CI_INFO_RECORD_NUM' AND ZD_VALUE NOT IN ('" + bGTableName + "')";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public String getZdNamebyZdValue(String zdValue, String g_Id) {
        String sqlStr = "SELECT ZD_NAME FROM SYS_GGZD WHERE ZD_VALUE='" + zdValue + "' AND G_ID='" + g_Id + "'";
        return super.singleString(sqlStr);
    }

    @Override
    public List<SysGgzd> getGgzdListByGid(String gId) {
        String sqlStr = "SELECT * FROM SYS_GGZD WHERE G_ID='" + gId + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }

    @Override
    public List<String> getZdValueByGid(String gId) {
        String sqlStr = "SELECT ZD_VALUE FROM SYS_GGZD WHERE G_ID='" + gId + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }


    @Override
    public List<String> getZdNameByGid(String gId) {
        String sqlStr = "SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='" + gId + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }


    @Override
    public List<String> getZdNameByGidAndValue(String gId, String value) {
        String sqlStr = "SELECT ZD_NAME FROM SYS_GGZD WHERE G_ID='" + gId + "' AND ZD_VALUE LIKE '%" + value + "%'";
        Sql sql = Sqls.create(sqlStr);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public void clearGgzdByIds(List<String> gIdList) {

        super.clear(Cnd.wrap(" G_ID in(" + StrUtil.convertJoin(gIdList, null) + ")"));
    }
}
