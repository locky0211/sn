package com.efraiser.test;

import com.efraiser.test.project.init.AfterSpringBegin;
import com.efraiser.test.project.init.AfterSpringClose;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * 这是一个springboot启动类
 */
@SpringBootApplication //表明这是一个springboot启动类
public class SpringbootExample extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        application.listeners(new AfterSpringBegin());
        application.listeners(new AfterSpringClose());
        return application.sources(SpringbootExample.class);
    }

    public static void main(String[] args) {
        //SpringApplication.run(SpringbootExample.class,args);
        SpringApplication sa = new SpringApplication(SpringbootExample.class);
        sa.addListeners(new AfterSpringBegin());
        sa.addListeners(new AfterSpringClose());
        sa.run(args);
    }

}
