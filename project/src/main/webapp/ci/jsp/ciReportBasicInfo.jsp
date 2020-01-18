<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报文基础信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ciReportBasicInfo.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addReportBasicInfo()">新增</a><span class="separator"></span>
					<a class="mini-button" iconCls="icon-edit" plain="true" onclick="update()">编辑</a><span class="separator"></span> <a class="mini-button"
					iconCls="icon-remove" plain="true" onclick="del()">删除</a></td>
				<td style="white-space: nowrap;"><label style="font-family: Verdana;">报文编号: </label> <input id="reportCode" class="mini-textbox" />&nbsp;&nbsp;<a
					class="mini-button" iconCls="icon-search" onclick="search()">查询</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportBasicInfoGrid"  allowAlternating="true"  class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/ci/reportBasic/getReportBasicInfoList.nut" showPager="false"
			showModified="false" onrowdblclick="showSegmentView" >
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="reportCode" width="10" align="center" headerAlign="center">报文编号</div>
				<div field="reportName" align="left" headerAlign="center">报文名称</div>
				<div name="action" headerAlign="center" width="0" align="center" renderer="onRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>