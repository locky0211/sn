package com.efraiser.test.db.service.sys.sysorgsummer;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.sys.SysOrgSummer;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysOrgSummerService extends BaseService {

    /**
     * 功能描述：分页查询
     *
     * @param sumCode
     * @param pageIndex
     * @param pageSize
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    GridQueryPageResult getOrgSummerList(String sumCode, int pageIndex, int pageSize);


    /**
     * 功能描述：根据Id删除
     *
     * @param id
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    void deleteSysOrgSummer(String id);


    /**
     * 功能描述：查询所有汇总机构
     *
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    List<SysOrgSummer> findAllSumOrg();


    /**
     * 功能描述：根据ID查询一条记录
     *
     * @param id
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    SysOrgSummer getSysOrgSummerById(String id);


    /**
     * 功能描述：判断是否存在
     *
     * @param sumCode
     * @param subCode
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    int isSysOrgSummerExist(String sumCode, String subCode);


    /**
     * 功能描述：新增
     *
     * @param sumCode
     * @param subCode
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    void insert(String sumCode, String subCode);


    /**
     * 功能描述：判断是否是父节点
     *
     * @param brNo
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    int CheckParent(String brNo);


    /**
     * 功能描述：根据当前机构找子机构，若找不到则返回当前机构
     *
     * @param brNo
     * @return
     * @author
     * @date 2017年9月12日
     * @modify log:
     */
    String getbrNos(final String brNo);


    /**
     * 功能描述：获取所有汇总机构
     *
     * @return
     * @author
     * @date 2018年6月4日
     * @modify log:
     */
    List<String> getHzbrNos();


    List<String> getHzjg(String gid);

    List<SysOrgSummer> getBySumCode(String sumCode);
}
