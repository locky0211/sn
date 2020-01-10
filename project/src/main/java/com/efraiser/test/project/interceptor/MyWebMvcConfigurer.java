package com.efraiser.test.project.interceptor;

import com.efraiser.test.auth.interceptor.LoginHandlerInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyWebMvcConfigurer implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/index.jsp").setViewName("login");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(new LoginHandlerInterceptor())
                .addPathPatterns("/**")//表示拦截所有的请求，

                .excludePathPatterns("/assets/**")
                 //.excludePathPatterns("/login", "/register") //表示除了登陆与注册之外，因为登陆注册不需要登陆也可以访问

                .excludePathPatterns("/test/**")//除了.....之外
                .excludePathPatterns( "/loginPage")
                .excludePathPatterns( "/login")
                .excludePathPatterns( "/")
                .excludePathPatterns( "/pic/**")
                .excludePathPatterns( "/js/**")
                .excludePathPatterns( "/jsp/**")
                .excludePathPatterns("/WEB-INF/views2/**")
        ;

    }

}
