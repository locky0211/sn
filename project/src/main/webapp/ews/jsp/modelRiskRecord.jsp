<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>我的待排查问题</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="../js/modelRiskRecord.js"></script>
<script type="text/javascript">
	var statusData = [ {
		id : 0,
		text : '未排查'
	}, {
		id : 1,
		text : '已排查'
	} ];
</script>
</head>
<body>
	<div class="mini-toolbar" style="padding: 2px; border-bottom: 0;">
		<table style="width: 100%;">
			<tr>
				<td>标题：<input class="mini-textbox" id="title" style="width:30%">&nbsp;&nbsp;
					状态：<input id="status" style="width: 150px;" class="mini-combobox" valueField="id" textField="text" data="statusData" emptyText="请选择" />&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="search" plain="true">查找</a></td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="riskDataGrid" class="mini-datagrid" allowDrag="true" defaultRowHeight="28" style="width: 100%; height: 100%" url="${base }/modelRisk/getMyRecordList.nut" allowResize="false" sizeList="[10,50,100]" pageSize="10" virtualScroll="true">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="title" align="center" headerAlign="center" width="110">标题</div>
				<div field="orderUserName" align="center" headerAlign="center" width="30">指派人</div>
				<div field="orderDate" align="center" headerAlign="center" width="30" dateFormat="yyyy-MM-dd">指派日期</div>
				<div field="status" align="center" headerAlign="center" width="30" renderer="onStatusRender">状态</div>
				<div name="action" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;" width="60">操作</div>
			</div>
		</div>
	</div>
</body>
</html>