<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ir_check_formula_add.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> <input class="mini-hidden" id="validFlag" name="validFlag"
				value="${obj.validFlag}" />
		</div>
		<div>
			<table cellpadding="4" cellspacing="4" style="padding-left: 12px;">
				<tr>
					<td>报表代码：</td>
					<td colspan="3"><input id="tabcode" name="tabcode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 450px;"
						value="${obj.tabcode }" /></td>
				</tr>
				<tr>
					<td>公式类型：</td>
					<td><input id="formulaAllType" name="formulaAllType" class="mini-combobox" required="true" style="width: 150px;" textField="typeName" valueField="typeValue"
						data="[{typeValue:'1',typeName:'普通'}]" value="${obj.formulaAllType }" allowInput="false" /></td>
					
					<td>容忍波动值：</td>
					<td><input id="deviationValue" name="deviationValue" vtype="float" class="mini-textbox" value="${obj.deviationValue }"
						validateOnChanged="false" style="width: 80px;" /></td>
				</tr>
				</tr>
				<tr>
					<td valign="top">校验公式：</td>
					<td colspan="3"><input id="checkFormula" name="checkFormula" required="true"  class="mini-textarea"
						style="width: 450px; height: 100px;" value="${obj.checkFormula }" /></td>
				</tr>
				<tr>
					<td valign="top">公式说明：</td>
					<td colspan="3"><input name="checkFormulaMark" class="mini-textarea" style="width: 450px; height: 80px;" value="${obj.checkFormulaMark }" /></td>
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
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a><a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 30px;">取消</a>
			<a class="mini-button" onclick="help()" style="width: 60px;">帮助</a>
		</div>
	</form>
</body>
</html>