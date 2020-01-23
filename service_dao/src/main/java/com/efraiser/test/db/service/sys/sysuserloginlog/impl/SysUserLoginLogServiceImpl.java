package com.efraiser.test.db.service.sys.sysuserloginlog.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.model.sys.SysUserLoginLog;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysuserloginlog.SysUserLoginLogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class SysUserLoginLogServiceImpl extends BaseServiceImpl<SysUserLoginLog> implements SysUserLoginLogService {

    private Logger logger = LoggerFactory.getLogger(SysUserLoginLogServiceImpl.class);

    @Override
    public void saveUserLoginLog(String loginInfo, SysUser user, String loginIp) {


        try {
            SysUserLoginLog ull = new SysUserLoginLog();
            ull.setUserId(user.getUserId());
            ull.setUserName(user.getUserName());
            ull.setLoginDate(DateUtil.getNow(DateUtil.FORMAT_DATE));
            ull.setLoginTime(DateUtil.getNow(DateUtil.FORMAT_TIME));
            ull.setLoginIp(loginIp);
            ull.setLoginInfo(loginInfo);
            getDao().fastInsert(ull);
        } catch (Exception e) {
            logger.error("saveUserLoginLog() error!", e);
        }
    }
}
