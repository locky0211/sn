package com.efraiser.test.db.datasoruce;

import com.alibaba.druid.pool.DruidDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfigrationPrimary {

    private static Logger log = LoggerFactory.getLogger(DataSourceConfigrationPrimary.class);

    @Autowired
    private DataSourceConfigration dataSourceConfigration;

    //@Primary
    @Bean(name ="druidDataSource")
    public DruidDataSource druidDataSource() {
        DruidDataSource druidDataSource = new DruidDataSource();
        druidDataSource.setDriverClassName(dataSourceConfigration.driverClass);
        druidDataSource.setUsername(dataSourceConfigration.userName);
        druidDataSource.setPassword(dataSourceConfigration.password);
        druidDataSource.setUrl(dataSourceConfigration.url);

        druidDataSource.setInitialSize(10);
        druidDataSource.setMaxActive(80);
        druidDataSource.setMaxWait(3000);
//        try {
//            druidDataSource.setFilters(dataSourceConfigration.filters);
//        } catch (SQLException e) {
//            log.error("build dataSourcePrimary exception ", e.getMessage());
//        }

        return druidDataSource;
    }

}