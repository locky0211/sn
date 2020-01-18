<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验结果明细</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var id = '${param.id}';
	var brNo= '${param.brNo}';
	var reportDate= '${param.reportDate}';
	var tableName = '${param.tableName}';
	var fieldName = '${param.fieldName}';
</script>
<script type="text/javascript" src="${base }/dck/js/dckCheckResult.js"></script>
</head>
<body>
<div id="indDataForm" method="post">
		<div class="mini-toolbar" style="border-top: 0; border-top-width: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="white-space: nowrap;"><a class="mini-menubutton " id="exportExcelBtn" menu="#popupMenu" iconCls="icon-excel">导出..</a>
						<ul id="popupMenu" class="mini-menu" style="display: none;">
							<li iconCls="icon-excel" onclick="doExportExcel('${param.id}',false)">导出当前页</li>
							<li iconCls="icon-excel" onclick="doExportExcel('${param.id}',true)">导出所有数据</li>
						</ul>
					</td>
					<td style="white-space: nowrap; float: right;">
						<a class="mini-button " id="exportExcelBtn" iconCls="icon-excel" onclick="doExportExcelChange('${param.id}',true)">导出进行修改</a>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">
	
		<div id="checkDataGrid" multiSelect="true" class="mini-datagrid" url="${base}/dck/result/getCheckResult.nut?id=${param.id}&brNo=${param.brNo}&reportDate=${param.reportDate}" style="width: 100%; height: 100%"
			borderStyle="border-top:0" pageSize="60" showPager="true" onrowdblclick="viewDetail">
		</div>
	</div>
</body>
</html>