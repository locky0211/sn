<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bf_check_withrd_formula.js"></script>
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
					<td colspan="3"><input id="tabCode" name="tabCode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 450px;"
						value="${obj.tabCode }" /></td>
				</tr>
				<tr>
					<td>容忍波动值：</td>
					<td><input id="deviationValue" name="deviationValue" vtype="float" class="mini-textbox" value="${obj.deviationValue }"
						validateOnChanged="false" style="width: 80px;" /></td>
				
					<td>公式类型：</td>
					<td><input id="formulaType" name="formulaType" class="mini-combobox" required="true" style="width: 150px;" textField="typeName" valueField="typeValue"
						data="[{typeValue:'M',typeName:'月度'},{typeValue:'S',typeName:'季度'},{typeValue:'Y',typeName:'年度'}]" value="${obj.formulaType }" allowInput="false" /></td>
				</tr>
				<tr>
					<td valign="top">校验公式：</td>
					<td colspan="3"><input id="checkFormula" name="checkFormula" required="true"  class="mini-textarea"
						style="width: 450px; height: 100px;" value="${obj.checkFormula }" /></td>
				</tr>
				<tr>
					<td valign="top">公式说明：</td>
					<td colspan="3"><input name="formulaExplain" class="mini-textarea" style="width: 450px; height: 80px;" value="${obj.formulaExplain }" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 30px;">取消</a>
			<a class="mini-button" onclick="help()" style="width: 60px;">帮助</a>
		</div>
	</form>
</body>
</html>