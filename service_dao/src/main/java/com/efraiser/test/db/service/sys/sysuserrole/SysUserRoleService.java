package com.efraiser.test.db.service.sys.sysuserrole;

import com.efraiser.test.db.model.sys.SysUserRole;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysUserRoleService extends BaseService {


    void addOrupdateSysUserRole(String userId, List<String> userOrgan);


    List<SysUserRole> queryByUserId(String userId);
}
