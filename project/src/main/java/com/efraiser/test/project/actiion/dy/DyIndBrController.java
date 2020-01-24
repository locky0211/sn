package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.db.model.dy.DyIndBr;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.dy.dyindbr.DyIndBrService;
import com.efraiser.test.project.actiion.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("dy/indbr")
public class DyIndBrController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyIndBrController.class);

    @Autowired
    private DyIndBrService dyIndBrService;

    /**
     * 获取机构指标数据信息
     *
     * @param session
     * @return
     */
    @RequestMapping("/getDyIndBrs")
    @ResponseBody
    public Object getDyIndBrs(String indId, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return dyIndBrService.getDyIndBrs(indId, user.getUserId());
    }

    /**
     * 新增或跟新指标数据
     *
     * @param indId
     * @param dyIndBr 对应指标id
     * @return
     */
    @RequestMapping("/insertOrUpdateDyIndBr")
    @ResponseBody
    public Object insertOrUpdateDyIndBr(String indId, DyIndBr dyIndBr) {
        try {
            dyIndBr.setIndId(indId);
            dyIndBrService.insertOrUpdateDyIndBr(dyIndBr);
            return true;
        } catch (Exception e) {
            logger.error("insertOrUpdateDyIndBr() error! indId:[" + indId + "],dyFormula:[" + JSONObject.toJSONString(dyIndBr) + "]", e);
            return false;
        }
    }

}
