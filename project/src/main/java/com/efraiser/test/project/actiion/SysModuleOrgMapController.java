package com.efraiser.test.project.actiion;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysModuleOrgMap;
import com.efraiser.test.db.service.sys.sysmoduleorgmap.SysModuleOrgMapService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("sys/moduleOrgMap")
public class SysModuleOrgMapController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysModuleOrgMapController.class);

    @Autowired
    private SysModuleOrgMapService sysModuleOrgMapService;

    /**
     * 功能描述：分页查询所有
     *
     * @param pageIndex
     * @param pageSize
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    @RequestMapping("/getModuleOrgMapList")
    @ResponseBody
    public GridQueryPageResult getModuleOrgMapList(int pageIndex, int pageSize) {
        GridQueryPageResult gqpr = sysModuleOrgMapService.getModuleOrgMapList(pageIndex, pageSize);
        return gqpr;
    }

    /**
     * 功能描述：删除
     *
     * @param id
     * @param req
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    @RequestMapping("/deleteModuleOrgMap")
    @ResponseBody
    public RequestResult deleteModuleOrgMap(String id, HttpServletRequest req) {
        try {
            sysModuleOrgMapService.deleteSysModuleOrgMap(id);
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("deleteModuleOrgMap() error! id:[" + id + "]", e);
            return requestResult(false, "操作异常！");
        }
    }

    /**
     * 功能描述：增加
     *
     * @param oldModule
     * @param oldOrg
     * @param newList
     * @param req
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    @RequestMapping("/addModuleOrgMap")
    @ResponseBody
    public Object addModuleOrgMap(String oldModule, String oldOrg, String newList, HttpServletRequest req) {
        try {
            String[] moduleOrgs = newList.split(",");
            List<String> moduleOrgStrList = new ArrayList<String>();
            for (String moduleOrg : moduleOrgs) {
                String[] str = moduleOrg.split(";");
                String newModule = str[0];
                String temp = oldModule + ":" + oldOrg + ":" + newModule;
                if (!moduleOrgStrList.contains(temp)) {
                    moduleOrgStrList.add(temp);
                } else {
                    return requestResult(false, "映射配置错误！映射模块已经存在！");
                }
            }
            for (String moduleOrg : moduleOrgs) {
                String[] str = moduleOrg.split(";");
                String newModule = str[0];
                String newOrg = str[1];
                SysModuleOrgMap sysModuleOrgMap = sysModuleOrgMapService.getNewOrg(oldModule, oldOrg, newModule);
                if (sysModuleOrgMap == null) {
                    sysModuleOrgMapService.insert(oldModule, oldOrg, newModule, newOrg);
                } else {
                    return requestResult(false, "映射配置错误！映射模块已经存在！");
                }
            }
        } catch (Exception e) {
            logger.error("addModuleOrgMap() error! oldModule:[" + oldModule + "],oldOrg:[" + oldOrg + "],newList:[" + newList + "]", e);
            return requestResult(false, "插入错误！");
        }
        return requestResult(true, null);
    }

    /**
     * 功能描述：根据ID查询一条记录
     *
     * @param id
     * @param page
     * @return
     * @author
     * @date 2017年7月12日
     * @modify log:
     */
    @RequestMapping("/getModuleOrgMapById")
    public ModelAndView getModuleOrgMapById(String id,String page) {
        ModelAndView modelAndView = new ModelAndView();
        page = page.replace(".jsp", "");
        modelAndView.setViewName(page);

        SysModuleOrgMap sysModuleOrgMap = sysModuleOrgMapService.getSysModuleOrgListById(id);
        if(sysModuleOrgMap != null){
            modelAndView.addObject("obj", sysModuleOrgMap);
        }
        return modelAndView;
    }


    /**
     * 功能描述：更新
     *
     */
    @RequestMapping("/updateModuleOrgMap")
    @ResponseBody
    public RequestResult updateModuleOrgMap(@RequestBody SysModuleOrgMap sysModuleOrgMap) {
        try {
            //页面获取对象
            String id = sysModuleOrgMap.getId();
            String oldModule = sysModuleOrgMap.getOldModule();
            String oldOrg = sysModuleOrgMap.getOldOrg();
            String newModule = sysModuleOrgMap.getNewModule();
            //数据库获取对象
            SysModuleOrgMap sysModuleOrgMapIsExist = sysModuleOrgMapService.getNewOrg(oldModule, oldOrg, newModule);
            if (StrUtil.isNotNull(id)) {
                if (sysModuleOrgMapIsExist == null || id.equals(sysModuleOrgMapIsExist.getId())) {
                    sysModuleOrgMapService.updateSysModuleOrgMap(sysModuleOrgMap);
                    return requestResult(true, null);
                } else {
                    return requestResult(false, "映射配置错误！映射模块已经存在！");
                }
            } else {
                return requestResult(false, "SAM.SYS_MODULE_ORG_MAP表的ID为空！请联系科技！！");
            }
        } catch (Exception e) {
            logger.error("updateModuleOrgMap() error! sysModuleOrgMap:[" + JSONObject.toJSONString(sysModuleOrgMap) + "]", e);
            return requestResult(false, "更新错误！");
        }
    }

    /**
     * 功能描述：根据条件查询映射机构
     *
     * @param req
     * @param oldModule
     * @param oldOrg
     * @param newModule
     * @return
     * @author
     * @date 2017年7月14日
     * @modify log:
     */
    @RequestMapping("/getNewOrg")
    @ResponseBody
    public Object getNewOrg(HttpServletRequest req, String oldModule,String oldOrg, String newModule) {
        try {
            SysModuleOrgMap sysModuleOrgMap = sysModuleOrgMapService.getNewOrg(oldModule, oldOrg, newModule);
            if (sysModuleOrgMap == null) {
                return requestResult(true, null);
            } else {
                return requestResult(true, sysModuleOrgMap);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return requestResult(false, "映射机构获取异常！");
        }
    }


}
