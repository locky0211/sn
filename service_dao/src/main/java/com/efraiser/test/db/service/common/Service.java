package com.efraiser.test.db.service.common;

import org.nutz.dao.Dao;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Service {

    @Autowired
    public Dao dao;

    public Dao getDao() {
        return dao;
    }

    public void setDao(Dao dao) {
        this.dao = dao;

    }

    public Service() {
    }

    public Service(Dao dao) {
        this.dao = dao;
    }


    public Dao dao() {
        return this.dao;
    }
}

