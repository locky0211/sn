package com.efraiser.test.project.actiion;


import com.efraiser.test.db.model.User;
import com.efraiser.test.db.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
public class TestAction {

   // @Autowired
    private UserService userService;

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/test")
    public void test(){

        List<User> users = userService.getUsers();




        System.out.println();
    }
}
