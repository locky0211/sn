<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>数据处理任务列表</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<style type="text/css">
.tipDiv {
	display: none;
}
</style>
<script type="text/javascript" src="${base }/dy_xcz/js/dy_xcz_data_task_list.js"></script>
</head>
<body>
	<form id="tlForm" method="post" action="${base }/dy_xcz/dm/addOrUpdateDataTaskList.nut">
		<input class="mini-hidden" name="id" value="${obj.id}" />
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">任务名称：</td>
					<td class="tab_field_nr"><input id="taskName" name="taskName" class="mini-textbox" style="width: 100%;" required="true"
						value="${obj.taskName }" /></td>
						<td class="tab_label tab_align_r">数据源：</td>
						<td class="tab_field"><input id="dataSource" name="dataSource" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DM_TASK_DATA_SOURCE" 
						required="true" style="width: 100%;" textField="zdName" valueField="zdValue" value="${obj.dataSource }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">自动标识：</td>
					<td class="tab_field"><input id="taskAuto" name="taskAuto" class="mini-combobox"
						url="${base}/sys/ggzd/getGgzdList.nut?groupId=DM_DATA_TASK_AUTO" required="true" style="width: 100%;" textField="zdName" valueField="zdValue" value="${obj.taskAuto }" /></td>
					<td class="tab_label tab_align_r">任务类型：</td>
					<td class="tab_field_nr"><input id="taskType" name="taskType" class="mini-combobox" style="width: 100%;" textField="zdName"
						valueField="zdValue" emptyText="请选择..." url="${base }/sys/ggzd/getGgzdList.nut?groupId=DM_DATA_TASK_TYPE" value="${obj.taskType }" required="true"
						allowInput="false" onvaluechanged="onTaskTypeValueChanged" /></td>
				</tr>
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">执行顺序：</td>
					<td class="tab_field_nr"><input id="taskIndex" style="width: 100%;" name="taskIndex" class="mini-spinner" value="${obj.taskIndex }"
						minValue="0" maxValue="10000" changeOnMousewheel="false"/></td>
						
					<td style="width: 20%;" class="tab_label tab_align_r" id="tabTaskTableName">载入目标表名：</td>
					<td class="tab_field_nr"><input id="taskTableName" name="taskTableName" class="mini-textbox" style="width: 100%;" required="true"
						value="${obj.taskTableName }" /></td>
				</tr>
				</tr>
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r" valign="top">任务内容：</td>
					<td colspan="3" class="tab_field_nr"><input class="mini-textarea" style="width: 100%;height:300px;" id="taskContent"  name="taskContent" 
						cols="50" rows="6" value="${obj.taskContent }" />
						</td>
				</tr>
				<tr ><td height="20" colspan="4">
				提示:SQL语句中$UUID$会被替换为UUID</td></tr>
			</table>
		</div>
		<div style="text-align: center; padding: 18px;">
			<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>