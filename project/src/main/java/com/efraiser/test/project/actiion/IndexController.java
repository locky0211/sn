package com.efraiser.test.project.actiion;


import com.efraiser.test.project.vo.TestVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * 描述:
 *
 * @author hewm
 * 2018-08-21 14:18:51 14:18
 */
@Controller
@RequestMapping("/")
public class IndexController {

    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("msg", "==========================");
        return "login";
    }


    @RequestMapping("/loginPage")
    public String loginPage(Model model) {
        return "login";
    }

    @RequestMapping("/login")
    public String login(HttpServletRequest request,Model model) {
        model.addAttribute("msg", "==========================");

        request.getSession().setAttribute("userName","userName1232");

        return "index2";
    }


    @RequestMapping("/index2")
    public ModelAndView index2(HttpServletRequest request) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");


        List<String> names = new ArrayList<>();
        names.add("aa");
        names.add("bb");
        names.add("cc");
        modelAndView.addObject("names", names);

        modelAndView.addObject("valu", "dddddddddddddddddddddddddddddddddd");
        return modelAndView;
    }


    @RequestMapping("/indexStr")
    @ResponseBody
    public String indexStr(String test) {

        return "------------------------------" + test;
    }


    @RequestMapping("/indexJson")
    @ResponseBody
    public TestVO indexJson(String test) {


        return new TestVO(test, test);
    }


    @RequestMapping("/requestJson")
    @ResponseBody
    public TestVO requestJson(@RequestParam String id, @RequestBody TestVO test) {


        return new TestVO(id + test.getId(), id + test.getName());
    }


}
