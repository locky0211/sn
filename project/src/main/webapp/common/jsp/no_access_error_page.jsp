<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>无权限提示界面</title>
<title>成功</title>
<%@include file="../quote/boot.html"%>
<script type="text/javascript" src="../js/error_page.js"></script>
</head>
<body style="text-align: center; overflow: hidden;">
	<div
		style="position: absolute; width: 400px; height: 120px; top: 50%; left: 50%; margin-left: -200px; margin-top: -80px; text-align: center; border: 1px solid red">
		<table border="0" cellpadding="5px;">
			<tr>
				<td><img alt="" src="../img/no_access.png" style="float: left;"></td>
				<td style="text-align: left;"><span style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">Forbidden!<span> <br>
							<span style="font-size: 12px; font-weight: normal;">You don't have permission to access this URL,please contact system administrator.</span><br>
							<span style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">禁止访问!<span> <br> <span
									style="font-size: 12px; font-weight: normal;">您没有权限访问这个URL地址，请联系系统管理员。</span></td>
			</tr>
		</table>
		<p align="center">
			<a class="mini-button" onclick="onClick">确定</a>
		</p>
	</div>
</body>
</html>