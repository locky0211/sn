<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>考核评分</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_score_result_nj.js"></script>
<%
	HttpSession Session = request.getSession();
	String brno = (String) Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;"id="scoreForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" style="width: 240px;" parentField="pId"
						valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" />
						<span class="separator"></span>开始日期:<input id="startDate" class="mini-DatePicker" required="true" format="yyyyMMdd" style="width: 150px;"><span class="separator"></span>
						<span class="separator"></span>结束日期:<input id="endDate" class="mini-DatePicker" required="true" format="yyyyMMdd" style="width: 150px;"><span class="separator"></span>
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="excute()">开始打分</a>
						<!--&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="exportToExcel()">导出Excel</a> -->
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="resultGrid" class="mini-datagrid" style="width: 100%; height: 100%;" style="width: 100%; height: 44%" onrowdblclick="showRelateCheckResultsCL"
			url="${base}/rd/problem/summary/getProblemSummary.nut" showPager="true" pageSize="20" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="brno" width="30" align="center" headerAlign="center">机构</div>
				<div field="zbsm" width="30" align="center" headerAlign="center">报表日期</div>
				<div name="zbmc" field="zbmc" width="100" align="left" headerAlign="center">指标名称</div>
				<div field="zblb" width="30" align="center"  headerAlign="center">指标类别</div>
				<div field="zbsm" width="30" align="center" headerAlign="center">指标说明</div>
				<div field="df" width="20" align="center" headerAlign="center">扣分</div>
			</div>
		</div>
	</div>
</body>
</html>