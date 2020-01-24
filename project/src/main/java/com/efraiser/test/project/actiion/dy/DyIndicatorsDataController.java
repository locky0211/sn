package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.ExcelUtil;
import com.efraiser.test.common.util.FileUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsData;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.DyIndicatorsBasicInfoService;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.impl.DyIndicatorsBasicInfoServiceImpl;
import com.efraiser.test.db.service.dy.dyindicatorsdata.DyIndicatorsDataService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.project.actiion.BaseController;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("dy/ind/data")
public class DyIndicatorsDataController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyIndicatorsDataController.class);

    @Autowired
    private DyIndicatorsDataService dyIndicatorsDataService;
    @Autowired
    private DyIndicatorsBasicInfoService dyIndicatorsBasicInfoService;
    @Autowired
    private SysBmglService sysBmglService;

    @Autowired
    private LocalConfig localConfig;

    @RequestMapping("/doExportExcel")
    @ResponseBody
    public Object doExportExcel(String brNo, String dataDate, String indType, HttpSession session) {

        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        List<DyIndicatorsData> idLists = dyIndicatorsDataService.getDyIndDatas(brNo, dataDate, indType, user.getUserId());
        String bmName = SysBmglCache.getBmName(brNo);
        try {
            // excel模板路径
            File fi = new File(SystemConstants.SYSTEM_PATH + File.separator + "rd" + File.separator + "template" + File.separator + "机构指标报表模板.xls");
            POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(fi));
            // 读取excel模板
            HSSFWorkbook wb = new HSSFWorkbook(fs);
            HSSFSheet sheet = wb.getSheetAt(0);
            HSSFCell cell = null;
            HSSFRow row = null;
            CellStyle csTdC = ExcelUtil.createBorderCellStyle(wb, CellStyle.ALIGN_CENTER);
            row = sheet.getRow(2);
            cell = row.getCell(1);
            cell.setCellValue(bmName);
            cell = row.getCell(3);
            cell.setCellValue(dataDate);

            DyIndicatorsBasicInfoServiceImpl dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;

            for (int i = 0; i < idLists.size(); i++) {
                DyIndicatorsData id = idLists.get(i);
                row = sheet.createRow(i + 4);
                cell = row.createCell(0);
                cell.setCellStyle(csTdC);
                cell.setCellValue(i);
                cell = row.createCell(1);
                cell.setCellStyle(csTdC);
                cell.setCellValue(id.getIndName());
                cell = row.createCell(2);
                cell.setCellStyle(csTdC);
                try {
                    if ("y".equals(id.getIsPercent())) {
                        cell.setCellValue(id.getIndValue() + "%");
                    } else {
                        cell.setCellValue(id.getIndValue());
                    }
                } catch (Exception e) {
                    cell.setCellValue("");
                }
                cell = row.createCell(3);
                cell.setCellStyle(csTdC);
                try {
                    if (DateUtil.isQuarterDate(DateUtil.parse(dataDate, "yyyyMM"))) {
                        DyIndicatorsBasicInfo bi = dyIndicatorsBasicInfoServiceImpl.fetch(id.getIndId());
                        if ("1".equals(bi.getIndType())) {
                            cell.setCellValue(id.getSjCon());
                        } else {
                            cell.setCellValue(id.getSqCon());
                        }
                    } else {
                        cell.setCellValue(id.getSqCon());
                    }
                } catch (Exception e) {
                    logger.error("doExportExcel()", e);
                    cell.setCellValue("");
                }
                cell = row.createCell(4);
                cell.setCellStyle(csTdC);
                try {
                    cell.setCellValue(id.getNcCon());
                } catch (Exception e) {
                    logger.error("doExportExcel()", e);
                    cell.setCellValue("");
                }
                cell = row.createCell(5);
                cell.setCellStyle(csTdC);
                try {
                    cell.setCellValue(id.getQntqCon());
                } catch (Exception e) {
                    logger.error("doExportExcel()", e);
                    cell.setCellValue("");
                }
            }

            File tf = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + bmName + "_" + dataDate + "_" + SysGgzdCache.getSysGgzdName("RD_IND_CYCLE", indType) + "_指标数据.xls");
            FileOutputStream out = new FileOutputStream(tf);
            wb.write(out);
            out.close();
            return tf.getCanonicalPath();
        } catch (Exception e) {
            logger.error("doExportExcel() error! brNo:["+brNo+"],dataDate:["+dataDate+"],indType:["+indType+"]", e);
        }
        return null;
    }

    @RequestMapping("/getDyIndDatas")
    @ResponseBody
    public Object getDyIndDatas(String brNo, String dataDate, String indType, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        List<DyIndicatorsData> dyList = dyIndicatorsDataService.getDyIndDatas(brNo, dataDate, indType, user.getUserId());
        if (dyList.size() > 0) {
            List<String> inds = new ArrayList<String>();
            for (DyIndicatorsData dy : dyList) {
                inds.add(dy.getpId());
            }
            dyList.addAll(0, dyIndicatorsDataService.getDyIndDatasForTree(inds));
            return dyList;
        } else {
            return null;
        }

    }

    @RequestMapping("/getBrNoLists")
    @ResponseBody
    public Object getBrNoLists(String indId, HttpSession session) {

        DyIndicatorsBasicInfoServiceImpl dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;
        DyIndicatorsBasicInfo bi = dyIndicatorsBasicInfoServiceImpl.fetch(indId);
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return dyIndicatorsDataService.getBrNoListsByInd(bi, user.getUserId());
    }

    @RequestMapping("/getDyIndLists")
    @ResponseBody
    public Object getDyIndLists(String brNo, String indType, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return dyIndicatorsBasicInfoService.getDyIndBasicInfoLists(brNo, indType, user.getUserId());
    }

    @RequestMapping("/initIndData1")
    @ResponseBody
    public Object initIndData1(String brNo, String sDate) {
        StringBuffer results = new StringBuffer();
        results.append("===开始计算[" + SysBmglCache.getBmName(brNo) + "]指标数据==============<br>");
        results.append(dyIndicatorsDataService.initIndDate(brNo, null, sDate));
        return results.toString();
    }

    @RequestMapping("/initIndData2")
    @ResponseBody
    public Object initIndData2(String bId, String brNoStr, String sDate) {
        List<String> brs = StrUtil.convertToList(brNoStr, ",");
        DyIndicatorsBasicInfoServiceImpl dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;

        DyIndicatorsBasicInfo bInfo = dyIndicatorsBasicInfoServiceImpl.fetch(bId);
        StringBuffer results = new StringBuffer();
        for (String brNo : brs) {
            SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
            if (StrUtil.isNull(bmgl.getBmType())) {
                continue;
            }
            results.append("===开始计算[" + bmgl.getBmName() + "]指标数据==============<br>");
            results.append(dyIndicatorsDataService.initIndDate(brNo, bInfo, sDate));
        }
        return results.toString();
    }
}
