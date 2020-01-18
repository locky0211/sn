<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报文报表查看主页面</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ciReportTable_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="white-space: nowrap;"><label style="font-family: Verdana;">报文编号: </label> <input id="reportCode" class="mini-textbox" />&nbsp;&nbsp;
				<label style="font-family: Verdana;">数据段编号: </label> <input id="segmentNo" class="mini-textbox" />&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="search()">查询</a>
				</td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportTableGrid"  allowAlternating="true"  class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/ci/reportTable/getCiReportTbaleList.nut" showPager="false"
			showModified="false" onrowclick="showTableDataView" >
			<div property="columns">
				<div type="indexcolumn" width="2" align="center" headerAlign="center">序号</div>
				<div field="reportCode" width="4" align="center" headerAlign="center">报文编号</div>
				<div field="reportName" width="14" align="left" headerAlign="center">报文名称</div>
				<div field="segmentNo" width="5" align="center" headerAlign="center">数据段编号</div>
				<div field="segmentName" width="15" align="left" headerAlign="center">数据段名称</div>
				<div field="mapTable" width="15" align="left" headerAlign="center">映射报表编号</div>
				<div field="mapTableName" width="15" align="left" headerAlign="center">映射报表名称</div>
				<div name="action" headerAlign="center" width="10" align="center" renderer="onRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>