<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>日程安排</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_schedule_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">添加任务</a>
					&nbsp;&nbsp;<span class="separator"></span>
					<a class="mini-button" iconCls="icon-search" onclick="search()">查看当前任务</a>
					&nbsp;&nbsp;
					<a class="mini-button" iconCls="icon-reload" onclick="gridLoad()">刷新</a>
					&nbsp;&nbsp;
					<a class="mini-button" iconCls="icon-txt" onclick="saveRemark()">提交备注</a>
				</td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="scheduleGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/schedule/getScheduleList.nut" pageSize="10" allowCellEdit="true"
			showPager="true" showModified="false" allowCellSelect="true">
			<div property="columns">
				<div type="indexcolumn" width="8" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="taskType" width="40" headerAlign="center" align="center" renderer="taskTypeRenderer">任务</div>
				<div field="taskTime" width="30" headerAlign="center" align="center" renderer="taskDateRenderer">日期</div>
				<div field="reportType" width="30" headerAlign="center" align="center" renderer="reportTypeRenderer">报表类型</div>
				<div field="reportDate" width="30" headerAlign="center" align="center" renderer="reportDateRenderer">报表日期</div>
				<div field="status" width="30" headerAlign="center" align="center" renderer="statusRenderer">完成状态</div>
				<div field="remark" width="60" headerAlign="center" align="center" >备注信息
				<input property="editor" class="mini-textarea" style="width:100%;"/></div>
				<div name="action" width="30" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			 </div>
		</div>
	</div>
</body>
</html>