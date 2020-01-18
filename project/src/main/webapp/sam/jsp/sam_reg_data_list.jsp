<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>数据质量校验报告</title>
<%@include file="/common/quote/jquery.html"%>
<link rel="stylesheet" href="${base }/common/css/table2.css" type="text/css">
<style type="text/css">
table span {
	cursor: pointer;
}
</style>
<script type="text/javascript">
	$(function() {
		parent.document.getElementById("checkFrame").style.height = $(document)
				.height()
				+ $(document).scrollTop() + "px";

		parent.loadingHide();
	});
</script>
</head>
<body scroll="no">
	<p class="pTitle">监管指标数据报告</p>
	<table class="tab" style="width: 100%" cellpadding="6" cellspacing="0">
		<tr>
			<td class="tab_label_c" style="width: 120px;">机构名称</td>
			<td class="tab_field">${organName }</td>
		</tr>
		<tr>
			<td class="tab_label_c">数据日期</td>
			<td class="tab_field">${date }</td>
		</tr>
		<tr>
			<td class="tab_label_c">数据类型</td>
			<td class="tab_field">${checkTypeName }</td>
		</tr>
	</table>
	<br>
	<div style="text-align: right; width: 100%; height: 20px;">单位:万元,%</div>
	<table class="tab" style="width: 100%" cellpadding="6" cellspacing="0">
		<tr>
			<td class="tab_label_c">指标名称</td>
			<td class="tab_label_c">本期</td>
			<td class="tab_label_c">比上期</td>
			<td class="tab_label_c">比年初</td>
		</tr>
		<c:if test="${resultSize==0 }">
			<tr>
				<td class="tab_field_c" colspan="4">不存在监管指标</td>
			</tr>
		</c:if>
		<c:forEach var="sd" items="${obj}">
			<tr>
				<td class="tab_label">${sd.regName }</td>
				<td class="tab_field_c"><span title="${sd.bqValueMsg }">${sd.bqValue }</span></td>
				<td class="tab_field_c"><span title="${sd.sqValueMsg }">${sd.sqValue }</span></td>
				<td class="tab_field_c"><span title="${sd.ncValueMsg }">${sd.ncValue }</span></td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>