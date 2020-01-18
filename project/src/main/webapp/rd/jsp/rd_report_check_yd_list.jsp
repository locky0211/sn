<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异动结果</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_report_check_yd_list.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="waveResultsForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 250px;"
						popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut"
						value="<%= brno%>" textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM"  />&nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 100px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE"
						allowInput="false" onvaluechanged="reportRateValid"/> &nbsp;&nbsp;校验频度:&nbsp; <input id="reportRate" name="reportRate" class="mini-combobox" style="width: 80px;" textField="zdName" 
						valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_YIDONG_FORMULA_TYPE" allowInput="false" />&nbsp;&nbsp;报表代码：&nbsp;<input id="tabcode"
						class="mini-textbox" style="width: 100px;" />&nbsp;&nbsp;项目：<input id="checkProject" class="mini-textbox" style="width: 160px;" />风险等级：<input id="checkRisk" 
						class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=WAVE_CHECK_RISK" 
						multiSelect="false" allowInput="false" showClose="true" oncloseclick="onCloseClick" />
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-ok" onclick="search()">查询</a>
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doExportExcel()">导出Excel</a></td>
				</tr>
				<tr><td>波动幅度:"∞"表示本期值不为"0",上期值为"0".<span class="separator"></span>公式：A1表示本期值,A0表示上期值,C0表示去年同期值.</td></tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="waveResultsGrid" class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/rd/check/wave/getRdReportCheckResultsSearch.nut" showPager="false"
			allowAlternating="false">
			<div property="columns">
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="40" align="center" headerAlign="center">机构</div>
				<div field="reportNoStr" sortField="report_no_str" allowSort="true" name="reportNoStr" width="40" align="center" headerAlign="center">报表名称</div>
				<div field="checkProject" autoEscape="true" width="40" headerAlign="center">项目</div>
				<div field="checkRisk" autoEscape="true" width="40" headerAlign="center" renderer="onRiskRenderer">风险等级</div>
				<div field="reportRate" autoEscape="true" width="40" headerAlign="center" align="center" >校验频度</div>
				<div field="valueArea" autoEscape="true" width="40" headerAlign="center" align="center">阈值</div>
				<div field="value" autoEscape="true" width="40" headerAlign="center" align="center">公式结果</div>
				<div field="dValue" autoEscape="true" width="40" headerAlign="center" align="center">差值</div>
				<div field="cUser" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onUserRenderer">公式属性</div>
				<div field="content" autoEscape="true" width="40" headerAlign="center" align="center">异动说明</div>
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="操作结果" style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true" allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>