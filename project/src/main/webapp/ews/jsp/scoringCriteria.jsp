<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>打分标准介绍</title>
<%@include file="/common/quote/boot.html"%>
</head>
<body>
	<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
		<div title="north" region="north" height="90" bodyStyle="word-break:break-all;padding-left:5px;" showHeader="false" showSplit="false"
			allowResize="false"><br>
			<p class="pTitle">打分标准介绍</p>
			</div>
		<div title="center" region="center" style="border: 0;" bodyStyle="padding: 10px;word-break: break-all;">
		<p>1.比如打分标准显示11-20-1 表示经公式计算出的结果在11至20（含）之间扣1分。</p>
		<p>2.打分标准显示"="表示直接采用打分公式计算出来的结果作为扣分。</p>
		<p>3.扣分上限表示该条公式以及其子类的扣分总和最大不得超过扣分上限，超过按扣分上限扣分。</p>
		</div>
		<div title="south" region="south" showSplit="false" showHeader="false" allowResize="false" height="60"
			style="text-align: center; padding-top: 15px;" splitSize="0">
			<a class="mini-button" onclick="CloseWindow()">关 闭</a>
		</div>
	</div>
	
</body>
</html>