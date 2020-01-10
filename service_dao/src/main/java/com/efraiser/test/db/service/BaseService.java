package com.efraiser.test.db.service;

import org.nutz.dao.Dao;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class BaseService {

    @Autowired
    public Dao dao;

    public Dao getDao() {
        return dao;
    }

    public void setDao(Dao dao) {
        this.dao = dao;
    }
}
