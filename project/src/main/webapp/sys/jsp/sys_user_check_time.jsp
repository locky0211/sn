<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>时间设置页面</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript"
	src="${base}/sys/js/sys_user_check_time.js"></script>
</head>
<body>
	<form id="userCheckTimeForm" method="post">
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6"
			cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 24%">用户名ID：</td>
				<td class="tab_field_nr" style="width: 76%"><input id="userId" name="userId"
					class="mini-textbox" readonly="readonly" style="width:100%;" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 24%">用户姓名：</td>
				<td class="tab_field_nr" style="width: 76%"><input id="userName" name="userName" style="width: 100%;"
					class="mini-textbox" readonly="readonly" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 24%">试用到期日：</td>
				<td class="tab_field_nr" style="width: 76%"><input id="beforeCheckTime" name="beforeCheckTime"
					style="width:100%;" class="mini-datepicker" format="yyyy-MM-dd"/></td>
			</tr>
		</table>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="update()"
				style="width: 60px; margin-right: 10px;">确定</a> <a
				class="mini-button" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>