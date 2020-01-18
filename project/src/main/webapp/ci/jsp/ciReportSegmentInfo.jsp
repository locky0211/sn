<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报文段信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ciReportSegmentInfo.js"></script>
</head>
<body>
<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-edit" plain="true" onclick="showDataitemView()">查看</a><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增</a><span class="separator"></span>
					<a class="mini-button" iconCls="icon-edit" plain="true" onclick="edit()">编辑</a><span class="separator"></span> <a class="mini-button"
					iconCls="icon-remove" plain="true" onclick="del()">删除</a></td>
				
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="ReportSegmentInfoGrid"  allowAlternating="true"  borderStyle="border:0;" class="mini-datagrid" style="width: 100%; height: 100%"
			url="${base}/ci/reportSegment/getReportSegmentInfoList.nut?reportCode=${param.reportCode}" showPager="false" onrowdblclick="showDataitemView">
			<div property="columns">			
				<div field="id" width="0">编号</div>
				<div field="reportCode" width="40" align="center" headerAlign="center">报文编号</div>
				<div field="segmentNo" width="40" align="center" headerAlign="center">段标号</div>
				<div field="segmentName" width="70" align="center" headerAlign="center">段名称</div>
				<div field="segmentDes" align="center" headerAlign="center">段描述</div>
				<div field="appearNum" width="40" align="center" headerAlign="center">段出现次数</div>
				<div field="segmentStatus" width="40" align="center" headerAlign="center">段状态</div>
				<div field="mapTable" width="100" align="center" headerAlign="center">映射表名</div>
				<div name="action" headerAlign="center" width="0" align="center" renderer="onRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>