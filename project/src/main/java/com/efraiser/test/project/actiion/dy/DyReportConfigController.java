package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.db.model.dy.DyReportConfig;
import com.efraiser.test.db.service.dy.dyreportconfig.DyReportConfigService;
import com.efraiser.test.db.service.dy.dyreportconfig.impl.DyReportConfigServiceImpl;
import com.efraiser.test.project.actiion.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("dy/config")
public class DyReportConfigController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(DyReportConfigController.class);
    @Autowired
    private DyReportConfigService dyReportConfigService;

    @RequestMapping("/addOrUpdateConfig")
    @ResponseBody
    public Object addOrUpdateConfig(@RequestBody DyReportConfig dyReportConfig) {
        try {
            dyReportConfigService.addOrUpdateConfig(dyReportConfig);
        } catch (Exception e) {
            logger.error("addOrUpdateConfig() error! dyReportConfig:[" + JSONObject.toJSONString(dyReportConfig) + "]");
            return false;
        }
        return true;

    }

    @RequestMapping("/getReportConfig")
    public ModelAndView getReportConfig(String page) {

        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);
        DyReportConfigServiceImpl dyReportConfigServiceimpl = (DyReportConfigServiceImpl) dyReportConfigService;


        modelAndView.addObject("obj", dyReportConfigServiceimpl.dao().fetch(DyReportConfig.class));

        return modelAndView;
    }

}
