package com.efraiser.test.project.actiion.sys;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import com.efraiser.test.project.actiion.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("sys/bm")
public class SysBmglController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysBmglController.class);

    @Autowired
    private SysBmglService sysBmglService;

    @Autowired
    private RdTableInfoService rdTableInfoService;

    /**
     * 根据条件获取获取部门信息
     *
     * @param bmCode 部门id
     * @return
     */
    @RequestMapping("/getSysBmList")
    @ResponseBody
    public Object getSysBmList(String bmCode, String bmName, String bmType, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmList(bmCode, bmName, bmType, user.getUserId());

    }

    /**
     * 根据当前登录用户,获取用户可操作机构列表
     *
     * @return
     */
    @RequestMapping("/getSysBmListByUserId")
    @ResponseBody
    public Object getSysBmListByUserId(HttpSession session, String pid, String bmCategory) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmListByUserId(user.getUserId(), pid, bmCategory);
    }

    /**
     * 根据当前登录用户,获取用户可操作机构列表
     *
     * @return
     */
    @RequestMapping("/getSysBmListByUserIdAndTabcode")
    @ResponseBody
    public List<SysBmgl> getSysBmListByUserIdAndTabcode(String tabcode, String reportDate, HttpSession session) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        List<RdTableInfo> rdTableInfo = rdTableInfoService.getListByTabcodeAndReportDate(tabcode, reportDate);
        return sysBmglService.getSysBmListByUserIdAndTabcode(user.getUserId(), rdTableInfo);
    }

    @RequestMapping("/doSaveBmglJG")
    @ResponseBody
    public Object doSaveBmglJG(@RequestBody List<SysBmgl> bmglList) {

        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;

        try {
            sysBmglServiceImpl.dao().updateIgnoreNull(bmglList);
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("doSaveBmglJG() error! bmglList:[" + JSONArray.toJSONString(bmglList) + "]", e);
            return requestResult(false, "");
        }
    }

    /**
     * 获取部门信息用于编辑
     *
     * @param bmCode
     * @return
     */
    @RequestMapping("/toEditSysBmgl")
    public ModelAndView toEditSysBmgl(String bmCode) {

        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;
        SysBmgl sysBmgl = sysBmglServiceImpl.fetch(bmCode);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/sys/jsp/sys_bmgl");

        if (sysBmgl != null) {
            modelAndView.addObject("obj", sysBmgl);
        }

        return modelAndView;
    }

    /**
     * 获取部门信息用于选择上级部门
     *
     * @param bmCode
     * @return
     */
    @RequestMapping("/getSysBmListForPid")
    @ResponseBody
    public Object getSysBmListForPid(String bmCode) {
        return sysBmglService.getSysBmListForPid(bmCode);
    }

    /**
     * 根据部门id递归删除部门
     *
     * @param bmCode 部门id
     * @return
     */
    @RequestMapping("/delBmgl")
    @ResponseBody
    public Object delBmgl(String bmCode) {
        try {
            sysBmglService.deleteBmgl(bmCode);
            return requestResult(true, "删除成功!!");
        } catch (Exception e) {
            logger.error("delBmgl() error! bmCode:[" + bmCode + "]", e);
            return requestResult(false, "删除失败!!");
        }
    }

    /**
     * 新增或修改部门
     *
     * @param bmgl 标识是否跟新 如果flagb部位null 则执行更新操作 否则执行 插入操作
     * @return
     */
    @RequestMapping("/addOrUpdateBmgl")
    @ResponseBody
    public Object addOrUpdateBmgl(@RequestBody SysBmgl bmgl) {
        SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl) sysBmglService;

        try {
            // 如果存在,修改
            if (sysBmglService.checkbmCode(bmgl.getBmCode())) {
                sysBmglServiceImpl.dao().insert(bmgl);
            } else {
                sysBmglServiceImpl.dao().updateIgnoreNull(bmgl);
            }
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("addOrUpdateBmgl() error! bmgl:[" + JSONObject.toJSONString(bmgl) + "]", e);
            return requestResult(false, null);
        }
    }
    /**
     * 校验部门Id
     *
     * @param bmCode
     * @return
     */
    @RequestMapping("/checkBmCode")
    @ResponseBody
    public Object checkBmCode(String bmCode) {
        if (sysBmglService.checkbmCode(bmCode)) {
            return requestResult(true, "");
        } else {
            return requestResult(false, "操作失败!!");
        }

    }

    /**
     * 校验部门name
     *
     * @param bmName
     * @return
     */
    @RequestMapping("/checkBmName")
    @ResponseBody
    public Object checkBmName(String bmName) {
        if (sysBmglService.checkBmName(bmName)) {
            return requestResult(true, "");
        } else {
            return requestResult(false, "操作失败!!");
        }

    }

    @RequestMapping("/addVisualBrno")
    @ResponseBody
    public Object addVisualBrno(String brNo, String brnoName) {
        if (sysBmglService.addVisualJG(brNo, brnoName)) {
            return requestResult(true, "添加成功");
        }
        return requestResult(false, "添加失败");
    }

    @RequestMapping("/getXNJGByPid")
    @ResponseBody
    public Object getXNJGByPid() {
        List<SysBmgl> list = sysBmglService.getXNJGByPid("BF_HZ");
        return list;
    }

    @RequestMapping("/acceptBrNo")
    @ResponseBody
    public Object acceptBrNo(String bmCode) {
        String bm[] = bmCode.split("/");
        String brNo = "";
        for (String str : bm) {
            brNo += "," + sysBmglService.findBmNameByBmCode(str);
        }
        return requestResult(true, brNo.substring(1));
    }

    @RequestMapping("/deleteBrno")
    @ResponseBody
    public Object deleteBrno(String bmCodes) {
        String bmCode[] = bmCodes.substring(0, bmCodes.length() - 1).split(";");
        try {
            if(bmCode.length > 0){
                sysBmglService.deleteBrno(bmCode);
            }

            return requestResult(true, "删除虚拟机构成功");
        } catch (Exception e) {
            return requestResult(false, "删除虚拟机构失败!!!");
        }
    }

    @RequestMapping("/getBmNameByBmCode")
    @ResponseBody
    public Object getBmNameByBmCode(String bmCode) {
        try {
            String bmName = sysBmglService.findBmNameByBmCode(bmCode);
            return requestResult(true, bmName);
        } catch (Exception e) {
            return requestResult(false, "转换失败");
        }
    }

    @RequestMapping("/getBmNameByBmCodes")
    @ResponseBody
    public Object getBmNameByBmCodes(String bmCode) {
        String bmName = "";
        try {
            String[] brNos = bmCode.split(",");
            for (String brNo : brNos) {
                bmName += "," + sysBmglService.findBmNameByBmCode(brNo);
            }
            return requestResult(true, bmName.substring(1));
        } catch (Exception e) {
            return requestResult(false, "转换失败");
        }
    }

    @RequestMapping("/getSysBmListByUserIdDJZ")
    @ResponseBody
    public Object getSysBmListByUserIdDJZ(HttpSession session, String pid) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmListByUserIdDJZ(user.getUserId(), pid);
    }

    @RequestMapping("/getSysBmListByUserIdForRd")
    @ResponseBody
    public Object getSysBmListByUserIdForRd(HttpSession session, String pid) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmListByUserIdForRd(user.getUserId(), pid);
    }

    @RequestMapping("/getSysBmListForBm")
    @ResponseBody
    public Object getSysBmListForBm() {
        return sysBmglService.getSysBmListForBm();
    }

    /**
     * 功能描述：根据机构类型去取机构
     *
     * @param session
     * @param bmCategory 机构类别
     * @return
     * @author wushuo
     * @date 2016年11月30日
     * @modify log:
     */
    @RequestMapping("/getSysBmListByBmCategory")
    @ResponseBody
    public Object getSysBmListByBmCategory(HttpSession session, String bmCategory) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmListByBmCategory(user.getUserId(), bmCategory);
    }

    @RequestMapping("/getSysBmListByBmCode")
    @ResponseBody
    public Object getSysBmListByBmCode(HttpSession session, String bmCode) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmListByBmCode(user.getUserId(), bmCode);
    }

    /**
     * 功能描述：根据机构类型去取机构(不论当前登录人)
     *
     * @param bmCategory 机构类别
     * @return
     * @author wushuo
     * @date 2016年11月30日
     * @modify log:
     */
    @RequestMapping("/getSysBmListByBmCategoryIgnoreUserId")
    @ResponseBody
    public Object getSysBmListByBmCategoryIgnoreUserId(String bmCategory) {
        return sysBmglService.getSysBmListByBmCategoryIgnoreUserId(bmCategory);
    }

    @RequestMapping("/getBFHZJG")
    @ResponseBody
    public Object getBFHZJG() {
        return sysBmglService.getBFHZJG();
    }


    /**
     * 功能描述：（为适应吴江需求，判断有没有机构类别，有的话按机构类别显示，没有的话就按角色用户权限显示对应机构）
     *
     * @param session
     * @param bmCategory
     * @return
     * @author
     * @date 2017年7月11日
     * @modify log:
     */
    @RequestMapping("/getSysBmListByIsExistBmCategory")
    @ResponseBody
    public Object getSysBmListByIsExistBmCategory(HttpSession session, String bmCategory) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmListByIsExistBmCategory(user.getUserId(), bmCategory);
    }

//    @RequestMapping("/getSysBmListByIsExistBmCategoryBySls")
//    @ResponseBody
//    public Object getSysBmListByIsExistBmCategoryBySls(HttpSession session, String bmCategory) {
//        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
//        return sysBmglService.getSysBmListByIsExistBmCategoryBySls(user.getUserId(), bmCategory);
//    }

    /**
     * 功能描述：上海机构查询
     *
     * @param session
     * @param pid
     * @return
     * @author
     * @date 2017年12月25日
     * @modify log:
     */
    @RequestMapping("/getSysBmListByUserId_SH")
    @ResponseBody
    public Object getSysBmListByUserId_SH(HttpSession session, String pid) {
        SysUser user = (SysUser) session.getAttribute(SystemConstants.SESSION_USER);
        return sysBmglService.getSysBmListByUserId_SH(user.getUserId(), pid);
    }

}
