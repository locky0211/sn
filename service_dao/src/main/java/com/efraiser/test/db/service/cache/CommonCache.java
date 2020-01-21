package com.efraiser.test.db.service.cache;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;
import org.nutz.castor.Castors;
import org.springframework.stereotype.Component;

@Component
public class CommonCache {


	private static CommonCache commonCache;

	private Cache cache;
	private CommonCache() {
		this.cache = CacheFactory.create().getCache("commonCache");
	}


	public static CommonCache getInstance() {
		if(commonCache == null){
			commonCache = new CommonCache();
		}
		return commonCache;
	}

	// 添加被缓存的对象;

	public void put(String key, Object value) {
		cache.put(new Element(key, value));
	}

	// 删除被缓存的对象;

	public void remove(String key) {
		cache.remove(key);
	}

	// 删除所有被缓存的对象;

	public void removeAll() {
		cache.removeAll();
	}

	// 获取被缓存的对象;
	public Object get(String key) {
		Element element = cache.get(key);
		if (element == null) {
			return null;
		} else {
			return element.getObjectValue();
		}

	}

	// 获取被缓存的对象;
	public <T> T get(String key, Class<T> clz) {
		return Castors.me().castTo(this.get(key), clz);
	}

	public void setCache(Cache cache) {
		this.cache = cache;
	}

	public Cache getCache() {
		return cache;
	}

}
