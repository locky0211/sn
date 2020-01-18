<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="rdr" uri="../tld/table_report_results_yd_range.tld"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/rd/css/rd_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/rd/css/rd_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${base }/rd/js/rd_table_report_results_yd_range.js"></script>
<title>报表数据页</title>
</head>
<body  onload="ReWritable()">
	<c:if test="${tableInfo==null}">
		<div class="redfont pTitle">该日期下无该报表模板!!!</div>
	</c:if>
	<c:if test="${tableInfo!=null}">
		<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
			<div title="center" region="center" style="border: 0;" bodyStyle="padding: 0px;">
				<form id="rdTableReportForm" action="">
					<input id="isChanged" name="isChanged" value="n" type="hidden">
					<input class="mini-hidden" id="tableId" name="tableId" value="${tableInfo.tableId }">
					<input class="mini-hidden" id="reportDate" name="reportDate" value="${reportDate }">
					<input class="mini-hidden" id="brNo" name="brNo" value="${brNo }" />
					<input class="mini-hidden" id="cUser" name="cUser" value="${cUser }" />
					<input class="mini-hidden" id="checkType" name="checkType" value="${checkType }" />
					<input class="mini-hidden" id="isdValue" name="isdValue" value="${isdValue }" />
					<p class="pTitle">${tableInfo.tabName }</p>
					<rdr:rdReportResultsRangeTag tableId="${tableInfo.tableId }" brNo="${brNo }" reportDate="${reportDate }" checkType="${checkType }" cUser="${cUser }" isdValue="${isdValue }" ></rdr:rdReportResultsRangeTag>
				</form>
			</div>
		</div>
	</c:if>
</body>
</html>