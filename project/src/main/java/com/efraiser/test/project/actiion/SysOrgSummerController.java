package com.efraiser.test.project.actiion;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysOrgSummer;
import com.efraiser.test.db.service.sys.sysorgsummer.SysOrgSummerService;
import com.efraiser.test.db.service.sys.sysorgsummer.impl.SysOrgSummerServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("sys/orgSummer")
public class SysOrgSummerController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysOrgSummerController.class);

    @Autowired
    private SysOrgSummerService sysOrgSummerService;

    /**
     * 功能描述：分页查询所有
     *
     * @param sumCode
     * @param pageIndex
     * @param pageSize
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    @RequestMapping("/getOrgSummerList")
    @ResponseBody
    public GridQueryPageResult getOrgSummerList(String sumCode, int pageIndex, int pageSize) {
        GridQueryPageResult gqpr = sysOrgSummerService.getOrgSummerList(sumCode, pageIndex, pageSize);
        return gqpr;
    }

    /**
     * 功能描述：删除
     *
     * @param id
     * @param req
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    @RequestMapping("/deleteOrgSummer")
    @ResponseBody
    public Object deleteOrgSummer(String id, HttpServletRequest req) {
        try {
            sysOrgSummerService.deleteSysOrgSummer(id);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("deleteOrgSummer() error! id:[" + id + "]", e);
            return requestResult(false, "操作异常！");
        }
    }

    /**
     * 功能描述：查询所有汇总机构
     *
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    @RequestMapping("/findAllSumOrg")
    @ResponseBody
    public Object findAllSumOrg() {
        return sysOrgSummerService.findAllSumOrg();
    }

    /**
     * 功能描述：根据Id查询跳转编辑页面
     *
     * @param id
     * @param page
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    @RequestMapping("/getOrgSummerById")
    public ModelAndView getOrgSummerById(String id, String page) {

        ModelAndView modelAndView = new ModelAndView();
        page = page.replace(".jsp", "");
        modelAndView.setViewName(page);


        SysOrgSummer sysOrgSummer = sysOrgSummerService.getSysOrgSummerById(id);
        if (sysOrgSummer != null) {
            modelAndView.addObject("obj", sysOrgSummer);
        }
        return modelAndView;
    }

    /**
     * 功能描述：更新
     *
     * @param sysOrgSummer
     * @param req
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    @RequestMapping("/updateOrgSummer")
    @ResponseBody
    public RequestResult updateOrgSummer(HttpServletRequest req, @RequestBody SysOrgSummer sysOrgSummer) {
        try {
            // 页面获取对象
            String id = sysOrgSummer.getId();
            String sumOrg = sysOrgSummer.getSumCode();
            String subOrg = sysOrgSummer.getSubCode();

            // 数据库获取对象
            int isExist = sysOrgSummerService.isSysOrgSummerExist(sumOrg, subOrg);
            if (StrUtil.isNotNull(id)) {
                if (isExist > 0) {
                    return requestResult(false, "配置已经存在！");
                } else {

                    SysOrgSummerServiceImpl sysOrgSummerServiceImpl = (SysOrgSummerServiceImpl) sysOrgSummerService;
                    sysOrgSummerServiceImpl.dao().updateIgnoreNull(sysOrgSummer);
                    return requestResult(true, null);
                }
            } else {
                return requestResult(false, "SAM.SYS_ORG_SUMMER表的ID为空！请联系科技！！");
            }
        } catch (Exception e) {
            logger.error("updateOrgSummer() error! sysOrgSummer:[" + JSONObject.toJSONString(sysOrgSummer) + "]", e);
            return requestResult(false, "更新错误！");
        }
    }

    /**
     * 功能描述：新增
     *
     * @param sumCode
     * @param subCode
     * @param req
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    @RequestMapping("/addOrgSummer")
    @ResponseBody
    public Object addOrgSummer(String sumCode, String subCode, HttpServletRequest req) {
        List<String> subOrgList = new ArrayList<String>();
        List<String> subOrgIsExistList = new ArrayList<String>();
        try {
            subCode = delParentNode(subCode);
            String[] newSubOrgs = subCode.split(",");
            for (int i = 0; i < newSubOrgs.length; i++) {
                String subOrg = newSubOrgs[i];
                int isExist = sysOrgSummerService.isSysOrgSummerExist(sumCode, subOrg);
                if (isExist > 0) {
                    subOrgIsExistList.add(subOrg);
                } else {
                    subOrgList.add(subOrg);
                }
            }
            if (subOrgIsExistList.size() == 0 && subOrgList.size() > 0) {
                for (String subOrg : subOrgList) {
                    sysOrgSummerService.insert(sumCode, subOrg);
                }
            } else {
                return requestResult(false, "有已存在配置！");
            }
        } catch (Exception e) {
            logger.error("addOrgSummer() error! sumCode:[" + sumCode+ "],subCode:[" + subCode+ "]", e);
            return requestResult(false, "新增错误！");
        }
        return requestResult(true, null);
    }

    /**
     * 功能描述：去除父节点
     *
     * @param brNos
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    private String delParentNode(String brNos) {
        String brNo = "";
        String brnos[] = brNos.split(",");
        for (int i = 0; i < brnos.length; i++) {
            int num = sysOrgSummerService.CheckParent(brnos[i]);
            if (num == 0) {
                if (i == brnos.length - 1) {
                    brNo += "" + brnos[i] + "";
                } else {
                    brNo += "" + brnos[i] + ",";
                }
            }
        }
        return brNo;
    }
}
