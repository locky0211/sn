package com.efraiser.test.db.service.sys.sysuserloginlog;

import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;



public interface SysUserLoginLogService extends BaseService {



    void saveUserLoginLog(String loginInfo, SysUser user, String loginIp);
}
