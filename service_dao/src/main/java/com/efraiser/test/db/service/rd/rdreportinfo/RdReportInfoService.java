package com.efraiser.test.db.service.rd.rdreportinfo;

import com.efraiser.test.db.model.rd.RdOperateRecord;
import com.efraiser.test.db.model.rd.RdReportData;
import com.efraiser.test.db.model.rd.RdReportInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface RdReportInfoService extends BaseService {


    /**
     * 获取报表数据Map集合:G0100_6_A:123.00
     *
     * @param tabCodes   需要加载的报表id集合
     * @param brNo       报表ID
     * @param reportDate 数据日期
     * @param flag       0:本期 1:上期 2:年初 3:去年同期 4:同期补报5:上月6：上季度7：上半年8：上年9:前三季度10：第四季度
     */
    void initRdReportData(Set<String> tabCodes, String brNo, String reportDate, String tabType, String flag,
                          final Map<String, String> dataMap, List<String> pctCellLists) throws Exception;

    RdReportInfo getReportInfo(String tableId, String brNo, String reportDate, String dataType);

    RdReportInfo getReportInfoSummary(String tableId, String brNo, String reportDate, String dataType);

    /**
     * 保存报表数据信息
     *
     * @param reportInfo
     * @param reportDatas
     * @throws Exception
     */
    void saveReportInfoData(RdReportInfo reportInfo, List<RdReportData> reportDatas, RdReportInfo reportInfo2,
                            List<RdReportData> reportDatas2) throws Exception;

    /**
     * 保存报表数据信息
     *
     * @param reportInfo
     * @param reportDatas
     * @throws Exception
     */
    void updateReportInfoData(RdReportInfo reportInfo, List<RdReportData> reportDatas) throws Exception;

    /**
     * 获取机构某个日期下某个类型的导入报表数
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @return
     */
    int getReportInfoCount(String brNo, String reportDate, String tabType, List<String> tabCodes);

    /**
     * 获取机构某个日期下某报表数
     *
     * @param brNo
     * @param reportDate
     * @param tableId
     * @return
     */
    int getReportInfoCount(String brNo, String reportDate, String tableId);

    void saveRdReportInfoForReplace(String reportId, List<RdReportData> rds) throws Exception;


    /**
     * 获取报表数据Map集合:G0100_6_A:123.00
     *
     * @param tabCodes   需要加载的报表id集合
     * @param brNo       报表ID
     * @param reportDate 数据日期
     * @param flag       0:本期 1:上期 2:年初 3:去年同期 4:同期补报5:上月6：上季度7：上半年8：上年9:前三季度10：第四季度
     */
    void initRdReportDataOfSummary(Set<String> tabCodes, String brNo, String reportDate, String tabType,
                                   String flag, final Map<String, String> dataMap, List<String> pctCellLists) throws Exception;

    int CheckParent(String brNo);

    int getReportInfoCount(String brNo, List<String> tabCodeList, String reportDate);

    void initRdReportDataForYD(Set<String> tabCodes, String brNo, String reportDate, String checkType,
                               String flag, final Map<String, String> dataMap, List<String> pctCellLists);

    /**
     * 功能描述：机构用，点击一条记录，查询本期值和上期值
     *
     * @param tabCode
     * @param brNo
     * @param reportDate
     * @param flag
     * @return
     * @author
     * @date 2017年7月7日
     * @modify log:
     */
    Map<String, String> initRdReportDataForYD_JG(final String tabCode, String brNo, String reportDate,
                                                 String flag);

    void initRdReportDataCS(Set<String> tabCodes, String brNo, String reportDate, String checkType, String flag,
                            final Map<String, String> dataMap, List<String> pctCellLists);

    void initRdReportDataForRdAndBf(List<String> tabCodes, String brNo, String reportDate,
                                    final Map<String, String> dataMap);

    /**
     * 保存报表数据信息
     *
     * @param reportInfo
     * @param reportDatas
     * @throws Exception
     */
    void saveReportInfoDatacs(RdReportInfo reportInfo, List<RdReportData> reportDatas, RdReportInfo reportInfo2,
                              List<RdReportData> reportDatas2, RdOperateRecord opRecord) throws Exception;

    /**
     * 功能描述： 获取报表数据Map集合 (DY和RD校验)
     *
     * @param tabCodes
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param flag         0:本期 1:上期 2:年初 3:去年同期
     * @param dataMap
     * @param pctCellLists
     * @throws Exception
     * @author
     * @date 2017年7月27日
     * @modify log:
     */
    void initRdReportData_dy_rd(Set<String> tabCodes, String brNo, String reportDate, String tabType,
                                String flag, Map<String, String> dataMap, List<String> pctCellLists) throws Exception;

    /**
     * 功能描述：上海省局数据初始化
     *
     * @param tabCodes       报表编号集合
     * @param brNo           机构
     * @param reportDate     报表日期
     * @param flag           校验频度
     * @param dataMap        数据map
     * @param pctCellLists   百分比单元格
     * @param dataMapKeyList 数据Map的主键
     * @author
     * @date 2017年10月24日
     * @modify log:
     */
    void initRdLastReportDataShangHai(Set<String> tabCodes, String brNo, String reportDate, String flag,
                                      String newVersion, Map<String, String> dataMap, List<String> pctCellLists,
                                      List<String> dataMapKeyList);

    /**
     * 功能描述：上海省局数据初始化
     *
     * @param tabCodes       报表编号集合
     * @param brNo           机构
     * @param reportDate     报表日期
     * @param flag           校验频度
     * @param dataMap        数据map
     * @param pctCellLists   百分比单元格
     * @param dataMapKeyList 数据Map的主键
     * @author
     * @date 2017年10月24日
     * @modify log:
     */
    void initRdReportDataShangHai(Set<String> tabCodes, String brNo, String reportDate, String flag,
                                  Map<String, String> dataMap, List<String> pctCellLists, List<String> dataMapKeyList);

    /**
     * 功能描述：
     *
     * @param nowVersion
     * @param tabCode
     * @param brNo
     * @param reportDate
     * @param flag
     * @param dataMap
     * @param pctCellLists
     * @param dataMapKeyList
     * @author
     * @date 2018年3月2日
     * @modify log:
     */
    void initRdReportDataForAutoCaculateWaveFormula(String nowVersion, String tabCode, String brNo,
                                                    String reportDate, String flag, Map<String, String> dataMap, List<String> pctCellLists,
                                                    List<String> dataMapKeyList);

    /**
     * 功能描述：获取指定报表的单元格坐标列表（仅包含数字格式）
     *
     * @param brNo
     * @param tabCode
     * @param reportDate
     * @param flag
     * @return
     * @author
     * @date 2017年10月27日
     * @modify log:
     */
    List<String> getDateMapKeyList(String brNo, String tabCode, String reportDate, final String flag);
}
