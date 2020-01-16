package com.efraiser.test.project.actiion;

import com.efraiser.test.project.config.LocalConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("sys/properties")
public class SysPropertiesController {

    @Autowired
    private LocalConfig localConfig;

    @RequestMapping("/loginImg1")
    @ResponseBody
    public String loginImg1() {
        return localConfig.getProperties().getLoginImg1();
    }

    @RequestMapping("/loginImg2")
    @ResponseBody
    public Object loginImg2() {
        return localConfig.getProperties().getLoginImg2();
    }

    @RequestMapping("/mainImg")
    @ResponseBody
    public Object mainImg() {
        String mainImg = localConfig.getProperties().getMainImg();
        if (mainImg != null) {
            if (mainImg.length() > 1) {
                return mainImg;
            }
        }
        return "images/cbrc.png";
    }

}
