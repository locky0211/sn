package com.efraiser.test.project.init;

import com.efraiser.test.db.init.CacheSetup;
import com.efraiser.test.scheduler.init.EastCheckSetup;
import com.efraiser.test.scheduler.init.EastQuartzSetup;
import com.efraiser.test.scheduler.init.UpdateSetup;
import com.efraiser.test.scheduler.init.TsQuartzSetup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;

/**
 * tomcat关闭完成
 */
public class AfterSpringClose implements ApplicationListener<ContextClosedEvent> {

    private Logger logger = LoggerFactory.getLogger(AfterSpringClose.class);

    @Override
    public void onApplicationEvent(ContextClosedEvent contextRefreshedEvent) {

        logger.info("============================================程序停止=stop===========================================");
        CacheSetup.getInstance().destroy();;
        UpdateSetup.getInstance().destroy();
        EastQuartzSetup.getInstance().destroy();
        EastCheckSetup.getInstance().destroy();
        TsQuartzSetup.getInstance().destroy();
        logger.info("============================================程序停止==stop====完成======================================");
    }
}
