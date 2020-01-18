<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表校验差错信息汇总</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_check_log.js"></script>
<style type="text/css">
a {
	text-decoration: underline;
}

a:HOVER {
	text-decoration: underline;
	color: red;
}
</style>
</head>
<body>
	<div id="checkLogForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">&nbsp;&nbsp;报表日期:&nbsp;<input id="reportDate" name="reportDate" style="width: 80px;" class="mini-monthpicker"
						format="yyyyMM" required="true" onvaluechanged="gridLoad()" /> &nbsp;&nbsp;报表类型:&nbsp; <input id="tabType" name="tabType" class="mini-combobox"
						style="width: 80px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" required="true"
						allowInput="false" onvaluechanged="gridLoad()" /> <a class="mini-button" iconCls="icon-search" onclick="doSearch()">查询</a></td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="checkLogGrid" class="mini-datagrid"  allowAlternating="true"  style="width: 100%; height: 100%" url="${base}/rd/check/log/getRdReportCheckLog.nut" showPager="false">
			<div property="columns">
				<div field="areaCodeName" name="organNo" width="40" align="center" headerAlign="center">区域</div>
				<div field="checkNum" name="checkNum" width="40" align="center" headerAlign="center">所有机构</div>
				<div field="doCheckNum" name="doCheckNum" width="40" align="center" headerAlign="center">已校验机构数</div>
				<div field="noCheckNum" align="center" headerAlign="center" renderer="onRendererNoCheck">未校验机构数</div>
				<div field="checkNoPassNum1" align="center" headerAlign="center" renderer="onRendererNoPass1">校验错误数(数值准确)</div>
				<div field="checkNoPassNum2" align="center" headerAlign="center" renderer="onRendererNoPass2">校验错误数(敏感关注)</div>
			</div>
		</div>
	</div>
</body>
</html>