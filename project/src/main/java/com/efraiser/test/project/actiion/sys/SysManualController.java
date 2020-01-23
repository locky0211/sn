package com.efraiser.test.project.actiion.sys;


import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysManual;
import com.efraiser.test.db.service.sys.sysmanual.SysManualService;
import com.efraiser.test.db.service.sys.sysmanual.impl.SysManualServiceImpl;
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
import java.util.List;


@Controller
@RequestMapping("sys/manual")
public class SysManualController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysManualController.class);

    @Autowired
    private SysManualService sysManualService;

    /**
     * 功能描述：查询所有pId不为空的
     *
     * @return
     * @author
     * @date 2017年9月4日
     * @modify log:
     */
    @RequestMapping("/getSysManualList")
    @ResponseBody
    public Object getSysManualList() {
        return sysManualService.getSysManualList();
    }

    /**
     * 功能描述：新增或者更新
     *
     * @param sysManual
     * @return
     * @author
     * @date 2017年9月4日
     * @modify log:
     */
    @RequestMapping("/addOrUpdateManual")
    @ResponseBody
    public RequestResult addOrUpdateManual(String fg, @RequestBody SysManual sysManual) {
        try {
            if ("MANUAL".equals(sysManual.getManualId())) {
                sysManual.setpId("");
                sysManual.setStatus("1");
            } else {
                sysManual.setpId("MANUAL");
            }

            SysManualServiceImpl sysManualServiceImpl = (SysManualServiceImpl) sysManualService;

            if (StrUtil.isNotNull(fg)) {
                sysManualServiceImpl.dao().updateIgnoreNull(sysManual);
            } else {
                sysManualServiceImpl.dao().insert(sysManual);
            }
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("addOrUpdateManual() error! fg:[" + fg + "],sysManual:[" + JSONObject.toJSONString(sysManual) + "]", e);
            return requestResult(false, "");
        }
    }

    /**
     * 功能描述：删除
     *
     * @param manualId
     * @return
     * @author
     * @date 2017年9月4日
     * @modify log:
     */
    @RequestMapping("/deleteManual")
    @ResponseBody
    public RequestResult deleteManual(String manualId) {
        try {
            sysManualService.deleteSysManual(manualId);
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("deleteManual() error! manualId:[" + manualId + "]", e);
            return requestResult(false, "");
        }
    }

    @RequestMapping("/checkManualId")
    @ResponseBody
    public RequestResult checkManualId(String manualId) {
        if (sysManualService.checkManual(manualId, "M_ID")) {
            return requestResult(false, "模块ID ' " + manualId + " ' 已存在!!");
        }
        return requestResult(true, "");
    }

    /**
     * 功能描述：更新操作手册状态
     *
     * @param manualId
     * @param status
     * @param req
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    @RequestMapping("/updateManualStatus")
    @ResponseBody
    public RequestResult updateManualStatus(String manualId, String status, HttpServletRequest req) {
        try {
            if ("1".equals(status)) {
                status = "0";
            } else {
                status = "1";
            }
            SysManual manual = sysManualService.updateManualStatus(manualId, status);
            return requestResult(true, manual);
        } catch (Exception e) {
            logger.error("updateManualStatus() error! manualId:[" + manualId + "], status:[" + status + "]", e);
            return requestResult(false, null);
        }
    }

    /**
     * 功能描述：根据ID查询一条记录
     *
     * @param manualId
     * @param page
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    @RequestMapping("/getManualById")
    public ModelAndView getManualById(String manualId, String page) {


        ModelAndView modelAndView = new ModelAndView();
        page = page.replace(".jsp", "");
        modelAndView.setViewName(page);

        SysManual manual = sysManualService.getManualById(manualId);
        if (manual != null) {
            modelAndView.addObject("obj", manual);
        }
        return modelAndView;
    }

    /**
     * 功能描述：获取状态为1(启用)的对象集合
     *
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    @RequestMapping("/getSysManualListByStatus")
    @ResponseBody
    public List<SysManual> getSysManualListByStatus() {
        return sysManualService.getManualListByStatus();
    }

    /**
     * 功能描述：根据ID查询URL
     *
     * @param manualId
     * @param req
     * @return
     * @author
     * @date 2017年9月5日
     * @modify log:
     */
    @RequestMapping("/getManualUrl")
    @ResponseBody
    public Object getManualUrl(String manualId, HttpServletRequest req) {
        SysManual manual = sysManualService.getManualUrl(manualId);
        if (StrUtil.isNotNull(manual.getManualUrl())) {
            return requestResult(true, manual);
        } else {
            return requestResult(false, null);
        }
    }
}