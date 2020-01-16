package com.efraiser.test.db.service.user.impl;

import com.efraiser.test.db.model.User;
import com.efraiser.test.db.service.BaseService;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.user.UserService;
import org.nutz.dao.Cnd;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
public class UserServiceImpl extends BaseServiceImpl implements UserService{


    @Override
    public List<User> getUsers() {

            List<User> users = dao.query(User.class, Cnd.where("available", "=", 1));
        return users;
    }
}
