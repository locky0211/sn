<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>机构指标展示</title>
<%@include file="../../common/quote/boot.html"%>
<%@include file="../../common/quote/highCharts.html"%>
<script type="text/javascript" src="../js/dy_ind_data_r2.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body style="overflow: auto;">
	<div id="indDataForm" method="post">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<thead>
					<tr>
						<td style="width: 100%;">指标：<input id="inds" style="width: 300px;" popupHeight="350px;" popupWidth="350px;" required="true"
							class="mini-treeselect" url="${base }/dy/indicators/getIndicatorsBasicInfoList.nut" textField="indName" multiSelect="false" parentField="pId"
							valueField="id" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" onvaluechanged="loadBrNos" /> 机构: <input
							id="brNo" name="brNo" style="width: 250px;" popupHeight="450px;" popupWidth="350px;" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut"
							textField="bmName" parentField="pId" showClose="true" oncloseclick="onCloseClick" valueField="bmCode" resultAsTree="false" allowInput="false"
							multiSelect="true" checkRecursive="true" showFolderCheckBox="true" value="<%= brno%>" onbeforenodeselect="beforenodeselect" /></td>
						<td style="white-space: nowrap;"><a class="mini-button" iconCls="icon-excel" onclick="doExportIndDataExcel()">导出Excel</a>&nbsp;</td>
					</tr>
					<tr>
						<td>开始日期:&nbsp;<input id="sDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" />&nbsp;&nbsp;&nbsp;结束日期:&nbsp;<input
							id="eDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" />&nbsp;&nbsp;&nbsp;<a class="mini-button"
							iconCls="icon-search" onclick="doInitIndData('excel')">查询</a>&nbsp;&nbsp;&nbsp; <a class="mini-button" id="btnExcel" enabled="false"
							iconCls="icon-excel" onclick="doInitIndData('excel')"></a> <a class="mini-button" id="btnPie" iconCls="icon-pie" onclick="doInitIndData('pie')"></a></td>
						<td style="white-space: nowrap;">单位：万元;%</td>
					</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="indGrid" class="mini-datagrid" sortMode="client" style="width: 100%; height: 100%" borderStyle="border-top:0" showPager="false"></div>
		<div id="container" style="width: 100%; height: 800px; display: none;"></div>
	</div>
</body>
</html>