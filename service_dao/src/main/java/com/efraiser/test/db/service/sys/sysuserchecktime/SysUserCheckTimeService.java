package com.efraiser.test.db.service.sys.sysuserchecktime;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysUserCheckTime;
import com.efraiser.test.db.service.BaseService;

public interface SysUserCheckTimeService extends BaseService {


    void insertUserTime(String userId,String userName);


    void updateUserTime(SysUserCheckTime sysUserCheckTime);


    GridQueryPageResult getUserCheckTimeList(int pageIndex, int pageSize, String keyName, String keyId);
}
