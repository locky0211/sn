package com.efraiser.test.project.init;

import com.efraiser.test.db.service.sys.cacheinfo.CacheInfoService;
import com.efraiser.test.db.service.sys.cacheinfo.impl.CacheInfoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

//@Component
public class Init {

   // @Autowired
    private CacheInfoService cacheInfoService;

  //  @PostConstruct 初始化完成执行
    public void init() {

        CacheInfoServiceImpl cacheInfoService1 = (CacheInfoServiceImpl)cacheInfoService;

        List list = cacheInfoService1.query();
        System.out.println();
    }
}
