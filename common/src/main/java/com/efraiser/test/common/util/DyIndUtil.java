package com.efraiser.test.common.util;

public class DyIndUtil {
	public static String convertIndTypeToConStr(String indType) {
		String ss = "'1'";
		if ("1".equals(indType)) {
			return ss;
		} else if ("2".equals(indType)) {
			ss = "'1','2'";
		} else if ("3".equals(indType)) {
			ss = "'1','2','3'";
		} else if ("4".equals(indType)) {
			ss = "'1','2','3','4'";
		}
		return ss;

	}
}
