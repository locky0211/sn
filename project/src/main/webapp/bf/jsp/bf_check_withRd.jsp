<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据效验</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bf_check_withRd.js"></script>
</head>
<body>
	<div id="bfCheckWithRdForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<label style="font-family: Verdana;">1104机构:&nbsp;</label><input id="rdBmcode" showClose="true" onvaluechanged="rdChange()" oncloseclick="onCloseClick"
						name="rdBmcode" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="false" checkRecursive="true" multiSelect="false"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" expandOnLoad="false"/> 
						<label style="font-family: Verdana;">&nbsp;&nbsp;大集中机构:&nbsp;</label><input id="bfBmcode" showClose="true" onvaluechanged="bfChange()" oncloseclick="onCloseClick"
						name="bfBmcode" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="false" checkRecursive="true" multiSelect="false"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='BF'"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="" expandOnLoad="false"/>
						&nbsp;&nbsp;报表日期:&nbsp;<input id="reportDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" />
						&nbsp;&nbsp;校验类型:&nbsp;<input id="type" name="type" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_CHECK_WITHRD_TYPE" required="true" allowInput="false" />
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-ok" onclick="doReportCheck()">开始校验</a>
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearch()">查找</a>
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel"onclick="doExportExcel()">导出Excel</a>
				</tr>
			</table>
		</div>
	</div>
	<div style="width: 100%;">
		校验结果:&nbsp;&nbsp; <font color='blue' style="font-size: 15px" id="noPassFont"></font>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="bfCheckWithRdGrid" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%"
			url="${base}/bf/check/withRd/getBfCheckWithRdResults.nut" showPager="false" onload="onGridLoad" allowAlternating="true" allowCellEdit="true" allowCellSelect="true">
			<div property="columns">
				<div field="rdBmcode" sortField="RD_BMCODE" allowSort="true" name="rdBmcode" width="20" align="center" headerAlign="center">1104机构</div>
                <div field="bfBmcode" sortField="BF_BMCODE" allowSort="true" name="bfBmcode" width="20" align="center" headerAlign="center">大集中机构</div>
                <div field="formula" autoEscape="true" width="40" headerAlign="center">校验公式</div>
				<div field="result" width="80" headerAlign="center" renderer="onErrorMsgRenderer">错误信息</div>
			</div>
		</div>
	</div>
</body>
</html>