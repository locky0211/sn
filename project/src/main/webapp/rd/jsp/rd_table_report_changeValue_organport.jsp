<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据修改页(机构端)</title>
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/rd/css/rd_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/rd/css/rd_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${base }/rd/js/rd_table_report_changeValue_organport.js"></script>
</head>
<body>
	<div>
		<input id="reportId" class="mini-hidden" value="${param.reportId }"/>
		<input id="inputId" class="mini-hidden" value="${param.inputId }"/>
		<input id="reportDate" class="mini-hidden" value="${param.reportDate }"/>
		<input id="originalValue" class="mini-hidden" value="${param.value }"/>
	</div>
	<div>
		<form id="changeValueForm">
			<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
				<tr>
					<td class="tab_label">原值：</td>
					<td class="tab_field">${param.value }</td>
				</tr>
				<tr>
					<td class="tab_label">新值：</td>
					<td class="tab_field"><input id="changeValue" name="changeValue" class="mini-textbox" required="true" /></td>
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