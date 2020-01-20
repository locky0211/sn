package com.efraiser.test.db.service.sys.sysjsgl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysJsQx;
import com.efraiser.test.db.model.sys.SysJsgl;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

/**
 * 角色管理
 *
 * @author exx
 */
public interface SysJsglService<T> extends BaseService {
    boolean checkJsId(String jsId);

    boolean checkJsName(String jsName);

    List<SysJsgl> getJsglListForYh();


    /**
     * 获取角色信息列表
     *
     * @param pageIndex
     * @param pageSize
     * @param key
     * @return
     */
    GridQueryPageResult getSysJsList(int pageIndex, int pageSize, String key);


    /**
     * 添加或跟新
     *
     * @param jsQxs   角色所对应的权限集合
     * @param sysJsgl 角色对象
     * @param flag    添加或者跟新标识
     * @return
     */
    void addOrUpdateJsgl(List<SysJsQx> jsQxs, SysJsgl sysJsgl, String flag);


    /**
     * 删除
     *
     * @return
     */
     void deleteJsgl(String jsId);

}
