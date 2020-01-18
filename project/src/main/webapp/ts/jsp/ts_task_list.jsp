<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>任务周期</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<style type="text/css">
.tipDiv {
	display: none;
}
</style>
<script type="text/javascript" src="${base }/ts/js/ts_task_list.js"></script>
</head>
<body>
	<form id="tlForm" method="post" action="${base }/ts/addOrUpdateTaskList.nut">
		<input class="mini-hidden" name="id" value="${obj.id}" />
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 90px;" class="tab_label tab_align_r">任务名称：</td>
					<td colspan="3" class="tab_field_nr"><input id="taskName" name="taskName" class="mini-textbox" style="width: 190px;" required="true"
						value="${obj.taskName }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">执行周期：</td>
					<td colspan="3" class="tab_field_nr"><input id="cycleId" name="cycleId" class="mini-combobox" style="width: 200px;" textField="cycleName"
						valueField="id" emptyText="请选择..." url="${base }/ts/getTaskCycleList.nut" value="${obj.cycleId }" required="true" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">任务类型：</td>
					<td class="tab_field"><input id="taskType" name="taskType" class="mini-combobox" style="width: 110px;" textField="zdName"
						valueField="zdValue" emptyText="请选择..." url="${base }/sys/ggzd/getGgzdList.nut?groupId=TS_TASK_TYPE" value="${obj.taskType }" required="true"
						allowInput="false" onvaluechanged="onTaskTypeValueChanged" /></td>
					<td class="tab_label tab_align_r">执行顺序：</td>
					<td class="tab_field_nr"><input id="sp1" style="width: 70px;" name="taskIndex" class="mini-spinner" value="${obj.taskIndex }" minValue="0"
						maxValue="10000" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r" valign="top">任务内容：</td>
					<td colspan="3" class="tab_field_nr"><input name="taskContent" class="mini-textarea" style="width: 450px; height: 100px;" required="true"
						value="${obj.taskContent }" />
						<div id="SQL_tip" class="tipDiv">提示:SQL语句中$UUID$会被替换为UUID</div>
						<div id="PROCEDURES_tip" class="tipDiv">提示:Proc</div>
						<div id="CLASS_tip" class="tipDiv">提示:必需实现com.efraiser.ts.util.QuartzTask接口的execute方法。</div></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 18px;">
			<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>