<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="rdr" uri="../tld/bf_table_report.tld"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/bf/css/bf_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/bf/css/bf_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
	var tarStr = '${tarStr}';
</script>
<script type="text/javascript" src="${base }/bf/js/bf_table_report_checkWave_t.js"></script>
<title>报表数据页</title>
</head>
<body >
	<c:if test="${reportId==null}">
		<div class="redfont pTitle">上期报表数据未导入!!!</div>
	</c:if>
	<c:if test="${reportId!=null}">
		<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
			<div title="center" region="center" style="border: 0;" bodyStyle="padding: 0px;">
					<form id="rdTableReportForm" action=""  >
					<div id="tips" style="position:absolute;border:1px solid #ccc;padding:0px 3px;color:#f00;display:none;height:20px;line-height:20px;background:#fcfcfc"></div>
					<input type="hidden" id="isChanged" name="isChanged" value="n" >
					<input type="hidden" id="tableId" name="tableId" value="${tableInfo.tableId }">
					<input type="hidden" id="reportId" name="reportId" value="${reportId }">
					<input type="hidden" id="bjFlag" name="bjFlag" value="${bjFlag }"> 
					<input type="hidden" id="reportDate" name="reportDate" value="${reportDate}">
					<input type="hidden" id="flag" name="flag" value="${flag}">
					<input type="hidden" id="tabCode" name="tabCode" value="${tableInfo.tabCode}">
					<input type="hidden" id="rowInfo" name="rowInfo" value="${tableInfo.rowInfo}">
					<p class="pTitle">${tableInfo.tabName }</p>
					<rdr:bfReportCheckWaveTag reportId="${reportId }" bjFlag="${bjFlag }"></rdr:bfReportCheckWaveTag>
				</form>
			</div>
		</div>
	</c:if>
</body>
</html>