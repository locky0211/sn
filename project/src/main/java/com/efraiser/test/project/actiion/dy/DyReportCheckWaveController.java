package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.common.util.rd.CalStr;
import com.efraiser.test.db.model.dy.*;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.dy.dycheckformularecord.DyCheckFormulaRecordService;
import com.efraiser.test.db.service.dy.dycheckformulawave.DyCheckFormulaWaveService;
import com.efraiser.test.db.service.dy.dychecklog.DyCheckLogService;
import com.efraiser.test.db.service.dy.dycheckresultshelper.DyCheckResultsHelperService;
import com.efraiser.test.db.service.dy.dycheckresultswave.DyCheckResultsWaveService;
import com.efraiser.test.db.service.dy.dycheckresultswavehelper.DyCheckResultsWaveHelperService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dyreportsummary.DyReportSummaryService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.impl.DyTableInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.service.sys.jgyrecord.JgyRecordService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.util.Region;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.DecimalFormat;
import java.util.*;

@Controller
@RequestMapping("dy/check/wave")
public class DyReportCheckWaveController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyReportCheckWaveController.class);

    @Autowired
    private DyCheckFormulaWaveService dyCheckFormulaWaveService;
    @Autowired
    private DyCheckFormulaRecordService dyCheckFormulaRecordService;
    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyTableModelPCTService dyTableModelPCTService;
    @Autowired
    private DyCheckResultsWaveService dyCheckResultsWaveService;
    @Autowired
    private DyCheckResultsWaveHelperService dyCheckResultsWaveHelperService;
    @Autowired
    private DyReportSummaryService dyReportSummaryService;
    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private SysUserDepService sysUserDepService;
    @Autowired
    private SysBmglService sysBmglService;
    @Autowired
    private LocalConfig localConfig;

    @Autowired
    private DyCheckLogService dyCheckLogService;
    @Autowired
    private DyCheckResultsHelperService dyCheckResultsHelperService;
    @Autowired
    private JgyRecordService jgyRecordService;

    @Autowired
    private DyTableUtil dyTableUtil;

    @Autowired
    private DyCheckUtil dyCheckUtil;


    /**
     * 功能描述：获取异动校验结果（旧）
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param formulaType
     * @param req
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    @RequestMapping("/getDyReportCheckResultsYidong")
    @ResponseBody
    public Object getDyReportCheckResultsYidong(String brNo, String reportDate, String tabType, String checkRisk, String formulaType,
                                                HttpServletRequest req) {
        brNo = dyTableUtil.delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<DyCheckResultsHelper> list = dyCheckResultsWaveService.getDyReportCheckResultsYidong(brNo, reportDate, tabType, checkRisk, sysUser.getUserId(), formulaType);
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setFormula(FormulaEncrypt.getFormulaDecrypt(list.get(i).getFormula()));
        }
        return list;
    }


    /**
     * 功能描述：导出异动校验结果（旧）
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param req
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    @RequestMapping("/doExportExcel")
    @ResponseBody
    public Object doExportExcel(String brNo, String reportDate, String reportRate, String tabType, HttpServletRequest req) {
        brNo = dyTableUtil.delParentNode(brNo);
        List<DyCheckResultsWaveHelper> results = dyCheckResultsWaveService.getDyReportCheckResultsRecordYD(brNo, reportDate, reportRate, tabType);// 历史记录导出
        if (results.size() > 0) {
            String tabTypeName = "";
            String reportRateName = "";
            if (StrUtil.isNotNull(reportRate)) {
                reportRateName = SysGgzdCache.getSysGgzdName("DY_YIDONG_FORMULA_TYPE", reportRate);
            } else {
                reportRateName = "全部";
            }
            if (StrUtil.isNotNull(tabType)) {
                tabTypeName = SysGgzdCache.getSysGgzdName("DY_TABLE_TAB_TYPE", tabType);
            } else {
                tabTypeName = "全部";
            }
            try {
                // excel模板路径
                File fi = new File(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + "预审核异动校验结果情况表.xls");
                POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(fi));
                // 读取excel模板
                HSSFWorkbook wb = new HSSFWorkbook(fs);
                HSSFSheet sheet = wb.getSheetAt(0);
                HSSFCell cell = null;
                HSSFRow row = null;
                CellStyle csTdC = ExcelUtil.createBorderCellStyle(wb, CellStyle.ALIGN_CENTER);
                CellStyle csTdL = ExcelUtil.createBorderCellStyle(wb, CellStyle.ALIGN_LEFT);
                CellStyle csTdM = ExcelUtil.createBorderCellStyleVertica(wb, CellStyle.VERTICAL_CENTER);
                row = sheet.getRow(2);
                cell = row.getCell(1);
                cell.setCellValue(reportDate);
                row = sheet.getRow(3);
                cell = row.getCell(1);
                cell.setCellValue(tabTypeName);

                int flag = 0;
                int j = 0;
                int flag2 = 0;
                int k = 0;
                for (int i = 0; i < results.size(); i++) {
                    DyCheckResultsWaveHelper rs = results.get(i);
                    row = sheet.createRow(i + 6);
                    cell = row.createCell(0);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getOrganNo());

                    cell = row.createCell(1);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getReportNoStr());

                    cell = row.createCell(2);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getCheckProject());

                    cell = row.createCell(3);
                    cell.setCellStyle(csTdL);
                    if (rs.getReportRate().equals("3")) {
                        cell.setCellValue("(A1-C0)/C0");
                    } else {
                        cell.setCellValue("(A1-A0)/A0");
                    }

                    cell = row.createCell(4);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getValueArea());

                    cell = row.createCell(5);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getValue().toString());

                    cell = row.createCell(6);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getdValue().toString());

                    if (i > 0) {//合并机构名
                        if (rs.getOrganNo().equals(results.get(i - 1).getOrganNo())) {
                            flag2 = i;
                        } else {
                            if (i != k + 1) {
                                row = sheet.getRow(k + 6);
                                cell = row.getCell(0);
                                sheet.addMergedRegion(new Region(k + 6, (short) 0, i + 5, (short) 0));
                                cell.setCellStyle(csTdM);
                                cell.setCellValue(results.get(k).getOrganNo());

                                k = flag2 + 1;
                            } else {
                                k = k + 1;
                            }
                        }
                        if (i == results.size() - 1) {
                            row = sheet.getRow(k + 6);
                            cell = row.getCell(0);
                            sheet.addMergedRegion(new Region(k + 6, (short) 0, i + 6, (short) 0));
                            cell.setCellStyle(csTdM);
                            cell.setCellValue(results.get(k).getOrganNo());
                        }
                    }

                    if (i > 0) {//合并报表编号
                        if (rs.getReportNoStr().equals(results.get(i - 1).getReportNoStr())) {
                            flag = i;
                        } else {
                            if (i != j + 1) {
                                row = sheet.getRow(j + 6);
                                cell = row.getCell(1);
                                sheet.addMergedRegion(new Region(j + 6, (short) 1, i + 5, (short) 1));
                                cell.setCellStyle(csTdM);
                                cell.setCellValue(results.get(j).getReportNoStr());
                                j = flag + 1;
                            } else {
                                j = j + 1;
                            }
                        }
                    }
                    if (i == results.size() - 1) {
                        row = sheet.getRow(j + 6);
                        cell = row.getCell(1);
                        sheet.addMergedRegion(new Region(j + 6, (short) 1, i + 6, (short) 1));
                        cell.setCellStyle(csTdM);
                        cell.setCellValue(results.get(j).getReportNoStr());
                    }
                }

                String fsPathStr = localConfig.getProperties().getTempStringPath() + File.separator + reportDate + "_" + tabTypeName + "_与" + reportRateName + "比较_" + System.currentTimeMillis() + "_异动校验结果.xls";
                File tf = new File(fsPathStr);
                FileOutputStream out = new FileOutputStream(tf);
                wb.write(out);
                out.close();
                return tf.getCanonicalPath();
            } catch (Exception e) {
                logger.error("doExportExcel() error! brNo:[" + brNo + "]," +
                        "reportDate:[" + reportDate + "]," +
                        "tabType:[" + tabType + "]," +
                        "", e);
            }
        }
        return null;
    }


    @RequestMapping("/toDyReportCheckResultsViewYD")
    public ModelAndView toDyReportCheckResultsViewYD(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyCheckResultsHelper checkResults = dyCheckResultsHelperService.fetchDyCheckResultsForViewYD(id);
        if ("admin".equals(checkResults.getcUser())) {
            checkResults.setcUser("公共库");
        } else if ("repay".equals(checkResults.getcUser())) {
            checkResults.setcUser("补报报表校验");
        } else {
            checkResults.setcUser("个人自定义[" + checkResults.getcUser() + "]");
        }
        checkResults.setFormula(checkResults.getFormula());
        modelAndView.addObject("obj", checkResults);
        return modelAndView;
    }


    /**
     * 功能描述：判断异动校验前后版本号是否一致
     *
     * @param tabCode
     * @param currentFormualsFlag
     * @param reportDate
     * @return
     * @author
     * @date 2016年10月25日
     * @modify log:
     */
    @SuppressWarnings("unused")
    private boolean sameVersion(String tabCode, String currentFormualsFlag,
                                String reportDate) {
        String nowVersion = dyTableInfoService.getVersionInfo(tabCode, reportDate);//当前报表版本号
        String lastReportDate = "";
        if (currentFormualsFlag.contains("&")) {
            lastReportDate = DyTableUtil.getReportDateLastMonth(reportDate);
        } else if (currentFormualsFlag.contains("|")) {
            lastReportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
        } else if (currentFormualsFlag.contains("`")) {
            lastReportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
        } else if (currentFormualsFlag.contains("€")) {
            lastReportDate = DyTableUtil.getReportDateLastYear(reportDate);
        } else if (currentFormualsFlag.contains("￥")) {
            lastReportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
        } else if (currentFormualsFlag.contains("￠")) {
            lastReportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
        } else if (currentFormualsFlag.contains(":")) {
            lastReportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
        } else if (currentFormualsFlag.contains(";")) {
            lastReportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
        }
        String oldVersion = dyTableInfoService.getVersionInfo(tabCode, lastReportDate);
        if (nowVersion.equals(oldVersion)) {
            return true;
        } else {
            return false;
        }
    }

    public void initPCTCellList(Set<String> tabCodes, List<String> pctCellList) throws Exception {
        String[] tcs;
        for (String tabCode : tabCodes) {
            tcs = tabCode.split("_");
            pctCellList.addAll(dyTableModelPCTService.getDyTableModelPctList(tcs[0], tcs[1]));
        }
    }

    /**
     * 功能描述：异动校验
     *
     * @param brNo
     * @param tabCodes
     * @param reportDate
     * @param checkType  校验频度
     * @param nodeLe
     * @param req
     * @return
     * @author
     * @date 2016年10月21日
     * @modify log:
     */
    @RequestMapping("/toReportCheckForYD")
    @ResponseBody
    public RequestResult toReportCheckForYD(String brNo, String tabCodes, String reportDate, String checkType, int nodeLe, HttpServletRequest req) {
        brNo = dyTableUtil.delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (nodeLe > 1) {
            String[] brNos = brNo.split(",");
            StringBuffer dm = new StringBuffer();
            for (String bn : brNos) {
                if (!sysBmglService.checkIsParant(bn)) {
                    dm.append(doReportCheckForYD(bn, tabCodes, reportDate, checkType, sysUser.getUserId(), sysUser.getUserName()).getData());
                    dm.append("<br>");
                }
            }
            return requestResult(true, dm.toString());
        } else {
            return doReportCheckForYD(brNo, tabCodes, reportDate, checkType, sysUser.getUserId(), sysUser.getUserName());
        }
    }

    /**
     * 功能描述：分机构单独进行异动校验
     *
     * @param brNo
     * @param tabcodes
     * @param reportDate
     * @param checkType
     * @param userId
     * @param userName
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private RequestResult doReportCheckForYD(String brNo, String tabcodes,
                                             String reportDate, String checkType, String userId, String userName) {
        brNo = dyTableUtil.delParentNode(brNo);
        String bmName = null;
        SysBmgl sysBmgl = SysBmglCache.getBmglInfo(brNo);
        String checkArea = sysBmgl.getBmArea();//校验公式适用区域
        String checkBrno = sysBmgl.getBmType();//机构所属类型
        try {
            bmName = "机构 : [ " + SysBmglCache.getBmName(brNo) + " ]";
            List<String> tabCodeList = new ArrayList<String>();
            String[] tabcode = tabcodes.split(",");
            for (int i = 0; i < tabcode.length; i++) {
                tabCodeList.add(tabcode[i]);
            }
            int count = dyReportInfoService.getReportInfoCount(brNo, tabCodeList, reportDate);
            if (count > 0) {
                //rdCheckLogDao.saveRdCheckLog(brNo, reportDate, tabType, cUserName);
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
                List<DyCheckFormulaWave> checkFormulas = new ArrayList<DyCheckFormulaWave>();
                String currentFormualsFlag = null;
                try {
                    this.initCheckFormulasForYD(brNo, reportDate, tabcodes, tabCodes, qntqTabCodes, lmTabCodes, lqTabCodes, lhyTabCodes, lyTabCodes, tqTabCodes, fqTabCodes, shyTabCodes, xhyTabCodes, checkFormulas, userId, checkArea, checkBrno, checkType);
                } catch (Exception e) {
                    if (StrUtil.isNotNull(currentFormualsFlag)) {
                        return requestResult(false, bmName + "     :     解析校验公式时,发生错误.公式如下:[" + currentFormualsFlag + "]");
                    } else {
                        return requestResult(false, bmName + "     :     处理校验公式时,发生异常.");
                    }
                }
                // 百分比单元格坐标集合
                List<String> pctCellLists = new ArrayList<String>();

                Date raw = DateUtil.parse(reportDate, "yyyyMM");
                int month = DateUtil.getMonth(raw);
                if (checkFormulas.size() > 0) {
                    Map<String, String> dataMap = new HashMap<String, String>();
                    // 本期
                    if (tabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataForYD(tabCodes, brNo, reportDate, checkType, "0", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("加载本期数据失败", e);
                            return requestResult(false, bmName + "     :     加载本期数据失败!!");
                        }
                    }
                    if (lmTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataForYD(lmTabCodes, brNo, reportDate, checkType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataForYD() error!", e);
                        }
                    }
                    if (lqTabCodes.size() > 0) {
                        if (month == 3 || month == 6 || month == 9 || month == 12) {
                            try {
                                dyReportInfoService.initDyReportDataForYD(lqTabCodes, brNo, reportDate, checkType, "2", dataMap, pctCellLists);
                            } catch (Exception e) {
                                logger.error("initDyReportDataForYD() error!", e);
                            }
                        }
                    }
                    if (lhyTabCodes.size() > 0) {
                        if (month == 6 || month == 12) {
                            try {
                                dyReportInfoService.initDyReportDataForYD(lhyTabCodes, brNo, reportDate, checkType, "3", dataMap, pctCellLists);
                            } catch (Exception e) {
                                logger.error("initDyReportDataForYD() error!", e);
                            }
                        }
                    }
                    if (qntqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataForYD(qntqTabCodes, brNo, reportDate, checkType, "4", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataForYD() error!", e);
                        }
                    }
                    if (shyTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataForYD(shyTabCodes, brNo, reportDate, checkType, "5", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataForYD() error!", e);
                        }
                    }
                    if (xhyTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataForYD(xhyTabCodes, brNo, reportDate, checkType, "6", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataForYD() error!", e);
                        }
                    }
                    if (tqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataForYD(tqTabCodes, brNo, reportDate, checkType, "7", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataForYD() error!", e);
                        }
                    }
                    if (fqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataForYD(fqTabCodes, brNo, reportDate, checkType, "8", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataForYD() error!", e);
                        }
                    }
                    DyCheckUtil.initCustomTarget(reportDate, dataMap);

                    List<DyCheckResultsWave> checkResults = null;
                    try {
                        checkResults = this.getCheckResultForYD(brNo, reportDate, checkType, checkFormulas, dataMap, pctCellLists);
                    } catch (Exception e) {
                        logger.error("initDyReportDataForYD() error!", e);
                        return requestResult(false, bmName + "     :     进行公式校验时,发生异常!!");
                    }

                    try {
                        dyCheckResultsWaveService.insertCheckResultsForYD(tabcodes, brNo, reportDate, checkType, userId, checkResults, "2", checkArea);
                    } catch (Exception e) {
                        logger.error("initDyReportDataForYD() error!", e);
                        return requestResult(false, bmName + "     :     插入校验结果时,出现异常!!");
                    }
                    return requestResult(true, bmName + "     :     校验完成");

                } else {
                    return requestResult(false, bmName + "     :     没有需要校验的校验公式!!");
                }

            } else {
                return requestResult(false, bmName + "     :     本期数据未导入!!");
            }
        } catch (Exception e) {
            logger.error("doReportCheckForYD() error! brNo:[" + brNo + "]," +
                    "reportDate:[" + reportDate + "]," +
                    "checkType:[" + checkType + "]," +
                    "userId:[" + userId + "]," +
                    "", e);
            return requestResult(false, bmName + "     :     操作异常!!");
        }
    }

    /**
     * 功能描述：计算异动公式结果
     *
     * @param brNo
     * @param reportDate
     * @param checkType
     * @param relationList
     * @param dataMap
     * @param pCellList
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private List<DyCheckResultsWave> getCheckResultForYD(String brNo,
                                                         String reportDate, String checkType,
                                                         List<DyCheckFormulaWave> relationList, Map<String, String> dataMap,
                                                         List<String> pCellList) {
        List<DyCheckResultsWave> checkResults = new ArrayList<DyCheckResultsWave>();
        for (DyCheckFormulaWave dyCheckFormula : relationList) {
            String relation = FormulaEncrypt.getFormulaDecrypt(dyCheckFormula.getCheckFormula());
            StringBuffer results = new StringBuffer();
            StringBuffer isError = new StringBuffer();
            StringBuffer dValue = new StringBuffer();
            try {
                if (dataMap != null) {
                    relation = CommUtil.trimStr(relation);
                    // 指标替换为值
                    String valRelation = dyCheckUtil.returnValRelation(relation, dataMap, pCellList, null);
                    // 处理特殊函数
                    if (valRelation.contains("AND")) {
                        String valRelation1 = valRelation.substring(1, valRelation.indexOf(")AND("));
                        String valRelation2 = valRelation.substring(valRelation.indexOf(")AND(") + 5, valRelation.length() - 1);
                        this.getRelationResultFunForYD(valRelation1, results, valRelation1, "", pCellList, 0, isError);
                        if (isError.toString().equals("0")) {
                            this.getRelationResultFunForYD(valRelation2, results, valRelation2, "", pCellList, 1, isError);
                        }
                    }
                    // 计算差值
                    String dValueFormula = dyCheckFormula.getdValueFormula();
                    dValueFormula = CommUtil.trimStr(dValueFormula);
                    String dValRelation = dyCheckUtil.returnValRelation(dValueFormula, dataMap, pCellList, null);
                    this.getRelationResult(dValRelation, dValue, pCellList);
                }

                DyCheckResultsWave res = new DyCheckResultsWave();
                res.setCheckRisk(dyCheckFormula.getCheckRisk());
                res.setFormula(dyCheckFormula.getElement());
                res.setFormulaMark(dyCheckFormula.getCheckFormulaMark());
                res.setOrganNo(brNo);
                res.setReportDate(reportDate);
                res.setTabType(checkType);
                res.setValue(results.toString());
                res.setdValue(dValue.toString());
                res.setcUser(dyCheckFormula.getcUser());
                res.setReportNoStr(dyCheckFormula.getTabcode());
                res.setIsError(isError.toString());
                res.setFormulaId(dyCheckFormula.getId());
                checkResults.add(res);
            } catch (Exception e) {
                logger.error("getCheckResultForYD() error! brNo:[" + brNo + "]," +
                        "reportDate:[" + reportDate + "]," +
                        "checkType:[" + checkType + "]," +
                        "relationList:[" + JSONArray.toJSONString(relationList) + "]," +
                        "dataMap:[" + JSONObject.toJSONString(dataMap) + "]," +
                        "pCellList:[" + JSONArray.toJSONString(pCellList) + "]," +
                        "", e);
                results.append(" 运算校验公式时,出现异常!!公式:[" + relation + "]<br>" + e.getMessage());
            }

        }
        return checkResults;
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
    private void getRelationResult(String dValRelation, StringBuffer dValue,
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
     * 功能描述：计算异动波动值
     *
     * @param relation
     * @param checkResult
     * @param valRelation
     * @param deviationValue
     * @param pCellList
     * @param flag
     * @param isError
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private void getRelationResultFunForYD(String relation, StringBuffer checkResult, String valRelation, String deviationValue, List<String> pCellList, int flag, StringBuffer isError) {
        DecimalFormat df2 = new DecimalFormat("0.00");// double类型数值精度
        DecimalFormat df4 = new DecimalFormat("0.0000");// double类型数值精度
        double leftValue = 0.0;
        double rightValue = 0.0;
        if ("true".equals(relation)) {
            return;
        }
        // 获取公式中间比较运算符
        String operStr = CommUtil.getOperStr(valRelation);
        if ("".equals(operStr)) {
            checkResult.append("公式中, 不存在中间比较运算符！");
            // checkResult.append("公式：" + relation + " 不存在中间比较运算符！");
            return;
        }

        if (valRelation.contains("#")) {
            checkResult.append("公式中指标 " + valRelation.split("#")[1].substring(0, (valRelation.split("#")[1]).length()) + " 未取到值！");
            // checkResult.append("公式[" + relation + "]中指标 " +
            // valRelation.split("#")[1].substring(0,
            // (valRelation.split("#")[1]).length() - 1)
            // + " 未取到值，校验结果可能有误！");
        } else {
            String[] relations = valRelation.split(DyTableConstants.STR_SPLIT)[0].split(operStr);// 根据比较运算符拆分

            if (relations != null && relations.length > 1) {
                // 百分比单元格保留4位，其他保留2位
                // 小数有时候会出现将0.055变成0.054999999情况，所以这里加上不影响实际四舍五入的0.0001
                leftValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[0]))) + 0.00000001) * 100));
                rightValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[1]))) + 0.00000001) * 100));
                if (!CommUtil.compareValue(leftValue, rightValue, operStr, deviationValue)) {
                    if (StrUtil.isNotNull(isError.toString())) {
                        isError.setLength(0);
                        isError.append("1");
                    } else {
                        isError.append("1");
                    }
                } else {
                    if (StrUtil.isNotNull(isError.toString())) {
                        isError.setLength(0);
                        isError.append("0");
                    } else {
                        isError.append("0");
                    }
                }
                if (isError.toString().equals("1")) {
                    if (flag == 0) {
                        checkResult.append("" + df2.format(rightValue) + "%");
                    } else {
                        checkResult.append("" + df2.format(leftValue) + "%");
                    }
                } else {
                    if (flag == 1) {
                        checkResult.append("" + df2.format(leftValue) + "%");
                    }
                }
            }
        }
    }

    /**
     * 功能描述：获取异动公式
     *
     * @param reportDate    校验日期
     * @param tabcodes      t校验报表
     * @param qntqTabCodes
     * @param lmTabCodes
     * @param lqTabCodes
     * @param lhyTabCodes
     * @param lyTabCodes
     * @param tqTabCodes
     * @param fqTabCodes
     * @param shyTabCodes
     * @param xhyTabCodes
     * @param checkFormulas 校验公式
     * @param userId        校验人
     * @param checkArea     校验区域
     * @param checkBrno     校验机构
     * @param checkType     监测频度（月,季,半年,同期,等）
     * @author
     * @date 2016年9月30日
     * @modify log:
     */
    private void initCheckFormulasForYD(String brNo, String reportDate, String tabcodes, Set<String> tabCodes, Set<String> qntqTabCodes,
                                        Set<String> lmTabCodes, Set<String> lqTabCodes, Set<String> lhyTabCodes, Set<String> lyTabCodes,
                                        Set<String> tqTabCodes, Set<String> fqTabCodes, Set<String> shyTabCodes, Set<String> xhyTabCodes,
                                        List<DyCheckFormulaWave> checkFormulas, String userId, String checkArea, String checkBrno, String checkType) {
        // 获取所校验报表编号相关的所有公式集合
        String[] tabcode = tabcodes.split(",");
        for (int i = 0; i < tabcode.length; i++) {
            String nowVersion = dyTableInfoService.getVersionInfo(tabcode[i], reportDate);
            String lastReportDate = getLastReportDate(reportDate, checkType);
            String lastVersion = dyTableInfoService.getVersionInfo(tabcode[i], lastReportDate);
            List<DyCheckFormulaWave> formulas = dyCheckFormulaWaveService.getCheckFormulaListByTabCodesForYD(tabcode[i], reportDate, nowVersion, lastVersion, userId, checkArea, checkBrno, checkType, brNo);
            for (int j = 0; j < formulas.size(); j++) {
                String formula = FormulaEncrypt.getFormulaDecrypt(formulas.get(j).getCheckFormula());
                String dValueFormula = formulas.get(j).getdValueFormula();
                if ("1".equals(checkType)) {//月
                    formula = formula.replace("$oper$", "&");
                    dValueFormula = dValueFormula.replace("$oper$", "&");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                } else if ("2".equals(checkType)) {//季
                    formula = formula.replace("$oper$", "|");
                    dValueFormula = dValueFormula.replace("$oper$", "|");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                } else if ("3".equals(checkType)) {//半年
                    formula = formula.replace("$oper$", "`");
                    dValueFormula = dValueFormula.replace("$oper$", "`");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                } else if ("4".equals(checkType)) {//去年同期
                    formula = formula.replace("$oper$", "~");
                    dValueFormula = dValueFormula.replace("$oper$", "~");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                } else if ("5".equals(checkType)) {//上半年度
                    formula = formula.replace("$oper$", ":");
                    dValueFormula = dValueFormula.replace("$oper$", ":");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                } else if ("6".equals(checkType)) {//下半年度
                    formula = formula.replace("$oper$", ";");
                    dValueFormula = dValueFormula.replace("$oper$", ";");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                } else if ("7".equals(checkType)) {//前三季度
                    formula = formula.replace("$oper$", "￥");
                    dValueFormula = dValueFormula.replace("$oper$", "￥");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                } else if ("8".equals(checkType)) {//第四季度
                    formula = formula.replace("$oper$", "￠");
                    dValueFormula = dValueFormula.replace("$oper$", "￠");
                    formulas.get(j).setdValueFormula(dValueFormula);
                    formulas.get(j).setCheckFormula(formula);
                    checkFormulas.add(formulas.get(j));
                }
            }
            tabCodes.add(tabcode[i]);
            if ("1".equals(checkType)) {//月
                lmTabCodes.add(tabcode[i]);
            } else if ("2".equals(checkType)) {//季
                lqTabCodes.add(tabcode[i]);
            } else if ("3".equals(checkType)) {//半年
                lhyTabCodes.add(tabcode[i]);
            } else if ("4".equals(checkType)) {//去年同期
                qntqTabCodes.add(tabcode[i]);
            } else if ("5".equals(checkType)) {//上半年度
                shyTabCodes.add(tabcode[i]);
            } else if ("6".equals(checkType)) {//下半年度
                xhyTabCodes.add(tabcode[i]);
            } else if ("7".equals(checkType)) {//前三季度
                tqTabCodes.add(tabcode[i]);
            } else if ("8".equals(checkType)) {//第四季度
                fqTabCodes.add(tabcode[i]);
            }
        }
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
    private String getLastReportDate(String reportDate, String checkType) {
        if ("1".equals(checkType)) {//月
            reportDate = DyTableUtil.getReportDateLastMonth(reportDate);
        } else if ("2".equals(checkType)) {//季
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
        } else if ("3".equals(checkType)) {//半年
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
        } else if ("4".equals(checkType)) {//去年同期
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
        } else if ("5".equals(checkType)) {//上半年度
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
        } else if ("6".equals(checkType)) {//下半年度
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
        } else if ("7".equals(checkType)) {//前三季度
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
        } else if ("8".equals(checkType)) {//第四季度
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
        }
        return reportDate;
    }

    /**
     * 功能描述：根据机构编号,日期获取该机构在当前日期所要上报的报表列表
     *
     * @param brNo
     * @param reportDate
     * @param checkType
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    @RequestMapping("/getDyCheckInfoListByBrNoForYD")
    @ResponseBody
    public Object getDyCheckInfoListByBrNoForYD(String brNo, String reportDate, String checkType) {
        brNo = dyTableUtil.delParentNode(brNo);
        try {
            brNo = dyTableUtil.delParentNode(brNo);
            return dyTableInfoService.getDyTableInfoListByBrNoForYD(brNo, reportDate, checkType);
        } catch (Exception e) {
            logger.error("getDyCheckInfoListByBrNoForYD() error! brNo:[" + brNo + "]," +
                    "reportDate:[" + reportDate + "]," +
                    "checkType:[" + checkType + "]," +
                    "", e);
        }
        return null;
    }

    /**
     * 功能描述：获取异动校验结果(因系统中每家机构一套校验公式,故所有cUser都设为admin)
     *
     * @param tabCode
     * @param reportDate
     * @param brNo
     * @param req
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    @RequestMapping("/getCheckRusultsForYD")
    public ModelAndView getCheckRusultsForYD(String tabCode, String checkType, String reportDate, String brNo, String isdValue, HttpServletRequest req) {
        String sqlStr = "SELECT * FROM RD_TABLE_INFO WHERE TABCODE ='" + tabCode + "' AND '" + reportDate + "'BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) ";
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        DyTableInfoServiceImpl dyTableInfoService1 = (DyTableInfoServiceImpl) dyTableInfoService;

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report_results_yd_range");

        if (StrUtil.isNotNull(dyTableInfoService1.singleString(sqlStr))) {
            String tableId = dyTableInfoService1.singleString(sqlStr);
            DyTableInfo tableInfo = DyTableModelCache.getTableInfo(tableId);
            modelAndView.addObject("tableInfo", tableInfo);
            modelAndView.addObject("reportDate", reportDate);
            modelAndView.addObject("checkType", checkType);
            modelAndView.addObject("brNo", brNo);
            modelAndView.addObject("isdValue", isdValue);
            modelAndView.addObject("cUser", sysUser.getUserId());
        } else {
            modelAndView.addObject("tableInfo", null);
            modelAndView.addObject("reportDate", reportDate);
            modelAndView.addObject("checkType", checkType);
            modelAndView.addObject("brNo", brNo);
            modelAndView.addObject("isdValue", isdValue);
            modelAndView.addObject("cUser", sysUser.getUserId());
        }
        return modelAndView;
    }

    /**
     * 功能描述：导出以表格方式展示异动校验结果的EXCEL
     *
     * @param tabCodes
     * @param brNo
     * @param reportDate
     * @param checkType
     * @param req
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    @RequestMapping("/doExportExcelYD")
    @ResponseBody
    public String doExportExcelYD(String tabCodes, String brNo, String reportDate, String checkType, HttpServletRequest req) {

        try {
            String[] tabCode = tabCodes.split(",");
            for (int k = 0; k < tabCode.length; k++) {
                DyTableInfo tableInfo = dyTableInfoService.getTableInfoByTabCodeAndReportDate(tabCode[k], reportDate);
                File fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + ".xls");
                POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(fi));
                // 读取excel模板
                HSSFWorkbook wb = new HSSFWorkbook(fs);
                HSSFSheet sheet = wb.getSheetAt(0);
                Font fontRed = wb.createFont();
                fontRed.setColor(HSSFColor.RED.index);
                Font fontPink = wb.createFont();
                fontPink.setColor(HSSFColor.PINK.index);
                Font fontBlack = wb.createFont();
                fontBlack.setColor(HSSFColor.BLACK.index);
                HSSFDataFormat format = wb.createDataFormat();

                Map<String, String> tccList = DyTableModelCache.getModelColumnContrastFileNum(tableInfo.getTableId());
                String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
                String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
                Map<String, String> dataMap = dyCheckResultsWaveService.doInitDataMap(tableInfo.getTabCode(), brNo, reportDate, checkType, "0", "admin");
                for (int y = 0; y < rowS.length; y++) {
                    String[] rowInfos = rowS[y].split(DyTableConstants.STR_SPLIT);
                    String[] colInfos = colS[y].split(DyTableConstants.STR_SPLIT);
                    // 加载设置的字符列和字符列
                    List<String> nameCols = null;
                    if (colInfos.length > 2) {
                        nameCols = StrUtil.convertToList(colInfos[2], DyTableConstants.STR_DOT_SPLIT);
                    }
                    for (int i = Integer.valueOf(rowInfos[2]); i <= Integer.valueOf(rowInfos[1]); i++) {// 行
                        for (int j = Integer.valueOf(colInfos[1]); j <= Integer.valueOf(colInfos[0]); j++) {
                            String key = (y + 1) + "_" + j;
                            if (tccList.get(key) != null) {
                                String value = getDataMapValue(tableInfo.getTabCode(), dataMap, i, j, Integer.valueOf(tccList.get(key)));
                                if (StrUtil.isNotNull(value)) {//value格式为 阈值_1(是否超出阈值)_1(敏感关注或数值准确)
                                    String[] isError = value.split("_");
                                    if (isError[1].equals("0")) {//单元格是否错误
                                        ExcelUtil.setCellFontStyle(sheet.getRow(i - 1), (j - 1), format);
                                        ExcelUtil.setCellForYd(sheet.getRow(i - 1), (j - 1), fontBlack, isError[0]);
                                    } else {
                                        if (isError[2].equals("2")) {
                                            ExcelUtil.setCellFontStyle(sheet.getRow(i - 1), (j - 1), format);
                                            ExcelUtil.setCellForYd(sheet.getRow(i - 1), (j - 1), fontPink, isError[0]);
                                        } else {
                                            ExcelUtil.setCellFontStyle(sheet.getRow(i - 1), (j - 1), format);
                                            ExcelUtil.setCellForYd(sheet.getRow(i - 1), (j - 1), fontRed, isError[0]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                File tf = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "_" + SysBmglCache.getBmName(brNo) + "_" + reportDate + "异动监测.xls");
                FileOutputStream out = new FileOutputStream(tf);
                wb.write(out);
                out.flush();
                out.close();
                return tf.getCanonicalPath();
            }
            return null;
        } catch (Exception e) {
            logger.error("doExportExcelYD() error! brNo:[" + brNo + "]," +
                    "reportDate:[" + reportDate + "]," +
                    "tabCodes:[" + tabCodes + "]," +
                    "checkType:[" + checkType + "]," +
                    "", e);
            return null;
        }
    }

    /**
     * 功能描述：从dataMap中筛选值
     *
     * @param tabCode
     * @param dataMap
     * @param i
     * @param j
     * @param fileIndex
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private String getDataMapValue(String tabCode, Map<String, String> dataMap, int i, int j, int fileIndex) {
        if (dataMap == null) {
            return "";
        }
        String key = i + "_" + DyTableUtil.getFieldName("", fileIndex);
        String value = dataMap.get(key);
        if (StrUtil.isNotNull(value)) {
            return value;
        } else {
            return "";
        }
    }

    @RequestMapping("/getDyCheckFormulaRecord")
    @ResponseBody
    public Object getDyCheckFormulaRecord(HttpServletRequest req) {
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<String> sysUserDep = sysUserDepService.getDepByUserId(sysUser.getUserId());
        String brNos = dyTableUtil.delParentNode(StrUtil.convertJoinString(sysUserDep, ","));
        return dyCheckFormulaRecordService.getRecordByBrno(brNos);

    }

    /**
     * 功能描述：异动校验(机构用)
     *
     * @param brNo
     * @param reportDate
     * @param nodeLe
     * @param req
     * @return
     * @author
     * @date 2016年10月21日
     * @modify log:
     */
    @RequestMapping("/toReportCheckCS")
    @ResponseBody
    public RequestResult toReportCheckCS(String brNo, String reportDate, String tabType, String reportRate, int nodeLe, HttpServletRequest req) {
        brNo = dyTableUtil.delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (nodeLe > 1) {
            String[] brNos = brNo.split(",");
            StringBuffer dm = new StringBuffer();
            for (String bn : brNos) {
                if (!sysBmglService.checkIsParant(bn)) {
                    dm.append(doReportCheckCS(bn, reportDate, tabType, reportRate, sysUser.getUserId(), sysUser.getUserName()).getData());
                    dm.append("<br>");
                }
            }
            return requestResult(true, dm.toString());
        } else {
            return doReportCheckCS(brNo, reportDate, tabType, reportRate, sysUser.getUserId(), sysUser.getUserName());
        }
    }

    /**
     * 功能描述：分机构单独进行异动校验
     *
     * @param brNo
     * @param reportDate
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private RequestResult doReportCheckCS(String brNo, String reportDate, String tabType, String reportRate, String cUser, String cUserName) {
        brNo = dyTableUtil.delParentNode(brNo);
        String bmName = null;
        try {
            bmName = "机构 : [ " + SysBmglCache.getBmName(brNo) + " ]";
            // 获取需要校验的所有表编号集合
            List<String> rTabCodesAll = dyTableInfoService.getTabCodeListCS(brNo, reportDate, tabType, true, false);
            if (rTabCodesAll.size() == 0) {
                return requestResult(false, bmName + "     :     没有找到机构需要上报的报表编号集合!");
            }
            int count = dyReportInfoService.getReportInfoCount(brNo, reportDate, tabType, rTabCodesAll);
            if (count > 0) {
                //rdCheckLogDao.saveRdCheckLog(brNo, reportDate, tabType, cUserName);
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
                List<DyCheckFormulaWave> checkFormulas = new ArrayList<DyCheckFormulaWave>();
                String currentFormualsFlag = null;
                try {
                    this.initCheckFormulasCS(rTabCodesAll, reportDate, tabCodes, qntqTabCodes, lmTabCodes, lqTabCodes, lhyTabCodes, lyTabCodes, tqTabCodes, fqTabCodes, shyTabCodes, xhyTabCodes, checkFormulas, currentFormualsFlag, cUser, tabType, reportRate);
                } catch (Exception e) {
                    logger.error("initCheckFormulasCS() error!", e);
                    if (StrUtil.isNotNull(currentFormualsFlag)) {
                        return requestResult(false, bmName + "     :     解析校验公式时,发生错误.公式如下:[" + currentFormualsFlag + "]");
                    } else {
                        return requestResult(false, bmName + "     :     处理校验公式时,发生异常.");
                    }
                }
                // 百分比单元格坐标集合
                List<String> pctCellLists = new ArrayList<String>();

                Date raw = DateUtil.parse(reportDate, "yyyyMM");
                int month = DateUtil.getMonth(raw);
                if (checkFormulas.size() > 0) {
                    Map<String, String> dataMap = new HashMap<String, String>();
                    // 本期
                    if (tabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataCS(tabCodes, brNo, reportDate, tabType, "0", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("加载本期数据失败", e);
                            return requestResult(false, bmName + "     :     加载本期数据失败!!");
                        }
                    }
                    if (lmTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataCS(lmTabCodes, brNo, reportDate, tabType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataCS() error!", e);
                        }
                    }
                    if (lqTabCodes.size() > 0) {
                        if (month == 3 || month == 6 || month == 9 || month == 12) {
                            try {
                                dyReportInfoService.initDyReportDataCS(lqTabCodes, brNo, reportDate, tabType, "2", dataMap, pctCellLists);
                            } catch (Exception e) {
                                logger.error("initDyReportDataCS() error!", e);
                            }
                        }
                    }
                    if (lhyTabCodes.size() > 0) {
                        if (month == 6 || month == 12) {
                            try {
                                dyReportInfoService.initDyReportDataCS(lhyTabCodes, brNo, reportDate, tabType, "3", dataMap, pctCellLists);
                            } catch (Exception e) {
                                logger.error("initDyReportDataCS() error!", e);
                            }
                        }
                    }
                    if (qntqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataCS(qntqTabCodes, brNo, reportDate, tabType, "4", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataCS() error!", e);
                        }
                    }
                    if (shyTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataCS(shyTabCodes, brNo, reportDate, tabType, "5", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataCS() error!", e);
                        }
                    }
                    if (xhyTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataCS(xhyTabCodes, brNo, reportDate, tabType, "6", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (tqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataCS(tqTabCodes, brNo, reportDate, tabType, "7", dataMap, pctCellLists);
                        } catch (Exception e) {
                            logger.error("initDyReportDataCS() error!", e);
                        }
                    }
                    if (fqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataCS(fqTabCodes, brNo, reportDate, tabType, "8", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    DyCheckUtil.initCustomTarget(reportDate, dataMap);

                    List<DyCheckResultsWave> checkResults = null;
                    try {
                        checkResults = this.getCheckResultCS(brNo, reportDate, tabType, checkFormulas, dataMap, pctCellLists);
                    } catch (Exception e) {
                        logger.error("initDyReportDataCS() error!", e);
                        return requestResult(false, bmName + "     :     进行公式校验时,发生异常!!");
                    }

                    try {
                        dyCheckResultsWaveService.insertCheckResultsCS(brNo, reportDate, reportRate, tabType, checkResults);
                    } catch (Exception e) {
                        logger.error("initDyReportDataCS() error!", e);
                        return requestResult(false, bmName + "     :     插入校验结果时,出现异常!!");
                    }
                    return requestResult(true, bmName + "     :     校验完成");

                } else {
                    return requestResult(false, bmName + "     :     没有需要校验的校验公式!!");
                }

            } else {
                return requestResult(false, bmName + "     :     本期数据未导入!!");
            }
        } catch (Exception e) {

            logger.error("doReportCheckCS() error! brNo:[" + brNo + "]," +
                    "reportDate:[" + reportDate + "]," +
                    "tabType:[" + tabType + "]," +
                    "reportRate:[" + reportRate + "]," +
                    "cUser:[" + cUser + "]," +
                    "cUserName:[" + cUserName + "]," +
                    "", e);
            return requestResult(false, bmName + "     :     操作异常!!");
        }
    }


    private void initCheckFormulasCS(List<String> rTabCodesAll, String reportDate, Set<String> tabCodes,
                                     Set<String> qntqTabCodes, Set<String> lmTabCodes, Set<String> lqTabCodes, Set<String> lhyTabCodes,
                                     Set<String> lyTabCodes, Set<String> tqTabCodes, Set<String> fqTabCodes, Set<String> shyTabCodes,
                                     Set<String> xhyTabCodes, List<DyCheckFormulaWave> checkFormulas, String currentFormualsFlag, String cUser, String tabType, String reportRate) {
        for (int i = 0; i < rTabCodesAll.size(); i++) {
            String tabCode = rTabCodesAll.get(i).toString();
            String nowVersion = dyTableInfoService.getVersionInfo(tabCode, reportDate);
            String lastReportDate = getLastReportDate(reportDate, reportRate);
            String lastVersion = dyTableInfoService.getVersionInfo(tabCode, lastReportDate);
            List<DyCheckFormulaWave> formulas = dyCheckFormulaWaveService.getCheckFormulaListByTabCodesCS(tabCode, reportRate, nowVersion, lastVersion);
            for (int j = 0; j < formulas.size(); j++) {
                String formula = FormulaEncrypt.getFormulaDecrypt(formulas.get(j).getCheckFormula());
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
     * @param tabType
     * @param relationList
     * @param dataMap
     * @param pCellList
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    private List<DyCheckResultsWave> getCheckResultCS(String brNo,
                                                      String reportDate, String tabType,
                                                      List<DyCheckFormulaWave> relationList, Map<String, String> dataMap,
                                                      List<String> pCellList) {
        List<DyCheckResultsWave> checkResults = new ArrayList<DyCheckResultsWave>();
        for (DyCheckFormulaWave dyCheckFormula : relationList) {
            String relation = FormulaEncrypt.getFormulaDecrypt(dyCheckFormula.getCheckFormula());
            StringBuffer results = new StringBuffer();
            StringBuffer isError = new StringBuffer();
            StringBuffer dValue = new StringBuffer();
            try {
                if (dataMap != null) {
                    relation = CommUtil.trimStr(relation);
                    // 指标替换为值
                    String valRelation = dyCheckUtil.returnValRelation(relation, dataMap, pCellList, null);
                    // 处理特殊函数
                    if (valRelation.contains("AND")) {
                        String valRelation1 = valRelation.substring(1, valRelation.indexOf(")AND("));
                        String valRelation2 = valRelation.substring(valRelation.indexOf(")AND(") + 5, valRelation.length() - 1);
                        DyCheckUtil.getRelationResultFun(valRelation1, results, valRelation1, "", pCellList, 0);
                        DyCheckUtil.getRelationResultFun(valRelation2, results, valRelation2, "", pCellList, 1);
                    }
                    // 计算差值
                    String dValueFormula = dyCheckFormula.getdValueFormula();
                    dValueFormula = CommUtil.trimStr(dValueFormula);
                    String dValRelation = dyCheckUtil.returnValRelation(dValueFormula, dataMap, pCellList, null);
                    this.getRelationResult(dValRelation, dValue, pCellList);
                }
                if (results.length() > 0) {
                    DyCheckResultsWave res = new DyCheckResultsWave();
                    res.setCheckRisk(dyCheckFormula.getCheckRisk());
                    res.setFormula(dyCheckFormula.getCheckFormula());
                    res.setFormulaMark(dyCheckFormula.getCheckFormulaMark());
                    res.setOrganNo(brNo);
                    res.setReportDate(reportDate);
                    res.setReportRate(dyCheckFormula.getReportRate());
                    res.setTabType(tabType);
                    res.setValue(results.toString());
                    res.setdValue(dValue.toString());
                    res.setcUser(dyCheckFormula.getcUser());
                    res.setReportNoStr(dyCheckFormula.getTabcode());
                    res.setIsError(isError.toString());
                    res.setFormulaId(dyCheckFormula.getId());
                    checkResults.add(res);
                }
            } catch (Exception e) {
                logger.error("getCheckResultCS() error! brNo:[" + brNo + "]," +
                        "reportDate:[" + reportDate + "]," +
                        "tabType:[" + tabType + "]," +
                        "relationList:[" + JSONArray.toJSONString(relationList) + "]," +
                        "pCellList:[" + JSONArray.toJSONString(pCellList) + "]," +
                        "dataMap:[" + JSONObject.toJSONString(dataMap) + "]," +
                        "", e);
                results.append(" 运算校验公式时,出现异常!!公式:[" + relation + "]<br>" + e.getMessage());
            }

        }
        return checkResults;
    }

    @RequestMapping("/getDyReportCheckResults")
    @ResponseBody
    public Object getDyReportCheckResults(String brNo, String reportDate, String reportRate, String tabType,
                                          HttpServletRequest req) {
        brNo = dyTableUtil.delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        String[] brnos = brNo.split(",");
        List<DyCheckResultsWaveHelper> lists = new ArrayList<DyCheckResultsWaveHelper>();
        for (int m = 0; m < brnos.length; m++) {
            List<DyCheckResultsWaveHelper> list = dyCheckResultsWaveService.getReportCheckResults(brNo, reportDate, reportRate, tabType, sysUser.getUserId());
            if (list.size() > 0) {
                lists.addAll(list);
            }
        }
        for (int i = 0; i < lists.size(); i++) {
            lists.get(i).setFormula(FormulaEncrypt.getFormulaDecrypt(lists.get(i).getFormula()));
        }
        return lists;
    }

    @RequestMapping("/toDyReportCheckResultsViewCS")
    public ModelAndView toDyReportCheckResultsViewCS(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyCheckResultsWaveHelper checkResults = dyCheckResultsWaveHelperService.fetchDyCheckResultsForViewCS(id);
        if ("admin".equals(checkResults.getcUser())) {
            checkResults.setcUser("公共库");
        } else if ("repay".equals(checkResults.getcUser())) {
            checkResults.setcUser("补报报表校验");
        } else {
            checkResults.setcUser("个人自定义[" + checkResults.getcUser() + "]");
        }
        checkResults.setFormula(checkResults.getFormula());

        modelAndView.addObject("obj", checkResults);

        return modelAndView;
    }

    @RequestMapping("/getDyReportCheckResultsForSearch")
    @ResponseBody
    public Object getDyReportCheckResultsForSearch(String brNo, String reportDate, String reportRate, String tabType,
                                                   HttpServletRequest req) {
        brNo = dyTableUtil.delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        String[] brnos = brNo.split(",");
        List<DyCheckResultsWaveHelper> lists = new ArrayList<DyCheckResultsWaveHelper>();
        for (int m = 0; m < brnos.length; m++) {
            List<DyCheckResultsWaveHelper> list = dyCheckResultsWaveService.getReportCheckResults(brNo, reportDate, reportRate, tabType, sysUser.getUserId());
            if (list.size() > 0) {
                lists.addAll(list);
            }
        }
        for (int i = 0; i < lists.size(); i++) {
            lists.get(i).setFormula(FormulaEncrypt.getFormulaDecrypt(lists.get(i).getFormula()));
        }
        return lists;
    }

}