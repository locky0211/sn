package com.efraiser.test.project.actiion;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.SCks;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.model.sys.SysUserDep;
import com.efraiser.test.db.model.sys.SysUserRole;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.db.service.sys.sysuser.impl.SysUserServiceImpl;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.db.service.sys.sysuserrole.SysUserRoleService;
import com.efraiser.test.project.vo.SysUserVo;
import org.nutz.ioc.impl.PropertiesProxy;
import org.nutz.lang.Lang;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * 系统用户action
 */
@Controller
@RequestMapping("sys/user")
public class SysUserController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysUserController.class);

    // 系统用户dao
    @Autowired
    private SysUserService sysUserService;
    // 用户角色dao
    @Autowired
    private SysUserRoleService sysUserRoleService;
    // 用户管辖机构dao
    @Autowired
    private SysUserDepService sysUserDepService;

    /**
     * 修改时获取用户数据
     *
     * @param userId 用户id
     * @param req    用户返回页面传值
     */
    @RequestMapping("/getUserMessage")
    public ModelAndView getUserMessage(String userId, HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/sys/jsp/sys_user");
        modelAndView.addObject("OPStatus", 1);
        String roles = "";
        String deps = "";

        try {
            List<SysUserRole> urd = sysUserRoleService.queryByUserId(userId);
            List<SysUserDep> ud = sysUserDepService.querybyUserId(userId);

            // 循环用户权限
            for (SysUserRole rid : urd) {
                roles += rid.getRoleId() + ",";
            }
            // 循环用户管辖机构
            for (SysUserDep depid : ud) {
                deps += depid.getDepId() + ",";
            }
            if (StrUtil.isNotNull(deps)) {
                String sdeps = deps.substring(0, deps.length() - 1);
                req.setAttribute("depData", sdeps);
            }
            if (StrUtil.isNotNull(roles)) {
                String sroles = roles.substring(0, roles.length() - 1);
                req.setAttribute("roleData", sroles);
            }
            modelAndView.addObject("obj", sysUserService.getSysUser(userId));

        } catch (Exception e) {
            logger.error("getUserMessage() error! userId:[" + userId + "]", e);
        }
        return modelAndView;
    }

    /**
     * 分页获取用户数据
     *
     * @param pageIndex 第几页
     * @param pageSize  每页多少个
     * @param keyName   查询姓名
     * @param keyId     查询账号
     * @return
     */
    @RequestMapping("/getUserList")
    @ResponseBody
    public Object getUserList(int pageIndex, int pageSize, String keyName, String userOrgan, String keyId, HttpServletRequest req) {
        SysUser sessionUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);

        SysUserServiceImpl sysUserServiceImpl = (SysUserServiceImpl) sysUserService;

        SysUser user = sysUserServiceImpl.fetch(sessionUser.getUserId());
        return sysUserService.getUserList(pageIndex, pageSize, keyName, userOrgan, keyId, user);
    }

    @RequestMapping("/getLicenseDate")
    @ResponseBody
    public Object getLicenseDate(HttpServletRequest req) {
        SysUser sessionUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);

        SysUserServiceImpl sysUserServiceImpl = (SysUserServiceImpl) sysUserService;
        SysUser user = sysUserServiceImpl.fetch(sessionUser.getUserId());
        return SCks.decrypt(user.getdDate());
    }

    @RequestMapping("/fetchSysUser")
    @ResponseBody
    public Object fetchSysUser(String userId) {
        SysUserServiceImpl sysUserServiceImpl = (SysUserServiceImpl) sysUserService;

        SysUser sysUser = sysUserServiceImpl.fetch(userId);
        sysUser.setUserOrgan(SysGgzdCache.getSysGgzdName("SYS_USER_ORGAN", sysUser.getUserOrgan()));
        return sysUser;
    }

    /**
     * 添加和修改用户
     *
     * @return
     */
    @RequestMapping("/addOrUpdateSysUser")
    @ResponseBody
    public Object addOrUpdateSysUser( @RequestBody SysUserVo userVo) {

        String OPStatus= userVo.getOPStatus();//用户判读是否为修改
        String userGxOrgan = userVo.getUserGxOrgan();// 用户管辖机构id
        String userRole= userVo.getUserRole();//用户角色id
        SysUser user =userVo.getSysUser();// 用户对象
        try {
            if (StrUtil.isNotNull(OPStatus)) {
                sysUserService.updateSysUser(user, userGxOrgan, userRole);
            } else {
                sysUserService.addSysUser(user, userGxOrgan, userRole);
            }
            return true;

        } catch (Exception e) {
            logger.error("addOrUpdateSysUser() error! userVo:[" + JSONObject.toJSONString(userVo) + "]", e);
            return false;
        }

    }

    /**
     * 初始化用户密码 默认密码: SystemConstants.DEFAULT_PASS
     *
     * @param userId
     * @return
     */
    @RequestMapping("/initUserPass")
    @ResponseBody
    public Object initUserPass(String userId) {
        if (StrUtil.isNull(userId)) {
            return requestResult(false, "获取用户ID失败!!");
        }
        if (userId.equals("admin")) {
            return requestResult(false, "不能对admin用户进行密码初始化!!");
        }
        try {
            sysUserService.reUserPass(userId, SystemConstants.DEFAULT_PASS);
            return requestResult(true, "密码已被初始化为: " + SystemConstants.DEFAULT_PASS);
        } catch (Exception e) {
            logger.error("initUserPass() error! userId:[" + userId + "]", e);
            return requestResult(false, "用户名 " + userId + " 密码初始化失败!!");
        }
    }

    /**
     * 删除用户
     *
     * @param userId 用户id
     * @return
     */
    @RequestMapping("/deleteUser")
    @ResponseBody
    public Object deleteUser(String userId) {

        if (userId.equals("admin")) {
            return false;
        }
        try {
            sysUserService.deleteSysUser(userId);
            return true;
        } catch (Exception e) {
            logger.error("deleteUser() error! userId:[" + userId + "]", e);
            return false;
        }

    }

    /**
     * 修改状态
     *
     * @param uid 用户id
     * @return
     */
    @RequestMapping("/editStatus")
    @ResponseBody
    public Object editStatus(String uid) {
        try {
            if ("admin".equals(uid)) {
                return false;
            }
            SysUserServiceImpl sysUserServiceImpl = (SysUserServiceImpl) sysUserService;

            SysUser user = sysUserServiceImpl.fetch(uid);
            if ("1".equals(user.getStatus())) {
                user.setStatus("0");
            } else {
                user.setStatus("1");
            }
            sysUserServiceImpl.dao().update(user);
            return true;
        } catch (Exception e) {
            logger.error("editStatus() error! uid:[" + uid + "]", e);
            return false;
        }

    }

    /**
     * 首页对用户进行编辑
     *
     * @param uid 用户id
     * @param req
     */
    @RequestMapping("/gotoEditUser")
    public ModelAndView gotoEditUser(String uid, HttpServletRequest req) {
        SysUser sessionUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);

        SysUserServiceImpl sysUserServiceImpl = (SysUserServiceImpl) sysUserService;
        SysUser user = sysUserServiceImpl.fetch(sessionUser.getUserId());
        req.setAttribute("userData", user);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/sys/jsp/sys_user_edit");
        modelAndView.addObject("userData", user);
        return modelAndView;
    }

    /**
     * 用于首页修改用户信息
     *
     * @param user 用户对象
     * @return
     */
    @RequestMapping("/updateUser")
    @ResponseBody
    public Object updateUser(@RequestBody SysUser user) {
        if (StrUtil.isNotNull(user.getUserId())) {

            SysUserServiceImpl sysUserServiceImpl = (SysUserServiceImpl) sysUserService;
            sysUserServiceImpl.dao().updateIgnoreNull(user);
            return requestResult(true, "");
        }
        return requestResult(false, "");
    }

    /**
     * 修改用户密码
     *
     * @param user 用户对象
     * @return
     */
    @RequestMapping("/updateUserPassword")
    @ResponseBody
    public Object updateUserPassword(@RequestBody SysUser user) {

        if (StrUtil.isNotNull(user.getUserId())) {
            user.setUserPass(Lang.md5(user.getUserPass()));

            SysUserServiceImpl sysUserServiceImpl = (SysUserServiceImpl) sysUserService;
            sysUserServiceImpl.dao().updateIgnoreNull(user);
            return requestResult(true, "");
        }
        return requestResult(false, "");
    }

    /**
     * 检测旧密码是否一致
     *
     * @param userId   用户id
     * @param userPass 用户旧密码
     * @return
     */
    @RequestMapping("/checkPassword")
    @ResponseBody
    public Object checkPassword(String userId, String userPass) {
        if (sysUserService.checkPassword(userId, userPass)) {
            return requestResult(true, "");
        }
        return requestResult(false, "");
    }

    /**
     * 校验ID是否唯一
     *
     * @param userId 用户id
     * @return
     */
    @RequestMapping("/checkIsOnly")
    @ResponseBody
    public Object checkIsOnly(String userId) {
        if (sysUserService.checkUser(userId, "USER_ID")) {
            return requestResult(false, "ID ' " + userId + " ' 已存在!!");
        }
        return requestResult(true, "");
    }

    /**
     * 功能描述：获取配置文件中首页的名称
     *
     * @return
     * @author wushuo
     * @date 2016年3月7日
     * @modify log:
     */
    @RequestMapping("/getIndexName")
    @ResponseBody
    public Object getIndexName() {
        //Locale locale = new Locale("zh", "CN");
        //ResourceBundle conf= ResourceBundle.getBundle(SystemConstants.SYSTEM_CLASSES_PATH + "app.properties",locale);
        PropertiesProxy pp = new PropertiesProxy("app.properties");
        return pp.get("indexName");
    }
}
