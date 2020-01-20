package com.efraiser.test.db.util;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.RdTableConstants;
import com.efraiser.test.common.util.CommUtil;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.RelationHandle;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.rd.Arith;
import com.efraiser.test.common.util.rd.CalStr;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtableinfo.impl.RdTableInfoServiceImpl;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RdCheckUtil {
	
	private static Map<String, String> commonFormulaMap = new HashMap<String, String>();   //存放逻辑校验公式转换关系
	private static Map<String, String> waveFormulaMap = new HashMap<String, String>();		//存放异动校验公式转换关系


	public static RdTableInfoService rdTableInfoService;
	public static RdTableInfoService rdTableInfoService1;

	/**
	 * 分解获取校验公式中存在的指标信息
	 * 
	 * @author efraiser.xiaxiaofeng
	 * @return
	 */
	public static List<String> getTarListByFormula(String relation) {
		// String operStr = "+-*/(){}>=<=!@~,?^\\";
		String operStr = "+-*/(){}>=<=!,?\\";
		String tar = "";

		List<String> tarList = new ArrayList<String>();

		relation = relation.concat(operStr.contains(String.valueOf(relation.charAt(relation.length() - 1))) ? "A" : "?");// 防止最后一个指标或操作符不被处理

		if (relation != null && relation.length() > 0) {
			for (int i = 0; i < relation.length(); i++) {
				if (operStr.contains(String.valueOf(relation.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在tmpDataMap中取以tar为key的value值相加
					if (!RelationHandle.checkIsNum(tar) && !CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
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

	/**
	 * 根据月份获取当前月频度最低的报表类型
	 * 
	 * @param sysMon
	 *            月份
	 * @return 报表类型
	 */
	public static String getTabTypeBySysMon(String sysMon) {
		String tabType = null;
		if ("12".equals(sysMon)) {
			tabType = "00";
		} else if ("06".equals(sysMon)) {
			tabType = "80";
		} else if ("03".equals(sysMon) || "09".equals(sysMon)) {
			tabType = "40";
		} else {
			tabType = "50";
		}
		return tabType;
	}

	/**
	 * 根据指定报表类型获取所有需要参与表间校验的报表的报表类型
	 * 
	 * @param tabType
	 *            报表类型
	 * @return 所有需要参与表间校验的报表的报表类型.格式:'报表类型1','报表类型2'
	 */
	public static String getTabtypesForCheck(String tabType) {
		String tabTypes = "";
		if ("50".equals(tabType)) {// 月报校验时只有月报参与表间校验
			tabTypes = "'50'";
		} else if ("40".equals(tabType)) {// 季报校验时,月报和季报参与表间校验
			tabTypes = "'50','40'";
		} else if ("80".equals(tabType)) {// 半年报校验时,月报、季报和半年报参与表间校验
			tabTypes = "'50','40','80'";
		} else if ("00".equals(tabType)) {// 年报校验时,月报、季报、半年报和年报参与表间校验
			tabTypes = "'50','40','80','00'";
		}
		return tabTypes;
	}
	public static String getTabtypesForCheck1(String tabType) {
		String tabTypes = "";
		if ("50".equals(tabType)) {// 月报校验时只有月报参与表间校验
			tabTypes = "M1";
		} else if ("40".equals(tabType)) {// 季报校验时,月报和季报参与表间校验
			tabTypes = "S1";
		} else if ("80".equals(tabType)) {// 半年报校验时,月报、季报和半年报参与表间校验
			tabTypes = "";
		} else if ("00".equals(tabType)) {// 年报校验时,月报、季报、半年报和年报参与表间校验
			tabTypes = "Y";
		}
		return tabTypes;
	}
	/**
	 * 解析特殊校验公式
	 * 
	 * @param formula
	 *            公式
	 * @return 解析后公式
	 */
	public static String parseSpecialRel(String formula) {
		String operStr = "+-*/(){}>=<!#,?";
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

				if (leftBracket.contains(String.valueOf(formula.charAt(i))) && !CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
					funFlag += ",#";// 保证遇到有括号时，funFlag可以截取掉最后一个，之后内容
				}

				if (!"".equals(tar)) {
					if (tar.contains("&")) {
						relation = relation + parseCloneTar(tar, "&");
					} else {
						if (CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
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

					if (StrUtil.isNotNull(funFlag)) {
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
			System.out.println("公式：" + formula + "括号不对称！");
		}

		// 去掉round关键字
		relation = relation.toUpperCase().replace("ROUND", "").replace("SUM(", "(");

		return relation;
	}

	/**
	 * 解析G0100_3_A&G0100_8_A或G0100_1_A&G0100_1_G类似的公式
	 * 
	 * @param shortFormula
	 *            公式
	 * @param splitStr
	 *            特殊符号
	 * @return 解析后公式
	 */
	public static String parseCloneTar(String shortFormula, String splitStr) {
		String[] tars = shortFormula.split(splitStr);

		String newFormula = "";

		String[] array1 = tars[0].split(RdTableConstants.STR_CONN);
		String[] array2 = tars[1].split(RdTableConstants.STR_CONN);

		if (array1[1].equals(array2[1])) {// G0100_1_A&G0100_1_G格式
			for (int i = CommUtil.getSeq(array1[2]) - 1; i < CommUtil.getSeq(array2[2]); i++) {
				newFormula = ("".equals(newFormula) ? "" : newFormula + "+") + array1[0] + RdTableConstants.STR_CONN + array1[1] + RdTableConstants.STR_CONN + CommUtil.getParamName("", i);
			}
		} else if (array1[2].equals(array2[2])) {// G0100_3_A&G0100_8_A格式
			for (int i = Integer.parseInt(array1[1]) - 1; i < Integer.parseInt(array2[1]); i++) {
				newFormula = ("".equals(newFormula) ? "" : newFormula + "+") + array1[0] + RdTableConstants.STR_CONN + (i + 1) + RdTableConstants.STR_CONN + array1[2];
			}
		}

		return newFormula;
	}
	

	
	public static String returnValRelationEx(String relation, Map<String, String> dataMap, List<String> pCellList, String reportDate, RdTableInfoService thisRdTableInfoService) {
		rdTableInfoService =thisRdTableInfoService;
		return returnValRelation(relation,dataMap,pCellList,reportDate);
	}

	public static String returnValRelationExOptimizeVer1(String relation, Map<String, String> dataMap, List<String> pCellList, String reportDate, RdTableInfoService thisRdTableInfoService, String checkTypeC)  throws Exception {
		rdTableInfoService =thisRdTableInfoService;
		return returnValRelationOptimizeVer1(relation,dataMap,pCellList,reportDate,checkTypeC);
	}



	public static String returnValRelationExIr(String relation, Map<String, String> dataMap, List<String> pCellList, String reportDate, RdTableInfoService rdTableInfoService) {
	    rdTableInfoService1 =rdTableInfoService;
		return returnValRelation(relation,dataMap,pCellList,reportDate);
	}
	/**
	 * 替换公式中指标为指标值
	 * 
	 * @param relation
	 *            公式
	 * @param dataMap
	 *            数据Map
	 * @param pCellList
	 *            百分比单元格Map
	 * @return 转为指标值后公式
	 */
	public static String returnValRelation(String relation, Map<String, String> dataMap, List<String> pCellList, String reportDate) {
		if(relation.equals("G1103_6._A=G1103_6.1_A+G1103_6.2_A"))//=G1103_6.1_A+G1103_6.2_A
		{
			int dd=0;
			dd=1;
		}
		String noTarValue = ""; // 如果有指标未取到值，提示信息
		String valRelation = "";

		String operStr = "+-*/(){}>=<!#,?\\\"";

		String leftBracket = "([{";
		String rightBracket = ")]}";

		int bracketCou = 0;// 记录括号个数，左括号+1，右括号-1，最后=0
		String funFlag = "";// 记录公式中的数学函数，以“,”号分隔

		String tar = "";
		String oper = "";
		// 替换%以及其他关键字
		relation = relation.replace("%", "/100");
		// 最后一位多增加一位，防止公式最后一个指标或操作符不被处理
		relation = relation.concat(operStr.contains(String.valueOf(relation.charAt(relation.length() - 1))) ? "A" : "?");
        //指标信息不存在FIELD_2的报表信息需存放到fieldMap中
		Map<String, String> fieldMap = new HashMap<String, String>();
		fieldMap.put("S4100","FIELD_3");
		fieldMap.put("G0200","FIELD_2&FIELD_3");
		fieldMap.put("G0300","FIELD_1&FIELD_2");
		fieldMap.put("G1800","FIELD_2&FIELD_3");
		fieldMap.put("S4500","FIELD_2&FIELD_3");
		fieldMap.put("G0601","FIELD_1&FIELD_2&FIELD_3");
		fieldMap.put("G0602","FIELD_1&FIELD_2&FIELD_3");
		fieldMap.put("S7001","FIELD_1&FIELD_2");
		fieldMap.put("S7002","FIELD_1&FIELD_2");
		fieldMap.put("S3j00","FIELD_1&FIELD_2");
		fieldMap.put("G0101","FIELD_2&FIELD_3");
		fieldMap.put("G0603","FIELD_1");
		fieldMap.put("G1402","FIELD_1");
		fieldMap.put("G3101","FIELD_2&FIELD_3");
		fieldMap.put("G3102","FIELD_2&FIELD_3");
		if (StrUtil.isNotNull(relation)) {

			String databaseType = LocalConfig.getInstance().getDriver();
			RdTableInfoServiceImpl rdTableInfoServiceImpl =(RdTableInfoServiceImpl)rdTableInfoService;

			for (int i = 0; i < relation.length(); i++) {
				if (operStr.contains(String.valueOf(relation.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在dataMap中取以tar为key的value值相加
					if (leftBracket.contains(String.valueOf(relation.charAt(i))) && !CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
						funFlag += ",#";// 保证遇到有括号时，funFlag可以截取掉最后一个，之后内容
					}
                    if (!"".equals(tar)) {
                    	
						if (CommUtil.checkIsNum(tar)) {
							valRelation = valRelation + tar;
						}
						else
						{
							String rd="";
	                    	if(reportDate!=null){
	                    		String[] strs;
	                    		String field1="FIELD_2";
	                    		String field2="FIELD_2";
	                    		String field3="FIELD_2";
	                    		//Map<String,String> fieldMap={"S4100":"FIELD_3"};
	                    		if (tar.contains("&")) {//上月
	                    			rd = DateUtil.format(DateUtil.addMonth(DateUtil.parse(reportDate, "yyyyMM"), -1), "yyyyMM");
	                    			rd = rd +"01";
	                    			strs=tar.split("&");
	                    			if(fieldMap.get(strs[0])==null){
	                    				//不做处理
	                    			}else{
	                    				if(fieldMap.get(strs[0]).toString().contains("&")){
	                    					String[] fields = fieldMap.get(strs[0]).toString().split("&");
	                    					if(fields.length==2){
		                    					field1 = fields[0];
		                    					field2 = fields[1];
		                    					field3 = fields[1];
	                    					}else{
	                    						if(fields.length==3){
			                    					field1 = fields[0];
			                    					field2 = fields[1];
			                    					field3 = fields[2];
		                    					}
	                    					}
	                    				}else{
	                    					field1 = fieldMap.get(strs[0]).toString();
	                    					field2 = fieldMap.get(strs[0]).toString();
	                    					field3 = fieldMap.get(strs[0]).toString();
	                    				}
	                    				
	                    			}
	                    			if(strs.length==3 && tar.indexOf(".")>tar.indexOf("&") && strs[1].indexOf(".")>0 && rdTableInfoService !=null)
	                    			{String row;

	                    				if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){

	                    					row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
													 "SELECT M.FILE_ROWNUM,"+
													 "CASE WHEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"') "+
													 "WHEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')"+
													 "ELSE instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')  END AS WZ "+
													 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
													 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
													 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
													 "AND "+
													 "(instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 "+
													 "or instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 "+
													 "or instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')>0)  "+
													 "order by WZ,M.FILE_ROWNUM ) T where ROWNUM = 1");
	                    				}else{
	                    				//String row = rdTableInfoService.singleString("SELECT M.FILE_ROWNUM  FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') AND (locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  order by START_DATE DESC, locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + "))) DESC,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY");
	                    				 row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+"))) "+
												 "WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))"+
												 "ELSE locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))>0)  "+
												 "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
	                    				}
	                    				tar=strs[0]+"&"+row+"&"+strs[2];
	                    			}
	                    		}else if (tar.contains("_")) {//本期
	        						rd=DateUtil.format(DateUtil.addMonth(DateUtil.parse(reportDate, "yyyyMM"), 0), "yyyyMM");
	        						rd = rd +"01";
	        						strs=tar.split("_");
	        						if(fieldMap.get(strs[0])==null){
	                    				//不做处理
	                    			}else{
	                    				if(fieldMap.get(strs[0]).toString().contains("&")){
	                    					String[] fields = fieldMap.get(strs[0]).toString().split("&");
	                    					if(fields.length==2){
		                    					field1 = fields[0];
		                    					field2 = fields[1];
		                    					field3 = fields[1];
	                    					}else{
	                    						if(fields.length==3){
			                    					field1 = fields[0];
			                    					field2 = fields[1];
			                    					field3 = fields[2];
		                    					}
	                    					}
	                    				}else{
	                    					field1 = fieldMap.get(strs[0]).toString();
	                    					field2 = fieldMap.get(strs[0]).toString();
	                    					field3 = fieldMap.get(strs[0]).toString();
	                    				}
	                    			}
	                    			if(strs.length==3 && tar.indexOf(".")>tar.indexOf("_") && strs[1].indexOf(".")>0 && rdTableInfoService !=null)
	                    			{    	String row;
	                    				if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
	                    					 row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
													 "SELECT M.FILE_ROWNUM,"+
													 "CASE WHEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"') "+
													 "WHEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')"+
													 "ELSE instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')  END AS WZ "+
													 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
													 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
													 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
													 "AND "+
													 "(instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 "+
													 "or instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 "+
													 "or instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')>0)  "+
													 "order by WZ,M.FILE_ROWNUM ) T  where ROWNUM = 1");
	                    			    }
	                    			   else{
	                    				String sql="SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+"))) "+
												 "WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))"+
												 "ELSE locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))>0)  "+
												 "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T";
	                    				   row = rdTableInfoServiceImpl.singleString(sql);
	                    			}
	                    				tar=strs[0]+"_"+row+"_"+strs[2];
	                    			}
	        					}else if (tar.contains("~")) {//去年同期
	        						rd=RdTableUtil.getLastYearReportDate(reportDate);
	        						rd = rd +"01";
	        						strs=tar.split("~");
	        						if(fieldMap.get(strs[0])==null){
	                    				//不做处理
	                    			}else{
	                    				if(fieldMap.get(strs[0]).toString().contains("&")){
	                    					String[] fields = fieldMap.get(strs[0]).toString().split("&");
	                    					if(fields.length==2){
		                    					field1 = fields[0];
		                    					field2 = fields[1];
		                    					field3 = fields[1];
	                    					}else{
	                    						if(fields.length==3){
			                    					field1 = fields[0];
			                    					field2 = fields[1];
			                    					field3 = fields[2];
		                    					}
	                    					}
	                    				}else{
	                    					field1 = fieldMap.get(strs[0]).toString();
	                    					field2 = fieldMap.get(strs[0]).toString();
	                    					field3 = fieldMap.get(strs[0]).toString();
	                    				}
	                    			}
	                    			if(strs.length==3 && tar.indexOf(".")>tar.indexOf("~") && strs[1].indexOf(".")>0 && rdTableInfoService !=null)
	                    			{String row;
                    				if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
                    					row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"') "+
												 "WHEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 THEN locate(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')"+
												 "ELSE instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')>0)  "+
												 "order by WZ,M.FILE_ROWNUM) T where ROWNUM = 1");
                    				}else{
                    					//String row = rdTableInfoService.singleString("SELECT M.FILE_ROWNUM  FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') AND (locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  order by START_DATE DESC, locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + "))) DESC,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY");
	                    				 row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+"))) "+
												 "WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))"+
												 "ELSE locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))>0)  "+
												 "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
                    				}
	                    				tar=strs[0]+"~"+row+"~"+strs[2];
	                    			}
	        					}else if (tar.contains("^")) {//同期补报
	        						rd=DateUtil.format(DateUtil.addMonth(DateUtil.parse(reportDate, "yyyyMM"), 0), "yyyyMM");
	        						rd = rd +"01";
	        						strs=tar.split("\\^");
	        						if(fieldMap.get(strs[0])==null){
	                    				//不做处理
	                    			}else{
	                    				if(fieldMap.get(strs[0]).toString().contains("&")){
	                    					String[] fields = fieldMap.get(strs[0]).toString().split("&");
	                    					if(fields.length==2){
		                    					field1 = fields[0];
		                    					field2 = fields[1];
		                    					field3 = fields[1];
	                    					}else{
	                    						if(fields.length==3){
			                    					field1 = fields[0];
			                    					field2 = fields[1];
			                    					field3 = fields[2];
		                    					}
	                    					}
	                    				}else{
	                    					field1 = fieldMap.get(strs[0]).toString();
	                    					field2 = fieldMap.get(strs[0]).toString();
	                    					field3 = fieldMap.get(strs[0]).toString();
	                    				}
	                    			}
	                    			if(strs.length==3 && tar.indexOf(".")>tar.indexOf("^") && strs[1].indexOf(".")>0 && rdTableInfoService !=null)
	                    			{String row;
                    				if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
                    					row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"') "+
												 "WHEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')"+
												 "ELSE instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')>0)  "+
												 "order by WZ,M.FILE_ROWNUM ) T  where ROWNUM = 1");
                    				}
                    				else{
	                    				//String row = rdTableInfoService.singleString("SELECT M.FILE_ROWNUM  FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') AND (locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  order by START_DATE DESC, locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + "))) DESC,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY");
	                    				 row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+"))) "+
												 "WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))"+
												 "ELSE locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))>0)  "+
												 "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
                    				}
	                    				tar=strs[0]+"^"+row+"^"+strs[2];
	                    			}
	        					}else if (tar.contains("$")) {//上期？？？
	        						strs=tar.split("\\$");
	        						//报表类型 以此区分上期为月报，季报，半年报，年报，确定上期的日期
	        						String tabType = rdTableInfoServiceImpl.singleString("SELECT A.TAB_TYPE FROM RD_TABLE_INFO A WHERE '"+reportDate+"01' BETWEEN A.START_DATE AND A.END_DATE AND A.TABCODE='"+strs[0]+"' ORDER BY A.START_DATE DESC");
	        						rd=RdTableUtil.getLastReportDate(reportDate, tabType);
	        						rd = rd +"01";
	        						if(fieldMap.get(strs[0])==null){
	                    				//不做处理
	                    			}else{
	                    				if(fieldMap.get(strs[0]).toString().contains("&")){
	                    					String[] fields = fieldMap.get(strs[0]).toString().split("&");
	                    					if(fields.length==2){
		                    					field1 = fields[0];
		                    					field2 = fields[1];
		                    					field3 = fields[1];
	                    					}else{
	                    						if(fields.length==3){
			                    					field1 = fields[0];
			                    					field2 = fields[1];
			                    					field3 = fields[2];
		                    					}
	                    					}
	                    				}else{
	                    					field1 = fieldMap.get(strs[0]).toString();
	                    					field2 = fieldMap.get(strs[0]).toString();
	                    					field3 = fieldMap.get(strs[0]).toString();
	                    				}
	                    			}
	                    			if(strs.length==3 && tar.indexOf(".")>tar.indexOf("$") && strs[1].indexOf(".")>0 && rdTableInfoService !=null)
	                    			{String row;
                    				if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
                    					row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"') "+
												 "WHEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')"+
												 "ELSE instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')>0)  "+
												 "order by WZ,M.FILE_ROWNUM ) T where ROWNUM = 1");
                    				}
                    				else{
	                    				//String row = rdTableInfoService.singleString("SELECT M.FILE_ROWNUM  FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') AND (locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  order by START_DATE DESC, locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + "))) DESC,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY");
	                    				 row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+"))) "+
												 "WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))"+
												 "ELSE locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))>0)  "+
												 "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
	                    				 }
	                    				tar=strs[0]+"$"+row+"$"+strs[2];
	                    				
	                    			}
	        					}
	        					else if (tar.contains("@")) {//年初
	        						rd=RdTableUtil.getReportDateEndOfYear(reportDate);
	        						rd = rd +"01";
	        						strs=tar.split("@");
	        						if(fieldMap.get(strs[0])==null){
	                    				//不做处理
	                    			}else{
	                    				if(fieldMap.get(strs[0]).toString().contains("&")){
	                    					String[] fields = fieldMap.get(strs[0]).toString().split("&");
	                    					if(fields.length==2){
		                    					field1 = fields[0];
		                    					field2 = fields[1];
		                    					field3 = fields[1];
	                    					}else{
	                    						if(fields.length==3){
			                    					field1 = fields[0];
			                    					field2 = fields[1];
			                    					field3 = fields[2];
		                    					}
	                    					}
	                    				}else{
	                    					field1 = fieldMap.get(strs[0]).toString();
	                    					field2 = fieldMap.get(strs[0]).toString();
	                    					field3 = fieldMap.get(strs[0]).toString();
	                    				}
	                    			}
	                    			if(strs.length==3 && tar.indexOf(".")>tar.indexOf("@") && strs[1].indexOf(".")>0 && rdTableInfoService !=null)
	                    			{String row;
                    				if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
                    					row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"') "+
												 "WHEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')"+
												 "ELSE instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')  END AS WZ"+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')>0)  "+
												 "order by WZ,M.FILE_ROWNUM) T  WHERE ROWNUM = 1");
                    				}
                    				else{
	                    				//String row = rdTableInfoService.singleString("SELECT M.FILE_ROWNUM  FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') AND (locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 or locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  order by START_DATE DESC, locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + "))) DESC,locate('" + strs[1] + "',rtrim(ltrim(M." + field3 + "))) DESC,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY");
	                    			  row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+"))) "+
												 "WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))"+
												 "ELSE locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))  END AS WZ"+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 "+
												 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))>0)  "+
												 "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
                    				}
	                    				tar=strs[0]+"@"+row+"@"+strs[2];
	                    			}
	        					}
	                    		//上季度、半年前、年初值等等其他频度，小赵请实现一下。
	                    	}
	                    	
							if (dataMap.get(tar) == null) {
								if (CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
									valRelation = valRelation + tar;

									funFlag += ("," + tar);
								} else {
									noTarValue = noTarValue + tar + ",";
									valRelation = valRelation + "0.0";
								}
							} else {
								valRelation = valRelation + CommUtil.isZeroOrValue(dataMap.get(tar));

								// 百分比单元格则除于100
								if (pCellList != null && pCellList.contains(tar)) {
									valRelation += "/100";
								}
							}
						}
						
						

						tar = "";
					}

					if (leftBracket.contains(String.valueOf(relation.charAt(i)))) {
						bracketCou++;
					}

					if (rightBracket.contains(String.valueOf(relation.charAt(i)))) {
						bracketCou--;

						if (StrUtil.isNotNull(funFlag)) {
							funFlag = funFlag.substring(0, funFlag.lastIndexOf(","));
						}
					}

					oper = oper + String.valueOf(relation.charAt(i));
				} else {// 否则，组成报表指标字符串
					if (!"".equals(oper)) {
						if (oper.endsWith(",")) {
							if (funFlag.toUpperCase().endsWith(",SUM")) {// sum,这里是把sum(1,2,3,4)改成sum(1+2+3+4)
								oper = oper.replace(",", "+");
							} else if (funFlag.toUpperCase().endsWith(",ROUND")) {// round,这里是把round(100,4)里的,和后面的4去掉
								oper = oper.replace(",", "");
								continue;
							}
						}

						valRelation = valRelation + oper;

						oper = "";
					}

					tar = tar + relation.charAt(i);
				}
				}
		}
       valRelation = valRelation.toUpperCase().replace("ROUND", "").replace("SUM(", "(");

		if (!"".equals(noTarValue)) {// 如果公式中有指标未取到值
			valRelation = valRelation + RdTableConstants.STR_SPLIT + noTarValue;
			// System.out.println("公式中未取到指标值的指标：" + noTarValue);
		}

		if (bracketCou != 0) {
			// System.out.println("公式" + relation + "括号不对称！");
		}

		// 负数操作时自动改为+号 目前公式里不能存在类似G3301_36_B=-G3301_31_B*0.0008,
		valRelation = valRelation.replaceAll("--", "+");

		return valRelation;
	}

	
	/**
	 * 优化版本1
	 * 替换公式中指标为指标值
	 * @author Sampson
	 * @param relation
	 *            公式
	 * @param dataMap
	 *            数据Map
	 * @param pCellList
	 *            百分比单元格Map
	 * @param checkTypeC
	 *            0 表示逻辑校验 1 表示以异动校验
	 * @return 转为指标值后公式
	 */
	public static String returnValRelationOptimizeVer1(String relation, Map<String, String> dataMap,
                                                       List<String> pCellList, String reportDate, String checkTypeC) throws Exception {
		// 转换公式
		if("0".equals(checkTypeC)) {
			if (!commonFormulaMap.containsKey(relation)) {
				Map<String, String> commonTempMap = new HashMap<String, String>();
				commonTempMap = replaceFormulaPointIntoLine(relation, reportDate);
				commonFormulaMap.putAll(commonTempMap);
			} 
			String formulaLine = commonFormulaMap.get(relation);
			if (StrUtil.isNotNull(formulaLine)) {
				relation = formulaLine;
			}
		}else if("1".equals(checkTypeC)) {
			if (!waveFormulaMap.containsKey(relation)) {
				Map<String, String> commonTempMap = new HashMap<String, String>();
				commonTempMap = replaceFormulaPointIntoLine(relation, reportDate);
				waveFormulaMap.putAll(commonTempMap);
			} 
			String formulaLine = waveFormulaMap.get(relation);
			if (StrUtil.isNotNull(formulaLine)) {
				relation = formulaLine;
			}
		}

		
		String noTarValue = ""; // 如果有指标未取到值，提示信息
		String valRelation = "";

		String operStr = "+-*/(){}>=<!#,?\\\"";

		String leftBracket = "([{";
		String rightBracket = ")]}";

		int bracketCou = 0;// 记录括号个数，左括号+1，右括号-1，最后=0
		String funFlag = "";// 记录公式中的数学函数，以“,”号分隔

		String tar = "";
		String oper = "";
		// 替换%以及其他关键字
		relation = relation.replace("%", "/100");
		// 最后一位多增加一位，防止公式最后一个指标或操作符不被处理
		relation = relation
				.concat(operStr.contains(String.valueOf(relation.charAt(relation.length() - 1))) ? "A" : "?");
		if (StrUtil.isNotNull(relation)) {
			for (int i = 0; i < relation.length(); i++) {
				if (operStr.contains(String.valueOf(relation.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在dataMap中取以tar为key的value值相加
					if (leftBracket.contains(String.valueOf(relation.charAt(i)))
							&& !CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
						funFlag += ",#";// 保证遇到有括号时，funFlag可以截取掉最后一个，之后内容
					}
					if (!"".equals(tar)) {
						if (CommUtil.checkIsNum(tar)) {
							valRelation = valRelation + tar;
						} else {
							if (dataMap.get(tar) == null) {
								if (CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
									valRelation = valRelation + tar;
									funFlag += ("," + tar);
								} else {
									noTarValue = noTarValue + tar + ",";
									valRelation = valRelation + "0.0";
								}
							} else {
								valRelation = valRelation + CommUtil.isZeroOrValue(dataMap.get(tar));
								// 百分比单元格则除于100
								if (pCellList != null && pCellList.contains(tar)) {
									valRelation += "/100";
								}
							}
						}

						tar = "";
					}

					if (leftBracket.contains(String.valueOf(relation.charAt(i)))) {
						bracketCou++;
					}

					if (rightBracket.contains(String.valueOf(relation.charAt(i)))) {
						bracketCou--;

						if (StrUtil.isNotNull(funFlag)) {
							funFlag = funFlag.substring(0, funFlag.lastIndexOf(","));
						}
					}

					oper = oper + String.valueOf(relation.charAt(i));
				} else {// 否则，组成报表指标字符串
					if (!"".equals(oper)) {
						if (oper.endsWith(",")) {
							if (funFlag.toUpperCase().endsWith(",SUM")) {// sum,这里是把sum(1,2,3,4)改成sum(1+2+3+4)
								oper = oper.replace(",", "+");
							} else if (funFlag.toUpperCase().endsWith(",ROUND")) {// round,这里是把round(100,4)里的,和后面的4去掉
								oper = oper.replace(",", "");
								continue;
							}
						}
						valRelation = valRelation + oper;
						oper = "";
					}
					tar = tar + relation.charAt(i);
				}
			}
		}
		valRelation = valRelation.toUpperCase().replace("ROUND", "").replace("SUM(", "(");

		if (!"".equals(noTarValue)) {// 如果公式中有指标未取到值
			valRelation = valRelation + RdTableConstants.STR_SPLIT + noTarValue;
			// System.out.println("公式中未取到指标值的指标：" + noTarValue);
		}

		if (bracketCou != 0) {
			// System.out.println("公式" + relation + "括号不对称！");
		}

		// 负数操作时自动改为+号 目前公式里不能存在类似G3301_36_B=-G3301_31_B*0.0008,
		valRelation = valRelation.replaceAll("--", "+");

		return valRelation;
	}
	
	/**
	 * 将校验公式存储在formulaMap中，如果公式含点则将含点的公式替换为行列类型的公式，此时的key为含点的公式，value为行列的公式
	 * 如果不含点，则key和value的值相同
	 * @author Sampson
	 * @param
	 */
	public static Map<String, String> replaceFormulaPointIntoLine(String relation, String reportDate) throws Exception {
		Map<String, String> tempMap = new HashMap<String,String>();
		if(StrUtil.isNotNull(relation)) {
			List<String> tarList = RdCheckUtil.getTarListByFormula(relation);
			if(relation.indexOf(".") != -1) {
				List<String> removeRepeatTarData = new ArrayList<>();
				for(int i = 0 ; i < tarList.size() - 1 ; i ++ ) {   //去除重复指标
					if(!removeRepeatTarData.contains(tarList.get(i))) {
						removeRepeatTarData.add(tarList.get(i));
					}
				}
				Map<String, String> tarPointMap = new HashMap<>(); //key为带点的指标，value为转换后的指标，例 key : G0103_61._C   value : G0103_128_C
				Map<String, String> fieldMap = new HashMap<String, String>();
				fieldMap.put("S4100", "FIELD_3");
				fieldMap.put("G0200", "FIELD_2&FIELD_3");
				fieldMap.put("G0300", "FIELD_1&FIELD_2");
				fieldMap.put("G1800", "FIELD_2&FIELD_3");
				fieldMap.put("S4500", "FIELD_2&FIELD_3");
				fieldMap.put("G0601", "FIELD_1&FIELD_2&FIELD_3");
				fieldMap.put("G0602", "FIELD_1&FIELD_2&FIELD_3");
				fieldMap.put("S7001", "FIELD_1&FIELD_2");
				fieldMap.put("S7002", "FIELD_1&FIELD_2");
				fieldMap.put("S3j00", "FIELD_1&FIELD_2");
				fieldMap.put("G0101", "FIELD_2&FIELD_3");
				fieldMap.put("G0603", "FIELD_1");
				fieldMap.put("G1402", "FIELD_1");
				fieldMap.put("G3101", "FIELD_2&FIELD_3");
				fieldMap.put("G3102", "FIELD_2&FIELD_3");


				String databaseType = LocalConfig.getInstance().getDriver();
				RdTableInfoServiceImpl rdTableInfoServiceImpl =(RdTableInfoServiceImpl)rdTableInfoService;

				String rd = "";
				if (reportDate != null) {
					for(String tarData : removeRepeatTarData) {
	            		String[] strs = null;
	            		String field1="FIELD_2";
	            		String field2="FIELD_2";
	            		String field3="FIELD_2";
						if(tarData.indexOf(".") != -1) {
							if(tarData.contains("&")) { //上月
								rd = DateUtil.format(DateUtil.addMonth(DateUtil.parse(reportDate, "yyyyMM"), -1), "yyyyMM");
                    			rd = rd +"01";
                    			strs = tarData.split("&");
                    			
                    			if(fieldMap.get(strs[0])==null) {
                    				//不做处理
                    			}else {
                    				if(fieldMap.get(strs[0]).toString().contains("&")){
                    					String[] fields = fieldMap.get(strs[0]).toString().split("&");
                    					if(fields.length==2){
	                    					field1 = fields[0];
	                    					field2 = fields[1];
	                    					field3 = fields[1];
                    					}else{
                    						if(fields.length==3){
		                    					field1 = fields[0];
		                    					field2 = fields[1];
		                    					field3 = fields[2];
	                    					}
                    					}
                    				}else{
                    					field1 = fieldMap.get(strs[0]).toString();
                    					field2 = fieldMap.get(strs[0]).toString();
                    					field3 = fieldMap.get(strs[0]).toString();
                    				}
                    			}
                    			
                    			if(strs.length == 3 && tarData.indexOf(".") > tarData.indexOf("&") && strs[1].indexOf(".")>0) {
                    				String row = null;
                      				if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
                    					row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
												 "SELECT M.FILE_ROWNUM,"+
												 "CASE WHEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"') "+
												 "WHEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 THEN instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')"+
												 "ELSE instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')  END AS WZ "+
												 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
												 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
												 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
												 "AND "+
												 "(instr(rtrim(ltrim(M."+field1+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field2+")),'"+strs[1]+"')>0 "+
												 "or instr(rtrim(ltrim(M."+field3+")),'"+strs[1]+"')>0)  "+
												 "order by WZ,M.FILE_ROWNUM ) T where ROWNUM = 1");
                    				}else{
                    				 row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("+
											 "SELECT M.FILE_ROWNUM,"+
											 "CASE WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field1+"))) "+
											 "WHEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 THEN locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))"+
											 "ELSE locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))  END AS WZ "+
											 "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "+
											 "WHERE I.TABCODE='"+strs[0]+"' AND START_DATE<='"+rd+"' AND END_DATE>='"+rd+"' "+
											 "AND (M."+field1+" LIKE '%"+strs[1]+"%' or M."+field2+" LIKE '%"+strs[1]+"%'or M."+field3+" LIKE '%"+strs[1]+"%') "+
											 "AND "+
											 "(locate('"+strs[1]+"',rtrim(ltrim(M."+field1+")))>0 "+
											 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field2+")))>0 "+
											 "or locate('"+strs[1]+"',rtrim(ltrim(M."+field3+")))>0)  "+
											 "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
                    				}
                      				String lineTar = strs[0]+"&"+row+"&"+strs[2];
                      				tarPointMap.put(tarData, lineTar);
                    			}
							}
							/***************上月END********************/
							else if (tarData.contains("_")) {// 本期
								rd = DateUtil.format(DateUtil.addMonth(DateUtil.parse(reportDate, "yyyyMM"), 0),
										"yyyyMM");
								rd = rd + "01";
								strs = tarData.split("_");
								if (fieldMap.get(strs[0]) == null) {
									// 不做处理
								} else {
									if (fieldMap.get(strs[0]).toString().contains("&")) {
										String[] fields = fieldMap.get(strs[0]).toString().split("&");
										if (fields.length == 2) {
											field1 = fields[0];
											field2 = fields[1];
											field3 = fields[1];
										} else {
											if (fields.length == 3) {
												field1 = fields[0];
												field2 = fields[1];
												field3 = fields[2];
											}
										}
									} else {
										field1 = fieldMap.get(strs[0]).toString();
										field2 = fieldMap.get(strs[0]).toString();
										field3 = fieldMap.get(strs[0]).toString();
									}
								}
								if (strs.length == 3 && tarData.indexOf(".") > tarData.indexOf("_")
										&& strs[1].indexOf(".") > 0) // && rdTableInfoService!=null
								{
									String row;
									if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
										row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM (" + "SELECT M.FILE_ROWNUM,"
												+ "CASE WHEN instr(rtrim(ltrim(M." + field1 + ")),'" + strs[1]
												+ "')>0 THEN instr(rtrim(ltrim(M." + field1 + ")),'" + strs[1] + "') "
												+ "WHEN instr(rtrim(ltrim(M." + field2 + ")),'" + strs[1]
												+ "')>0 THEN instr(rtrim(ltrim(M." + field2 + ")),'" + strs[1] + "')"
												+ "ELSE instr(rtrim(ltrim(M." + field3 + ")),'" + strs[1]
												+ "')  END AS WZ "
												+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
												+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
												+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
												+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
												+ field3 + " LIKE '%" + strs[1] + "%') " + "AND "
												+ "(instr(rtrim(ltrim(M." + field1 + ")),'" + strs[1] + "')>0 "
												+ "or instr(rtrim(ltrim(M." + field2 + ")),'" + strs[1] + "')>0 "
												+ "or instr(rtrim(ltrim(M." + field3 + ")),'" + strs[1] + "')>0)  "
												+ "order by WZ,M.FILE_ROWNUM ) T  where ROWNUM = 1");
									} else {
										String sql = "SELECT T.FILE_ROWNUM FROM (" + "SELECT M.FILE_ROWNUM,"
												+ "CASE WHEN locate('" + strs[1] + "',rtrim(ltrim(M." + field1
												+ ")))>0 THEN locate('" + strs[1] + "',rtrim(ltrim(M." + field1 + "))) "
												+ "WHEN locate('" + strs[1] + "',rtrim(ltrim(M." + field2
												+ ")))>0 THEN locate('" + strs[1] + "',rtrim(ltrim(M." + field2 + ")))"
												+ "ELSE locate('" + strs[1] + "',rtrim(ltrim(M." + field3
												+ ")))  END AS WZ "
												+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
												+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
												+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
												+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
												+ field3 + " LIKE '%" + strs[1] + "%') " + "AND " + "(locate('"
												+ strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 " + "or locate('"
												+ strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 " + "or locate('"
												+ strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  "
												+ "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T";
										row = rdTableInfoServiceImpl.singleString(sql);
									}
									String lineTar = strs[0] + "_" + row + "_" + strs[2];
									tarPointMap.put(tarData, lineTar);
								}
								/***************本期END********************/
								
								else if (tarData.contains("~")) {// 去年同期
									rd = RdTableUtil.getLastYearReportDate(reportDate);
									rd = rd + "01";
									strs = tarData.split("~");
									if (fieldMap.get(strs[0]) == null) {
										// 不做处理
									} else {
										if (fieldMap.get(strs[0]).toString().contains("&")) {
											String[] fields = fieldMap.get(strs[0]).toString().split("&");
											if (fields.length == 2) {
												field1 = fields[0];
												field2 = fields[1];
												field3 = fields[1];
											} else {
												if (fields.length == 3) {
													field1 = fields[0];
													field2 = fields[1];
													field3 = fields[2];
												}
											}
										} else {
											field1 = fieldMap.get(strs[0]).toString();
											field2 = fieldMap.get(strs[0]).toString();
											field3 = fieldMap.get(strs[0]).toString();
										}
									}
									if (strs.length == 3 && tarData.indexOf(".") > tarData.indexOf("~")
											&& strs[1].indexOf(".") > 0 && rdTableInfoService != null) {
										String row;
										if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "')>0 THEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "') " + "WHEN instr(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')>0 THEN locate(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')" + "ELSE instr(rtrim(ltrim(M."
													+ field3 + ")),'" + strs[1] + "')  END AS WZ "
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND "
													+ "(instr(rtrim(ltrim(M." + field1 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field2 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field3 + ")),'" + strs[1] + "')>0)  "
													+ "order by WZ,M.FILE_ROWNUM) T where ROWNUM = 1");
										} else {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + "))) " + "WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))" + "ELSE locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field3 + ")))  END AS WZ "
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND " + "(locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  "
													+ "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
										}
										String lineTar = strs[0] + "~" + row + "~" + strs[2];
										tarPointMap.put(tarData, lineTar);
									}
								}
								/***************去年同期END********************/
								
								else if (tarData.contains("^")) {// 同期补报
									rd = DateUtil.format(DateUtil.addMonth(DateUtil.parse(reportDate, "yyyyMM"), 0),
											"yyyyMM");
									rd = rd + "01";
									strs = tarData.split("\\^");
									if (fieldMap.get(strs[0]) == null) {
										// 不做处理
									} else {
										if (fieldMap.get(strs[0]).toString().contains("&")) {
											String[] fields = fieldMap.get(strs[0]).toString().split("&");
											if (fields.length == 2) {
												field1 = fields[0];
												field2 = fields[1];
												field3 = fields[1];
											} else {
												if (fields.length == 3) {
													field1 = fields[0];
													field2 = fields[1];
													field3 = fields[2];
												}
											}
										} else {
											field1 = fieldMap.get(strs[0]).toString();
											field2 = fieldMap.get(strs[0]).toString();
											field3 = fieldMap.get(strs[0]).toString();
										}
									}
									if (strs.length == 3 && tarData.indexOf(".") > tarData.indexOf("^")
											&& strs[1].indexOf(".") > 0 && rdTableInfoService != null) {
										String row;
										if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "')>0 THEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "') " + "WHEN instr(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')>0 THEN instr(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')" + "ELSE instr(rtrim(ltrim(M."
													+ field3 + ")),'" + strs[1] + "')  END AS WZ "
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND "
													+ "(instr(rtrim(ltrim(M." + field1 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field2 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field3 + ")),'" + strs[1] + "')>0)  "
													+ "order by WZ,M.FILE_ROWNUM ) T  where ROWNUM = 1");
										} else {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + "))) " + "WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))" + "ELSE locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field3 + ")))  END AS WZ "
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND " + "(locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  "
													+ "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
										}
										String lineTar = strs[0] + "^" + row + "^" + strs[2];
										tarPointMap.put(tarData, lineTar);
									}
								}
								/***************同期补报END********************/
								
								else if (tarData.contains("$")) {// 上期
									strs = tarData.split("\\$");
									// 报表类型 以此区分上期为月报，季报，半年报，年报，确定上期的日期
									String tabType = rdTableInfoServiceImpl.singleString("SELECT A.TAB_TYPE FROM RD_TABLE_INFO A WHERE '"
											+ reportDate + "01' BETWEEN A.START_DATE AND A.END_DATE AND A.TABCODE='"
											+ strs[0] + "' ORDER BY A.START_DATE DESC");
									rd = RdTableUtil.getLastReportDate(reportDate, tabType);
									rd = rd + "01";
									if (fieldMap.get(strs[0]) == null) {
										// 不做处理
									} else {
										if (fieldMap.get(strs[0]).toString().contains("&")) {
											String[] fields = fieldMap.get(strs[0]).toString().split("&");
											if (fields.length == 2) {
												field1 = fields[0];
												field2 = fields[1];
												field3 = fields[1];
											} else {
												if (fields.length == 3) {
													field1 = fields[0];
													field2 = fields[1];
													field3 = fields[2];
												}
											}
										} else {
											field1 = fieldMap.get(strs[0]).toString();
											field2 = fieldMap.get(strs[0]).toString();
											field3 = fieldMap.get(strs[0]).toString();
										}
									}
									if (strs.length == 3 && tarData.indexOf(".") > tarData.indexOf("$")
											&& strs[1].indexOf(".") > 0 && rdTableInfoService != null) {
										String row;
										if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "')>0 THEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "') " + "WHEN instr(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')>0 THEN instr(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')" + "ELSE instr(rtrim(ltrim(M."
													+ field3 + ")),'" + strs[1] + "')  END AS WZ "
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND "
													+ "(instr(rtrim(ltrim(M." + field1 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field2 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field3 + ")),'" + strs[1] + "')>0)  "
													+ "order by WZ,M.FILE_ROWNUM ) T where ROWNUM = 1");
										} else {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + "))) " + "WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))" + "ELSE locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field3 + ")))  END AS WZ "
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND " + "(locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  "
													+ "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
										}
										String lineTar = strs[0] + "$" + row + "$" + strs[2];
										tarPointMap.put(tarData, lineTar);
									}
								}
								/***************上期END********************/
								
								else if (tarData.contains("@")) {// 年初
									rd = RdTableUtil.getReportDateEndOfYear(reportDate);
									rd = rd + "01";
									strs = tarData.split("@");
									if (fieldMap.get(strs[0]) == null) {
										// 不做处理
									} else {
										if (fieldMap.get(strs[0]).toString().contains("&")) {
											String[] fields = fieldMap.get(strs[0]).toString().split("&");
											if (fields.length == 2) {
												field1 = fields[0];
												field2 = fields[1];
												field3 = fields[1];
											} else {
												if (fields.length == 3) {
													field1 = fields[0];
													field2 = fields[1];
													field3 = fields[2];
												}
											}
										} else {
											field1 = fieldMap.get(strs[0]).toString();
											field2 = fieldMap.get(strs[0]).toString();
											field3 = fieldMap.get(strs[0]).toString();
										}
									}
									if (strs.length == 3 && tarData.indexOf(".") > tarData.indexOf("@")
											&& strs[1].indexOf(".") > 0 && rdTableInfoService != null) {
										String row;
										if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "')>0 THEN instr(rtrim(ltrim(M."
													+ field1 + ")),'" + strs[1] + "') " + "WHEN instr(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')>0 THEN instr(rtrim(ltrim(M."
													+ field2 + ")),'" + strs[1] + "')" + "ELSE instr(rtrim(ltrim(M."
													+ field3 + ")),'" + strs[1] + "')  END AS WZ"
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND "
													+ "(instr(rtrim(ltrim(M." + field1 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field2 + ")),'" + strs[1] + "')>0 "
													+ "or instr(rtrim(ltrim(M." + field3 + ")),'" + strs[1] + "')>0)  "
													+ "order by WZ,M.FILE_ROWNUM) T  WHERE ROWNUM = 1");
										} else {
											row = rdTableInfoServiceImpl.singleString("SELECT T.FILE_ROWNUM FROM ("
													+ "SELECT M.FILE_ROWNUM," + "CASE WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field1 + "))) " + "WHEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))>0 THEN locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field2 + ")))" + "ELSE locate('" + strs[1]
													+ "',rtrim(ltrim(M." + field3 + ")))  END AS WZ"
													+ "FROM RD_TABLE_MODEL M LEFT JOIN RD_TABLE_INFO I ON I.TABLE_ID=M.TABLE_ID "
													+ "WHERE I.TABCODE='" + strs[0] + "' AND START_DATE<='" + rd
													+ "' AND END_DATE>='" + rd + "' " + "AND (M." + field1 + " LIKE '%"
													+ strs[1] + "%' or M." + field2 + " LIKE '%" + strs[1] + "%'or M."
													+ field3 + " LIKE '%" + strs[1] + "%') " + "AND " + "(locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field1 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field2 + ")))>0 " + "or locate('"
													+ strs[1] + "',rtrim(ltrim(M." + field3 + ")))>0)  "
													+ "order by WZ,M.FILE_ROWNUM FETCH FIRST 1 ROWS ONLY) T");
										}
										String lineTar = strs[0] + "@" + row + "@" + strs[2];
										tarPointMap.put(tarData, lineTar);
									}
								}
								/***************年初END********************/
							}
						}
					}
				}
				
				//此时tarPointMap已存储点指标与行指标的对应关系
				if(!tarPointMap.isEmpty()) {
					String lineRelation = relation;
					for(Map.Entry<String, String> entry : tarPointMap.entrySet()) {
						String pointTar = entry.getKey();
						String lineTar = entry.getValue();
						lineRelation = lineRelation.replace(pointTar, lineTar);
					}
					if(StrUtil.isNotNull(lineRelation)) {
						tempMap.put(relation, lineRelation);
					}
				}
			}else {
				tempMap.put(relation, relation);
			}
		}
		return tempMap;
	}
	
	
	/**
	 * 根据funKey，截取对应的子句
	 * 
	 * @param formula
	 *            公式
	 * @param funKey
	 *            函数名称(如：SUMIF,AND)
	 * @return 公式中函数对应的子句
	 */
	public static String getSubFormula(String formula, String funKey) {
		String subFormula = "";

		String operStr = "+-*/(){}>=<!#,?\\";

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

		if (StrUtil.isNotNull(formula)) {
			for (int i = 0; i < formula.length(); i++) {
				if (operStr.contains(String.valueOf(formula.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在dataMap中取以tar为key的value值相加
					if (leftBracket.contains(String.valueOf(formula.charAt(i))) && !CommUtil.isContain(RdTableConstants.KEY_WORDS, tar) && !"".equals(funFlag)) {
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

						if (StrUtil.isNotNull(funFlag)) {
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

		// 负数操作时自动改为+号
		subFormula = subFormula.replaceAll("--", "+");

		return subFormula;
	}

	/**
	 * 处理sumIf函数 计算sumIf函数值，并替换公式中sumIf函数部分为对应值后的公式
	 * 
	 * @param formula
	 *            公式
	 * @return
	 */
	public static String sumIf(String formula) {
		double returnVal = 0.0;// 计算值

		String returnFormula = "";// 返回值

		String sumifFormula = getSubFormula(formula, "SUMIF");

		String[] subFormalas = sumifFormula.substring(0, sumifFormula.length() - 1).replace("SUMIF(", "").split(",");

		// 条件语句（两个，强两部分组成）
		String conFormula1 = subFormalas[0];
		String conFormula2 = subFormalas[1];

		// 计算语句（第三部分，如果没有，则为第一部分）
		String sumFormula = "";
		if (subFormalas.length == 3) {
			sumFormula = subFormalas[2];
		} else {
			sumFormula = subFormalas[0];
		}

		// 处理计算
		String operStr = "";// 比较符
		double dFormula2Val = 0.0;

		if (!"".equals(CommUtil.getOperStr(conFormula2.replace("\"", "")))) {
			operStr = CommUtil.getOperStr(conFormula2.replace("\"", ""));
			dFormula2Val = Double.parseDouble(conFormula2.replace("\"", "").replace(operStr, ""));
		} else {
			operStr = "=";
			dFormula2Val = Double.parseDouble(conFormula2);
		}

		String[] tars = sumFormula.split("\\+");
		double conVal = 0.0;
		double tarVal = 0.0;
		for (int i = 0; i < conFormula1.split("\\+").length; i++) {
			conVal = Double.parseDouble(conFormula1.split("\\+")[i]);

			if (CommUtil.compareValue(conVal, dFormula2Val, operStr, RdTableConstants.DIFF_VALUE0)) {
				tarVal = Double.parseDouble(tars[i]);

				returnVal += tarVal;
			}
		}

		returnFormula = formula.replace(sumifFormula, String.valueOf(returnVal));

		if (returnFormula.contains("SUMIF(")) {
			returnFormula = sumIf(returnFormula);
		}

		return returnFormula;
	}

	/**
	 * 处理countIf函数
	 * 例如G4D表中=IF(OR(C7>0,D7>0,E7>0),SUMIF(C7:E7,">0")*F7/COUNTIF(C7:E7,">0"),0)
	 * 
	 * @param formula
	 *            公式
	 * @return
	 */
	public static String countIf(String formula) {
		int returnVal = 0;// 计算值

		String returnFormula = "";

		String countifFormula = getSubFormula(formula, "COUNTIF");

		String[] subFormalas = countifFormula.substring(0, countifFormula.length() - 1).replace("COUNTIF(", "").split(",");

		// 条件语句（两个，强两部分组成）
		String conFormula1 = subFormalas[0];
		String conFormula2 = subFormalas[1];

		// 处理计算
		String operStr = "";// 比较符
		double dFormula2Val = 0.0;
		if (!"".equals(CommUtil.getOperStr(conFormula2.replace("\"", "")))) {
			operStr = CommUtil.getOperStr(conFormula2.replace("\"", ""));
			dFormula2Val = Double.parseDouble(conFormula2.replace("\"", "").replace(operStr, ""));
		} else {
			operStr = "=";
			dFormula2Val = Double.parseDouble(conFormula2);
		}

		double conVal = 0.0;
		for (int i = 0; i < conFormula1.split("\\+").length; i++) {
			conVal = Double.parseDouble(conFormula1.split("\\+")[i]);

			if (CommUtil.compareValue(conVal, dFormula2Val, operStr, RdTableConstants.DIFF_VALUE0)) {
				returnVal += 1;
			}
		}

		returnFormula = formula.replace(countifFormula, String.valueOf(returnVal));

		if (returnFormula.toUpperCase().contains("COUNTIF(")) {
			returnFormula = countIf(returnFormula);
		}

		return returnFormula;
	}

	/**
	 * 处理or或and函数
	 * 
	 * @param formula
	 *            公式
	 * @param funName
	 *            or,and
	 * @return
	 */
	public static String andOr(String formula, String funName) {
		if (!formula.contains(funName)) {
			return formula;
		}

		String andOrFormula = getSubFormula(formula, funName);

		String[] subFormalas = andOrFormula.substring(0, andOrFormula.length() - 1).replace(funName + "(", "").split(",");

		// 处理计算
		double leftValue = 0.0;
		double rightValue = 0.0;
		String operStr = "";

		for (int i = 0; i < subFormalas.length; i++) {
			operStr = CommUtil.getOperStr(subFormalas[i]);

			leftValue = Double.parseDouble(CalStr.calculate(CalStr.strCast(subFormalas[i].split(operStr)[0])));
			rightValue = Double.parseDouble(CalStr.calculate(CalStr.strCast(subFormalas[i].split(operStr)[1])));

			if ("OR".equals(funName)) {
				if (CommUtil.compareValue(leftValue, rightValue, operStr, RdTableConstants.DIFF_VALUE0)) {
					return andOr(formula.replace(andOrFormula, "true"), funName);
				}
			}

			if ("AND".equals(funName)) {
				if (!CommUtil.compareValue(leftValue, rightValue, operStr, RdTableConstants.DIFF_VALUE0)) {
					return andOr(formula.replace(andOrFormula, "false"), funName);
				}
			}
		}

		if ("OR".equals(funName)) {
			return andOr(formula.replace(andOrFormula, "false"), funName);
		} else {
			return andOr(formula.replace(andOrFormula, "true"), funName);
		}

	}

	/**
	 * 校验单条普通公式,返回校验结果
	 * 
	 * @param relation
	 *            校验公式
	 * @param checkResult
	 *            校验结果
	 * @param valRelation
	 *            指标值公式
	 * @return 校验结果
	 */
	public static void getRelationResult(String relation, StringBuffer checkResult, String valRelation, String deviationValue, List<String> pCellList) {
		DecimalFormat df2 = new DecimalFormat("0.00");// double类型数值精度
		DecimalFormat df4 = new DecimalFormat("0.0000");// double类型数值精度
		double leftValue = 0.0;
		double rightValue = 0.0;
		if ("true".equals(relation)) {
			return;
		}
		// 获取公式中间比较运算符
		String operStr = CommUtil.getOperStr(valRelation);
		if ("".equals(operStr)) {
			checkResult.append("公式中, 不存在中间比较运算符！");
			// checkResult.append("公式：" + relation + " 不存在中间比较运算符！");
			return;
		}

		if (valRelation.contains("#")) {
			checkResult.append("公式中指标 " + valRelation.split("#")[1].substring(0, (valRelation.split("#")[1]).length() - 1) + " 未取到值！");
			// checkResult.append("公式[" + relation + "]中指标 " +
			// valRelation.split("#")[1].substring(0,
			// (valRelation.split("#")[1]).length() - 1)
			// + " 未取到值，校验结果可能有误！");
		} else {
			String[] relations = valRelation.split(RdTableConstants.STR_SPLIT)[0].split(operStr);// 根据比较运算符拆分

			if (relations != null && relations.length > 1) {
				// 百分比单元格保留4位，其他保留2位
				// 小数有时候会出现将0.055变成0.054999999情况，所以这里加上不影响实际四舍五入的0.0001
				if (pCellList != null && pCellList.contains(relation.split(operStr)[0])) {// 百分比
					leftValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[0]))) + 0.00000001) * 100));
					rightValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[1]))) + 0.00000001) * 100));
				} else {
					leftValue = Double.parseDouble(df2.format(Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[0]))) + 0.0001));
					rightValue = Double.parseDouble(df2.format(Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[1]))) + 0.0001));
				}
				if (!CommUtil.compareValue(leftValue, rightValue, operStr, deviationValue)) {
					//S7101去掉计算利率时分子分母为0的情况
					if((relation.startsWith("S7101")||relation.startsWith("S7102")||relation.startsWith("S7103"))&&relation.contains("/")&&leftValue==0&&operStr.contains(">")){
						String[] values=relations[0].split("/");
						if (Double.parseDouble(values[0])==0&& Double.parseDouble(values[1])==0) {
							//都为0则算正确
						}else {
							checkResult.append("公式不通过[ " + valRelation + " ]：[左边值：" + df4.format(leftValue) + "，右边值：" + df4.format(rightValue) + "，差值：" + df4.format(Arith.sub(leftValue, rightValue)) + "]"
									+ (StrUtil.isNotNull(deviationValue) ? "，超出了允许误差值:[" + deviationValue + "]" : " "));
						}
					}else{
						checkResult.append("公式不通过[ " + valRelation + " ]：[左边值：" + df4.format(leftValue) + "，右边值：" + df4.format(rightValue) + "，差值：" + df4.format(Arith.sub(leftValue, rightValue)) + "]"
								+ (StrUtil.isNotNull(deviationValue) ? "，超出了允许误差值:[" + deviationValue + "]" : " "));
					}
		
					// checkResult.append("公式[" + relation + "]不能通过：[左边值：" +
					// df4.format(leftValue) + "，右边值：" + df4.format(rightValue)
					// + "，差值："
					// + df4.format(Arith.sub(leftValue, rightValue)) + "]，"
					// + (StrUtil.isNotNull(deviationValue) ? "超出了允许误差值:[" +
					// deviationValue + "]" : "不允许有误差"));
				}
			}
		}
	}

	
	public static void getRelationResultFun(String relation, StringBuffer checkResult, String valRelation, String deviationValue, List<String> pCellList, int flag) {
		DecimalFormat df2 = new DecimalFormat("0.00");// double类型数值精度
		DecimalFormat df4 = new DecimalFormat("0.0000");// double类型数值精度
		double leftValue = 0.0;
		double rightValue = 0.0;
		if ("true".equals(relation)) {
			return;
		}
		// 获取公式中间比较运算符
		String operStr = CommUtil.getOperStr(valRelation);
		if ("".equals(operStr)) {
			checkResult.append("公式中, 不存在中间比较运算符！");
			// checkResult.append("公式：" + relation + " 不存在中间比较运算符！");
			return;
		}

		if (valRelation.contains("#")) {
			checkResult.append("公式中指标 " + valRelation.split("#")[1].substring(0, (valRelation.split("#")[1]).length() ) + " 未取到值！");
		} else {
			String[] relations = valRelation.split(RdTableConstants.STR_SPLIT)[0].split(operStr);// 根据比较运算符拆分

			if (relations != null && relations.length > 1) {
				// 百分比单元格保留4位，其他保留2位
				// 小数有时候会出现将0.055变成0.054999999情况，所以这里加上不影响实际四舍五入的0.0001
				if(flag == 0){
					String[] rightFormula = relations[1].split("/");
					if(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(rightFormula[0]))))))==0.00&&(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(rightFormula[1]))))))==0.00)){
					}else if(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(rightFormula[1]))))))==0.00&&(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(rightFormula[0]))))))!=0.00)){
						checkResult.append("∞");
					}
					leftValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[0]))) + 0.00000001)));
					rightValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[1]))) + 0.00000001)));
					if (!CommUtil.compareValue(leftValue, rightValue, operStr, deviationValue)) {
						if(checkResult.length()==0){
							checkResult.append("" + df2.format(rightValue*100)+"%");
						}
					}
				}else{
					String[] leftFormula = relations[0].split("/");
					if(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(leftFormula[0]))))))==0.00&&(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(leftFormula[1]))))))==0.00)){
					}else if(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(leftFormula[1]))))))==0.00&&(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(leftFormula[0]))))))!=0.00)){
						if(checkResult.length()==0){
							checkResult.append("∞");
						}
					}
					leftValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[0]))) + 0.00000001)));
					rightValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[1]))) + 0.00000001)));
					if (!CommUtil.compareValue(leftValue, rightValue, operStr, deviationValue)) {
						if(checkResult.length()==0){
							checkResult.append("" + df2.format(leftValue*100)+"%");
						}
					}
				}
				/*if(flag == 0){
					String[] rightFormula = relations[1].split("/");
					if(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(rightFormula[1]))) + 0.00000001)))==0.00&&(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(rightFormula[1]))) + 0.00000001)))!=0.00)){
						checkResult.append("∞");
					}
				}else{
					String[] leftFormula = relations[0].split("/");
					if(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(leftFormula[1]))) + 0.00000001)))==0.00&&(Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(leftFormula[1]))) + 0.00000001)))!=0.00)){
						if(checkResult.length()==0){
							checkResult.append("∞");
						}
					}
				}*/
				/*leftValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[0]))) + 0.00000001)));
				rightValue = Double.parseDouble(df4.format((Double.parseDouble(CalStr.calculate(CalStr.strCast(relations[1]))) + 0.00000001)));*/
				
				/*if (!CommUtil.compareValue(leftValue, rightValue, operStr, deviationValue)) {
					if(flag==0){
						if(checkResult.length()==0){
							checkResult.append("" + df2.format(rightValue*100)+"%");
						}
					}else{
						if(checkResult.length()==0){
							checkResult.append("" + df2.format(leftValue*100)+"%");
						}
					}
				}*/
			}
		}
	}

	/**
	 * 复杂公式校验（含if...else...）,返回校验结果
	 * 
	 * @param relation
	 *            校验公式
	 * @param checkResult
	 *            校验结果
	 * @param valRelation
	 *            指标值公式
	 * @return 校验结果
	 */

	public static void getComplexRelationResult(String relation, StringBuffer checkResult, String valRelation, String deviationValue, List<String> pCellList) {

		String relPre = "";
		String relPreVal = "";
		if (relation.indexOf("IF(") != 0) {
			relPre = relation.substring(0, relation.indexOf("=") + 1);
			relPreVal = valRelation.substring(0, valRelation.indexOf("=") + 1);
		}

		String preRel = relPre + relation.substring(relation.indexOf("{") + 1, relation.indexOf("}"));

		String conRelVal = valRelation.substring(valRelation.indexOf("(") + 1, valRelation.indexOf("{") - 1);
		String preRelVal = relPreVal + valRelation.substring(valRelation.indexOf("{") + 1, valRelation.indexOf("}"));

		String nextRel = "";
		String nextRelVal = "";
		if (relation.toUpperCase().contains("ELSE")) {
			nextRel = relPre + relation.substring(relation.indexOf("ELSE{") + 5, relation.lastIndexOf("}"));
			nextRelVal = relPreVal + valRelation.substring(valRelation.indexOf("ELSE{") + 5, valRelation.lastIndexOf("}"));
		}

		if (relation.toUpperCase().indexOf("IF(") != -1) {
			if ("true".equals(conRelVal)) {
				if (preRel.contains("IF(") && !"SUM".equals(preRel.toUpperCase().substring(preRel.toUpperCase().indexOf("IF(") - 3, preRel.toUpperCase().indexOf("IF(")))
						&& !"COUNT".equals(relation.toUpperCase().substring(relation.toUpperCase().indexOf("IF(") - 5, preRel.toUpperCase().indexOf("IF(")))) {
					getComplexRelationResult(preRel, new StringBuffer(), preRelVal, deviationValue, pCellList);
				} else {

					getRelationResult(preRel, checkResult, preRelVal, deviationValue, pCellList);

				}
			} else if ("false".equals(conRelVal)) {
				if (nextRel.contains("IF(") && !"SUM".equals(nextRel.toUpperCase().substring(nextRel.toUpperCase().indexOf("IF(") - 3, nextRel.toUpperCase().indexOf("IF(")))
						&& !"COUNT".equals(relation.toUpperCase().substring(nextRel.toUpperCase().indexOf("IF(") - 5, nextRel.toUpperCase().indexOf("IF(")))) {
					getComplexRelationResult(nextRel, new StringBuffer(), nextRelVal, deviationValue, pCellList);
				} else {

					getRelationResult(nextRel, checkResult, nextRelVal, deviationValue, pCellList);

				}
			} else {
				String operStr = CommUtil.getOperStr(conRelVal);

				String leftValue = CalStr.calculate(CalStr.strCast(conRelVal.split(operStr)[0]));
				String rightValue = CalStr.calculate(CalStr.strCast(conRelVal.split(operStr)[1]));

				if (CommUtil.compareValue(Double.parseDouble(leftValue), Double.parseDouble(rightValue), operStr, RdTableConstants.DIFF_VALUE0)) {
					if (preRel.contains("IF(") && !"SUM".equals(preRel.toUpperCase().substring(preRel.toUpperCase().indexOf("IF(") - 3, preRel.toUpperCase().indexOf("IF(")))
							&& !"COUNT".equals(relation.toUpperCase().substring(preRel.toUpperCase().indexOf("IF(") - 5, preRel.toUpperCase().indexOf("IF(")))) {
						getComplexRelationResult(preRel, new StringBuffer(), preRelVal, deviationValue, pCellList);
					} else {

						getRelationResult(preRel, checkResult, preRelVal, deviationValue, pCellList);

					}
				} else {
					if (nextRel.contains("IF(") && !"SUM".equals(nextRel.toUpperCase().substring(nextRel.toUpperCase().indexOf("IF(") - 3, nextRel.toUpperCase().indexOf("IF(")))
							&& !"COUNT".equals(relation.toUpperCase().substring(nextRel.toUpperCase().indexOf("IF(") - 5, nextRel.toUpperCase().indexOf("IF(")))) {
						getComplexRelationResult(nextRel, new StringBuffer(), nextRelVal, deviationValue, pCellList);
					} else {

						getRelationResult(nextRel, checkResult, nextRelVal, deviationValue, pCellList);

					}
				}
			}
		}
	}

	/**
	 * 解析含冒号的excel公式
	 * 
	 * @param formula
	 *            含冒号的公式
	 * @param tabcode
	 *            报表代码
	 * @param rowInfos
	 *            行信息
	 * @param colMapList
	 *            Map<文件列，数据表列>
	 * @return 解析后公式
	 */
	public static String parseColonFormula(String formula, String tabcode, String[] rowInfos, List<Map<String, String>> colMapList) {
		String orderStr = "";// 顺序串，遇到SUM时，拼接标记&，遇到IF时，拼接标记@,遇到ROUND,拼接标记！

		String operStr = "+-*/(){}>=<=!@&,";
		String relation = "";
		formula = formula.replace("SUMIF", "SAAAF").replace("COUNTIF", "CAAAAAF");
		formula = formula.replace("ROUND", "!").replace("IF", "@").replace("SUM", "&");
		formula = formula.replace("SAAAF", "SUMIF").replace("CAAAAAF", "COUNTIF");

		String tar = "";
		String oper = "";

		for (int i = 0; i < formula.length(); i++) {
			if (operStr.contains(String.valueOf(formula.charAt(i)))) {// 遇到operStr中包含的比较运算符时，拆分指标，变为需要项目需要格式
				if (!"".equals(tar)) {
					if (tar.contains(":")) {
						relation = relation + parseCloneTarColon(tar);
					} else {
						relation = relation + tar;
					}
					tar = "";
				}

				oper = oper + String.valueOf(formula.charAt(i));
			} else {// 否则，组成报表指标字符串
				if (!"".equals(oper)) {
					if (oper.contains("!(")) {
						orderStr = orderStr + "!";
					}
					if (oper.contains("&(")) {
						orderStr = orderStr + "&";
					}
					if (oper.contains("@(")) {
						orderStr = orderStr + "@";
					}
					if ("(".equals(oper)) {
						orderStr = orderStr + "#";
					}
					if (")".equals(oper)) {
						orderStr = orderStr.substring(0, orderStr.length() - 1);
					}

					if (",".equals(oper)) {
						if (orderStr.endsWith("@")) {
							oper = "){";
							orderStr = orderStr + "$";
						} else if (orderStr.endsWith("$")) {
							oper = "}ELSE{";
							orderStr = orderStr.substring(0, orderStr.length() - 1);
						} else if (orderStr.endsWith("&")) {
							oper = "+";
						}
					}

					relation = relation + oper;

					oper = "";
				}

				tar = tar + formula.charAt(i);

			}
		}
		// 增加最后一个指标或操作符
		if (!"".equals(tar)) {
			relation = relation + tar;
		} else if (!"".equals(oper)) {
			if (orderStr.endsWith("@") && ")".equals(oper)) {
				oper = "}";
				orderStr = "";
			}

			relation = relation + oper;
		}

		// 调用一般公式的解析方法
		relation = parseNormalFomula(relation, tabcode, rowInfos, colMapList);

		return relation;
	}

	/**
	 * 解析F3:F8或A1:G1类似的公式
	 * 
	 * @param shortFormula
	 * @return
	 */
	public static String parseCloneTarColon(String shortFormula) {
		String[] tars = shortFormula.split(":");

		String newFormula = "";

		// 拆分行列
		String[] array1 = CommUtil.splitCharNumStr(tars[0]);
		String[] array2 = CommUtil.splitCharNumStr(tars[1]);

		if (array1[0] != null && array1[1] != null && array2[0] != null && array2[1] != null) {

			if (array1[0].equals(array2[0])) {// A1:G1格式
				for (int i = CommUtil.getSeq(array1[1]) - 1; i < CommUtil.getSeq(array2[1]); i++) {
					newFormula = ("".equals(newFormula) ? "" : newFormula + "+") + CommUtil.getParamName("", i) + array1[0];
				}
			} else if (array1[1].equals(array2[1])) {// F3:F8格式
				for (int i = Integer.parseInt(array1[0]) - 1; i < Integer.parseInt(array2[0]); i++) {
					newFormula = ("".equals(newFormula) ? "" : newFormula + "+") + array1[1] + (i + 1);
				}
			}

		} else {
			return shortFormula;
		}

		return newFormula;
	}

	/**
	 * 解析excel里的一般公式
	 * 
	 * @param formula
	 *            含冒号的公式
	 * @param tabcode
	 *            报表代码
	 * @param rowInfos
	 *            行信息
	 * @param colMapList
	 *            Map<文件列，数据表列>
	 * @return 解析后公式
	 */
	public static String parseNormalFomula(String formula, String tabcode, String[] rowInfos, List<Map<String, String>> colMapList) {
		String orderStr = "";// 顺序串，遇到SUM时，拼接标记&，遇到IF时，拼接标记@,遇到ROUND,拼接标记！
		String operStr = "+-*/(){}>=<=!@&,";
		String relation = "";
		formula = formula.replace("SUMIF", "SAAAF").replace("COUNTIF", "CAAAAAF");
		formula = formula.replace("ROUND", "!").replace("IF", "@").replace("SUM", "&");
		formula = formula.replace("SAAAF", "SUMIF").replace("CAAAAAF", "COUNTIF");
		String tar = "";
		String oper = "";
		int p = 0;// 临时变量，标记指标在报表第几部分

		for (int i = 0; i < formula.length(); i++) {
			if (operStr.contains(String.valueOf(formula.charAt(i)))) {// 遇到operStr中包含的比较运算符时，拆分指标，变为需要项目需要格式
				if (!"".equals(tar)) {
					String[] array = CommUtil.splitCharNumStr(tar);
					if (array == null) {
						relation = relation + tar;
					} else {
						p = RdTableUtil.getPartNum(Integer.parseInt(array[0]), rowInfos);
						relation = relation + tabcode + RdTableConstants.STR_CONN + array[0] + RdTableConstants.STR_CONN + colMapList.get(p).get(array[1]);
					}
					tar = "";
				}

				oper = oper + String.valueOf(formula.charAt(i));
			} else {// 否则，组成报表指标字符串
				if (!"".equals(oper)) {
					boolean replb = false;
					if (oper.contains("!(")) {
						orderStr = orderStr + "!";
						replb = true;
					}
					if (oper.contains("&(")) {
						orderStr = orderStr + "&";
						replb = true;
					}
					if (oper.contains("@(")) {
						orderStr = orderStr + "@";
						replb = true;
					}
					if (replb) {
						for (int ios = 0; ios < CommUtil.getNumOfChar(oper.replace("!(", "").replace("&(", "").replace("@(", ""), "("); ios++) {
							orderStr = orderStr + "#";
						}
					}
					// 只含(
					if (oper.contains("(") && oper.replace("(", "").length() == 0) {
						for (int ios = 0; ios < CommUtil.getNumOfChar(oper, "("); ios++) {
							orderStr = orderStr + "#";
						}
					}
					// 只含)
					if (oper.contains(")") && oper.replace(")", "").length() == 0) {
						for (int ios = 0; ios < CommUtil.getNumOfChar(oper, ")"); ios++) {
							if (!orderStr.endsWith("#")) {
								System.out.println("校验公式[" + formula + "]解析可能出现问题");
							}
							orderStr = orderStr.substring(0, orderStr.length() - 1);
						}
					}
					String operstrs = ",+-*/=<>";
					if (!replb && oper.length() > 1) {
						if (operstrs.contains(oper.substring(0, 1)) && oper.contains("(")) {
							for (int ios = 0; ios < CommUtil.getNumOfChar(oper, "("); ios++) {
								orderStr = orderStr + "#";
							}
						}
						if (oper.contains(")") && operstrs.contains(oper.substring(oper.length() - 1, oper.length()))) {
							for (int ios = 0; ios < CommUtil.getNumOfChar(oper, ")"); ios++) {
								if (!orderStr.endsWith("#")) {
									System.out.println("校验公式[" + formula + "]解析可能出现问题");
								}
								orderStr = orderStr.substring(0, orderStr.length() - 1);
							}
						}
					}

					if (",".equals(oper.substring(oper.length() - 1, oper.length())) && oper.replace(")", "").equals(",")) {// ))),
						if (orderStr.endsWith("@")) {
							if (oper.length() > 1) {
								oper = oper.substring(0, oper.length() - 1) + "){";
							} else {
								oper = "){";
							}
							orderStr = orderStr + "$";
						} else if (orderStr.endsWith("$")) {
							if (oper.length() > 1) {
								oper = oper.substring(0, oper.length() - 1) + "}ELSE{";
							} else {
								oper = "}ELSE{";
							}
							orderStr = orderStr.substring(0, orderStr.length() - 1);
						} else if (orderStr.endsWith("&")) {
							if (oper.length() > 1) {
								oper = oper.substring(0, oper.length() - 1) + "+";
							} else {
								oper = "+";
							}

						}
					}

					relation = relation + oper;
					oper = "";
				}

				tar = tar + formula.charAt(i);

			}
		}
		// 增加最后一个指标或操作符
		if (!"".equals(tar)) {
			String[] array = CommUtil.splitCharNumStr(tar);
			if (array == null) {
				relation = relation + tar;
			} else {
				p = RdTableUtil.getPartNum(Integer.parseInt(array[0]), rowInfos);
				relation = relation + tabcode + RdTableConstants.STR_CONN + array[0] + RdTableConstants.STR_CONN + colMapList.get(p).get(array[1]);
			}
			tar = "";
		}
		if (!"".equals(oper)) {
			if (orderStr.contains("@") && oper.endsWith(")")) {
				oper = oper.length() > 1 ? oper.substring(0, oper.length() - 1) + "}" : "}";
				orderStr = "";
			}
			relation = relation + oper;
		}

		relation = relation.replace("!", "ROUND").replace("@", "IF").replace("&", "SUM");

		if (relation.contains("=IF(") || relation.contains("=ROUND(IF(")) {
			// System.out.println(relation);
			if (relation.contains("=ROUND(IF(")) {
				relation = relation.substring(0, relation.lastIndexOf(",")).replace("=ROUND(IF(", "=IF(");
				if (relation.endsWith(")")) {
					relation = relation.substring(0, relation.length() - 1);
				}
				relation = relation + "}";
			}
			String sr = relation.split("=")[0] + "=";
			relation = relation.replace(sr, "").replace("){", "){" + sr).replace("ELSE{", "ELSE{" + sr);
			// System.out.println(relation);
		}

		return relation;
	}

	/**
	 * 初始化公式中自定义指标的数值
	 * 
	 * @param reportDate
	 *            日期，格式YYYYMM，或者YYYYMMDD
	 * @param dataMap
	 *            数据Map,用于校验或者监管指标数据生成
	 */
	public static void initCustomTarget(String reportDate, final Map<String, String> dataMap) {
		// 当前月份
		dataMap.put("当前月份", reportDate.substring(4, 6));
		// 折年系数
		dataMap.put("折年系数", 12.0 / (Integer.parseInt(reportDate.substring(4, 6))) + "");
		// 当前月份(规避加密造成的乱码问题)
		dataMap.put("thisMonth",reportDate.substring(4,6));
		dataMap.put("DQYF",reportDate.substring(4,6));
		// 折年系数(规避加密造成的乱码问题)
		dataMap.put("ZNXS", 12.0 / (Integer.parseInt(reportDate.substring(4, 6))) + "");
	}

	public static void main(String[] args) {
		StringBuffer s = new StringBuffer("");
		String fv = "100!=100";
		String f = "G!=F";
		//RdCheckUtil.getRelationResult(f, s, fv, "", null);
		//System.out.println(s);
	}
	public static String getBfTabtypesForCheck(String tabType) {
		String tabTypes = "";
		if ("M1".equals(tabType)||"M2".equals(tabType)) {// 月报校验时只有月报参与表间校验
			tabTypes = "'M1','M2'";
		} else if ("S1".equals(tabType)||"S2".equals(tabType)) {// 季报校验时,月报和季报参与表间校验
			tabTypes = "'M1','M2','S1','S2'";
		} else if ("Y".equals(tabType)) {// 年报校验时,月报、季报、半年报和年报参与表间校验
			tabTypes = "'M1','M2','S1','S2','Y'";
		}
		return tabTypes;
	}

	/**
	 * 替换公式中指标为指标值
	 * 
	 * @param relation
	 *            公式
	 * @param dataMap
	 *            数据Map
	 * @param pCellList
	 *            百分比单元格Map
	 * @return 转为指标值后公式
	 */
	public static String returnValRelationForBfWave(String relation, Map<String, String> dataMap, List<String> pCellList) {
		String noTarValue = "";// 如果有指标未取到值，提示信息
		String valRelation = "";

		String operStr = "+-*/(){}>=<!#,?\\\"";

		String leftBracket = "([{";
		String rightBracket = ")]}";

		int bracketCou = 0;// 记录括号个数，左括号+1，右括号-1，最后=0
		String funFlag = "";// 记录公式中的数学函数，以“,”号分隔

		String tar = "";
		String oper = "";
		// 替换%以及其他关键字
		relation = relation.replace("%", "/100");
		// 最后一位多增加一位，防止公式最后一个指标或操作符不被处理
		relation = relation.concat(operStr.contains(String.valueOf(relation.charAt(relation.length() - 1))) ? "A" : "?");
        if (StrUtil.isNotNull(relation)) {
			for (int i = 0; i < relation.length(); i++) {
				if (operStr.contains(String.valueOf(relation.charAt(i)))) {// 遇到operStr中包含的比较运算符时，在dataMap中取以tar为key的value值相加
					if (leftBracket.contains(String.valueOf(relation.charAt(i))) && !CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
						funFlag += ",#";// 保证遇到有括号时，funFlag可以截取掉最后一个，之后内容
					}
                    if (!"".equals(tar)) {

						if (CommUtil.checkIsNum(tar)) {
							valRelation = valRelation + tar;
						} else if (dataMap.get(tar) == null) {
							if (CommUtil.isContain(RdTableConstants.KEY_WORDS, tar)) {
								valRelation = valRelation + tar;

								funFlag += ("," + tar);
							} else {
								noTarValue = noTarValue + tar + ",";
								valRelation = valRelation + "0.0";
							}
						} else {
							valRelation = valRelation + CommUtil.isZeroOrValue(dataMap.get(tar));

							// int单元格
							if (pCellList != null && pCellList.contains(tar)) {
							}
						}

						tar = "";
					}

					if (leftBracket.contains(String.valueOf(relation.charAt(i)))) {
						bracketCou++;
					}

					if (rightBracket.contains(String.valueOf(relation.charAt(i)))) {
						bracketCou--;

						if (StrUtil.isNotNull(funFlag)) {
							funFlag = funFlag.substring(0, funFlag.lastIndexOf(","));
						}
					}

					oper = oper + String.valueOf(relation.charAt(i));
				} else {// 否则，组成报表指标字符串
					if (!"".equals(oper)) {
						if (oper.endsWith(",")) {
							if (funFlag.toUpperCase().endsWith(",SUM")) {// sum,这里是把sum(1,2,3,4)改成sum(1+2+3+4)
								oper = oper.replace(",", "+");
							} else if (funFlag.toUpperCase().endsWith(",ROUND")) {// round,这里是把round(100,4)里的,和后面的4去掉
								oper = oper.replace(",", "");
								continue;
							}
						}

						valRelation = valRelation + oper;

						oper = "";
					}

					tar = tar + relation.charAt(i);
				}
				}
		}
       valRelation = valRelation.toUpperCase().replace("ROUND", "").replace("SUM(", "(");

		if (!"".equals(noTarValue)) {// 如果公式中有指标未取到值
			valRelation = valRelation + RdTableConstants.STR_SPLIT + noTarValue;
			// System.out.println("公式中未取到指标值的指标：" + noTarValue);
		}

		if (bracketCou != 0) {
			// System.out.println("公式" + relation + "括号不对称！");
		}

		// 负数操作时自动改为+号 目前公式里不能存在类似G3301_36_B=-G3301_31_B*0.0008,
		valRelation = valRelation.replaceAll("--", "+");

		return valRelation;
	}

}
