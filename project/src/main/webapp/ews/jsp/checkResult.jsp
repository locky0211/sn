<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>模型数据展示</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var id = '${param.id}';
	var brNo = '${param.brNo}';
	var reportDate = '${param.reportDate}';
	var startDate = '${param.startDate}';
	var endDate = '${param.endDate}';
	var fieldCode = '${param.fieldCode}';
</script>
<script type="text/javascript" src="${base }/ews/js/checkResult.js"></script>
<%HttpSession Session = request.getSession();
  String dateformat = (String)Session.getAttribute("DateFormat");
%>
</head>
<body>
<input type="hidden" id="a" value="<%=dateformat%>"/>
<c:set var="dateformat" value="${sessionScope.DateFormat }"></c:set>
<c:if test="${dateformat =='1'}">
	<div id="indDataForm" method="post">
		<div class="mini-toolbar" style="border-top: 0; border-top-width: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="white-space: nowrap;"><a class="mini-menubutton " id="exportExcelBtn" menu="#popupMenu" iconCls="icon-excel">导出..</a>
						<ul id="popupMenu" class="mini-menu" style="display: none;">
							<li iconCls="icon-excel" onclick="doExportExcel('${param.id}',false)">导出当前页</li>
							<li iconCls="icon-excel" onclick="doExportExcel('${param.id}',true)">导出所有数据</li>
						</ul></td>
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">

		<div id="checkDataGrid" multiSelect="true" class="mini-datagrid" url="${base}/check/result/getCheckResult.nut?id=${param.id}&brNo=${param.brNo}&reportDate=${param.reportDate}"
			style="width: 100%; height: 100%" bordercolor="#003366" borderStyle="border-top:0" pageSize="60" showPager="true"></div>
	</div>
	</c:if>
	
	<c:if test="${dateformat =='2'}">
	<div id="indDataForm" method="post">
		<div class="mini-toolbar" style="border-top: 0; border-top-width: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="white-space: nowrap;"><a class="mini-menubutton " id="exportExcelBtn" menu="#popupMenu" iconCls="icon-excel">导出..</a>
						<ul id="popupMenu" class="mini-menu" style="display: none;">
							<li iconCls="icon-excel" onclick="doExportExcel_sd('${param.id}',false)">导出当前页</li>
							<li iconCls="icon-excel" onclick="doExportExcel_sd('${param.id}',true)">导出所有数据</li>
						</ul></td>
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">

		<div id="checkDataGrid" multiSelect="true" class="mini-datagrid" url="${base}/check/resultsd/getCheckResult.nut?id=${param.id}&brNo=${param.brNo}&startDate=${param.startDate}&endDate=${param.endDate}"
			style="width: 100%; height: 100%" bordercolor="#003366" borderStyle="border-top:0" pageSize="60" showPager="true"></div>
	</div>
	</c:if>
</body>
</html>