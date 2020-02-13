package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONArray;
import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.db.model.dy.DyCheckFormula;
import com.efraiser.test.db.model.dy.DyCheckFormulaTemp;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dycheckformula.DyCheckFormulaService;
import com.efraiser.test.db.service.dy.dycheckformula.impl.DyCheckFormulaServiceImpl;
import com.efraiser.test.db.service.dy.dycheckformularecord.DyCheckFormulaRecordService;
import com.efraiser.test.db.service.dy.dycheckformulatemp.DyCheckFormulaTempService;
import com.efraiser.test.db.service.dy.dytablecolumncontrast.DyTableColumnContrastService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.project.actiion.BaseController;
import com.efraiser.test.project.util.UpDownLoadUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("dy/check")
public class DyCheckFormulaController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyCheckFormulaController.class);

    @Autowired
    private DyCheckFormulaService dyCheckFormulaService;
    @Autowired
    private DyCheckFormulaTempService dyCheckFormulaTempService;


    @Autowired
    private LocalConfig localConfig;

    @RequestMapping("/importExcecl")
    @ResponseBody
    public RequestResult importExcecl(@RequestParam("file") MultipartFile file) {

        // 获取原始名字
        String fileName = file.getOriginalFilename();
        String fileSavePathName = "";//文件保存完整路径
        try {
            fileSavePathName = UpDownLoadUtil.uploadSaveFile(file, localConfig.getProperties().getTempStringPath());
            StringBuffer message = new StringBuffer();
            return requestResult(dyCheckFormulaService.importExcel(fileSavePathName, message), message);
        } catch (Exception e) {
            logger.error("importExcecl() error! file:[" + fileName + "],fileSavePathName:[" + fileSavePathName + "]", e);
            return requestResult(false, "");
        }
    }

    @RequestMapping("/exportExcel")
    @ResponseBody
    public String exportExcel(String id) {
        return dyCheckFormulaService.exportExcel(id);
    }

    @RequestMapping("/getDyCheckFormulaTemp")
    @ResponseBody
    public List<DyCheckFormulaTemp> getDyCheckFormulaTemp() {
        return dyCheckFormulaTempService.getDyCheckFormulaTemp();
    }

    @RequestMapping("/delCheckFormulaTemp")
    @ResponseBody
    public RequestResult delCheckFormulaTemp(String date) {
        try {
            dyCheckFormulaTempService.delCheckFormulaTemp(date);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("delCheckFormulaTemp() error! date:[" + date + "]", e);
            return requestResult(false, null);
        }
    }

    /**
     * 根据操作时间回滚校验公式
     *
     * @param date
     * @return
     */
    @RequestMapping("/rollbackCheckFormula")
    @ResponseBody
    public Object rollbackCheckFormula(String date) {
        try {

            dyCheckFormulaService.rollbackCheckFormula(date);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("rollbackCheckFormula() error! date:[" + date + "]", e);
            return requestResult(false, null);
        }
    }

    /**
     * 更新报表状态 (y:启用 n:停用)
     *
     * @return
     */
    @RequestMapping("/updateCheckFormulaStatus")
    @ResponseBody
    public RequestResult updateCheckFormulaStatus(String id, String validFlag, HttpServletRequest req) {
        try {
            if ("y".equals(validFlag)) {
                validFlag = "n";
            } else {
                validFlag = "y";
            }
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            DyCheckFormula rtb = dyCheckFormulaService.updateCheckFormulaValidFlag(id, validFlag, sysUser);
            return requestResult(true, rtb);
        } catch (Exception e) {
            logger.error("updateCheckFormulaStatus() error! id:[" + id + "], validFlag:[" + validFlag + "]", e);
            return requestResult(false, null);
        }
    }

    /**
     * 校验公式信息操作
     *
     * @param checkArea    校验类型
     * @param tabcode      报表代码
     * @param checkFormula 校验公式
     * @param vFlag        启用状态
     * @param pageIndex
     * @param pageSize
     * @return
     */
    @RequestMapping("/getDyCheckFormulaList")
    @ResponseBody
    public GridQueryPageResult getDyCheckFormulaList(String checkArea, String cUser, String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize, String sortField, String sortOrder, HttpServletRequest req) {
        if (StrUtil.isNull(cUser)) {
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            cUser = sysUser.getUserId();
        }

        return dyCheckFormulaService.getDyCheckFormulaList(checkArea, cUser, tabcode, checkFormula, vFlag, formulaType, pageIndex, pageSize, sortField, sortOrder);
    }

    /**
     * 校验公式信息操作(表外)
     *
     * @param checkArea    校验类型
     * @param tabcode      报表代码
     * @param checkFormula 校验公式
     * @param vFlag        启用状态
     * @param pageIndex
     * @param pageSize
     * @return
     */
    @RequestMapping("/getDyCheckFormulaListArea")
    @ResponseBody
    public GridQueryPageResult getDyCheckFormulaListArea(String cUser, String checkArea, String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize, String sortField, String sortOrder, HttpServletRequest req) {
        if (StrUtil.isNull(cUser)) {
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            cUser = sysUser.getUserId();
        }

        return dyCheckFormulaService.getDyCheckFormulaListArea(cUser,  checkArea,  tabcode,  checkFormula,  vFlag,  formulaType,  pageIndex,  pageSize,  sortField,  sortOrder);

    }


    /**
     * 修改时获取校验公式数据
     *
     * @param id   校验公式id
     * @param page
     * @return
     */
    @RequestMapping("/toEditCheckFormula")
    public ModelAndView toEditCheckFormula(String id, String page) {
        //加密前版本
        //return rdCheckFormulaDao.fetchToEditCheckFormula(id);

        DyCheckFormula dyCheckFormula = dyCheckFormulaService.fetchToEditCheckFormula(id);
        if (dyCheckFormula.getCheckFormula().contains("em_")) {
            dyCheckFormula.setCheckFormula(FormulaEncrypt.getFormulaDecrypt(dyCheckFormula.getCheckFormula()));
        }

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        modelAndView.addObject("obj", dyCheckFormula);

        return modelAndView;
    }


    /**
     * 新增或修改校验公式
     *
     * @param checkformula 校验公式对象
     * @param req
     * @return
     */
    @RequestMapping("/addOrUpdateCheckFormula")
    @ResponseBody
    public RequestResult addOrUpdateCheckFormula(@RequestBody DyCheckFormula checkformula, HttpServletRequest req) {
        try {
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            List<String> list = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if (StrUtil.isNull(checkformula.getcUser())) {
                checkformula.setcUser(sysUser.getUserId());
            }
            if (StrUtil.isNull(checkformula.getCheckFormulaMark())) {
                checkformula.setCheckFormulaMark("");
            }
            String formula = checkformula.getCheckFormula();
            checkformula.setCheckFormula(formula);

            if (StrUtil.isNotNull(checkformula.getId())) {
                dyCheckFormulaService.updateCheckFormula(checkformula, sysUser, list.get((0)));
            } else {

                DyCheckFormulaServiceImpl dyCheckFormulaServiceImpl = (DyCheckFormulaServiceImpl) dyCheckFormulaService;

                checkformula.setValidFlag("y");
                checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                dyCheckFormulaServiceImpl.dao().insert(checkformula);
                if ("admin".equals(list.get(0)) || "4".equals(list.get(0))) {
                    SysNotice sn = new SysNotice();
                    sn.setContent("<p><span style=\"font-size:12px;\">新增校验公式：&nbsp;&nbsp;" + checkformula.getTabcode() + "</span></p><p><span style=\"font-size:12px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                            + formula + "</span></p>");
                    sn.setTitle("自定义新增校验公式通知");
                    sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                    sn.setReleaseUser(sysUser.getUserName());
                    if (checkformula.getCheckFormula().contains("em_")) {
//					sn.setSql_ef("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
//								+ "VALUES("+ convert(checkformula.getId()) +"," + convert(checkformula.getTabcode()) + ","+ convert(checkformula.getCheckFormula()) +","+ convert(checkformula.getStartDate()) +","+ convert(checkformula.getEndDate()) +","+ convert(checkformula.getValidFlag()) +","+ convert(checkformula.getCheckRisk()) +","+ convert(checkformula.getDeviationValue()) +","+ convert(checkformula.getcUser()) +","+ convert(checkformula.getCheckFormulaMark()) +","+ convert(checkformula.getAutoComputeFlag()) +","+ convert(checkformula.getUpdateDate()) +","+ convert(checkformula.getType()) +","+ convert(checkformula.getCheckArea()) +")");
//					sn.setSql("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
//					            + "VALUES("+ convert(checkformula.getId()) +"," + convert(checkformula.getTabcode()) + ","+ convert(FormulaEncrypt.getFormulaDecrypt1(checkformula.getCheckFormula())) +","+ convert(checkformula.getStartDate()) +","+ convert(checkformula.getEndDate()) +","+ convert(checkformula.getValidFlag()) +","+ convert(checkformula.getCheckRisk()) +","+ convert(checkformula.getDeviationValue()) +","+ convert(checkformula.getcUser()) +","+ convert(checkformula.getCheckFormulaMark()) +","+ convert(checkformula.getAutoComputeFlag()) +","+ convert(checkformula.getUpdateDate()) +","+ convert(checkformula.getType()) +","+ convert(checkformula.getCheckArea()) +")");
                        sn.setSql_ef("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
                                + "VALUES(" + convert(checkformula.getId()) + "," + convert(checkformula.getTabcode()) + "," + convert(FormulaEncrypt.getFormulaDecrypt(checkformula.getCheckFormula())) + "," + convert(checkformula.getStartDate()) + "," + convert(checkformula.getEndDate()) + "," + convert(checkformula.getValidFlag()) + "," + convert(checkformula.getCheckRisk()) + "," + convert(checkformula.getDeviationValue()) + "," + convert(checkformula.getcUser()) + "," + convert(checkformula.getCheckFormulaMark()) + "," + convert(checkformula.getAutoComputeFlag()) + "," + convert(checkformula.getUpdateDate()) + "," + convert(checkformula.getType()) + "," + convert(checkformula.getCheckArea()) + ")");
                        sn.setSql("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
                                + "VALUES(" + convert(checkformula.getId()) + "," + convert(checkformula.getTabcode()) + "," + convert(FormulaEncrypt.getFormulaDecrypt1(checkformula.getCheckFormula())) + "," + convert(checkformula.getStartDate()) + "," + convert(checkformula.getEndDate()) + "," + convert(checkformula.getValidFlag()) + "," + convert(checkformula.getCheckRisk()) + "," + convert(checkformula.getDeviationValue()) + "," + convert(checkformula.getcUser()) + "," + convert(checkformula.getCheckFormulaMark()) + "," + convert(checkformula.getAutoComputeFlag()) + "," + convert(checkformula.getUpdateDate()) + "," + convert(checkformula.getType()) + "," + convert(checkformula.getCheckArea()) + ")");
                    } else {
//					sn.setSql_ef("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
//								+ "VALUES("+ convert(checkformula.getId()) +"," + convert(checkformula.getTabcode()) + ","+ convert(FormulaEncrypt.getFormulaEnctypt1(checkformula.getCheckFormula())) +","+ convert(checkformula.getStartDate()) +","+ convert(checkformula.getEndDate()) +","+ convert(checkformula.getValidFlag()) +","+ convert(checkformula.getCheckRisk()) +","+ convert(checkformula.getDeviationValue()) +","+ convert(checkformula.getcUser()) +","+ convert(checkformula.getCheckFormulaMark()) +","+ convert(checkformula.getAutoComputeFlag()) +","+ convert(checkformula.getUpdateDate()) +","+ convert(checkformula.getType()) +","+ convert(checkformula.getCheckArea()) +")");
//					sn.setSql("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
//					            + "VALUES("+ convert(checkformula.getId()) +"," + convert(checkformula.getTabcode()) + ","+ convert(checkformula.getCheckFormula()) +","+ convert(checkformula.getStartDate()) +","+ convert(checkformula.getEndDate()) +","+ convert(checkformula.getValidFlag()) +","+ convert(checkformula.getCheckRisk()) +","+ convert(checkformula.getDeviationValue()) +","+ convert(checkformula.getcUser()) +","+ convert(checkformula.getCheckFormulaMark()) +","+ convert(checkformula.getAutoComputeFlag()) +","+ convert(checkformula.getUpdateDate()) +","+ convert(checkformula.getType()) +","+ convert(checkformula.getCheckArea()) +")");
                        sn.setSql_ef("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
                                + "VALUES(" + convert(checkformula.getId()) + "," + convert(checkformula.getTabcode()) + "," + convert(checkformula.getCheckFormula()) + "," + convert(checkformula.getStartDate()) + "," + convert(checkformula.getEndDate()) + "," + convert(checkformula.getValidFlag()) + "," + convert(checkformula.getCheckRisk()) + "," + convert(checkformula.getDeviationValue()) + "," + convert(checkformula.getcUser()) + "," + convert(checkformula.getCheckFormulaMark()) + "," + convert(checkformula.getAutoComputeFlag()) + "," + convert(checkformula.getUpdateDate()) + "," + convert(checkformula.getType()) + "," + convert(checkformula.getCheckArea()) + ")");
                        sn.setSql("INSERT INTO DY.DY_CHECK_FORMULA (id,tabcode,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,C_USER,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,UPDATE_DATE,TYPE,CHECK_AREA) "
                                + "VALUES(" + convert(checkformula.getId()) + "," + convert(checkformula.getTabcode()) + "," + convert(checkformula.getCheckFormula()) + "," + convert(checkformula.getStartDate()) + "," + convert(checkformula.getEndDate()) + "," + convert(checkformula.getValidFlag()) + "," + convert(checkformula.getCheckRisk()) + "," + convert(checkformula.getDeviationValue()) + "," + convert(checkformula.getcUser()) + "," + convert(checkformula.getCheckFormulaMark()) + "," + convert(checkformula.getAutoComputeFlag()) + "," + convert(checkformula.getUpdateDate()) + "," + convert(checkformula.getType()) + "," + convert(checkformula.getCheckArea()) + ")");
                    }
                    dyCheckFormulaServiceImpl.dao().insert(sn);
                }
            }
            return requestResult(true, checkformula);
        } catch (Exception e) {
            logger.error("addOrUpdateCheckFormula() error! checkformula:[" + JSONArray.toJSONString(checkformula) + "]", e);
        }
        return requestResult(false, null);
    }

    @RequestMapping("/fetchCheckFormula")
    @ResponseBody
    public Object fetchCheckFormula(String id) {
        //加密前版本
        //return rdCheckFormulaDao.fetch(id);
        DyCheckFormula dyCheckFormula = dyCheckFormulaService.fetchToEditCheckFormula(id);
        if (dyCheckFormula.getCheckFormula().contains("em_")) {
            dyCheckFormula.setCheckFormula(FormulaEncrypt.getFormulaDecrypt(dyCheckFormula.getCheckFormula()));
        }
        return dyCheckFormula;
    }

    @RequestMapping("/deleteCheckFormula")
    @ResponseBody
    public Object deleteCheckFormula(String id, HttpServletRequest req) {

        DyCheckFormulaServiceImpl dyCheckFormulaServiceImpl = (DyCheckFormulaServiceImpl) dyCheckFormulaService;

        try {
            DyCheckFormula rtb = dyCheckFormulaServiceImpl.fetch(id);
            String formula = FormulaEncrypt.getFormulaDecrypt(rtb.getCheckFormula());
            dyCheckFormulaServiceImpl.delete(id);
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            List<String> list = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            if ("admin".equals(list.get(0)) || "4".equals(list.get(0))) {
                SysNotice sn = new SysNotice();
                sn.setContent("<p><span style=\"font-size:12px;\">公式:&nbsp;&nbsp;" + formula
                        + "</span></p><p><span style=\"font-size:12px;\">被&nbsp;&nbsp;<font color=\"red\">删除</font></span></p>");
                sn.setTitle("自定义公式删除通知");
                sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                sn.setReleaseUser(sysUser.getUserName());
                if (formula.contains("em_")) {
                    sn.setSql_ef("DELETE FROM DY.DY_CHECK_FORMULA WHERE TABCODE = " + convert(rtb.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(formula) + ""
                            + ",START_DATE = " + convert(rtb.getStartDate()) + ""
                            + ",END_DATE = " + convert(rtb.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(rtb.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(rtb.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(rtb.getDeviationValue()) + ""
                            + ",C_USER = " + convert(rtb.getcUser()) + "");
                    sn.setSql("DELETE FROM DY.DY_CHECK_FORMULA WHERE TABCODE = " + convert(rtb.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(FormulaEncrypt.getFormulaDecrypt1(formula)) + ""
                            + ",START_DATE = " + convert(rtb.getStartDate()) + ""
                            + ",END_DATE = " + convert(rtb.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(rtb.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(rtb.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(rtb.getDeviationValue()) + ""
                            + ",C_USER = " + convert(rtb.getcUser()) + "");
                } else {
//					sn.setSql_ef("DELETE FROM DY.DY_CHECK_FORMULA WHERE TABCODE = "+ convert(rtb.getTabcode()) +""
//							+ ",CHECK_FORMULA = "+ convert(FormulaEncrypt.getFormulaEnctypt1(formula)) +""
//							+ ",START_DATE = "+ convert(rtb.getStartDate()) +""
//							+ ",END_DATE = "+ convert(rtb.getEndDate()) +""
//							+ ",VALID_FLAG = "+ convert(rtb.getValidFlag()) +""
//						    + ",CHECK_RISK = "+ convert(rtb.getCheckRisk()) +""
//						    + ",DEVIATION_VALUE = "+ convert(rtb.getDeviationValue()) +""
//						    + ",C_USER = "+ convert(rtb.getcUser()) +"");
                    sn.setSql_ef("DELETE FROM DY.DY_CHECK_FORMULA WHERE TABCODE = " + convert(rtb.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(formula) + ""
                            + ",START_DATE = " + convert(rtb.getStartDate()) + ""
                            + ",END_DATE = " + convert(rtb.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(rtb.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(rtb.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(rtb.getDeviationValue()) + ""
                            + ",C_USER = " + convert(rtb.getcUser()) + "");
                    sn.setSql("DELETE FROM DY.DY_CHECK_FORMULA WHERE TABCODE = " + convert(rtb.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(formula) + ""
                            + ",START_DATE = " + convert(rtb.getStartDate()) + ""
                            + ",END_DATE = " + convert(rtb.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(rtb.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(rtb.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(rtb.getDeviationValue()) + ""
                            + ",C_USER = " + convert(rtb.getcUser()) + "");
                }
                dyCheckFormulaServiceImpl.dao().insert(sn);
            }
            return true;
        } catch (Exception e) {
            logger.error("deleteCheckFormula() error! id:[" + id + "]", e);
            return false;
        }
    }

    @RequestMapping("/checkIsOnly")
    @ResponseBody
    public RequestResult checkIsOnly(String id, String checkFormula) {
//		if (dyCheckFormulaService.checkIsOnly(id, "ID", FormulaEncrypt.getFormulaEnctypt(checkFormula), "CHECK_FORMULA")) {
        if (dyCheckFormulaService.checkIsOnly(id, "ID", checkFormula, "CHECK_FORMULA")) {
            return requestResult(false, "公式 ' " + checkFormula + " ' 已存在!!");
        }
        return requestResult(true, "");
    }

    private String convert(Object param) {
        if (param == null) {
            return null;
        }
        return "'" + param + "'";
    }

}
