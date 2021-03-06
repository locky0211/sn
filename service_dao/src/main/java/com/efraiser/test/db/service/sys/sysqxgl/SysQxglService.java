package com.efraiser.test.db.service.sys.sysqxgl;

import com.efraiser.test.db.model.sys.SysQxgl;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysQxglService extends BaseService {


    boolean checkQxGl(String qxId, String column);


    void deleteQxgl(String qxId) throws Exception;


    List<SysQxgl> getSysQxListForPid(String qxId);


    /**
     * 根据用户id返回权限对象集合
     * @param userId
     * @return
     */
     List<SysQxgl> getQxByUserId(String userId);
}
