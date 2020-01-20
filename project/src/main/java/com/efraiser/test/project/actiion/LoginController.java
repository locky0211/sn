package com.efraiser.test.project.actiion;

import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.jgyrecord.JgyRecordService;
import com.efraiser.test.db.service.sys.sysqxgl.SysQxglService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.db.service.sys.sysuserloginlog.SysUserLoginLogService;
import com.efraiser.test.common.config.LocalConfig;

import com.efraiser.test.project.util.IpUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 系统登录action
 *
 * @author efraiser.xiaxiaofeng
 */
@Controller
public class LoginController extends BaseController{

    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Value("${server.servlet.context-path}")
    private String projectName;

    @Autowired
    private LocalConfig localConfig;

    @Autowired
    private SysUserService sysUserService;

    @Autowired
    private SysUserLoginLogService sysUserLoginLogService;

    @Autowired
    private JgyRecordService jgyRecordService;

    @Autowired
    private SysQxglService sysQxglService;

    public LoginController(){

        System.out.println();
    }


    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }



    @RequestMapping("/loginPage")
    public ModelAndView loginPage(HttpServletRequest request) {
        return index(request);
    }


    @RequestMapping("/")
    public ModelAndView index(HttpServletRequest request) {

        ModelAndView modelAndView = new ModelAndView();

        Object user = request.getSession().getAttribute(SystemConstants.SESSION_USER);
        if(user != null){
            modelAndView.setViewName("main");
        }else{
            modelAndView.setViewName("login");
        }


        request.getSession().setAttribute("base", projectName);

        return modelAndView;
    }




    /**
     * 用户登录
     *
     * @param user 用户对象
     * @throws Exception
     */
    @RequestMapping("/doLogin")
    public ModelAndView doLogin(SysUser user, HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        if (StrUtil.isNull(user.getUserId())) {

            return modelAndView;
        }

        HttpSession session = req.getSession();

        String dateFormat = localConfig.getProperties().getDateFormat();
        session.setAttribute("DateFormat", dateFormat);

        //配置east打分展示页面
        String eastScoreShow = localConfig.getProperties().getEastScoreShow();
        session.setAttribute("EastScoreShow", eastScoreShow);


        SysUser us = sysUserService.getSysUser(user.getUserId(), user.getUserPass());
        if (us == null) {
            req.setAttribute("loginMsg", "用户名或密码错误!!!!");
            req.setAttribute("userId", user.getUserId());
            return modelAndView;
        } else {
            if ("0".equals(us.getStatus())) {
                req.setAttribute("loginMsg", "用户账号被冻结!!");
                req.setAttribute("userId", user.getUserId());
                return modelAndView;
            } else if (!cddsv(us.getdDate())) {
                req.setAttribute("loginMsg", "账号到期!!");
                req.setAttribute("userId", user.getUserId());
                return modelAndView;
            } /*else if (!cdipsv(us, req)) {
				req.setAttribute("loginMsg", "账号不在登录范围内!!");
				req.setAttribute("userId", user.getUserId());
				return new JspView("/login.jsp");
			}*/ else {

                String userId = us.getUserId();
                SysUser lUser = new SysUser();
                lUser.setUserId(us.getUserId());
                int loginCount = getLoginCount(us.getLastLoginDate(), us.getLoginCount());
                lUser.setLoginCount(loginCount);
                lUser.setLastLoginDate(DateUtil.getNow("yyyy-MM-dd HH:mm:ss"));
                lUser.setLastLoginIP(IpUtil.getIpAddrByRequest(req));
                us.setLoginCount(loginCount);

                sysUserService.getDao().updateIgnoreNull(lUser);// 修改用户最后登录时间
                sysUserLoginLogService.saveUserLoginLog("登录本系统", us, IpUtil.getIpAddrByRequest(req));// 添加登录记录


                session.setAttribute(SystemConstants.SESSION_USER, us);// session放入用户对象
                session.setAttribute(SystemConstants.SESSION_USER_ID, us.getUserId());// session放入用户编号

                List<String> userRoles = sysUserService.getUserRolesById(userId);
                if (userRoles.contains("1")) {
                    session.setAttribute("isJgRole", "y");
                } else {
                    session.setAttribute("isJgRole", "n");
                }
                session.setAttribute(SystemConstants.SESSION_USER_ROLE_ID, userRoles);// session放入用户角色
                session.setAttribute(SystemConstants.SESSION_USER_ROLE_NAME, sysUserService.getUserRoleNameById(userId));// session放入用户角色名称
                session.setAttribute(SystemConstants.SESSION_USER_ACCESS_KEYS, sysUserService.getUserQxById(userId));// session放入用户权限id的集合

                //=========================================
                Map<String, String> returnMap = sysUserService.getDepIdByUserId(userId, localConfig.getProperties().getSystemBrNo());
                String brNo = returnMap.get(SystemConstants.brNo);
                if (brNo != null) {
                    session.setAttribute(SystemConstants.brNo, brNo);
                }

                String systemBrNo = returnMap.get(SystemConstants.SystemBrNo);
                if (systemBrNo != null) {
                    session.setAttribute(SystemConstants.SystemBrNo, systemBrNo);
                }
                //=========================================


                jgyRecordService.loginOpJgyRecord(us.getUserId());
                /*
                 * JgyRecord
                 * record=jgyRecordDao.fetchx(us.getUserId(),DateUtil.getNow
                 * ("yyyyMM")); if(record==null){ List<String>
                 * list=sysUserDao.findSysUserbyRole("2"); for(String id:list){
                 * record=new
                 * JgyRecord(id,DateUtil.getNow("yyyyMM"),"0","0","0");
                 * jgyRecordDao.rdTableInfoService().insert(record); }
                 *
                 * } JgyRecord
                 * record1=jgyRecordDao.fetchx(us.getUserId(),DateUtil
                 * .getNow("yyyyMM")); int count
                 * =Integer.parseInt(record1.getLoginCount());
                 * record1.setLoginCount(String.valueOf(count+1));
                 * jgyRecordDao.rdTableInfoService().update(record1);
                 */

            }


            req.setAttribute("userId", user.getUserId());
            String mainJsp = localConfig.getProperties().getMainJsp();

            if (mainJsp == null || "null".equals(mainJsp) || mainJsp.length() <= 1) {
                mainJsp = "main";
            }
            modelAndView.setViewName(mainJsp);
            return modelAndView;
        }
    }

    public int getLoginCount(String lastLoginDate, int count) {
        if (StrUtil.isNotNull(lastLoginDate)) {// 如果不为空
            String lsd = lastLoginDate.substring(0, 7);
            String nsd = DateUtil.getNow("yyyy-MM");
            if (!lsd.equals(nsd)) {// 如果是本月第一次登录
                return 1;
            } else {
                return ++count;
            }
        } else {
            return 1;
        }
    }

    public boolean cddsv(String dd) {
        try {
            Date d = DateUtil.parse(dd, "yyyy-MM-dd");
            if (d == null) {
                return false;
            }
            int i = DateUtil.compareDate(new Date(), d);
            if (i > 0) {
                return false;
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean cdipsv(SysUser s, HttpServletRequest request) {
        if ("admin".equals(s.getUserId())) {
            return true;
        }
        String addIp = IpUtil.getIpAddrByRequest(request);
        if (addIp.contains(s.getdDip())) {
            return true;
        }
        return false;

    }

//    @At
//    public View upGenKey(String genKey, HttpServletRequest req) {
//        if (StrUtil.isNotNull(genKey) && Ckd.checkGenKey(genKey)) {
//            try {
//                sysUserDao.insertGenKey(genKey);
//            } catch (Exception e) {
//                req.setAttribute("errorMsg", "授权码添加失败!!");
//                return new JspView("/gen.jsp?pId=" + Ckd.getSystemKey());
//            }
//            return new ServerRedirectView("/login.jsp");
//        } else {
//            req.setAttribute("errorMsg", "无效授权码!!");
//            return new JspView("/gen.jsp?pId=" + Ckd.getSystemKey());
//        }
//    }
//
//    @At
//    @Ok("json")
//    public Object getGenKey(String OSID, HttpServletRequest req) {
//        if (StrUtil.isNotNull(OSID)) {
//            return super.requestResult(true, Lang.md5(OSID));
//        }
//        return super.requestResult(false, "无效机器编号!!");
//    }
//
//    @At
//    @Ok("json")
//    public Object unlockCheckPwd(String pwd, HttpSession session) {
//        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
//        if (pwd.equals(user.getUserPass())) {
//            return "true";
//        } else {
//            return "false";
//        }
//    }
//
//    @At
//    @Ok("redirect:/loginout.jsp")
//    public void loginOut(HttpServletRequest req) {
//        req.getSession().removeAttribute(SystemConstants.SESSION_USER);
//        req.getSession().removeAttribute(SystemConstants.SESSION_USER_ID);
//        req.getSession().removeAttribute(SystemConstants.SESSION_USER_ORGAN);
//        req.getSession().removeAttribute(SystemConstants.SESSION_USER_NAME);
//    }
//
//    @At
//    @Ok("raw")
//    public File getChorme() {
//        return new File(SystemConstants.SYSTEM_PATH + File.separator + "common" + File.separator + "非现场监管系统专用浏览器.exe");
//    }
//
    /**
     * 返回用户的权限对象集合
     *
     * @param req http请求对象
     * @return
     */
    @RequestMapping("/initLeftTreeByUser")
    @ResponseBody
    public Object initLeftTreeByUser(HttpServletRequest req) {
        SysUser user = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
        return sysQxglService.getQxByUserId(user.getUserId());
    }
//
//    @At()
//    public View doLoginWj(HttpServletRequest req, HttpSession session) {
 //            String datereport = LocalConfig.getInstance().getProperties().getDateFormat();
//        session.setAttribute("DateFormat", datereport);
//
//        String u = (String) session.getAttribute("ssoclientagent.email");
//
//        SysUser us = sysUserDao.getSysUser(u);
//
//        String userId = us.getUserId();
//        SysUser lUser = new SysUser();
//        lUser.setUserId(us.getUserId());
//        int loginCount = getLoginCount(us.getLastLoginDate(), us.getLoginCount());
//        lUser.setLoginCount(loginCount);
//        lUser.setLastLoginDate(DateUtil.getNow("yyyy-MM-dd HH:mm:ss"));
//        lUser.setLastLoginIP(IpUtil.getIpAddrByRequest(req));
//        us.setLoginCount(loginCount);
//        sysUserDao.rdTableInfoService().updateIgnoreNull(lUser);// 修改用户最后登录时间
//        sysUserLoginLogDao.saveUserLoginLog("登录本系统", us, req);// 添加登录记录
//        req.getSession().setAttribute(SystemConstants.SESSION_USER, us);// session放入用户对象
//        req.getSession().setAttribute(SystemConstants.SESSION_USER_ID, us.getUserId());// session放入用户编号
//        req.getSession().setAttribute(SystemConstants.SESSION_USER_ROLE_ID, sysUserDao.getUserRolesById(userId));// session放入用户角色
//        req.getSession().setAttribute(SystemConstants.SESSION_USER_ROLE_NAME, sysUserDao.getUserRoleNameById(userId));// session放入用户角色名称
//        req.getSession().setAttribute(SystemConstants.SESSION_USER_ACCESS_KEYS, sysUserDao.getUserQxById(userId));// session放入用户权限id的集合
//        if (StrUtil.isNotNull(SystemBrNo)) {
//            // req.getSession().setAttribute(SystemConstants.SystemBrNo,
//            // SystemBrNo);//默认机构名
//            String sql = "select dep_id from sys_user_dep where user_id = @userid";
//            Sql sqls = Sqls.create(sql);
//            sqls.params().set("userid", userId);
//            sqls.setCallback(new SqlCallback() {
//
//                @Override
//                public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
//                    // TODO Auto-generated method stub
//                    List<String> list = new ArrayList<String>();
//                    while (rs.next())
//                        list.add(rs.getString(1));
//                    return list;
//                }
//            });
//            sysUserDao.rdTableInfoService().execute(sqls);
//            List<String> depids = sqls.getList(String.class);
//            if (depids.contains(SystemBrNo)) {
//                req.getSession().setAttribute(SystemConstants.SystemBrNo, SystemBrNo);
//            } else {
//                for (String depid : depids) {
//                    List<SysBmgl> list = sysUserDao.rdTableInfoService().query(SysBmgl.class, Cnd.where("bm_code", "=", depid).and("count_flag", "=", "1"), null);
//                    if (list.size() > 0) {
//                        req.getSession().setAttribute(SystemConstants.brNo, depid);
//                        req.getSession().setAttribute(SystemConstants.SystemBrNo, "");
//                        break;
//                    }
//                }
//            }
//
//        } else {
//            String sql1 = "select dep_id from sys_user_dep where user_id = @userid";
//            Sql sqls1 = Sqls.create(sql1);
//            sqls1.params().set("userid", userId);
//            sqls1.setCallback(new SqlCallback() {
//
//                @Override
//                public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
//                    // TODO Auto-generated method stub
//                    List<String> list = new ArrayList<String>();
//                    while (rs.next())
//                        list.add(rs.getString(1));
//                    return list;
//                }
//            });
//            sysUserDao.rdTableInfoService().execute(sqls1);
//            List<String> depids = sqls1.getList(String.class);
//            for (String depid : depids) {
//                List<SysBmgl> list = sysUserDao.rdTableInfoService().query(SysBmgl.class, Cnd.where("bm_code", "=", depid).and("count_flag", "=", "1"), null);
//                if (list.size() > 0) {
//                    req.getSession().setAttribute(SystemConstants.brNo, depid);
//                    req.getSession().setAttribute(SystemConstants.SystemBrNo, "");
//                    break;
//                }
//            }
//        }
//        if (jgyRecordDao.checkJqy(us.getUserId())) {// 监管员记录
//            JgyRecord record;
//            String sqlStr = "SELECT * FROM JGY_RECORD WHERE LOGIN_MONTHS='" + DateUtil.getNow("yyyyMM") + "'";
//            List<JgyRecord> jlist = jgyRecordDao.getListObjectBySql(sqlStr, JgyRecord.class);
//            if (jlist.isEmpty()) {
//                List<String> list = sysUserDao.findSysUserbyRole("2");
//                for (String id : list) {
//                    record = new JgyRecord(id, DateUtil.getNow("yyyyMM"), "0", "0", "0");
//                    jgyRecordDao.rdTableInfoService().insert(record);
//                }
//            } else {
//                record = jgyRecordDao.fetchx(us.getUserId(), DateUtil.getNow("yyyyMM"));
//                if (record == null) {
//                    record = new JgyRecord(us.getUserId(), DateUtil.getNow("yyyyMM"), "0", "0", "0");
//                    jgyRecordDao.rdTableInfoService().insert(record);
//                }
//            }
//
//            record = jgyRecordDao.fetchx(us.getUserId(), DateUtil.getNow("yyyyMM"));
//            int count = Integer.parseInt(record.getLoginCount());
//            record.setLoginCount(String.valueOf(count + 1));
//            jgyRecordDao.rdTableInfoService().update(record);
//        }
//
//        if (mainJsp == null || "null".equals(mainJsp) || mainJsp.length() <= 1) {
//            mainJsp = "main.jsp";
//        }
//        return new ServerRedirectView("" + mainJsp + "");
//    }
//
//    @Ok("json")
//    @At
//    public Object getWjtydl() {
//        String wjtydl = Mvcs.getIoc().get(String.class, "wjtydl");
//        String wjtydlUrl = Mvcs.getIoc().get(String.class, "wjtydlUrl");
//        List list = new ArrayList<>();
//        list.add(wjtydl);
//        list.add(wjtydlUrl);
//        if ("true".equals(wjtydl)) {
//            return requestResult(true, list);
//        } else {
//            return requestResult(false, "");
//        }
//    }
}
