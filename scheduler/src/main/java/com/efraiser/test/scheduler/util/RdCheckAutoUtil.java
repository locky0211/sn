package com.efraiser.test.scheduler.util;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.efraiser.test.common.constant.RdTableConstants;
import com.efraiser.test.common.util.CommUtil;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.nutz.FormulaEncryptThead;
import com.efraiser.test.common.util.rd.CalStr;
import com.efraiser.test.db.model.rd.*;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.rd.rdcheckformula.RdCheckFormulaService;
import com.efraiser.test.db.service.rd.rdcheckresults.RdCheckResultsService;
import com.efraiser.test.db.service.rd.rdcheckresults.impl.RdCheckResultsServiceImpl;
import com.efraiser.test.db.service.rd.rdcheckresultswave.RdCheckResultsWaveService;
import com.efraiser.test.db.service.rd.rdcheckrormulawave.RdCheckFormulaWaveService;
import com.efraiser.test.db.service.rd.rdindicatorsdata.impl.RdIndicatorsDataServiceImpl;
import com.efraiser.test.db.service.rd.rdindicatorsinfo.RdIndicatorsInfoService;
import com.efraiser.test.db.service.rd.rdreportinfo.RdReportInfoService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysorgsummer.SysOrgSummerService;
import com.efraiser.test.db.service.sys.sysorgsummer.impl.SysOrgSummerServiceImpl;
import com.efraiser.test.db.util.RdCheckUtil;
import com.efraiser.test.db.util.RdTableUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.entity.Record;
import org.nutz.dao.sql.Sql;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * @author
 * @ProjectName: [com.efraiser.sam]
 * @Package: [com.efraiser.rd.util]
 * @ClassName: [RdCheckAutoUtil]
 * 类描述：上海省局自动校验类
 * @date 2017年10月12日
 * @modify log:
 * toReportCheckAuto普通自动校验
 * toReportCheckYdAuto异动自动校验
 * toReportCheckYdAutoNew异动自动校验(新)
 * toRdIndCheckAuto指标自动计算
 */
public class RdCheckAutoUtil {
    final static Logger logger = LoggerFactory.getLogger(RdCheckAutoUtil.class);

    private static DecimalFormat df2 = new DecimalFormat("0.00");// double类型数值精度
    private static DecimalFormat df4 = new DecimalFormat("0.0000");// double类型数值精度

    /**
     * 功能描述：上海省局自动校验
     *
     * @param reportDate
     * @param tabType
     * @return
     * @author
     * @date 2017年10月9日
     * @modify log:
     */
    public static void toReportCheckAuto(String reportDate, String tabType) throws Exception {

        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");
        SysOrgSummerService sysOrgSummerDao = (SysOrgSummerService) SpringContextUtil.getBean("sysOrgSummerServiceImpl");

        final String fReportDate = reportDate.replace("-", "").substring(0, 6);
        final String fTabType = tabType;
        String fr = sysGgzdDao.getZdNamebyZdValue("上海法人汇总", "SHHZJG");
        String fz = sysGgzdDao.getZdNamebyZdValue("上海分支汇总", "SHHZJG");
        String brNofr = sysOrgSummerDao.getbrNos(fr);//法人汇总
        String brNofz = sysOrgSummerDao.getbrNos(fz);//分支汇总
        String brNo = brNofr + ',' + brNofz + ',' + fr + ',' + fz;
        int maxThreadNum = Integer.parseInt(sysGgzdDao.getGgzdByZdValue("MAX", "1104_MAX_THREAD_NUM").getZdName());
        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(maxThreadNum);
        String[] brNos = brNo.split(",");
        for (final String bn : brNos) {
            fixedThreadPool.execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        doReportCheck(bn, fReportDate, fTabType, "0", false, "admin", "admin", "1");
                    } catch (Exception e) {
                        logger.error("机构: " + bn + "校验出错!!!", e);
                    }
                }
            });
        }
        fixedThreadPool.shutdown();
        while (true) {
            if (fixedThreadPool.isTerminated()) {
                break;
            }
            Thread.sleep(200);
        }
    }

    /**
     * 功能描述：报表校验
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkArea
     * @param isRepay
     * @param cUser
     * @param cUserName
     * @param formulaType
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    public static void doReportCheck(String brNo, String reportDate, String tabType, String checkArea, boolean isRepay, String cUser, String cUserName, String formulaType) throws Exception {
        SysBmgl sysBmgl = SysBmglCache.getBmglInfo(brNo);
        if (sysBmgl == null) {
            return;
        }
        String area = sysBmgl.getBmArea();//校验公式适用区域
        String brnoType = sysBmgl.getBmType();//机构所属类型


        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");

        // 获取需要校验的所有表编号集合
        List<String> rTabCodesAll = rdTableInfoDao.getTabCodeList(brNo, reportDate, tabType, true, isRepay);

        // 获取需要校验的季度表编号集合
        List<String> rTabCodes = rdTableInfoDao.getTabCodeList(brNo, reportDate, tabType, false, isRepay);
        if (rTabCodesAll == null || rTabCodes == null || rTabCodesAll.size() == 0 || rTabCodes.size() == 0) {
            return;
        }
        // 本期
        Set<String> tabCodes = new HashSet<String>();
        // 上期
        Set<String> lastTabCodes = new HashSet<String>();
        // 年初
        Set<String> ncTabCodes = new HashSet<String>();
        // 去年同期
        Set<String> qntqTabCodes = new HashSet<String>();
        // 同期补报
        Set<String> tqbbTabCodes = new HashSet<String>();
        // 需要校验的公式集合
        List<RdCheckFormula> checkFormulas = new ArrayList<RdCheckFormula>();
        String currentFormualsFlag = null;
        initCheckFormulas(rTabCodesAll, rTabCodes, reportDate, tabCodes, lastTabCodes, ncTabCodes, qntqTabCodes, tqbbTabCodes, checkFormulas, currentFormualsFlag, cUser, formulaType, checkArea, area, brnoType);
        // 百分比单元格坐标集合
        List<String> pctCellLists = new ArrayList<String>();

        Map<String, String> dataMap = new HashMap<String, String>();

        RdReportInfoService rdReportInfoDao = (RdReportInfoService) SpringContextUtil.getBean("rdReportInfoServiceImpl");
        // 本期
        if (tabCodes.size() > 0) {
            rdReportInfoDao.initRdReportData(tabCodes, brNo, reportDate, tabType, "0", dataMap, pctCellLists);
        }
        if (lastTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportData(lastTabCodes, brNo, reportDate, tabType, "1", dataMap, pctCellLists);
        }
        if (ncTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportData(ncTabCodes, brNo, reportDate, tabType, "2", dataMap, pctCellLists);
        }
        if (qntqTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportData(qntqTabCodes, brNo, reportDate, tabType, "3", dataMap, pctCellLists);
        }
        if (tqbbTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportData(tqbbTabCodes, brNo, reportDate, tabType, "4", dataMap, pctCellLists);
        }
        RdCheckUtil.initCustomTarget(reportDate, dataMap);

        List<RdCheckResults> checkResults = null;
        checkResults = getCheckResult(brNo, reportDate, tabType, checkFormulas, dataMap, pctCellLists);

        RdCheckResultsService rdCheckResultsDao = (RdCheckResultsService) SpringContextUtil.getBean("rdCheckResultsServiceImpl");
        rdCheckResultsDao.insertCheckResultsSh(brNo, reportDate, tabType, cUser, checkResults, formulaType, checkArea);

    }

    /**
     * 根据校验公式校验数据，返回校验结果
     *
     * @param relationList 校验公式
     * @param dataMap      指标数据
     * @param pCellList    百分比单元格
     * @return
     */
    private static List<RdCheckResults> getCheckResult(String brNo, String reportDate, String tabType, List<RdCheckFormula> relationList, Map<String, String> dataMap, List<String> pCellList) throws Exception {
        List<RdCheckResults> checkResults = new ArrayList<RdCheckResults>();

        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");

        for (RdCheckFormula rdCheckFormula : relationList) {
            String relation = FormulaEncryptThead.getFormulaDecrypt1(rdCheckFormula.getCheckFormula());
            StringBuffer results = new StringBuffer();

            if (dataMap != null) {
                relation = CommUtil.trimStr(relation);
                // 指标替换为值
                String valRelation = RdCheckUtil.returnValRelationEx(relation, dataMap, pCellList, reportDate, rdTableInfoDao);
                // 处理特殊函数
                if (valRelation.contains("COUNTIF(")) {
                    valRelation = RdCheckUtil.countIf(valRelation);
                }
                if (valRelation.contains("SUMIF")) {
                    valRelation = RdCheckUtil.sumIf(valRelation);
                }
                if (valRelation.contains("OR")) {
                    valRelation = RdCheckUtil.andOr(valRelation, "OR");
                }
	
					/*if (valRelation.contains("AND")) {
						valRelation = RdCheckUtil.andOr(valRelation, "AND");
					}*/

                if (relation.toUpperCase().startsWith("IF(")
                        || (relation.toUpperCase().contains("IF(") && !"SUM".equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 3, relation.toUpperCase().indexOf("IF("))) && !"COUNT"
                        .equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 5, relation.toUpperCase().indexOf("IF("))))) {// 复杂公式（含if...else...）
                    RdCheckUtil.getComplexRelationResult(relation, results, valRelation, rdCheckFormula.getDeviationValue(), pCellList);
                } else {// 普通公式校验

                    if (valRelation.contains("AND")) {

                        String valRelation1 = valRelation.substring(1, valRelation.indexOf(")AND("));
                        String valRelation2 = valRelation.substring(valRelation.indexOf(")AND(") + 5, valRelation.length() - 1);
                        RdCheckUtil.getRelationResultFun(valRelation1, results, valRelation1, rdCheckFormula.getDeviationValue(), pCellList, 0);
                        RdCheckUtil.getRelationResultFun(valRelation2, results, valRelation2, rdCheckFormula.getDeviationValue(), pCellList, 1);

                    } else {

                        RdCheckUtil.getRelationResult(relation, results, valRelation, rdCheckFormula.getDeviationValue(), pCellList);

                    }

                }

            }

            if (results.length() > 0) {
                RdCheckResults res = new RdCheckResults();
                res.setCheckRisk(rdCheckFormula.getCheckRisk());
                res.setFormula1(rdCheckFormula.getCheckFormula());
                res.setFormulaMark(rdCheckFormula.getCheckFormulaMark());
                res.setOrganNo(brNo);
                res.setReportDate(reportDate);
                res.setTabType(tabType);
                res.setContent(results.toString());
                res.setcUser(rdCheckFormula.getcUser());
                res.setReportNoStr(rdCheckFormula.getTabcode());
                checkResults.add(res);
            }

        }
        return checkResults;
    }

    /**
     * 初始化装载校验公式
     *
     * @param checkFormulas checkArea 校验范围(区分表内校验与表外校验)
     *                      area 校验区域(校验的公式适用于区域,例：山东省,江苏省)
     */
    private static void initCheckFormulas(List<String> rTabCodesAll, List<String> rTabCodes, String reportDate, Set<String> tabCodes, Set<String> lastTabCodes, Set<String> ncTabCodes,
                                          Set<String> qntqTabCodes, Set<String> tqbbTabCodes, List<RdCheckFormula> checkFormulas, String currentFormualsFlag, String cUser, String formulaType, String checkArea, String area, String brnoType) throws Exception {

        RdCheckFormulaService rdCheckFormulaDao = (RdCheckFormulaService) SpringContextUtil.getBean("rdCheckFormulaServiceImpl");

        // 获取月本季度报表编号相关的所有公式集合
        List<RdCheckFormula> cfList = rdCheckFormulaDao.getCheckFormulaListByTabCodes(rTabCodes, reportDate, cUser, formulaType, checkArea, area, brnoType);
        // 筛选公式
        for (RdCheckFormula cFormula : cfList) {
            if (cFormula.getType().equals("1")) {
                currentFormualsFlag = FormulaEncryptThead.getFormulaDecrypt1(cFormula.getCheckFormula());
                // 获取G0100_1010@G0102_1110
                // 获取G0100@G0102
                String tabCodeStr = cFormula.getTabcode();
                boolean in = true;
                int count = 0;
                List<String> codes = StrUtil.convertToList(tabCodeStr, "@");
                for (int i = 0; i < codes.size(); i++) {
                    String cs = codes.get(i);
                    if (!rTabCodesAll.contains(cs)) {
                        in = false;
                        break;
                    }
                    if (rTabCodes.contains(cs)) {
                        count++;
                    }
                }
                // 如果公式报表存在于需要校验的集合中,并且至少有一个是本季度需要校验的报表,则认定为需要校验的公式
                if (in && count > 0) {
                    checkFormulas.add(cFormula);
                    tabCodes.addAll(codes);

                    if (currentFormualsFlag.contains("$")) {
                        lastTabCodes.addAll(codes);
                    }
                    if (currentFormualsFlag.contains("@")) {
                        ncTabCodes.addAll(codes);
                    }
                    if (currentFormualsFlag.contains("~")) {
                        qntqTabCodes.addAll(codes);
                    }
                    if (currentFormualsFlag.contains("^")) {
                        tqbbTabCodes.addAll(codes);
                    }
                }
            }
        }
    }


    /**
     * 功能描述：异动校验(上海省局自动校验)
     *
     * @param reportDate
     * @param reportDate
     * @param reportRate
     * @return
     * @author
     * @date 2017年10月10日
     * @modify log:
     */
    public static void toReportCheckYdAuto(String reportDate, String tabType, String reportRate) throws Exception {
        reportDate = reportDate.replace("-", "").substring(0, 6);

        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");
        SysOrgSummerService sysOrgSummerDao = (SysOrgSummerService) SpringContextUtil.getBean("sysOrgSummerServiceImpl");


        String fr = sysGgzdDao.getZdNamebyZdValue("上海法人汇总", "SHHZJG");
        String fz = sysGgzdDao.getZdNamebyZdValue("上海分支汇总", "SHHZJG");
        String brNofr = sysOrgSummerDao.getbrNos(fr);//法人汇总
        String brNofz = sysOrgSummerDao.getbrNos(fz);//分支汇总
        String brNo = brNofr + ',' + brNofz + ',' + fr + ',' + fz;
        String[] brNos = brNo.split(",");
        for (String bn : brNos) {
            doReportCheckCS(bn, reportDate, tabType, reportRate, "admin", "admin");
        }
    }

    /**
     * 功能描述：分机构单独进行异动校验
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param reportRate
     * @param cUserName
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private static void doReportCheckCS(String brNo, String reportDate, String tabType, String reportRate, String cUser, String cUserName) throws Exception {

        RdTableUtil rdTableUtil = (RdTableUtil) SpringContextUtil.getBean("rdTableUtil");
        brNo = rdTableUtil.delParentNode(brNo);


        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");
        boolean flag = rdTableInfoDao.getTabCodeLisSj(brNo, reportDate, tabType, true, false);
        if (flag == false) {
            return;
        }
        // 获取需要校验的所有表编号集合
        List<String> rTabCodesAll = rdTableInfoDao.getTabCodeListCS(brNo, reportDate, tabType, true, false);

        if (rTabCodesAll == null) {
            return;
        }
        // 本期
        Set<String> tabCodes = new HashSet<String>();
        // 去年同期
        Set<String> qntqTabCodes = new HashSet<String>();
        //上月
        Set<String> lmTabCodes = new HashSet<String>();
        //上季度
        Set<String> lqTabCodes = new HashSet<String>();
        //半年
        Set<String> lhyTabCodes = new HashSet<String>();
        //去年
        Set<String> lyTabCodes = new HashSet<String>();
        //前三季度
        Set<String> tqTabCodes = new HashSet<String>();
        //第四季度
        Set<String> fqTabCodes = new HashSet<String>();
        //上半年度
        Set<String> shyTabCodes = new HashSet<String>();
        //下半年度度
        Set<String> xhyTabCodes = new HashSet<String>();
        // 需要校验的公式集合
        List<RdCheckFormulaWave> checkFormulas = new ArrayList<RdCheckFormulaWave>();
        String currentFormualsFlag = null;
        initCheckFormulasCS(rTabCodesAll, reportDate, tabCodes, qntqTabCodes, lmTabCodes, lqTabCodes, lhyTabCodes, lyTabCodes, tqTabCodes, fqTabCodes, shyTabCodes, xhyTabCodes, checkFormulas, currentFormualsFlag, cUser, tabType, reportRate);
        // 百分比单元格坐标集合
        List<String> pctCellLists = new ArrayList<String>();

        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        int month = DateUtil.getMonth(raw);
        Map<String, String> dataMap = new HashMap<String, String>();

        RdReportInfoService rdReportInfoDao = (RdReportInfoService) SpringContextUtil.getBean("rdReportInfoServiceImpl");

        // 本期
        if (tabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(tabCodes, brNo, reportDate, tabType, "0", dataMap, pctCellLists);
        }
        if (lmTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(lmTabCodes, brNo, reportDate, tabType, "1", dataMap, pctCellLists);
        }
        if (lqTabCodes.size() > 0) {
            if (month == 3 || month == 6 || month == 9 || month == 12) {
                rdReportInfoDao.initRdReportDataCS(lqTabCodes, brNo, reportDate, tabType, "2", dataMap, pctCellLists);
            }
        }
        if (lhyTabCodes.size() > 0) {
            if (month == 6 || month == 12) {
                rdReportInfoDao.initRdReportDataCS(lhyTabCodes, brNo, reportDate, tabType, "3", dataMap, pctCellLists);
            }
        }
        if (qntqTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(qntqTabCodes, brNo, reportDate, tabType, "4", dataMap, pctCellLists);
        }
        if (shyTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(shyTabCodes, brNo, reportDate, tabType, "5", dataMap, pctCellLists);
        }
        if (xhyTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(xhyTabCodes, brNo, reportDate, tabType, "6", dataMap, pctCellLists);
        }
        if (tqTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(tqTabCodes, brNo, reportDate, tabType, "7", dataMap, pctCellLists);
        }
        if (fqTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(fqTabCodes, brNo, reportDate, tabType, "8", dataMap, pctCellLists);
        }
        RdCheckUtil.initCustomTarget(reportDate, dataMap);

        List<RdCheckResultsWave> checkResults = null;
        checkResults = getCheckResultCS(brNo, reportDate, tabType, checkFormulas, dataMap, pctCellLists);

        RdCheckResultsWaveService rdCheckResultsWaveDao = (RdCheckResultsWaveService) SpringContextUtil.getBean("rdCheckResultsWaveServiceImpl");
        rdCheckResultsWaveDao.insertCheckResultsSh(brNo, reportDate, reportRate, tabType, checkResults);

    }


    private static void initCheckFormulasCS(List<String> rTabCodesAll, String reportDate, Set<String> tabCodes,
                                            Set<String> qntqTabCodes, Set<String> lmTabCodes, Set<String> lqTabCodes, Set<String> lhyTabCodes,
                                            Set<String> lyTabCodes, Set<String> tqTabCodes, Set<String> fqTabCodes, Set<String> shyTabCodes,
                                            Set<String> xhyTabCodes, List<RdCheckFormulaWave> checkFormulas, String currentFormualsFlag, String cUser, String tabType, String reportRate) throws Exception {

        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");

        RdCheckFormulaWaveService rdCheckFormulaWaveDao = (RdCheckFormulaWaveService) SpringContextUtil.getBean("rdCheckFormulaWaveServiceImpl");

        for (int i = 0; i < rTabCodesAll.size(); i++) {
            String tabCode = rTabCodesAll.get(i).toString();
            String nowVersion = rdTableInfoDao.getVersionInfo(tabCode, reportDate);
            String lastReportDate = getLastReportDate(reportDate, reportRate);
            String lastVersion = rdTableInfoDao.getVersionInfo(tabCode, lastReportDate);
            List<RdCheckFormulaWave> formulas = rdCheckFormulaWaveDao.getCheckFormulaListByTabCodesCS(tabCode, reportRate, nowVersion, lastVersion);
            for (int j = 0; j < formulas.size(); j++) {
                String formula = FormulaEncryptThead.getFormulaDecrypt1(formulas.get(j).getCheckFormula());
                String dValueFormula = formulas.get(j).getdValueFormula();
                if ("1".equals(reportRate)) {//月
                    formula = formula.replace("$oper$", "&");
                    dValueFormula = dValueFormula.replace("$oper$", "&");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("1");
                    checkFormulas.add(formulas.get(j));
                    lmTabCodes.add(tabCode);
                } else if ("2".equals(reportRate)) {//季
                    formula = formula.replace("$oper$", "|");
                    dValueFormula = dValueFormula.replace("$oper$", "|");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("2");
                    checkFormulas.add(formulas.get(j));
                    lqTabCodes.add(tabCode);
                } else if ("3".equals(reportRate)) {//半年
                    formula = formula.replace("$oper$", "`");
                    dValueFormula = dValueFormula.replace("$oper$", "`");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("3");
                    checkFormulas.add(formulas.get(j));
                    lhyTabCodes.add(tabCode);
                } else if ("4".equals(reportRate)) {//去年同期
                    formula = formula.replace("$oper$", "~");
                    dValueFormula = dValueFormula.replace("$oper$", "~");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("4");
                    checkFormulas.add(formulas.get(j));
                    qntqTabCodes.add(tabCode);
                } else if ("5".equals(reportRate)) {//上半年度
                    formula = formula.replace("$oper$", ":");
                    dValueFormula = dValueFormula.replace("$oper$", ":");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("5");
                    checkFormulas.add(formulas.get(j));
                    shyTabCodes.add(tabCode);
                } else if ("6".equals(reportRate)) {//下半年度
                    formula = formula.replace("$oper$", ";");
                    dValueFormula = dValueFormula.replace("$oper$", ";");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("6");
                    checkFormulas.add(formulas.get(j));
                    xhyTabCodes.add(tabCode);
                } else if ("7".equals(reportRate)) {//前三季度
                    formula = formula.replace("$oper$", "￥");
                    dValueFormula = dValueFormula.replace("$oper$", "￥");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("7");
                    checkFormulas.add(formulas.get(j));
                    tqTabCodes.add(tabCode);
                } else if ("8".equals(reportRate)) {//第四季度
                    formula = formula.replace("$oper$", "￠");
                    dValueFormula = dValueFormula.replace("$oper$", "￠");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("8");
                    checkFormulas.add(formulas.get(j));
                    fqTabCodes.add(tabCode);
                }
                tabCodes.add(tabCode);
            }
        }
    }

    /**
     * 功能描述：计算异动公式结果(机构用)
     *
     * @param brNo
     * @param reportDate
     * @param relationList
     * @param dataMap
     * @param pCellList
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private static List<RdCheckResultsWave> getCheckResultCS(String brNo,
                                                             String reportDate, String tabType,
                                                             List<RdCheckFormulaWave> relationList, Map<String, String> dataMap,
                                                             List<String> pCellList) {
        List<RdCheckResultsWave> checkResults = new ArrayList<RdCheckResultsWave>();
        for (RdCheckFormulaWave rdCheckFormula : relationList) {
            String relation = FormulaEncryptThead.getFormulaDecrypt1(rdCheckFormula.getCheckFormula());
            StringBuffer results = new StringBuffer();
            StringBuffer isError = new StringBuffer();
            StringBuffer dValue = new StringBuffer();
            try {
                if (dataMap != null) {
                    relation = CommUtil.trimStr(relation);
                    // 指标替换为值
                    String valRelation = RdCheckUtil.returnValRelation(relation, dataMap, pCellList, null);
                    // 处理特殊函数
                    if (valRelation.contains("AND")) {
                        String valRelation1 = valRelation.substring(1, valRelation.indexOf(")AND("));
                        String valRelation2 = valRelation.substring(valRelation.indexOf(")AND(") + 5, valRelation.length() - 1);
                        RdCheckUtil.getRelationResultFun(valRelation1, results, valRelation1, "", pCellList, 0);
                        RdCheckUtil.getRelationResultFun(valRelation2, results, valRelation2, "", pCellList, 1);
                    }
                    // 计算差值
                    String dValueFormula = rdCheckFormula.getdValueFormula();
                    dValueFormula = CommUtil.trimStr(dValueFormula);
                    String dValRelation = RdCheckUtil.returnValRelation(dValueFormula, dataMap, pCellList, null);
                    getRelationResult(dValRelation, dValue, pCellList);


                }
                if (results.length() > 0) {
                    RdCheckResultsWave res = new RdCheckResultsWave();
                    res.setCheckRisk(rdCheckFormula.getCheckRisk());
                    res.setFormula1(rdCheckFormula.getCheckFormula());
                    res.setFormulaMark(rdCheckFormula.getCheckFormulaMark());
                    res.setOrganNo(brNo);
                    res.setReportDate(reportDate);
                    res.setReportRate(rdCheckFormula.getReportRate());
                    res.setTabType(tabType);
                    res.setValue(results.toString());
                    res.setdValue(dValue.toString());
                    res.setcUser(rdCheckFormula.getcUser());
                    res.setReportNoStr(rdCheckFormula.getTabcode());
                    res.setIsError(isError.toString());
                    res.setFormulaId(rdCheckFormula.getId());
                    checkResults.add(res);
                }
            } catch (Exception e) {
                e.printStackTrace();
                results.append(" 运算校验公式时,出现异常!!公式:[" + relation + "]<br>" + e.getMessage());
            }

        }
        return checkResults;
    }

    /**
     * 功能描述：获取异动上期日期
     *
     * @param reportDate
     * @param checkType
     * @return
     * @author
     * @date 2016年9月30日
     * @modify log:
     */
    private static String getLastReportDate(String reportDate, String checkType) {
        if ("1".equals(checkType)) {//月
            reportDate = RdTableUtil.getReportDateLastMonth(reportDate);
        } else if ("2".equals(checkType)) {//季
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
        } else if ("3".equals(checkType)) {//半年
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
        } else if ("4".equals(checkType)) {//去年同期
            reportDate = RdTableUtil.getLastYearReportDate(reportDate);
        } else if ("5".equals(checkType)) {//上半年度
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
        } else if ("6".equals(checkType)) {//下半年度
            reportDate = RdTableUtil.getReportDateLastHalfYear(reportDate);
        } else if ("7".equals(checkType)) {//前三季度
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
        } else if ("8".equals(checkType)) {//第四季度
            reportDate = RdTableUtil.getReportDateLastQuarter(reportDate);
        }
        return reportDate;
    }

    /**
     * 功能描述：计算异动差值
     *
     * @param dValRelation
     * @param dValue
     * @param pCellList
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private static void getRelationResult(String dValRelation, StringBuffer dValue,
                                          List<String> pCellList) {
        DecimalFormat df2 = new DecimalFormat("0.00");// double类型数值精度
        DecimalFormat df4 = new DecimalFormat("0.0000");// double类型数值精度
        double value = 0.0;
        if (dValRelation.contains("#")) {
            dValue.append("公式中指标 " + dValRelation.split("#")[1].substring(0, (dValRelation.split("#")[1]).length()) + " 未取到值！");
        } else {
            if (dValRelation != null) {
                value = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(dValRelation))) + 0.00000001)));
                dValue.append("" + df2.format(value) + "");
            }
        }

    }

    /**
     * 功能描述：上海省局异动（新）
     *
     * @param reportDate
     * @param tabType
     * @param reportRate
     * @throws Exception
     * @author
     * @date 2017年10月26日
     * @modify log:
     */
    public static void toReportCheckYdAutoNew(String reportDate, String tabType, String reportRate) throws Exception {
        final String fReportDate = reportDate.replace("-", "").substring(0, 6);
        final String fTabType = tabType;
        final String fReportRate = reportRate;

        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");
        SysOrgSummerService sysOrgSummerDao = (SysOrgSummerService) SpringContextUtil.getBean("sysOrgSummerServiceImpl");

        String fr = sysGgzdDao.getZdNamebyZdValue("上海法人汇总", "SHHZJG");
        String fz = sysGgzdDao.getZdNamebyZdValue("上海分支汇总", "SHHZJG");
        String brNofr = sysOrgSummerDao.getbrNos(fr);//法人汇总
        String brNofz = sysOrgSummerDao.getbrNos(fz);//分支汇总
        String brNo = brNofr + ',' + brNofz + ',' + fr + ',' + fz;
        String[] brNos = brNo.split(",");
        int maxThreadNum = Integer.parseInt(sysGgzdDao.getGgzdByZdValue("MAX", "1104_MAX_THREAD_NUM").getZdName());
        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(maxThreadNum);
        for (final String bn : brNos) {
            fixedThreadPool.execute(new Runnable() {
                @Override
                public void run() {
                    doReportCheckSh(bn, fReportDate, fTabType, fReportRate, "admin", "admin");
                }
            });
        }
        fixedThreadPool.shutdown();
        while (true) {
            if (fixedThreadPool.isTerminated()) {
                break;
            }
            Thread.sleep(200);
        }
    }

    private static void doReportCheckSh(String brNo, String reportDate, String tabType, String reportRate, String cUser, String cUserName) {
        RdTableUtil rdTableUtil = (RdTableUtil) SpringContextUtil.getBean("rdTableUtil");
        brNo = rdTableUtil.delParentNode(brNo);

        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoServiceImpl");
        boolean flag = rdTableInfoDao.getTabCodeLisSj(brNo, reportDate, tabType, true, false);
        if (flag == false) {
            return;
        }
        // 获取需要校验的所有表编号集合
        List<String> rTabCodesAll = rdTableInfoDao.getTabCodeListCS(brNo, reportDate, tabType, true, false);

        if (rTabCodesAll == null) {
            return;
        }

        SysBmglServiceImpl sysBmglDao = (SysBmglServiceImpl) SpringContextUtil.getBean("sysBmglServiceImpl");
        SysBmgl bm = sysBmglDao.fetch(brNo);//获取当前机构对象
        String type = bm.getBmCategory();//法人。分支
        if (type.equals("法人")) {
            type = "fr";
        } else {
            type = "fz";
        }
        // 本期
        Set<String> tabCodes = new HashSet<String>();
        // 去年同期
        Set<String> qntqTabCodes = new HashSet<String>();
        //上月
        Set<String> lmTabCodes = new HashSet<String>();
        //上季度
        Set<String> lqTabCodes = new HashSet<String>();
        //半年
        Set<String> lhyTabCodes = new HashSet<String>();
        //去年
        Set<String> lyTabCodes = new HashSet<String>();
        //前三季度
        Set<String> tqTabCodes = new HashSet<String>();
        //第四季度
        Set<String> fqTabCodes = new HashSet<String>();
        //上半年度
        Set<String> shyTabCodes = new HashSet<String>();
        //下半年度度
        Set<String> xhyTabCodes = new HashSet<String>();
        // 需要校验的公式集合
        List<RdCheckFormulaWave> checkFormulas = new ArrayList<RdCheckFormulaWave>();
        String currentFormualsFlag = null;
        initCheckFormulasSh(rTabCodesAll, reportDate, tabCodes, qntqTabCodes, lmTabCodes, lqTabCodes, lhyTabCodes, lyTabCodes, tqTabCodes, fqTabCodes, shyTabCodes, xhyTabCodes, checkFormulas, currentFormualsFlag, cUser, tabType, reportRate, type);
        // 百分比单元格坐标集合
        List<String> pctCellLists = new ArrayList<String>();

        Date raw = DateUtil.parse(reportDate, "yyyyMM");
        int month = DateUtil.getMonth(raw);
        Map<String, String> dataMap = new HashMap<String, String>();

        RdReportInfoService rdReportInfoDao = (RdReportInfoService) SpringContextUtil.getBean("rdReportInfoServiceImpl");
        // 本期
        if (tabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(tabCodes, brNo, reportDate, tabType, "0", dataMap, pctCellLists);
        }
        if (lmTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(lmTabCodes, brNo, reportDate, tabType, "1", dataMap, pctCellLists);
        }
        if (lqTabCodes.size() > 0) {
            if (month == 3 || month == 6 || month == 9 || month == 12) {
                rdReportInfoDao.initRdReportDataCS(lqTabCodes, brNo, reportDate, tabType, "2", dataMap, pctCellLists);
            }
        }
        if (lhyTabCodes.size() > 0) {
            if (month == 6 || month == 12) {
                rdReportInfoDao.initRdReportDataCS(lhyTabCodes, brNo, reportDate, tabType, "3", dataMap, pctCellLists);
            }
        }
        if (qntqTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(qntqTabCodes, brNo, reportDate, tabType, "4", dataMap, pctCellLists);
        }
        if (shyTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(shyTabCodes, brNo, reportDate, tabType, "5", dataMap, pctCellLists);
        }
        if (xhyTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(xhyTabCodes, brNo, reportDate, tabType, "6", dataMap, pctCellLists);
        }
        if (tqTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(tqTabCodes, brNo, reportDate, tabType, "7", dataMap, pctCellLists);
        }
        if (fqTabCodes.size() > 0) {
            rdReportInfoDao.initRdReportDataCS(fqTabCodes, brNo, reportDate, tabType, "8", dataMap, pctCellLists);
        }
        RdCheckUtil.initCustomTarget(reportDate, dataMap);

        List<RdCheckResultsWave> checkResults = null;
        checkResults = getCheckResultCS(brNo, reportDate, tabType, checkFormulas, dataMap, pctCellLists);

        RdCheckResultsWaveService rdCheckResultsWaveDao = (RdCheckResultsWaveService) SpringContextUtil.getBean("rdCheckResultsWaveServiceImpl");
        rdCheckResultsWaveDao.insertCheckResultsSh(brNo, reportDate, reportRate, tabType, checkResults);

    }

    private static void initCheckFormulasSh(List<String> rTabCodesAll, String reportDate, Set<String> tabCodes,
                                            Set<String> qntqTabCodes, Set<String> lmTabCodes, Set<String> lqTabCodes, Set<String> lhyTabCodes,
                                            Set<String> lyTabCodes, Set<String> tqTabCodes, Set<String> fqTabCodes, Set<String> shyTabCodes,
                                            Set<String> xhyTabCodes, List<RdCheckFormulaWave> checkFormulas, String currentFormualsFlag, String cUser, String tabType, String reportRate, String type) {

        RdTableInfoService rdTableInfoDao = (RdTableInfoService) SpringContextUtil.getBean("rdTableInfoService");
        RdCheckFormulaWaveService rdCheckFormulaWaveDao = (RdCheckFormulaWaveService) SpringContextUtil.getBean("rdCheckFormulaWaveServiceImpl");

        for (int i = 0; i < rTabCodesAll.size(); i++) {
            String tabCode = rTabCodesAll.get(i).toString();
            String nowVersion = rdTableInfoDao.getVersionInfo(tabCode, reportDate);
            String lastReportDate = getLastReportDate(reportDate, reportRate);
            String lastVersion = rdTableInfoDao.getVersionInfo(tabCode, lastReportDate);
            List<RdCheckFormulaWave> formulas = rdCheckFormulaWaveDao.getCheckFormulaListByTabCodesSh(tabCode, reportRate, nowVersion, lastVersion, type, reportDate, tabType);
            for (int j = 0; j < formulas.size(); j++) {
                String formula = FormulaEncryptThead.getFormulaDecrypt1(formulas.get(j).getCheckFormula());
                String dValueFormula = formulas.get(j).getdValueFormula();
                if ("1".equals(reportRate)) {//月
                    formula = formula.replace("$oper$", "&");
                    dValueFormula = dValueFormula.replace("$oper$", "&");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("1");
                    checkFormulas.add(formulas.get(j));
                    lmTabCodes.add(tabCode);
                } else if ("2".equals(reportRate)) {//季
                    formula = formula.replace("$oper$", "|");
                    dValueFormula = dValueFormula.replace("$oper$", "|");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("2");
                    checkFormulas.add(formulas.get(j));
                    lqTabCodes.add(tabCode);
                } else if ("3".equals(reportRate)) {//半年
                    formula = formula.replace("$oper$", "`");
                    dValueFormula = dValueFormula.replace("$oper$", "`");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("3");
                    checkFormulas.add(formulas.get(j));
                    lhyTabCodes.add(tabCode);
                } else if ("4".equals(reportRate)) {//去年同期
                    formula = formula.replace("$oper$", "~");
                    dValueFormula = dValueFormula.replace("$oper$", "~");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("4");
                    checkFormulas.add(formulas.get(j));
                    qntqTabCodes.add(tabCode);
                } else if ("5".equals(reportRate)) {//上半年度
                    formula = formula.replace("$oper$", ":");
                    dValueFormula = dValueFormula.replace("$oper$", ":");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("5");
                    checkFormulas.add(formulas.get(j));
                    shyTabCodes.add(tabCode);
                } else if ("6".equals(reportRate)) {//下半年度
                    formula = formula.replace("$oper$", ";");
                    dValueFormula = dValueFormula.replace("$oper$", ";");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("6");
                    checkFormulas.add(formulas.get(j));
                    xhyTabCodes.add(tabCode);
                } else if ("7".equals(reportRate)) {//前三季度
                    formula = formula.replace("$oper$", "￥");
                    dValueFormula = dValueFormula.replace("$oper$", "￥");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("7");
                    checkFormulas.add(formulas.get(j));
                    tqTabCodes.add(tabCode);
                } else if ("8".equals(reportRate)) {//第四季度
                    formula = formula.replace("$oper$", "￠");
                    dValueFormula = dValueFormula.replace("$oper$", "￠");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    formulas.get(j).setReportRate("8");
                    checkFormulas.add(formulas.get(j));
                    fqTabCodes.add(tabCode);
                }
                tabCodes.add(tabCode);
            }
        }
    }

    /**
     * 功能描述：上海指标自动计算
     *
     * @param reportDate 报表日期
     * @param tabType    校验频度
     * @throws Exception
     * @author
     * @date 2018年1月18日
     * @modify log:
     */
    public static void toRdIndCheckAuto(String reportDate, String tabType) throws Exception {
        reportDate = reportDate.replace("-", "").substring(0, 6);

        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");
        SysOrgSummerService sysOrgSummerDao = (SysOrgSummerService) SpringContextUtil.getBean("sysOrgSummerServiceImpl");

        String fr = sysGgzdDao.getZdNamebyZdValue("上海法人汇总", "SHHZJG");
        String fz = sysGgzdDao.getZdNamebyZdValue("上海分支汇总", "SHHZJG");
        String brNofr = sysOrgSummerDao.getbrNos(fr);//法人汇总
        String brNofz = sysOrgSummerDao.getbrNos(fz);//分支汇总
        String brNo = brNofr + ',' + brNofz + ',' + fr + ',' + fz;//所有机构，包括汇总的机构
        String[] brNos = brNo.split(",");
        for (String bn : brNos) {
            if (!bn.equals("")) {
                initIndDate(bn, reportDate, tabType);//计算此机构下该日期的该频度下的指标
            }
        }
    }

    /**
     * 功能描述：单机构校验所属指标
     *
     * @param bn
     * @param reportDate
     * @param tabType
     * @throws Exception
     * @author
     * @date 2018年1月18日
     * @modify log:
     */
    public static void initIndDate(String bn, String reportDate, String tabType) throws Exception {
        List<RdIndicatorsBasicInfo> indListAll = new ArrayList<RdIndicatorsBasicInfo>();
        SysBmgl bmgl = SysBmglCache.getBmglInfo(bn);
        if (bmgl == null) {
            return;//过滤掉汇机构
        }
        RdIndicatorsInfoService rdIndicatorsInfoDao =  (RdIndicatorsInfoService) SpringContextUtil.getBean("rdIndicatorsInfoServiceImpl");
        indListAll = rdIndicatorsInfoDao.getIndListsForBrNo(bn);

        RdReportInfoService rdReportInfoDao = (RdReportInfoService) SpringContextUtil.getBean("rdReportInfoServiceImpl");

        // 指标信息
        RdIndicatorsInfo ii = null;
        for (RdIndicatorsBasicInfo bi : indListAll) {
            // 开始处理某月的单个指标
            if (!checkIndType(reportDate, bi.getIndType())) {
                continue;
            }
            ii = rdIndicatorsInfoDao.getRdIndicatorsInfoByBid(bi.getId(), reportDate);
            if (ii == null) {
                continue;
            }
            // 插入空的指标运算结果
            insertInitRdIndData(bn, reportDate, bi);
            // 获取机构日期需要上报的报表集合
            Set<String> tabCodes = getTabCode(ii.getTabCode());
            // 百分比单元格坐标集合
            List<String> pctCellLists = new ArrayList<String>();
            // 数据map
            Map<String, String> dataMap = new HashMap<String, String>();
            tabType = getTabType(bi.getIndType());
            // 本期
            rdReportInfoDao.initRdReportData(tabCodes, bn, reportDate, tabType, "0", dataMap, pctCellLists);
            // 上期
            if (ii.getIndFormula().contains(RdTableConstants.STR_CONN_2)) {
                rdReportInfoDao.initRdReportData(tabCodes, bn, reportDate, tabType, "1", dataMap, pctCellLists);
            }
            // 年初
            if (ii.getIndFormula().contains(RdTableConstants.STR_CONN_3)) {
                rdReportInfoDao.initRdReportData(tabCodes, bn, reportDate, null, "2", dataMap, pctCellLists);
            }
            // 去年同期
            if (ii.getIndFormula().contains(RdTableConstants.STR_CONN_4)) {
                rdReportInfoDao.initRdReportData(tabCodes, bn, reportDate, null, "3", dataMap, pctCellLists);
            }
            // 同期补报
            if (ii.getIndFormula().contains(RdTableConstants.STR_CONN_5)) {
                rdReportInfoDao.initRdReportData(tabCodes, bn, reportDate, null, "4", dataMap, pctCellLists);
            }
            RdCheckUtil.initCustomTarget(reportDate, dataMap);
            //指标计算
            indCalculation(bi, ii, dataMap, pctCellLists, reportDate, bn, tabType, bi.getIsPercent());
        }
    }

    /**
     * 功能描述：检测指标类型
     *
     * @param dataDate
     * @param indType
     * @return
     * @author
     * @date 2018年1月18日
     * @modify log:
     */
    public static boolean checkIndType(String dataDate, String indType) {
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

    public static void insertInitRdIndData(String brNo, String dataDate, RdIndicatorsBasicInfo bi) {
        RdIndicatorsData rid = new RdIndicatorsData();
        rid.setBrNo(brNo);
        rid.setIndId(bi.getId());
        rid.setReportDate(dataDate);

        RdIndicatorsDataServiceImpl rdIndicatorDataDao = (RdIndicatorsDataServiceImpl) SpringContextUtil.getBean("rdIndicatorsDataServiceImpl");

        rdIndicatorDataDao.clear(Cnd.where("BR_NO", "=", rid.getBrNo()).and("IND_ID", "=", rid.getIndId()).and("REPORT_DATE", "=", rid.getReportDate()));
        rdIndicatorDataDao.dao().fastInsert(rid);
    }

    public static Set<String> getTabCode(String tabCode) {
        List<String> tt = StrUtil.convertToList(tabCode, "@");
        Set<String> t = new HashSet<String>();
        for (String s : tt) {
            if (!t.contains(s)) {
                t.add(s);
            }
        }
        return t;
    }

    public static String getTabType(String indType) {
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

    /**
     * 功能描述：单个指标计算方法
     *
     * @param bi
     * @param ii
     * @param dataMap
     * @param pCellList
     * @param dataDate
     * @param brNo
     * @param tabType
     * @param isPercent
     * @return
     * @throws Exception
     * @author
     * @date 2018年1月18日
     * @modify log:
     */
    public static void indCalculation(RdIndicatorsBasicInfo bi, RdIndicatorsInfo ii, Map<String, String> dataMap, List<String> pCellList, String dataDate, String brNo, String tabType, String isPercent)
            throws Exception {
        String relation = ii.getIndFormula();
        relation = CommUtil.trimStr(relation);
        String sqVal = replaceIndVal(brNo, bi.getId(), dataDate, "上期", tabType);
        String ncVal = replaceIndVal(brNo, bi.getId(), dataDate, "年初", tabType);
        String qntqVal = replaceIndVal(brNo, bi.getId(), dataDate, "去年同期", tabType);
        // 替换上期
        if (relation.contains("上期")) {
            if (!StrUtil.isNull(sqVal)) {
                relation = relation.replace("上期", sqVal);
            }
        }
        // 替换年初
        if (!relation.contains("年初")) {
            if (StrUtil.isNull(ncVal)) {
                relation = relation.replace("年初", ncVal);
            }
        }
        // 替换去年同期
        if (!relation.contains("去年同期")) {
            if (StrUtil.isNull(qntqVal)) {
                relation = relation.replace("去年同期", qntqVal);
            }
        }
        // 指标替换为值
        String valRelation = RdCheckUtil.returnValRelation(relation, dataMap, pCellList, null);
        // 处理特殊函数
        if (valRelation.contains("COUNTIF(")) {
            valRelation = RdCheckUtil.countIf(valRelation);
        }
        if (valRelation.contains("SUMIF")) {
            valRelation = RdCheckUtil.sumIf(valRelation);
        }
        if (valRelation.contains("OR")) {
            valRelation = RdCheckUtil.andOr(valRelation, "OR");
        }
        if (valRelation.contains("AND")) {
            valRelation = RdCheckUtil.andOr(valRelation, "AND");
        }
        if (valRelation.contains("#")) {//未取到值，返回
            return;
        }
        String value = CalStr.calculate(CalStr.strCast(valRelation));
        if ("y".equals(isPercent)) {
            value = df4.format(Double.parseDouble(value));
        } else {
            value = df2.format(Double.parseDouble(value));
        }

        RdIndicatorsData rid = new RdIndicatorsData();
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
            String sjVal = replaceIndVal(brNo, bi.getId(), sjDate, "", null);
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

        RdIndicatorsDataServiceImpl rdIndicatorDataDao = (RdIndicatorsDataServiceImpl) SpringContextUtil.getBean("rdIndicatorsDataServiceImpl");

        rdIndicatorDataDao.clear(Cnd.where("BR_NO", "=", rid.getBrNo()).and("IND_ID", "=", rid.getIndId()).and("REPORT_DATE", "=", rid.getReportDate()));
        rdIndicatorDataDao.dao().fastInsert(rid);
    }

    public static String replaceIndVal(String brNo, String indId, String dataDate, String flag, String tabType) {
        if ("上期".equals(flag)) {
            dataDate = RdTableUtil.getLastReportDate(dataDate, tabType);
        } else if ("年初".equals(flag)) {
            dataDate = RdTableUtil.getReportDateEndOfYear(dataDate);
        } else if ("去年同期".equals(flag)) {
            dataDate = RdTableUtil.getLastYearReportDate(dataDate);
        }

        RdIndicatorsDataServiceImpl rdIndicatorDataDao = (RdIndicatorsDataServiceImpl) SpringContextUtil.getBean("rdIndicatorsDataServiceImpl");

        RdIndicatorsData id = rdIndicatorDataDao.fetch(Cnd.where("BR_NO", "=", brNo).and("REPORT_DATE", "=", dataDate).and("IND_ID", "=", indId));
        if (id == null) {
            return "";
        } else {
            // 此处未考虑百分比*100
            return String.valueOf(id.getIndValue());
        }
    }

    /**
     * 功能描述：上海预追溯（对汇总机构进行判断）
     *
     * @author
     * @date 2018年6月13日
     * @modify log:
     */
    public static void matchNum(String reportDate, String reportType) {
        reportDate = reportDate.split("-")[0] + reportDate.split("-")[1];//由2018-03-31转成201803

        SysGgzdService sysGgzdDao = (SysGgzdService) SpringContextUtil.getBean("sysGgzdServiceImpl");
        SysOrgSummerServiceImpl sysOrgSummerDao = (SysOrgSummerServiceImpl) SpringContextUtil.getBean("sysOrgSummerServiceImpl");

        String fr = sysGgzdDao.getZdNamebyZdValue("上海法人汇总", "SHHZJG");
        String fz = sysGgzdDao.getZdNamebyZdValue("上海分支汇总", "SHHZJG");//上海就这两家追溯，这样写节约时间
        List<String> HzBrnolist = new ArrayList<String>();//获取汇总机构列表
        HzBrnolist.add(fr);
        HzBrnolist.add(fz);
        String brnos = "";//接收子机构

        RdCheckResultsServiceImpl rdCheckResultsDao = (RdCheckResultsServiceImpl) SpringContextUtil.getBean("rdCheckResultsServiceImpl");

        for (int i = 0; i < HzBrnolist.size(); i++) {
            if (HzBrnolist.get(i) == null || HzBrnolist.get(i).equals("")) {//如果出现汇总机构是空的话就跳过
                continue;
            }
            brnos = sysOrgSummerDao.getbrNos(HzBrnolist.get(i));//得到汇总机构下的子机构
            String brno = StrUtil.convertQuoMarksSQL(brnos);//加上单引号，用于下面sql拼接
            List<RdCheckResults> results = rdCheckResultsDao.getFormulaByCon(HzBrnolist.get(i), reportDate, reportType);//得到公式列表(加密)
            if (results.size() > 0) {//list的大小大于0的话
                List<Record> records = new ArrayList<>();
                for (int j = 0; j < results.size(); j++) {
                    //String formula = FormulaEncrypt.getFormulaDecrypt(formulalist.get(j));//先解密
                    //记录追出来的数量
                    String num = sysOrgSummerDao.singleString("SELECT COUNT(1) FROM SAM.RD_CHECK_RESULTS WHERE ORGAN_NO IN (" + brno + ") AND REPORT_DATE = '" + reportDate + "' AND TAB_TYPE = '" + reportType + "' AND FORMULA = '" + FormulaEncryptThead.getFormulaEnctypt1(results.get(j).getFormula()) + "'");
                    Record record = new Record();
                    record.set(".table", "SAM.RD_CHECK_RESULTS_ZHUISU");
                    record.set("ID", UUID.randomUUID().toString().replaceAll("-", ""));
                    record.set("ORGAN_NO", HzBrnolist.get(i));//插入的是汇总机构
                    record.set("REPORT_DATE", reportDate);
                    record.set("TAB_TYPE", reportType);
                    record.set("NUM", num);
                    record.set("RESULTID", results.get(j).getId());
                    records.add(record);
                }
                String delsql = "DELETE FROM SAM.RD_CHECK_RESULTS_ZHUISU WHERE ORGAN_NO = '" + HzBrnolist.get(i) + "' AND REPORT_DATE = '" + reportDate + "' AND TAB_TYPE = '" + reportType + "'";
                Sql sql = Sqls.create(delsql);
                rdCheckResultsDao.dao().execute(sql);
                rdCheckResultsDao.dao().fastInsert(records);//插入XX汇总机构对应的公式的追出来的数量
            }

        }
    }
}
