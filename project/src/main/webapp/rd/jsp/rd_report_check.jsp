<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_report_check.js"></script>
</head>
<body>
	<div id="reportCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 250px;"
						popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="false" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut"
						onvaluechanged="gridLoad()" textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />
						&nbsp;&nbsp;报表日期:&nbsp;<input id="reportDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" onvaluechanged="gridLoad()"/> &nbsp;&nbsp;监测频度:&nbsp; <input id="checkType"
						name="checkType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_YIDONG_FORMULA_TYPE" required="true" onvaluechanged="gridLoad()"
						allowInput="false" />&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-ok" onclick="doReportCheck()">开始校验</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-down" 
						onclick="doExportExcel('0')">导出波动值</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-down" onclick="doExportExcel('1')">导出差值</a></td>
				</tr>
				<!-- <tr>
					<td><label class="mini-right">A1:报表指标本期值;A0:报表指标上期值;C0:报表指标去年同期值</label></td>
				</tr> -->
				<tr><td>波动幅度:"∞"表示本期值不为"0",上期值为"0".<span class="separator"></span>公式：A1表示本期值,A0表示上期值,C0表示去年同期值.</td></tr>
			</table>
		</div>
	</div>
	<!-- <div style="width: 100%;">
		校验结果:&nbsp;&nbsp; <font color='blue' style="font-size: 15px" id="noPassFont"></font>
	</div> -->
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%" url="${base}/rd/check/wave/getRdCheckInfoListByBrNoForYD.nut" showPager="false"
			allowAlternating="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" headerAlign="center">报表名称</div>
				<div field="tabType" width="20" align="center" headerAlign="center">报表类型</div>
				<div field="versionNo" width="20" align="center" headerAlign="center">版本号</div>
				<div field="reportNoStr" headerAlign="center" width="40" align="center" renderer="onRenderer">数据文件</div>
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="操作结果" style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true" allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>