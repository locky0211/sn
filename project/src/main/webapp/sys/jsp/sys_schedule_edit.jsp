<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>修改任务</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_schedule_edit.js"></script>
</head>
<body style="overflow: auto;">
	<form id="scheduleForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" name="id" id="id" value="${obj.id}" /> 
		</div>
		<div>
			<table class="tab" style="width: 100%; height: 100px;" cellpadding="6" cellspacing="0">
				<tr>
					<td class="tab_label" style="width: 28%" align="center">选择任务：</td>
					<td class="tab_field_nr">
						<input id="taskType" name="taskType" style="width: 98%" class="mini-combobox" required="true"  
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=TASKTYPE" parentField="pId" 
							valueField="zdValue" textField="zdName" allowInput="false" value="${obj.taskType }" />
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 28%" align="center">任务日期：</td>
					<td class="tab_field_nr">
						<input id="taskTime" name="taskTime" style="width: 98%" class="mini-datepicker" format="yyyy-MM-dd" required="true" value="${obj.taskTime }"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 28%" align="center">报表类型：</td>
					<td class="tab_field_nr">
						<input id="reportType" name="reportType" style="width: 98%;" class="mini-combobox" required="true"  
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" parentField="pId" 
							valueField="zdValue" textField="zdName" allowInput="false" value="${obj.reportType }"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 28%" align="center">报表日期：</td>
					<td class="tab_field_nr">
						<input id="reportDate" name="reportDate" style="width: 98%" class="mini-datepicker" format="yyyy-MM-dd" required="true" value="${obj.reportDate }"/>
					</td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="update()" style="width: 60px; margin-right: 30px;" iconCls="icon-ok">确认</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
		</div>
	</form>
</body>
</html>