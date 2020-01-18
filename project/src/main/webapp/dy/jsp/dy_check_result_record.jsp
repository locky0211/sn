<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表校验历史差错信息汇总</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_check_result_record.js"></script>
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
					<td style="width: 100%;">地区:&nbsp; <input name="bmArea" style="width: 80px;" class="mini-treeselect"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_USER_ORGAN" textField="zdName" multiSelect="false" popupWidth="150px;" parentField="pId"
						valueField="zdValue" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" onvaluechanged="gridLoad()" />
						&nbsp;&nbsp;报表日期:&nbsp;<input id="reportDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true"
						onvaluechanged="gridLoad()" /> &nbsp;&nbsp;报表类型:&nbsp; <input id="tabType" name="tabType" class="mini-combobox" style="width: 80px;"
						textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE" required="true" allowInput="false"
						onvaluechanged="gridLoad()" /> <a class="mini-button" iconCls="icon-search" onclick="doSearch()">查询</a></td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="checkLogGrid" class="mini-datagrid" allowAlternating="true" style="width: 100%; height: 100%"
			url="${base}/dy/check/log/getDyReportCheckLogRecord.nut" showPager="false">
			<div property="columns">
				<div field="areaCodeName" allowSort="true" name="organNo" width="40" align="center" headerAlign="center">机构</div>
				<div field="checkNoPassNum1" allowSort="true" align="center" headerAlign="center" renderer="onRendererNoPass1">校验错误数(数值准确)</div>
				<div field="checkNoPassNum2" allowSort="true" align="center" headerAlign="center" renderer="onRendererNoPass2">校验错误数(敏感关注)</div>
			</div>
		</div>
	</div>
</body>
</html>