package com.efraiser.test.common.util;

import com.efraiser.test.common.constant.RdTableConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RelationHandle {

	private Logger logger = LoggerFactory.getLogger(RelationHandle.class);

	/**
	 * 
	 * 功能描述：获取公式中指标集合
	 * 
	 * @author zoujian
	 * @date Dec 6, 2011 4:00:10 AM
	 * @return
	 * @modify log：
	 */
	public ArrayList<String> getTarList(String relation) {
		String operStr = "+-*/(){}>=<=!@~,?^\\";
		String tar = "";

		ArrayList<String> tarList = new ArrayList<String>();

		relation = relation.concat(operStr.contains(String.valueOf(relation.charAt(relation.length() - 1))) ? "A" : "?");// 防止最后一个指标或操作符不被处理

		if (relation != null && relation.length() > 0) {
			for (int i = 0; i < relation.length(); i++) {
				if (operStr.contains(String.valueOf(relation.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在tmpDataMap中取以tar为key的value值相加
					if (!RelationHandle.checkIsNum(tar) && !RdTableConstants.KEY_WORDS.contains(tar)) {
						tarList.add(tar);
					}
					tar = "";
				} else {// 否则，组成报表指标字符串
					tar = tar + relation.charAt(i);
				}
			}
			// 增加最后一个指标
			if (!RelationHandle.checkIsNum(tar)) {
				tarList.add(tar);
			}
		}

		return tarList;
	}

	public Map<String, List<String>> tarRelation(List<String> formulas) {
		Map<String, List<String>> map = new HashMap<String, List<String>>();
		for (String relation1 : formulas) {
			relation1 = relation1.replace("%", "/100");
			String operStr = "+-*/(){}>=<=!@~,?^\\";
			String tar = "";
			ArrayList<String> tarList = new ArrayList<String>();
			String relation = relation1.concat(operStr.contains(String.valueOf(relation1.charAt(relation1.length() - 1))) ? "A" : "?");// 防止最后一个指标或操作符不被处理
			if (relation != null && relation.length() > 0) {
				for (int i = 0; i < relation.length(); i++) {
					if (operStr.contains(String.valueOf(relation.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在tmpDataMap中取以tar为key的value值相加
						if (!RelationHandle.checkIsNum(tar) && !RdTableConstants.KEY_WORDS.contains(tar)) {
							tarList.add(tar);
						}
						tar = "";
					} else {// 否则，组成报表指标字符串
						tar = tar + relation.charAt(i);
					}
				}
				// 增加最后一个指标
				if (!RelationHandle.checkIsNum(tar)) {
					tarList.add(tar);
				}
			}
			for (String a : tarList) {
				if (!a.equals("A") && !a.equals("?") && !a.equals("")) {
					if (map.get(a) == null) {
						List<String> list = new ArrayList<String>();
						list.add(relation1);
						map.put(a, list);
					} else {
						map.get(a).add(relation1);
					}
				}

			}
		}
		return map;
	}

	/**
	 * 
	 * 功能描述：校验字符串是否为数字组成
	 * 
	 * @author zoujian
	 * @date Nov 15, 2011 9:48:06 PM
	 * @return
	 * @modify log：
	 */
	public static boolean checkIsNum(String numStr) {
		boolean flag = true;
		try {
			Double.parseDouble(numStr);

			if (numStr.length() == 5 && !numStr.contains(".")) {// 长度==5，并且不包含.时，为指标
				flag = false;
			}
		} catch (Exception e) {
			flag = false;
		}
		return flag;
	}

	/**
	 * 
	 * 功能描述：剔除重复公式（第一个公式左边等于第二个公式右边，第一个公式右边等于第二个公式左边）中的其中一个，如33101=33164 和
	 * 33164=33101
	 * 
	 * @author zoujian
	 * @date Dec 6, 2011 2:41:16 AM
	 * @return
	 * @modify log：
	 */
	public ArrayList<String> getDistinctList(List<String> relList) {
		ArrayList<String> newList = new ArrayList<String>();

		ArrayList<String> tmpList = new ArrayList<String>();

		// 拆分公式后存放数组
		String[] rels = new String[2];
		// 等号右边为单个指标的公式
		for (String rel : relList) {
			rels = rel.split("=");

			if (rels[0].length() == rels[1].length()) {
				tmpList.add(rel);
			} else {
				newList.add(rel);
			}
		}

		// 去掉重复公式
		for (int i = 0; i < tmpList.size(); i++) {
			String[] tmp1 = tmpList.get(i).split("=");
			for (int j = 0; j < tmpList.size(); j++) {
				String[] tmp2 = tmpList.get(j).split("=");

				if (i != j && (tmp1[0].equals(tmp2[1]) && tmp1[1].equals(tmp2[0]))) {
					tmpList.remove(i);
				}
			}
		}

		// 获取新的公式
		newList.addAll(tmpList);

		return newList;
	}

	/**
	 * 
	 * 功能描述：把指标变为js公式中需要形式
	 * 
	 * @author zoujian
	 * @date Dec 6, 2011 4:00:10 AM
	 * @return
	 * @modify log：
	 */
	public String getTarRel(String rightRelation, List<String> pCellList, int digit) {
		String operStr = "+-*/(){}>=<=!@~,?^\\";

		String leftBracket = "([{";
		String rightBracket = ")]}";

		// int bracketCou = 0;// 记录括号个数，左括号+1，右括号-1，最后=0
		String funFlag = "";// 记录公式中的数学函数，以“,”号分隔

		String tar = "";
		String oper = "";

		String returnStr = "";

		rightRelation = rightRelation.concat(operStr.contains(String.valueOf(rightRelation.charAt(rightRelation.length() - 1))) ? "A" : "?");// 防止最后一个指标或操作符不被处理

		if (rightRelation != null && rightRelation.length() > 0) {

			for (int i = 0; i < rightRelation.length(); i++) {
				if (operStr.contains(String.valueOf(rightRelation.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在tmpDataMap中取以tar为key的value值相加
					if (leftBracket.contains(String.valueOf(rightRelation.charAt(i))) && !RdTableConstants.KEY_WORDS.contains(tar)) {
						funFlag += ",#";// 保证遇到有括号时，funFlag可以截取掉最后一个，之后内容
					}

					if (!"".equals(tar)) {
						if (RdTableConstants.KEY_WORDS.contains(tar)) {
							funFlag += ("," + tar);
						}

						if (funFlag.toUpperCase().endsWith(",SUMIF") || (funFlag.toUpperCase().endsWith(",COUNTIF")) || (funFlag.toUpperCase().endsWith(",OR"))
								|| (funFlag.toUpperCase().endsWith(",AND"))) {
							returnStr += tar;
						} else {
							returnStr += this.splitTar(tar);
						}
						if (pCellList != null && pCellList.contains(tar)) {// 遇到百分比单元格
							returnStr = returnStr + "/100";
						}

						tar = "";
					}

					if (leftBracket.contains(String.valueOf(rightRelation.charAt(i)))) {
						// bracketCou++;
					}

					if (rightBracket.contains(String.valueOf(rightRelation.charAt(i)))) {
						// bracketCou--;

						if (funFlag != null && !"".equals(funFlag)) {
							funFlag = funFlag.substring(0, funFlag.lastIndexOf(","));
						}
					}

					oper = oper + String.valueOf(rightRelation.charAt(i));

				} else {// 否则，组成报表指标字符串
					if (!"".equals(oper)) {
						if (oper.endsWith(",")) {
							if (funFlag.toUpperCase().endsWith(",SUM")) {// sum
								oper = oper.replace(",", "+");
							}
						}

						// if (digit == 4 && oper.contains("/")) {
						// if (funFlag.toUpperCase().endsWith(",ROUND")) {//
						// round
						// oper = oper.replaceFirst("/", "*100/");
						// }
						// }

						returnStr = returnStr + oper;

						oper = "";
					}

					tar = tar + rightRelation.charAt(i);
				}
			}
		}

		if (returnStr.toUpperCase().contains("SUMIF(")) {
			returnStr = this.transferSumIFToJs(returnStr);
		}
		if (returnStr.toUpperCase().contains("COUNTIF")) {
			returnStr = this.transferCountIFToJs(returnStr);
		}
		if (returnStr.toUpperCase().contains("AND")) {
			returnStr = this.transferOrAndToJs(returnStr, "AND", pCellList, digit);
		}
		if (returnStr.toUpperCase().contains("OR")) {
			returnStr = this.transferOrAndToJs(returnStr, "OR", pCellList, digit);
		}

		returnStr = returnStr.replace("ROUND", "getRate").replace("SUM", "").replace("MAX", "Math.max").replace("MIN", "Math.min").replace("ABS", "Math.abs").replace("IF", "if")
				.replace("ELSE", "else");

		return returnStr;
	}

	/**
	 * 
	 * 功能描述：根据公式中指标生成js中所需公式形式
	 * 
	 * @author zoujian
	 * @date Apr 28, 2012 1:41:03 AM
	 * @param tar
	 * @return
	 * @modify log：
	 */
	/**
	 * 修改了获取的方法
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tar
	 * @return
	 */
	public String splitTar(String tar) {
		if (tar == null || !tar.contains("_")) {
			return tar;
		}
//		String[] tars = tar.split("_");
		// return "getStrFloat($('#" + tars[1] + "_" + tars[2] + "').val())";
		return "getStrFloat($('#" + tar + "').val())";

	}

	public String transferSumIFToJs(String formula) {
		String jsStr = "";

		String sumifFormula = this.getSubFormula(formula, "SUMIF");

		String[] subFormalas = sumifFormula.substring(0, sumifFormula.length() - 1).replace("SUMIF(", "").split(",");

		// 条件语句（两个，强两部分组成）
		String conFormula1 = subFormalas[0];
		String conFormula2 = subFormalas[1].replace("\"", "");

		// 计算语句（第三部分，如果没有，则为第一部分）
		String sumFormula = "";
		if (subFormalas.length == 3) {
			sumFormula = subFormalas[2];
		} else {
			sumFormula = subFormalas[0];
		}

		String operStr = "";// 比较符

		if (!"".equals(CommUtil.getOperStr(conFormula2))) {
			operStr = CommUtil.getOperStr(conFormula2);
		} else {
			operStr = "==";
		}

		String[] tars = sumFormula.split("\\+");

		jsStr = "(";
		for (int i = 0; i < conFormula1.split("\\+").length; i++) {

			jsStr += ("(".equals(jsStr) ? "" : "+") + "(" + this.splitTar(conFormula1.split("\\+")[i]) + operStr + this.splitTar(conFormula2.replace(operStr, "")) + "?" + this.splitTar(tars[i])
					+ ":0)";

		}
		jsStr += ")";

		return formula.replace(sumifFormula, jsStr).replace("SUMIF", "");
	}

	public String transferCountIFToJs(String formula) {
		String jsStr = "";

		String sumifFormula = this.getSubFormula(formula, "COUNTIF");

		String[] subFormalas = sumifFormula.substring(0, sumifFormula.length() - 1).replace("COUNTIF(", "").split(",");

		// 条件语句（两个，强两部分组成）
		String conFormula1 = subFormalas[0];
		String conFormula2 = subFormalas[1].replace("\"", "");

		String operStr = "";// 比较符

		if (!"".equals(CommUtil.getOperStr(conFormula2))) {
			operStr = CommUtil.getOperStr(conFormula2);
		} else {
			operStr = "==";
		}

		String[] tars = conFormula1.split("\\+");
		jsStr = "(";
		for (int i = 0; i < tars.length; i++) {

			jsStr += ("(".equals(jsStr) ? "" : "+") + "(" + this.splitTar(tars[i]) + operStr + this.splitTar(conFormula2.replace(operStr, "")) + "?1:0)";

		}
		jsStr += ")";

		return formula.replace(sumifFormula, jsStr).replace("COUNTIF", "");
	}

	public String transferOrAndToJs(String formula, String funName, List<String> pCellList, int digit) {
		String andOrFormula = this.getSubFormula(formula, funName);
		String jsStr = "";

		String[] subFormalas = andOrFormula.substring(0, andOrFormula.length() - 1).replace(funName + "(", "").split(",");

		String operStr = "";// 操作符

		String[] rels = null;

		jsStr = "(";
		for (int i = 0; i < subFormalas.length; i++) {
			operStr = CommUtil.getOperStr(subFormalas[i]);

			rels = subFormalas[i].split(operStr);

			if ("=".equals(operStr)) {
				operStr = "==";
			}

			jsStr += this.getTarRel(rels[0], pCellList, digit);
			jsStr += operStr;
			jsStr += this.getTarRel(rels[1], pCellList, digit);

			if (i < subFormalas.length - 1) {
				if ("OR".equals(funName)) {
					jsStr += " || ";
				} else if ("AND".equals(funName)) {
					jsStr += " && ";
				}
			}
		}
		jsStr += ")";

		if (formula.replace(andOrFormula, jsStr).contains(funName)) {
			return this.transferOrAndToJs(formula.replace(andOrFormula, jsStr), funName, pCellList, digit);
		} else {
			return formula.replace(andOrFormula, jsStr);
		}
	}

	/**
	 * 
	 * 功能描述：根据funKey，截取对应的子句
	 * 
	 * @author zoujian
	 * @date Mar 6, 2013 10:31:34 AM
	 * @param formula
	 * @param funKey
	 * @return
	 * @modify log：
	 */
	public String getSubFormula(String formula, String funKey) {
		String subFormula = "";

		String operStr = "+-*/(){}>=<!#@~,?^\\";

		String leftBracket = "([{";
		String rightBracket = ")]}";

		int bracketCou = 0;// 记录括号个数，左括号+1，右括号-1，最后=0
		String funFlag = "";// 记录公式中的数学函数，以“,”号分隔

		String tar = "";
		String oper = "";

		// 替换%以及其他关键字
		formula = formula.replace("%", "/100");

		// 最后一位多增加一位，防止公式最后一个指标或操作符不被处理
		formula = formula.concat(operStr.contains(String.valueOf(formula.charAt(formula.length() - 1))) ? "A" : "?");

		if (formula != null && formula.length() > 0) {
			for (int i = 0; i < formula.length(); i++) {
				if (operStr.contains(String.valueOf(formula.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在dataMap中取以tar为key的value值相加
					if (leftBracket.contains(String.valueOf(formula.charAt(i))) && !RdTableConstants.KEY_WORDS.contains(tar) && !"".equals(funFlag)) {
						funFlag += ",#";// 保证遇到右括号时，funFlag可以截取掉最后一个，之后内容
					}

					if (!"".equals(tar)) {
						if (tar.equals(funKey)) {
							subFormula = tar;

							funFlag = "," + funKey;
						} else {
							if (!"".equals(subFormula)) {
								subFormula += tar;
							}
						}

						tar = "";
					}

					if (!"".equals(funFlag) && leftBracket.contains(String.valueOf(formula.charAt(i)))) {
						bracketCou++;
					}

					if (bracketCou > 0 && rightBracket.contains(String.valueOf(formula.charAt(i)))) {
						bracketCou--;

						if (funFlag != null && !"".equals(funFlag)) {
							funFlag = funFlag.substring(0, funFlag.lastIndexOf(","));
						}

						if (bracketCou == 0) {
							subFormula += String.valueOf(formula.charAt(i));

							return subFormula;
						}
					}

					oper = oper + String.valueOf(formula.charAt(i));

				} else {// 否则，组成报表指标字符串
					if (!"".equals(oper)) {
						if (!"".equals(subFormula) && oper.endsWith(",")) {
							if (funFlag.toUpperCase().endsWith(",SUM")) {// sum
								oper = oper.replace(",", "+");
							} else if (funFlag.toUpperCase().endsWith(",ROUND")) {// round
								oper = oper.replace(",", "");
								continue;
							}
						}

						subFormula = subFormula + oper;

						oper = "";
					}

					tar = tar + formula.charAt(i);
				}
			}
		}

		subFormula = subFormula.toUpperCase().replace("ROUND", "");

		// 20120701 负数操作时自动改为+号
		subFormula = subFormula.replaceAll("--", "+");

		return subFormula;
	}

	/**
	 * 
	 * 功能描述：截取公式中每个大括号中的部分，并判断是否含有IF语句,进行特殊处理
	 * 
	 * @author zoujian
	 * @date Mar 8, 2013 4:18:29 PM
	 * @param formula
	 * @return
	 * @modify log：
	 */
	public String getBraceFormula(String formula) {
		String preFormula = formula.split("=getNumToString\\(")[0] + "=getNumToString(";
		String endFormula = formula.substring(formula.lastIndexOf(","));

		formula = formula.replace(preFormula, "").replace(endFormula, "");

		String[] formulas = formula.split("\\{");

		String newFormula = "";
		for (int i = 0; i < formulas.length; i++) {

			if (formulas[i].toUpperCase().contains("IF(")) {
				if (i == 0) {
					newFormula += formulas[i];
				} else {
					newFormula += "{" + formulas[i];
				}
			} else {
				newFormula += "{" + preFormula + (formulas[i].replaceFirst("}", endFormula + "}"));
			}

		}

		return newFormula;
	}

}
