package com.efraiser.test;

import com.efraiser.test.project.init.AfterSpringBegin;
import com.efraiser.test.project.init.AfterSpringColse;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 这是一个springboot启动类
 */
@SpringBootApplication //表明这是一个springboot启动类
public class SpringbootExample extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        application.listeners(new AfterSpringBegin());
        application.listeners(new AfterSpringColse());
        return application.sources(SpringbootExample.class);
    }

    public static void main(String[] args) {
        //SpringApplication.run(SpringbootExample.class,args);
        SpringApplication sa = new SpringApplication(SpringbootExample.class);
        sa.addListeners(new AfterSpringBegin());
        sa.addListeners(new AfterSpringColse());
        sa.run(args);
    }

}
