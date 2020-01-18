<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>存贷款汇总校验</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dl/js/dlReportSummaryCheck.js"></script>
<%
	HttpSession Session = request.getSession();
	String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;" id="dlCheckForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						&nbsp;&nbsp;机构:&nbsp;
						<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DL'" 
							style="width: 240px;" parentField="pId" valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" 
							showClose="true" textField="bmName" popupHeight="250px;" popupWidth="300px;"/>
						<span class="separator"></span>
						&nbsp;报表日期:&nbsp;
						<input id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 150px;">
						<span class="separator"></span> 
						&nbsp;大集中报表编号:&nbsp;
						<input id="bfTabCode" class="mini-textbox" style="width: 150px;" value="A1411"/>
						<span class="separator"></span> 
						&nbsp;汇总类型&nbsp;
						<input id="sumType" name="sumType" class="mini-combobox" showNullItem="true" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DL_SUM_TYPE" 
							style="width: 80px" textField="zdName" valueField="zdValue" oncloseclick="onCloseClick" showClose="true" />
						&nbsp;&nbsp;&nbsp;
						<a iconCls="icon-goto" class="mini-button" onclick="excute()">开始校验</a>
						&nbsp;&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" onrowdblclick="viewDetail" 
			url="${base}/dl/summaryCheck/getResultsList.nut" showPager="false" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="10" headerAlign="center">序号</div>
				<div field="brNo" name="brNo" width="50" align="center" headerAlign="center">机构</div>
				<div field="reportDate" width="20" align="center" headerAlign="center">报文日期</div>
				<div field="bfTabCode" width="30" align="center" headerAlign="center">大集中报表编号</div>
				<div field="sumType" width="20" align="center" renderer="onSumTpyeRenderer" headerAlign="center">汇总类型</div>
				<div name="edit" width="30" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="操作结果" style="width: 500px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true"
		allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>