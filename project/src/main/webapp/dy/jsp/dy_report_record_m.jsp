<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>导入查看</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dy/js/dy_report_record_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><span>用户名：</span><input id="userId" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;<span>报表日期：</span> <input
						id="reportDate" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;<span>报表类型:&nbsp; <input
						id="tabType" name="tabType" class="mini-combobox" style="width: 100px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE_WJ" required="true"
						allowInput="false" onvaluechanged="gridLoad()" />&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a></td>
				</tr>
			</table>
		</div>

	</div>
	<div class="mini-fit">
		<div id="sysNoticeGrid" multiSelect="true"  class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/dy/report/record/getDyReportRecordList.nut">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="userId" align="center" headerAlign="center"  width="30">用户名</div>
				<div field="brNo" align="center" headerAlign="center"  width="50" renderer="onRendererBrNo">机构</div>
				<div field="reportDate" align="center" headerAlign="center"  width="30">报表日期</div>
				<div field="tabType" align="center" headerAlign="center"  width="30"  renderer="onRendererType">报表类型</div>
				<div field="tabName" align="center" headerAlign="center"  width="50">导入表名</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="30" align="center" headerAlign="center">导入日期</div>
			</div>
		</div>
	</div>
</body>
</html>