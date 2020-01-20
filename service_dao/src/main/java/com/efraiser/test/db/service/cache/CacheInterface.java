package com.efraiser.test.db.service.cache;

import net.sf.ehcache.Element;

import java.util.List;

public interface CacheInterface {
	List<Element> init();
}
