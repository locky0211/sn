package com.efraiser.test.db.service.sys.cacheinfo;

import com.efraiser.test.db.model.sys.CacheInfo;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface CacheInfoService extends BaseService  {


    void doCacheInfoInit( List<String> bl);

    /**
     * 执行某一缓存方法
     *
     * @param cInfo
     * @author efraiser.xiaxiaofeng
     */
     void doCacheInit(CacheInfo cInfo);


     int count(String beanName);


    Object getCacheInfoList(String beanName);


    void addOrUpdateCacheInfo(CacheInfo cInfo);
}
