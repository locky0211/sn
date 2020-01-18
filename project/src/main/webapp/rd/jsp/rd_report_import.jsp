<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/rd_report_import.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportImportForm">
		<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect" onvaluechanged="gridLoad()" resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true" value="<%= brno%>"/>
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" onvaluechanged="rDateChanged()" /> &nbsp;&nbsp;报表类型:&nbsp; <input
						id="tabType" name="tabType" class="mini-combobox" style="width: 60px;" textField="zdName" valueField="zdValue" required="true" allowInput="false" onvaluechanged="gridLoad()" />
						<div id="autoZero" name="autoZero" class="mini-checkbox" readOnly="false" text="自动补零" value="1"></div> &nbsp;&nbsp;<input id="excelUpload" style="width: 180px;"
						uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.xls;*.zip;*.rar" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true"
						onuploadsuccess="onUploadsuccess" /> <a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入</a><!--  <a class="mini-button" iconCls="icon-excel" onclick="doReportExport()">导出</a> -->
						<a class="mini-button" iconCls="icon-excel" onclick="downLoadExcels()">全部下载</a>
						<!-- <a class="mini-button" iconCls="icon-ok" onclick="showTab('RD_REPORT_CHECK_OLD','报表校验','rd/jsp/rd_report_check_old.jsp')">开始校验</a> -->
						</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="showReportView" style="width: 100%; height: 100%" url="${base}/rd/report/import/getRdTableInfoListByBrNo.nut"
			showPager="false" allowAlternating="true">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" headerAlign="center">报表名称</div>
				<div field="tabType" width="20" align="center" headerAlign="center">报表类型</div>
				<div field="versionNo" width="20" align="center" headerAlign="center">版本号</div>
				<div field="errorMsg" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">导入状态</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="40" align="center" headerAlign="center">导入时间</div>
				<div field="reportId" headerAlign="center" width="40" align="center" renderer="onRenderer">数据文件</div>
			</div>
		</div>
	</div>
</body>
</html>