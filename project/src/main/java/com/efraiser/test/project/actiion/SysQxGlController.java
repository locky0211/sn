package com.efraiser.test.project.actiion;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysQxgl;
import com.efraiser.test.db.service.sys.sysqxgl.SysQxglService;
import com.efraiser.test.db.service.sys.sysqxgl.impl.SysQxglServiceImpl;
import org.nutz.dao.Cnd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * 权限管理action
 *
 * @author xx
 */

@Controller
@RequestMapping("sys/qx")
public class SysQxGlController extends BaseController {

    @Autowired
    private SysQxglService sysQxglService;

    /**
     * 获取权限信息用于编辑
     *
     * @param qxId
     * @return
     */
    @RequestMapping("/toEditSysQxgl")
    public ModelAndView toEditSysQxgl(String qxId) {
        SysQxglServiceImpl sysQxglServiceImpl = (SysQxglServiceImpl)sysQxglService;


        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/sys/jsp/sys_qxgl");
        modelAndView.addObject(sysQxglServiceImpl.fetch(qxId));

        return modelAndView;
    }

    @RequestMapping("/doSaveQxglJG")
    @ResponseBody
    public Object doSaveQxglJG(SysQxgl[] qxglList) {
        try {
            sysQxglService.getDao().updateIgnoreNull(qxglList);
            return requestResult(true, "");
        } catch (Exception e) {
            e.printStackTrace();
            return requestResult(false, "");
        }
    }

    /**
     * 获取权限信息列表
     *
     * @return
     */
    @RequestMapping("/getSysQxglList")
    @ResponseBody
    public Object getSysQxglList() {

        SysQxglServiceImpl sysQxglServiceImpl = (SysQxglServiceImpl)sysQxglService;
        return sysQxglServiceImpl.query(Cnd.orderBy().asc("sortNum"), null);
    }

    /**
     * 获取权限信息列表用于选择上级权限
     *
     * @param qxId 用户过滤权限自身以及下级权限
     * @return
     */
    @RequestMapping("/getSysQxListForPid")
    @ResponseBody
    public Object getSysQxListForPid(String qxId) {
        return sysQxglService.getSysQxListForPid(qxId);
    }

    /**
     * 添加或跟新权限
     *
     * @param qxGl 权限管理对象
     * @param fg   标识添加或者修改
     * @return
     */
    @RequestMapping("/addOrUpdateQxgl")
    @ResponseBody
    public Object addOrUpdateQxgl(SysQxgl qxGl, String fg) {
        try {
            if (StrUtil.isNotNull(fg)) {
                sysQxglService.getDao().updateIgnoreNull(qxGl);
            } else {
                sysQxglService.getDao().insert(qxGl);
            }
            return requestResult(true, "");
        } catch (Exception e) {
            e.printStackTrace();
            return requestResult(false, "");
        }
    }

    /**
     * 删除
     *
     * @param qxId 权限Id
     */
    @RequestMapping("/deleteQxgl")
    @ResponseBody
    public Object deleteQxgl(String qxId) {
        try {
            sysQxglService.deleteQxgl(qxId);
            return requestResult(true, "");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return requestResult(false, "");
    }

    /**
     * 验证Id
     *
     * @param qxId 权限Id
     * @return
     */
    @RequestMapping("/checkQxId")
    @ResponseBody
    public Object checkQxId(String qxId) {
        if (sysQxglService.checkQxGl(qxId, "qxId")) {
            return requestResult(false, "权限ID ' " + qxId + " ' 已存在!!");
        }
        return requestResult(true, "");
    }
}
