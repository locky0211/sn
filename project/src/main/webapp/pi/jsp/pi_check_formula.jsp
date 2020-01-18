<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/pi_check_formula.js"></script>
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
			<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 12%">表单</td>
				<td class="tab_field_nr" style="width: 38%"><input class="mini-textbox" required="true" id="tabcode" name="tabcode" value="${obj.tabcode}" style="width: 98%" /></td>
				<td class="tab_label" style="width: 12%">公式状态</td>
				<td class="tab_field_nr" style="width: 38%"><input id="vFlag" showNullItem="false" name="validFlag" value="${obj.validFlag}" class="mini-combobox" style="width: 80px;" data="[{id:'y',text:'启用'},{id:'n',text:'停用'}]"
				allowInput="false" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 12%">地区类型</td>
				<td class="tab_field_nr" style="width: 38%"><input class="mini-combobox" id="aType" name="aType"  multiSelect="true" value="${obj.aType}" style="width: 98%" data="[{id:'CITY',text:'市'},{id:'PROV',text:'省'},{id:'NATI',text:'全国'},{id:'OFFS',text:'境外'}]"/></td>
				<td class="tab_label" style="width: 12%">频度</td>
				<td class="tab_field_nr" style="width: 38%"><input class="mini-combobox" id="freq" name="freq" multiSelect="true" value="${obj.freq}" style="width: 98%" data="[{id:'M',text:'月度'},{id:'S',text:'季度'},{id:'Y',text:'年度'}]"/></td>
			</tr>
			<tr>
				<td class="tab_label">公式内容</td>
				<td class="tab_field_nr" colspan="3" style="height: 130px;"><input class="mini-textarea" required="true" id="checkFormula" name="checkFormula" value="${obj.checkFormula}" style="width: 99%; height: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">公式描述</td>
				<td class="tab_field_nr" colspan="3" style="height: 150px;"><input class="mini-textarea" required="true" id="formulaExplain" name="formulaExplain" value="${obj.formulaExplain}" style="width: 99%; height: 99%" /></td>
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