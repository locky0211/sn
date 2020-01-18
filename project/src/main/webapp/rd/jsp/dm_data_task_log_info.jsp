<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>数据导入日志信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/dm_data_task_log_info.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">数据日期：<input id="dataDateS" name="dataDateS" class="mini-datepicker" style="width: 150px;" /> - <input
						id="dataDateE" name="dataDateE" class="mini-datepicker" style="width: 150px;" /> <a iconCls="icon-search" class="mini-button" plain="true"
						onclick="search()">查询</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="dmImportLogInfoGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/rd/dmLog/getImportLogInfoList.nut" pageSize="50"
			showPager="true">
			<div property="columns">
				<div field="dataDate" align="center" width="30" headerAlign="center">报表日期</div>
				<div field="dataType" align="center" width="20" headerAlign="center" renderer="reportTypeRenderer">报表类型</div>
				<div field="handleDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="30" align="center" headerAlign="center">处理时间</div>
				<div field="loadNum" width="20" align="center" headerAlign="center">数据载入任务数</div>
				<div field="extractNum" width="20" align="center" headerAlign="center">数据转换数</div>
				<div field="taskState" width="40" renderer="onRenderer" align="center" headerAlign="center">状态</div>
				<div field="taskState" width="50" renderer="onDoRender" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
	<div id="logInfoWin" class="mini-window" iconCls="icon-text" title="日志信息" style="width: 700px; height: 450px;" showMaxButton="true" showShadow="true"
		showModal="true" allowResize="true" allowDrag="true"></div>
</body>
</html>