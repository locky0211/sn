<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>east导入日志查看</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/east_task_log.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><span>表名：</span><input id="tableName" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;<span>日期：</span> <input
						id="importTime" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a></td>
				</tr>
			</table>
		</div>

	</div>
	<div class="mini-fit">
		<div id="importLogGrid" multiSelect="true" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/east/task/log/getImportLogList.nut">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tableName" width="20"align="center" headerAlign="center">表名</div>
				<div field="importLog" align="center" headerAlign="center">导表日志</div>
				<div field="importTime" dateFormat="yyyy-MM-dd HH:mm:ss" width="30" align="center" headerAlign="center">执行日期</div>
			</div>
		</div>
	</div>
</body>
</html>