<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_report_check_repay.js"></script>
<script>
$(function() {
	mini.get("formulaType").setValue("1");
});
</script>
</head>
<body>
	<div id="reportCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /> &nbsp;&nbsp;报表日期:&nbsp;<input id="rDate"
						name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" />
						 
						&nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" required="true" allowInput="false" />
						
						<input id="formulaType" class="mini-hidden" showNullItem="false" name="formulaType" textField="typeName" valueField="typeValue" class="mini-combobox" style="width: 100px;" data="[{typeValue:'2',typeName:'异动'}]"
						allowInput="false" />
						
						 <!-- <div id="isRepay" name="isRepay" class="mini-checkbox" readOnly="false" text="校验补报数据"></div> &nbsp;&nbsp; -->
						<a class="mini-button" iconCls="icon-ok" onclick="doReportCheck()">开始校验</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel"
						onclick="doExportExcel()">导出Excel</a>
						<input id="isRepay" name="isRepay" class="mini-hidden" value="${param.isRepay }" />
						<input id="cUser" name="cUser" class="mini-hidden" value="${param.cUser }" />
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div style="width: 100%;">
		校验结果:&nbsp;&nbsp; <font color='blue' style="font-size: 15px" id="noPassFont"></font>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" onrowclick="showCheckView" style="width: 100%; height: 100%"
			url="${base}/rd/check/getRdReportCheckResultsRepay.nut" showPager="false" onload="onGridLoad" allowAlternating="true">
			<div property="columns">
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="20" align="center" headerAlign="center">机构</div>
				<div field="checkRisk" sortField="CHECK_RISK" allowSort="true" width="20" align="center" headerAlign="center" renderer="onRiskRenderer">风险等级</div>
				<div field="formula" autoEscape="true" width="40" headerAlign="center">校验公式</div>
				<div field="content" width="80" headerAlign="center" renderer="onErrorMsgRenderer">错误信息</div>
				<div field="formulaMark" width="40" headerAlign="center">公式描述</div>
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="操作结果" style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true"
		allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>