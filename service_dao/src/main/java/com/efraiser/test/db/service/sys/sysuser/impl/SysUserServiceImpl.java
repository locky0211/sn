package com.efraiser.test.db.service.sys.sysuser.impl;

import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.SCks;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyUserReport;
import com.efraiser.test.db.model.sys.*;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.dy.dyuserreport.DyUserReportService;
import com.efraiser.test.db.service.dy.dyuserreport.impl.DyUserReportServiceImpl;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.db.service.sys.sysuserchecktime.SysUserCheckTimeService;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.db.service.sys.sysuserdep.impl.SysUserDepServiceImpl;
import com.efraiser.test.db.service.sys.sysuserrole.SysUserRoleService;
import com.efraiser.test.db.service.sys.sysuserrole.impl.SysUserRoleServiceImpl;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.nutz.lang.Lang;
import org.nutz.trans.Atom;
import org.nutz.trans.Trans;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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


    @Autowired
    private SysUserRoleService sysUserRoleService;

    @Autowired
    private SysUserDepService sysUserDepService;

    @Autowired
    private DyUserReportService dyUserReportService;

    @Autowired
    private SysUserCheckTimeService sysUserCheckTimeService;


    @Override
    public List<SysUser> getAll() {
        String sqlStr = "SELECT * FROM SYS_USER";
        List<SysUser> list = super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr = "DELETE FROM SYS_USER";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(SysUser item) {
        dao().insert(item);
    }

    @Override
    public boolean checkUser(String id, String column) {
        return super.count(Cnd.where(column, "=", id)) > 0;
    }

    @Override
    public Object getUserList(int pageIndex, int pageSize, String keyName, String userOrgan, String keyId, SysUser user) {
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria cri = Cnd.cri();
        if (StrUtil.isNotNull(keyName)) {
            keyName = "%" + keyName + "%";
            cri.where().and("USER_NAME", "like", keyName);
        }
        if (StrUtil.isNotNull(keyId)) {
            keyId = "%" + keyId + "%";
            cri.where().and("USER_ID", "like", keyId);
        }
        if (!"admin".equals(user.getUserId())) {
            cri.where().and("USER_ORGAN", "=", user.getUserOrgan());
        } else if (StrUtil.isNotNull(userOrgan)) {
            cri.where().and("USER_ORGAN", "=", userOrgan);
        }
        Integer total = this.count(cri);
        List<SysUser> plist = this.query(cri, pager);
        for (SysUser sysUser : plist) {
            sysUser.setUserOrgan(SysGgzdCache.getSysGgzdName("SYS_USER_ORGAN", sysUser.getUserOrgan()));
        }
        gqpr.setTotal(total);
        gqpr.setData(plist);
        return gqpr;
    }

    @Override
    public SysUser getSysUser(String userId) {
        SysUser sysUser = super.fetch(Cnd.where("USER_ID", "=", userId));

        try {
            sysUser.setdDate(SCks.decrypt(sysUser.getdDate()));
            sysUser.setdDip(SCks.decrypt(sysUser.getdDip()));
        } catch (Exception e) {
            logger.error("getSysUser() error! userId:[" + userId + "]", e);
        }

        return sysUser;
    }


    @Override
    public SysUser getSysUser(String userId, String userPass) {


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
    public Boolean checkPassword(String uId, String userPass) {
        return (Lang.md5(userPass).equals(super.fetch(uId).getUserPass()));
    }

    @Override
    public String getGenKey() {
        String sqlStr = "SELECT * FROM S_GEN_KEY";
        return super.singleString(sqlStr);

    }


    @Override
    public void insertGenKey(String key) throws Exception {
        super.dao().clear(SysGenKey.class);
        SysGenKey genKey = new SysGenKey();
        genKey.setKeyId(key);
        super.dao().insert(genKey);
    }


    @Override
    public void deleteSysUser(String userId) throws Exception {
        this.delete(userId);


        SysUserRoleServiceImpl sysUserRoleServiceImpl = (SysUserRoleServiceImpl) sysUserRoleService;
        SysUserDepServiceImpl sysUserDepServiceImpl = (SysUserDepServiceImpl) sysUserDepService;
        DyUserReportServiceImpl DyUserReportServiceImpl = (DyUserReportServiceImpl) dyUserReportService;

        Trans.exec(Connection.TRANSACTION_READ_COMMITTED, new Atom() {
            @Override
            public void run() {
                sysUserRoleServiceImpl.dao().clear(SysUserRole.class, Cnd.where("USER_ID", "=", userId));
                sysUserDepServiceImpl.dao().clear(SysUserDep.class, Cnd.where("USER_ID", "=", userId));
                //---- 20171229 删除用户管理报表配置信息  Start------
                DyUserReportServiceImpl.dao().clear(DyUserReport.class, Cnd.where("USER_ID", "=", userId));
                //---- 20171229 删除用户管理报表配置信息  End------
            }
        });

    }

    @Override
    public void updateSysUser(SysUser user, String userOrgan, String userRole) throws Exception {
        if (!"admin".equals(user.getUserId())) {
            user.setdDate(SCks.encrypt(user.getdDate()));
            user.setdDip(SCks.encrypt(user.getdDip()));
        } else {
            user.setdDate("77%77%77%77%72%76%77%72%75%76%");
            user.setdDip("73%");
        }

        Trans.exec(Connection.TRANSACTION_READ_COMMITTED, new Atom() {
            @Override
            public void run() {
                dao().updateIgnoreNull(user);
                sysUserRoleService.addOrupdateSysUserRole(user.getUserId(), StrUtil.convertToList(userRole, ","));
                if (StrUtil.isNotNull(userOrgan)) {
                    sysUserDepService.addOrupdateSysUserDep(user.getUserId(), StrUtil.convertToList(userOrgan, ","));
                }
            }
        });
    }

    @Override
    public void addSysUser(SysUser user, String userOrgan, String userRole) {
        user.setUserPass(Lang.md5(SystemConstants.DEFAULT_PASS));
        user.setStatus("1");
        if (!"admin".equals(user.getUserId())) {
            user.setdDate(SCks.encrypt(user.getdDate()));
            user.setdDip(SCks.encrypt(user.getdDip()));
        } else {
            user.setdDate("77%77%77%77%72%76%77%72%75%76%");
            user.setdDip("73%");
        }
        Trans.exec(Connection.TRANSACTION_READ_COMMITTED, new Atom() {
            @Override
            public void run() {

                dao().fastInsert(user);
                sysUserRoleService.addOrupdateSysUserRole(user.getUserId(), StrUtil.convertToList(userRole, ","));
                if (StrUtil.isNotNull(userOrgan)) {
                    sysUserDepService.addOrupdateSysUserDep(user.getUserId(), StrUtil.convertToList(userOrgan, ","));
                }
                sysUserCheckTimeService.insertUserTime(user.getUserId(), user.getUserName());
            }
        });
    }

    @Override
    public void reUserPass(String userId, String newPass) {
        SysUser user = new SysUser();
        user.setUserId(userId);
        user.setUserPass(Lang.md5(newPass.trim()));
        super.dao().updateIgnoreNull(user);
    }


    @Override
    public List<String> getBrnosList(String cUser) {
        String sqlstr = "SELECT BM_CODE FROM SYS_USER_DEP a LEFT JOIN SYS_BMGL b on a.DEP_ID=b.BM_CODE WHERE a.USER_ID='" + cUser + "' AND b.COUNT_FLAG='1'";
        Sql sql = Sqls.create(sqlstr);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public String findUserIdByName(String pp) {
        String sqlStr = "SELECT USER_ID FROM SAM.SYS_USER WHERE USER_NAME = '" + pp + "'";
        return super.singleString(sqlStr);
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
    public List findSysUserbyRole(String role) {
        String sqlstr = "SELECT * FROM SYS_USER A INNER JOIN SYS_USER_ROLE B ON A.USER_ID=B.USER_ID AND B.ROLE_ID=@role WHERE STATUS='1'";
        Sql sql = Sqls.create(sqlstr);
        sql.params().set("role", role);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> temp = new ArrayList<String>();
                while (rs.next()) {
                    temp.add(rs.getString(1));
                }
                return temp;
            }
        });
        dao().execute(sql);
        return sql.getList(String.class);
    }
}
