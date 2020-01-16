package com.efraiser.test.project.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component//注入到spring容器，方便后面使用
@ConfigurationProperties(prefix = "mine")//对应application.yml中，oauth下参数
public class LocalConfig {

    private static LocalConfig localConfig;

    private LocalProperties properties = new LocalProperties();


    @Value("${server.servlet.context-path}")
    private String projectName;

    public LocalConfig(){
        localConfig = this;
    }



    public static LocalConfig getInstance(){
        return  localConfig;
    }


    public LocalProperties getProperties() {
        return properties;
    }

    public void setProperties(LocalProperties properties) {
        this.properties = properties;
    }


    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
}
