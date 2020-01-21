package com.efraiser.test.project.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

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
                .excludePathPatterns( "/doLogin.*")
                .excludePathPatterns( "/")
                .excludePathPatterns( "/**/*.js")
                .excludePathPatterns( "/**/*.jsp")
                .excludePathPatterns( "/**/*.png")
                .excludePathPatterns( "/**/*.gif")
                .excludePathPatterns( "/**/*.jpg")
                .excludePathPatterns( "/**/*.css")
                .excludePathPatterns( "/**/*.jspx")
                .excludePathPatterns( "/**/*.hpeg")
                .excludePathPatterns( "/**/*.html")
                .excludePathPatterns( "/**/*.htm")
                .excludePathPatterns( "/**/*.ico")
                .excludePathPatterns( "/sys/properties/*")
        ;

    }


//    @Override
//    public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
//        for (HttpMessageConverter<?> messageConverter : converters) {
//            System.out.println(messageConverter);
//        }
//    }

}
