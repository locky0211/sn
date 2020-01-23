package com.efraiser.test.db.service.sys.sysuserdepartment;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysUserDepartment;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysUserDepartmentService extends BaseService {


    /**
     * 功能描述：通过userId查找用户所属部门
     *
     * @param userId
     * @return
     * @author
     * @date 2017年7月13日
     * @modify log:
     */
    List<String> getUserRolesById(String userId);

    /**
     * 功能描述：分页查询
     *
     * @param userId
     * @param userName
     * @param pageIndex
     * @param pageSize
     * @return
     * @author
     * @date 2017年8月10日
     * @modify log:
     */
    GridQueryPageResult getUserDepartmentInfoList(String userId, String userName, int pageIndex, int pageSize);


    /**
     * 功能描述：获取部门列表
     *
     * @return
     * @author
     * @date 2018年3月20日
     * @modify log:
     */
    List<SysUserDepartment> getAllDepartment();


    List<SysUserDepartment>  getByUserId(String userId);
}
