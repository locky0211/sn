package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.common.vo.NutzCallbackObject;
import com.efraiser.test.db.model.dy.DyCheckFormula;
import com.efraiser.test.db.model.dy.DyCheckResults;
import com.efraiser.test.db.model.dy.DyCheckResultsHelper;
import com.efraiser.test.db.model.sys.JgyRecord;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.dy.dycheckformula.DyCheckFormulaService;
import com.efraiser.test.db.service.dy.dycheckformula.impl.DyCheckFormulaServiceImpl;
import com.efraiser.test.db.service.dy.dycheckformularecord.DyCheckFormulaRecordService;
import com.efraiser.test.db.service.dy.dychecklog.DyCheckLogService;
import com.efraiser.test.db.service.dy.dychecklog.impl.DyCheckLogServiceImpl;
import com.efraiser.test.db.service.dy.dycheckresults.DyCheckResultsService;
import com.efraiser.test.db.service.dy.dycheckresultshelper.DyCheckResultsHelperService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dyreportsummary.DyReportSummaryService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.service.sys.jgyrecord.JgyRecordService;
import com.efraiser.test.db.service.sys.jgyrecord.impl.JgyRecordServiceImpl;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Sql;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.*;

@Controller
@RequestMapping("dy/check")
public class DyReportCheckController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyReportCheckController.class);

    @Autowired
    private DyCheckFormulaService dyCheckFormulaService;

    @Autowired
    private DyCheckFormulaRecordService dyCheckFormulaRecordService;

    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyTableModelPCTService dyTableModelPCTService;
    @Autowired
    private DyCheckResultsService dyCheckResultsService;
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

    @RequestMapping("/getCheckTableImport")
    @ResponseBody
    public Object getCheckTableImport(String brNo, String reportDate, String tabType) {
        brNo = delParentNode(brNo);

        SysBmglServiceImpl sysBmglService1 = (SysBmglServiceImpl) sysBmglService;
        SysBmgl bmgl = sysBmglService1.fetch(brNo);

        String sqlStr = "SELECT a.tabcode AS field1,a.version_no AS field2,a.tabname AS field3,b.report_id AS field4 FROM(SELECT * FROM DY.DY_TABLE_INFO  WHERE  TAB_TYPE=@tabType AND ('$reportDateLong' BETWEEN START_DATE AND END_DATE) AND TABLE_ID IN (SELECT TABLE_ID FROM DY.DY_TABLE_ORGANS WHERE ORGAN_TYPE=@organType )AND TAB_BR_TYPE=@tabBrType )a LEFT JOIN ( SELECT * FROM DY.DY_REPORT_INFO WHERE REPORT_DATE=@reportDate AND BR_NO=@brNo AND DATA_TYPE='1') b ON a.TABLE_ID = b.TABLE_ID";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("brNo", brNo);
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.vars().set("reportDateLong", CommUtil.getSysDateByReportDate(reportDate));
        return sysBmglService1.getListObjectBySql(sql, NutzCallbackObject.class);
    }

    @RequestMapping("/getCheckReport")
    @ResponseBody
    public Object getCheckReport(String reportDate, String tabType, HttpSession session) {
        SysUser sysUser = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        String sqlStr = "SELECT bm_code as field1,bm_name as field2,GET_CHECK_REPORT_FUNC_1('$tabType','$reportDateLong',bm_type,BM_CATEGORY) as field3,GET_CHECK_REPORT_FUNC_2('$tabType','$reportDate','$reportDateLong',bm_code,bm_type) as field4,GET_CHECK_REPORT_FUNC_3('$tabType','$reportDate','1',bm_code) as field5,GET_CHECK_REPORT_FUNC_3('$tabType','$reportDate','2',bm_code) as field6 FROM SYS_BMGL WHERE BM_TYPE!='' and BM_TYPE IS NOT NULL AND BM_CODE IN (SELECT dep_id FROM SYS_USER_DEP WHERE user_id=@userId )";
        Sql sql = Sqls.create(sqlStr);
        sql.vars().set("tabType", tabType);
        sql.vars().set("reportDate", reportDate);
        sql.vars().set("reportDateLong", CommUtil.getSysDateByReportDate(reportDate));
        sql.params().set("userId", sysUser.getUserId());

        DyCheckLogServiceImpl dyCheckLogService1 = (DyCheckLogServiceImpl) dyCheckLogService;
        return dyCheckLogService1.getListObjectBySql(sql, NutzCallbackObject.class);
    }

    /**
     * 功能描述：获取校验结果
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param checkArea
     * @param formulaType
     * @param req
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    @RequestMapping("/getDyReportCheckResults")
    @ResponseBody
    public Object getDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String checkArea, String formulaType,
                                          HttpServletRequest req) {
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<DyCheckResults> list = dyCheckResultsService.getDyReportCheckResults(brNo, reportDate, tabType, checkRisk, sysUser.getUserId(), checkArea, formulaType);
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setFormula(FormulaEncrypt.getFormulaDecrypt(list.get(i).getFormula()));
        }
        return list;
    }

    /**
     * 功能描述：获取补报校验结果
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param req
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    @RequestMapping("/getDyReportCheckResultsRepay")
    @ResponseBody
    public Object getDyReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk,
                                               HttpServletRequest req) {
        brNo = delParentNode(brNo);
        String cUser = "repay";
        List<DyCheckResults> list = dyCheckResultsService.getDyReportCheckResultsRepay(brNo, reportDate, tabType, checkRisk, cUser);
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setFormula(FormulaEncrypt.getFormulaDecrypt(list.get(i).getFormula()));
        }
        return list;
    }


    @RequestMapping("/testExp")
    @ResponseBody
    public RequestResult testExp(HttpServletRequest req) {
        try {
            DyCheckFormula tt = new DyCheckFormula();
            tt.getCheckRisk();
            tt = null;
            tt.getCheckRisk();
        } catch (Exception e) {
            logger.error("testExp 异常", e);
            return requestResult(false, "testExp 异常");
        }
        return requestResult(false, "testExp 成功");
    }

    /**
     * 功能描述：获取汇总报表校验结果
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
    @RequestMapping("/getSummaryDyReportCheckResults")
    @ResponseBody
    public Object getSummaryDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String formulaType,
                                                 HttpServletRequest req) {
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<DyCheckResultsHelper> list = dyCheckResultsService.getSummaryDyReportCheckResults(brNo, reportDate, tabType, checkRisk, sysUser.getUserId(), formulaType);
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setFormula(FormulaEncrypt.getFormulaDecrypt(list.get(i).getFormula()));
        }
        return list;
    }

    /**
     * 功能描述：获取报表校验结果
     *
     * @param brNo
     * @param pageIndex
     * @param pageSize
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param sortField
     * @param sortOrder
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    @RequestMapping("/getDyReportCheckResultList")
    @ResponseBody
    public Object getDyReportCheckResultList(String brNo, int pageIndex, int pageSize, String reportDate, String tabType,
                                             String checkRisk, String sortField, String sortOrder) {
        brNo = delParentNode(brNo);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        Pager pager = null;
        if (pageSize > 0) {
            DyCheckFormulaServiceImpl dyCheckFormulaServiceImpl = (DyCheckFormulaServiceImpl) dyCheckFormulaService;
            pager = dyCheckFormulaServiceImpl.dao().createPager(pageIndex + 1, pageSize);
        }
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setTotal(dyCheckResultsService.getDyReportCheckResultCount(brNo, reportDate, tabType, checkRisk));
        List<DyCheckResults> list = dyCheckResultsService.getDyReportCheckResultList(brNo, reportDate, tabType, checkRisk, sortField, sortOrder, pager);
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setFormula(FormulaEncrypt.getCheckEnctypt(list.get(i).getFormula()));
        }
        gqpr.setData(list);
        return gqpr;

    }

    /**
     * 查询历史记录信息
     *
     * @param brNo
     * @param pageIndex
     * @param pageSize
     * @param reportDate
     * @param tabType
     * @param sortField
     * @param sortOrder
     * @return
     * @author efraiser.xiaxiaofeng
     */
    @RequestMapping("/getDyReportCheckResultListRecord")
    @ResponseBody
    public Object getDyReportCheckResultListRecord(String brNo, int pageIndex, int pageSize, String reportDate, String tabType,
                                                   String checkRisk, String sortField, String sortOrder) {
        brNo = delParentNode(brNo);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        Pager pager = null;
        if (pageSize > 0) {
            DyCheckFormulaServiceImpl dyCheckFormulaServiceImpl = (DyCheckFormulaServiceImpl) dyCheckFormulaService;
            pager = dyCheckFormulaServiceImpl.dao().createPager(pageIndex + 1, pageSize);
        }
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setTotal(dyCheckResultsService.getDyReportCheckResultCountRecord(brNo, reportDate, tabType, checkRisk));
        gqpr.setData(dyCheckResultsService.getDyReportCheckResultListRecord(brNo, reportDate, tabType, checkRisk, sortField, sortOrder, pager));
        return gqpr;

    }

    /**
     * 功能描述：导出结果
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param formulaType
     * @param checkArea
     * @param record
     * @param req
     * @return
     * @author
     * @date 2016年10月18日
     * @modify log:
     */
    @RequestMapping("/doExportExcel")
    @ResponseBody
    public Object doExportExcel(String brNo, String reportDate, String tabType, String checkRisk, String formulaType, String checkArea,
                                String record, HttpServletRequest req) {
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<DyCheckResults> results;
        if (StrUtil.isNotNull(record)) {
            results = dyCheckResultsService.getDyReportCheckResultsRecord(brNo, reportDate, tabType, checkRisk, sysUser.getUserId(), formulaType, checkArea);// 历史记录导出
        } else {
            results = dyCheckResultsService.getDyReportCheckResults(brNo, reportDate, tabType, checkRisk, sysUser.getUserId(), checkArea, formulaType);
        }
        if (results.size() > 0) {
            String tabTypeName = "";
            if (StrUtil.isNotNull(tabType)) {
                tabTypeName = SysGgzdCache.getSysGgzdName("RD_TABLE_TAB_TYPE", tabType);
            } else {
                tabTypeName = "全部";
            }
            try {
                // excel模板路径
                File fi = new File(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + "预审核校验结果情况表.xls");
                POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(fi));
                // 读取excel模板
                HSSFWorkbook wb = new HSSFWorkbook(fs);
                HSSFSheet sheet = wb.getSheetAt(0);
                HSSFCell cell = null;
                HSSFRow row = null;
                CellStyle csTdC = ExcelUtil.createBorderCellStyle(wb, CellStyle.ALIGN_CENTER);
                CellStyle csTdL = ExcelUtil.createBorderCellStyle(wb, CellStyle.ALIGN_LEFT);
                row = sheet.getRow(2);
                cell = row.getCell(1);
                cell.setCellValue(reportDate);
                row = sheet.getRow(3);
                cell = row.getCell(1);
                cell.setCellValue(tabTypeName);

                for (int i = 0; i < results.size(); i++) {
                    DyCheckResults rs = results.get(i);
                    row = sheet.createRow(i + 6);
                    cell = row.createCell(0);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getOrganNo());

                    cell = row.createCell(1);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getTabType());

                    cell = row.createCell(2);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getReportNoStr());

                    cell = row.createCell(3);
                    cell.setCellStyle(csTdC);
                    cell.setCellValue(rs.getCheckRisk());

                    cell = row.createCell(4);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getFormula());

                    cell = row.createCell(5);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getContent());

                    cell = row.createCell(6);
                    cell.setCellStyle(csTdL);
                    cell.setCellValue(rs.getFormulaMark());

                }

                File tf = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + "_" + reportDate + "_" + tabTypeName + "_" + System.currentTimeMillis() + "_校验结果.xls");
                FileOutputStream out = new FileOutputStream(tf);
                wb.write(out);
                out.close();
                return tf.getCanonicalPath();
            } catch (Exception e) {
                logger.error("doExportExcel() error! brNo:[" + brNo + "]," +
                        "reportDate:[" + reportDate + "]," +
                        "tabType:[" + tabType + "]," +
                        "checkRisk:[" + checkRisk + "]," +
                        "formulaType:[" + formulaType + "]," +
                        "checkArea:[" + checkArea + "]," +
                        "record:[" + record + "]," +
                        "", e);
            }
        }
        return null;
    }


    @RequestMapping("/toDyReportCheckResultsView")
    public ModelAndView toDyReportCheckResultsView(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyCheckResults checkResults = dyCheckResultsService.fetchDyCheckResultsForView(id);
        if ("admin".equals(checkResults.getcUser())) {
            checkResults.setcUser("公共库");
        } else if ("repay".equals(checkResults.getcUser())) {
            checkResults.setcUser("补报报表校验");
        } else {
            checkResults.setcUser("个人自定义[" + checkResults.getcUser() + "]");
        }

        modelAndView.addObject("obj", checkResults);
        return modelAndView;
    }


    @RequestMapping("/toDyReportCheckResultsRecordView")
    public ModelAndView toDyReportCheckResultsRecordView(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyCheckResults checkResults = dyCheckResultsService.fetchDyCheckResultsRecordForView(id);
        if ("admin".equals(checkResults.getcUser())) {
            checkResults.setcUser("公共库");
        } else if ("repay".equals(checkResults.getcUser())) {
            checkResults.setcUser("补报报表校验");
        } else {
            checkResults.setcUser("个人自定义[" + checkResults.getcUser() + "]");
        }
        modelAndView.addObject("obj", checkResults);
        return modelAndView;
    }

    @RequestMapping("/toReportCheck")
    @ResponseBody
    public RequestResult toReportCheck(String formulaType, String brNo, String reportDate, String tabType, String checkArea, boolean isRepay, int nodeLe,
                                       HttpServletRequest req) {
        System.err.println("tabType: " + tabType);
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (nodeLe > 1) {
            String[] brNos = brNo.split(",");
            StringBuffer dm = new StringBuffer();
            for (String bn : brNos) {
                if (!sysBmglService.checkIsParant(bn)) {
                    dm.append(doReportCheck(bn, reportDate, tabType, checkArea, isRepay, sysUser.getUserId(), sysUser.getUserName(), formulaType).getData());
                    dm.append("<br>");
                }
            }
            return requestResult(true, dm.toString());
        } else {
            return doReportCheck(brNo, reportDate, tabType, checkArea, isRepay, sysUser.getUserId(), sysUser.getUserName(), formulaType);
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
    private RequestResult doReportCheck(String brNo, String reportDate, String tabType, String checkArea, boolean isRepay, String cUser, String cUserName, String formulaType) {
        brNo = delParentNode(brNo);
        String bmName = null;
        SysBmgl sysBmgl = SysBmglCache.getBmglInfo(brNo);
        String area = sysBmgl.getBmArea();//校验公式适用区域
        String brnoType = sysBmgl.getBmType();//机构所属类型
        try {
            bmName = "机构 : [ " + SysBmglCache.getBmName(brNo) + " ]";
            // 获取需要校验的所有表编号集合
            List<String> rTabCodesAll = dyTableInfoService.getTabCodeList(brNo, reportDate, tabType, true, isRepay);
            // 获取需要校验的季度表编号集合
            List<String> rTabCodes = dyTableInfoService.getTabCodeList(brNo, reportDate, tabType, false, isRepay);
            if (rTabCodes.size() == 0 || rTabCodesAll.size() == 0) {
                return requestResult(false, bmName + "     :     没有找到机构需要上报的报表编号集合!");
            }
            int count = dyReportInfoService.getReportInfoCount(brNo, reportDate, tabType, rTabCodes);
            if (count > 0) {
                dyCheckLogService.saveDyCheckLog(brNo, reportDate, tabType, cUserName);
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
                List<DyCheckFormula> checkFormulas = new ArrayList<DyCheckFormula>();
                String currentFormualsFlag = null;
                try {
                    this.initCheckFormulas(rTabCodesAll, rTabCodes, reportDate, tabCodes, lastTabCodes, ncTabCodes, qntqTabCodes, tqbbTabCodes, checkFormulas, currentFormualsFlag, cUser, formulaType, checkArea, area, brnoType);
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
                            dyReportInfoService.initDyReportData(tabCodes, brNo, reportDate, tabType, "0", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                            logger.error("加载本期数据失败1", e);
                            return requestResult(false, bmName + "     :     加载本期数据失败!!");
                        }
                    }
                    if (lastTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(lastTabCodes, brNo, reportDate, tabType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (ncTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(ncTabCodes, brNo, reportDate, tabType, "2", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (qntqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(qntqTabCodes, brNo, reportDate, tabType, "3", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (tqbbTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(tqbbTabCodes, brNo, reportDate, tabType, "4", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    DyCheckUtil.initCustomTarget(reportDate, dataMap);

                    List<DyCheckResults> checkResults = null;
                    try {
                        checkResults = this.getCheckResult(brNo, reportDate, tabType, checkFormulas, dataMap, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return requestResult(false, bmName + "     :     进行公式校验时,发生异常!!");
                    }
                    // 如果为补报,则进行补报校验公式校验
                    if (isRepay) {
                        // Map<String, String> dataMapB = new HashMap<String,
                        // String>();

                        // List<RdCheckFormula> checkFormulas =
                        // this.initRePayFormula();
                    }

                    // if (checkResults != null && checkResults.size() > 0) {
                    try {
                        dyCheckResultsService.insertCheckResults(brNo, reportDate, tabType, cUser, checkResults, formulaType, checkArea);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return requestResult(false, bmName + "     :     插入校验结果时,出现异常!!");
                    }
                    // }
                    if (jgyRecordService.checkJqy(cUser)) {//监管员记录

                        JgyRecordServiceImpl jgyRecordServiceImpl = (JgyRecordServiceImpl) jgyRecordService;
                        JgyRecord jgyRecord = jgyRecordServiceImpl.fetchx(cUser, DateUtil.getNow("yyyyMM"));
                        int validateCount = Integer.parseInt(jgyRecord.getValidateCount());
                        jgyRecord.setValidateCount(String.valueOf(validateCount + 1));
                        jgyRecordServiceImpl.dao().update(jgyRecord);
                    }
                    return requestResult(true, bmName + "     :     校验完成");

                } else {
                    return requestResult(false, bmName + "     :     没有需要校验的校验公式!!");
                }

            } else {
                return requestResult(false, bmName + "     :     本期数据未导入!!");
            }
        } catch (Exception e) {
            logger.error("doReportCheck() error! brNo:[" + brNo + "]," +
                    "reportDate:[" + reportDate + "]," +
                    "tabType:[" + tabType + "]," +
                    "checkArea:[" + checkArea + "]," +
                    "isRepay:[" + isRepay + "]," +
                    "cUser:[" + cUser + "]," +
                    "cUserName:[" + cUserName + "]," +
                    "formulaType:[" + formulaType + "]," +
                    "", e);
            return requestResult(false, bmName + "     :     操作异常!!");
        }
    }

    /**
     * 初始化装载校验公式
     *
     * @param checkFormulas checkArea 校验范围(区分表内校验与表外校验)
     *                      area 校验区域(校验的公式适用于区域,例：山东省,江苏省)
     */
    private void initCheckFormulas(List<String> rTabCodesAll, List<String> rTabCodes, String reportDate, Set<String> tabCodes, Set<String> lastTabCodes, Set<String> ncTabCodes,
                                   Set<String> qntqTabCodes, Set<String> tqbbTabCodes, List<DyCheckFormula> checkFormulas, String currentFormualsFlag, String cUser, String formulaType, String checkArea, String area, String brnoType) throws Exception {
        // 获取月本季度报表编号相关的所有公式集合
        List<DyCheckFormula> cfList = dyCheckFormulaService.getCheckFormulaListByTabCodes(rTabCodes, reportDate, cUser, formulaType, checkArea, area, brnoType);
        // 筛选公式
        for (DyCheckFormula cFormula : cfList) {
            if (cFormula.getType().equals("1")) {
                currentFormualsFlag = FormulaEncrypt.getFormulaDecrypt(cFormula.getCheckFormula());
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


    private void initPCTCellList(Set<String> tabCodes, List<String> pctCellList) throws Exception {
        String[] tcs;
        for (String tabCode : tabCodes) {
            tcs = tabCode.split("_");
            pctCellList.addAll(dyTableModelPCTService.getDyTableModelPctList(tcs[0], tcs[1]));
        }
    }

    /**
     * 根据校验公式校验数据，返回校验结果
     *
     * @param relationList 校验公式
     * @param dataMap      指标数据
     * @param pCellList    百分比单元格
     * @return
     */
    private List<DyCheckResults> getCheckResult(String brNo, String reportDate, String tabType, List<DyCheckFormula> relationList, Map<String, String> dataMap, List<String> pCellList) {
        List<DyCheckResults> checkResults = new ArrayList<DyCheckResults>();
        for (DyCheckFormula dyCheckFormula : relationList) {
            String relation = FormulaEncrypt.getFormulaDecrypt(dyCheckFormula.getCheckFormula());

            StringBuffer results = new StringBuffer();
            try {

                if (dataMap != null) {
                    relation = CommUtil.trimStr(relation);
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
	
					/*if (valRelation.contains("AND")) {
						valRelation = RdCheckUtil.andOr(valRelation, "AND");
					}*/

                    if (relation.toUpperCase().startsWith("IF(")
                            || (relation.toUpperCase().contains("IF(") && !"SUM".equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 3, relation.toUpperCase().indexOf("IF("))) && !"COUNT"
                            .equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 5, relation.toUpperCase().indexOf("IF("))))) {// 复杂公式（含if...else...）
                        DyCheckUtil.getComplexRelationResult(relation, results, valRelation, dyCheckFormula.getDeviationValue(), pCellList);
                    } else {// 普通公式校验

                        if (valRelation.contains("AND")) {

                            String valRelation1 = valRelation.substring(1, valRelation.indexOf(")AND("));
                            String valRelation2 = valRelation.substring(valRelation.indexOf(")AND(") + 5, valRelation.length() - 1);
                            DyCheckUtil.getRelationResultFun(valRelation1, results, valRelation1, dyCheckFormula.getDeviationValue(), pCellList, 0);
                            DyCheckUtil.getRelationResultFun(valRelation2, results, valRelation2, dyCheckFormula.getDeviationValue(), pCellList, 1);

                        } else {

                            DyCheckUtil.getRelationResult(relation, results, valRelation, dyCheckFormula.getDeviationValue(), pCellList);

                        }

                    }

                }
            } catch (Exception e) {
                e.printStackTrace();
                results.append(" 运算校验公式时,出现异常!!公式:[" + relation + "]<br>" + e.getMessage());

            }

            if (results.length() > 0) {
                DyCheckResults res = new DyCheckResults();
                res.setCheckRisk(dyCheckFormula.getCheckRisk());
                res.setFormula(dyCheckFormula.getCheckFormula());
                res.setFormulaMark(dyCheckFormula.getCheckFormulaMark());
                res.setOrganNo(brNo);
                res.setReportDate(reportDate);
                res.setTabType(tabType);
                res.setContent(results.toString());
                res.setcUser(dyCheckFormula.getcUser());
                res.setReportNoStr(dyCheckFormula.getTabcode());
                checkResults.add(res);
            }

        }
        return checkResults;
    }

    /**
     * 功能描述：汇总报表校验
     *
     * @param formulaType
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param isRepay
     * @param nodeLe
     * @param req
     * @return
     * @author
     * @date 2016年1月31日
     * @modify log:
     */
    @RequestMapping("/toSummaryReportCheck")
    @ResponseBody
    public Object toSummaryReportCheck(String formulaType, String brNo, String reportDate, String tabType, boolean isRepay, int nodeLe, String checkArea,
                                       HttpServletRequest req) {
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (nodeLe > 1) {
            return doSummaryReportCheck(brNo, reportDate, tabType, checkArea, isRepay, sysUser.getUserId(), sysUser.getUserName(), formulaType);
        } else {
            return doSummaryReportCheck(brNo, reportDate, tabType, checkArea, isRepay, sysUser.getUserId(), sysUser.getUserName(), formulaType);
        }
    }

    /**
     * 功能描述：
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param isRepay
     * @param cUser
     * @param cUserName
     * @param formulaType
     * @return
     * @author
     * @date 2016年1月31日
     * @modify log:
     */
    private RequestResult doSummaryReportCheck(String brNo, String reportDate, String tabType, String checkArea, boolean isRepay, String cUser, String cUserName, String formulaType) {
        String bmName = null;
        String name = "";
        String area = "";
        String bmCode[] = brNo.split(",");
        String Area[];
        for (int i = 0; i < bmCode.length; i++) {
            if (i == bmCode.length - 1) {
                name += SysBmglCache.getBmName(bmCode[i]);
                Area = SysBmglCache.getBmglInfo(bmCode[i]).getBmArea().split("_");
                area += "'" + Area[0] + "'";
            } else {
                name += "" + SysBmglCache.getBmName(bmCode[i]) + ",";
                Area = SysBmglCache.getBmglInfo(bmCode[i]).getBmArea().split("_");
                area += "'" + Area[0] + "',";
            }
        }
        try {
            bmName = "机构 : [ " + name + " ]";
            // 获取需要校验的所有表编号集合
            List<String> rTabCodesAll = dyReportSummaryService.getTabCodeList(brNo, reportDate, tabType, true, isRepay);
            // 获取需要校验的季度表编号集合
            List<String> rTabCodes = dyReportSummaryService.getTabCodeList(brNo, reportDate, tabType, false, isRepay);
            if (rTabCodes.size() == 0 || rTabCodesAll.size() == 0) {
                return requestResult(false, bmName + "     :     没有找到机构需要上报的报表编号集合!");
            }
            int count = dyReportSummaryService.getReportInfoCount(brNo, reportDate, tabType, rTabCodes);
            if (count > 0) {
                dyCheckLogService.saveDyCheckLog(brNo, reportDate, tabType, cUserName);
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
                List<DyCheckFormula> checkFormulas = new ArrayList<DyCheckFormula>();
                String currentFormualsFlag = null;
                try {
                    this.initCheckFormulasSummary(rTabCodesAll, rTabCodes, reportDate, tabCodes, lastTabCodes, ncTabCodes, qntqTabCodes, tqbbTabCodes, checkFormulas, currentFormualsFlag, cUser, formulaType, area);
                } catch (Exception e) {
                    if (StrUtil.isNotNull(currentFormualsFlag)) {
                        return requestResult(false, bmName + "     :     解析校验公式时,发生错误.公式如下:[" + currentFormualsFlag + "]");
                    } else {
                        return requestResult(false, bmName + "     :     处理校验公式时,发生异常.");
                    }
                }
                // 百分比单元格坐标集合
                List<String> pctCellLists = new ArrayList<String>();

                if (checkFormulas.size() > 0) {
                    Map<String, String> dataMap = new HashMap<String, String>();
                    // 本期
                    if (tabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataOfSummary(tabCodes, brNo, reportDate, tabType, "0", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                            logger.error("加载本期数据失败2", e);
                            return requestResult(false, bmName + "     :     加载本期数据失败!!");
                        }
                    }
                    if (lastTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataOfSummary(lastTabCodes, brNo, reportDate, tabType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (ncTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataOfSummary(ncTabCodes, brNo, reportDate, tabType, "2", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (qntqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataOfSummary(qntqTabCodes, brNo, reportDate, tabType, "3", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (tqbbTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportDataOfSummary(tqbbTabCodes, brNo, reportDate, tabType, "4", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    DyCheckUtil.initCustomTarget(reportDate, dataMap);

                    List<DyCheckResults> checkResults = null;
                    try {
                        checkResults = this.getCheckResult(brNo, reportDate, tabType, checkFormulas, dataMap, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return requestResult(false, bmName + "     :     进行公式校验时,发生异常!!");
                    }
                    // 如果为补报,则进行补报校验公式校验
                    if (isRepay) {
                        // Map<String, String> dataMapB = new HashMap<String,
                        // String>();

                        // List<RdCheckFormula> checkFormulas =
                        // this.initRePayFormula();
                    }

                    // if (checkResults != null && checkResults.size() > 0) {
                    try {
                        dyCheckResultsService.insertCheckResults(brNo, reportDate, tabType, cUser, checkResults, formulaType + "2", checkArea);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return requestResult(false, bmName + "     :     插入校验结果时,出现异常!!");
                    }
                    // }
                    return requestResult(true, bmName + "     :     校验完成");

                } else {
                    return requestResult(false, bmName + "     :     没有需要校验的校验公式!!");
                }

            } else {
                return requestResult(false, bmName + "     :     本期数据未导入!!");
            }
        } catch (Exception e) {
            logger.error("doSummaryReportCheck() error! brNo:[" + brNo + "]," +
                    "reportDate:[" + reportDate + "]," +
                    "tabType:[" + tabType + "]," +
                    "checkArea:[" + checkArea + "]," +
                    "isRepay:[" + isRepay + "]," +
                    "cUser:[" + cUser + "]," +
                    "cUserName:[" + cUserName + "]," +
                    "formulaType:[" + formulaType + "]," +
                    "", e);
            return requestResult(false, bmName + "     :     操作异常!!");
        }
    }

    /**
     * 功能描述：去除父节点
     *
     * @param brNos
     * @return
     * @author
     * @date 2016年1月31日
     * @modify log:
     */
    private String delParentNode(String brNos) {
        String brNo = "";
        String brnos[] = brNos.split(",");
        for (int i = 0; i < brnos.length; i++) {
            int num = dyReportInfoService.CheckParent(brnos[i]);
            if (num == 0) {
                if (i == brnos.length - 1) {
                    brNo += "" + brnos[i] + "";
                } else {
                    brNo += "" + brnos[i] + ",";
                }
            }

        }

        return brNo;

    }

    /**
     * 功能描述：补报校验
     *
     * @param formulaType
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param isRepay
     * @param nodeLe
     * @param cUser
     * @param req
     * @return
     * @author
     * @date 2016年2月16日
     * @modify log:
     */
    @RequestMapping("/toReportCheckRepay")
    @ResponseBody
    public Object toReportCheckRepay(String formulaType, String brNo, String reportDate, String tabType, boolean isRepay, int nodeLe, String cUser, String checkArea,
                                     HttpServletRequest req) {
        brNo = delParentNode(brNo);
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (nodeLe > 1) {
            String[] brNos = brNo.split(",");
            StringBuffer dm = new StringBuffer();
            for (String bn : brNos) {
                if (!sysBmglService.checkIsParant(bn)) {
                    dm.append(doReportCheckRepay(bn, reportDate, tabType, checkArea, isRepay, sysUser.getUserId(), sysUser.getUserName(), formulaType).getData());
                    dm.append("<br>");
                }
            }
            return requestResult(true, dm.toString());
        } else {
            return doReportCheckRepay(brNo, reportDate, tabType, checkArea, isRepay, sysUser.getUserId(), sysUser.getUserName(), formulaType);
        }
    }

    private RequestResult doReportCheckRepay(String brNo, String reportDate, String tabType, String checkArea, boolean isRepay, String cUser, String cUserName, String formulaType) {
        brNo = delParentNode(brNo);
        String bmName = null;
        SysBmgl sysBmgl = SysBmglCache.getBmglInfo(brNo);
        String area = sysBmgl.getBmArea();
        try {
            bmName = "机构 : [ " + SysBmglCache.getBmName(brNo) + " ]";
            // 获取需要校验的所有表编号集合
            List<String> rTabCodesAll = dyTableInfoService.getTabCodeListRepay(brNo, reportDate, tabType, true, isRepay);
            // 获取需要校验的季度表编号集合
            List<String> rTabCodes = dyTableInfoService.getTabCodeListRepay(brNo, reportDate, tabType, false, isRepay);
            if (rTabCodes.size() == 0 || rTabCodesAll.size() == 0) {
                return requestResult(false, bmName + "     :     没有找到机构需要上报的报表编号集合!");
            }
            int count = dyReportInfoService.getReportInfoCount(brNo, reportDate, tabType, rTabCodes);
            if (count > 0) {
                dyCheckLogService.saveDyCheckLog(brNo, reportDate, tabType, cUserName);
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
                List<DyCheckFormula> checkFormulas = new ArrayList<DyCheckFormula>();
                String currentFormualsFlag = null;
                try {
                    this.initCheckFormulasRepay(rTabCodesAll, rTabCodes, reportDate, tabCodes, lastTabCodes, ncTabCodes, qntqTabCodes, tqbbTabCodes, checkFormulas, currentFormualsFlag, cUser, formulaType, area);
                } catch (Exception e) {
                    if (StrUtil.isNotNull(currentFormualsFlag)) {
                        return requestResult(false, bmName + "     :     解析校验公式时,发生错误.公式如下:[" + currentFormualsFlag + "]");
                    } else {
                        return requestResult(false, bmName + "     :     处理校验公式时,发生异常.");
                    }
                }
                // 百分比单元格坐标集合
                List<String> pctCellLists = new ArrayList<String>();

                if (checkFormulas.size() > 0) {
                    Map<String, String> dataMap = new HashMap<String, String>();
                    // 本期
                    if (tabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(tabCodes, brNo, reportDate, tabType, "0", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                            return requestResult(false, bmName + "     :     加载本期数据失败!!");
                        }
                    }
                    if (lastTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(lastTabCodes, brNo, reportDate, tabType, "1", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (ncTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(ncTabCodes, brNo, reportDate, tabType, "2", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (qntqTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(qntqTabCodes, brNo, reportDate, tabType, "3", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if (tqbbTabCodes.size() > 0) {
                        try {
                            dyReportInfoService.initDyReportData(tqbbTabCodes, brNo, reportDate, tabType, "4", dataMap, pctCellLists);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    DyCheckUtil.initCustomTarget(reportDate, dataMap);

                    List<DyCheckResults> checkResults = null;
                    try {
                        checkResults = this.getCheckResult(brNo, reportDate, tabType, checkFormulas, dataMap, pctCellLists);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return requestResult(false, bmName + "     :     进行公式校验时,发生异常!!");
                    }

                    try {
                        dyCheckResultsService.insertCheckResults(brNo, reportDate, tabType, cUser, checkResults, formulaType, checkArea);
                    } catch (Exception e) {
                        e.printStackTrace();
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
            logger.error("doReportCheckRepay() error! brNo:[" + brNo + "]," +
                    "reportDate:[" + reportDate + "]," +
                    "tabType:[" + tabType + "]," +
                    "checkArea:[" + checkArea + "]," +
                    "isRepay:[" + isRepay + "]," +
                    "cUser:[" + cUser + "]," +
                    "cUserName:[" + cUserName + "]," +
                    "formulaType:[" + formulaType + "]," +
                    "", e);
            return requestResult(false, bmName + "     :     操作异常!!");
        }
    }

    /**
     * 初始化装载补报校验公式
     *
     * @param checkFormulas
     */
    private void initCheckFormulasRepay(List<String> rTabCodesAll, List<String> rTabCodes, String reportDate, Set<String> tabCodes, Set<String> lastTabCodes, Set<String> ncTabCodes,
                                        Set<String> qntqTabCodes, Set<String> tqbbTabCodes, List<DyCheckFormula> checkFormulas, String currentFormualsFlag, String cUser, String formulaType, String area) throws Exception {
        // 获取月本季度报表编号相关的所有公式集合
        List<DyCheckFormula> cfList = dyCheckFormulaService.getCheckFormulaListByTabCodesRepay(rTabCodes, reportDate, cUser, formulaType, area);
        // 筛选公式
        for (DyCheckFormula cFormula : cfList) {
            currentFormualsFlag = FormulaEncrypt.getFormulaDecrypt(cFormula.getCheckFormula());
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

    /**
     * 汇总校验初始化装载校验公式
     *
     * @param checkFormulas
     */
    private void initCheckFormulasSummary(List<String> rTabCodesAll, List<String> rTabCodes, String reportDate, Set<String> tabCodes, Set<String> lastTabCodes, Set<String> ncTabCodes,
                                          Set<String> qntqTabCodes, Set<String> tqbbTabCodes, List<DyCheckFormula> checkFormulas, String currentFormualsFlag, String cUser, String formulaType, String area) throws Exception {
        // 获取月本季度报表编号相关的所有公式集合
        List<DyCheckFormula> cfList = dyCheckFormulaService.getCheckFormulaListByTabCodesSummary(rTabCodes, reportDate, cUser, formulaType, area);
        // 筛选公式
        for (DyCheckFormula cFormula : cfList) {
            currentFormualsFlag = FormulaEncrypt.getFormulaDecrypt(cFormula.getCheckFormula());
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

    /**
     * 功能描述：查询校验结果，区分表内表外及普通异动
     *
     * @param brNo
     * @param pageIndex
     * @param pageSize
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param sortField
     * @param sortOrder
     * @return
     * @author
     * @date 2016年3月4日
     * @modify log:
     */
    @RequestMapping("/getDyReportCheckResultListArea")
    @ResponseBody
    public Object getDyReportCheckResultListArea( String brNo, int pageIndex, int pageSize, String reportDate, String tabType,
                                                  String checkRisk,String sortField, String sortOrder,  String formulaType,String checkArea, HttpServletRequest req) {
        brNo = delParentNode(brNo);
        //SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        if (StrUtil.isNull(reportDate)) {
            reportDate = DateUtil.format(DateUtil.addMonth(new Date(), -1), "yyyyMM");
        }
        Pager pager = null;
        if (pageSize > 0) {
            DyCheckFormulaServiceImpl dyCheckFormulaServiceImpl = (DyCheckFormulaServiceImpl)dyCheckFormulaService;

            pager = dyCheckFormulaServiceImpl.dao().createPager(pageIndex + 1, pageSize);
        }
        GridQueryPageResult gqpr = new GridQueryPageResult();

        //获取报表校验结果，分表内外
        gqpr.setTotal(dyCheckResultsService.getDyReportCheckResultCountArea(brNo, reportDate, tabType, checkRisk, formulaType, checkArea));
        gqpr.setData(dyCheckResultsService.getDyReportCheckResultListArea(brNo, reportDate, tabType, checkRisk, sortField, sortOrder, pager, formulaType, checkArea));
        return gqpr;

    }

    @RequestMapping("/getDyCheckFormulaRecord")
    @ResponseBody
    public Object getDyCheckFormulaRecord(HttpServletRequest req) {
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<String> sysUserDep = sysUserDepService.getDepByUserId(sysUser.getUserId());
        String brNos = dyTableUtil.delParentNode(StrUtil.convertJoinString(sysUserDep, ","));
        return dyCheckFormulaRecordService.getRecordByBrno(brNos);

    }
}

	

