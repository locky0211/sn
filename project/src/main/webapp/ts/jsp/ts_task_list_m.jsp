<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>调度任务列表</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ts_task_list_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addRow()">新增</a> <span class="separator"></span> <a
						class="mini-button" iconCls="icon-reload" onclick="gridLoad()" plain="true">刷新</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="taskListGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/ts/getTsTaskList.nut" showPager="false"
			ondrawcell="ondrawcell">
			<div property="columns">
				<div field="taskCycle.cycleName" width="60" align="center" headerAlign="center">任务周期</div>
				<div field="taskName" width="80" align="center" headerAlign="center">任务名称</div>
				<div field="taskType" width="40" align="center" headerAlign="center">任务类型</div>
				<div field="taskContent" headerAlign="center">任务内容</div>
				<div field="taskIndex" width="20" align="center" headerAlign="center">执行顺序</div>
				<div field="status" width="60" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>