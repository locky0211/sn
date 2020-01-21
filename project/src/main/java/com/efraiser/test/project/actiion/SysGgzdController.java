package com.efraiser.test.project.actiion;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.model.sys.SysGgzdGroup;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysggzd.impl.SysGgzdServiceImpl;
import com.efraiser.test.db.service.sys.sysggzdzu.SysGgzdZuService;
import com.efraiser.test.db.service.sys.sysggzdzu.impl.SysGgzdZuServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("sys/ggzd")
public class SysGgzdController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysGgzdController.class);

    @Autowired
    private SysGgzdService sysGgzdService;

    @Autowired
    private SysGgzdZuService sysGgzdZuService;

    /**
     * 获取公共字典组信息
     *
     * @return
     */
    @RequestMapping("/getGgzdZuList")
    @ResponseBody
    public Object getGgzdZuList() {
        SysGgzdZuServiceImpl sysGgzdZuServiceImpl = (SysGgzdZuServiceImpl) sysGgzdZuService;

        return sysGgzdZuServiceImpl.query(null, null);
    }

    /**
     * 验证公共字典组Id唯一
     *
     * @param gId 组id
     * @return
     */
    @RequestMapping("/checkZuId")
    @ResponseBody
    public Object checkZuId(String gId) {
        if (sysGgzdZuService.checkGgzdZu(gId)) {
            return false;
        }
        return true;
    }

    /**
     * 获取公共字典组列表用于选择上级权限
     *
     * @param gId 公共字典组id
     * @return
     */
    @RequestMapping("/getSysGgzdzuListbyId")
    @ResponseBody
    public Object getSysGgzdzuListbyId(String gId) {
        return sysGgzdZuService.getGgzdZuListNotLower(gId);
    }

    /**
     * 添加或编辑公共字典组
     *
     * @param idFlag 公共字典组id,用于判断是否为修改
     * @return
     */
    @RequestMapping(value = "/addOrUpdateGgzdzu")
    @ResponseBody
    public Boolean addOrUpdateGgzdZu(String idFlag, @RequestBody SysGgzdGroup ggzdzu) {
        try {
            if (StrUtil.isNotNull(idFlag)) {
                sysGgzdZuService.getDao().updateIgnoreNull(ggzdzu);
            } else {
                sysGgzdZuService.getDao().insert(ggzdzu);
            }
            return true;
        } catch (Exception e) {
            logger.error("addOrUpdateGgzdZu() error! idFlag:[" + idFlag + "],ggzdzu:[" + JSONObject.toJSONString(ggzdzu) + "]", e);
            return false;
        }
    }

    /**
     * 获取公共字典组信息用于编辑
     *
     * @param gId 公共字典组id
     * @return
     */
    @RequestMapping("/toEditGgzdzu")
    public ModelAndView toEditGgzdzu(String gId, String page) {
        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        SysGgzdZuServiceImpl SysGgzdZuServiceimpl = (SysGgzdZuServiceImpl) sysGgzdZuService;
        modelAndView.addObject("obj", SysGgzdZuServiceimpl.fetch(gId));
        return modelAndView;

    }

    /**
     * 删除公共字典组
     *
     * @param gId 公共字典组id
     * @return
     */
    @RequestMapping("/deleteGgzdZu")
    @ResponseBody
    public Boolean deleteGgzdZu(String gId) {
        try {
            sysGgzdZuService.deletGGzdZu(gId);
            return true;
        } catch (Exception e) {
            logger.error("deleteGgzdZu() error! gId:[" + gId + "]", e);
            return false;
        }
    }

    @RequestMapping("/toAddGgzd")
    public ModelAndView toAddGgzd(String pId, String gId, String page) {
        page = page.replace(".jsp", "");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        SysGgzd ggzd = new SysGgzd();
        ggzd.setgId(gId);
        ggzd.setpId(pId);

        modelAndView.addObject("obj", ggzd);

        return modelAndView;
    }

    /**
     * 添加或更新公共字典
     *
     * @param ggzd 公共字典对象
     * @return
     */
    @RequestMapping("/addOrUpdateGgzd")
    @ResponseBody
    public Object addOrUpdateGgzd(@RequestBody SysGgzd ggzd) {
        try {
            if (StrUtil.isNotNull(ggzd.getId())) {
                sysGgzdService.getDao().updateIgnoreNull(ggzd);
            } else {
                sysGgzdService.getDao().insert(ggzd);
            }
            return requestResult(true, null);
        } catch (Exception e) {
            logger.error("addOrUpdateGgzd() error! ggzdzu:[" + JSONObject.toJSONString(ggzd) + "]", e);
            return requestResult(false, null);
        }
    }

    /**
     * 获取公共字典信息用于编辑
     *
     * @param id 公共字典id
     * @return
     */
    @RequestMapping("/toEditGgzd")
    public ModelAndView toEditGgzd(String id, String page) {
        page = page.replace(".jsp", "");

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName(page);

        SysGgzdServiceImpl sysGgzdServiceImpl = (SysGgzdServiceImpl) sysGgzdService;
        modelAndView.addObject("obj", sysGgzdServiceImpl.fetch(id));

        return modelAndView;
    }

    /**
     * 获取公共字典列表用于选择上级权限
     *
     * @param id 过滤数据自身及下级数据
     * @return
     */
    @RequestMapping("/getSysGgzdListbyId")
    @ResponseBody
    public Object getSysGgzdListbyId(String id, String gId, boolean expanded) {
        return sysGgzdService.getGgzdListNotLower(id, gId, expanded);
    }

    /**
     * 保存公共字典结构
     *
     * @param ggzdList
     * @return
     */
    @RequestMapping("/doSaveGgzdJG")
    @ResponseBody
    public RequestResult doSaveGgzdJG(@RequestBody  List<SysGgzd> ggzdList) {
        try {
            sysGgzdService.getDao().updateIgnoreNull(ggzdList.toArray());
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("addOrUpdateGgzd() error! ggzdzu:[" + JSONObject.toJSONString(ggzdList) + "]", e);
            return requestResult(false, "");
        }
    }

    /**
     * 删除公共字典
     *
     * @param id 公共字典id
     * @return
     */
    @RequestMapping("/deleteGgzd")
    @ResponseBody
    public RequestResult deleteGgzd(String id) {
        try {
            sysGgzdService.deleteGgzd(id);
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("deleteGgzd() error! id:[" + id + "]", e);
            return requestResult(false, "");
        }

    }

    /**
     * id唯一性校验
     *
     * @param gId 公共字典id
     * @return
     */
    @RequestMapping("/checkIsOnly")
    @ResponseBody
    public RequestResult checkIsOnly(String value, String gId) {
        if (sysGgzdService.checkGgzd(value, "ZD_VALUE", gId)) {
            return requestResult(false, "ID ' " + value + " ' 已存在!!");
        }
        return requestResult(true, "");
    }

    /**
     * 从缓存获取公共字典信息列表
     *
     * @return
     */
    @RequestMapping("/getGgzdListByCache")
    @ResponseBody
    public Object getGgzdListByCache(String groupId, boolean expanded) {
        return SysGgzdCache.getSysGgzdList(groupId);
        //  return sysGgzdService.getGgzdListByGroupId(groupId, expanded);
    }

    /**
     * 功能描述：从数据库中获取公共字典
     *
     * @param groupId
     * @param expanded
     * @return
     * @author wushuo
     * @date 2016年2月26日
     * @modify log:
     */
    @RequestMapping("/getGgzdList")
    @ResponseBody
    public Object getGgzdList(String groupId, boolean expanded) {
        // return SysGgzdCache.getSysGgzdList(groupId);
        return sysGgzdService.getGgzdListByGroupId(groupId, expanded);
    }

    // /**
    // * 获取公共字典信息列表
    // *
    // * @return
    // */
    // @At
    // @Ok("json")
    // public Object doCleanSysGgzdCache() {
    // try {
    // List<String> gIds = sysGgzdService.getGidList();
    // for (String gId : gIds) {
    // List<SysGgzd> ggzdList = sysGgzdService.getGgzdListByGroupId(gId, false);
    // CommonCache.getInstance().put(RdTableConstants.RD_CACHE_KEY + gId,
    // ggzdList);
    // }
    // return true;
    // } catch (Exception e) {
    // e.printStackTrace();
    // return false;
    // }
    // }

    /**
     * 获取公共字典信息列表
     *
     * @return
     */
    @RequestMapping("/getGgzdListToDb")
    @ResponseBody
    public Object getGgzdListToDb(String groupId) {
        return sysGgzdService.getGgzdListByGroupId(groupId, true);
    }

    /**
     * 获取公共字典信息列表
     *
     * @return
     */
    @RequestMapping("/getGgzdListLazy")
    @ResponseBody
    public Object getGgzdListLazy(String zdValue, String groupId) {
        return sysGgzdService.getGgzdListByGroupIdForLazy(zdValue, groupId);
    }

    /**
     * 功能描述：与日期相关联的报表类型
     *
     * @param groupId
     * @param rd      报表类型
     * @return
     * @author 王飞
     * @date 2018年1月17日
     * @modify log:
     */
    @RequestMapping("/getGgzdListByRd")
    @ResponseBody
    public Object getGgzdListByRd(String groupId, String rd) {
        List<SysGgzd> ggzds = new ArrayList<>();
        SysGgzd ggzd = new SysGgzd();
        ggzd.setZdValue("50");
        ggzd.setZdName("月报");
        ggzd.setgId(groupId);
        ggzd.setSortNum("3");
        ggzds.add(ggzd);
        if ("03".equals(rd) || "06".equals(rd) || "09".equals(rd) || "12".equals(rd)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("40");
            ggzd.setZdName("季报");
            ggzd.setgId(groupId);
            ggzd.setSortNum("4");
            ggzds.add(ggzd);
        }
        if ("06".equals(rd) || "12".equals(rd)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("80");
            ggzd.setZdName("半年报");
            ggzd.setgId(groupId);
            ggzd.setSortNum("5");
            ggzds.add(ggzd);
        }
        if ("12".equals(rd)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("00");
            ggzd.setZdName("年报");
            ggzd.setgId(groupId);
            ggzd.setSortNum("6");
            ggzds.add(ggzd);
        }

        return ggzds;
    }

    /**
     * 功能描述：与报表类型相关联的校验频度
     *
     * @param groupId
     * @param rd
     * @return
     * @author 王飞
     * @date 2018年1月17日
     * @modify log:
     */
    @RequestMapping("/getReportRateByRd")
    @ResponseBody
    public Object getReportRateByRd(String groupId, String rd) {
        List<SysGgzd> ggzds = new ArrayList<>();
        SysGgzd ggzd;
        if ("50".equals(rd)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("1");
            ggzd.setZdName("上月");
            ggzd.setgId(groupId);
            ggzd.setSortNum("4");
            ggzds.add(ggzd);
        } else if ("40".equals(rd)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("2");
            ggzd.setZdName("上季");
            ggzd.setgId(groupId);
            ggzd.setSortNum("5");
            ggzds.add(ggzd);
        } else if ("80".equals(rd)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("3");
            ggzd.setZdName("上半年");
            ggzd.setgId(groupId);
            ggzd.setSortNum("6");
            ggzds.add(ggzd);
        }
        ggzd = new SysGgzd();
        ggzd.setZdValue("4");
        ggzd.setZdName("去年同期");
        ggzd.setgId(groupId);
        ggzd.setSortNum("7");
        ggzds.add(ggzd);
        return ggzds;
    }

    /**
     * 功能描述：与日期相关联的指标周期
     *
     * @param groupId
     * @param month   报表类型
     * @return
     * @author 王飞
     * @date 2018年1月17日
     * @modify log:
     */
    @RequestMapping("/getIndTypeByMon")
    @ResponseBody
    public Object getIndTypeByMon(String groupId, String month) {
        List<SysGgzd> ggzds = new ArrayList<>();
        SysGgzd ggzd = new SysGgzd();
        ggzd.setZdValue("1");
        ggzd.setZdName("月度");
        ggzd.setgId(groupId);
        ggzd.setSortNum("3");
        ggzds.add(ggzd);
        if ("03".equals(month) || "06".equals(month) || "09".equals(month) || "12".equals(month)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("2");
            ggzd.setZdName("季度");
            ggzd.setgId(groupId);
            ggzd.setSortNum("4");
            ggzds.add(ggzd);
        }
        if ("06".equals(month) || "12".equals(month)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("3");
            ggzd.setZdName("半年");
            ggzd.setgId(groupId);
            ggzd.setSortNum("5");
            ggzds.add(ggzd);
        }
        if ("12".equals(month)) {
            ggzd = new SysGgzd();
            ggzd.setZdValue("4");
            ggzd.setZdName("年度");
            ggzd.setgId(groupId);
            ggzd.setSortNum("6");
            ggzds.add(ggzd);
        }

        return ggzds;
    }

    @RequestMapping("/getZdValueByGid")
    @ResponseBody
    public Object getZdValueByGid(String gId) {
        return sysGgzdService.getZdValueByGid(gId);
    }
}
