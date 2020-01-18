<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="rdr" uri="../tld/table_report.tld"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/ir/css/ir_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/ir/css/ir_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
	var tarStr = '${tarStr}';
</script>
<script type="text/javascript" src="${base }/ir/js/ir_table_report.js"></script>
<%--<c:if test="${tableInfo!=null}">
	<script type="text/javascript" src="${base }/ir/autojs/${tableInfo.tabCode }_${tableInfo.versionNo }.js"></script>
</c:if>--%>
<title>报表数据页</title>
</head>
<body onload="ReWritable()">
	<c:if test="${reportId==null}">
		<div class="redfont pTitle">未能获取报表数据!!!</div>
	</c:if>
	<c:if test="${reportId!=null}">
		<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
			<div title="north" visible="false" region="north" height="90" bodyStyle="word-break:break-all;padding-left:5px;" showHeader="false" showSplit="false"
				allowResize="false">
				&nbsp;错误指标:<br>${attention }
			</div>
			<div title="center" region="center" style="border: 0;" bodyStyle="padding: 0px;">
				<form id="rdTableReportForm" action="">
					<input id="isChanged" name="isChanged" value="n" type="hidden">
					<input type="hidden" id="tableId" name="tableId" value="${tableInfo.tableId }">
					<input type="hidden" id="reportId" name="reportId" value="${reportId }">
					<input type="hidden" id="bjFlag" name="bjFlag" value="${bjFlag }"> 
					<p class="pTitle">${tableInfo.tabName }</p>
					<rdr:irReportTag reportId="${reportId }" bjFlag="${bjFlag }"></rdr:irReportTag>
				</form>
			</div>
			<div title="south" visible="false" region="south" showSplit="false" showHeader="false" allowResize="false" height="60"
				style="text-align: center; padding-top: 15px;" splitSize="0">
				<a class="mini-button" iconCls="icon-save" onclick="doSaveReportDate()">保存</a>&nbsp;&nbsp;&nbsp;
				<a class="mini-button" iconCls="icon-upload2" onclick="doTableReportImport()">导入</a>&nbsp;&nbsp;&nbsp;
				<!-- <a class="mini-button" iconCls="icon-ok" onclick="doReportCheck()">校验</a>&nbsp;&nbsp;&nbsp; -->
				<a class="mini-button" iconCls="icon-excel" onclick="doExportExcel()">导出</a>&nbsp;&nbsp;&nbsp; <a class="mini-button" iconCls="icon-edit1"
					onclick="doRepaceReportData()">覆盖</a>&nbsp;&nbsp;&nbsp; <a class="mini-button" iconCls="icon-reload" onclick="doReload()">重置</a>&nbsp;&nbsp;&nbsp; <a
					class="mini-button" iconCls="icon-cancel2" onclick="CloseWindow()">关闭</a>
			</div>
		</div>
	</c:if>
</body>
</html>