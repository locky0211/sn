<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>角色管理</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_jsgl_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add"  plain="true"   onclick="add()">新增角色</a></td>
				<td style="white-space: nowrap;"><label style="font-family: Verdana;">角色名称: </label> <input id="key" class="mini-textbox"
					onenter="onKeyEnter" /> <a class="mini-button" iconCls="icon-search"   onclick="search()">查询</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="jsDataGrid" class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/sys/jus/getSysJsList.nut" pageSize="20">
			<div property="columns">
				<div field="jsId" width="40" align="center" headerAlign="center">角色ID</div>
				<div field="jsName" align="center" headerAlign="center">角色名称</div>
				<div field="jsDescription" align="center" headerAlign="center">角色描述</div>
				<div field="jsStatus" align="center" headerAlign="center" renderer="onStatusRenderer">角色状态</div>
				<div name="action" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			</div>
		</div>
	</div>
</body>
</html>