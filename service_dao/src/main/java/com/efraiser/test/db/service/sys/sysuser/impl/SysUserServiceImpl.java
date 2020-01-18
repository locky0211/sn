package com.efraiser.test.db.service.sys.sysuser.impl;

import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.SCks;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SysUserServiceImpl extends BaseServiceImpl<SysUser> implements SysUserService<SysUser> {

    private Logger logger = LoggerFactory.getLogger(SysUserServiceImpl.class);

    @Override
    public SysUser getSysUser(String userId, String userPass) {

        List<SysUser> sysUser2 = super.dao.query(SysUser.class, Cnd.where("USER_ID", "=", userId));

        SysUser sysUser = super.fetch(Cnd.where("USER_ID", "=", userId));

        try {
            sysUser.setdDate(SCks.decrypt(sysUser.getdDate()));
            sysUser.setdDip(SCks.decrypt(sysUser.getdDip()));
        } catch (Exception e) {
            logger.error("getSysUser() error! userId:[" + userId + "],userPass:[" + userPass + "]", e);
            return null;
        }

        return sysUser;
    }

    @Override
    public List<String> getUserRolesById(String userId) {

        String sqlStr = "select ROLE_ID FROM SYS_USER_ROLE WHERE USER_ID=@userId";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<String> getUserRoleNameById(String userId) {
        String sqlStr = "select JS_NAME FROM SYS_JSGL WHERE JS_ID IN (select ROLE_ID FROM SYS_USER_ROLE WHERE USER_ID=@userId)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<String> getUserQxById(String userId) {
        String sqlStr = "SELECT Q_ID FROM SYS_JSGL_QXGL WHERE J_ID IN (SELECT ROLE_ID FROM SYS_USER_ROLE,SYS_JSGL WHERE J_ID=JS_ID and USER_ID =@userId and JS_STATUS='1')";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public Map<String, String> getDepIdByUserId(String userId, String systemBrNo) {

        Map<String, String> returnMap = new HashMap<>();

        if (StrUtil.isNotNull(systemBrNo)) {

            String sql = "select dep_id from sys_user_dep where user_id = @userid";
            Sql sqls = Sqls.create(sql);
            sqls.params().set("userid", userId);
            sqls.setCallback(new SqlCallback() {

                @Override
                public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                    List<String> list = new ArrayList<String>();
                    while (rs.next())
                        list.add(rs.getString(1));
                    return list;
                }
            });
            dao().execute(sqls);
            List<String> depids = sqls.getList(String.class);
            if (depids.contains(systemBrNo)) {
                returnMap.put(SystemConstants.SystemBrNo, systemBrNo);
            } else {
                for (String depid : depids) {
                    List<SysBmgl> list = dao().query(SysBmgl.class, Cnd.where("bm_code", "=", depid).and("count_flag", "=", "1"), null);
                    if (list.size() > 0) {

                        returnMap.put(SystemConstants.brNo, depid);
                        returnMap.put(SystemConstants.SystemBrNo, "");

                        break;
                    }
                }
            }

        } else {
            String sql1 = "select dep_id from sys_user_dep where user_id = @userid";
            Sql sqls1 = Sqls.create(sql1);
            sqls1.params().set("userid", userId);
            sqls1.setCallback(new SqlCallback() {

                @Override
                public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                    List<String> list = new ArrayList<String>();
                    while (rs.next())
                        list.add(rs.getString(1));
                    return list;
                }
            });
            dao().execute(sqls1);
            List<String> depids = sqls1.getList(String.class);
            for (String depid : depids) {
                List<SysBmgl> list = dao().query(SysBmgl.class, Cnd.where("bm_code", "=", depid).and("count_flag", "=", "1"), null);
                if (list.size() > 0) {
                    returnMap.put(SystemConstants.brNo, depid);
                    returnMap.put(SystemConstants.SystemBrNo, "");
                    break;
                }
            }
        }

        return returnMap;
    }


    @Override
    public List findSysUserbyRole(String role){
        String sqlstr="SELECT * FROM SYS_USER A INNER JOIN SYS_USER_ROLE B ON A.USER_ID=B.USER_ID AND B.ROLE_ID=@role WHERE STATUS='1'";
        Sql sql=Sqls.create(sqlstr);
        sql.params().set("role", role);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> temp=new ArrayList<String>();
                while(rs.next()){
                    temp.add(rs.getString(1));
                }
                return temp;
            }
        });
        dao().execute(sql);
        return sql.getList(String.class);
    }
}
