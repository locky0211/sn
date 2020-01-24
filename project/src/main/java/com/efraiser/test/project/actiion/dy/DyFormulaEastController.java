package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.FormulaEncrypt;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyFormulaEast;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dyformulaeEast.DyFormulaEastService;
import com.efraiser.test.db.service.dy.dyformulaeEast.impl.DyFormulaEastServiceImpl;
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
 * @ProjectName: [com.efraiser.sam]
 * @Package: [com.efraiser.rd.action]
 * @ClassName: [RdFormulaEastAction]
 * 类描述：1104和EAST校验公式维护类
 */
@Controller
@RequestMapping("dy/formula/east")
public class DyFormulaEastController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyFormulaEastController.class);

    @Autowired
    private DyFormulaEastService dyFormulaEastService;


    @RequestMapping("/addOrUpdateFormula")
    @ResponseBody
    public Object addOrUpdateFormula(@RequestBody DyFormulaEast dyFormulaEast, HttpSession httpsession) {

        DyFormulaEastServiceImpl dyFormulaEastServiceImpl = (DyFormulaEastServiceImpl) dyFormulaEastService;

        try {
            String formulaNew = dyFormulaEast.getEastContent();
//			dyFormulaEast.setEastContent(FormulaEncrypt.getFormulaEnctypt(dyFormulaEast.getEastContent()));
            dyFormulaEast.setEastContent(dyFormulaEast.getEastContent());
            if (StrUtil.isNull(dyFormulaEast.getId())) {
                dyFormulaEastService.addFormula(dyFormulaEast);
                SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
                SysNotice sn = new SysNotice();
                sn.setContent("<p><span style=\"font-size:12px;\">新增校验公式：&nbsp;&nbsp;" + dyFormulaEast.getEastTableName() + "&nbsp;&nbsp;" + dyFormulaEast.getSamTableName() + "</span></p><p><span style=\"font-size:12px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + formulaNew + "</span></p>");
                sn.setTitle("新增校验公式通知");
                sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                sn.setReleaseUser(user.getUserName());
                dyFormulaEastServiceImpl.dao().insert(sn);
            } else {
                SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
                DyFormulaEast dyFormulaEast1 = dyFormulaEastServiceImpl.fetch(dyFormulaEast.getId());
                String formulaOld = FormulaEncrypt.getFormulaDecrypt(dyFormulaEast1.getEastContent());
                dyFormulaEastService.updateFormula(dyFormulaEast);
                StringBuffer str = new StringBuffer("<p><span style=\"font-size:12px;\">校验公式:&nbsp;" + dyFormulaEast1.getEastTableName() + "&nbsp;" + dyFormulaEast1.getSamTableName() + "&nbsp;&nbsp;[" + formulaOld
                        + "] &nbsp; &nbsp;被修改!!</span></p>");
                SysNotice sn = new SysNotice();
                if (!dyFormulaEast1.getEastTableName().equals(dyFormulaEast.getEastTableName())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验表名:&nbsp;" + dyFormulaEast1.getEastTableName() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getEastTableName() + "</span></p>");

                }
                if (!dyFormulaEast1.getSamTableName().equals(dyFormulaEast.getSamTableName())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验表名:&nbsp;" + dyFormulaEast1.getSamTableName() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getSamTableName() + "</span></p>");

                }
                if (!formulaOld.equals(formulaNew)) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式:&nbsp;" + formulaOld + " &nbsp; &nbsp;修改为:&nbsp;" + formulaNew + "</span></p>");

                }
                if (!dyFormulaEast1.getSamContent().equals(dyFormulaEast.getSamContent())) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式:&nbsp;" + dyFormulaEast1.getSamContent() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getSamContent() + "</span></p>");

                }
                if (!dyFormulaEast1.getEastExplain().equals(dyFormulaEast.getEastExplain())) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式解释:&nbsp;" + dyFormulaEast1.getEastExplain() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getEastExplain() + "</span></p>");

                }
                if (!dyFormulaEast1.getSamExplain().equals(dyFormulaEast.getSamExplain())) {
                    str.append("<p><span style=\"font-size:12px;\">原取数公式解释:&nbsp;" + dyFormulaEast1.getSamExplain() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getSamExplain() + "</span></p>");

                }
                if (!dyFormulaEast1.getFormulaOp().equals(dyFormulaEast.getFormulaOp())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验公式运算符:&nbsp;" + dyFormulaEast1.getFormulaOp() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getFormulaOp() + "</span></p>");

                }
                if (!dyFormulaEast1.getFormulaType().equals(dyFormulaEast.getFormulaType())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验公式类型:&nbsp;" + dyFormulaEast1.getFormulaType() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getFormulaType() + "</span></p>");

                }
                if (!dyFormulaEast1.getFormulaDesc().equals(dyFormulaEast.getFormulaDesc())) {
                    str.append("<p><span style=\"font-size:12px;\">原检验公式描述:&nbsp;" + dyFormulaEast1.getFormulaDesc() + " &nbsp; &nbsp;修改为:&nbsp;" + dyFormulaEast.getFormulaDesc() + "</span></p>");

                }
                sn.setTitle("公式修订通知");
                sn.setContent(str.toString());
                sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                sn.setReleaseUser(user.getUserName());
                dyFormulaEastServiceImpl.dao().insert(sn);
            }
            return true;
        } catch (Exception e) {
            logger.error("addOrUpdateFormula() error! dyFormula:[" + JSONObject.toJSONString(dyFormulaEast) + "]", e);
            return false;
        }

    }

    @RequestMapping("/deleteFormula")
    @ResponseBody
    public Object deleteFormula(String id, HttpSession httpsession) {
        DyFormulaEastServiceImpl dyFormulaEastServiceImpl = (DyFormulaEastServiceImpl) dyFormulaEastService;

        try {
            SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
            DyFormulaEast dyFormulaEast = dyFormulaEastServiceImpl.fetch(id);
            String formula = FormulaEncrypt.getFormulaDecrypt(dyFormulaEast.getEastContent());
            dyFormulaEastServiceImpl.dao().delete(DyFormulaEast.class, id);
            SysNotice sn = new SysNotice();
            sn.setContent("<p><span style=\"font-size:12px;\">公式:&nbsp;&nbsp;" + formula
                    + "</span></p><p><span style=\"font-size:12px;\">被&nbsp;&nbsp;<font color=\"red\">删除</font></span></p>");
            sn.setTitle("公式删除通知");
            sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            sn.setReleaseUser(user.getUserName());
            dyFormulaEastServiceImpl.dao().insert(sn);
            dyFormulaEastServiceImpl.deleteCheckResult(id);
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

        DyFormulaEastServiceImpl dyFormulaEastServiceImpl = (DyFormulaEastServiceImpl) dyFormulaEastService;
        DyFormulaEast dyFormulaEast = dyFormulaEastServiceImpl.dao().fetch(DyFormulaEast.class, id);

        if (dyFormulaEastServiceImpl != null) {
            dyFormulaEast.setEastContent(FormulaEncrypt.getFormulaDecrypt(dyFormulaEast.getEastContent()));
            modelAndView.addObject("obj", dyFormulaEast);
        }
        return modelAndView;
    }


    @RequestMapping("/getFormulaList")
    @ResponseBody
    public GridQueryPageResult getFormulaList(String eastTableName, String samTableName, String formulaState, int pageIndex, int pageSize) {
        GridQueryPageResult gqpr = dyFormulaEastService.getFormulaList(eastTableName, samTableName, formulaState, pageIndex, pageSize);
        return gqpr;
    }

    @RequestMapping("/updateFormulaState")
    @ResponseBody
    public Object updateFormulaState(String id, HttpSession httpsession) {
        DyFormulaEastServiceImpl dyFormulaEastServiceImpl = (DyFormulaEastServiceImpl) dyFormulaEastService;

        try {
            SysUser user = (SysUser) httpsession.getAttribute(SystemConstants.SESSION_USER);
            DyFormulaEast dyFormulaEast = dyFormulaEastService.updateCheckFormulaState(id);
            String formula = FormulaEncrypt.getFormulaDecrypt(dyFormulaEast.getEastContent());
            SysNotice sn = new SysNotice();
            String s = "";
            if ("1".equals(dyFormulaEast.getFormulaState())) {
                s = "<font color=\"blue\">启用</font>";
            } else {
                s = "<font color=\"red\">停用</font>";
            }
            sn.setContent("<p><span style=\"font-size:12px;\">公式:&nbsp;&nbsp;" + formula + "</span></p><p><span style=\"font-size:12px;\">被&nbsp;&nbsp;" + s + "</span></p>");
            sn.setTitle("公式修订通知");
            sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            sn.setReleaseUser(user.getUserName());
            dyFormulaEastServiceImpl.dao().insert(sn);
            return requestResult(true, dyFormulaEast);
        } catch (Exception e) {
            logger.error("updateFormulaState() error! id:[" + id + "]", e);
            return requestResult(false, e.getMessage());
        }
    }

}
