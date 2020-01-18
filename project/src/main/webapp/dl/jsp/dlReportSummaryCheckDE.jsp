<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>存款校验详细</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var resultId = '${param.id}';
</script>
<script type="text/javascript" src="../js/dlReportSummaryCheckDE.js"></script>
</head>
<body>
<input class="mini-hidden" id="resultId" value="${param.id}" />
<div id="excelForm" method="post">
	<div class="mini-toolbar" style="border-top: 0; border-top-width: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="white-space: nowrap;"><a class="mini-menubutton " id="exportExcelBtn" menu="#popupMenu" iconCls="icon-excel">导出..</a>
					<ul id="popupMenu" class="mini-menu" style="display: none;">
						<li iconCls="icon-excel" onclick="doExportExcel('${param.id}',false)">导出当前页</li>
						<li iconCls="icon-excel" onclick="doExportExcel('${param.id}',true)">导出所有数据</li>
					</ul>
				</td>
			</tr>
		</table>
	</div>
</div>
<div class="mini-fit">
	<div id="dlReportCheckDataGrid" class="mini-datagrid" style="width: 100%; height: 100%;" 
		url="${base}/dl/summaryCheckDE/getDECheckResultsList.nut" showPager="true" pageSize="20" showModified="false">
		<div property="columns">
			<div type="indexcolumn" align="center" headerAlign="center">序号</div>
			<div field="typeCode" align="center" headerAlign="center">类别码</div>
			<div field="typeName" align="center" headerAlign="center">产品类别</div>
			<div field="currBalance" align="center" headerAlign="center">本期余额[A]</div>
			<div field="preBalance" align="center" headerAlign="center">上期余额[B]</div>
			<div field="diffBalance" align="center" headerAlign="center">本上期差额[A-B]</div>
			<div field="bfName" align="center" headerAlign="center">大集中指标</div>
			<div field="bfData" align="center" headerAlign="center">大集中数据[C]</div>
			<div field="diffValue" align="center" headerAlign="center">差额[A-C]</div>
			<div field="rangeValue" align="center" headerAlign="center">差额百分比[(A-B)*100/B]</div>
		</div>
	</div>
</div>
</body>
</html>