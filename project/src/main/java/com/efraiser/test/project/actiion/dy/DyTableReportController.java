package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONArray;
import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.db.model.dy.*;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.dy.dyreportdata.DyReportDataService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dyreportinfo.impl.DyReportInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablecolumncontrast.DyTableColumnContrastService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.impl.DyTableInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.service.dy.dyvaluechangerecord.DyValueChangeRecordService;
import com.efraiser.test.db.service.dy.dyvaluechangerecord.impl.DyValueChangeRecordServiceImpl;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import com.efraiser.test.project.vo.DoSaveTableReportData;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.nutz.lang.Files;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("dy/table/report")
public class DyTableReportController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyTableReportController.class);

    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyReportDataService dyReportDataService;
    @Autowired
    private DyTableModelPCTService dyTableModelPCTService;
    @Autowired
    private DyTableModelService dyTableModelService;
    @Autowired
    private DyTableColumnContrastService dyTableColumnContrastService;
    @Autowired
    private SysBmglService sysBmglService;
    @Autowired
    private LocalConfig localConfig;
    @Autowired
    private DyValueChangeRecordService dyValueChangeRecordService;

    /**
     * 跳转数据页面
     *
     * @param tableId
     * @param reportId
     * @param req
     * @author efraiser.xiaxiaofeng
     */
    @RequestMapping("/toDyTableReport")
    public ModelAndView toDyTableReport(String tableId, String reportId, HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report");

        DyTableInfo tableInfo = DyTableModelCache.getTableInfo(tableId);

        DyReportInfoServiceImpl dyReportInfoService1 = (DyReportInfoServiceImpl) dyReportInfoService;
        DyReportInfo reportInfo = dyReportInfoService1.fetch(reportId);
        if (reportInfo != null) {
            //int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportId", reportId);
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            //去掉了(lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))条件
            if ((userRoles.contains("5") || userRoles.contains("admin")) && "1".equals(localConfig.getProperties().getPageEditFlag())) {
                bjFlag = true;
            }
/*			if ((userRoles.contains("5") || userRoles.contains("admin")) && "1".equals(pageEditFlag) && (lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))) {
				bjFlag = true;
			}
*/
            req.setAttribute("bjFlag", bjFlag);
        }

        return modelAndView;
    }

    /**
     * 功能描述：吴江跨系统校验，跳转数据页面:错误定位,参数不同与上面一个方法
     *
     * @param tabCodeVersion
     * @param brNo
     * @param reportDate
     * @param checkFormula
     * @param req
     * @author
     * @date 2017年7月14日
     * @modify log:
     */
    @RequestMapping("/toDyTableReportForEdit_WJ")
    public ModelAndView toDyTableReportForEdit_WJ(String tabCodeVersion, String brNo, String reportDate, String checkFormula, String typeStr, String tabType,
                                                  HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report");

        String[] t = tabCodeVersion.split("_");
        //输出对应频度的日期
        if ("_".equals(typeStr)) {                      //本期
            reportDate = reportDate;
        } else if ("$".equals(typeStr)) {             //上期
            reportDate = DyTableUtil.getLastReportDateWJ(reportDate, tabType);
        } else if ("@".equals(typeStr)) {              //年初
            reportDate = DyTableUtil.getReportDateEndOfYearWJ(reportDate);
        } else if ("~".equals(typeStr)) {              //去年同期
            reportDate = DyTableUtil.getLastYearReportDateWJ(reportDate);
        }

        DyTableInfo tableInfo = dyTableInfoService.getDyTableInfoByReportDate(t[0], reportDate, t[1]);
        DyReportInfo reportInfo = dyReportInfoService.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo != null) {
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportId", reportInfo.getReportId());
            int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if (userRoles.contains("5") || userRoles.contains("admin") && "1".equals(localConfig.getProperties().getPageEditFlag()) && (lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))) {
                bjFlag = true;
            }
            req.setAttribute("bjFlag", bjFlag);
            // 错误校验公式定位功能
            if (StrUtil.isNotNull(checkFormula)) {
                String tabCode = tableInfo.getTabCode();
                //String tarVar = "_";
                if ("true".equals(t[1])) {
                    //tarVar = "^";
                    typeStr = "^";
                }
                StringBuilder tarStr = new StringBuilder();
                List<String> tarList = DyCheckUtil.getTarListByFormula(checkFormula);
                for (int i = 0; i < tarList.size() - 1; i++) {
                    for (int j = tarList.size() - 1; j > i; j--) {
                        if (tarList.get(j).equals(tarList.get(i))) {
                            tarList.remove(j);
                        }
                    }
                }
                for (String tar : tarList) {
                    if (tar.startsWith("[D_" + tabCode + typeStr)) {
                        String tarM = tar.replace(typeStr, "_");
                        String tarN = tarM.substring(3, tarM.length() - 1);
                        tarStr.append(tarN);
                        tarStr.append(";");
                        checkFormula = checkFormula.replace(tar, "<a style=\"color:blue\" href=\"#" + tarN + "_TD\">" + tar + "</a>");
                    }
                }
                req.setAttribute("checkFormula", checkFormula);
                req.setAttribute("tarStr", tarStr.toString());
            }
        }

        return modelAndView;
    }

    /**
     * 跳转数据页面:错误定位,参数不同与上面一个方法
     *
     * @param tabCodeVersion
     * @param brNo
     * @param reportDate
     * @param req
     */
    @RequestMapping("/toDyTableReportForEdit")
    public ModelAndView toDyTableReportForEdit(String tabCodeVersion, String brNo, String reportDate, String checkFormula,
                                               HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report");

        String[] t = tabCodeVersion.split("_");
        DyTableInfo tableInfo = dyTableInfoService.getDyTableInfoByReportDate(t[0], reportDate, t[1]);
        DyReportInfo reportInfo = dyReportInfoService.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo != null) {
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportId", reportInfo.getReportId());
            int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if (userRoles.contains("5") || userRoles.contains("admin") && "1".equals(localConfig.getProperties().getPageEditFlag()) && (lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))) {
                bjFlag = true;
            }
            req.setAttribute("bjFlag", bjFlag);
            // 错误校验公式定位功能
            if (StrUtil.isNotNull(checkFormula)) {
                String tabCode = tableInfo.getTabCode();
                String tarVar = "_";
                if ("true".equals(t[1])) {
                    tarVar = "^";
                }
                StringBuilder tarStr = new StringBuilder();
                List<String> tarList = DyCheckUtil.getTarListByFormula(checkFormula);
                for (int i = 0; i < tarList.size() - 1; i++) {
                    for (int j = tarList.size() - 1; j > i; j--) {
                        if (tarList.get(j).equals(tarList.get(i))) {
                            tarList.remove(j);
                        }
                    }
                }
                for (String tar : tarList) {
                    if (tar.startsWith(tabCode + tarVar)) {
                        String tarN = tar.replace("^", "_");
                        tarStr.append(tarN);
                        tarStr.append(";");
                        checkFormula = checkFormula.replace(tar, "<a style=\"color:blue\" href=\"#" + tarN + "_TD\">" + tar + "</a>");
                    }
                }
                req.setAttribute("checkFormula", checkFormula);
                req.setAttribute("tarStr", tarStr.toString());
            }
        }

        return modelAndView;
    }


    /**
     * 跳转数据页面:错误定位,参数不同与上面一个方法
     * (苏州局)
     *
     * @param req
     */
    @RequestMapping("/toDyTableReportForEditSZ")
    public ModelAndView toDyTableReportForEditSZ(String tabCodeVersion, String brNo, String reportDate, String checkFormula,
                                                 HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report_sz");

        String[] t = tabCodeVersion.split("_");
        DyTableInfo tableInfo = dyTableInfoService.getDyTableInfoByReportDate(t[0], reportDate, t[1]);
        DyReportInfo reportInfo = dyReportInfoService.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo != null) {
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportId", reportInfo.getReportId());
            int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if (userRoles.contains("5") || userRoles.contains("admin") && "1".equals(localConfig.getProperties().getPageEditFlag()) && (lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))) {
                bjFlag = true;
            }
            req.setAttribute("bjFlag", bjFlag);
            // 错误校验公式定位功能
            if (StrUtil.isNotNull(checkFormula)) {
                String tabCode = tableInfo.getTabCode();
                String tarVar = "_";
                if ("true".equals(t[1])) {
                    tarVar = "^";
                }
                StringBuilder tarStr = new StringBuilder();
                List<String> tarList = DyCheckUtil.getTarListByFormula(checkFormula);
                for (int i = 0; i < tarList.size() - 1; i++) {
                    for (int j = tarList.size() - 1; j > i; j--) {
                        if (tarList.get(j).equals(tarList.get(i))) {
                            tarList.remove(j);
                        }
                    }
                }
                for (String tar : tarList) {
                    if (tar.startsWith(tabCode + tarVar)) {
                        String tarN = tar.replace("^", "_");
                        tarStr.append(tarN);
                        tarStr.append(";");
                        checkFormula = checkFormula.replace(tar, "<a style=\"color:blue\" href=\"#" + tarN + "_TD\">" + tar + "</a>");
                    }
                }
                req.setAttribute("checkFormula", checkFormula);
                req.setAttribute("tarStr", tarStr.toString());
            }
        }
        return modelAndView;
    }

    /**
     * 跳转数据页面(异动):错误定位,参数不同与上面一个方法
     *
     * @param req
     * @author efraiser.zhaozijian
     */
    @RequestMapping("/toDyTableReportForEditLastRate")
    public ModelAndView toDyTableReportForEditLastRate(String tabCodeVersion, String brNo, String reportDate, String checkFormula,
                                                       HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report");

        String[] t = tabCodeVersion.split("_");
        String tarVar = "";
        if (checkFormula.contains("&")) {
            reportDate = DyTableUtil.getReportDateLastMonth(reportDate);
            tarVar = "&";
        } else if (checkFormula.contains("|")) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            tarVar = "|";
        } else if (checkFormula.contains("`")) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            tarVar = "`";
        } else if (checkFormula.contains("€")) {
            reportDate = DyTableUtil.getReportDateLastYear(reportDate);
            tarVar = "€";
        } else if (checkFormula.contains("￥")) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            tarVar = "￥";
        } else if (checkFormula.contains("￠")) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            tarVar = "￠";
        } else if (checkFormula.contains(":")) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            tarVar = ":";
        } else if (checkFormula.contains(";")) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            tarVar = ";";
        } else if (checkFormula.contains("~")) {
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
            tarVar = "~";
        }
        DyTableInfo tableInfo = dyTableInfoService.getDyTableInfoByReportDate(t[0], reportDate, t[1]);
        DyReportInfo reportInfo = dyReportInfoService.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo != null) {
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportId", reportInfo.getReportId());
            int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if (userRoles.contains("5") || userRoles.contains("admin") && "1".equals(localConfig.getProperties().getPageEditFlag()) && (lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))) {
                bjFlag = true;
            }
            req.setAttribute("bjFlag", bjFlag);
            // 错误校验公式定位功能
            if (StrUtil.isNotNull(checkFormula)) {
                String tabCode = tableInfo.getTabCode();
                if ("true".equals(t[1])) {
                    tarVar = "^";
                }
                StringBuilder tarStr = new StringBuilder();
                List<String> tarList = DyCheckUtil.getTarListByFormula(checkFormula);
                for (int i = 0; i < tarList.size() - 1; i++) {
                    for (int j = tarList.size() - 1; j > i; j--) {
                        if (tarList.get(j).equals(tarList.get(i))) {
                            tarList.remove(j);
                        }
                    }
                }
                for (String tar : tarList) {
                    if (tar.startsWith(tabCode + tarVar)) {
                        String tarN = tar.replace("" + tarVar + "", "_");
                        tarStr.append(tarN);
                        tarStr.append(";");
                        checkFormula = checkFormula.replace(tar, "<a style=\"color:blue\" href=\"#" + tarN + "_TD\">" + tar + "</a>");
                    }
                }
                req.setAttribute("checkFormula", checkFormula);
                req.setAttribute("tarStr", tarStr.toString());
            }
        }

        return modelAndView;
    }


    /**
     * 跳转数据页面(异动):错误定位,参数不同与上面一个方法
     * (苏州局)
     *
     * @param req
     * @author efraiser.zhaozijian
     */
    @RequestMapping("/toDyTableReportForEditLastRateSZ")
    public ModelAndView toDyTableReportForEditLastRateSZ(String tabCodeVersion, String brNo, String reportDate, String checkFormula,
                                                         HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report_sz");

        String[] t = tabCodeVersion.split("_");
        String tarVar = "";
        if (checkFormula.contains("&")) {
            reportDate = DyTableUtil.getReportDateLastMonth(reportDate);
            tarVar = "&";
        } else if (checkFormula.contains("|")) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            tarVar = "|";
        } else if (checkFormula.contains("`")) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            tarVar = "`";
        } else if (checkFormula.contains("€")) {
            reportDate = DyTableUtil.getReportDateLastYear(reportDate);
            tarVar = "€";
        } else if (checkFormula.contains("￥")) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            tarVar = "￥";
        } else if (checkFormula.contains("￠")) {
            reportDate = DyTableUtil.getReportDateLastQuarter(reportDate);
            tarVar = "￠";
        } else if (checkFormula.contains(":")) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            tarVar = ":";
        } else if (checkFormula.contains(";")) {
            reportDate = DyTableUtil.getReportDateLastHalfYear(reportDate);
            tarVar = ";";
        } else if (checkFormula.contains("~")) {
            reportDate = DyTableUtil.getLastYearReportDate(reportDate);
            tarVar = "~";
        }
        DyTableInfo tableInfo = dyTableInfoService.getDyTableInfoByReportDate(t[0], reportDate, t[1]);
        DyReportInfo reportInfo = dyReportInfoService.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo != null) {
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportId", reportInfo.getReportId());
            int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if (userRoles.contains("5") || userRoles.contains("admin") && "1".equals(localConfig.getProperties().getPageEditFlag()) && (lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))) {
                bjFlag = true;
            }
            req.setAttribute("bjFlag", bjFlag);
            // 错误校验公式定位功能
            if (StrUtil.isNotNull(checkFormula)) {
                String tabCode = tableInfo.getTabCode();
                if ("true".equals(t[1])) {
                    tarVar = "^";
                }
                StringBuilder tarStr = new StringBuilder();
                List<String> tarList = DyCheckUtil.getTarListByFormula(checkFormula);
                for (int i = 0; i < tarList.size() - 1; i++) {
                    for (int j = tarList.size() - 1; j > i; j--) {
                        if (tarList.get(j).equals(tarList.get(i))) {
                            tarList.remove(j);
                        }
                    }
                }
                for (String tar : tarList) {
                    if (tar.startsWith(tabCode + tarVar)) {
                        String tarN = tar.replace("" + tarVar + "", "_");
                        tarStr.append(tarN);
                        tarStr.append(";");
                        checkFormula = checkFormula.replace(tar, "<a style=\"color:blue\" href=\"#" + tarN + "_TD\">" + tar + "</a>");
                    }
                }
                req.setAttribute("checkFormula", checkFormula);
                req.setAttribute("tarStr", tarStr.toString());
            }
        }
        return modelAndView;
    }

    /**
     * 保存报表数据
     *
     * @return
     */
    @RequestMapping("/doSaveTableReportData")
    @ResponseBody
    public RequestResult doSaveTableReportData(@RequestBody DoSaveTableReportData doSaveTableReportData) {

        String reportId = doSaveTableReportData.getReportId();
        String tableId = doSaveTableReportData.getTableId();
        List<DyReportData> rds = doSaveTableReportData.getRds();

        DyReportInfoServiceImpl dyReportInfoService1 = (DyReportInfoServiceImpl) dyReportInfoService;

        try {
            DyReportInfo reportInfo = dyReportInfoService1.fetch(reportId);
            reportInfo.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            for (DyReportData rdReportData : rds) {
                rdReportData.setReportId(reportId);
            }
            dyReportInfoService.updateReportInfoData(reportInfo, rds);
            return requestResult(true, "保存成功!!!");
        } catch (Exception e) {
            logger.error("doSaveTableReportData() error! reportId:[" + reportId + "]," +
                    "tableId:[" + tableId + "]," +
                    "rds:[" + JSONArray.toJSONString(rds) + "]," +
                    "", e);
            return requestResult(false, "保存数据失败!!!");
        }

    }

    /**
     * 批量导出数据
     *
     * @param reportIds
     * @param brNo
     * @param reportDate
     * @return
     * @author efraiser.xiaxiaofeng
     */
    @RequestMapping("/toExportTableReportBatchExcel")
    @ResponseBody
    public Object toExportTableReportBatchExcel( String reportIds,  String brNo, String reportDate) {
        List<String> reportIdList = StrUtil.convertToList(reportIds);
        String outPath = localConfig.getProperties().getTempStringPath() + File.separator + "batch" + File.separator + brNo + File.separator + reportDate;


        Files.deleteDir(new File(outPath));
        Files.createDirIfNoExists(new File(outPath));

        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl)dyReportInfoService;
        DyTableInfoServiceImpl dyTableInfoServiceImpl =(DyTableInfoServiceImpl)dyTableInfoService;

        for (String reportId : reportIdList) {
            DyReportInfo reportInfo = dyReportInfoServiceImpl.fetch(reportId);
            // 此处控制,未导入或导入失败的
            if (reportInfo == null || StrUtil.isNotNull(reportInfo.getErrorMsg())) {
                continue;
            }
            DyTableInfo tableInfo = dyTableInfoServiceImpl.fetch(reportInfo.getTableId());
            // excel模板路径
            File fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + ".xls");
            if (!fi.exists()) {
                // excel模板路径
                fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "_"
                        + tableInfo.getTabName() + ".xls");
                if (!fi.exists()) {
                    return requestResult(false, "未能获取[" + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "_" + tableInfo.getTabName() + "]的模板文件!!!");
                }
            }
            File fileOut = new File(outPath + File.separator + tableInfo.getTabName() + ".xls");
            try {
                Files.createNewFile(fileOut);
            } catch (IOException e) {
                e.printStackTrace();
                return requestResult(false, "创建[" + tableInfo.getTabCode() + "]文件失败!!");
            }
            if (!doExportTableReportExcel(fi, fileOut, tableInfo, reportInfo)) {
                return requestResult(false, "文件生成失败!!");
            }

        }

        String zipPath = localConfig.getProperties().getTempStringPath() + File.separator + brNo + "_" + reportDate + "_" + System.currentTimeMillis() + ".zip";
        Files.deleteDir(new File(zipPath));
        ZipFileUtil.zip(outPath, zipPath);
        return requestResult(true, zipPath);
    }

    /**
     * 导出单张数据表
     *
     * @param reportId
     */
    @RequestMapping("/toExportTableReportExcel")
    @ResponseBody
    public RequestResult toExportTableReportExcel(String reportId) {
        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl)dyReportInfoService;

        DyReportInfo reportInfo = dyReportInfoServiceImpl.fetch(reportId);
        if (reportInfo == null) {
            return requestResult(false, "当期报表数据不存在!!!");
        }
        // 此处缓存获取报表信息
        DyTableInfo tableInfo = DyTableModelCache.getTableInfo(reportInfo.getTableId());
        File fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + ".xls");
        if (!fi.exists()) {
            // excel模板路径
            fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "_" + tableInfo.getTabName()
                    + ".xls");
            if (!fi.exists()) {
                return requestResult(false, "未能获取[" + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "_" + tableInfo.getTabName() + "]的模板文件!!!");
            }
        }

        String outPath = localConfig.getProperties().getTempStringPath()  + File.separator + reportInfo.getBrNo() + File.separator + reportInfo.getReportDate();
        Files.deleteDir(new File(outPath));
        File fileOut = FileUtil.createFile(outPath + File.separator + tableInfo.getTabName() + ".xls");
        try {
            if (doExportTableReportExcel(fi, fileOut, tableInfo, reportInfo)) {
                return requestResult(true, fileOut.getCanonicalPath());
            } else {
                return requestResult(false, "文件生成失败!!");
            }
        } catch (Exception e) {
            logger.error("toExportTableReportExcel() error! reportId:["+reportId+"]",e);
            return requestResult(false, "文件生成失败!!");
        }

    }

    private boolean doExportTableReportExcel(File tempFile, File outFile, DyTableInfo tableInfo, DyReportInfo reportInfo) {
        // 读取excel模板
        HSSFWorkbook wb;
        XSSFWorkbook xb;
        try {
            if (tableInfo.getExcelFile().endsWith("xls")) {
                wb = new HSSFWorkbook(new FileInputStream(tempFile));
                List<String> tmPctList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
                Map<String, String> tccList = DyTableModelCache.getModelColumnContrastFileNum(tableInfo.getTableId());
                String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
                String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
                HSSFSheet sheet = wb.getSheetAt(0);
                Map<String, String> dataMap = dyReportDataService.doInitDataMap(tableInfo.getTableId(), reportInfo.getReportId(), reportInfo.getReportDate());
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
                                String value = getDataMapValue(tableInfo.getTabCode(), dataMap, tmPctList, nameCols, i, j, Integer.valueOf(tccList.get(key)));
                                if (StrUtil.isNotNull(value)) {
                                    ExcelUtil.setCell(sheet.getRow(i - 1), (j - 1), value);
                                }
                            }
                        }

                    }
                }
                FileOutputStream out = new FileOutputStream(outFile);
                wb.write(out);
                out.close();
            } else if (tableInfo.getExcelFile().endsWith("xlsx")) {
                xb = new XSSFWorkbook(new FileInputStream(tempFile));
                List<String> tmPctList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
                Map<String, String> tccList = DyTableModelCache.getModelColumnContrastFileNum(tableInfo.getTableId());
                String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
                String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
                XSSFSheet sheet = xb.getSheetAt(0);
                Map<String, String> dataMap = dyReportDataService.doInitDataMap(tableInfo.getTableId(), reportInfo.getReportId(), reportInfo.getReportDate());
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
                                String value = getDataMapValue(tableInfo.getTabCode(), dataMap, tmPctList, nameCols, i, j, Integer.valueOf(tccList.get(key)));
                                if (StrUtil.isNotNull(value)) {
                                    ExcelUtil.setCellXlsx(sheet.getRow(i - 1), (j - 1), value);
                                }
                            }
                        }

                    }
                }
                FileOutputStream out = new FileOutputStream(outFile);
                xb.write(out);
                out.close();
            }


            return true;
        } catch (Exception e) {
            logger.error("doExportTableReportExcel() error!",e);
            return false;
        }
    }

    private String getDataMapValue(String tabCode, Map<String, String> dataMap, List<String> tmPctList, List<String> nameCols, int i, int j, int fileIndex) {
        if (dataMap == null) {
            return "";
        }
        String key = i + "_" + DyTableUtil.getFieldName("", fileIndex);
        String value = dataMap.get(key);
        if (StrUtil.isNotNull(value)) {
            if (StrUtil.isNumeric(value) && !(checkIsNameColumn(nameCols, j))) {
                if (tmPctList.size() > 0 && tmPctList.contains(tabCode + "_" + key)) {
                    value = DyTableUtil.dfPre.format(Double.valueOf(value) / 100);// 导出时,如果是百分比需要/100再赋值
                } else {
                    value = DyTableUtil.dfNum.format(Double.valueOf(value));
                }
            }
            return value;
        } else {
            return "";
        }
    }

    private boolean checkIsNameColumn(List<String> nameCols, int j) {
        if (nameCols != null) {
            if (nameCols.contains(String.valueOf(j))) {
                return true;
            }
            return false;
        }
        return false;
    }

    /**
     * 功能描述：修改报表数据
     *
     * @param reportId
     * @param inputId
     * @param originalValue
     * @param value
     * @param reportDate
     * @param req
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    @RequestMapping("/changeValue")
    @ResponseBody
    public RequestResult changeValue(String reportId,  String inputId,  String originalValue,String value, String reportDate, HttpServletRequest req) {
        DyValueChangeRecordServiceImpl  dyValueChangeRecordServiceImpl =(DyValueChangeRecordServiceImpl)dyValueChangeRecordService;

        try {
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            String area[] = inputId.split("_");
            String date = reportDate.substring(0, 4);
            double oldValue = Double.valueOf(originalValue);
            double theValue = Double.valueOf(value);
            dyReportDataService.updateValue(reportId, area, theValue, date);
            DyValueChangeRecord record = new DyValueChangeRecord();
            record.setUserId(sysUser.getUserId());
            record.setReportId(reportId);
            record.setChangeLocate(area[0] + "_" + area[1] + "_" + area[2]);
            record.setOriginalValue(oldValue);
            record.setPresentValue(theValue);
            record.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            dyValueChangeRecordServiceImpl.dao().insert(record);
            return requestResult(true, "保存成功!!!");
        } catch (Exception e) {
            logger.error("changeValue() error! reportId:["+reportId+"],originalValue:["+originalValue+"],value:["+value+"],reportDate:["+reportDate+"],",e);
            return requestResult(false, e.getMessage());
        }
    }

    @RequestMapping("/toRdTableFormulaReport")
    public ModelAndView toRdTableFormulaReport( String tabCode,  String reportDate, String cUser,String searchBrno, HttpServletRequest req) {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABCODE ='" + tabCode + "' AND '" + reportDate + "'BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) ";
        if (StrUtil.isNull(cUser)) {
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            cUser = sysUser.getUserId();
        }

        DyTableInfoServiceImpl dyTableInfoService1 = (DyTableInfoServiceImpl)dyTableInfoService;

        if (StrUtil.isNotNull(dyTableInfoService1.singleString(sqlStr))) {
            String tableId = dyTableInfoService1.singleString(sqlStr);
            DyTableInfo tableInfo = DyTableModelCache.getTableInfo(tableId);
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportDate", reportDate);
            req.setAttribute("cUser", cUser);
            req.setAttribute("searchBrno", searchBrno);
        } else {
            req.setAttribute("tableInfo", null);
            req.setAttribute("reportDate", reportDate);
            req.setAttribute("cUser", cUser);
            req.setAttribute("searchBrno", searchBrno);
        }

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report_formula");

        return modelAndView;
    }

    @RequestMapping("/toDyTableFormulaReportCS")
    public ModelAndView  toDyTableFormulaReportCS(String tabCode,  String reportDate,String cUser, String searchBrno, HttpServletRequest req) {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABCODE ='" + tabCode + "' AND '" + reportDate + "'BETWEEN START_DATE AND END_DATE ";

        DyTableInfoServiceImpl dyTableInfoService1 = (DyTableInfoServiceImpl)dyTableInfoService;

        if (StrUtil.isNotNull(dyTableInfoService1.singleString(sqlStr))) {
            String tableId = dyTableInfoService1.singleString(sqlStr);
            DyTableInfo tableInfo = DyTableModelCache.getTableInfo(tableId);
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportDate", reportDate);
            req.setAttribute("cUser", "admin");
        } else {
            req.setAttribute("tableInfo", null);
            req.setAttribute("reportDate", reportDate);
            req.setAttribute("cUser", "admin");
        }


        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report_formula_cs");
        return modelAndView;
    }

    /**
     * 功能描述：获取报表修改记录列表
     *
     * @param userId
     * @param date
     * @param tabCode
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    @RequestMapping("/getValueChangeRecordList")
    @ResponseBody
    public Object getValueChangeRecordList(String userId,  String date,String tabCode) {
        List<DyValueChangeRecordHelper> list = dyValueChangeRecordService.getValueChangeRecord(userId, date, tabCode);
        return list;

    }

    /**
     * 跳转数据页面:错误定位,参数不同与上面一个方法
     *
     */
    @RequestMapping("/toDyTableReportForValueChange")
    public ModelAndView  toDyTableReportForValueChange( String tabCodeVersion,String brNo,  String reportDate,  String checkFormula,
                                              HttpServletRequest req) {
        String[] t = tabCodeVersion.split("_");
        DyTableInfo tableInfo = dyTableInfoService.getDyTableInfoByReportDate(t[0], reportDate, t[1]);
        DyReportInfo reportInfo = dyReportInfoService.getReportInfo(tableInfo.getTableId(), brNo, reportDate, "1");
        if (reportInfo != null) {
            req.setAttribute("tableInfo", tableInfo);
            req.setAttribute("reportId", reportInfo.getReportId());
            int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if (userRoles.contains("5") || userRoles.contains("admin") && "1".equals(localConfig.getProperties().getPageEditFlag()) && (lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))) {
                bjFlag = true;
            }
            req.setAttribute("bjFlag", bjFlag);
            // 错误校验公式定位功能
            if (StrUtil.isNotNull(checkFormula)) {
                String tabCode = tableInfo.getTabCode();
                String tarVar = "_";
                if ("true".equals(t[1])) {
                    tarVar = "^";
                }
                StringBuilder tarStr = new StringBuilder();
                List<String> tarList = DyCheckUtil.getTarListByFormula(checkFormula);
                for (int i = 0; i < tarList.size() - 1; i++) {
                    for (int j = tarList.size() - 1; j > i; j--) {
                        if (tarList.get(j).equals(tarList.get(i))) {
                            tarList.remove(j);
                        }
                    }
                }
                for (String tar : tarList) {
                    if (tar.startsWith(tabCode + tarVar)) {
                        String tarN = tar.replace("^", "_");
                        tarStr.append(tarN);
                        tarStr.append(";");
                        checkFormula = checkFormula.replace(tar, "<a style=\"color:blue\" href=\"#" + tarN + "_TD\">" + tar + "</a>");
                    }
                }
                req.setAttribute("checkFormula", checkFormula);
                req.setAttribute("tarStr", tarStr.toString());
            }
        }

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report_valueChange");

        return modelAndView;
    }
}
