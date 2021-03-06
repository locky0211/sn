<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="rdr" uri="../tld/table_report_results_yd_range_jg.tld"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/dy_xcz/css/dy_xcz_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/dy/css/dy_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
	var tarStr = '${tarStr}';
</script>
<script type="text/javascript" src="${base }/dy_xcz/js/dy_xcz_table_report_results_yd_range_jg.js"></script>

<title>报表数据页</title>
</head>
<body>
	<c:if test="${tableInfo==null}">
		<div class="redfont pTitle">该日期下无该报表模板!!!</div>
	</c:if>
	<c:if test="${tableInfo!=null}">
		<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
			<div title="center" region="center" style="border: 0;" bodyStyle="padding: 0px;">
				<form id="rdTableReportForm" action="">
					<div id="tips" style="position:absolute;border:1px solid black;padding:0px 3px;color:black;display:none;overflow:auto; max-width:450px;word-break:break-all;line-height:25px;background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#fff), to(#ccc));z-index:100;border-radius: 5px;-moz-border-radius: 5px;-o-border-radius: 5px;-khtml-border-radius: 5px;-webkit-border-radius: 5px; "></div>
					<input id="isChanged" name="isChanged" value="n" type="hidden">
					<input type="hidden" id="tableId" name="tableId" value="${tableInfo.tableId }">
					<input type="hidden" id="reportDate" name="reportDate" value="${reportDate }">
					<input type="hidden" id="brNo" name="brNo" value="${brNo }" />
					<input type="hidden" id="cUser" name="cUser" value="${cUser }" />
					<input type="hidden" id="checkType" name="checkType" value="${checkType }" />
					<input type="hidden" id="isdValue" name="isdValue" value="${isdValue }" />
					<p class="pTitle">${tableInfo.tabName }</p>
					<rdr:dyXczReportResultsRangeJGTag tableId="${tableInfo.tableId }" brNo="${brNo }" reportDate="${reportDate }" checkType="${checkType }" cUser="${cUser }" isdValue="${isdValue }" ></rdr:dyXczReportResultsRangeJGTag>
				</form>
			</div>
		</div>
	</c:if>
</body>
</html>