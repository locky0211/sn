package com.efraiser.test.db.service.cache;

import com.efraiser.test.common.constant.SystemConstants;
import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheManager;

public class CacheFactory {
	private static CacheFactory factory = null;
	private static CacheManager cacheManager = null;

	private CacheFactory() {

		String path  = CacheFactory.class.getClassLoader().getResource("").getPath();
		cacheManager = CacheManager.create(path+ "/ehcache.xml");
	}

	private static Object lock = new Object();

	public static CacheFactory create() {
		if (factory == null) {
			synchronized (lock) {
				if (factory == null) {
					factory = new CacheFactory();
				}
			}
		}
		return factory;
	}

	public Cache getCache(String name) {
		return cacheManager.getCache(name);
	}
}
