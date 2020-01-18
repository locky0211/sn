<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_yhbmgl_m.js"></script>
<script type="text/javascript">
	var userId = '${sessionUser.userId}';
</script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">用户账号:&nbsp;&nbsp;<input
					id="userId" name="userId" class="mini-textbox" style="width: 150px;" />&nbsp;用户姓名:&nbsp;&nbsp;<input id="userName" name="userName"
					class="mini-textbox" style="width: 150px;" /> <a iconCls="icon-search" plain="true" class="mini-button" onclick="search()">查询</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-add" plain="true" onclick="addRow()">添加用户部门</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-add" plain="true" onclick="addUser()">批量添加用户</a></td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="usergrid" class="mini-datagrid"  allowAlternating="true"  style="width: 100%; height: 100%;" url="${base}/sys/userDepartment/getUserDepartmentInfoList.nut" pageSize="20">
			<div property="columns">
			    <div field="id" align="center" headerAlign="center" width="0"  >id</div>
				<div field="userId" align="center" headerAlign="center" width="86">用户帐号</div>
				<div field="userName" align="center" headerAlign="center">用户姓名</div>
				<div field="userDepartment" align="center" headerAlign="center"  renderer="onRendererType">所属部门</div> 
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>