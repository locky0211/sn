<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>指标公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="test_add.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<input class="mini-hidden" id="id" name="id" value="${obj.tabCode}" /> 
		<div>
			<table style="width: 100%; height: 20px;" cellpadding="4" cellspacing="0" class="tab">
				<tr>
					<td class="tab_label">tabCode：</td>
					<td colspan="3" class="tab_field_nr"><input id="tabCode" name="tabCode" class="mini-textbox" required="true"  style="width: 150px;"
						value="${obj.tabCode }" /></td>
				</tr>
				<tr>
					<td class="tab_label">tableId：</td>
					<td colspan="3" class="tab_field_nr"><input id="tableid" name="tableid" class="mini-textbox" required="true"  style="width: 150px;"
						value="${obj.tableid }" /></td>
				</tr>
				<tr>
					<td valign="top" class="tab_label">checkFormula：</td>
					<td colspan="3" class="tab_field_nr"><input id="checkFormula" name="checkFormula" required="true"  class="mini-textbox"
						style="width: 150px;" value="${obj.checkFormula }" /></td>
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