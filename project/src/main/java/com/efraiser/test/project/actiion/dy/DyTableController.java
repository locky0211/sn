package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.nutz.R;
import com.efraiser.test.db.model.dy.*;
import com.efraiser.test.db.model.sys.CacheInfo;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.model.sys.SysUserDepartment;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dycheckformula.DyCheckFormulaService;
import com.efraiser.test.db.service.dy.dytablebasicinfo.DyTableBasicInfoService;
import com.efraiser.test.db.service.dy.dytablebasicinfo.impl.DyTableBasicInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.impl.DyTableInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.service.sys.cacheinfo.CacheInfoService;
import com.efraiser.test.db.service.sys.cacheinfo.impl.CacheInfoServiceImpl;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.db.service.sys.sysuserdepartment.SysUserDepartmentService;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("dy/table")
public class DyTableController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyTableController.class);

    @Autowired
    private DyTableBasicInfoService dyTableBasicInfoService;

    @Autowired
    private DyTableInfoService dyTableInfoService;
    @Autowired
    private DyTableModelService dyTableModelService;
    @Autowired
    private DyCheckFormulaService dyCheckFormulaService;
    @Autowired
    private SysUserDepService sysUserDepService;
    @Autowired
    private SysUserDepartmentService sysUserDepartmentService;

    @Autowired
    private CacheInfoService cacheInfoService;
    @Autowired
    private LocalConfig localConfig;

    @Autowired
    private DyTableUtil dyTableUtil;

    // 个人报表模板管理
    @RequestMapping("/getTableBasicInfoList")
    @ResponseBody
    public List<DyTableBasicInfo> getTableBasicInfoList(String tabCode) {

        return dyTableBasicInfoService.getTableBasicInfoList(tabCode);
    }

    /**
     * 更新报表状态 (y:启用 n:停用)
     *
     * @return
     */
    @RequestMapping("/updateTableInfoStatus")
    @ResponseBody
    public Object updateTableInfoStatus(String tabCode, String status) {
        try {
            if ("y".equals(status)) {
                status = "n";
            } else {
                status = "y";
            }
            DyTableBasicInfo rtb = dyTableBasicInfoService.updateTableInfoStatus(tabCode, status);
            return requestResult(true, rtb);
        } catch (Exception e) {
            logger.error("updateTableInfoStatus() error! tabCode:[" + tabCode + "],status:[" + status + "]", e);
            return requestResult(false, null);
        }
    }

    @RequestMapping("/getTableInfoListWj")
    @ResponseBody
    public Object getTableInfoListWj(String tabCode) {
        return dyTableInfoService.getTableInfoListWj(tabCode);
    }

    @RequestMapping("/getTableInfoList")
    @ResponseBody
    public Object getTableInfoList(String tabCode) {
        return dyTableInfoService.getTableInfoList(tabCode);
    }

    @RequestMapping("/addOrUpdateTableInfo")
    @ResponseBody
    public Object addOrUpdateTableInfo(String excelFilePath, @RequestBody DyTableInfo tableInfo) {
        List<DyTableModel> tableModels = null;
        List<DyTableModelPCT> tableModelPCTs = null;
        List<String> formulaList = null;
        // excel文件读出的公式中的列与导入系统后数据表中实际列对应关系Map<文件列，数据表列>
        List<Map<String, String>> colMapList = null;
        List<DyTableColumnContrast> rccList = null;
        String model = "edit";
        if (StrUtil.isNull(tableInfo.getTableId())) {
            tableInfo.setTableId(R.UU16());
            model = "add";
        }
        if (StrUtil.isNotNull(excelFilePath)) {
            if (tableInfo.getColInfo().split("@").length != tableInfo.getRowInfo().split("@").length) {
                return requestResult(false, "行信息和列信息数量不匹配");
            }
            tableModelPCTs = new ArrayList<DyTableModelPCT>();
            formulaList = new ArrayList<String>();
            rccList = new ArrayList<DyTableColumnContrast>();
            colMapList = new ArrayList<Map<String, String>>();
            if (excelFilePath.endsWith(".xls")) {
                tableModels = dyTableModelService.resolveTableExcelTemplate(tableInfo.getTableId(), tableInfo, excelFilePath, tableModelPCTs, formulaList, rccList, colMapList);
                if (tableModels == null) {
                    return requestResult(false, "解析模板文件失败,报表第一列不能为空!!!");
                }
            } else if (excelFilePath.endsWith(".xlsx")) {
                tableModels = dyTableModelService.resolveTableExcelTemplateXlsx(tableInfo.getTableId(), tableInfo, excelFilePath, tableModelPCTs, formulaList, rccList, colMapList);
                if (tableModels == null) {
                    return requestResult(false, "解析模板文件失败,报表第一列不能为空!!!");
                }
            }
            dyTableModelService.saveExcelFile(excelFilePath, localConfig.getProperties().getReportExcelTempletPath(), tableInfo);
        }
        if (StrUtil.isNotNull(excelFilePath) && tableModels == null) {
            return requestResult(false, "解析模板文件失败!");
        }

        // 保存表内自动计算校验公式 通过模板导入初始化
        if (formulaList != null && formulaList.size() > 0) {
            try {
                // 将excel中获取的公式List转入数据表中公式List
                List<DyAutoFormula> autoCheckFormulaList = dyCheckFormulaService.getCheckFormulaListByExcel(tableInfo, formulaList, colMapList);
                // 删除原有公式,保存现有公式
                dyCheckFormulaService.saveOrUpdateAutoCheckFormula(tableInfo.getTableId(), autoCheckFormulaList);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        try {
            DyTableBasicInfo tableBasicInfo = dyTableInfoService.saveOrUpdateTableInfo(tableInfo, tableModels, model, tableModelPCTs, rccList);
            if (tableBasicInfo != null) {
                String beanNames = "DyTableModelCache;DyTableModelHtmlCache";
                try {
                    doCacheInfoInit(beanNames);
                } catch (Exception e) {
                    return requestResult(false, "自定义模块缓存执行出错！");
                }
            }
            return requestResult(true, tableBasicInfo);
        } catch (Exception e) {
            logger.error("addOrUpdateTableInfo() error! excelFilePath:[" + excelFilePath + "],tableInfo:[" + JSONObject.toJSONString(tableInfo) + "]", e);
            return requestResult(false, "保存报表模板信息出错!");
        }
    }

    /**
     * 功能描述：执行自定义模版缓存
     *
     * @param beanNames
     * @throws Exception
     * @author
     * @date 2017年8月10日
     * @modify log:
     */
    private void doCacheInfoInit(String beanNames) throws Exception {
        List<String> bl = StrUtil.convertToList(beanNames);

        CacheInfoServiceImpl cacheInfoServiceImpl = (CacheInfoServiceImpl) cacheInfoService;

        List<CacheInfo> cacheInfos = cacheInfoServiceImpl.queryByIn("beanName", bl, "sortNum", true);
        for (CacheInfo cacheInfo : cacheInfos) {
            cacheInfoService.doCacheInit(cacheInfo);
        }
    }


    @RequestMapping("/checkTableVserionNo")
    @ResponseBody
    public boolean checkTableVserionNo(String tabCode, String versionNo) {
        if (dyTableInfoService.isExistsTableVserionNo(tabCode, versionNo)) {
            return false;
        }
        return true;
    }

    @RequestMapping("/toEditTableInfo")
    public ModelAndView toEditTableInfo(String tabCode, String versionNo, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyTableBasicInfo tbInfo = dyTableBasicInfoService.getbyTabCode(tabCode);
        DyTableInfo tInfo = dyTableInfoService.getDyTableInfo(tabCode, versionNo);

        modelAndView.addObject("tbInfo", tbInfo);
        modelAndView.addObject("tInfo", tInfo);
        return modelAndView;
    }

    @RequestMapping("/toAddTableInfoVersionNo")
    public void toAddTableInfoVersionNo(String tabCode, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyTableInfo tInfo = new DyTableInfo();
        tInfo.setTabCode(tabCode);

        modelAndView.addObject("tInfo", tInfo);
    }

    @RequestMapping("/fetchTableInfo")
    @ResponseBody
    public DyTableBasicInfo fetchTableInfo(String tabCode) {

        DyTableBasicInfoServiceImpl dyTableBasicInfoServiceImpl = (DyTableBasicInfoServiceImpl) dyTableBasicInfoService;
        return dyTableBasicInfoServiceImpl.fetch(tabCode);
    }

    @RequestMapping("/deleteTableBasicInfo")
    @ResponseBody
    public RequestResult deleteTableBasicInfo(String tabCode) {
        try {
            int count = dyTableInfoService.countByTabCode(tabCode);
            if (count > 0) {
                return requestResult(false, "报表存在版本信息,无法进行删除!");
            }

            DyTableBasicInfoServiceImpl dyTableBasicInfoServiceImpl = (DyTableBasicInfoServiceImpl) dyTableBasicInfoService;
            dyTableBasicInfoServiceImpl.delete(tabCode);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("deleteTableBasicInfo() error! tabCode:[" + tabCode + "]", e);
            return requestResult(false, "处理异常!!");
        }

    }

    @RequestMapping("/deleteTableInfo")
    @ResponseBody
    public Object deleteTableInfo(String tableId) {
        try {
            dyTableInfoService.deleteTableInfo(tableId);
            return true;
        } catch (Exception e) {
            logger.error("deleteTableInfo() error! tableId:[" + tableId + "]", e);
            return false;
        }

    }

    /**
     * 功能描述：获取报表版本号
     *
     * @param tabCode
     * @param reportDate
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    @RequestMapping("/getTableVersionNo")
    @ResponseBody
    public Object getTableVersionNo(String tabCode, String reportDate) {
        return dyTableInfoService.getTableVersionNo(tabCode, reportDate);
    }

    /**
     * 功能描述：获取当前登录人所要上报的报表列表
     *
     * @param req
     * @return
     * @author
     * @date 2016年10月26日
     * @modify log:
     */
    @RequestMapping("/getCheckFormulaYidongReport")
    @ResponseBody
    public Object getCheckFormulaYidongReport(String reportDate, HttpServletRequest req) {
        try {
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            if (sysUser.getUserId().equals("admin")) {
                return dyTableInfoService.getDyTableInfoList(sysUser, reportDate);
            } else {
                List<String> sysUserDep = sysUserDepService.getDepByUserId(sysUser.getUserId());
                String[] brNos = dyTableUtil.delParentNode(StrUtil.convertJoinString(sysUserDep, ",")).split(",");
                String bmType = "";
                String bmCategory = "";
                for (int i = 0; i < brNos.length; i++) {
                    SysBmgl bmgl = SysBmglCache.getBmglInfo(brNos[i]);
                    if (i == 0) {
                        bmType = bmType + bmgl.getBmType();
                        bmCategory = bmCategory + bmgl.getBmCategory();
                    } else {
                        bmType = bmType + "," + bmgl.getBmType();
                        bmCategory = bmCategory + "," + bmgl.getBmCategory();
                    }
                }
                return dyTableInfoService.getDytableInfoListByBmType(sysUser, bmType, bmCategory, reportDate);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }


    @RequestMapping("/doExportExcel")
    @ResponseBody
    public Object doExportExcel(String tableId) {
        DyTableInfoServiceImpl dyTableInfoServiceImpl =(DyTableInfoServiceImpl)dyTableInfoService;

        try {
            DyTableInfo tableInfo = dyTableInfoServiceImpl.fetch(tableId);
            File fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "." + tableInfo.getExcelFile().split("\\.")[1]);
            return fi.getCanonicalPath();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping("/getReportOrganTypes")
    @ResponseBody
    public Object getReportOrganTypes(HttpServletRequest req) {
        SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        List<SysUserDepartment> sudt = sysUserDepartmentService.getByUserId(sysUser.getUserId());
        System.out.println("sudt.get(0).getUserDepartment()" + sudt.get(0).getUserDepartment());
        return requestResult(true, sudt.get(0).getUserDepartment());
    }

}
