<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bf_report_check_yd_list.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="waveResultsForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 230px;"
						popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='BF'"
						value="<%= brno%>" textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 100px;" class="mini-monthpicker" format="yyyyMM" showClose="true" oncloseclick="onCloseClick"/> &nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 120px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_TABLE_TAB_TYPE" 
						allowInput="false" showClose="true" oncloseclick="onCloseClick"/>&nbsp;&nbsp;校验频度:&nbsp; <input id="reportRate" name="reportRate" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue" 
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_YIDONG_FORMULA_TYPE" allowInput="false" showClose="true" oncloseclick="onCloseClick"/>&nbsp;&nbsp;报表代码：&nbsp;<input id="tabcode"
						class="mini-textbox" style="width: 80px;" />&nbsp;&nbsp;项目：<input id="checkProject" class="mini-textbox" style="width: 160px;" />
						<a class="mini-button" iconCls="icon-ok" onclick="search()">查询</a>
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doExportExcel()">导出Excel</a></td>
				</tr>
				<tr>
					<td><label class="mini-right">A1:报表指标本期值;A0:报表指标上期值;C0:报表指标去年同期值</label></td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="waveResultsGrid" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%" url="${base}/bf/check/wave/getRdReportCheckResults.nut" showPager="false"
			 allowAlternating="true" allowCellEdit="true" allowCellSelect="true">
			<div property="columns">
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="40" align="center" headerAlign="center">机构</div>
				<div field="reportNoStr" sortField="report_no_str" allowSort="true" name="reportNoStr" width="40" align="center" headerAlign="center">报表名称</div>
				<div field="element" autoEscape="true" width="40" headerAlign="left" renderer="onElementRenderer">指标编号</div>
				<div field="checkProject" autoEscape="true" width="40" headerAlign="left">项目</div>
				<div field="reportRate" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onFormulaRenderer">公式</div>
				<div field="valueArea" autoEscape="true" width="40" headerAlign="center" align="center">阈值</div>
				<div field="dValue" autoEscape="true" width="40" headerAlign="center" align="center" renderer="ondValueRenderer">允许差值(万元)</div>
				<div field="value" autoEscape="true" width="40" headerAlign="center" align="center">波动幅度</div>
				<div field="dValue" autoEscape="true" width="40" headerAlign="center" align="center">波动差(万元)</div>
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