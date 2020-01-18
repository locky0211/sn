<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>内规详情</title>
<%@include file="/common/quote/boot.html"%>
<style type="text/css">
#content {
	font-size: 16px;
	color: black;
	font-weight: normal;
	font-family: 微软雅黑, Verdana, sans-serif, 楷体;
	width: 100%;
	text-align: center;
}
#head {
	font-size: 24px;
	color: black;
	font-weight: bold;
	font-family: 微软雅黑, Verdana, sans-serif, 楷体;
	width: 100%;
	text-align: center;
}
</style>
</head>
<body style="overflow: auto">
	<div style="width: 100%; text-align: center;">
		<br> <span id="head">${obj.title }</span><br> <br>
	</div>
	<hr></hr>
	<div style="width: 90%; margin: 0 auto;">
		<span id="content">${obj.content }</span>
	</div>
	<br>
</body>
</html>