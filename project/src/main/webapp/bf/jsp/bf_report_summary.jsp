<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/bf_report_summary.js"></script>
</head>
<body>
	<div id="reportImportForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;"
						popupHeight="350px;" popupWidth="250px;" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut?bmCategory=BF"
						textField="bmName" multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode"  allowInput="false"
						onbeforenodeselect="beforenodeselect"  resultAsTree="false"  showClose="true" oncloseclick="onCloseClick" checkRecursive="true"  />
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate"
						style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" onvaluechanged="gridLoad()" /> &nbsp;&nbsp;报表类型:&nbsp; <input
						id="tabType" name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_TABLE_TAB_TYPE" required="true" allowInput="false" onvaluechanged="gridLoad()" />
						&nbsp;&nbsp;<label style="font-family: Verdana;">生成机构: </label> <input id="xnjg" name="xnjg" style="width: 250px;"
						popupHeight="350px;" popupWidth="250px;" required="true" class="mini-treeselect" url="${base }/sys/bm/getBFHZJG.nut"
						textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode"  allowInput="false"
						onbeforenodeselect="" onvaluechanged="gridLoad()" resultAsTree="false"  showClose="true" oncloseclick="onCloseClick" checkRecursive="true"  />
					    &nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doReportSummary()">手动汇总</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doBatchSummary()">自动汇总</a>
						</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="showReportView" style="width: 100%; height: 100%"
			url="${base}/bf/report/Summary/getBfTableInfoListByBrNo.nut" showPager="false"  allowAlternating="true" >
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" headerAlign="center">报表名称</div>
				<div field="tabType" width="20" align="center" headerAlign="center">报表类型</div>
				<div field="versionNo" width="20" align="center" headerAlign="center">版本号</div>
				<div field="errorMsg" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">汇总状态</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="40" align="center" headerAlign="center">汇总时间</div>
				<div field="reportId" headerAlign="center" width="40" align="center" renderer="onRenderer">数据文件</div>
			</div>
		</div>
	</div>
</body>
</html>