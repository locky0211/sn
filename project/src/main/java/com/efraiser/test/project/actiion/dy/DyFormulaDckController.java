package com.efraiser.test.project.actiion.dy;


import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.FormulaEncrypt;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyFormulaDck;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dyFormuladck.DyFormulaDckService;
import com.efraiser.test.db.service.dy.dyFormuladck.impl.DyFormulaDckServiceImpl;
import com.efraiser.test.project.actiion.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * @ProjectName: [com.efraiser.check]
 * @Package: [com.efraiser.sam.action]
 * @ClassName: [RdFormulaAction]
 * 类描述：1104和客户风险校验公式维护类
 */
@Controller
@RequestMapping("dy/formula")
public class DyFormulaDckController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyReportImportController.class);

    @Autowired
    private DyFormulaDckService dyFormulaDckService;

    /**
     * 功能描述：新增或更新校验公式
     */
    @RequestMapping("/addOrUpdateFormula")
    @ResponseBody
    public Object addOrUpdateFormula(@RequestBody DyFormulaDck dyFormula, HttpSession httpsession) {

        DyFormulaDckServiceImpl dyFormulaDckServiceImpl = (DyFormulaDckServiceImpl) dyFormulaDckService;

        try {
            String formulaNew = dyFormula.getDckContent();
//			dyFormula.setDckContent(FormulaEncrypt.getFormulaEnctypt(dyFormula.getDckContent()));
            dyFormula.setDckContent(dyFormula.getDckContent());
            if (StrUtil.isNull(dyFormula.getId())) {
                SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
                dyFormulaDckService.addFormula(dyFormula);
                SysNotice sn = new SysNotice();
                sn.setContent("<p><span style=\"font-size:12px;\">新增校验公式：&nbsp;&nbsp;" + dyFormula.getDckTableName() + "&nbsp;&nbsp;" + dyFormula.getSamTableName() + "</span></p><p><span style=\"font-size:12px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + formulaNew + "</span></p>");
                sn.setTitle("新增校验公式通知");
                sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                sn.setReleaseUser(user.getUserName());
                dyFormulaDckServiceImpl.dao().insert(sn);
            } else {
                DyFormulaDck dyFormula1 = dyFormulaDckServiceImpl.fetch(dyFormula.getId());
                String formulaOld = FormulaEncrypt.getFormulaDecrypt(dyFormula1.getDckContent());
                dyFormulaDckService.updateFormula(dyFormula);
                SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
                SysNotice sn = new SysNotice();
                StringBuffer str = new StringBuffer("<p><span style=\"font-size:12px;\">校验公式:&nbsp;" + dyFormula1.getDckTableName() + "&nbsp;&nbsp;" + dyFormula.getSamTableName() + "&nbsp;&nbsp;[" + formulaOld
                        + "] &nbsp; &nbsp;被修改!!</span></p>");
                if (!dyFormula1.getDckTableName().equals(dyFormula.getDckTableName())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验表名:&nbsp;" + dyFormula1.getDckTableName() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getDckTableName() + "</span></p>");

                }
                if (!dyFormula1.getSamTableName().equals(dyFormula.getSamTableName())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验表名:&nbsp;" + dyFormula1.getSamTableName() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getSamTableName() + "</span></p>");

                }
                if (!formulaOld.equals(formulaNew)) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式:&nbsp;" + formulaOld + " &nbsp; &nbsp;修改为:&nbsp;" + formulaNew + "</span></p>");

                }
                if (!dyFormula1.getSamContent().equals(dyFormula.getSamContent())) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式:&nbsp;" + dyFormula1.getSamContent() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getSamContent() + "</span></p>");

                }
                if (!dyFormula1.getDckExplain().equals(dyFormula.getDckExplain())) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式解释:&nbsp;" + dyFormula1.getDckExplain() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getDckExplain() + "</span></p>");

                }
                if (!dyFormula1.getSamExplain().equals(dyFormula.getSamExplain())) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式解释:&nbsp;" + dyFormula1.getSamExplain() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getSamExplain() + "</span></p>");

                }
                if (!dyFormula1.getFormulaOp().equals(dyFormula.getFormulaOp())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验公式运算符:&nbsp;" + dyFormula1.getFormulaOp() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getFormulaOp() + "</span></p>");

                }
                if (!dyFormula1.getFormulaType().equals(dyFormula.getFormulaType())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验公式类型:&nbsp;" + dyFormula1.getFormulaType() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getFormulaType() + "</span></p>");

                }
                if (!dyFormula1.getFormulaDesc().equals(dyFormula.getFormulaDesc())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验公式描述:&nbsp;" + dyFormula1.getFormulaDesc() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormula.getFormulaDesc() + "</span></p>");

                }
                sn.setTitle("公式修订通知");
                sn.setContent(str.toString());
                sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                sn.setReleaseUser(user.getUserName());
                dyFormulaDckServiceImpl.dao().insert(sn);
            }
            return true;
        } catch (Exception e) {
            logger.error("addOrUpdateFormula() error! dyFormula:[" + JSONObject.toJSONString(dyFormula) + "]", e);
            return false;
        }

    }

    @RequestMapping("/deleteFormula")
    @ResponseBody
    public Object deleteFormula(String id, HttpSession httpsession) {
        DyFormulaDckServiceImpl dyFormulaDckServiceImpl = (DyFormulaDckServiceImpl) dyFormulaDckService;

        try {
            DyFormulaDck dyFormula = dyFormulaDckServiceImpl.fetch(id);
            dyFormulaDckServiceImpl.dao().delete(DyFormulaDck.class, id);
            String formulaOld = FormulaEncrypt.getFormulaDecrypt(dyFormula.getDckContent());
            SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
            SysNotice sn = new SysNotice();
            sn.setContent("<p><span style=\"font-size:12px;\">公式:&nbsp;&nbsp;" + formulaOld
                    + "</span></p><p><span style=\"font-size:12px;\">被&nbsp;&nbsp;<font color=\"red\">删除</font></span></p>");
            sn.setTitle("公式删除通知");
            sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            sn.setReleaseUser(user.getUserName());
            dyFormulaDckServiceImpl.dao().insert(sn);
            dyFormulaDckServiceImpl.deleteCheckResult(id);
            return true;
        } catch (Exception e) {
            logger.error("deleteFormula() error! id:[" + id + "]", e);
            return false;
        }
    }

    @RequestMapping("/getFormulaById")
    public ModelAndView getFormulaById(String id, String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        DyFormulaDckServiceImpl dyFormulaDckServiceImpl = (DyFormulaDckServiceImpl) dyFormulaDckService;
        DyFormulaDck dyFormulaDck = dyFormulaDckServiceImpl.dao().fetch(DyFormulaDck.class, id);
        if (dyFormulaDck != null) {
            dyFormulaDck.setDckContent(FormulaEncrypt.getFormulaDecrypt(dyFormulaDck.getDckContent()));
            modelAndView.addObject("obj", dyFormulaDck);
        }
        return modelAndView;
    }

    /**
     * 功能描述：分页获取公式序列
     *
     * @param dckTableName
     * @param samTableName
     * @param pageIndex
     * @param pageSize
     * @return
     * @author wushuo
     * @date 2016年1月26日
     * @modify log:
     */
    @RequestMapping("/getFormulaList")
    @ResponseBody
    public Object getFormulaList(String dckTableName, String samTableName, String formulaState, int pageIndex, int pageSize) {
        GridQueryPageResult gqpr = dyFormulaDckService.getFormulaList(dckTableName, samTableName, formulaState, pageIndex, pageSize);
        return gqpr;
    }

    @RequestMapping("/updateFormulaState")
    @ResponseBody
    public Object updateFormulaState(String id, HttpSession httpsession) {
        DyFormulaDckServiceImpl dyFormulaDckServiceImpl = (DyFormulaDckServiceImpl) dyFormulaDckService;

        try {
            SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
            DyFormulaDck dyFormula = dyFormulaDckService.updateCheckFormulaState(id);
            String formulaOld = FormulaEncrypt.getFormulaDecrypt(dyFormula.getDckContent());
            SysNotice sn = new SysNotice();
            String s = "";
            if ("1".equals(dyFormula.getFormulaState())) {
                s = "<font color=\"blue\">启用</font>";
            } else {
                s = "<font color=\"red\">停用</font>";
            }
            sn.setContent("<p><span style=\"font-size:12px;\">公式:&nbsp;&nbsp;" + formulaOld + "</span></p><p><span style=\"font-size:12px;\">被&nbsp;&nbsp;" + s + "</span></p>");
            sn.setTitle("公式修订通知");
            sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            sn.setReleaseUser(user.getUserName());

            dyFormulaDckServiceImpl.dao().insert(sn);
            return requestResult(true, dyFormula);
        } catch (Exception e) {
            logger.error("updateFormulaState() error! id:[" + id + "]", e);
            return requestResult(false, e.getMessage());
        }
    }
}
