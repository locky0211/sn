<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报文段信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ciReportDataitemInfo_m.js"></script>
</head>
<body>
<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增</a><span class="separator"></span><a class="mini-button"
					iconCls="icon-remove" plain="true" onclick="del()">删除</a></td>
		
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="ReportDataitemInfoGrid"  allowAlternating="true"  borderStyle="border:0;" class="mini-datagrid" style="width: 100%; height: 100%"
			url="${base}/ci/reportDataitem/getReportDataitemInfoList.nut?reportCode=${param.reportCode}&segmentNo=${param.segmentNo}" showPager="false" onrowdblclick="showDataitemView" >
			<div property="columns">			
				<div field="id" width="0">信息记录编号</div>
				<div field="reportCode" width="40" align="center" headerAlign="center">所属报文编号</div>
				<div field="segmentNo" width="40" align="center" headerAlign="center">所属段标号</div>
				<div field="itemTag" width="50" align="center" headerAlign="center">数据项标识符</div>
				<div field="itemName" width="60" align="center" headerAlign="center">数据项名称</div>
				<div field="itemType" width="40" align="center" headerAlign="center">数据项类型</div>
				<div field="itemLength" width="40" align="center" headerAlign="center">数据项长度</div>
				<div field="itemLocation" width="40" align="center" headerAlign="center">数据项位置</div>
				<div field="itemDes" align="center" headerAlign="center">数据项描述</div>
				<div field="relateFlag" width="80" align="center" headerAlign="center">基础段关联字段标识</div>
				<div field="isPrimary" width="80" align="center" headerAlign="center">主键标识</div>
				<div field="mapColumn" width="40" align="center" headerAlign="center">映射字段名</div>
				<div field="mapTable" width="80" align="center" headerAlign="center">映射表名</div>
				<div field="itemStatus" width="40" align="center" headerAlign="center">数据项状态</div>
			</div>
		</div>
	</div>
</body>
</html>