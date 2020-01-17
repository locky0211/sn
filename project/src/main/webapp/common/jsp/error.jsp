<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>操作成功页面</title>
<%@include file="../quote/boot.html"%>
<script type="text/javascript" src="../js/success.js"></script>
<style type="text/css">
#warp {
	position: absolute;
	width: 400px;
	height: 240px;
	left: 50%;
	top: 50%;
	margin-left: -200px;
	margin-top: -120px;
	text-align: center;
}
</style>
</head>
<body style="text-align: center; overflow: hidden;">
	<div id="warp">
		<p align="center" class="title">
			<img src="${base }/common/img/error.gif">
		</p>
		<p align="center" id="errorCenter" style="font-size: 14px;">操作失败,请重新再试</p>
		<p align="center" class="title">
			<a class="mini-button" onclick="onClick">确定</a>
		</p>
	</div>
</body>
</html>
