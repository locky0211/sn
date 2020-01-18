<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加模型</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/pi/js/tableInfoAdd.js"></script>
</head>
<body>
<form id="addTableInfoForm" method="post">
<input id="id" name="id" class="mini-hidden" value="${obj.id}"/>
	<table class="tab" style="width: 100%;" cellpadding="6" cellspacing="0">
		<tr>
			<td class="tab_label" style="width: 35%">报表编号</td>
			<td class="tab_field_nr" style="width: 65%"><input class="mini-textbox" id="tableCode" value="${obj.tableCode }" /></td>
		</tr>
		<tr>
			<td class="tab_label" style="width: 35%" valign="top">报表名</td>
			<td class="tab_field_nr" style="width: 65%"><input id="tableName" value="${obj.tableName }" name="tableName" class="mini-textbox" showNullItem="false"
				 /></td>
		</tr>
		
		
	</table>
	<br>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" onclick="onAdd()" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel"
			style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</form>
</body>
</html>