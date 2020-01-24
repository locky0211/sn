package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyCheckWithRdBfFormula;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dycheckwithrdbfformula.DyCheckWithRdBfFormulaService;
import com.efraiser.test.db.service.dy.dycheckwithrdbfformula.impl.DyCheckWithRdBfFormulaServiceImpl;
import com.efraiser.test.project.actiion.BaseController;
import org.nutz.dao.Chain;
import org.nutz.dao.Cnd;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("dy/checkRdBf")
public class DyCheckWithRdBfFormulaController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyCheckWithRdBfFormulaController.class);

    @Autowired
    private DyCheckWithRdBfFormulaService dyCheckWithRdBfFormulaService;

    @RequestMapping("/getDyCheckFormulaList")
    @ResponseBody
    public GridQueryPageResult getDyCheckFormulaList(String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize, HttpServletRequest req) {

        return dyCheckWithRdBfFormulaService.getDyCheckFormulaList(tabcode, checkFormula, vFlag, formulaType, pageIndex, pageSize);
    }

    @RequestMapping("/addFormula")
    @ResponseBody
    public RequestResult addFormula(@RequestBody DyCheckWithRdBfFormula dyCheckWithRdBfFormula, HttpServletRequest req) {
        if (StrUtil.isNull(dyCheckWithRdBfFormula.getcUser())) {
            SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
            dyCheckWithRdBfFormula.setcUser(sysUser.getUserId());
        }
        try {
            if (StrUtil.isNull(dyCheckWithRdBfFormula.getFormulaExplain())) {
                dyCheckWithRdBfFormula.setFormulaExplain("");
            }

            dyCheckWithRdBfFormula.setValidFlag("y");
            dyCheckWithRdBfFormula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));

            DyCheckWithRdBfFormulaServiceImpl dyCheckWithRdBfFormulaServiceImpl = (DyCheckWithRdBfFormulaServiceImpl) dyCheckWithRdBfFormulaService;
            dyCheckWithRdBfFormulaServiceImpl.dao().insert(dyCheckWithRdBfFormula);
            return requestResult(true, dyCheckWithRdBfFormula);
        } catch (Exception e) {
            logger.error("addFormula() error! dyCheckWithRdBfFormula:[" + JSONObject.toJSONString(dyCheckWithRdBfFormula) + "]", e);
        }
        return requestResult(false, null);

    }

    @RequestMapping("/toEditFormula")
    public ModelAndView toEditFormula(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);
        DyCheckWithRdBfFormula dyCheckWithRdBfFormula = dyCheckWithRdBfFormulaService.fetchToEditCheckFormula(id);
        if (dyCheckWithRdBfFormula != null) {
            modelAndView.addObject("Obj", dyCheckWithRdBfFormula);
        }

        return modelAndView;
    }

    @RequestMapping("/fetchFormula")
    @ResponseBody
    public Object fetchFormula(String id) {
        DyCheckWithRdBfFormula dyCheckWithRdBfFormula = dyCheckWithRdBfFormulaService.fetchToEditCheckFormula(id);

        return dyCheckWithRdBfFormula;
    }

    @RequestMapping("/deleteFormula")
    @ResponseBody
    public Object deleteFormula(String id, HttpServletRequest req) {
        DyCheckWithRdBfFormulaServiceImpl dyCheckWithRdBfFormulaServiceImpl = (DyCheckWithRdBfFormulaServiceImpl) dyCheckWithRdBfFormulaService;

        try {
            dyCheckWithRdBfFormulaServiceImpl.dao().delete(DyCheckWithRdBfFormula.class, id);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("deleteFormula() error! id:[" + id + "]", e);
            return requestResult(false, null);
        }

    }

    @RequestMapping("/updateCheckFormulaStatus")
    @ResponseBody
    public Object updateCheckFormulaStatus(String id, String validFlag, HttpServletRequest req) {
        try {
            if ("y".equals(validFlag)) {
                validFlag = "n";
            } else {
                validFlag = "y";
            }
            DyCheckWithRdBfFormula itb = dyCheckWithRdBfFormulaService.updateCheckFormulaValidFlag(id, validFlag);
            return requestResult(true, itb);
        } catch (Exception e) {
            logger.error("updateCheckFormulaStatus() error! id:[" + id + "], validFlag:[" + validFlag + "]", e);
            return requestResult(false, null);
        }
    }

    @RequestMapping("/updateFormula")
    @ResponseBody
    public Object updateFormula(@RequestBody DyCheckWithRdBfFormula dyCheckWithRdBfFormula, HttpServletRequest req) {
        try {
            if (StrUtil.isNull(dyCheckWithRdBfFormula.getFormulaExplain())) {
                dyCheckWithRdBfFormula.setFormulaExplain("");
            }
            DyCheckWithRdBfFormulaServiceImpl dyCheckWithRdBfFormulaServiceImpl = (DyCheckWithRdBfFormulaServiceImpl) dyCheckWithRdBfFormulaService;

            DyCheckWithRdBfFormula checkFormula = dyCheckWithRdBfFormulaServiceImpl.dao().fetch(DyCheckWithRdBfFormula.class, dyCheckWithRdBfFormula.getId());
            if (!dyCheckWithRdBfFormula.getCheckFormula().equals(checkFormula.getCheckFormula())) {
                dyCheckWithRdBfFormulaServiceImpl.dao().update(DyCheckWithRdBfFormula.class, Chain.make("checkFormula", dyCheckWithRdBfFormula.getCheckFormula()), Cnd.where("id", "=", dyCheckWithRdBfFormula.getId()));
            }
            if (!dyCheckWithRdBfFormula.getTabcode().equals(checkFormula.getTabcode())) {
                dyCheckWithRdBfFormulaServiceImpl.dao().update(DyCheckWithRdBfFormula.class, Chain.make("tabcode", dyCheckWithRdBfFormula.getTabcode()), Cnd.where("id", "=", dyCheckWithRdBfFormula.getId()));
            }
            if (!dyCheckWithRdBfFormula.getFormulaExplain().equals(checkFormula.getFormulaExplain())) {
                dyCheckWithRdBfFormulaServiceImpl.dao().update(DyCheckWithRdBfFormula.class, Chain.make("formulaExplain", dyCheckWithRdBfFormula.getFormulaExplain()), Cnd.where("id", "=", dyCheckWithRdBfFormula.getId()));
            }
            if (!dyCheckWithRdBfFormula.getFormulaType().equals(checkFormula.getFormulaType())) {
                dyCheckWithRdBfFormulaServiceImpl.dao().update(DyCheckWithRdBfFormula.class, Chain.make("formulaType", dyCheckWithRdBfFormula.getFormulaType()), Cnd.where("id", "=", dyCheckWithRdBfFormula.getId()));
            }
            if (!dyCheckWithRdBfFormula.getDeviationValue().equals(checkFormula.getDeviationValue())) {
                dyCheckWithRdBfFormulaServiceImpl.dao().update(DyCheckWithRdBfFormula.class, Chain.make("deviationValue", dyCheckWithRdBfFormula.getDeviationValue()), Cnd.where("id", "=", dyCheckWithRdBfFormula.getId()));
            }
            dyCheckWithRdBfFormulaServiceImpl.dao().update(DyCheckWithRdBfFormula.class, Chain.make("updateDate", dyCheckWithRdBfFormula.getUpdateDate()), Cnd.where("id", "=", dyCheckWithRdBfFormula.getId()));

            return requestResult(true, dyCheckWithRdBfFormula);
        } catch (Exception e) {
            logger.error("updateFormula() error! dyCheckWithRdBfFormula:[" + JSONObject.toJSONString(dyCheckWithRdBfFormula) + "]", e);
        }
        return requestResult(false, null);

    }
}
