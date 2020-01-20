package com.efraiser.test.db.service.cache.impl;

import com.efraiser.test.common.constant.SysConstants;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.cache.CacheInterface;
import com.efraiser.test.db.service.cache.CommonCache;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysbmgl.impl.SysBmglServiceImpl;
import net.sf.ehcache.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 机构信息缓存管理
 * 
 *
 */
@Service
public class SysBmglCache implements CacheInterface {
	private   Logger log = LoggerFactory.getLogger(SysBmglCache.class);

	@Autowired
	private SysBmglService sysBmglService;

	@Override
	public List<Element> init() {

		SysBmglServiceImpl sysBmglServiceImpl = (SysBmglServiceImpl)sysBmglService;

		List<SysBmgl> bmgls = sysBmglServiceImpl.query(null, null);
		List<Element> elements = new ArrayList<Element>();
		for (SysBmgl bmgl : bmgls) {
			// 部门信息bmCode:bmName放入缓存
			elements.add(new Element(SysConstants.SYS_BMGL_CACHE_KEY + bmgl.getBmCode(), bmgl));
			elements.add(new Element(SysConstants.SYS_BMGL_CACHE_NAME_KEY + bmgl.getBmCode(), bmgl.getBmName()));
		}
		log.info("缓存加载机构信息成功!!");
		return elements;
	}

	/**
	 * 获取部门管理信息对象
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param bmCode
	 * @return
	 */
	public static SysBmgl getBmglInfo(String bmCode) {
		return CommonCache.getInstance().get(SysConstants.SYS_BMGL_CACHE_KEY + bmCode, SysBmgl.class);
	}

	/**
	 * 根据部门编号,获取部门名称
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param bmCode
	 * @return
	 */
	public static String getBmName(String bmCode) {
		Object obj = CommonCache.getInstance().get(SysConstants.SYS_BMGL_CACHE_NAME_KEY + bmCode);
		if (obj == null) {
			return "";
		}
		return String.valueOf(obj);
	}

}
