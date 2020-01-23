package com.efraiser.test.project.actiion.sys;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/indexCon")
public class IndexController {


    @Value("${server.servlet.context-path}")
    private String projectName;

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }



    @RequestMapping("/loginPage")
    public ModelAndView loginPage(HttpServletRequest request) {
        return index(request);
    }


    @RequestMapping("/")
    public ModelAndView index(HttpServletRequest request) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");



        request.getSession().setAttribute("base", projectName);


        return modelAndView;
    }


    @RequestMapping("/indexStr")
    @ResponseBody
    public String indexStr(String test) {

        return "------------------------------" + test;
    }


//    @RequestMapping("/indexJson")
//    @ResponseBody
//    public TestVO indexJson(String test) {
//
//
//        return new TestVO(test, test);
//    }
//
//
//    @RequestMapping("/requestJson")
//    @ResponseBody
//    public TestVO requestJson(@RequestParam String id, @RequestBody TestVO test) {
//
//
//        return new TestVO(id + test.getId(), id + test.getName());
//    }


}
