package com.efraiser.test.project.init;

import com.efraiser.test.scheduler.init.TsQuartzSetup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;

public class AfterSpringColse implements ApplicationListener<ContextClosedEvent> {

    private Logger logger = LoggerFactory.getLogger(AfterSpringColse.class);

    @Override
    public void onApplicationEvent(ContextClosedEvent contextRefreshedEvent) {

        logger.info("============================================程序停止============================================");
        TsQuartzSetup.getInstance().destroy();
    }
}
