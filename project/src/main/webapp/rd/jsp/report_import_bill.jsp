<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表导入清单</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/report_import_bill.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportImportForm">
		
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect"  resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true" value="<%= brno%>"/>
						&nbsp;&nbsp;报表年份:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyy" required="true"  /> &nbsp;&nbsp;报表类型:&nbsp; <input
						id="tabType" name="tabType" class="mini-combobox" style="width: 60px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" required="true" 
						allowInput="false"  />
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearch()">查找</a>
						</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="" style="width: 100%; height: 100%" url="${base}/rd/report/import/getRdReportBill.nut"
			showPager="false" allowAlternating="true">
			<div property="columns">
				<div field="brNo" width="50" align="center" headerAlign="center" renderer="onbrNo">机构名</div>
				<div field="tabType" width="50" align="center" headerAlign="center" renderer="onTabType">报表类型</div>
				<div field="reportDate" width="50" align="center" headerAlign="center">报表日期</div>
				<div field="errorMsg" width="50" align="center" headerAlign="center" renderer="onErrorMsgRenderer">导入状态</div>
			  </div>
		</div>
	</div>
</body>
</html>