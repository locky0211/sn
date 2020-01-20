package com.efraiser.test.db.service.rd.rdtableinfo;

import com.efraiser.test.db.model.rd.*;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface RdTableInfoService<T> extends BaseService {


    RdTableInfo getRdTableInfo(String tabCode, String versionNo);


    /**
     * 根据机构,报表类型,报表日期,获取机构需要上报的报表信息集合,以及已经上报的报表信息
     *
     * @param brNo
     * @param tabType
     * @param reportDate
     * @param flag       是否是补报数据(repay:补报 add:一般导入 else:展示全部信息)
     * @return
     * @throws Exception
     */
    List<RdTableImportHelper> getRdTableInfoListByBrNo(String brNo, String tabType, String reportDate, String flag) throws Exception;


    /**
     * 功能描述：仅适用于省局机构端，根据机构,报表类型,报表日期,获取机构需要上报的报表信息集合,以及已经上报的报表信息
     *
     * @param brNo
     * @param tabType
     * @param reportDate
     * @param flag
     * @return
     * @throws Exception
     * @author
     * @date 2018年7月30日
     * @modify log:
     */
    List<RdTableImportHelper> getRdTableInfoListByBrNo_ORGANPORT(String brNo, String tabType, String reportDate, String flag) throws Exception;

    RdTableBasicInfo saveOrUpdateTableInfo(com.efraiser.test.db.model.rd.RdTableInfo tableInfo, List<RdTableModel> tableModels, String model, List<RdTableModelPCT> tableModelPCTs, List<RdTableColumnContrast> rccList)
            throws Exception;

    void deleteTableInfo(String tableId) throws Exception;

    boolean isExistsTableVserionNo(String tabCode, String versionNo);

    List<RdTableInfo> getTableInfoList(String tabCode);

    int countByTabCode(String tabCode);


    /**
     * 获取机构下报表编号集合
     *
     * @param brNo       机构编号
     * @param reportDate 数据日期
     * @param tabType    数据类型(如果空:则获取全部)
     * @param include    是否包含(如:季度--包含月度)
     * @param b
     * @return
     */
    List<String> getTabCodeList(String brNo, String reportDate, String tabType, boolean include, boolean b);


    /**
     * 获取机构下报表编号集合(机构端使用)
     *
     * @param brNo       机构编号
     * @param reportDate 数据日期
     * @param tabType    数据类型(如果空:则获取全部)
     * @param include    是否包含(如:季度--包含月度)
     * @param b
     * @return
     */
    List<String> getTabCodeList_OrganPort(String brNo, String reportDate, String tabType, boolean include, boolean b);


    RdTableInfo getRdTableInfoByReportDate(String tabCode, String reportDate, String isRepay);


    RdTableInfo getRdTableInfoByReportDateOfSummary(String tabCode, String reportDate, String isRepay);
    /**
     * 根据报表代码获取最高版本的报表信息
     *
     * @param tabCode
     * @param reportDate
     * @return
     */
    List<RdTableInfo> getRdTableInfoToAutoJs(List<String> tabCodeList, boolean allVersion);


    /**
     * 根据tableId获取tablecode
     *
     * @param tableIds
     * @return
     */
    List<String> getTableCodesByTableIds(List<String> tableIds);


    /**
     * 获取报表代码_版本号与报表类型对照Map
     *
     * @return
     */
    Map<String, String> getTabCodeVersionTypeMap();


    /**
     * 获取机构下补报报表编号集合
     *
     * @param brNo       机构编号
     * @param reportDate 数据日期
     * @param tabType    数据类型(如果空:则获取全部)
     * @param include    是否包含(如:季度--包含月度)
     * @return
     */
    List<String> getTabCodeListRepay(String brNo, String reportDate, String tabType, boolean include, boolean isRepay);

    List<RdTableInfo> getRdTableInfoList(SysUser sysUser, String reportDate);

    Object getRdTableInfoListEx(SysUser sysUser, String reportDate);

    RdTableInfo getInfoById(String tableId);

    RdTableInfo getInfoByTabcode(String tabCode, String thisVersion);

    String getVersionInfo(String tabCode, String reportDate);

    Object getTableVersionNo(String tabCode, String reportDate);

    Object getRdTableInfoListByBrNoForYD(String brNo, String reportDate, String checkType);

    Object getRdTableInfoListByBrNoForYD_OrganPort(String brNo, String reportDate, String checkType);


    /**
     * 功能描述：南京追溯用
     *
     * @param brNo
     * @param reportDate
     * @param checkType
     * @return
     * @author
     * @date 2018年5月3日
     * @modify log:
     */
    Object getRdTableInfoListByBrNoForYD_NJ(String brNo, String reportDate, String checkType);


    RdTableInfo getTableInfoByTabCodeAndReportDate(String tabCodes, String reportDate);


    Object getRdtableInfoListByBmType(SysUser sysUser, String bmType, String bmCategory, String reportDate);

    Object getRdtableInfoListByBmTypeEx(SysUser sysUser, String bmType, String bmCategory, String reportDate);

    List<RdTableInfo> getAll();

    void delAll();

    void add(RdTableInfo item);


    /**
     * 获取机构下报表编号集合
     *
     * @param brNo       机构编号
     * @param reportDate 数据日期
     * @param tabType    数据类型(如果空:则获取全部)
     * @param include    是否包含(如:季度--包含月度)
     * @return
     */
    List<String> getTabCodeListCS(String brNo, String reportDate, String tabType, boolean include, boolean isRepay);

    /**
     * 获取机构下二批次报表编号集合
     *
     * @param brNo       机构编号
     * @param reportDate 数据日期
     * @param tabType    数据类型(如果空:则获取全部)
     * @param include    是否包含(如:季度--包含月度)
     * @return
     */
    List<String> getTabCodeListByBatchTwo(String brNo, String reportDate, String tabType, boolean include, boolean isRepay, List<String> tabCodeList);

    /**
     * 功能描述：上海省局添加非空判断
     */
    Boolean getTabCodeLisSj(String brNo, String reportDate, String tabType, boolean include, boolean isRepay);

    List<RdTableInfo> getListByTabcodeAndReportDate(String tabcode, String reportDate);

    /**
     * 功能描述：根据tableId,版本号,报表日期查询模版信息
     *
     * @param tableId
     * @param versionNo
     * @param reportDate
     * @return
     * @author
     * @date 2017年9月27日
     * @modify log:
     */
    RdTableInfo getTableInfoByTabIdAndVersionAndDate(String tableId, String versionNo, String reportDate);


    String getBrNo(String br);

    String getTabCode(String tabName);

    String getTabType(String tabcode);

    String getTableId(String tabCodes, String reportDate);
}
