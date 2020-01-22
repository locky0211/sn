package com.efraiser.test.db.service.sys.sysmanual;

import com.efraiser.test.db.model.sys.SysManual;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysManualService extends BaseService {


    /**
     * 功能描述：根据ID删除
     *
     * @param manualId
     * @author
     * @date 2017年9月4日
     * @modify log:
     */
    void deleteSysManual(String manualId);


    /**
     * 功能描述：判断Id是否存在
     *
     * @param manualId
     * @param column
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    boolean checkManual(String manualId, String column);


    /**
     * 功能描述：更新状态
     *
     * @param manualId
     * @param status
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    SysManual updateManualStatus(String manualId, String status);


    /**
     * 功能描述：根据ID查询
     *
     * @param manualId
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    SysManual getManualById(String manualId);


    /**
     * 功能描述：获取状态为1(启用)的对象集合
     *
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    List<SysManual> getManualListByStatus();


    /**
     * 功能描述：根据Id查询URL
     *
     * @param manualId
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    SysManual getManualUrl(String manualId);


    /**
     * 功能描述：查询pId不为空的list
     *
     * @return
     * @author
     * @date 2017年9月6日
     * @modify log:
     */
    List<SysManual> getSysManualList();
}
