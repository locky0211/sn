<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>风险问题指派</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="../js/modelRiskDesignate.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="padding: 2px; border-bottom: 0;">
		<table style="width: 100%;">
			<tr>
				<td>日期：<input class="mini-datepicker" id="startDate">&nbsp;&nbsp;~&nbsp;&nbsp;<input class="mini-datepicker" id="endDate">&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="search" plain="true">查找</a></td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="riskDataGrid" class="mini-datagrid" allowDrag="true" defaultRowHeight="28" style="width: 100%; height: 100%" url="${base }/modelRisk/getModelRiskList.nut" allowResize="false" sizeList="[10,50,100]" pageSize="10" virtualScroll="true">
			<div property="columns">
				<div type="indexcolumn" width="15" align="center" headerAlign="center">序号</div>
				<div field="title" align="center" headerAlign="center" width="110">标题</div>
				<div field="status" align="center" headerAlign="center" width="30" renderer="onStatusRender">状态</div>
				<div field="createUser" align="center" headerAlign="center" width="30">执行人</div>
				<div field="createDate" align="center" headerAlign="center" width="40" dateFormat="yyyy-MM-dd HH:mm:ss">执行时间</div>
				<div field="designateUser" align="center" headerAlign="center" width="30">指派给</div>
				<div name="action" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;" width="80">操作</div>
			</div>
		</div>
	</div>
</body>
</html>