package com.efraiser.test.db.datasoruce;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceConfigration {

    private static Logger log = LoggerFactory.getLogger(DataSourceConfigration.class);

    /*******************数据库和连接池配置信息,读取application.properties文件的属性值****************************/
    @Value("${spring.datasource.driver-class-name}")
    public String driverClass;

    @Value("${spring.datasource.username}")
    public String userName;

    @Value("${spring.datasource.password}")
    public String password;

    @Value("${spring.datasource.url}")
    public String url;

}