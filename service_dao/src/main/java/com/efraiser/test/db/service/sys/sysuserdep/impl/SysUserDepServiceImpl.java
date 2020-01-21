package com.efraiser.test.db.service.sys.sysuserdep.impl;

import com.efraiser.test.db.model.sys.SysUserDep;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SysUserDepServiceImpl extends BaseServiceImpl<SysUserDep> implements SysUserDepService {


    @Override
    public void addOrupdateSysUserDep(String userId, List<String> userDeps) {
        // 删除用户角色表之前的用户角色
        this.clear(Cnd.where("USER_ID", "=", userId));
        List<SysUserDep> eds = new ArrayList<SysUserDep>();
        for (String ud : userDeps) {
            SysUserDep r = new SysUserDep();
            r.setUserId(userId);
            r.setDepId(ud);
            eds.add(r);
        }
        this.dao().fastInsert(eds);

    }

    @Override
    public List<String> getDepByUserId(String userId) {
        String sqlStr = "SELECT DEP_ID FROM SYS_USER_DEP WHERE USER_ID = '" + userId + "'";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("userId", userId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<SysUserDep> querybyUserId(String userId) {
        return query(Cnd.where("USER_ID", "=", userId), null);
    }
}
