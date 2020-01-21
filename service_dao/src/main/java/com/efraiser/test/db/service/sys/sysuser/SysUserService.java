package com.efraiser.test.db.service.sys.sysuser;

import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface SysUserService<T> extends BaseService {


    List<SysUser> getAll();


    void delAll();

    void add(SysUser item);


    /**
     * 判断id是否存在
     *
     * @param id     id
     * @param column 列名
     * @return
     */
    boolean checkUser(String id, String column);


    /**
     * 分页获取用户数据
     *
     * @param pageIndex 第几页
     * @param pageSize  每页多少个
     * @param keyName   查询姓名
     * @param keyId     查询账号
     * @return
     */
    Object getUserList(int pageIndex, int pageSize, String keyName, String userOrgan, String keyId, SysUser user);


    /**
     * 根据ID和密码获得用户信息
     *
     * @param userId
     * @return
     */
    SysUser getSysUser(String userId);

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
     * 检测旧密码是否一致
     *
     * @param uId   用户id
     * @param uPass 用户密码
     * @return
     */
    Boolean checkPassword(String uId, String userPass);

    String getGenKey();

    void insertGenKey(String key) throws Exception;


    /**
     * 功能描述：删除用户
     *
     * @param userId
     * @throws Exception
     * @author
     * @date 2017年12月29日
     * @modify log:
     */
    void deleteSysUser(String userId) throws Exception;


    void updateSysUser(SysUser user, String userOrgan, String userRole) throws Exception;

    void addSysUser(SysUser user, String userOrgan, String userRole);


    /**
     * 修改用户密码
     *
     * @param userId  用户ID
     * @param newPass 新密码
     */
    void reUserPass(String userId, String newPass);

    List<String> getBrnosList(String cUser);

    String findUserIdByName(String pp);

    /**
     * @param userId
     * @return
     */
    Map<String, String> getDepIdByUserId(String userId, String systemBrNo);


    List findSysUserbyRole(String role);
}
