package com.efraiser.test.db.service.sysuserloginlog;

import com.efraiser.test.db.model.SysUser;
import com.efraiser.test.db.service.BaseService;



public interface SysUserLoginLogService<SysUserLoginLog> extends BaseService {



    void saveUserLoginLog(String loginInfo, SysUser user, String loginIp);
}
