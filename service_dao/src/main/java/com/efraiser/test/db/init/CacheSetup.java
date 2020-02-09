package com.efraiser.test.db.init;


import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.db.model.sys.CacheInfo;
import com.efraiser.test.db.service.sys.cacheinfo.impl.CacheInfoServiceImpl;
import org.nutz.dao.Cnd;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class CacheSetup {
    static Logger logger = LoggerFactory.getLogger(CacheSetup.class);

    private static CacheSetup cacheSetup;

    public CacheSetup() {
        cacheSetup = this;
    }

    public static CacheSetup getInstance() {
        return cacheSetup;
    }

    public void init() {

        CacheInfoServiceImpl cacheInfoDao = (CacheInfoServiceImpl) SpringContextUtil.getBean("cacheInfoServiceImpl");

        List<CacheInfo> cacheInfos = cacheInfoDao.query(Cnd.orderBy().asc("sortNum"), null);
        for (CacheInfo cInfo : cacheInfos) {
            cacheInfoDao.doCacheInit(cInfo);
            logger.info("加载缓存{}..成功!", cInfo.getBeanName());
        }

    }

    public void destroy() {

    }

}
