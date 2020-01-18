<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/rd/css/rd_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/rd/css/rd_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${base }/pi/js/pi_table_report_changeValue.js"></script>
<title>报表数据页</title>
</head>
<body>
	<div>
		<input type="hidden" id="tableCode" name="tableCode" value="${param.tableCode }">
					<input type="hidden" id="brNo" name="brNo" value="${param.brNo }">
					<input type="hidden" id="subNo" name="subNo" value="${param.subNo }"> 
					<input type="hidden" id="frequentness" name="frequentness" value="${param.frequentness}">
					<input type="hidden" id="inputId" name="inputId" value="${param.inputId}">
					<input type="hidden" id="originalValue" name="originalValue" value="${param.value}">
	</div>
	<div>
		<form id="changeValueForm">
			<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
				<tr>
					<td class="tab_label" height="30">原值：</td>
					<td class="tab_field" height="30">${param.value }</td>
				</tr>
				<tr>
					<td class="tab_label" height="30">新值：</td>
					<td class="tab_field" height="30"><input id="changeValue" name="changeValue" class="mini-textbox" required="true"  /></td>
				</tr>
				
			</table>
		</form>
	</div>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" onclick="change()" style="width: 60px; margin-right: 30px;">确定</a> 
		<a class="mini-button" onclick="onCancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>