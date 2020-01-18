<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加模型</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/pi/js/updateattachtable.js"></script>
</head>
<body style="overflow: auto;">
	<form id="attachForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
			<input id="tableId" name="tableId" class="mini-hidden" value="${obj.tableId}"/>
		</div>
		<div>
			<table class="tab" style="width: 100%;" cellpadding="6" cellspacing="0">
				<tr>
					<td class="tab_label" style="width: 35%">指标代码</td>
					<td class="tab_field_nr" style="width: 65%"><input class="mini-textbox" id="quotaCode" value="${obj.quotaCode }" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">维度代码</td>
					<td class="tab_field_nr" style="width: 65%"><input id="latCode" value="${obj.latCode }" name="latCode" class="mini-textbox" showNullItem="false"/></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">指标名称</td>
					<td class="tab_field_nr" style="width: 65%"><input id="quotaName" value="${obj.quotaName }" name="quotaName" class="mini-textbox" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">维度名称</td>
					<td class="tab_field_nr" style="width: 65%"><input id="latName" value="${obj.latName }" name="latName" class="mini-textbox" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">数据类型</td>
					<td class="tab_field_nr" style="width: 65%"><input id="dataType" value="${obj.dataType }" name="dataType" class="mini-textbox" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">数据属性</td>
					<td class="tab_field_nr" style="width: 65%"><input id="dataProperty" value="${obj.dataProperty }" name="dataProperty" class="mini-textbox" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">报送级别</td>
					<td class="tab_field_nr" style="width: 65%"><input id="submissionLevel" value="${obj.submissionLevel }" name="submissionLevel" class="mini-textbox" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">频度</td>
					<td class="tab_field_nr" style="width: 65%"><input id="frequentness" value="${obj.frequentness}" name="frequentness" class="mini-textbox" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 35%" valign="top">维度组</td>
					<td class="tab_field_nr" style="width: 65%"><input id="latGroup" value="${obj.latGroup }" name="latGroup" class="mini-textbox" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onupdate()" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
		</div>
	</form>
</body>
</html>