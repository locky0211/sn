package com.efraiser.test.db.service.cache.impl;

import com.efraiser.test.common.constant.RdTableConstants;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.service.cache.CacheInterface;
import com.efraiser.test.db.service.cache.CommonCache;
import com.efraiser.test.db.service.rd.rdtablecolumncontrast.RdTableColumnContrastService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtableinfo.impl.RdTableInfoServiceImpl;
import com.efraiser.test.db.service.rd.rdtablemodelpct.RdTableModelPCTService;
import com.efraiser.test.db.util.RdTableUtil;
import net.sf.ehcache.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RdTableModelCache implements CacheInterface {

	private Logger logger = LoggerFactory.getLogger(RdTableModelCache.class);


	@Autowired
	private RdTableInfoService rdTableInfoService;

	@Autowired
	private RdTableModelPCTService rdTableModelPCTService;
	@Autowired
	private RdTableColumnContrastService rdTableColumnContrastService;

	/*
	 * 用于初始化查询报表html元素
	 */
	@Override
	public List<Element> init() {
		List<Element> elements = new ArrayList<Element>();

		RdTableInfoServiceImpl rdTableInfoServiceImpl = (RdTableInfoServiceImpl)rdTableInfoService;
		List<RdTableInfo> tInfos = rdTableInfoServiceImpl.query(null, null);

		for (RdTableInfo tableInfo : tInfos) {
			String tableId = tableInfo.getTableId();
			// tableInfo对象放入缓存
			elements.add(new Element(RdTableConstants.RD_TABLE_CACHE_KEY + tableId, tableInfo));
			// 将tableInfo的tableInfo的tabCode+versionNo:tableId放入缓存
			elements.add(new Element(RdTableConstants.RD_TABLE_TV_CACHE_KEY + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo(), tableId));
			// 加载百分比单元格集合
			List<String> tmPctList = rdTableModelPCTService.getRdTableModelPctList(tableId);
			elements.add(new Element(RdTableConstants.RD_TABLE_PCT_CACHE_KEY + tableId, tmPctList));

			// 加载Model SQL相关信息
			try {
				doBulidTableModelSqlString(tableInfo, elements);
			} catch (Exception e) {
				e.printStackTrace();
				logger.error("初始化{}的报表查询语句时,发生异常!!", tableInfo.getTabName());
			}

			// 模板行列对照关系集合
			// map key = 第一部分_0(A,B,C..) value=1(excel列号)
			elements.add(new Element(RdTableConstants.RD_TABLE_CN_CACHE_KEY + tableId, rdTableColumnContrastService.getColNumMap(tableId)));
			// map key = 第一部分_1(excel行号) value=0(A,B,C..)
			elements.add(new Element(RdTableConstants.RD_TABLE_FI_CACHE_KEY + tableId, rdTableColumnContrastService.getFileNumMap(tableId)));

		}

		return elements;
	}

	/**
	 * 缓存获取tableInfo对象
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tableId
	 * @return
	 */
	public static RdTableInfo getRdTableInfo(String tableId) {
		return CommonCache.getInstance().get(RdTableConstants.RD_TABLE_CACHE_KEY + tableId, RdTableInfo.class);
	}

	/**
	 * 根据tabCode+versionNo获取tableId对象
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @return
	 */
	public static String getRdTableId(String tabCode, String versionNo) {
		return CommonCache.getInstance().get(RdTableConstants.RD_TABLE_TV_CACHE_KEY + tabCode + "_" + versionNo, String.class);
	}

	/**
	 * 获取行列对照关系(value为列号)
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tableId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, String> getModelColumnContrastColNum(String tableId) {
		return (Map<String, String>) CommonCache.getInstance().get(RdTableConstants.RD_TABLE_CN_CACHE_KEY + tableId);
	}

	/**
	 * 获取行列对照关系(value为模板编号)
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tableId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, String> getModelColumnContrastFileNum(String tableId) {
		return (Map<String, String>) CommonCache.getInstance().get(RdTableConstants.RD_TABLE_FI_CACHE_KEY + tableId);
	}

	/**
	 * 获取查询语句SQL
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tableId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static List<String> getModelPCTList(String tableId) {
		return (List<String>) CommonCache.getInstance().get(RdTableConstants.RD_TABLE_PCT_CACHE_KEY + tableId);
	}

	/**
	 * 获取查询语句SQL
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tableId
	 * @return
	 */
	public static String getModelQuerySqlStr(String tableId) {
		return CommonCache.getInstance().get(RdTableConstants.QUERY_SQL_KEY + tableId, String.class);
	}

	/**
	 * 获取查询数据列语句SQL
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tableId
	 * @return
	 */
	public static String getModelQueryValueSqlStr(String tableId) {
		return CommonCache.getInstance().get(RdTableConstants.QUERY_VALUE_SQL_KEY + tableId, String.class);
	}

	/**
	 * 根据配置信息,创建模板相关SQL语句<br>
	 * 查询语句:第一部分SQL;第二部分SQL;第三部分SQL
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param rInfo
	 * @param elements
	 */
	private void doBulidTableModelSqlString(RdTableInfo rInfo, List<Element> elements) {
		String[] rowS = rInfo.getRowInfo().split(RdTableConstants.STR_RC_SPLIT);
		String[] colS = rInfo.getColInfo().split(RdTableConstants.STR_RC_SPLIT);
		String tableId = rInfo.getTableId();
		StringBuffer querySqlStr = new StringBuffer();
		StringBuffer queryValueSqlStr = new StringBuffer();// 单独只查询数据列SQL
		// 多部分表头
		for (int y = 0; y < rowS.length; y++) {
			String[] rowInfos = rowS[y].split(RdTableConstants.STR_SPLIT);
			String[] colInfos = colS[y].split(RdTableConstants.STR_SPLIT);
			List<String> nameColsList = null;
			// 加载设置的字符列和字符列
			if (colInfos.length > 2) {
				nameColsList = StrUtil.convertToList(colInfos[2], RdTableConstants.STR_DOT_SPLIT);
			}

			List<Integer> valueCols = new ArrayList<Integer>();
			List<Integer> nameCols = new ArrayList<Integer>();

			// 循环列
			for (int j = Integer.valueOf(colInfos[1]); j <= Integer.valueOf(colInfos[0]); j++) {
				// 如果是字符列
				if (nameColsList != null && nameColsList.contains(String.valueOf(j))) {
					nameCols.add(j);
				} else {
					valueCols.add(j);
				}
			}
			if (valueCols.size() > 0) {
				valueCols = rdTableColumnContrastService.getColNames(tableId, y + 1, valueCols);
			}
			if (nameCols.size() > 0) {
				nameCols = rdTableColumnContrastService.getColNames(tableId, y + 1, nameCols);
			}
			StringBuffer sqlParamBuffer = new StringBuffer();
			for (Integer vc : valueCols) {
				sqlParamBuffer.append("," + RdTableUtil.getFieldName("VALUE_", vc));
			}
			if (sqlParamBuffer.length()<=0) {
				logger.debug(rInfo.getTabName()+"第"+(y+1)+"部分数值列出现异常");
				continue;
			}
			// 单独只查询数据列SQL
			queryValueSqlStr.append(";SELECT REPORT_ROW_NUM," + sqlParamBuffer.substring(1) + " FROM RD_REPORT_DATA_$reportDate WHERE REPORT_ID=@reportId AND REPORT_ROW_NUM BETWEEN " + rowInfos[2]
					+ " AND " + rowInfos[1]);
			for (Integer nc : nameCols) {
				sqlParamBuffer.append("," + RdTableUtil.getFieldName("NAME_", nc));
			}
			if (sqlParamBuffer.length()<=0) {
				logger.debug(rInfo.getTabName()+"第"+(y+1)+"部分字符列出现异常");
				continue;
			}
			querySqlStr.append(";SELECT REPORT_ROW_NUM," + sqlParamBuffer.substring(1) + " FROM RD_REPORT_DATA_$reportDate WHERE REPORT_ID=@reportId AND REPORT_ROW_NUM BETWEEN " + rowInfos[2]
					+ " AND " + rowInfos[1]);
		}
		// 缓存添加查询SQL语句
		elements.add(new Element(RdTableConstants.QUERY_SQL_KEY + tableId, querySqlStr.substring(1)));
		// 缓存添加查询数据列SQL语句
		elements.add(new Element(RdTableConstants.QUERY_VALUE_SQL_KEY + tableId, queryValueSqlStr.substring(1)));
	}
}
