package com.efraiser.test.project.actiion;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.sys.sysnotice.SysNoticeService;
import com.efraiser.test.db.service.sys.sysnotice.impl.SysNoticeServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("sys/notice")
public class SysNoticeController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysNoticeController.class);

    @Autowired
    private SysNoticeService sysNoticeService;

    @RequestMapping("/getSysNoticeList")
    @ResponseBody
    public Object getSysNoticeList(int pageIndex, int pageSize, String title, String content) {
        return sysNoticeService.getSysNoticeList(pageIndex, pageSize, title, content);

    }

    /**
     * 获取部门信息用于编辑
     *
     * @param id
     * @return
     */
    @RequestMapping("/fetchSysNotice")
    @ResponseBody
    public Object fetchSysNotice(String id) {
        SysNoticeServiceImpl sysNoticeServiceImpl = (SysNoticeServiceImpl) sysNoticeService;

        return sysNoticeServiceImpl.fetch(id);
    }

    /**
     * 获取部门信息用于编辑
     */
    @RequestMapping("/toEditSysNotice")
    public ModelAndView toEditSysNotice(String id, String page) {

        SysNoticeServiceImpl sysNoticeServiceImpl = (SysNoticeServiceImpl) sysNoticeService;
        SysNotice sysNotice = sysNoticeServiceImpl.fetch(id);


        ModelAndView modelAndView = new ModelAndView();
        page = page.replace(".jsp", "");
        modelAndView.setViewName(page);
        modelAndView.addObject("obj", sysNotice);

        return modelAndView;
    }

    /**
     * 根据部门id递归删除部门
     *
     * @return
     */
    @RequestMapping("/delSysNotice")
    @ResponseBody
    public Object delSysNotice(String id) {
        SysNoticeServiceImpl sysNoticeServiceImpl = (SysNoticeServiceImpl) sysNoticeService;
        try {
            sysNoticeServiceImpl.delete(id);
            return requestResult(true, "删除成功!!");
        } catch (Exception e) {
            logger.error("delSysNotice()! error! id:[" + id + "]", e);
            return requestResult(false, "删除失败!!");
        }
    }

    /**
     * 新增或修改部门
     *
     * @param sysNotice id 标识是否跟新 如果flagb部位null 则执行更新操作 否则执行 插入操作
     * @return
     */
    @RequestMapping("/addOrUpdateSysNotice")
    @ResponseBody
    public Object addOrUpdateSysNotice(HttpSession session, @RequestBody SysNotice sysNotice) {

        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        try {
            sysNotice.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            sysNotice.setReleaseUser(user.getUserName());

            sysNoticeService.addOrUpdateSysNotice(sysNotice);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("addOrUpdateSysNotice()! error! userId:[" + user.getUserId() + "], sysNotice:[" + JSONObject.toJSONString(sysNotice) + "]", e);
            return requestResult(false, null);
        }
    }
}
