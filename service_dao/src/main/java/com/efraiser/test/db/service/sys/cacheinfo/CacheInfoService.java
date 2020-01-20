package com.efraiser.test.db.service.sys.cacheinfo;

import com.efraiser.test.db.model.sys.CacheInfo;
import com.efraiser.test.db.service.BaseService;

public interface CacheInfoService<T> extends BaseService  {

    /**
     * 执行某一缓存方法
     *
     * @param cInfo
     * @author efraiser.xiaxiaofeng
     */
     void doCacheInit(CacheInfo cInfo);


     int count(String beanName);
}
