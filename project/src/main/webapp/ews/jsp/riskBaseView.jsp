<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>风险知识库查询</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="../js/riskBaseView.js"></script>
</head>
<body>
	<div class="mini-splitter" style="width: 100%; height: 100%;">
		<div size="300" showCollapseButton="true">
			<div class="mini-toolbar" style="padding: 2px; border-top: 0; border-left: 0; border-right: 0;">
				<span style="padding-left: 5px;">名称：</span> <input id="title" class="mini-textbox" /> <a class="mini-button" iconCls="icon-search" onclick="search()" plain="true">查找</a>
			</div>
			<div class="mini-fit">
				<ul id="riskBaseTree" class="mini-tree" url="${base }/riskBase/getRiskBaseList.nut" style="width: 100%;" showTreeIcon="true" textField="title" idField="id" parentField="pId" resultAsTree="false" expandOnLoad="0" expandOnDblClick="true" onnodeclick="onnodeclick">
				</ul>
			</div>
		</div>
		<div showCollapseButton="true">
			<iframe width="100%" height="100%" id="iframe" src=""></iframe>
		</div>
	</div>
</body>
</html>