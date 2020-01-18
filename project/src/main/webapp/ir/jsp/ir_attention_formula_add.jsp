<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>指标公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ir_attention_formula_add.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> <input class="mini-hidden" id="validFlag" name="validFlag"
				value="${obj.validFlag}" />
		</div>
		<div>
			<table style="width: 100%; height: 20px;" cellpadding="4" cellspacing="0" class="tab">
				<tr>
					<td class="tab_label">报表代码：</td>
					<td colspan="3" class="tab_field_nr"><input id="tabcode" name="tabcode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 150px;"
						value="${obj.tabcode }" /></td>
				</tr>
				
				<tr>
					<td valign="top" class="tab_label">关注指标：</td>
					<td colspan="3" class="tab_field_nr"><input id="checkFormula" name="checkFormula" required="true"  class="mini-textarea"
						style="width: 420px; height: 100px;" value="${obj.checkFormula }" /></td>
				</tr>
				<tr>
					<td valign="top" class="tab_label">指标说明：</td>
					<td colspan="3" class="tab_field_nr"><input name="formulaExplain" class="mini-textarea" style="width: 420px; height: 80px;" value="${obj.formulaExplain }" /></td>
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
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 30px;">取消</a>
			<a class="mini-button" onclick="help()" style="width: 60px;">帮助</a>
		</div>
	</form>
</body>
</html>