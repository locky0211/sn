<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>模型分配执行周期</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/modelCycleAssign.js"></script>
</head>
<body>
	<div style="display: none;">
		<input class="mini-textbox" id="modelId" name="modelId" value="${param.id}" />
	</div>
	<table class="tab" style="width: 100%;" cellpadding="6" cellspacing="0">
		<tr>
			<td class="tab_label" style="width: 15%">模型名称</td>
			<td class="tab_field_nr" style="width: 85%">${param.name }</td>
		</tr>
		<tr>
			<td class="tab_label" style="width: 15%" valign="top">执行周期</td>
			<td class="tab_field_nr" style="width: 85%"><input id="cycle" style="width: 150px;" class="mini-combobox" valueField="zdValue" textField="zdName" url="${base }/sys/ggzd/getGgzdList.nut?groupId=MXCXZQ" emptyText="请选择" /></td>
		</tr>
	</table>
	<br>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>