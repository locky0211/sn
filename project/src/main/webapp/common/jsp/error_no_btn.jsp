<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>操作成功页面</title>
<style type="text/css">
#warp {
	position: absolute;
	width: 400px;
	height: 260px;
	left: 50%;
	top: 50%;
	margin-left: -200px;
	margin-top: -150px;
	text-align: center;
}
</style>
</head>
<body style="text-align: center;overflow: hidden;">
	<div id="warp">
		<p align="center" class="title">
			<img src="${base }/common/images/error.gif">
		</p>
		<p align="center" id="errorCenter" style="font-size: 14px;">操作失败,请重新再试</p>
	</div>

</body>
</html>
