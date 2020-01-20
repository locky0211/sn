package com.efraiser.test.common.util;


import com.efraiser.test.common.util.rd.Arith;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CommUtil {
	
	
	
	/**
	 * 替换sql语句中的日期参数值
	 * 
	 * @param s
	 * @param dates
	 * @return
	 */
	public static String getReplaceDateStr(String sSql, String sDate) {
		sSql = sSql.replace("$数据日期YYYY-MM-DD$", sDate);
		sSql = sSql.replace("$数据日期YYYY-MM$", sDate.substring(0, 7));
		sSql = sSql.replace("$数据日期YYYYMMDD$", sDate.replace("-", ""));
		sSql = sSql.replace("$数据日期YYYYMM$", sDate.replace("-", "").subSequence(0, 6)).trim();
		return sSql;
	}

	/**
	 * 根据系统日期获取报表日期
	 * 
	 * @param sysDate
	 *            系统日期 YYYYMMDD
	 * @return 报表日期
	 */
	public static String getReportDateBySysDate(String sysDate, String tabType) {
		String reportDate = null;
		if (StrUtil.isNull(sysDate)) {
			return reportDate;
		}
		if (!isDateStr(sysDate) || StrUtil.isNull(tabType)) {
			return reportDate;
		}
		if ("70".equals(tabType)) {
			reportDate = sysDate;
		} else if ("50".equals(tabType) && isMonthEnd(sysDate)) {
			reportDate = sysDate.substring(0, 6);
		} else if ("40".equals(tabType) && isSeasonEnd(sysDate)) {
			reportDate = sysDate.substring(0, 6);
		} else if ("80".equals(tabType) && isHalfOfYearEnd(sysDate)) {
			reportDate = sysDate.substring(0, 6);
		} else if ("00".equals(tabType) && isYearEnd(sysDate)) {
			reportDate = sysDate.substring(0, 6);
		}
		return reportDate;
	}

	/**
	 * 根据系统日期获取上期报表日期
	 * 
	 * @param sysDate
	 *            系统日期 YYYYMMDD
	 * @return 报表日期
	 */
	public static String getLastReportDateBySysDate(String sysDate, String tabType) {
		String reportDate = null;
		if (StrUtil.isNull(sysDate)) {
			return reportDate;
		}
		if (!isDateStr(sysDate) || StrUtil.isNull(tabType)) {
			return reportDate;
		}
		if ("70".equals(tabType)) {
			sysDate = CommUtil.add_days(sysDate, -1);
		} else if ("50".equals(tabType)) {
			sysDate = CommUtil.add_months(sysDate, -1);
		} else if ("40".equals(tabType)) {
			sysDate = CommUtil.add_months(sysDate, -3);
		} else if ("80".equals(tabType)) {
			sysDate = CommUtil.add_months(sysDate, -6);
		} else if ("00".equals(tabType)) {
			sysDate = CommUtil.add_months(sysDate, -12);
		}
		reportDate = CommUtil.getReportDateBySysDate(sysDate, tabType);
		return reportDate;
	}

	/**
	 * 根据报表日期获取系统日期
	 * 
	 * @param reportDate
	 *            报表日期
	 * @return 系统日期 YYYYMMDD
	 */
	public static String getSysDateByReportDate(String reportDate) {
		String sysDate = null;
		if (StrUtil.isNull(reportDate)) {
			return sysDate;
		}
		if (reportDate.length() == 6) {// 月、季、半年、年报
			sysDate = reportDate + CommUtil.getMaxDayByYearMonth(reportDate.substring(0, 4), reportDate.substring(4, 6));
		} else if (reportDate.length() == 8) {// 日报或者传过来的本来就是系统日期
			sysDate = reportDate;
		}
		return sysDate;
	}

	/**
	 * 去掉字符串中所有的空格
	 * 
	 * @param str
	 *            字符串
	 * @return
	 */
	public static String trimStr(String str) {
		String newStr = "";
		if (StrUtil.isNotNull(str)) {
			newStr = str.trim().replaceAll(" ", "").replaceAll("　", "");
		}

		return newStr;
	}

	/**
	 * 去掉字符串行尾空格
	 * 
	 * @param str
	 *            字符串
	 * @return
	 */
	public static String rightTrimStr(String str) {
		String newStr = "";
		if (StrUtil.isNotNull(str)) {
			for (int i = str.length() - 1; i >= 0; --i) {
				if (str.charAt(i) == ' ')
					continue;
				if (str.charAt(i) == '　') {
					continue;
				}
				newStr = str.substring(0, i + 1);
				break;
			}
		}
		return newStr;
	}

	/**
	 * 判断使用","连接的字符串组是否包含指定字符串 例如："1，2，3" 包含"1"
	 * 
	 * @param str
	 *            字符串组
	 * @param subStr
	 *            指定字符串
	 * @return
	 */
	public static boolean isContain(String str, String subStr) {
		List<String> list = new ArrayList<String>();

		if (StrUtil.isNotNull(str)) {
			for (String tmp : str.split(",")) {
				list.add(tmp);
			}
		}

		return list.contains(subStr);
	}

	/**
	 * 根据数字转换成对应的字母，并拼接在字符串后 例如：0对应A,28对应AC,128对应DY
	 * 
	 * @param prefix
	 *            字符串
	 * @param seq
	 *            数字
	 * @return 字符串+数字转换的字母
	 */
	public static String getParamName(String prefix, int seq) {
		char c = 'A';

		if (seq < 26) {
			return prefix + (char) (c + seq);
		}
		return prefix + String.valueOf((char) (c + (seq / 26 - 1))) + String.valueOf((char) (c + seq - 26 * (seq / 26)));
	}

	/**
	 * 获取字母对应的数字（最大支持ZZ） 例如:A对应1，AA对应27，ZZ对应702
	 * 
	 * @param ch
	 *            字母
	 * @return 数字
	 */
	public static int getSeq(String ch) {
		for (int i = 0; i < 702; ++i) {
			if (ch.equals(getParamName("", i))) {
				return i + 1;
			}
		}

		return 1;
	}

	/**
	 * 获取字母对应的数字（最大支持ZZ） 例如:A对应0，AA对应26，ZZ对应701
	 * 
	 * @param ch
	 *            字母
	 * @return 数字
	 */
	public static int getSeq2(String ch) {
		for (int i = 0; i < 702; ++i) {
			if (ch.equals(getParamName("", i))) {
				return i;
			}
		}

		return 1;
	}

	/**
	 * 判断字符串是不是数字
	 * 
	 * @param numStr
	 *            数字字符串
	 * @return boolean
	 */
	public static boolean checkIsNum(String numStr) {
		boolean flag = true;
		try {
			Double.parseDouble(numStr);
		} catch (Exception e) {
			flag = false;
		}
		return flag;
	}

	/**
	 * 参数如果=null,则返回0，否则返回obj的double值
	 * 
	 * @param obj
	 * @return obj的double值
	 */
	public static String isZeroOrValue(Object obj) {
		if (obj == null || "null".equals(obj)) {
			return "0.0";
		} else {
			return obj.toString();
		}
	}

	/**
	 * 根据操作符判断操作符两边数值是否满足关系
	 * 
	 * @param leftValue
	 *            左值
	 * @param rightValue
	 *            右值
	 * @param operStr
	 *            操作符
	 * @return boolean
	 */
	public static boolean compareValue(double leftValue, double rightValue, String operStr, String deviationValue) {
		double resultValue = Arith.sub(leftValue, rightValue);
		boolean f = false;
		if ("<".equals(operStr)) {
			if (resultValue < 0.0D)
				f = true;
		} else if (">".equals(operStr)) {
			if (resultValue > 0.0D)
				return true;
		} else if ("=".equals(operStr)) {
			if (resultValue == 0.0D) {
				f = true;
			}
		} else if (">=".equals(operStr)) {
			if (resultValue >= 0.0D)
				f = true;
		} else if ("<=".equals(operStr)) {
			if (resultValue <= 0.0D)
				f = true;
		} else if ((("<>".equals(operStr)) || ("!=".equals(operStr)))) {
			if (resultValue != 0.0D) {
				f = true;
			}

		}
		//为适应吴江需求容忍度满足数值与百分比两种类型
		//必须非空（pisa没有容忍度）
		if(deviationValue!=null){
			if(deviationValue.contains("%")){
				//容忍度为百分比
				if (!f && StrUtil.isNotNull(deviationValue)) {
					double chazhi = Math.abs(Arith.sub(leftValue, rightValue));
					double houzhi = Math.abs(rightValue);
					double baifenbi = Arith.div(chazhi, houzhi);
					double qubaifenhao = Double.valueOf(deviationValue.substring(0, deviationValue.length()-1));
					double rongrendu = Arith.mul(qubaifenhao, 0.01);
					if (baifenbi <= rongrendu) {
						f = true;
					}
				}
			}else{
				//容忍度为数值	
				if (!f && StrUtil.isNotNull(deviationValue)) {
					if (Math.abs(resultValue) <= Double.valueOf(deviationValue)) {
						f = true;
					}
				}
			}
		}
		return f;
	}

	/**
	 * 获取公式中的关系操作符(>=,<=,>,<,=,!=)
	 * 
	 * @param relation
	 * @return
	 */
	public static String getOperStr(String relation) {
		if ((relation != null) && (relation.length() > 0)) {
			if ((relation.contains(">=")) || (relation.contains("≥")))
				return ">=";
			if ((relation.contains("<=")) || (relation.contains("≤")))
				return "<=";
			if ((relation.contains("<>")) || (relation.contains("!=")))
				return "!=";
			if (relation.contains(">"))
				return ">";
			if (relation.contains("<"))
				return "<";
			if ((relation.contains("=")) || (relation.contains("==")))
				return "=";

		}

		return "";
	}

	/**
	 * 将字符串格式为"数字+字母"分组，例如[AB12]分成[12,AB]
	 * 
	 * @param charNumStr
	 * @return
	 */
	public static String[] splitCharNumStr(String charNumStr) {
		String[] splitArray = new String[2];
		int i = 0;
		if ((charNumStr != null) && (!"".equals(charNumStr))) {
			String[] arr = charNumStr.split("[a-zA-Z]");
			if (arr.length >= 2) {
				for (i = 0; i < arr.length; i++) {
					if ((arr[i] != null) && (!"".equals(arr[i]))) {
						break;
					}
				}
				splitArray[0] = arr[i];
				splitArray[1] = charNumStr.replace(arr[i], "");
			} else {
				return null;
			}
		}
		return splitArray;
	}

	/**
	 * 获取指定字符或者字符串s在字符c中出现的次数
	 * 
	 * @param s
	 * @param c
	 * @return
	 */
	public static int getNumOfChar(String s, String c) {
		int num = 0;
		if (s != null) {
			num = s.length() - s.replace(c, "").length();
		}
		return num;
	}

	/**
	 * 
	 * 检查字符串数字是不是整数
	 * 
	 * @param num
	 * @param type
	 *            "0+":非负整数 "+":正整数 "-0":非正整数 "-":负整数 "":整数
	 * @return
	 */
	public static boolean IsIntNum(String num, String type) {
		String eL = "";
		if (type.equals("0+"))
			eL = "^\\d+$";// 非负整数(正整数+0)
		else if (type.equals("+"))
			eL = "^[0-9]*[1-9][0-9]*$";// 正整数
		else if (type.equals("-0"))
			eL = "^((-\\d+)|(0+))$";// 非正整数（负整数+0）
		else if (type.equals("-"))
			eL = "^-[0-9]*[1-9][0-9]*$";// 负整数
		else
			eL = "^-?\\d+$";// 整数
		Pattern p = Pattern.compile(eL);
		Matcher m = p.matcher(num);
		boolean b = m.matches();
		return b;
	}

	/**
	 * 检查字符串数字是不是浮点数
	 * 
	 * @param num
	 * @param type
	 *            "0+":非负浮点数 "+":正浮点数 "-0":非正浮点数 "-":负浮点数 "":浮点数
	 * @return
	 */
	public static boolean IsDoubleNum(String num, String type) {
		String eL = "";
		if (type.equals("0+"))
			eL = "^\\d+(\\.\\d+)?$";// 非负浮点数
		else if (type.equals("+"))
			eL = "^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$";// 正浮点数
		else if (type.equals("-0"))
			eL = "^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$";// 非正浮点数
		else if (type.equals("-"))
			eL = "^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$";// 负浮点数
		else
			eL = "^(-?\\d+)(\\.\\d+)?$";// 浮点数
		Pattern p = Pattern.compile(eL);
		Matcher m = p.matcher(num);
		boolean b = m.matches();
		return b;
	}

	public static boolean isDateStr(String date) {
		if (date == null) {
			return false;
		}
		String eL = "^((\\d{2}(([02468][048])|([13579][26]))[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])))))|(\\d{2}(([02468][1235679])|([13579][01345789]))[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\\s(((0?[0-9])|([1][0-9])|([2][0-3]))\\:([0-5]?[0-9])((\\s)|(\\:([0-5]?[0-9])))))?$";
		Pattern p = Pattern.compile(eL);
		Matcher m = p.matcher(date);
		boolean b = m.matches();
		return b;
	}

	/**
	 * 获取季初日期
	 * 
	 * @param date
	 *            给定日期 YYYY-MM-DD格式 或者 YYYYMMDD格式
	 * @return 季初日期 YYYY-MM-DD格式
	 */
	public static String getEarlySeason(String date) {
		if (isDateStr(date)) {
			System.out.println(date + "格式不准确，无法获取季初日期");
			return null;
		}
		String dateString = null;
		int x = Integer.valueOf(date.substring(0, 4));
		int y = Integer.valueOf(date.substring(4, 6));
		if (y >= 1 && y <= 3) {
			dateString = x + "-" + "01" + "-" + "01";
		} else if (y >= 4 && y <= 6) {
			dateString = x + "-" + "04" + "-" + "01";
		} else if (y >= 7 && y <= 9) {
			dateString = x + "-" + "07" + "-" + "01";
		} else if (y >= 10 && y <= 12) {
			dateString = x + "-" + "10" + "-" + "01";
		} else {
			System.out.println(date + "格式不准确，无法获取季初日期");
		}
		return dateString;
	}

	/**
	 * 给定日期,实现算加几天或者减几天后的日期
	 * 
	 * @param sysdate
	 *            目前只支持yyyymmdd,yyyy-mm-dd,yyyy/mm/dd格式
	 * @param adddays
	 *            正数为加几天,负数为减几天
	 * @return
	 */
	public static String add_days(String sysdate, int adddays) {
		String nextday = "";
		SimpleDateFormat f = new SimpleDateFormat("yyyyMMdd");
		Date d12 = new Date();
		if (sysdate != null && (sysdate.trim().length() == 8 || sysdate.trim().length() == 10)) {
			sysdate = sysdate.trim();
			if (sysdate.length() - sysdate.replace("-", "").length() == 2) {
				f = new SimpleDateFormat("yyyy-MM-dd");
			} else if (sysdate.length() - sysdate.replace("/", "").length() == 2) {
				f = new SimpleDateFormat("yyyy/MM/dd");
			}
			try {
				d12 = new Date(f.parse(sysdate).getTime() + adddays * 24 * 3600 * 1000);
			} catch (Exception e) {
				e.printStackTrace();
			}
			nextday = f.format(d12);
		}

		return nextday;
	}

	/**
	 * 将一个日期上加上一指定的月份数，当date1为月末时，这里需要特殊处理(月末日期增加月份数，对应的也是月末)
	 * 
	 * @param date1
	 *            日期 （格式YYYYMMDD）
	 * @param num
	 *            整数（可以为负数）
	 * @return
	 */
	public static String add_months(String date1, int num) {
		if (date1 == null) {
			return null;
		}
		String sadd_Date = null;
		int y1 = 0, m1 = 0, d1 = 0, num1 = 0;
		String chDate = date1;
		int idate = Integer.parseInt(date1);
		int add_Date = 0;

		m1 = 0;
		num1 = num;
		y1 = idate / 10000;
		m1 = (idate / 100) % 100;

		d1 = idate % 100;
		num1 += m1;
		y1 = y1 + num1 / 12;
		m1 = num1 % 12;

		if (m1 == 0) {
			m1 = 12;
			y1--;
		} else if (m1 < 0) {
			m1 = m1 + 12;
			y1--;
		}
		if (m1 == 2) {
			if ((y1 % 4 == 0 && y1 % 100 != 0) || (y1 % 400 == 0)) {
				if (d1 > 29)
					d1 = 29;
			} else {
				if (d1 > 28)
					d1 = 28;
			}
		} else if ((m1 == 4) || (m1 == 6) || (m1 == 9) || (m1 == 11)) {
			if (d1 > 30)
				d1 = 30;
		}

		if (isMonthEnd(chDate)) {
			if (m1 == 2) {
				if ((y1 % 4 == 0 && y1 % 100 != 0) || (y1 % 400 == 0)) {
					d1 = 29;
				} else {
					d1 = 28;
				}
			} else if ((m1 == 4) || (m1 == 6) || (m1 == 9) || (m1 == 11)) {
				d1 = 30;
			} else if (m1 == 1 || m1 == 3 || m1 == 5 || m1 == 7 || m1 == 8 || m1 == 10 || m1 == 12) {
				d1 = 31;
			}
		}
		add_Date = y1 * 10000 + m1 * 100 + d1;
		sadd_Date = add_Date + "";
		return sadd_Date;
	}

	/**
	 * 判断日期是不是月末
	 * 
	 * @param sysdate
	 *            日期 (格式：YYYYMMDD或者YYYY-MM-DD)
	 * @return
	 */
	public static boolean isMonthEnd(String sysdate) {
		if (sysdate == null || "".equals(sysdate)) {
			return false;
		}
		if (!isDateStr(sysdate)) {
			return false;
		}
		String sDate = sysdate.replace("-", "");
		int imonth1 = 0;
		int iday1 = 0;
		int iYear = 0;
		int ymd = 0;
		ymd = Integer.parseInt(sDate);
		for (int i = 0; i < sDate.length(); i++)
			if (sDate.charAt(i) < '0' || sDate.charAt(i) > '9') {
				System.out.println("[" + sDate + "]日期字符串包含非数字[" + sDate.charAt(i) + "]");
				return false;
			}
		if (ymd < 10000101 || ymd > 99991231) {
			System.out.println("只处理[10000101,99991231]范围内的日期，[" + sDate + "]不符合\n");
			return false;
		}

		iYear = Integer.parseInt(sDate.substring(0, 4));
		imonth1 = Integer.parseInt(sDate.substring(4, 6));
		iday1 = Integer.parseInt(sDate.substring(6, 8));

		if ((imonth1 == 1 || imonth1 == 3 || imonth1 == 5 || imonth1 == 7 || imonth1 == 8 || imonth1 == 10 || imonth1 == 12) && iday1 == 31) {
		} else if ((imonth1 == 4 || imonth1 == 6 || imonth1 == 9 || imonth1 == 11) && iday1 == 30) {
		} else if (imonth1 == 2) {
			if (((iYear % 4 == 0 && iYear % 100 != 0) || iYear % 400 == 0)) {
				if (iday1 != 29) {
					return false;
				}
			} else {
				if (iday1 != 28) {
					return false;
				}
			}
		} else {
			return false;
		}

		return true;
	}

	/**
	 * 判断日期是不是季末
	 * 
	 * @param sysdate
	 *            日期 (格式：YYYYMMDD或者YYYY-MM-DD)
	 * @return
	 */
	public static boolean isSeasonEnd(String sysdate) {
		boolean flag = false;
		if (!isDateStr(sysdate)) {
			return false;
		}
		String sDate = sysdate.replace("-", "");
		if ((sDate.endsWith("0331") || sDate.endsWith("0630") || sDate.endsWith("0930") || sDate.endsWith("1231"))) {
			flag = true;
		}
		return flag;
	}

	/**
	 * 判断日期是不是半年末
	 * 
	 * @param sysdate
	 *            日期 (格式：YYYYMMDD或者YYYY-MM-DD)
	 * @return
	 */
	public static boolean isHalfOfYearEnd(String sysdate) {
		boolean flag = false;
		if (!isDateStr(sysdate)) {
			return false;
		}
		String sDate = sysdate.replace("-", "");
		if ((sDate.endsWith("0630") || sDate.endsWith("1231"))) {
			flag = true;
		}
		return flag;
	}

	/**
	 * 判断日期是不是年末
	 * 
	 * @param sysdate
	 *            日期 (格式：YYYYMMDD或者YYYY-MM-DD)
	 * @return
	 */
	public static boolean isYearEnd(String sysdate) {
		boolean flag = false;
		if (!isDateStr(sysdate)) {
			return false;
		}
		String sDate = sysdate.replace("-", "");
		if (sDate.endsWith("1231")) {
			flag = true;
		}
		return flag;
	}

	/**
	 * 根据计算符号分解机构来源公式
	 * 
	 * @param brnoFil
	 *            机构来源公式（格式A+B-C）
	 * @param oper
	 *            计算符号(+或者-)
	 * @return
	 */
	public static String analysis(String brnoFil, String oper) {
		String returnBrnoStr = "";
		String lastOperStr = "";
		String tmpBrnoStr = "";
		String operStr = "+-";
		if (("".equals(oper)) || (oper.length() > 1)) {
			oper = "+";
		}
		brnoFil = brnoFil.concat("+");
		if ((brnoFil != null) && (brnoFil.length() > 0)) {
			for (int i = 0; i < brnoFil.length(); i++) {
				if (operStr.contains(String.valueOf(brnoFil.charAt(i)))) {
					if ("".equals(tmpBrnoStr)) {
						lastOperStr = String.valueOf(brnoFil.charAt(i));
					} else {
						if ("+".equals(oper)) {
							if (("".equals(lastOperStr)) || ("+".equals(lastOperStr))) {
								returnBrnoStr =

								returnBrnoStr + ("".equals(returnBrnoStr) ? "" : ",") + "'" + tmpBrnoStr + "'";
							}
						} else if ("-".equals(lastOperStr)) {
							returnBrnoStr =

							returnBrnoStr + ("".equals(returnBrnoStr) ? "" : ",") + "'" + tmpBrnoStr + "'";
						}
						tmpBrnoStr = "";
						lastOperStr = String.valueOf(brnoFil.charAt(i));
					}
				} else {
					tmpBrnoStr = tmpBrnoStr + String.valueOf(brnoFil.charAt(i));
				}
			}
		}
		return returnBrnoStr;
	}

	/**
	 * 写日志方法。将字符串content写到指定路径文件filePath内
	 * 
	 * @param filePath
	 * @param content
	 * @param flag
	 * @return
	 */
	public static boolean writeFileln(String filePath, String content, boolean flag) {
		boolean writeFlag = true;
		try {
			String s = "[" + getStringTime() + "]" + content;
			System.out.println(s);
			if (filePath != null && !filePath.trim().equals("")) {
				File file = createFile(filePath);
				FileWriter fw = new FileWriter(file, flag);
				fw.write(s);
				fw.write("\r\n");
				fw.flush();
				fw.close();
			}
		} catch (IOException e) {
			e.printStackTrace();
			writeFlag = false;
		}
		return writeFlag;
	}

	/**
	 * 创建指定路径文件
	 * 
	 * @param filePath
	 * @return
	 */
	public static File createFile(String filePath) {
		File file = null;

		if ((filePath != null) && (!"".equals(filePath))) {
			file = new File(filePath);

			if (!file.getParentFile().exists()) {
				file.getParentFile().mkdirs();
			}

			if (!file.exists()) {
				try {
					file.createNewFile();
				} catch (IOException e) {
					System.out.println("创建文件" + filePath + "出错！");
					e.printStackTrace();
				}
			}

		}
		return file;
	}

	/**
	 * 获取当前系统时间,日期格式yyyy-MM-dd HH:mm:ss
	 * 
	 * @return
	 */
	public static String getStringTime() {
		Date currentTime = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String dateString = formatter.format(currentTime);
		return dateString;
	}

	/**
	 * 获取当前系统时间,日期格式yyyyMMddHHmmss
	 * 
	 * @return
	 */
	public static String getStringTim() {
		Date currentTime = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
		String dateString = formatter.format(currentTime);
		return dateString;
	}

	/**
	 * 判断是不是数值类型的类
	 * 
	 * @param parm
	 * @return
	 */
	public static boolean isNumParm(String parm) {
		boolean b = false;
		// 暂时想到这几个类
		Map<String, String> numMap = new HashMap<String, String>();
		numMap.put("java.math.BigDecimal", "1");
		numMap.put("java.math.BigInteger", "1");
		numMap.put("java.lang.Integer", "1");
		numMap.put("java.lang.Double", "1");
		numMap.put("java.lang.Float", "1");
		numMap.put("java.lang.Long", "1");
		numMap.put("java.lang.Number", "1");
		numMap.put("java.lang.Byte", "1");
		numMap.put("java.lang.Short", "1");

		if ("1".equals(numMap.get(parm))) {
			b = true;
		}
		return b;
	}

	/**
	 * 根据年月获取当月最大天数
	 * 
	 * @param year
	 * @param month
	 * @return
	 */
	public static int getMaxDayByYearMonth(int year, int month) {
		int maxDay = 0;
		int day = 1;
		Calendar calendar = Calendar.getInstance();
		calendar.set(year, month - 1, day);
		maxDay = calendar.getActualMaximum(Calendar.DATE);
		return maxDay;
	}

	/**
	 * 根据年月获取当月最大天数
	 * 
	 * @param year
	 * @param month
	 * @return
	 */
	public static int getMaxDayByYearMonth(String yearStr, String monthStr) {
		int maxDay = 0;
		int day = 1;
		try {
			int year = Integer.parseInt(yearStr);
			int month = Integer.parseInt(monthStr);
			Calendar calendar = Calendar.getInstance();
			calendar.set(year, month - 1, day);
			maxDay = calendar.getActualMaximum(Calendar.DATE);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return maxDay;
	}

	@SuppressWarnings("rawtypes")
	public static Object getValue(Object obj, String methodStr) {
		String reStr = "";
		try {
			Class<?> c = Class.forName(obj.getClass().getName());

			Method m = c.getMethod(methodStr, new Class[0]);
			if ("class java.lang.String".equals(m.getGenericReturnType().toString())) {
				reStr = String.valueOf(m.invoke(obj, new Object[0]));
				return (reStr == null) || (reStr == "null") ? "" : reStr;
			}
			if ("class [Ljava.lang.String;".equals(m.getGenericReturnType().toString())) {
				return (String[]) m.invoke(obj, new Object[0]);
			}
			if ("double".equals(m.getGenericReturnType().toString())) {
				if ((m.invoke(obj, new Object[0]) == null) || ("null".equals(m.invoke(obj, new Object[0])))) {
					return "null";
				}
				return Double.valueOf(String.valueOf(m.invoke(obj, new Object[0])));
			}
			if ("class java.lang.Double".equals(m.getGenericReturnType().toString())) {
				if ((m.invoke(obj, new Object[0]) == null) || ("null".equals(m.invoke(obj, new Object[0])))) {
					return "null";
				}
				return Double.valueOf(Double.parseDouble(String.valueOf(m.invoke(obj, new Object[0]))));
			}
			if ("java.util.Map<java.lang.String, java.lang.String>".equals(m.getGenericReturnType().toString())) {
				if ((m.invoke(obj, new Object[0]) == null) || ("null".equals(m.invoke(obj, new Object[0])))) {
					return null;
				}
				return (Map) m.invoke(obj, new Object[0]);
			}
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
		return null;
	}

	@SuppressWarnings("rawtypes")
	public static void setValue(Object obj, String methodStr, String value) {
		try {
			Class<?> c = Class.forName(obj.getClass().getName());
			Class[] types = new Class[1];
			types[0] = Class.forName("java.lang.String");

			Method m = c.getMethod(methodStr, types);
			m.invoke(obj, new Object[] { value });
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
	}

	@SuppressWarnings("rawtypes")
	public static void setMValue(Object obj, String methodStr, Map<String, String> value) {
		try {
			Class<?> c = Class.forName(obj.getClass().getName());
			Class[] types = new Class[1];
			types[0] = Class.forName("java.util.Map");

			Method m = c.getMethod(methodStr, types);
			m.invoke(obj, new Object[] { value });
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
	}

	@SuppressWarnings("rawtypes")
	public static void setdValue(Object obj, String methodStr, String value) {
		try {
			Class<?> c = Class.forName(obj.getClass().getName());
			Class[] types = new Class[1];
			types[0] = Class.forName("java.lang.Double");

			Method m = c.getMethod(methodStr, types);
			if ((value == null) || ("null".equals(value))) {
				value = "0";
			}
			m.invoke(obj, new Object[] { Double.valueOf(Double.parseDouble(value)) });
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
	}

	// 测试
	public static void main(String[] args) {
		String str = "0.000004";
		String format_str = "0.00";
		int length = str.substring(str.indexOf(".") + 1).length();
		for (int i = 0; i < length; i++) {
			format_str += "0";
		}
		DecimalFormat df = new DecimalFormat(format_str);
		BigDecimal reBigDecimal=new BigDecimal(str);
		reBigDecimal.setScale(2,   BigDecimal.ROUND_HALF_DOWN);
		System.out.println(df.format(Double.parseDouble(str)*100000));
		System.out.println(Double.parseDouble(df.format(Double.parseDouble(str))));
	}
}
