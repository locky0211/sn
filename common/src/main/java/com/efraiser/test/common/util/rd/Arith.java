package com.efraiser.test.common.util.rd;

import java.math.BigDecimal;

/** 数字运算 */
public final class Arith {
	/**
	 * 两数相加，返回结果
	 * 
	 * @param v1
	 * @param v2
	 * @return
	 */
	public static double add(double v1, double v2) {
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.add(b2).doubleValue();
	}

	/**
	 * 两数相减
	 * 
	 * @param v1
	 *            被减数
	 * @param v2
	 *            减数
	 * @return 数字结果
	 */
	public static double sub(double v1, double v2) {
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.subtract(b2).doubleValue();
	}

	/**
	 * 两数相乘
	 * 
	 * @param v1
	 * @param v2
	 * @return 数字结果
	 */
	public static double mul(double v1, double v2) {
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.multiply(b2).doubleValue();
	}

	/**
	 * 两数相除，保留两位小数
	 * 
	 * @param v1
	 *            被除数
	 * @param v2
	 *            除数
	 * @return 数字结果
	 */
	public static double div(double v1, double v2) {
		return div(v1, v2, 2);
	}

	/**
	 * BigDecimal两数相除
	 * 
	 * @param v1
	 *            被除数
	 * @param v2
	 *            除数
	 * @param scale
	 *            保留小数位数
	 * @return 数字结果
	 */
	public static double div(double v1, double v2, int scale) {
		if (scale < 0) {
			throw new IllegalArgumentException("The scale must be a positive integer or zero");
		}
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.divide(b2, scale, 4).doubleValue();
	}

	/**
	 * 四舍五入
	 * 
	 * @param v 数值
	 * @param scale
	 *            保留小数位数
	 * @return 四舍五入后的数字
	 */
	public static double round(double v, int scale) {
		if (scale < 0) {
			throw new IllegalArgumentException("The scale must be a positive integer or zero");
		}
		BigDecimal b = new BigDecimal(Double.toString(v));
		BigDecimal one = new BigDecimal("1");
		return b.divide(one, scale, 4).doubleValue();
	}
}