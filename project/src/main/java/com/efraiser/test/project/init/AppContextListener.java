package com.efraiser.test.project.init;

import com.efraiser.test.db.init.CacheSetup;
import com.efraiser.test.scheduler.init.EastCheckSetup;
import com.efraiser.test.scheduler.init.EastQuartzSetup;
import com.efraiser.test.scheduler.init.TsQuartzSetup;
import com.efraiser.test.scheduler.init.UpdateSetup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * 监听tomcat启动/关闭(被AfterSpringBegin.java 和 AfterSpringClose.java取代)
 */
//@WebListener
public class AppContextListener implements ServletContextListener {

    private Logger logger = LoggerFactory.getLogger(AppContextListener.class);

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        logger.info("============================================程序启动start============================================");

        CacheSetup.getInstance().init();
        UpdateSetup.getInstance().init();
        EastQuartzSetup.getInstance().init();
        EastCheckSetup.getInstance().init();
        TsQuartzSetup.getInstance().init();
        logger.info("============================================程序启动start===完成=========================================");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        logger.info("============================================程序停止stop============================================");
        CacheSetup.getInstance().destroy();;
        UpdateSetup.getInstance().destroy();
        EastQuartzSetup.getInstance().destroy();
        EastCheckSetup.getInstance().destroy();
        TsQuartzSetup.getInstance().destroy();
        logger.info("============================================程序停止stop======完成======================================");
    }
}
