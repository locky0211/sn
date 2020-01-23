package com.efraiser.test.db.service.dy.dytableinfo;

import com.efraiser.test.db.model.dy.*;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface DyTableInfoService extends BaseService {

    DyTableInfo getDyTableInfo(String tabCode, String versionNo);


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

    List<DyTableImportHelper> getDyTableInfoListByBrNoWj(String brNo, String tabType, String reportDate, String flag, String department) throws Exception;


    List<DyTableImportHelper> getDyTableInfoListByBrNo(String brNo, String tabType, String reportDate, String flag) throws Exception;


    DyTableBasicInfo saveOrUpdateTableInfo(DyTableInfo tableInfo, List<DyTableModel> tableModels, String model, List<DyTableModelPCT> tableModelPCTs, List<DyTableColumnContrast> rccList)
            throws Exception;

    void deleteTableInfo(String tableId) throws Exception;

    boolean isExistsTableVserionNo(String tabCode, String versionNo);

    List<DyTableInfo> getTableInfoListWj(String tabCode);

    List<DyTableInfo> getTableInfoList(String tabCode);

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
    List<String> getTabCodeListWj(String brNo, String reportDate, String tabType, boolean include, boolean b);

    List<String> getTabCodeList(String brNo, String reportDate, String tabType, boolean include, boolean b);

    DyTableInfo getDyTableInfoByReportDate(String tabCode, String reportDate, String isRepay);

    DyTableInfo getDyTableInfoByReportDateOfSummary(String tabCode, String reportDate, String isRepay);


    /**
     * 根据报表代码获取最高版本的报表信息
     *
     * @param tabCodeList
     * @param allVersion
     * @return
     */
    List<DyTableInfo> getDyTableInfoToAutoJs(List<String> tabCodeList, boolean allVersion);


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

    List<DyTableInfo> getDyTableInfoList(SysUser sysUser, String reportDate);

    DyTableInfo getInfoById(String tableId);

    DyTableInfo getInfoByTabcode(String tabCode, String thisVersion);

    String getVersionInfo(String tabCode, String reportDate);

    Object getTableVersionNo(String tabCode, String reportDate);

    Object getDyTableInfoListByBrNoForYD(String brNo, String reportDate, String checkType);

    DyTableInfo getTableInfoByTabCodeAndReportDate(String tabCodes, String reportDate);

    Object getDytableInfoListByBmType(SysUser sysUser, String bmType, String bmCategory, String reportDate);

    List<DyTableInfo> getAll();

    void delAll();

    void add(DyTableInfo item);


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
     * 获取机构下报表编号集合
     *
     * @param brNo       机构编号
     * @param reportDate 数据日期
     * @param tabType    数据类型(如果空:则获取全部)
     * @param include    是否包含(如:季度--包含月度)
     * @return
     */
    List<String> getTabCodeListCSSZ(String brNo, String reportDate, String tabType, boolean include, boolean isRepay);

    DyTableInfo getRdTableInfoByReportDate(String tabCode, String reportDate, String isRepay);

    List<String> getTabCodeListBf(String brNo, String reportDate, String tabType, boolean include, boolean isRepay);


    DyTableInfo getByTabcodeAndVersionNo(String tabCode,String versionNo);
}


