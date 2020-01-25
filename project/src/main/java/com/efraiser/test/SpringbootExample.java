package com.efraiser.test;

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
public class SpringbootExample
        extends SpringBootServletInitializer
{

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(SpringbootExample.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringbootExample.class,args);
    }

}
