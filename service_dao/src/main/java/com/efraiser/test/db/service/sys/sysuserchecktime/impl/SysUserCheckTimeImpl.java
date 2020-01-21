package com.efraiser.test.db.service.sys.sysuserchecktime.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.SCks;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysUserCheckTime;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysuserchecktime.SysUserCheckTimeService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SysUserCheckTimeImpl  extends BaseServiceImpl<SysUserCheckTime> implements SysUserCheckTimeService {


    @Override
    public void insertUserTime(String userId,String userName) {
        SysUserCheckTime sysUserCheckTime = new SysUserCheckTime();
        sysUserCheckTime.setUserId(userId);
        sysUserCheckTime.setUserName(userName);
        this.dao().insert(sysUserCheckTime);
    }

    @Override
    public void updateUserTime(SysUserCheckTime sysUserCheckTime) {
        this.dao().update(sysUserCheckTime);
    }


    @Override
    public GridQueryPageResult getUserCheckTimeList(int pageIndex, int pageSize, String keyName, String keyId) {
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria criteria = Cnd.cri();
        if(StrUtil.isNotNull(keyId)) {
            criteria.where().and("USER_ID", "=", keyId);
        }
        if (StrUtil.isNotNull(keyName)) {
            keyName = "%" + keyName + "%";
            criteria.where().and("USER_NAME", "like", keyName);
        }
        Integer total = this.count(criteria);
        List<SysUserCheckTime> plist = this.dao().query(SysUserCheckTime.class, criteria,pager);
        List<SysUserCheckTime> sysUserCheckTimes = new ArrayList<>();
        for(SysUserCheckTime sysUserCheckTime:plist) {
            if(sysUserCheckTime.getBeforeCheckTime() != null) {
                sysUserCheckTime.setBeforeCheckTime(SCks.decrypt(sysUserCheckTime.getBeforeCheckTime()));
            }
            sysUserCheckTimes.add(sysUserCheckTime);
        }
        gqpr.setTotal(total);
        gqpr.setData(sysUserCheckTimes);
        return gqpr;
    }
}
