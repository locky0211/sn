<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统公告</title>
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/common/css/table.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
		<div title="north" region="north" height="90" bodyStyle="word-break:break-all;padding-left:5px;" showHeader="false" showSplit="false"
			allowResize="false"><br>
			<p class="pTitle">${obj.title }</p>
			<div style="float: right; font-size: 12px;">发布时间:&nbsp;${obj.releaseDate }&nbsp;&nbsp;</div>
		</div>
		<div title="center" region="center" style="border: 0;" bodyStyle="padding: 10px;word-break: break-all;">${obj.content }</div>
		<div title="south" region="south" showSplit="false" showHeader="false" allowResize="false" height="60"
			style="text-align: center; padding-top: 15px;" splitSize="0">
			<a class="mini-button" onclick="CloseWindow()">关 闭</a>
		</div>
	</div>
</body>
</html>