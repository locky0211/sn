package com.efraiser.test.db.service.user;

import com.efraiser.test.db.model.User;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface UserService extends BaseService{


    List<User> getUsers();
}
