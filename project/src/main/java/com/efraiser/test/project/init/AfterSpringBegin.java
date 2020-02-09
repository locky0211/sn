package com.efraiser.test.project.init;

import com.efraiser.test.db.init.CacheSetup;
import com.efraiser.test.scheduler.init.EastCheckSetup;
import com.efraiser.test.scheduler.init.EastQuartzSetup;
import com.efraiser.test.scheduler.init.UpdateSetup;
import com.efraiser.test.scheduler.init.TsQuartzSetup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

public class AfterSpringBegin implements ApplicationListener<ContextRefreshedEvent> {

    private Logger logger = LoggerFactory.getLogger(AfterSpringBegin.class);

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        logger.info("============================================程序启动============================================");

        CacheSetup.getInstance().init();
        UpdateSetup.getInstance().init();
        EastQuartzSetup.getInstance().init();
        EastCheckSetup.getInstance().init();
        TsQuartzSetup.getInstance().init();
        logger.info("============================================程序启动===完成=========================================");

    }
}
