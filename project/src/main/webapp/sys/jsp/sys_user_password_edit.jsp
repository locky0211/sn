<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_user_password_edit.js"></script>
<title>修改密码</title>
</head>
<body>
	<form id="addUserForm" method="post">
		<input  name="userId" id="userId" class="mini-hidden" value="${sessionUser.userId}" />
		<div style="padding-left: 11px; padding-bottom: 5px;">
			<table style="table-layout: fixed;">
				<tr height="10px;"></tr>
				<tr>
					<td style="width: 65px;">旧密码：</td>
					<td style="width: 200px;"><input id="oldPassword" class="mini-textbox" required="true" emptyText="请输入旧密码" style="width: 180px;" onvalidation="oldPasswordValid"/></td>
				</tr>
				<tr height="5px;"></tr>
				<tr>
					<td>新密码：</td>
					<td><input id="newPassword" style="width: 180px;" required="true" class="mini-password" emptyText="请输入新密码"/></td>
				</tr>
				<tr height="5px;"></tr>
				<tr>
					<td>确认密码：</td>
					<td><input id="Password" name="userPass" required="true" style="width: 180px;" class="mini-password" emptyText="请重复输入密码" onvalidation="passwordValid" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px; margin-top: 20px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>