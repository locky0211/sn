<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表异动监测</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bf_report_check_yd_checkWave.js"></script>
<%
	HttpSession Session = request.getSession();
	String brno = (String) Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 250px;"
						popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="false" multiSelect="true" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='BF'"
						textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" /> &nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 120px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_TABLE_TAB_TYPE" required="true"
						allowInput="false" />&nbsp;&nbsp;校验频度:&nbsp; <input id="reportRate" name="reportRate" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue" 
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_YIDONG_FORMULA_TYPE" required="true"allowInput="false" />
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-ok" onclick="search()">查询</a>
						&nbsp;&nbsp;&nbsp;</td>
				</tr>
				<tr>
					<td>波动幅度为"∞"表示本期值不为"0",上期值为"0"</td>
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="showCheckView" style="width: 100%; height: 100%" url="${base}/bf/check/wave/newCheck/getRdReportCheckResultsNewList.nut"
			onload="onGridLoad" showPager="false" allowAlternating="true" allowCellEdit="true" allowCellSelect="true">
			<div property="columns">
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" width="60" headerAlign="center">报表名称</div>
				<div field="tabType" width="30" align="center" headerAlign="center">报表类型</div>
				<div field="versionNo" width="20" align="center" headerAlign="center">版本号</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="50" align="center" headerAlign="center">导入时间</div>
				<div field="reportId" headerAlign="center" width="60" align="center" renderer="onRenderer">操作</div>
			</div>
		</div>
	</div>

	<div id="win1" class="mini-window" title="操作结果"
		style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()"
		visible="false" showModal="true" allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>