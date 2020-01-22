package com.efraiser.test.project.actiion;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.db.model.sys.SysEastUrl;
import com.efraiser.test.db.service.sys.syseasturl.SysEastUrlService;
import com.efraiser.test.db.service.sys.syseasturl.impl.SysEastUrlServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * 类描述：EAST报表数据库地址配置类
 */
@Controller
@RequestMapping("sys/easturl")
public class SysEastUrlController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysEastUrlController.class);

    @Autowired
    private SysEastUrlService sysEastUrlService;

    @RequestMapping("/getEastUrlList")
    @ResponseBody
    public Object getEastUrlList(String brNo, int pageIndex, int pageSize) {
        return sysEastUrlService.getEastUrlList(brNo, pageIndex, pageSize);
    }

    @RequestMapping("/addEastUrl")
    @ResponseBody
    public Object addEastUrl(@RequestBody SysEastUrl sysEastUrl) {
        try {
            sysEastUrlService.addEastUrl(sysEastUrl);
        } catch (Exception e) {
            logger.error("addEastUrl() error! sysEastUrl:{" + JSONObject.toJSONString(sysEastUrl) + "}", e);
            return requestResult(false, e.getMessage());
        }
        return requestResult(true, "操作成功");
    }

    @RequestMapping("/updateEastUrl")
    @ResponseBody
    public Object updateEastUrl(@RequestBody SysEastUrl sysEastUrl) {
        try {
            sysEastUrlService.updateEastUrl(sysEastUrl);
        } catch (Exception e) {
            logger.error("updateEastUrl() error! sysEastUrl:{" + JSONObject.toJSONString(sysEastUrl) + "}", e);
            return requestResult(false, e.getMessage());
        }
        return requestResult(true, "操作成功");
    }

    @RequestMapping("/deleteEastUrl")
    @ResponseBody
    public Object deleteEastUrl(String brNo) {
        try {
            sysEastUrlService.deleteEastUrl(brNo);
        } catch (Exception e) {
            logger.error("deleteEastUrl() error! brNo:{" + brNo + "}", e);
            return requestResult(false, e.getMessage());
        }
        return requestResult(true, "操作成功");
    }

    @RequestMapping("/getEastUrlPageByNo")
    public ModelAndView getEastUrlPageByNo(String no, String page, String flag) {

        ModelAndView modelAndView = new ModelAndView();
        page = page.replace(".jsp", "");
        modelAndView.setViewName(page);
        modelAndView.addObject("flag", flag);

        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;
        SysEastUrl sysEastUrl = sysEastUrlServiceImpl.fetch(no);

        if (sysEastUrl != null) {
            modelAndView.addObject("obj", sysEastUrl);
        }

        return modelAndView;
    }

    @RequestMapping("/getEastUrlByNo")
    @ResponseBody
    public Object getEastUrlByNo(String brNo) {
        SysEastUrlServiceImpl sysEastUrlServiceImpl = (SysEastUrlServiceImpl) sysEastUrlService;
        return sysEastUrlServiceImpl.fetch(brNo);
    }
}
