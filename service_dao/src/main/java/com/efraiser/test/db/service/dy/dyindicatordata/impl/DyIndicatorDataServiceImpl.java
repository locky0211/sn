package com.efraiser.test.db.service.dy.dyindicatordata.impl;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.util.CommUtil;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.DyIndUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.rd.CalStr;
import com.efraiser.test.db.model.dy.DyIndBr;
import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsData;
import com.efraiser.test.db.model.dy.DyIndicatorsInfo;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyindbr.DyIndBrService;
import com.efraiser.test.db.service.dy.dyindbr.impl.DyIndBrServiceImpl;
import com.efraiser.test.db.service.dy.dyindicatordata.DyIndicatorDataService;
import com.efraiser.test.db.service.dy.dyindicatorsinfo.DyIndicatorsInfoService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.DyTableUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.*;

@Service
public class DyIndicatorDataServiceImpl extends BaseServiceImpl<DyIndicatorsData> implements DyIndicatorDataService {

    private Logger logger = (Logger) LoggerFactory.getLogger(DyIndicatorDataServiceImpl.class);
    private DecimalFormat df2 = new DecimalFormat("0.00");// double类型数值精度
    private DecimalFormat df4 = new DecimalFormat("0.0000");// double类型数值精度

    @Autowired
    private DyIndBrService dyIndBrService;
    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private SysBmglService sysBmglService;
    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyIndicatorsInfoService dyIndicatorsInfoService;
    @Autowired
    private DyTableModelPCTService dyTableModelPCTService;

    @Autowired
    private DyCheckUtil dyCheckUtil;

    @Override
    public String initIndDate(String brNo, DyIndicatorsBasicInfo bInfo, String sDate) {
        StringBuffer results = new StringBuffer("");
        try {

            List<DyIndicatorsBasicInfo> indListAll = new ArrayList<DyIndicatorsBasicInfo>();
            if (bInfo == null) {
                indListAll = dyIndicatorsInfoService.getIndListsForBrNo(brNo);
                results.append("&nbsp;&nbsp;&nbsp;机构需要计算指标数[" + indListAll.size() + "]<br>");
            } else {
                indListAll.add(bInfo);
            }
            // 指标信息
            DyIndicatorsInfo ii = null;
            String tabType = null;

            DyIndBrServiceImpl dyIndBrServiceImpl = (DyIndBrServiceImpl) dyIndBrService;
            for (DyIndicatorsBasicInfo bi : indListAll) {
                results.append("&nbsp;&nbsp;&nbsp;开始计算指标:[" + bi.getIndName() + "]<br>");
                String dataDate = "201112";
                if (StrUtil.isNotNull(sDate)) {
                    dataDate = DateUtil.format(DateUtil.addMonth(DateUtil.parse(sDate, "yyyyMM"), -1), "yyyyMM");
                } else {
                    if (dyIndBrServiceImpl.count(Cnd.where("orginId", "=", brNo).and("indId", "=", bi.getId())) == 0) {
                        // results.append("&nbsp;&nbsp;&nbsp;<font color='red'>指标初始化信息未维护,不能进行数据计算.运算结束..</font><br>");
                        // results.append("&nbsp;&nbsp;&nbsp;<font color='red'>指标初始化信息未维护,相关指标数据可能不准确..</font><br>");
                    } else {
                        // 获取机构指标初始化信息
                        DyIndBr indBr = dyIndBrServiceImpl.fetch(Cnd.where("orginId", "=", brNo).and("indId", "=", bi.getId()));
                        results.append("&nbsp;&nbsp;&nbsp;指标初始化信息<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + indBr.getvYear() + "----[1:" + indBr.getV1() + "],[2:" + indBr.getV2() + "],[3:"
                                + indBr.getV3() + "],[4:" + indBr.getV4() + "],[5:" + indBr.getV5() + "],[6:" + indBr.getV6() + "],[7:" + indBr.getV7() + "],[8:" + indBr.getV8() + "],[9:"
                                + indBr.getV9() + "],[10:" + indBr.getV10() + "],[11:" + indBr.getV11() + "],[12:" + indBr.getV12() + "],<br>");
                        dataDate = indBr.getvYear() + "12";
                    }
                }

                // 循环计算起始日期,至本月日期的数据
                while (Integer.valueOf(dataDate) < Integer.valueOf(DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM"))) {
                    // 开始处理某月的指标
                    dataDate = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dataDate, "yyyyMM"), 1), "yyyyMM");
                    if (!checkIndType(dataDate, bi.getIndType())) {
                        continue;
                    }
                    ii = dyIndicatorsInfoService.getDyIndicatorsInfoByBid(bi.getId(), dataDate);
                    if (ii == null) {
                        results.append("&nbsp;&nbsp;&nbsp;未能获取[" + dataDate + "]时间段内指标配置信息<br>");
                        continue;
                    }
                    results.append("&nbsp;&nbsp;&nbsp;>>>>>开始计算[" + dataDate + "]数据;");
                    // 插入空的指标运算结果
                    this.insertInitDyIndData(brNo, dataDate, bi);
                    // 获取机构日期需要上报的报表集合
                    Set<String> tabCodes = this.getTabCode(ii.getTabCode());

                    // 百分比单元格坐标集合
                    List<String> pctCellLists = new ArrayList<String>();
                    // 数据map
                    Map<String, String> dataMap = new HashMap<String, String>();
                    tabType = this.getTabType(bi.getIndType());
                    try {
                        dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, tabType, "0", dataMap, pctCellLists);
                    } catch (Exception e) {
                        logger.error("加载本期数据失败3", e);
                        results.append("&nbsp;&nbsp;&nbsp;<font color='red'>加载本期数据失败.</font><br><font color='red'>运算结束!!</font><br>");
                        continue;
                    }
                    // 上期
                    if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_2)) {
                        try {
                            dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, tabType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportData()", e);
                            results.append("&nbsp;&nbsp;&nbsp;<font color='red'>加载上期数据失败.</font><br><font color='red'>运算结束!!</font><br>");
                            continue;
                        }
                    }
                    // 年初
                    if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_3)) {
                        try {
                            dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, null, "2", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportData()", e);
                            results.append("&nbsp;&nbsp;&nbsp;<font color='red'>加载年初数据失败.</font><br><font color='red'>运算结束!!</font><br>");
                            continue;
                        }
                    }
                    // 去年同期
                    if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_4)) {
                        try {
                            dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, null, "3", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportData()", e);
                            results.append("&nbsp;&nbsp;&nbsp;<font color='red'>加载去年同期数据失败.</font><br><font color='red'>运算结束!!</font><br>");
                            continue;
                        }
                    }
                    // 同期补报
                    if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_5)) {
                        try {
                            dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, null, "4", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportData()", e);
                            results.append("&nbsp;&nbsp;&nbsp;<font color='red'>加载同期补报数据失败.</font><br><font color='red'>运算结束!!</font><br>");
                            continue;
                        }
                    }
                    DyCheckUtil.initCustomTarget(dataDate, dataMap);

                    String s = this.indCalculation(bi, ii, dataMap, pctCellLists, dataDate, brNo, tabType, bi.getIsPercent());
                    results.append(s);
                    if (s.contains("color='red'>")) {
                        continue;
                    }
                    // 保存数据

                }
            }

        } catch (Exception e) {
            logger.error("initIndDate() error! brNo:[" + brNo + "], sDate:[" + sDate + "], bInfo:[" + JSONObject.toJSONString(bInfo) + "]", e);
            results.append("&nbsp;&nbsp;&nbsp;<font color='red'>处理指标时异常!!</font><br>");
        }
        results.append("===处理完成==============<br><br>");
        return results.toString();
    }

    private String indCalculation(DyIndicatorsBasicInfo bi, DyIndicatorsInfo ii, Map<String, String> dataMap, List<String> pCellList, String dataDate, String brNo, String tabType, String isPercent)
            throws Exception {
        StringBuffer results = new StringBuffer();
        try {
            String relation = ii.getIndFormula();
            relation = CommUtil.trimStr(relation);
            String sqVal = this.replaceIndVal(brNo, bi.getId(), dataDate, "上期", tabType);
            String ncVal = this.replaceIndVal(brNo, bi.getId(), dataDate, "年初", tabType);
            String qntqVal = this.replaceIndVal(brNo, bi.getId(), dataDate, "去年同期", tabType);
            // 替换上期
            if (relation.contains("上期")) {
                if (StrUtil.isNull(sqVal)) {
                    results.append("&nbsp;&nbsp;&nbsp;<font color='red'>未取到[上期]值！</font>;");
                    // value = "9999999.99";
                } else {
                    relation = relation.replace("上期", sqVal);
                }
            }
            // 替换年初
            if (relation.contains("年初")) {
                if (StrUtil.isNull(ncVal)) {
                    results.append("&nbsp;&nbsp;&nbsp;<font color='red'>未取到[年初]值！</font>;");
                    // value = "9999999.99";
                } else {
                    relation = relation.replace("年初", ncVal);
                }
            }
            // 替换去年同期
            if (relation.contains("去年同期")) {
                if (StrUtil.isNull(qntqVal)) {
                    results.append("&nbsp;&nbsp;&nbsp;<font color='red'>未取到[去年同期]值！</font>;");
                    // value = "9999999.99";
                } else {
                    relation = relation.replace("去年同期", qntqVal);
                }
            }
            // 指标替换为值
            String valRelation = dyCheckUtil.returnValRelation(relation, dataMap, pCellList, null);
            // 处理特殊函数
            if (valRelation.contains("COUNTIF(")) {
                valRelation = DyCheckUtil.countIf(valRelation);
            }
            if (valRelation.contains("SUMIF")) {
                valRelation = DyCheckUtil.sumIf(valRelation);
            }
            if (valRelation.contains("OR")) {
                valRelation = DyCheckUtil.andOr(valRelation, "OR");
            }
            if (valRelation.contains("AND")) {
                valRelation = DyCheckUtil.andOr(valRelation, "AND");
            }
            if (valRelation.contains("#")) {
                results.append("&nbsp;&nbsp;&nbsp;<font color='red'>指标 " + valRelation.split("#")[1].substring(0, (valRelation.split("#")[1]).length() - 1) + " 未取到值！</font><br>");
                return results.toString();
            }
            String value = CalStr.calculate(CalStr.strCast(valRelation));
            results.append("&nbsp;&nbsp;&nbsp;计算结果:[" + value + "]<br>");
            if ("y".equals(isPercent)) {
                value = df4.format(Double.parseDouble(value));
            } else {
                value = df2.format(Double.parseDouble(value));
            }

            DyIndicatorsData rid = new DyIndicatorsData();
            rid.setBrNo(brNo);
            rid.setIndId(bi.getId());
            if ("y".equals(bi.getIsPercent())) {
                rid.setIndValue(Double.parseDouble(df2.format(Double.parseDouble(value) * 100)));
            } else {
                rid.setIndValue(Double.parseDouble(df2.format(Double.parseDouble(value) / 1)));
            }

            rid.setReportDate(dataDate);
            if (StrUtil.isNotNull(sqVal)) {
                // rid.setSqCon(Double.parseDouble("9999999.99"));
                // } else {
                double val = Double.parseDouble(value);
                if ("y".equals(bi.getIsPercent())) {
                    val = val * 100;
                } else {
                    val = val / 1;
                }
                rid.setSqCon(Double.parseDouble(df2.format(val - Double.parseDouble(sqVal))));

            }
            if ("50".equals(tabType) && DateUtil.isQuarterDate(DateUtil.parse(dataDate, "yyyyMM"))) {
                // 月度指标比上季
                String sjDate = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dataDate, "yyyyMM"), -3), "yyyyMM");
                String sjVal = this.replaceIndVal(brNo, bi.getId(), sjDate, "", null);
                if (StrUtil.isNotNull(sjVal)) {
                    double val = Double.parseDouble(value);
                    if ("y".equals(bi.getIsPercent())) {
                        val = val * 100;
                    } else {
                        val = val / 1;
                    }
                    rid.setSjCon(Double.parseDouble(df2.format(val - Double.parseDouble(sjVal))));

                }
                // END月度指标比上季
            }
            if (StrUtil.isNotNull(ncVal)) {
                // rid.setNcCon(Double.parseDouble("9999999.99"));
                // } else {
                double val = Double.parseDouble(value);
                if ("y".equals(bi.getIsPercent())) {
                    val = val * 100;
                } else {
                    val = val / 1;
                }
                rid.setNcCon(Double.parseDouble(df2.format(val - Double.parseDouble(ncVal))));
            }
            if (StrUtil.isNotNull(qntqVal)) {
                // rid.setQntqCon(Double.parseDouble("9999999.99"));
                // } else {
                double val = Double.parseDouble(value);
                if ("y".equals(bi.getIsPercent())) {
                    val = val * 100;
                } else {
                    val = val / 1;
                }
                rid.setQntqCon(Double.parseDouble(df2.format(val - Double.parseDouble(qntqVal))));
            }
            this.insertDyIndicatorsData(rid);

        } catch (Exception e) {
            e.printStackTrace();
            results.append("&nbsp;&nbsp;&nbsp;<font color='red'>运算指标时异常!!<br>" + e.getMessage() + "</font><br>");
        }
        return results.toString();
    }

    private void insertDyIndicatorsData(DyIndicatorsData rid) {
        this.clear(Cnd.where("BR_NO", "=", rid.getBrNo()).and("IND_ID", "=", rid.getIndId()).and("REPORT_DATE", "=", rid.getReportDate()));
        this.dao().fastInsert(rid);
    }

    private String replaceIndVal(String brNo, String indId, String dataDate, String flag, String tabType) {
        if ("上期".equals(flag)) {
            dataDate = DyTableUtil.getLastReportDate(dataDate, tabType);
        } else if ("年初".equals(flag)) {
            dataDate = DyTableUtil.getReportDateEndOfYear(dataDate);
        } else if ("去年同期".equals(flag)) {
            dataDate = DyTableUtil.getLastYearReportDate(dataDate);
        }
        DyIndicatorsData id = this.fetch(Cnd.where("BR_NO", "=", brNo).and("REPORT_DATE", "=", dataDate).and("IND_ID", "=", indId));
        if (id == null) {
            return "";
        } else {
            // 此处未考虑百分比*100
            return String.valueOf(id.getIndValue());
        }

    }

    private boolean checkIndType(String dataDate, String indType) {
        String rd = dataDate.substring(4, 6);
        if ((rd.equals("03") || rd.equals("06") || rd.equals("09") || rd.equals("12")) && indType.equals("2")) {
            return true;
        }

        if ((rd.equals("06") || rd.equals("12")) && indType.equals("3")) {
            return true;
        }

        if (rd.equals("12") && indType.equals("4")) {
            return true;
        }
        if (indType.equals("1")) {
            return true;
        }
        return false;

    }

    private String getTabType(String indType) {
        if (indType.equals("1")) {
            return "50";
        } else if (indType.equals("2")) {
            return "40";
        } else if (indType.equals("3")) {
            return "80";
        } else if (indType.equals("4")) {
            return "00";
        }
        return indType;
    }

    private Set<String> getTabCode(String tabCode) {
        List<String> tt = StrUtil.convertToList(tabCode, "@");
        Set<String> t = new HashSet<String>();
        for (String s : tt) {
            if (!t.contains(s)) {
                t.add(s);
            }
        }
        return t;
    }

    @Override
    public void insertIndDatas(List<DyIndicatorsData> indDatas) throws Exception {
        for (DyIndicatorsData rd : indDatas) {
            this.clear(Cnd.where("BR_NO", "=", rd.getBrNo()).and("REPORT_DATE", "=", rd.getReportDate()).and("IND_ID", "=", rd.getIndId()));
            this.dao().fastInsert(rd);
        }

    }

    private void insertInitDyIndData(String brNo, String dataDate, DyIndicatorsBasicInfo bi) {
        DyIndicatorsData rid = new DyIndicatorsData();
        rid.setBrNo(brNo);
        rid.setIndId(bi.getId());
        rid.setReportDate(dataDate);
        this.insertDyIndicatorsData(rid);
    }

    @Override
    public List<DyIndicatorsData> getDyIndDatas(String brNo, String dataDate, String indType, String userId) {
        // 昨天做到这里,需要左表连接查询数据,用以排序
        String sqCon = "I.SQ_CON";
        if (DateUtil.isQuarterDate(DateUtil.parse(dataDate, "yyyyMM")) && "2".equals(indType)) {
            sqCon = "decode(r.IND_TYPE,'1',i.sj_con,i.SQ_CON)";
        }
        String sqlStr = "SELECT R.ICON_CLS,R.P_ID,GET_BM_NAME(I.BR_NO) AS BR_NO,i.REPORT_DATE,REPLACE(REPLACE(r.IND_NAME,'_法人',''),'_分支','') AS IND_NAME,I.IND_ID,I.IND_VALUE, "
                + sqCon
                + " AS sq_con,I.SJ_CON,I.NC_CON,I.QNTQ_CON,R.IS_PERCENT FROM DY.DY_INDICATORS_DATA I,DY.DY_INDICATORS_BASIC_INFO R WHERE R.ID=I.IND_ID AND I.BR_NO=@brNo AND I.REPORT_DATE=@dataDate AND R.C_USER IN('admin','"
                + userId + "') AND R.IND_TYPE in(" + DyIndUtil.convertIndTypeToConStr(indType) + ") AND R.VALID_FLAG='y' ORDER BY R.SORT_NUM";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("brNo", brNo);
        sql.params().set("dataDate", dataDate);
        return super.getListBySql(sql);
    }

    @Override
    public List<DyIndicatorsData> getDyIndDatasForTree(List<String> pIds) {
        String sqlStr = " SELECT ID AS IND_ID, IND_NAME,P_ID,ICON_CLS FROM DY.DY_INDICATORS_BASIC_INFO WHERE ID IN (" + StrUtil.convertJoin(pIds, null) + ") ORDER BY SORT_NUM";
        return super.getListBySql(sqlStr, null, null);
    }

    @Override
    public List<SysBmgl> getBrNoListsByInd(DyIndicatorsBasicInfo bi, String userId) {
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("WITH temptab (BM_CODE,BM_NAME,P_ID,BM_CATEGORY,BM_TYPE,SORT_NUM,BM_AREA) AS  ");
        sqlStr.append("( SELECT BM_CODE,BM_NAME,P_ID,BM_CATEGORY,BM_TYPE,SORT_NUM,BM_AREA FROM SYS_BMGL bm   WHERE bm.BM_CATEGORY=@bmType ");
        sqlStr.append("   AND bm.bm_type IN (SELECT organ_type FROM DY.DY_INDICATORS_ORGANS WHERE IND_ID=@indId) ");
        sqlStr.append("   AND bm.bm_code IN (SELECT DEP_ID FROM SYS_USER_DEP WHERE USER_ID=@userId) ");
        sqlStr.append("   UNION ALL ");
        sqlStr.append("   SELECT SUPER.BM_CODE,SUPER.BM_NAME,SUPER.P_ID,SUPER.BM_CATEGORY,SUPER.BM_TYPE,SUPER.SORT_NUM,SUPER.BM_AREA  ");
        sqlStr.append("   FROM SYS_BMGL SUPER, temptab CHILD ");
        sqlStr.append("   WHERE SUPER.bm_code = CHILD.p_ID ");
        sqlStr.append(") SELECT DISTINCT * FROM temptab ORDER BY SORT_NUM ");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("bmType", bi.getIndBrType());
        sql.params().set("indId", bi.getId());
        sql.params().set("userId", userId);
        return super.getListObjectBySql(sql, SysBmgl.class);
    }

    @Override
    public void initIndDate(String brNo, String sDate) {

        try {

            List<DyIndicatorsBasicInfo> indListAll = new ArrayList<DyIndicatorsBasicInfo>();

            indListAll = dyIndicatorsInfoService.getIndListsForBrNo(brNo);

            DyIndBrServiceImpl dyIndBrServiceImpl = (DyIndBrServiceImpl) dyIndBrService;

            // 指标信息
            DyIndicatorsInfo ii = null;
            String tabType = null;
            for (DyIndicatorsBasicInfo bi : indListAll) {

                String dataDate = "201112";
                if (StrUtil.isNotNull(sDate)) {
                    dataDate = DateUtil.format(DateUtil.addMonth(DateUtil.parse(sDate, "yyyyMM"), -1), "yyyyMM");
                } else {
                    if (dyIndBrServiceImpl.count(Cnd.where("orginId", "=", brNo).and("indId", "=", bi.getId())) == 0) {
                        // results.append("&nbsp;&nbsp;&nbsp;<font color='red'>指标初始化信息未维护,不能进行数据计算.运算结束..</font><br>");
                        // results.append("&nbsp;&nbsp;&nbsp;<font color='red'>指标初始化信息未维护,相关指标数据可能不准确..</font><br>");
                    } else {
                        // 获取机构指标初始化信息
                        DyIndBr indBr = dyIndBrServiceImpl.fetch(Cnd.where("orginId", "=", brNo).and("indId", "=", bi.getId()));

                        dataDate = indBr.getvYear() + "12";
                    }
                }

                // 循环计算起始日期,至本月日期的数据

                // 开始处理某月的指标
                dataDate = DateUtil.format(DateUtil.addMonth(DateUtil.parse(dataDate, "yyyyMM"), 1), "yyyyMM");
                if (!checkIndType(dataDate, bi.getIndType())) {
                    continue;
                }
                ii = dyIndicatorsInfoService.getDyIndicatorsInfoByBid(bi.getId(), dataDate);
                if (ii == null) {

                    continue;
                }

                // 插入空的指标运算结果
                this.insertInitDyIndData(brNo, dataDate, bi);
                // 获取机构日期需要上报的报表集合
                Set<String> tabCodes = this.getTabCode(ii.getTabCode());

                // 百分比单元格坐标集合
                List<String> pctCellLists = new ArrayList<String>();
                // 数据map
                Map<String, String> dataMap = new HashMap<String, String>();
                tabType = this.getTabType(bi.getIndType());
                try {
                    dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, tabType, "0", dataMap, pctCellLists);
                } catch (Exception e) {
                    e.printStackTrace();
                    logger.error("加载本期数据失败3", e);

                    continue;
                }
                // 上期
                if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_2)) {
                    try {
                        dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, tabType, "1", dataMap, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();

                        continue;
                    }
                }
                // 年初
                if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_3)) {
                    try {
                        dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, null, "2", dataMap, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();

                        continue;
                    }
                }
                // 去年同期
                if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_4)) {
                    try {
                        dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, null, "3", dataMap, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();

                        continue;
                    }
                }
                // 同期补报
                if (ii.getIndFormula().contains(DyTableConstants.STR_CONN_5)) {
                    try {
                        dyReportInfoService.initDyReportData(tabCodes, brNo, dataDate, null, "4", dataMap, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();

                        continue;
                    }
                }
                DyCheckUtil.initCustomTarget(dataDate, dataMap);

                String s = this.indCalculation(bi, ii, dataMap, pctCellLists, dataDate, brNo, tabType, bi.getIsPercent());

                if (s.contains("color='red'>")) {
                    continue;
                }
                // 保存数据

            }


        } catch (Exception e) {
            logger.error("initIndDate() error!brNo:[" + brNo + "],sDate:[" + sDate + "]", e);

        }


    }

}
