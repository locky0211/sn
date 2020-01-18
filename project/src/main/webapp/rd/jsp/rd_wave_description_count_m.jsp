<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异动校验结果统计</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_wave_description_count_m.js"></script>
<%
  HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="waveCountTotalForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 80%;">
						<label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect" onvaluechanged="gridLoad()" resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true" value="<%= brno%>"/>
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" onvaluechanged="gridLoad()" /> &nbsp;&nbsp;
						<a class="mini-button" iconCls="icon-search" onclick="search">搜索</a> &nbsp;&nbsp;
						<a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a> 
					</td>
				</tr>
			</table>
		</div>
	</div>
	
		<!--撑满页面-->
	<div class="mini-fit">
		<div id="waveCountTotalGrid" class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%" url="${base}/importWaveDesc/waveDescriptionTotal.nut"
			showPager="false" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" onrowdblclick="showCheckView">
			<div property="columns">
				<div type="indexcolumn" width="8" align="center" headerAlign="center">序号</div>
				<div field="organNo"  align="center" headerAlign="center" visible="false">机构名称</div>
				<div field="organName" align="center" headerAlign="center">机构名称</div>
				<div field="reportDate"  align="center" dateFormat="yyyyMM" headerAlign="center">报表日期</div>
				<div field="num"  align="center" headerAlign="center">异动报备数量</div>
			</div>
		</div>
	</div>
</body>
</html>