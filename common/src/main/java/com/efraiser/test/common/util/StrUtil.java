package com.efraiser.test.common.util;


import com.efraiser.test.common.util.nutz.Strings;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 字符串辅助类
 * 
 */
public class StrUtil extends Strings {

	public static boolean isNull(String str) {
		if (str == null || str.trim().length() == 0 || "null".equals(str)) {
			return true;
		} else {
			return false;
		}
	}

	public static boolean isNotNull(String str) {
		if (str == null || str.trim().length() == 0 || "null".equals(str) || "undefined".equals(str)) {
			return false;
		} else {
			return true;
		}
	}

	public static String parseNull(String str) {
		return str != null ? str.trim() : "";
	}

	public static String trim(String str) {
		return str != null ? str.trim() : null;
	}

	public static String rightTrimStr(String str) {
		String newStr = "";
		if (str != null) {
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

	public static String encodeUTF8(String s) {
		String str = "";
		try {
			str = new String(s.getBytes("ISO8859-1"), "UTF-8");
		} catch (Exception e) {
			return s;
		}
		return str;
	}

	public static String encode(String s, String encode) {
		String str = "";
		try {
			str = new String(s.getBytes("ISO8859-1"), encode);
		} catch (Exception e) {
			return s;
		}
		return str;
	}

	public static String moneyFormat(double d) {
		try {
			return (new DecimalFormat("###,##0.00")).format(d);
		} catch (Exception e) {
			return "0.00";
		}
	}

	/**
	 * 格式化数字
	 * 
	 * @param 目标数字
	 * @return 格式化结果
	 */
	public static String getFormateNumber(int num, String f) {
		return new DecimalFormat(f).format(num);
	}

	/**
	 * 给字符串加上单引号0001,0002,0003变成'0001','0002','0003'
	 * 
	 * @param str
	 * @return
	 */
	public static String convertQuoMarksSQL(String str) {
		String result = "";
		if (str == null) {
			return str;
		} else if (str.indexOf("'") != -1) {
			return str;
		} else if (str.indexOf(",") == -1) {
			return "'" + str.trim() + "'";
		} else {
			String[] strArray = str.split(",");
			for (int i = 0; i < strArray.length; i++) {
				result += ",'" + strArray[i].trim() + "'";
			}
			return result.substring(1);
		}
	}

	/**
	 * 把list变成'0001','0002','0003'
	 * 
	 * @param list
	 * @param separator
	 *            分隔符，默认为逗号
	 * @return
	 */
	public static String convertJoin(List<String> list, String separator) {
		String result = "";
		if (list == null || list.size() == 0) {
			return "''";
		}
		if (separator == null) {
			separator = ",";
		}
		for (String str : list) {
			result += (separator + "'" + str + "'");
		}
		return result.substring(1);
	}

	/**
	 * 把list变成0001,0002,0003
	 * 
	 * @param list
	 * @param separator
	 *            分隔符，默认为逗号
	 * @return
	 */
	public static String convertJoinInteger(List<Integer> list, String separator) {
		String result = "";
		if (list == null || list.size() == 0) {
			return "''";
		}
		if (separator == null) {
			separator = ",";
		}
		for (Integer str : list) {
			result += (separator + str);
		}
		return result.substring(1);
	}
	/**
	 * 把list变成0001,0002,0003
	 * 
	 * @param list
	 * @param separator
	 *            分隔符，默认为逗号
	 * @return
	 */
	public static String convertJoinString(List<String> list, String separator) {
		String result = "";
		if (list == null || list.size() == 0) {
			return "''";
		}
		if (separator == null) {
			separator = ",";
		}
		for (String str : list) {
			result += (separator + str);
		}
		return result.substring(1);
	}

	/**
	 * 讲字符串以 separator 分割
	 * 
	 * @param str
	 *            字符串
	 * @param separator
	 *            分隔符，默认为 ;
	 * @return
	 */
	public static List<String> convertToList(String str) {
		return convertToList(str, null);
	}

	/**
	 * 将字符串以 separator 分割
	 * 
	 * @param str
	 *            字符串
	 * @param separator
	 *            分隔符，默认为 ;
	 * @return
	 */
	public static List<String> convertToList(String str, String separator) {
		if (isNotNull(str)) {
			if (separator == null) {
				separator = ";";
			}
			String[] s = str.split(separator);
			List<String> list = new ArrayList<String>();
			list = Arrays.asList(s);
			return list;

		} else {
			return null;
		}
	}

	/**
	 * 讲字符串以 separator 分割,并去重
	 * 
	 * @param str
	 *            字符串
	 * @param separator
	 *            分隔符，默认为 ;
	 * @return
	 */
	public static String reMoveRepeat(String str, String separator) {
		String strs="";
		if (isNotNull(str)) {
			if (separator == null) {
				separator = ",";
			}
			String[] s = str.split(separator);
			 for (int i = 0; i < s.length; i++) 
	          {
	                   for (int j = 1; j < s.length; j++)
	                   {
	                            if(!s[i].equals(s[j]))
	                            {
	                            	strs+=","+s[j];
	                            }
	                   }
	          }
			return strs.substring(1);
		} else {
			return null;
		}
	}

	/**
	 * 是否为正整数
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isIntNumeric(String str) {
		Pattern pattern = Pattern.compile("[0-9]*");
		Matcher isNum = pattern.matcher(str);
		if (!isNum.matches()) {
			return false;
		}
		return true;
	}

	public static boolean isDouble(String str) {
		Pattern pattern1 = Pattern.compile("^-?([1-9]/d*/./d*|0/./d*[1-9]/d*|0?/.0+|0)$");
		Pattern pattern2 = Pattern.compile("[\u4e00-\u9fa5]");
		Matcher matcher1 = pattern1.matcher(str);
		Matcher matcher2 = pattern2.matcher(str);
		if (matcher1.matches()&&!matcher2.matches()) {
			return true;
		}
		return false;
	}

	/**
	 * 是否为数字
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isNumeric(String str) {
		// 几种判断字符串是否为数字的模式
		Pattern pattern1 = Pattern.compile("[1-9]\\d*\\.?\\d+");
		Pattern pattern2 = Pattern.compile("0{1}\\.\\d+"); // 零点几
		Pattern pattern3 = Pattern.compile("0{1}"); // 该字符串是 "0"

		// 使用上面的几种模式对inputString进行判断
		Matcher matcher1 = pattern1.matcher(str);
		Matcher matcher2 = pattern2.matcher(str);
		Matcher matcher3 = pattern3.matcher(str);

		// 只要其中一个条件符合就可以判定该字符串是一个合法的数
		if (matcher1.matches() || matcher2.matches() || matcher3.matches()) {
			return true;
		}
		return false;

	}
	//是否包含--
	public static boolean isContainLine(String str){
		String str1 = str.replace(" ", "");
		if(str1.contains("--") || str1.contains("- -") || str1.contains("——")){
			
			return true;
		}
		return false;
		
	}

	/**
	 * 数字金额大写转换，思想先写个完整的然后将如零拾替换成零 要用到正则表达式
	 */
	public static String digitUppercase(double n) {
		String fraction[] = { "角", "分" };
		String digit[] = { "零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖" };
		String unit[][] = { { "元", "万", "亿" }, { "", "拾", "佰", "仟" } };

		String head = n < 0 ? "负" : "";
		n = Math.abs(n);

		String s = "";
		for (int i = 0; i < fraction.length; i++) {
			s += (digit[(int) (Math.floor(n * 10 * Math.pow(10, i)) % 10)] + fraction[i]).replaceAll("(零.)+", "");
		}
		if (s.length() < 1) {
			s = "整";
		}
		int integerPart = (int) Math.floor(n);

		for (int i = 0; i < unit[0].length && integerPart > 0; i++) {
			String p = "";
			for (int j = 0; j < unit[1].length && n > 0; j++) {
				p = digit[integerPart % 10] + unit[1][j] + p;
				integerPart = integerPart / 10;
			}
			s = p.replaceAll("(零.)*零$", "").replaceAll("^$", "零") + unit[0][i] + s;
		}
		return head + s.replaceAll("(零.)*零元", "元").replaceFirst("(零.)+", "").replaceAll("(零.)+", "零").replaceAll("^整$", "零元整");
	}

	public static String HtmlToText(String sourcestr) {
		if (StrUtil.isNotNull(sourcestr)) {
			return sourcestr.replace("<br>", "");
		}
		return null;
	}

	public static String TextToHtml(String sourcestr) {
		if (StrUtil.isNotNull(sourcestr)) {
			int strlen;
			String restring = "", destr = "";
			strlen = sourcestr.length();
			for (int i = 0; i < strlen; i++) {
				char ch = sourcestr.charAt(i);
				switch (ch) {
				case '<':
					destr = "&lt;";
					break;
				case '>':
					destr = "&gt;";
					break;
				case '\"':
					destr = "&quot;";
					break;
				case '&':
					destr = "&amp;";
					break;
				case 13:
					destr = "<br>";
					break;
				case 32:
					destr = "&nbsp;";
					break;
				default:
					destr = "" + ch;
					break;
				}
				restring = restring + destr;
			}
			return "" + restring;
		}
		return null;
	}
	
	/*
	 * 
	 * 计算含有中文字符的字符串长度
	 */
    public static int calculatePlaces(String str)  
    {  
        int m = 0;  
        char arr[] = str.toCharArray();  
        for(int i=0;i<arr.length;i++)  
        {  
            char c = arr[i];  
            if((c >= 0x0391 && c <= 0xFFE5))  //中文字符  
            {  
                m = m + 2;  
            }  
            else if((c>=0x0000 && c<=0x00FF)) //英文字符  
            {  
                m = m + 1;  
            }  
        }  
        return m;  
    } 
    
    /**
     * 
     * 功能描述：是否为正负整数、0、正负浮点数
     * @author 
     * @date 2017年10月19日
     * @param str
     * @return
     * @modify log:
     */
    public static boolean isNumberByBank(String str) {
		// 几种判断字符串是否为数字的模式
		Pattern pattern1 = Pattern.compile("-?[1-9]\\d*\\.?\\d+");
		Pattern pattern2 = Pattern.compile("-?0{1}\\.\\d+"); // 零点几
		Pattern pattern3 = Pattern.compile("0{1}"); // 该字符串是 "0"
		
		// 使用上面的几种模式对inputString进行判断
		Matcher matcher1 = pattern1.matcher(str);
		Matcher matcher2 = pattern2.matcher(str);
		Matcher matcher3 = pattern3.matcher(str);

		// 只要其中一个条件符合就可以判定该字符串是一个合法的数
		if (matcher1.matches() || matcher2.matches() || matcher3.matches()) {
			return true;
		}
		return false;

	}
    
    
	public static void main(String[] args){
		if(StrUtil.isNumberByBank("0.0")){
			System.out.print("是");	
		}else{
			System.out.print("否");
		}
		
	}

}
