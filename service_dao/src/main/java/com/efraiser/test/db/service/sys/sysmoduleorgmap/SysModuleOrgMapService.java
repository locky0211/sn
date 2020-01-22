package com.efraiser.test.db.service.sys.sysmoduleorgmap;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysModuleOrgMap;
import com.efraiser.test.db.service.BaseService;

public interface SysModuleOrgMapService extends BaseService {


    /**
     * 功能描述：分页查询
     *
     * @param pageIndex
     * @param pageSize
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    GridQueryPageResult getModuleOrgMapList(int pageIndex, int pageSize);


    /**
     * 功能描述：根据ID删除
     *
     * @param id
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    void deleteSysModuleOrgMap(String id);


    /**
     * 功能描述：新增
     *
     * @param oldModule
     * @param oldOrg
     * @param newModule
     * @param newOrg
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    void insert(String oldModule, String oldOrg, String newModule, String newOrg);


    /**
     * 功能描述：根据ID查询
     *
     * @param id
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */

    SysModuleOrgMap getSysModuleOrgListById(String id);

    /**
     * 功能描述：更新
     *
     * @param sysModuleOrgMap
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    void updateSysModuleOrgMap(SysModuleOrgMap sysModuleOrgMap);


    /**
     * 功能描述：增加一个对象
     *
     * @param sysModuleOrgMap
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    void addOneSysModuleOrgMap(SysModuleOrgMap sysModuleOrgMap);


    /**
     *
     * 功能描述：根据原模块，原机构，映射模块查询对象
     * @author
     * @date 2017年7月14日
     * @param oldModule
     * @param oldOrg
     * @param newModule
     * @return
     * @modify log:
     */
    SysModuleOrgMap getNewOrg(String oldModule, String oldOrg, String newModule);
}

