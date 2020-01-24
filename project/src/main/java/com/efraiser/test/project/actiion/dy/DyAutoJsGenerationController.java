package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.common.util.nutz.R;
import com.efraiser.test.db.model.dy.DyTableColumnContrast;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.dy.dycheckformula.DyCheckFormulaService;
import com.efraiser.test.db.service.dy.dytablecolumncontrast.DyTableColumnContrastService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.nutz.lang.Files;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("dy/autojs")
public class DyAutoJsGenerationController extends BaseController {

	private Logger logger = LoggerFactory.getLogger(DyAutoJsGenerationController.class);

	@Autowired
	private DyCheckFormulaService dyCheckFormulaService;

	@Autowired
	private DyTableInfoService dyTableInfoService;

	@Autowired
	private DyTableColumnContrastService dyTableColumnContrastService;

	@Autowired
	private DyTableModelPCTService dyTableModelPCTService;

	@Autowired
	private LocalConfig localConfig;

	@RequestMapping("/toUploadAutoJsFile")
	@ResponseBody
	public RequestResult toUploadAutoJsFile(String excelFile, String excelFilePath) {
		String autoJsPath = SystemConstants.SYSTEM_PATH + File.separator + "dy" + File.separator + "autojs";
		if (excelFile.endsWith(".js")) {
			try {
				doUploadAutoJsFile(autoJsPath, excelFile, new File(excelFilePath));
			} catch (Exception e) {
				e.printStackTrace();
				return requestResult(false, "拷贝文件失败!!");
			}
		} else if (excelFile.endsWith(".zip") || excelFile.endsWith(".rar")) {
			String unZipPath = localConfig.getProperties().getTempStringPath() + File.separator + R.UU16() + File.separator + "unZip";
			try {
				if (excelFile.endsWith(".zip")) {
					ZipFileUtil.unzip(excelFilePath, unZipPath);
				} else {
					RarFileUtil.unrar(excelFilePath, unZipPath);
				}
			} catch (Exception e) {
				logger.error("toUploadAutoJsFile() error! excelFile:["+excelFile+"]excelFilePath:["+excelFilePath+"]",e);
				FileUtil.del(unZipPath);
				return requestResult(false, "解压文件包失败!!");
			}

			List<File> excelFiles = FileUtil.getFolderFiles(unZipPath);
			for (File file : excelFiles) {
				if (file.getName().endsWith(".js")) {
					try {
						doUploadAutoJsFile(autoJsPath, file.getName(), file);
					} catch (Exception e) {
						e.printStackTrace();
						FileUtil.del(unZipPath);
						return requestResult(false, "拷贝文件失败!!");
					}
				}
			}
			FileUtil.del(unZipPath);
		}

		return requestResult(true, "");
	}

	private void doUploadAutoJsFile(String autoJsPath, String fileName, File jsFile) throws Exception {
		File targetFile = new File(autoJsPath + File.separator + fileName);
		Files.createNewFile(targetFile);
		Files.copyFile(jsFile, targetFile);
	}

	@RequestMapping("/toGenerationAutoJs")
	@ResponseBody
	public RequestResult toGenerationAutoJs(String tabCodes, boolean allVersion) {
		try {
			List<String> tabCodeList = StrUtil.convertToList(tabCodes);
			RelationHandle relHandle = new RelationHandle();
			String autoJsPath = localConfig.getProperties().getTempStringPath()  + "autoJs";
			Files.deleteDir(new File(autoJsPath));
			List<DyTableInfo> tableInfoList = dyTableInfoService.getDyTableInfoToAutoJs(tabCodeList, allVersion);
			for (DyTableInfo tableInfo : tableInfoList) {
				try {
					// JS文件内容
					StringBuffer sb = new StringBuffer();
					// 获取所有表内自动计算校验公式
					List<String> formulas = dyCheckFormulaService.getDyAutoFormulaList(tableInfo.getTableId());
					List<String> tmPctList = DyTableModelCache.getModelPCTList(tableInfo.getTableId());

					// RelationHandle rh = new RelationHandle();
					// 根据报表获取报表所有的指标集合G0100_2_A...
					List<String> tarList = this.findTarsByTabInfo(tableInfo);
					Map<String, List<String>> map = this.findTarsFormulas(tarList, formulas);

					for (String tarStr : tarList) {
						sb.append(cretaJsStr(map, tarStr, tmPctList, relHandle));
					}

					// for (String key : map.keySet()) {
					// sb.append(cretaJsStr(map.get(key), key, tmPctList,
					// relHandle));
					// }
					// 一个报表结束
					if (sb.length() > 0) {
						// 生成文件
						Files.write(autoJsPath + File.separator + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + ".js", sb.toString());
					}
				} catch (Exception e) {
					logger.error("生成[" + tableInfo.getTabCode() + "_" + tableInfo.getVersionNo() + "].js文件时出现异常!!!",e);
				}
			}
			String zipPath = localConfig.getProperties().getTempStringPath() + "autoJs.zip";
			ZipFileUtil.zip(autoJsPath, zipPath);
			return requestResult(true, zipPath);
		} catch (Exception e) {
			logger.error("toGenerationAutoJs() error! tabCodes:["+tabCodes+"],allVersion:{"+allVersion+"}",e);
			return requestResult(false, "");
		}
	}

	private Map<String, List<String>> findTarsFormulas(List<String> tarList, List<String> formulas) {
		Map<String, List<String>> rMap = new HashMap<String, List<String>>();
		for (String tar : tarList) {
			List<String> fList = new ArrayList<String>();
			for (String af : formulas) {
				if (af.contains(tar)) {
					fList.add(af);
				}
			}
			rMap.put(tar, fList);
		}
		return rMap;
	}

	private StringBuffer cretaJsStr(Map<String, List<String>> formulaMap, String tarStr, List<String> tmPctList, RelationHandle relHandle) {
		StringBuffer sb = new StringBuffer();
		List<String> relList = formulaMap.get(tarStr);
		// 剔除重复公式
		relList = relHandle.getDistinctList(relList);
		// 如果有自动计算的公式,则生成

		sb.append("/*" + tarStr + "*/\r\n");
		sb.append("function F" + tarStr + "(obj){\r\n");
		sb.append("    showStr(obj);\r\n");
		for (String rel : relList) {
			// 替换%
			rel = rel.replace("%", "/100");
			if (rel.contains("IF")) {
				sb.append(this.parseComplexRelation(rel, tmPctList, relHandle, tarStr));
			} else {
				sb.append(this.parseSingleRelation(rel, tmPctList, relHandle, tarStr));
			}

		}
		sb.append("}\r\n");
		sb.append("\r\n");
		return sb;
	}

	private String parseSingleRelation(String relation, List<String> pCellList, RelationHandle relHandle, String tarStr) {
		StringBuffer sb = new StringBuffer();
		String[] tars = relation.split("=")[0].split("_");
		int digit = 2;
		if (pCellList.contains(relation.split("=")[0])) {// 如果=号左边是百分比
			digit = 4;
		}
		String rightRel = relation.substring(relation.indexOf("=") + 1).replace("=", "==");// 右边
		// sb.append("    $('#" + tars[1] + "_" + CommUtil.getSeq2(tars[2]) +
		// "').val(");
		sb.append("    $('#" + tars[0] + "_" + tars[1] + "_" + tars[2] + "').val(");
		sb.append("getNumToString(");
		// if (digit == 4) {
		// sb.append("(");
		// }
		sb.append(relHandle.getTarRel(rightRel, pCellList, digit));
		// if (digit == 4) {
		// sb.append(")*100");
		// }
		sb.append("," + digit + ")");
		sb.append(");\r\n");

		// 20130308 add 处理含IF的公式
		if (sb.toString().contains("if(")) {
			sb = new StringBuffer(relHandle.getBraceFormula(sb.toString()));
			sb.append(";\r\n");
		}
		// 20120520 add 调用目标指标参与计算的方法
		if (!tarStr.toUpperCase().equals(relation.split("=")[0].toUpperCase())) {// 防止调用本方法，死循环
			sb.append("    F" + tars[0] + "_" + tars[1] + "_" + tars[2] + "($('#" + tars[0] + "_" + tars[1] + "_" + tars[2] + "'));\r\n");
		}

		return sb.toString();
	}

	/**
	 * 
	 * 功能描述：解析含if...else...的公式
	 * 
	 * @author zoujian
	 * @date May 18, 2012 5:26:30 PM
	 * @param relation
	 * @param pCellList
	 * @return
	 * @modify log：
	 */
	private String parseComplexRelation(String relation, List<String> pCellList, RelationHandle relHandle, String basicTar) {
		StringBuffer returnStr = new StringBuffer();

		// 20121231 add
		String relPre = "";
		if (relation.indexOf("IF(") != 0) {
			relPre = relation.substring(0, relation.indexOf("=") + 1);
		}

		String subRel1 = relation.substring(relation.indexOf("(") + 1, relation.indexOf("{") - 1);

		if ("=".equals(CommUtil.getOperStr(subRel1))) {// if语句中"="号改为"=="
			subRel1 = subRel1.replace("=", "==");
		}

		String subRel2 = relPre + relation.substring(relation.indexOf("{") + 1, relation.indexOf("}"));

		String subRel3 = "";
		if (relation.toUpperCase().contains("ELSE")) {
			subRel3 = relPre + relation.substring(relation.lastIndexOf("{") + 1, relation.lastIndexOf("}"));
		}

		// if条件
		returnStr.append("	if(" + relHandle.getTarRel(subRel1, pCellList, 2) + "){\r\n");
		// 拼第一个子句
		returnStr.append(this.parseSingleRelation(subRel2, pCellList, relHandle, basicTar));

		returnStr.append("	}else{\r\n");
		// 拼第二个子句
		returnStr.append(this.parseSingleRelation(subRel3, pCellList, relHandle, basicTar));

		returnStr.append("	}\r\n");

		return returnStr.toString();
	}

	/**
	 * 
	 * 功能描述：找出公式右边包含指定指标的公式集合（包含特殊公式（含if...[else...]）和一般公式判断）
	 * 
	 * @author zoujian
	 * @date May 3, 2012 8:46:07 PM
	 * @param relList
	 * @param tarcode
	 * @return
	 * @modify log：
	 */
	private List<String> getFormulaListByTarcode(List<String> relList, String tarcode) {
		List<String> newList = new ArrayList<String>();
		RelationHandle rh = new RelationHandle();
		// 循环获取公式右边集合
		for (String rel : relList) {
			if (!rel.contains("=")) {
				logger.error("getFormulaListByTarcode() 生成自动计算公式出错：" + rel + "不包含“=”运算符！");
				continue;
			}
			if (rh.getTarList(rel.substring(rel.indexOf("="))).contains(tarcode)) {// 检测是否存在指标
				newList.add(rel);
			}
		}

		return newList;
	}

	/**
	 * 获取报表下所有的公式代码
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @param tableInfo
	 * @return
	 */
	private List<String> findTarsByTabInfo(DyTableInfo tableInfo) {
		List<String> tarList = new ArrayList<String>();
		String[] rowS = tableInfo.getRowInfo().split("@");
		List<DyTableColumnContrast> tccList;
		for (int y = 0; y < rowS.length; y++) {
			tccList = dyTableColumnContrastService.getDyTableColumnContrastList(tableInfo.getTableId(), (y + 1));
			String[] rowInfos = rowS[y].split("#");
			for (int i = Integer.valueOf(rowInfos[2]); i <= Integer.valueOf(rowInfos[1]); i++) {// 行
				// 循环标题列
				for (DyTableColumnContrast tcc : tccList) {
					tarList.add(tableInfo.getTabCode() + "_" + i + "_" + DyTableUtil.getFieldName("", tcc.getFileIndex()));
				}
			}
		}

		return tarList;
	}

	/**
	 * 
	 * 功能描述：解析特殊公式
	 * 
	 * @author zoujian
	 * @date May 4, 2012 8:23:21 AM
	 * @return
	 * @modify log：
	 */
	private String parseSpecialRel(String formula) {
		String operStr = "+-*/(){}>=<=!@#,~?";
		String relation = "";
		int bracketCou = 0;// 记录括号个数，左括号+1，右括号-1，最后=0
		String funFlag = "";// 记录公式中的数学函数，以“,”号分隔

		String leftBracket = "([{";
		String rightBracket = ")]}";

		String tar = "";
		String oper = "";

		// 拼接最后一位，防止
		formula = formula.concat(operStr.contains(String.valueOf(formula.charAt(formula.length() - 1))) ? "A" : "?");

		for (int i = 0; i < formula.length(); i++) {
			if (operStr.contains(String.valueOf(formula.charAt(i)))) {// 遇到operStr中包含的比较运算符时，拆分指标，变为需要项目需要格式

				if (leftBracket.contains(String.valueOf(formula.charAt(i))) && !DyTableConstants.KEY_WORDS.contains(tar)) {
					funFlag += ",#";// 保证遇到有括号时，funFlag可以截取掉最后一个，之后内容
				}

				if (!"".equals(tar)) {
					if (tar.contains("&")) {
						relation = relation + this.parseCloneTar(tar, "&");
					} else {
						if (DyTableConstants.KEY_WORDS.contains(tar)) {
							funFlag += ("," + tar);
						}
						relation = relation + tar;
					}

					tar = "";
				}

				if (leftBracket.contains(String.valueOf(formula.charAt(i)))) {
					bracketCou++;
				}

				if (rightBracket.contains(String.valueOf(formula.charAt(i)))) {
					bracketCou--;

					if (funFlag != null && !"".equals(funFlag)) {
						funFlag = funFlag.substring(0, funFlag.lastIndexOf(","));
					}
				}

				oper = oper + String.valueOf(formula.charAt(i));
			} else {// 否则，组成报表指标字符串
				if (!"".equals(oper)) {
					if (oper.endsWith(",")) {
						if (funFlag.toUpperCase().endsWith(",SUM")) {// sum
							oper = oper.replace(",", "+");
						}
					}

					relation = relation + oper;

					oper = "";
				}

				tar = tar + formula.charAt(i);

			}
		}

		if (bracketCou != 0) {
			logger.error("公式：" + formula + "括号不对称！");
		}

		// 去掉round关键字
		relation = relation.toUpperCase().replace("ROUND", "").replace("SUM(", "(");

		return relation;
	}

	/**
	 * 
	 * 功能描述：解析G0100_3_A&G0100_8_A或G0100_1_A&G0100_1_G类似的公式
	 * 
	 * @author zoujian
	 * @date May 11, 2012 1:12:22 AM
	 * @param shortFormula
	 * @return
	 * @modify log：
	 */
	private String parseCloneTar(String shortFormula, String splitStr) {
		String[] tars = shortFormula.split(splitStr);

		String newFormula = "";

		String[] array1 = tars[0].split("_");
		String[] array2 = tars[1].split("_");

		if (array1[1].equals(array2[1])) {// G0100_1_A&G0100_1_G格式
			for (int i = DyTableUtil.getSeq(array1[2]) - 1; i < DyTableUtil.getSeq(array2[2]); i++) {
				newFormula = ("".equals(newFormula) ? "" : newFormula + "+") + array1[0] + "_" + array1[1] + "_" + DyTableUtil.getFieldName("", i);
			}
		} else if (array1[2].equals(array2[2])) {// G0100_3_A&G0100_8_A格式
			for (int i = Integer.parseInt(array1[1]) - 1; i < Integer.parseInt(array2[1]); i++) {
				newFormula = ("".equals(newFormula) ? "" : newFormula + "+") + array1[0] + "_" + (i + 1) + "_" + array1[2];
			}
		}

		return newFormula;
	}
}
