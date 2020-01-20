package com.efraiser.test.project.actiion;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysJsQx;
import com.efraiser.test.db.model.sys.SysJsgl;
import com.efraiser.test.db.service.sys.sysjsgl.SysJsglService;
import com.efraiser.test.db.service.sys.sysjsgl.impl.SysJsglServiceImpl;
import com.efraiser.test.db.service.sys.sysjsqx.SysJsQxService;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.service.sys.sysjsqx.impl.SysJsQxServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


/**
 * 角色管理Action
 *
 * @author Hww
 */
@Controller
@RequestMapping("sys/jus")
public class SysJsglController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysJsglController.class);

    @Autowired
    private SysJsglService sysJsglService;
    @Autowired
    private SysJsQxService sysJsQxService;

    /**
     * 获取角色信息列表
     *
     * @param pageIndex 第几页
     * @param pageSize  显示条数
     * @param key       搜索关键字
     * @return
     */
    @RequestMapping("/getSysJsList")
    @ResponseBody
    public GridQueryPageResult getSysJsList(int pageIndex, int pageSize, String key) {
        return sysJsglService.getSysJsList(pageIndex, pageSize, key);
    }

    /**
     * 获取角色信息用于编辑
     *
     * @param jsId 　角色Id
     * @return
     */
    @RequestMapping("/getSysJsList")
    public ModelAndView toEditSysJsList(String jsId, HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/sys/jsp/sys_jsgl");

        SysJsglServiceImpl sysJsglServiceImpl = (SysJsglServiceImpl) sysJsglService;

        SysJsgl jsgl = sysJsglServiceImpl.fetch(jsId);
        List<SysJsQx> jsqx = sysJsQxService.queryByJIds(jsId);
        String str = "";
        if (jsqx.size() > 0) {
            for (SysJsQx js : jsqx) {
                str += js.getqId() + ",";
            }
            str = str.substring(0, str.length() - 1);
        }
        modelAndView.addObject("jsgl", jsgl);
        modelAndView.addObject("jsqxStr", str);
        return modelAndView;
    }

    /**
     * 获取所有的角色信息
     *
     * @return
     */
    @RequestMapping("/getSysJsqlList")
    @ResponseBody
    public List<SysJsgl> getSysJsqlList() {

        SysJsglServiceImpl sysJsglServiceImpl = (SysJsglServiceImpl) sysJsglService;
        return sysJsglServiceImpl.query(null, null);
    }

    /**
     * 获取所有启用的角色信息
     *
     * @return
     */
    @RequestMapping("/getSysJsqlList")
    @ResponseBody
    public List<SysJsgl> getSysJsqlListForYonghu() {
        return sysJsglService.getJsglListForYh();
    }

    /**
     * 添加或跟新
     *
     * @param jsQxs   角色所对应的权限集合
     * @param sysJsgl 角色对象
     * @param flag    添加或者跟新标识
     * @return
     */
    @RequestMapping("/addOrUpdateJsgl")
    @ResponseBody
    public RequestResult addOrUpdateJsgl(List<SysJsQx> jsQxs, SysJsgl sysJsgl, String flag) {
        try {
            sysJsglService.addOrUpdateJsgl(jsQxs, sysJsgl, flag);
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("addOrUpdateJsgl() error! flag:[" + flag + "],sysJsgl:[" + JSONObject.toJSONString(sysJsgl) + "],jsQxs:" + JSONArray.toJSONString(jsQxs), e);
            return requestResult(false, "");
        }
    }

    /**
     * 删除
     *
     * @return
     */
    @RequestMapping("/deleteJsgl")
    @ResponseBody
    public RequestResult deleteJsgl(String jsId) {
        if (StrUtil.isNotNull(jsId)) {
            sysJsglService.deleteJsgl(jsId);
            return requestResult(true, "");
        }
        return requestResult(false, "");
    }

    /**
     * 验证Id
     *
     * @param jsId 角色Id
     * @return
     */
    @RequestMapping("/checkJsId")
    @ResponseBody
    public RequestResult checkJsId(String jsId) {

        if (sysJsglService.checkJsId(jsId)) {
            return requestResult(false, "");
        }
        return requestResult(true, "");
    }

}
