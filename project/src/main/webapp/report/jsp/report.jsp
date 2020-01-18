<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="report" uri="report.tld"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title></title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.loading2.jsp"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<%@include file="/common/quote/My97DatePicker.html"%>
<script type="text/javascript" src="../js/report1.js"></script>
<script type="text/javascript" src="../js/report2.js"></script>
<c:if test="${not empty param.js}">
	<script type="text/javascript" src="../js/${param.js}.js"></script>
</c:if>
<link rel="stylesheet" href="../css/report.css" type="text/css">
<link rel="stylesheet" href="../css/report2.css" type="text/css">
<link rel="stylesheet" href="../css/report_default.css" type="text/css" id="report_style">
</head>
<body id="reportBody">
	<form id="reportForm">
		<report:reportTag name="${param.reportId}"></report:reportTag>
		<input type="hidden" name="reportId" value="${param.reportId}"> <input type="hidden" name="all" id="all" value=""> <input type="hidden" name="recCount" id="recCount" value="">
		<input type="reset" id="reprotFormResetBtn" style="display: none;">
	</form>
	<iframe id="goToDownload" style="display: none" src=""></iframe>
	<div id="reportWin" class="easyui-window" title="" align="center" style="">
		<iframe id="reportWinFrame" frameborder="0" src="" scrolling="auto" style="width: 100%; height: 99%;"></iframe>
	</div>
</body>
</html>