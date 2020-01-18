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
	var tableCode = '${param.tableCode}';
	var fieldName = '${param.fieldName}';
	var reportDate = '${param.reportDate}';
</script>
<script type="text/javascript" src="../js/ciReportDataView_jy.js"></script>
</head>
<body>
<div id="indDataForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 1; text-align:left; padding: 0px;" id="modelName">
		</div>
		<div class="mini-toolbar" style="border-top: 0; border-top-width: 0px;">
			<table style="width: 100%; "> 
				<tr>
					<td style="white-space: nowrap;"><a class="mini-menubutton " id="exportExcelBtn" menu="#popupMenu" iconCls="icon-excel">导出..</a>
						<ul id="popupMenu" class="mini-menu" style="display: none;">
							<li iconCls="icon-excel" onclick="doExportExcel('${param.id}','${param.tableCode}','${param.fieldName}','${param.reportDate}',false)">导出当前页</li>
							<li iconCls="icon-excel" onclick="doExportExcel('${param.id}','${param.tableCode}','${param.fieldName}','${param.reportDate}',true)">导出所有数据</li>
						</ul></td>
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">
		<div id="ciReportDataGrid" multiSelect="true" class="mini-datagrid" url="${base}/ci/reportTable/getReportDataListJy.nut?id=${param.id}&fieldName=${param.fieldName}" style="width: 100%; height: 100%"
			bordercolor="#003366" borderStyle="border-top:0" pageSize="60" showPager="true" onrowdblclick="viewDetail">
			
		</div>
	</div>
</body>
</html>