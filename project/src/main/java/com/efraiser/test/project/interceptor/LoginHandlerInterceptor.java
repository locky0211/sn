package com.efraiser.test.project.interceptor;

import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.config.LocalConfig;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class LoginHandlerInterceptor implements HandlerInterceptor {


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        Object user = request.getSession().getAttribute(SystemConstants.SESSION_USER);
        request.getSession().setAttribute("base", LocalConfig.getInstance().getProjectName());
        if (user == null) {

            System.out.println("preHandle----" + user + " ::: " + request.getRequestURL());

            request.setAttribute("msg", "无权限请先登录");
            // 获取request返回页面到登录页
            response.sendRedirect(request.getContextPath() + "/loginPage");

            return false;
        }
        return true;
    }


    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        request.getSession().setAttribute("base", LocalConfig.getInstance().getProjectName());
        Object user = request.getSession().getAttribute(SystemConstants.SESSION_USER);
      //  System.out.println("postHandle----" + user + " ::: " + request.getRequestURL());

    }


    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        Object user = request.getSession().getAttribute(SystemConstants.SESSION_USER);
        request.getSession().setAttribute("base", LocalConfig.getInstance().getProjectName());
      //  System.out.println("afterCompletion----" + user + " ::: " + request.getRequestURL());
    }

}
