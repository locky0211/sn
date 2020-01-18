<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="rdr" uri="../tld/table_report.tld"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/rd/css/rd_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/rd/css/rd_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${base }/rd/js/autoAddFormulaYidong_batch.js"></script>
<title>同版本批量导入</title>
</head>
<body>
	<div>
		<input id="tabCodes" name="tabCodes" class="mini-hidden" value="${param.tabCodes }"/>
		<input id="tabType" name="tabTypes" class="mini-hidden" value="${param.tabType }"/>
		<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate }"/>
		<input id="cUser" name="cUser" class="mini-hidden" value="${param.cUser }">
	</div>
	<div>
		<form id="autoFormula">
			<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
				<tr>
					<td class="tab_label">关注等级：</td>
					<td class="tab_field"><input id="checkRisk" name="checkRisk" class="mini-combobox" required="true" style="width: 180px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=WAVE_CHECK_RISK"  allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label">校验频度：</td>
					<td class="tab_field"><input id="reportRate" name="reportRate" class="mini-combobox" style="width: 180px;"  popupWidth="180" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_YIDONG_FORMULA_TYPE" required="true"
						multiSelect="true" value="${rdFormula.reportRate}" allowInput="false" showClose="true" oncloseclick="onCloseClick" onvaluechanged="typeCodeValid"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label">阈值：</td>
					<td class="tab_field">
						<input id="leftValue" name="leftValue" required="true" onvalidation="isNumber" class="mini-textbox" style="width: 84px;"  />~
						<input id="rightValue" name="rightValue" required="true" onvalidation="isNumber" class="mini-textbox" style="width: 84px;"  />
					</td>
				</tr>				
			</table>
		</form>
	</div>
	<div style="text-align: center; padding-top: 100px;">
		<a class="mini-button" onclick="add()" style="width: 120px; margin-right: 30px;">批量添加</a>
		<a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 30px;">取消</a>
		
	</div>
</body>
</html>