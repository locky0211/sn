package com.efraiser.test.db.service.sys.cacheinfo.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.SpringUtil;
import net.sf.ehcache.Element;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.CacheInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.CacheInterface;
import com.efraiser.test.db.service.cache.CommonCache;
import com.efraiser.test.db.service.sys.cacheinfo.CacheInfoService;
import org.nutz.dao.Cnd;
import org.nutz.dao.sql.Criteria;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CacheInfoServiceImpl extends BaseServiceImpl<CacheInfo> implements CacheInfoService {

    private Logger logger = LoggerFactory.getLogger(CacheInfoServiceImpl.class);


    @Override
    public void doCacheInfoInit(List<String> bl) {
        List<CacheInfo> cacheInfos = query(Cnd.where("beanName", "IN", bl).asc("sortNum"), null);
        for (CacheInfo cacheInfo : cacheInfos) {
            doCacheInit(cacheInfo);
        }
    }

    /**
     * 执行某一缓存方法
     *
     * @param cInfo
     * @author efraiser.xiaxiaofeng
     */
    @Override
    public void doCacheInit(CacheInfo cInfo) {
        try {
            String beanName = StrUtil.lowerFirst(cInfo.getBeanName());// 首字母小写

            if (LocalConfig.getInstance().getProperties().checkCacheName(beanName)) {// 获取缓存对象MVC实例
                List<Element> elements = SpringUtil.getBean(CacheInterface.class, beanName).init();// 执行缓存对象的init方法，并获取放回的List<Element>集合
                if (elements != null && elements.size() > 0) {
                    CommonCache.getInstance().getCache().putAll(elements);// 放入缓存
                    cInfo.setErrorMsg("执行成功");
                } else {
                    logger.info("{}的init方法,返回值为null.");
                    cInfo.setErrorMsg("init返回值为空!!");
                }
            } else {
                logger.debug("ioc中未存在名为 {} 的实例对象..", beanName);
                cInfo.setErrorMsg("未在ioc中检测到实例对象");
            }
        } catch (Exception e) {
            logger.debug("执行 {} 的对象init方法时,出现异常!!{} beanName:[" + cInfo.getBeanName() + "]", e);
            cInfo.setErrorMsg("执行init出现异常!!");
        }
        this.dao().update(cInfo);
    }

    @Override
    public int count(String beanName) {
        return super.count(Cnd.where("beanName", "=", StrUtil.trim(beanName)));
    }

    @Override
    public Object getCacheInfoList(String beanName) {

        Criteria criteria = Cnd.cri();
        if (StrUtil.isNotNull(beanName)) {
            criteria.where().and("BEAN_NAME", "LIKE", "%" + beanName + "%");
        }
        criteria.getOrderBy().asc("SORT_NUM");
        return query(criteria, null);
    }

    @Override
    public void addOrUpdateCacheInfo(CacheInfo cacheInfo) {
        if (StrUtil.isNotNull(cacheInfo.getFlag())) {// flag不为空，则为更新操作
            dao().update(cacheInfo);
        } else {
            dao().fastInsert(cacheInfo);
        }
        doCacheInit(cacheInfo);// 初始化缓存操作
    }
}
