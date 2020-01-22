package com.efraiser.test.project.actiion;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.CacheInfo;
import com.efraiser.test.db.service.sys.cacheinfo.CacheInfoService;
import com.efraiser.test.db.service.sys.cacheinfo.impl.CacheInfoServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/cache")
public class CacheController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(CacheController.class);

    @Autowired
    private CacheInfoService cacheInfoService;

    /**
     * 初始化执行缓存
     *
     * @param beanNames
     * @return
     * @author efraiser.xiaxiaofeng
     */
    @RequestMapping("/doCacheInfoInit")
    @ResponseBody
    public Object doCacheInfoInit(String beanNames) {
        List<String> bl = StrUtil.convertToList(beanNames);
        try {
            cacheInfoService.doCacheInfoInit(bl);
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("doCacheInfoInit()! error! beanNames:[" + beanNames + "]");

            return requestResult(false, "");
        }

    }

    /**
     * 获取缓存列表
     *
     * @param beanName 模糊查找字段
     * @return
     * @author efraiser.xiaxiaofeng
     */
    @RequestMapping("/getCacheInfoList")
    @ResponseBody
    public Object getCacheInfoList(String beanName) {
        return cacheInfoService.getCacheInfoList(beanName);
    }

    /**
     * 修改时获取缓存对象
     *
     * @return
     */
    @RequestMapping("/toEditCacheInfo")
    public ModelAndView toEditCacheInfo(String beanName, String page) {

        CacheInfoServiceImpl cacheInfoServiceimpl = (CacheInfoServiceImpl) cacheInfoService;
        CacheInfo cacheInfo = cacheInfoServiceimpl.fetch(beanName);
        cacheInfo.setFlag("edit");

        ModelAndView modelAndView = new ModelAndView();
        page = page.replace(".jsp", "");
        modelAndView.setViewName(page);
        modelAndView.addObject("obj", cacheInfo);


        return modelAndView;
    }

    /**
     * 新增或修改缓存信息
     *
     * @param cacheInfo
     * @return
     */
    @RequestMapping("/addOrUpdateCacheInfo")
    @ResponseBody
    public Object addOrUpdateCacheInfo(@RequestBody CacheInfo cacheInfo) {
        try {
            cacheInfoService.addOrUpdateCacheInfo(cacheInfo);
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("addOrUpdateCacheInfo()! error! cacheInfo:[" + JSONObject.toJSONString(cacheInfo) + "]", e);
            return requestResult(false, null);
        }

    }

    @RequestMapping("/fetchCacheInfo")
    @ResponseBody
    public Object fetchCacheInfo(String beanName) {

        CacheInfoServiceImpl cacheInfoServiceimpl = (CacheInfoServiceImpl) cacheInfoService;
        return cacheInfoServiceimpl.fetch(beanName);
    }

    /**
     * 删除缓存对象
     *
     * @param beanName
     * @return
     */
    @RequestMapping("/deleteCacheInfo")
    @ResponseBody
    public Object deleteCacheInfo(String beanName) {

        CacheInfoServiceImpl cacheInfoServiceimpl = (CacheInfoServiceImpl) cacheInfoService;
        try {
            cacheInfoServiceimpl.delete(beanName);
            return true;
        } catch (Exception e) {
            logger.error("deleteCacheInfo()! error! beanName:[" + beanName + "]", e);
            return false;
        }
    }

    /**
     * 检验唯一
     *
     * @param beanName
     * @return
     */
    @RequestMapping("/checkIsOnly")
    @ResponseBody
    public Object checkIsOnly(String beanName) {

        CacheInfoServiceImpl cacheInfoServiceimpl = (CacheInfoServiceImpl) cacheInfoService;
        if (cacheInfoServiceimpl.count(beanName) > 0) {
            return requestResult(false, "类名已存在!!");
        }
        return requestResult(true, "");
    }

    /**
     * 保存执行顺序目录结构
     *
     * @param cacheInfos
     * @return
     */
    @RequestMapping("/doSaveCacheJG")
    @ResponseBody
    public Object doSaveCacheJG(@RequestBody List<CacheInfo> cacheInfos) {

        CacheInfoServiceImpl cacheInfoServiceimpl = (CacheInfoServiceImpl) cacheInfoService;
        try {
            cacheInfoServiceimpl.dao().updateIgnoreNull(cacheInfos);// 更新不对空的字段{beanName=sortNum}
            return requestResult(true, "");
        } catch (Exception e) {
            logger.error("doSaveCacheJG()! error! cacheInfos:[" + JSONArray.toJSONString(cacheInfos) + "]", e);
            return requestResult(false, "");
        }
    }

}
