<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_check_with_rd_bf_formula_add.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> <input class="mini-hidden" id="validFlag" name="validFlag"
				value="${obj.validFlag}" />
			<c:if test="${not empty param.cUser}">
				<input class="mini-hidden" id="cUser" name="cUser" value="${param.cUser}" />
			</c:if>
			<c:if test="${empty param.cUser}">
				<input class="mini-hidden" id="cUser" name="cUser" value="${obj.cUser}" />
			</c:if>
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
					<td><input id="formulaType" name="formulaType" class="mini-combobox" style="width: 125px;" textField="zdName" valueField="zdValue"
					url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE" required="true" allowInput="false" value="${obj.formulaType}" /></td>	
					<td>容忍波动值：</td>
					<td><input id="deviationValue" name="deviationValue" vtype="float" class="mini-textbox" value="${obj.deviationValue }"
						validateOnChanged="false" style="width: 80px;" /></td>
				</tr>
				
				<tr>
					<td valign="top">校验公式：</td>
					<td colspan="3"><input id="checkFormula" name="checkFormula" required="true"  class="mini-textarea"
						style="width: 450px; height: 100px;" value="${obj.checkFormula }" /></td>
				</tr>
				<tr>
					<td valign="top">公式解释：</td>
					<td colspan="3"><input name="formulaExplain" class="mini-textarea" style="width: 450px; height: 80px;" value="${obj.formulaExplain }" /></td>
				</tr>
				
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>