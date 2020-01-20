package com.efraiser.test.db.service.cache.impl;

import com.efraiser.test.common.constant.SysConstants;
import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.service.cache.CacheInterface;
import com.efraiser.test.db.service.cache.CommonCache;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import net.sf.ehcache.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 公共字典缓存管理
 * 
 *
 */
@Service
public class SysGgzdCache implements CacheInterface {
	private static final Logger log = LoggerFactory.getLogger(SysGgzdCache.class);

	@Autowired
	private SysGgzdService sysGgzdService;

	@Override
	public List<Element> init() {
		List<String> gIds = sysGgzdService.getGidList();
		List<Element> elements = new ArrayList<Element>();
		for (String gId : gIds) {
			List<SysGgzd> ggzdList = sysGgzdService.getGgzdListByGroupId(gId, false);
			// 对象放入缓存
			elements.add(new Element(SysConstants.SYS_GGZD_CACHE_KEY + gId, ggzdList));
			// 对象分解KEY(KEY+gId+zdValue):zdName
			for (SysGgzd ggzd : ggzdList) {
				elements.add(new Element(SysConstants.SYS_GGZD_CACHE_KEY + gId + ggzd.getZdValue(), ggzd.getZdName()));
			}
		}
		log.info("缓存加载ggzd信息成功!");
		return elements;
	}

	/**
	 * 根据GID获取字典集合
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param gId
	 * @return
	 */
	public static Object getSysGgzdList(String gId) {
		return CommonCache.getInstance().get(SysConstants.SYS_GGZD_CACHE_KEY + gId);
	}

	/**
	 * 获取字典名称
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param gId
	 * @param zdValue
	 * @return
	 */
	public static String getSysGgzdName(String gId, String zdValue) {
		Object obj = CommonCache.getInstance().get(SysConstants.SYS_GGZD_CACHE_KEY + gId + zdValue);
		if (obj == null) {
			return null;
		}
		return String.valueOf(obj);
	}

}
