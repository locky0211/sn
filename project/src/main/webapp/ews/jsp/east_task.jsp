<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="com.efraiser.ews.model.EastTask"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>east任务调度</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/east_task.js">
</script>
</head>
<body>
	<form id="etForm" method="post" action="${base }/ts/addOrUpdateTaskList.nut">
	<input class="mini-hidden" name="id" value="${obj.id}" />
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 24%">操作系统类型</td>
				<td class="tab_field_nr" style="width: 76%"><input class="mini-combobox" required="true" id="sysType" name="sysType" textField="zdName"
						valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SystemType" value="${obj.sysType}" allowInput="false" style="width: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">文件路径</td>
				<td class="tab_field_nr" style="width: 76%"><input class="mini-textbox" required="true" id="filePath" name="filePath" value="${obj.filePath}" style="width: 99%;" /></td>
			</tr>
			<tr>
				<td class="tab_label">执行周期</td>
				<td class="tab_field_nr" style="width: 76%"><input class="mini-textbox" required="true" id="startCricle" name="startCricle" value="${obj.startCricle}" style="width: 99%;" /></td>
			</tr>
			<tr>
				<td class="tab_label">执行周期说明</td>
				<td class="tab_field_nr" style="width: 76%"><input class="mini-textbox" required="true" id="cricleExplain" name="cricleExplain" value="${obj.cricleExplain}" style="width: 99%;" /></td>
			</tr>
		</table>
	</form>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>