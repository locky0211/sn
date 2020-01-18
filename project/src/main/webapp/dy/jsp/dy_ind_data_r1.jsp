<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>机构指标展示</title>
<%@include file="../../common/quote/boot.html"%>
<%@include file="../../common/quote/highCharts.html"%>
<script type="text/javascript" src="../js/dy_ind_data_r1.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body style="overflow: auto;">
	<div id="indDataForm" method="post">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">机构: </label> <input id="brNo" name="brNo" style="width: 250px;" popupHeight="450px;" popupWidth="350px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" value="<%= brno%>" textField="bmName" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false"
						onvaluechanged="initRdIndList()" onbeforenodeselect="beforenodeselect" />&nbsp;&nbsp;指标类型:&nbsp; <input id="indType" name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName"
						valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_IND_CYCLE" required="true" allowInput="false" onvaluechanged="initRdIndList()" />&nbsp;&nbsp;&nbsp;指标：<input id="inds"
						required="true" showClose="true" oncloseclick="onCloseClick" style="width: 250px;" popupHeight="450px;" popupWidth="380px;" required="true" class="mini-treeselect" url="" textField="indName"
						multiSelect="true" checkRecursive="true" showFolderCheckBox="true" parentField="pId" valueField="id" resultAsTree="false" allowInput="false" /></td>
					<td style="white-space: nowrap;"><a class="mini-button" iconCls="icon-excel" onclick="doExportIndDataExcel()">导出Excel</a>&nbsp;</td>
				</tr>
				<tr>
					<td>开始日期:&nbsp;<input id="sDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" />&nbsp;&nbsp;&nbsp;结束日期:&nbsp;<input id="eDate" style="width: 80px;"
						class="mini-monthpicker" format="yyyyMM" required="true" />&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doInitIndData('excel')">查询</a> &nbsp;&nbsp;&nbsp; <a
						class="mini-button" id="btnExcel" enabled="false" iconCls="icon-excel" onclick="doInitIndData('excel')"></a> <a class="mini-button" id="btnPie" iconCls="icon-pie" onclick="doInitIndData('pie')"></a>
					</td>
					<td style="white-space: nowrap;">单位：万元;%</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="indGrid" class="mini-datagrid" sortMode="client" style="width: 100%; height: 100%" borderStyle="border-top:0" showPager="false"></div>
		<div id="container" style="width: 100%; height: 800px; display: none;"></div>
	</div>
</body>
</html>