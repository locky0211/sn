package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.common.util.nutz.R;
import com.efraiser.test.db.model.dy.*;
import com.efraiser.test.db.model.sys.JgyRecord;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.model.sys.SysUserDepartment;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dyindicatorsdata.DyIndicatorsDataService;
import com.efraiser.test.db.service.dy.dyreportdata.DyReportDataService;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dyreportinfo.impl.DyReportInfoServiceImpl;
import com.efraiser.test.db.service.dy.dyreportinfosummary.DyReportInfoSummaryService;
import com.efraiser.test.db.service.dy.dyreportrecord.DyReportRecordService;
import com.efraiser.test.db.service.dy.dyreportrecord.impl.DyReportRecordServiceImpl;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.impl.DyTableInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.service.sys.jgyrecord.JgyRecordService;
import com.efraiser.test.db.service.sys.jgyrecord.impl.JgyRecordServiceImpl;
import com.efraiser.test.db.service.sys.sysuserdepartment.SysUserDepartmentService;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import com.efraiser.test.project.util.UpDownLoadUtil;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.xssf.usermodel.*;
import org.apache.tools.ant.Project;
import org.apache.tools.ant.taskdefs.Zip;
import org.apache.tools.ant.types.FileSet;
import org.nutz.lang.Mirror;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("dy/report/import")
public class DyReportImportController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyReportImportController.class);

    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyReportInfoSummaryService dyReportInfoSummaryService;
    @Autowired
    private DyReportDataService dyReportDataService;
    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private DyTableModelService dyTableModelService;

    @Autowired
    private JgyRecordService jgyRecordService;
    @Autowired
    private SysUserDepartmentService sysUserDepartmentService;
    @Autowired
    private DyReportRecordService dyReportRecordService;
    @Autowired
    private DyIndicatorsDataService dyIndicatorsDataService;

    @Autowired
    private LocalConfig localConfig;


    private DecimalFormat dfPre = new DecimalFormat("0.0000##");
    private DecimalFormat dfNum = new DecimalFormat("0.00####");

    private int count = 0;
    private int fileNum = 0;
    private int matchNum = 0;

    @RequestMapping("/downloadExcelFiles")
    public void downloadExcelFiles(String id, HttpServletResponse response) throws Exception {
        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl) dyReportInfoService;

        DyReportInfo ri = dyReportInfoServiceImpl.fetch(id);
        DyTableInfo tableInfo = DyTableModelCache.getTableInfo(ri.getTableId());
        // RdTableInfo tableInfo = rdTableInfoService.fetch(ri.getTableId());
        String filePath = localConfig.getProperties().getRdTableExcelPath() + File.separator + ri.getBrNo() + File.separator + ri.getReportDate() + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabName()
                + ".xls";

        UpDownLoadUtil.downloadFile(filePath, response);

    }

    @RequestMapping("/doExportExcelAll")
    public void doExportExcelAll(String ids, HttpServletRequest req, HttpServletResponse response) throws Exception {
        String zipFilePath = localConfig.getProperties().getTempStringPath() + File.separator + "报表" + System.currentTimeMillis() + ".zip";
        Project proj = new Project();

        Zip zip = new Zip();
        zip.setProject(proj);
        zip.setDestFile(new File(zipFilePath));

        String[] idsArr = ids.split(",");

        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl) dyReportInfoService;

        for (int i = 0; i < idsArr.length; i++) {
            DyReportInfo ri = dyReportInfoServiceImpl.fetch(idsArr[i]);
            if (ri != null && StrUtil.isNull(ri.getErrorMsg())) {
                String filePath = doExportExcel(idsArr[i], req);
                File f = new File(filePath);
                FileSet fileSet = new FileSet();
                fileSet.setProject(proj);
                fileSet.setFile(f);
                zip.addFileset(fileSet);
            }
        }

        zip.setEncoding("GBK");
        zip.execute();
        UpDownLoadUtil.downloadFile(zipFilePath, response);

    }

    @RequestMapping("/downloadAllExcelFiles")
    public void downloadAllExcelFiles(String ids, HttpServletResponse response) throws Exception {

        String zipFilePath = localConfig.getProperties().getTempStringPath() + File.separator + "报表" + System.currentTimeMillis() + ".zip";
        Project proj = new Project();

        Zip zip = new Zip();
        zip.setProject(proj);
        zip.setDestFile(new File(zipFilePath));

        String[] idsArr = ids.split(",");
        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl) dyReportInfoService;

        String rdTableExcelPath = localConfig.getProperties().getRdTableExcelPath();
        for (int i = 0; i < idsArr.length; i++) {
            DyReportInfo ri = dyReportInfoServiceImpl.fetch(idsArr[i]);
            DyTableInfo tableInfo = DyTableModelCache.getTableInfo(ri.getTableId());
            String filePath = rdTableExcelPath + File.separator + ri.getBrNo() + File.separator + ri.getReportDate() + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabName()
                    + ".xls";
            File f = new File(filePath);

            FileSet fileSet = new FileSet();
            fileSet.setProject(proj);
            fileSet.setFile(f);
            zip.addFileset(fileSet);
        }

        zip.setEncoding("GBK");
        zip.execute();

        UpDownLoadUtil.downloadFile(zipFilePath, response);

    }

    @RequestMapping("/getDyTableInfoListByBrNo")
    @ResponseBody
    public Object getDyTableInfoListByBrNo(String brNo, String tabType, String reportDate, String flag) {
        try {
            brNo = delParentNode(brNo);
            return dyTableInfoService.getDyTableInfoListByBrNo(brNo, tabType, reportDate, flag);
        } catch (Exception e) {
            logger.error("getDyTableInfoListByBrNo() error! brNo:[" + brNo + "], tabType:[" + tabType + "], reportDate:[" + reportDate + "], flag:[" + flag + "]", e);
        }
        return null;
    }


    @RequestMapping("/doReportImport")
    @ResponseBody
    public RequestResult doReportImport(String brNo, String tabType, String reportDate, String excelFile, String excelFilePath, String flag, String autoZero, HttpSession session) {

        brNo = delParentNode(brNo);
        // 获取机构需要上报的报表信息
        String[] brnos = brNo.split(",");
        for (int i = 0; i < brnos.length; i++) {
            brNo = brnos[i];
        }
        List<DyTableImportHelper> rbiList;
        String unZipPath;
        String excelUploadPath;
        try {

            rbiList = dyTableInfoService.getDyTableInfoListByBrNo(brNo, tabType, reportDate, flag);
            unZipPath = localConfig.getProperties().getTempStringPath() + File.separator + brNo + File.separator + reportDate;
            excelUploadPath = localConfig.getProperties().getRdTableExcelPath() + File.separator + brNo + File.separator + reportDate;
        } catch (Exception e) {
            logger.error("doReportImport() error! brNo:[" + brNo + "], tabType:[" + tabType + "], reportDate:[" + reportDate + "], " +
                    "flag:[" + flag + "], excelFile:[" + excelFile + "], excelFilePath:[" + excelFilePath + "], autoZero:[" + autoZero + "]", e);
            return requestResult(false, "获取机构报表信息列表异常.");
        }
        if (rbiList.size() > 0) {
            count = 0;
            fileNum = 0;
            matchNum = 0;
            boolean isYsz = false;
            List<String> userRoles = (List<String>) session.getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if ((userRoles.contains("5") || userRoles.contains("admin")) && "1".equals(localConfig.getProperties().getPageEditFlag())) {
                isYsz = true;//
            }
            if (excelFile.endsWith(".xls")) {
                doImportExcel(rbiList, excelFile, new File(excelFilePath), brNo, reportDate, excelUploadPath, autoZero, null, null, isYsz);
            } else if (excelFile.endsWith(".zip") || excelFile.endsWith(".rar")) {

                try {
                    if (excelFile.endsWith(".zip")) {
                        ZipFileUtil.unzip(excelFilePath, unZipPath);
                    } else {
                        RarFileUtil.unrar(excelFilePath, unZipPath);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    return requestResult(false, "解压文件包失败!!");
                }
                List<File> excelFiles = FileUtil.getFolderFiles(unZipPath);
                for (File file : excelFiles) {
                    if (file.getName().endsWith(".xls")) {
                        doImportExcel(rbiList, file.getName(), file, brNo, reportDate, excelUploadPath, autoZero, null, null, isYsz);
                    }
                }
                FileUtil.del(unZipPath);
            }
            FileUtil.del(excelFilePath);
            SysUser sysuser = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
            if (jgyRecordService.checkJqy(sysuser.getUserId())) {//监管员记录

                JgyRecordServiceImpl jgyRecordServiceImpl = (JgyRecordServiceImpl) jgyRecordService;
                JgyRecord record = jgyRecordServiceImpl.fetchx(sysuser.getUserId(), DateUtil.getNow("yyyyMM"));
                int old = Integer.parseInt(record.getSuccessImport());
                record.setSuccessImport(String.valueOf(count + old));
                jgyRecordServiceImpl.dao().update(record);
            }
            dyIndicatorsDataService.initIndDate(brNo, reportDate);
            return requestResult(true, "共读取[" + fileNum + "]个文件,匹配[" + matchNum + "]个文件,成功导入[" + count + "]个文件");

        }
        return requestResult(false, null);
    }


    @RequestMapping("/doTableReportImport")
    @ResponseBody
    public RequestResult doTableReportImport(String reportId, String excelFile,String excelFilePath,  String autoZero) {
        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl) dyReportInfoService;

        try {
            DyReportInfo reportInfo = dyReportInfoServiceImpl.fetch(reportId);
            String excelUploadPath = localConfig.getProperties().getRdTableExcelPath() + File.separator + reportInfo.getBrNo() + File.separator + reportInfo.getReportDate();
            if (excelFile.endsWith(".xls")) {
                // 1104导入
                doImportExcel(null, excelFile, new File(excelFilePath), reportInfo.getBrNo(), reportInfo.getReportDate(), excelUploadPath, autoZero, reportId, reportInfo.getTableId(), false);
            }
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("doTableReportImport() error! reportId:[" + reportId + "], excelFile:[" + excelFile + "], excelFilePath:[" + excelFilePath + "], autoZero:[" + autoZero + "]", e);
            return requestResult(false, "导入失败!!");
        }
    }

    @RequestMapping("/doReplaceReportDate")
    @ResponseBody
    public RequestResult doReplaceReportDate( String reportId) {
        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl) dyReportInfoService;

        try {
            DyReportInfo reportInfo = dyReportInfoServiceImpl.fetch(reportId);
            List<DyReportData> rds = dyReportDataService.getReportDataList(reportInfo.getTableId(), reportInfo.getReportDate(), reportInfo.getBrNo(), "0");
            if (rds.size() > 0) {
                for (DyReportData rd : rds) {
                    rd.setReportId(reportId);
                }
                dyReportInfoService.saveDyReportInfoForReplace(reportId, rds);
            }
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("doReplaceReportDate() error! reportId:[" + reportId + "]", e);
            return requestResult(false, "报表数据覆盖失败!!");
        }

    }

    private void doImportExcel(List<DyTableImportHelper> rbiList, String excelFileName, File excelFile, String brNo, String reportDate, String excelUploadPath, String autoZero, String reportId,
                               String tableId, boolean isYsz) {
        fileNum++;
        DyTableInfo tableInfo = null;
        tableInfo = getTableInfo(rbiList, excelFileName, excelFile, tableId, tableInfo);
        if (tableInfo != null) {
            matchNum++;
            // RdTableInfo tableInfo = rdTableInfoService.fetch(rbi.getTableId());
            // RdTableInfo tableInfo =
            // RdTableModelCache.getRdTableInfo(rbi.getTableId());
            if (StrUtil.isNull(reportId)) {
                reportId = R.UU16();
            }
            DyReportInfo reportInfo = new DyReportInfo();
            reportInfo.setReportId(reportId);
            reportInfo.setTableId(tableInfo.getTableId());
            reportInfo.setBrNo(brNo);
            reportInfo.setDataType("1");
            reportInfo.setReportDate(reportDate);
            reportInfo.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));

            DyReportInfo reportInfo2 = null;
            String reportId2 = R.UU16();
            if (isYsz) {
                reportInfo2 = new DyReportInfo();
                reportInfo2.setReportId(reportId2);
                reportInfo2.setTableId(tableInfo.getTableId());
                reportInfo2.setBrNo(brNo);
                reportInfo2.setDataType("0");
                reportInfo2.setReportDate(reportDate);
                reportInfo2.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            }
            List<DyReportData> reportDatas = null;
            List<DyReportData> reportDatas2 = new ArrayList<DyReportData>();
            if (excelFile.length() <= 0) {
                reportInfo.setErrorMsg("文件为空无法获取数据!!<br>");
                if (isYsz) {
                    reportInfo2.setErrorMsg("文件为空无法获取数据!!<br>");
                }
            } else {
                // String versionNo =
                // rdTableModelService.getExcelFileVersionNo(tableInfo.getVersionNoInfo(),
                // excelFile);

                // if (StrUtil.isNull(versionNo)) {
                // reportInfo.setErrorMsg("匹配报表文件版本号失败!!<br>");
                // } else if (!versionNo.equals(tableInfo.getVersionNo())) {
                // reportInfo.setErrorMsg("报表文件版本号不匹配,需要版本号[" +
                // tableInfo.getVersionNo() + "],导入文件版本号[" + versionNo +
                // "]!!<br>");
                // } else {
                try {
                    reportDatas = this.getReportDataList(reportId, tableInfo, excelFile, autoZero, reportId2, reportDatas2, isYsz);
                    FileUtil.copy(excelFile, FileUtil.createFile(excelUploadPath + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabName() + ".xls"));
                    count++;
                } catch (Exception e) {
                    logger.error("doImportExcel() error! reportId:[" + reportId + "]", e);
                    reportInfo.setErrorMsg("获取报表数据异常!!<br>");
                    if (isYsz) {
                        reportInfo2.setErrorMsg("获取报表数据异常!!<br>");
                    }
                }
                // }
            }
            try {
                dyReportInfoService.saveReportInfoData(reportInfo, reportDatas, reportInfo2, reportDatas2);
            } catch (Exception e) {
                logger.error("doImportExcel() error! reportId:[" + reportId + "]", e);
            }
        }

    }

    private void doImportExcelXlsx(List<DyTableImportHelper> rbiList, String excelFileName, File excelFile, String brNo, String reportDate, String excelUploadPath, String autoZero, String reportId,
                                   String tableId, boolean isYsz, String userId) {
        fileNum++;
        DyTableInfo tableInfo = null;
        tableInfo = getTableInfo(rbiList, excelFileName, excelFile, tableId, tableInfo);
        if (tableInfo != null) {
            matchNum++;
            // RdTableInfo tableInfo = rdTableInfoService.fetch(rbi.getTableId());
            // RdTableInfo tableInfo =
            // RdTableModelCache.getRdTableInfo(rbi.getTableId());
            if (StrUtil.isNull(reportId)) {
                reportId = R.UU16();
            }
            DyReportInfo reportInfo = new DyReportInfo();
            reportInfo.setReportId(reportId);
            reportInfo.setTableId(tableInfo.getTableId());
            reportInfo.setBrNo(brNo);
            reportInfo.setDataType("1");
            reportInfo.setReportDate(reportDate);
            reportInfo.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));

            DyReportInfo reportInfo2 = null;
            String reportId2 = R.UU16();
            if (isYsz) {
                reportInfo2 = new DyReportInfo();
                reportInfo2.setReportId(reportId2);
                reportInfo2.setTableId(tableInfo.getTableId());
                reportInfo2.setBrNo(brNo);
                reportInfo2.setDataType("0");
                reportInfo2.setReportDate(reportDate);
                reportInfo2.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            }
            List<DyReportData> reportDatas = null;
            List<DyReportData> reportDatas2 = new ArrayList<DyReportData>();
            if (excelFile.length() <= 0) {
                reportInfo.setErrorMsg("文件为空无法获取数据!!<br>");
                if (isYsz) {
                    reportInfo2.setErrorMsg("文件为空无法获取数据!!<br>");
                }
            } else {
                // String versionNo =
                // rdTableModelService.getExcelFileVersionNo(tableInfo.getVersionNoInfo(),
                // excelFile);

                // if (StrUtil.isNull(versionNo)) {
                // reportInfo.setErrorMsg("匹配报表文件版本号失败!!<br>");
                // } else if (!versionNo.equals(tableInfo.getVersionNo())) {
                // reportInfo.setErrorMsg("报表文件版本号不匹配,需要版本号[" +
                // tableInfo.getVersionNo() + "],导入文件版本号[" + versionNo +
                // "]!!<br>");
                // } else {
                try {
                    reportDatas = this.getReportDataListXlsx(reportId, tableInfo, excelFile, autoZero, reportId2, reportDatas2, isYsz);
                    FileUtil.copy(excelFile, FileUtil.createFile(excelUploadPath + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabName() + ".xls"));
                    count++;
                    DyReportRecord drr = new DyReportRecord();
                    drr.setBrNo(brNo);
                    drr.setReportDate(reportDate);
                    drr.setTabName(tableInfo.getTabName());
                    drr.setTabType(tableInfo.getTabType());
                    drr.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                    drr.setUserId(userId);

                    DyReportRecordServiceImpl dyReportRecordServiceImpl =(DyReportRecordServiceImpl)dyReportRecordService;

                    dyReportRecordServiceImpl.dao().insert(drr);
                } catch (Exception e) {
                    e.printStackTrace();
                    reportInfo.setErrorMsg("获取报表数据异常!!<br>");
                    if (isYsz) {
                        reportInfo2.setErrorMsg("获取报表数据异常!!<br>");
                    }
                }
                // }
            }
            try {
                dyReportInfoService.saveReportInfoData(reportInfo, reportDatas, reportInfo2, reportDatas2);
            } catch (Exception e) {
                logger.error("doImportExcelXlsx() error! reportId:[" + reportId + "]", e);
            }
        }

    }

    private void doImportExcelRecord(List<DyTableImportHelper> rbiList, String excelFileName, File excelFile, String brNo, String reportDate, String excelUploadPath, String autoZero, String reportId,
                                     String tableId, boolean isYsz, String userId) {
        fileNum++;
        DyTableInfo tableInfo = null;
        tableInfo = getTableInfo(rbiList, excelFileName, excelFile, tableId, tableInfo);
        if (tableInfo != null) {
            matchNum++;
            // RdTableInfo tableInfo = rdTableInfoService.fetch(rbi.getTableId());
            // RdTableInfo tableInfo =
            // RdTableModelCache.getRdTableInfo(rbi.getTableId());
            if (StrUtil.isNull(reportId)) {
                reportId = R.UU16();
            }
            DyReportInfo reportInfo = new DyReportInfo();
            reportInfo.setReportId(reportId);
            reportInfo.setTableId(tableInfo.getTableId());
            reportInfo.setBrNo(brNo);
            reportInfo.setDataType("1");
            reportInfo.setReportDate(reportDate);
            reportInfo.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));

            DyReportInfo reportInfo2 = null;
            String reportId2 = R.UU16();
            if (isYsz) {
                reportInfo2 = new DyReportInfo();
                reportInfo2.setReportId(reportId2);
                reportInfo2.setTableId(tableInfo.getTableId());
                reportInfo2.setBrNo(brNo);
                reportInfo2.setDataType("0");
                reportInfo2.setReportDate(reportDate);
                reportInfo2.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            }
            List<DyReportData> reportDatas = null;
            List<DyReportData> reportDatas2 = new ArrayList<DyReportData>();
            if (excelFile.length() <= 0) {
                reportInfo.setErrorMsg("文件为空无法获取数据!!<br>");
                if (isYsz) {
                    reportInfo2.setErrorMsg("文件为空无法获取数据!!<br>");
                }
            } else {
                // String versionNo =
                // rdTableModelService.getExcelFileVersionNo(tableInfo.getVersionNoInfo(),
                // excelFile);

                // if (StrUtil.isNull(versionNo)) {
                // reportInfo.setErrorMsg("匹配报表文件版本号失败!!<br>");
                // } else if (!versionNo.equals(tableInfo.getVersionNo())) {
                // reportInfo.setErrorMsg("报表文件版本号不匹配,需要版本号[" +
                // tableInfo.getVersionNo() + "],导入文件版本号[" + versionNo +
                // "]!!<br>");
                // } else {
                try {
                    reportDatas = this.getReportDataList(reportId, tableInfo, excelFile, autoZero, reportId2, reportDatas2, isYsz);
                    FileUtil.copy(excelFile, FileUtil.createFile(excelUploadPath + File.separator + tableInfo.getVersionNo() + File.separator + tableInfo.getTabName() + ".xls"));
                    count++;
                    DyReportRecord drr = new DyReportRecord();
                    drr.setBrNo(brNo);
                    drr.setReportDate(reportDate);
                    drr.setTabName(tableInfo.getTabName());
                    drr.setTabType(tableInfo.getTabType());
                    drr.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                    drr.setUserId(userId);
                    DyReportRecordServiceImpl dyReportRecordServiceImpl =(DyReportRecordServiceImpl)dyReportRecordService;
                    dyReportRecordServiceImpl.dao().insert(drr);
                } catch (Exception e) {
                    e.printStackTrace();
                    reportInfo.setErrorMsg("获取报表数据异常!!<br>");
                    if (isYsz) {
                        reportInfo2.setErrorMsg("获取报表数据异常!!<br>");
                    }
                }
                // }
            }
            try {
                dyReportInfoService.saveReportInfoData(reportInfo, reportDatas, reportInfo2, reportDatas2);
            } catch (Exception e) {
                logger.error("doImportExcelRecord() error! reportId:[" + reportId + "]", e);
            }
        }

    }

    private DyTableInfo getTableInfo(List<DyTableImportHelper> rbiList, String excelFileName, File excelFile, String tableId, DyTableInfo tableInfo) {
        DyTableImportHelper rbi = null;
        if (StrUtil.isNotNull(tableId)) {
            // tableInfo = rdTableInfoService.fetch(tableId);
            // 此处修改为缓存获取
            tableInfo = DyTableModelCache.getTableInfo(tableId);
        } else {
            if (excelFileName.endsWith(".xls")) {
                rbi = matchExcel(excelFileName.replace(".xls", ""), rbiList, excelFile);
            } else if (excelFileName.endsWith(".xlsx")) {
                rbi = matchExcelXlsx(excelFileName.replace(".xlsx", ""), rbiList, excelFile);
            }

            if (rbi != null) {
                tableInfo = dyTableInfoService.getDyTableInfo(rbi.getTabCode(), rbi.getVersionNo());
            }
        }
        return tableInfo;
    }

    private List<DyReportData> getReportDataList(String reportId, DyTableInfo tableInfo, File excelFile, String autoZero, String reportId2, List<DyReportData> rdList2, boolean isYsz) throws Exception {
        List<DyReportData> rdList = new ArrayList<DyReportData>();
        Mirror<DyReportData> rdMirror = Mirror.me(DyReportData.class);
        List<String> reportRows = StrUtil.convertToList(tableInfo.getRowInfo(), "@");
        List<String> reportCols = StrUtil.convertToList(tableInfo.getColInfo(), "@");
        HSSFWorkbook wb = new HSSFWorkbook(new FileInputStream(excelFile));
        HSSFFormulaEvaluator eval = new HSSFFormulaEvaluator((HSSFWorkbook) wb);
        HSSFSheet sheet = wb.getSheetAt(0);
        boolean isSpecial = true;
        for (int a = 0; a < reportRows.size(); a++) {
            String[] rowInfo = reportRows.get(a).split("#");
            String[] colInfo = reportCols.get(a).split("#");
            for (int b = Integer.valueOf(rowInfo[2]); b <= Integer.valueOf(rowInfo[1]); b++) {
                HSSFRow rows = sheet.getRow(b - 1);
                for (int c = Integer.valueOf(colInfo[1]); c <= Integer.valueOf(colInfo[0]); c++) {
                    HSSFCell cell = rows.getCell(c - 1);
                    if (cell.getCellType() == HSSFCell.CELL_TYPE_FORMULA) {
                        if (cell.getCellFormula().contains(".xls") && cell.getCellFormula().contains(".xlsx")) {
                            isSpecial = false;
                        }
                    }
                }
            }
        }
        for (int x = 0; x < reportRows.size(); x++) {
            String[] rowInfos = reportRows.get(x).split("#");
            String[] colInfos = reportCols.get(x).split("#");
            for (int i = Integer.valueOf(rowInfos[2]); i <= Integer.valueOf(rowInfos[1]); i++) {
                // 获取行
                HSSFRow row = sheet.getRow(i - 1);
                // 初始化对象

                DyReportData rd = new DyReportData();
                rd.setReportId(reportId);
                rd.setReportRowNum(i);

                DyReportData rd2 = null;
                if (isYsz) {
                    rd2 = new DyReportData();
                    rd2.setReportId(reportId2);
                    rd2.setReportRowNum(i);
                }

                int colsNum = 0;

                List<String> nameCols = null;
                // 循环列
                for (int j = Integer.valueOf(colInfos[1]); j <= Integer.valueOf(colInfos[0]); j++) {
                    // 加载设置的字符列和整数列
                    if (colInfos.length > 2) {
                        nameCols = StrUtil.convertToList(colInfos[2], ",");
                    }
                    HSSFCell cell = row.getCell(j - 1);
                    //如果数据列有字符就将单元格值设置为空
                    if (cell.getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        cell.setCellValue("");
                    }
                    //强制刷新自带公式单元格
                    if (cell.getCellType() == HSSFCell.CELL_TYPE_FORMULA) {
                        if (isSpecial) {
                            eval.evaluateFormulaCell(cell);
                        }

                    }
                    String mergeCellStr = ExcelUtil.isMergeCells(sheet, cell);
                    // 如果是合并单元格并且不是起始单元格
                    if (StrUtil.isNotNull(mergeCellStr) && !mergeCellStr.contains("#")) {
                        continue;
                    } else {
                        // 如果为不需要填写的单元格
                        if (DyTableUtil.checkCellIsNoDateCell(cell)) {
                            colsNum++;
                            if (StrUtil.isNotNull(mergeCellStr) && mergeCellStr.contains("#")) {
                                int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                                // 跳过合并列
                                j += mergeCol - 1;
                            }
                            continue;
                        } else {
                            String value = ExcelUtil.getHssCellData(cell);
                            if (nameCols != null && DyTableUtil.checkCellIsNumCols(cell, nameCols)) {// 如果是字符列
                                if (StrUtil.isNotNull(value)) {
                                    rdMirror.setValue(rd, DyTableUtil.getFieldName("name", colsNum), value);
                                    if (isYsz) {
                                        rdMirror.setValue(rd2, DyTableUtil.getFieldName("name", colsNum), value);
                                    }
                                }
                            } else {
                                if (StrUtil.isNotNull(value)) {
                                    if (DyTableUtil.checkCellIsPercentCellForImport(cell)) {
                                        if (value.endsWith("%")) {// 如果读取excel内容带%直接提取
                                            rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value.replace("%", ""))));
                                            if (isYsz) {
                                                rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value.replace("%", ""))));
                                            }
                                        } else {// 如果读取百分比内容成小数
                                            rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value) * 100));
                                            if (isYsz) {
                                                rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value) * 100));
                                            }
                                        }
                                    } else {// 数字列保留2位小数
                                        if (!(value.equals("——") || value.equals("--"))) {
                                            rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfNum.format(Double.valueOf(value)));
                                            if (isYsz) {
                                                rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfNum.format(Double.valueOf(value)));
                                            }
                                        }
                                    }
                                } else if ("true".equals(autoZero)) {// 自动补零
                                    rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfNum.format(0.00));
                                    if (isYsz) {
                                        rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfNum.format(0.00));
                                    }
                                }
                            }
                            colsNum++;
                        }

                        if (StrUtil.isNotNull(mergeCellStr) && mergeCellStr.contains("#")) {
                            int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                            // 跳过合并列
                            j += mergeCol - 1;
                        }
                    }
                }
                // 添加数据信息到数据集合
                rdList.add(rd);
                if (isYsz) {
                    rdList2.add(rd2);
                }
            }
        }
        return rdList;

    }

    private List<DyReportData> getReportDataListXlsx(String reportId, DyTableInfo tableInfo, File excelFile, String autoZero, String reportId2, List<DyReportData> rdList2, boolean isYsz) throws Exception {
        List<DyReportData> rdList = new ArrayList<DyReportData>();
        Mirror<DyReportData> rdMirror = Mirror.me(DyReportData.class);
        List<String> reportRows = StrUtil.convertToList(tableInfo.getRowInfo(), "@");
        List<String> reportCols = StrUtil.convertToList(tableInfo.getColInfo(), "@");
        XSSFWorkbook wb = new XSSFWorkbook(new FileInputStream(excelFile));
        XSSFFormulaEvaluator eval = new XSSFFormulaEvaluator((XSSFWorkbook) wb);
        XSSFSheet sheet = wb.getSheetAt(0);
        boolean isSpecial = true;
        for (int a = 0; a < reportRows.size(); a++) {
            String[] rowInfo = reportRows.get(a).split("#");
            String[] colInfo = reportCols.get(a).split("#");
            for (int b = Integer.valueOf(rowInfo[2]); b <= Integer.valueOf(rowInfo[1]); b++) {
                XSSFRow rows = sheet.getRow(b - 1);
                for (int c = Integer.valueOf(colInfo[1]); c <= Integer.valueOf(colInfo[0]); c++) {
                    XSSFCell cell = rows.getCell(c - 1);
                    if (cell.getCellType() == HSSFCell.CELL_TYPE_FORMULA) {
                        if (cell.getCellFormula().contains(".xls") && cell.getCellFormula().contains(".xlsx")) {
                            isSpecial = false;
                        }
                    }
                }
            }
        }
        for (int x = 0; x < reportRows.size(); x++) {
            String[] rowInfos = reportRows.get(x).split("#");
            String[] colInfos = reportCols.get(x).split("#");
            for (int i = Integer.valueOf(rowInfos[2]); i <= Integer.valueOf(rowInfos[1]); i++) {
                // 获取行
                XSSFRow row = sheet.getRow(i - 1);
                // 初始化对象

                DyReportData rd = new DyReportData();
                rd.setReportId(reportId);
                rd.setReportRowNum(i);

                DyReportData rd2 = null;
                if (isYsz) {
                    rd2 = new DyReportData();
                    rd2.setReportId(reportId2);
                    rd2.setReportRowNum(i);
                }

                int colsNum = 0;

                List<String> nameCols = null;
                // 循环列
                for (int j = Integer.valueOf(colInfos[1]); j <= Integer.valueOf(colInfos[0]); j++) {
                    // 加载设置的字符列和整数列
                    if (colInfos.length > 2) {
                        nameCols = StrUtil.convertToList(colInfos[2], ",");
                    }
                    XSSFCell cell = row.getCell(j - 1);
                    //强制刷新自带公式单元格
                    if (cell.getCellType() == HSSFCell.CELL_TYPE_FORMULA) {
                        if (isSpecial) {
                            eval.evaluateFormulaCell(cell);
                        }

                    }
                    String mergeCellStr = ExcelUtil.isMergeCellsXlsx(sheet, cell);
                    // 如果是合并单元格并且不是起始单元格
                    if (StrUtil.isNotNull(mergeCellStr) && !mergeCellStr.contains("#")) {
                        continue;
                    } else {
                        // 如果为不需要填写的单元格
                        if (DyTableUtil.checkCellIsNoDateCell(cell)) {
                            colsNum++;
                            if (StrUtil.isNotNull(mergeCellStr) && mergeCellStr.contains("#")) {
                                int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                                // 跳过合并列
                                j += mergeCol - 1;
                            }
                            continue;
                        } else {
                            String value = (String) ExcelUtil.getXssCellData(cell);
                            if (nameCols != null && DyTableUtil.checkCellIsNumCols(cell, nameCols)) {// 如果是字符列
                                if (StrUtil.isNotNull(value)) {
                                    rdMirror.setValue(rd, DyTableUtil.getFieldName("name", colsNum), value);
                                    if (isYsz) {
                                        rdMirror.setValue(rd2, DyTableUtil.getFieldName("name", colsNum), value);
                                    }
                                }
                            } else {
                                if (StrUtil.isNotNull(value)) {
                                    if (DyTableUtil.checkCellIsPercentCellForImport(cell)) {
                                        if (value.endsWith("%")) {// 如果读取excel内容带%直接提取
                                            rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value.replace("%", ""))));
                                            if (isYsz) {
                                                rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value.replace("%", ""))));
                                            }
                                        } else {// 如果读取百分比内容成小数
                                            rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value) * 100));
                                            if (isYsz) {
                                                rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfPre.format(Double.valueOf(value) * 100));
                                            }
                                        }
                                    } else {// 数字列保留2位小数
                                        if (!(value.equals("——") || value.equals("--"))) {
                                            rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfNum.format(Double.valueOf(value)));
                                            if (isYsz) {
                                                rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfNum.format(Double.valueOf(value)));
                                            }
                                        }
                                    }
                                } else if ("true".equals(autoZero)) {// 自动补零
                                    rdMirror.setValue(rd, DyTableUtil.getFieldName("value", colsNum), dfNum.format(0.00));
                                    if (isYsz) {
                                        rdMirror.setValue(rd2, DyTableUtil.getFieldName("value", colsNum), dfNum.format(0.00));
                                    }
                                }
                            }
                            colsNum++;
                        }

                        if (StrUtil.isNotNull(mergeCellStr) && mergeCellStr.contains("#")) {
                            int mergeCol = Integer.parseInt(mergeCellStr.split("#")[2]);
                            // 跳过合并列
                            j += mergeCol - 1;
                        }
                    }
                }
                // 添加数据信息到数据集合
                rdList.add(rd);
                if (isYsz) {
                    rdList2.add(rd2);
                }
            }
        }
        return rdList;

    }

    private DyTableImportHelper matchExcel(String excelFileName, List<DyTableImportHelper> rbiList, File excelFile) {
        DyTableImportHelper rrm = null;
        for (DyTableImportHelper rm : rbiList) {
            if (matchByExcelName5(rm, excelFileName) || matchByExcelName2(rm, excelFileName) || matchByExcelName3(rm, excelFileName) || matchByExcelName4(rm, excelFileName)
                    || matchByExcelName(rm, excelFileName) || matchByExcelSheetName(rm, excelFile) || matchByExcelName6(rm, excelFileName)) {
                rrm = rm;
            }
        }
        // G33表特殊处理,这里只处理1010版本的G33报表
        if (rrm != null && (rrm.getTabCode().startsWith("G33") && rrm.getVersionNo().equals("1010"))) {
            String cn = getExcelCurrencyName(excelFile);
            DyTableInfo tableInfo = dyTableInfoService.getDyTableInfo(rrm.getTabCode().substring(0, 5) + cn, "1010");
            rrm = new DyTableImportHelper();
            rrm.setTabCode(tableInfo.getTabCode());
            rrm.setVersionNo(tableInfo.getVersionNo());
            rrm.setTableId(tableInfo.getTableId());
        }
        return rrm;
    }

    private DyTableImportHelper matchExcelXlsx(String excelFileName, List<DyTableImportHelper> rbiList, File excelFile) {
        DyTableImportHelper rrm = null;
        for (DyTableImportHelper rm : rbiList) {
            if (matchByExcelName5(rm, excelFileName) || matchByExcelName2(rm, excelFileName) || matchByExcelName3(rm, excelFileName) || matchByExcelName4(rm, excelFileName)
                    || matchByExcelName(rm, excelFileName) || matchByExcelSheetNameXlsx(rm, excelFile) || matchByExcelName6(rm, excelFileName)) {
                rrm = rm;
            }
        }
        // G33表特殊处理,这里只处理1010版本的G33报表
        if (rrm != null && (rrm.getTabCode().startsWith("G33") && rrm.getVersionNo().equals("1010"))) {
            String cn = getExcelCurrencyName(excelFile);
            DyTableInfo tableInfo = dyTableInfoService.getDyTableInfo(rrm.getTabCode().substring(0, 5) + cn, "1010");
            rrm = new DyTableImportHelper();
            rrm.setTabCode(tableInfo.getTabCode());
            rrm.setVersionNo(tableInfo.getVersionNo());
            rrm.setTableId(tableInfo.getTableId());
        }
        return rrm;
    }

    /**
     * 根据Excel中文名称匹配
     *
     * @param rm
     * @param excelFileName
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelName(DyTableImportHelper rm, String excelFileName) {
        if (rm.getTabName().equals(excelFileName)) {
            return true;
        }
        return false;
    }

    /**
     * 根据模板名称G0100_101
     *
     * @param rm
     * @param excelFileName
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelName2(DyTableImportHelper rm, String excelFileName) {
        String tabCodeName = rm.getTabCode() + "_" + rm.getVersionNo();
        if (tabCodeName.equals(excelFileName)) {
            return true;
        }
        return false;
    }

    /**
     * 根据报表名称SS_DD_G0100||G0100_sss_ss
     *
     * @param rm
     * @param excelFileName
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelName3(DyTableImportHelper rm, String excelFileName) {
        String[] es = excelFileName.split("_");
        if (rm.getTabCode().equals(es[0])) {
            return true;
        } else if (es.length >= 3 && rm.getTabCode().equals(es[2])) {
            return true;
        }
        return false;
    }

    /**
     * 根据匹配关键字
     *
     * @param rm
     * @param excelFileName
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelName4(DyTableImportHelper rm, String excelFileName) {
        if (StrUtil.isNull(rm.getKeys())) {
            return false;
        }
        String[] keys = rm.getKeys().split(";");
        for (String key : keys) {
            if (excelFileName.contains(key)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 根据名称G0100-141
     *
     * @param rm
     * @param excelFileName
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelName5(DyTableImportHelper rm, String excelFileName) {
        String tabCodeName = rm.getTabCode() + "-" + rm.getVersionNo();
        if (excelFileName.startsWith(tabCodeName)) {
            return true;
        }
        return false;
    }

    /**
     * 根据名称XXXXXXXX-G0100-141
     * 此方法为了适应各个机构特殊的EXCEL命名规范
     *
     * @param rm
     * @param excelFileName
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelName6(DyTableImportHelper rm, String excelFileName) {
        String tabCodeName = rm.getTabCode() + "-" + rm.getVersionNo();
        if (excelFileName.contains(tabCodeName)) {
            return true;
        }
        return false;
    }

    /**
     * 根据匹配关键字
     *
     * @param rm
     * @param excelFile
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelSheetName(DyTableImportHelper rm, File excelFile) {
        if (excelFile.length() > 0) {
            // 此处为使用excel的sheetname做为匹配条件,此处暂时屏蔽掉
            String sheetName = ExcelUtil.getExcelSheetName(excelFile);
            if (StrUtil.isNotNull(sheetName) && rm.getKeys().equals(sheetName)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 根据匹配关键字
     *
     * @param rm
     * @param excelFile
     * @return
     * @author efraiser.xiaxiaofeng
     */
    private boolean matchByExcelSheetNameXlsx(DyTableImportHelper rm, File excelFile) {
        if (excelFile.length() > 0) {
            // 此处为使用excel的sheetname做为匹配条件,此处暂时屏蔽掉
            String sheetName = ExcelUtil.getExcelSheetNameXlsx(excelFile);
            if (StrUtil.isNotNull(sheetName) && rm.getTabCode().equals(sheetName)) {
                return true;
            }
        }
        return false;
    }


    private String getExcelCurrencyName(File excelFile) {
        try {
            HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(excelFile));
            HSSFSheet sheet = workbook.getSheetAt(0);
            String value = ExcelUtil.getHssCellData(sheet.getRow(3).getCell(0)).replace("币种：", "").replace("币种:", "");
            if ("人民币".equals(value)) {
                value = "";
            }
            return value;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

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

    @RequestMapping("/doExportExcel")
    @ResponseBody
    public String doExportExcel( String reportId, HttpServletRequest req) {

        DyReportInfoServiceImpl dyReportInfoServiceImpl = (DyReportInfoServiceImpl) dyReportInfoService;
        DyTableInfoServiceImpl dyTableInfoServiceImpl = (DyTableInfoServiceImpl) dyTableInfoService;

        try {
            DyReportInfo rdReportInfo = dyReportInfoServiceImpl.fetch(reportId);
            DyTableInfo tableInfo = dyTableInfoServiceImpl.fetch(rdReportInfo.getTableId());
            File fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "." + tableInfo.getExcelFile().split("\\.")[1]);

            // 读取excel模板
            if (tableInfo.getExcelFile().endsWith("xls")) {
                POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(fi));
                HSSFWorkbook wb = new HSSFWorkbook(fs);
                HSSFSheet sheet = wb.getSheetAt(0);
                CellStyle cellNum = wb.createCellStyle();
                cellNum.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));

                List<String> tmPctList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
                Map<String, String> tccList = DyTableModelCache.getModelColumnContrastFileNum(tableInfo.getTableId());
                String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
                String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
                Map<String, String> dataMap = dyReportDataService.doInitDataMap(tableInfo.getTableId(), rdReportInfo.getReportId(), rdReportInfo.getReportDate());
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
                File tf = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "_" + SysBmglCache.getBmName(rdReportInfo.getBrNo()) + "_" + rdReportInfo.getReportDate() + ".xls");
                FileOutputStream out = new FileOutputStream(tf);
                wb.write(out);
                out.flush();
                out.close();
                return tf.getCanonicalPath();
            } else if (tableInfo.getExcelFile().endsWith("xlsx")) {
                XSSFWorkbook wb = new XSSFWorkbook(new FileInputStream(fi));
                XSSFSheet sheet = wb.getSheetAt(0);
                CellStyle cellNum = wb.createCellStyle();
                cellNum.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));

                List<String> tmPctList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());
                Map<String, String> tccList = DyTableModelCache.getModelColumnContrastFileNum(tableInfo.getTableId());
                String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
                String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
                Map<String, String> dataMap = dyReportDataService.doInitDataMap(tableInfo.getTableId(), rdReportInfo.getReportId(), rdReportInfo.getReportDate());
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
                File tf = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "_" + SysBmglCache.getBmName(rdReportInfo.getBrNo()) + "_" + rdReportInfo.getReportDate() + ".xlsx");
                FileOutputStream out = new FileOutputStream(tf);
                wb.write(out);
                out.flush();
                out.close();
                return tf.getCanonicalPath();
            }
            return null;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
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
}
