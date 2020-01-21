package com.efraiser.test.db.service.sys.sysuserrole.impl;

import com.efraiser.test.db.model.sys.SysUserRole;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysuserrole.SysUserRoleService;
import org.nutz.dao.Cnd;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SysUserRoleServiceImpl  extends BaseServiceImpl<SysUserRole> implements SysUserRoleService {

    @Override
    public void addOrupdateSysUserRole(String userId, List<String> userOrgan)  {
        // 删除用户角色表之前的用户角色
        this.clear(Cnd.where("USER_ID", "=", userId));
        List<SysUserRole> roles = new ArrayList<SysUserRole>();
        for (String uo : userOrgan) {
            SysUserRole r = new SysUserRole();
            r.setUserId(userId);
            r.setRoleId(uo);
            roles.add(r);
        }
        this.dao().fastInsert(roles);
    }

    @Override
    public List<SysUserRole> queryByUserId(String userId) {
        return query(Cnd.where("USER_ID", "=", userId), null);
    }
}
