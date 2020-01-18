<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>跨期异动公式</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/bf/js/bf_check_formula_wave_t.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" />
		</div>
		<div>
			<table cellpadding="4" cellspacing="4" style="padding-left: 12px;">
				<tr>
					<td>报表代码：</td>
					<td colspan="3"><input id="tabcode" name="tabcode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 400px;"
						value="${obj.tabcode }" /></td>
				</tr>
				<tr>
					<td valign="top">校验项目：</td>
					<td colspan="3"><input id="checkProject" name="checkProject" required="true" class="mini-textarea"
						style="width: 400px; height: 50px;" value="${obj.checkProject }" /></td>
				</tr>
				<%-- <tr>
					<td>风险等级：</td>
					<td><input id="checkRisk" name="checkRisk"  class="mini-combobox" required="true" style="width: 150px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_CHECK_RISK" value="${obj.checkRisk }" allowInput="false" /></td>
				</tr> --%>
				<tr>
					<td>校验频度</td>
					<td><input id="rate" name="rate" class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_YIDONG_FORMULA_TYPE" required="true"
						multiSelect="true" value="${obj.rate}" allowInput="false" showClose="true" oncloseclick="onCloseClick" /></td>
					<td>阈值：</td>
					<td><input id="leftValue" name="leftValue" required="true" class="mini-textbox"
						style="width: 80px;" value="${obj.leftValue }" />~<input id="rightValue" name="rightValue" required="true"  class="mini-textbox"
						style="width: 80px;" value="${obj.rightValue }" /></td>
				</tr>
				<tr>
					<td>坐标：</td>
					<td colspan="3"><input id="element" name="element" required="true"  class="mini-textarea" onvalidation="checkElement"
						style="width: 400px;" value="${obj.element }" /></td>
				</tr>
				<tr>
					<td valign="top">公式说明：</td>
					<td colspan="3"><input id="checkFormulaMark" name="checkFormulaMark" class="mini-textarea" style="width: 400px; height: 80px;" value="${obj.checkFormulaMark }" /></td>
				</tr>
				<tr>
					<td>启用日期：</td>
					<td><input id="startDate" name="startDate" class="mini-datepicker" required="true" validateOnChanged="false" style="width: 100px;"
						format="yyyyMMdd" value="${obj.startDate }" /></td>
					<td>停用日期：</td>
					<td><input id="endDate" name="endDate" class="mini-datepicker" required="true" onvalidation="endDateValid" validateOnChanged="false"
						style="width: 100px;" format="yyyyMMdd" value="${obj.endDate }" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 30px;">取消</a>
			<a class="mini-button" onclick="help()" style="width: 60px;">帮助</a>
		</div>
	</form>
</body>
</html>