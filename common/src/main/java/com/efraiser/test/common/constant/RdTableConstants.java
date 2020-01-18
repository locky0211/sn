package com.efraiser.test.common.constant;

public class RdTableConstants {

	public static String SYS_FLAG_FS = "1";// 金融统计系统标志
	public static String SYS_FLAG_OFR = "2";// 非现场监管系统标志

	public static String STR_SPLIT = "#"; // 系统中用于字符串之间的分隔符
	public static String STR_DOT_SPLIT = ",";// 系统中用于字符串之间的二级分隔符
	public static String STR_T_SPLIT = "&";// 系统中用于字符串分割的三级分隔符
	public static String STR_RC_SPLIT = "@";// 行列信息之间分隔符、校验公式里报表代码之间分隔符
	public static String STR_CONN = "_";// 字符串连接符
	public static String STR_CONN_2 = "$";// 字符串连接符（用于校验公式中上期指标表示时）
	public static String STR_CONN_3 = "@";// 字符串连接符（用于校验公式中年初或金融统计年结转指标表示时）
	public static String STR_CONN_4 = "~";// 字符串连接符（用于校验公式去年同期初指标表示时）
	public static String STR_CONN_5 = "^";// 字符串连接符（用于校验公式中同期补报表示时）
	public static String KEY_WORDS = "ROUND,IF,ELSE,CEIL,SUM,MAX,MIN,ABS,OR,AND,SUMIF,COUNTIF";// 校验公式中包含的数学函数
	public static String DIFF_VALUE0 = "";// 允许误差。像校验公式里if,sumif，countif内的判断时使用的误差不能使用数据表里的允许偏差值

	public static String DATA_CELL = "LD";
	public static String STRING_CELL = "LS";
	public static String PARAM_NUM_CELL = "LPN";
	public static String PARAM_STR_CELL = "LPS";
	public static String INT_CELL = "LN";
	public static String END_CELL = "END";

	public static String NO_DATE_HTML = "#NODATEHTML#";
	public static String TM_VALUE = "#VALUE#";
	public static String BJ_SPAN = "#BJ_SPAN#";

	public static String DATA_TYPE_NORMAL = "1";// 正常值
	public static String DATA_TYPE_ORIGINAL = "0";// 原始值

	/**
	 * 缓存键值
	 */
	public static String TABLE_MODEL_HTML_KEY = "RD_TABLE_MODEL_HTML_";
	public static String QUERY_SQL_KEY = "RD_TABLE_QUERY_SQL_";
	public static String QUERY_SQL_PARAM_KEY = "RD_TABLE_QUERY_PARAM_SQL_";
	public static String QUERY_VALUE_SQL_KEY = "RD_TABLE_QUERY_VALUE_SQL_";
	public static String RD_TABLE_PCT_CACHE_KEY = "RD_TABLE_PCT_CACHE_KEY";
	public static String RD_TABLE_CACHE_KEY = "RD_TABLE_CACHE_KEY";
	public static String RD_TABLE_TV_CACHE_KEY = "RD_TABLE_TV_CACHE_KEY";
	public static String RD_TABLE_CN_CACHE_KEY = "RD_TABLE_CN_CACHE_KEY";
	public static String RD_TABLE_FI_CACHE_KEY = "RD_TABLE_FI_CACHE_KEY";
	public static String BF_QUERY_SQL_KEY = "BF_TABLE_QUERY_SQL_";
	public static String BF_QUERY_SQL_PARAM_KEY = "BF_TABLE_QUERY_PARAM_SQL_";
	public static String BF_QUERY_VALUE_SQL_KEY = "BF_TABLE_QUERY_VALUE_SQL_";
	public static String BF_TABLE_PCT_CACHE_KEY = "BF_TABLE_PCT_CACHE_KEY";
	public static String BF_TABLE_CACHE_KEY = "BF_TABLE_CACHE_KEY";
	public static String BF_TABLE_TV_CACHE_KEY = "BF_TABLE_TV_CACHE_KEY";
	public static String BF_TABLE_CN_CACHE_KEY = "BF_TABLE_CN_CACHE_KEY";
	public static String BF_TABLE_FI_CACHE_KEY = "BF_TABLE_FI_CACHE_KEY";
	//大集中结转表
	public static String BF_QUERY_SQL_TEMP_KEY = "BF_TABLE_QUERY_TEMP_SQL_";
	public static String BF_QUERY_SQL_PARAM_TEMP_KEY = "BF_TABLE_QUERY_PARAM_TEMP_SQL_";
	public static String BF_QUERY_VALUE_SQL_TEMP_KEY = "BF_TABLE_QUERY_VALUE_TEMP_SQL_";
	public static String BF_TABLE_PCT_CACHE_TEMP_KEY = "BF_TABLE_PCT_CACHE_TEMP_KEY";
	public static String BF_TABLE_CACHE_TEMP_KEY = "BF_TABLE_CACHE_TEMP_KEY";
	public static String BF_TABLE_TV_CACHE_TEMP_KEY = "BF_TABLE_TV_CACHE_TEMP_KEY";
	public static String BF_TABLE_CN_CACHE_TEMP_KEY = "BF_TABLE_CN_CACHE_TEMP_KEY";
	public static String BF_TABLE_FI_CACHE_TEMP_KEY = "BF_TABLE_FI_CACHE_TEMP_KEY";
	
	public static String DY_TABLE_MODEL_HTML_KEY = "DY_TABLE_MODEL_HTML_";
	public static String DY_QUERY_SQL_KEY = "DY_TABLE_QUERY_SQL_";
	public static String DY_QUERY_SQL_PARAM_KEY = "DY_TABLE_QUERY_PARAM_SQL_";
	public static String DY_QUERY_VALUE_SQL_KEY = "DY_TABLE_QUERY_VALUE_SQL_";
	public static String DY_TABLE_PCT_CACHE_KEY = "DY_TABLE_PCT_CACHE_KEY";
	public static String DY_TABLE_CACHE_KEY = "DY_TABLE_CACHE_KEY";
	public static String DY_TABLE_TV_CACHE_KEY = "DY_TABLE_TV_CACHE_KEY";
	public static String DY_TABLE_CN_CACHE_KEY = "DY_TABLE_CN_CACHE_KEY";
	public static String DY_TABLE_FI_CACHE_KEY = "DY_TABLE_FI_CACHE_KEY";
	public static String TABLE_MODEL_HTML_CHECK_WAVE_KEY = "BF_TABLE_MODEL_HTML_CHECK_WAVE_";
	public static String TABLE_MODEL_JG_HTML_KEY = "RD_TABLE_MODEL_JG_HTML_";
}
