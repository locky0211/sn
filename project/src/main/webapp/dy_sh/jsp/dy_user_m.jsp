<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户管理报表信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dy_sh/js/dy_user_m.js"></script>
<script type="text/javascript">
	var userId = '${sessionUser.userId}';
</script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">
					&nbsp;用户账号:&nbsp;&nbsp;
					<input id="keyId" name="keyId" class="mini-textbox" style="width: 150px;" /> 
					&nbsp;用户姓名:&nbsp;&nbsp;
					<input id="keyName" name="keyName" class="mini-textbox" style="width: 150px;" />
					&nbsp;&nbsp;
					<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
				</td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="usergrid" class="mini-datagrid"  allowAlternating="true"  style="width: 100%; height: 100%;" url="${base}/sys/user/getUserList.nut" pageSize="80">
			<div property="columns">
				<div field="userId" align="center" headerAlign="center" width="86">用户帐号</div>
				<div field="userName" align="center" headerAlign="center">用户姓名</div>
				<div field="userOrgan" align="center" headerAlign="center">所属辖区</div>
				<div field="userGenger" align="center" headerAlign="center">性别</div>
				<div field="userTelephone" headerAlign="center" align="center">电话</div>
				<div field="lastLoginDate" dateFormat="yyyy-MM-dd HH:mm:ss" headerAlign="center" align="center">最近登录</div>
				<div field="status" width="100" allowSort="true" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>