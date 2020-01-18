<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>east任务调度</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/east_task_m.js"></script>
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
		<div id="taskListGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/east/task/getTsTaskList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="sysType" width="60" align="center" renderer="onRendererType" headerAlign="center">操作系统类型</div>
				<div field="filePath" width="60" align="center" headerAlign="center">文件地址</div>
				<div field="cricleExplain" width="60" align="center" headerAlign="center">任务周期说明</div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>