package com.efraiser.test.db.service.sysuser;

import com.efraiser.test.db.model.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface SysUserService<T> extends BaseService {


    /**
     * 根据ID和密码获得用户信息
     *
     * @param userId
     * @param userPass
     * @return
     */
    SysUser getSysUser(String userId, String userPass);


    /**
     * 返回用角色ID的集合
     *
     * @param userId
     * @return
     */
    List<String> getUserRolesById(String userId);


    /**
     * 返回用户角色name的集合
     *
     * @param userId
     * @return
     */
    List<String> getUserRoleNameById(String userId);


    /**
     * 根据用户ID获取用户角色(状态启用的)的相关权限集合
     *
     * @param userId 用户ID
     * @return
     */
    List<String> getUserQxById(String userId);

    /**
     *
     * @param userId
     * @return
     */
    Map<String,String> getDepIdByUserId(String userId, String systemBrNo);



     List findSysUserbyRole(String role);
}
