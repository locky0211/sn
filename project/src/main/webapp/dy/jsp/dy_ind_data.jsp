<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_ind_data.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="indDatasForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">&nbsp;&nbsp;&nbsp;机构:&nbsp;</label> <input id="brNo" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" value="<%= brno%>" textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode"
						resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />&nbsp;&nbsp;&nbsp;&nbsp;报表日期:&nbsp;&nbsp;&nbsp;<input id="dataDate" name="reportDate" style="width: 80px;"
						class="mini-monthpicker" format="yyyyMM" required="true" />&nbsp;&nbsp;&nbsp;指标周期:&nbsp;&nbsp;&nbsp;<input id="indType" name="indType" class="mini-combobox" style="width: 80px;"
						textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_IND_CYCLE" required="true" allowInput="false" value="${obj.indType }" />&nbsp;&nbsp;&nbsp;<a
						class="mini-button" iconCls="icon-search" onclick="search()">查询</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doExportExcel()">导出Excel</a> <a class="mini-button"
						iconCls="icon-down" onclick="exTree('up')">展开</a> <a class="mini-button" iconCls="icon-up" onclick="exTree('down')">收起</a></td>
					<td style="white-space: nowrap;">单位:万元,%,百分点</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="indDatasGrid" class="mini-treegrid" allowAlternating="true" expandOnLoad="true" showTreeIcon="true" treeColumn="indName" idField="indId" parentField="pId" resultAsTree="false"
			style="width: 100%; height: 100%" url="">
			<div property="columns">
				<div type="indexcolumn" width="20" align="center" headerAlign="center">序号</div>
				<div field="indName" name="indName" width="100">指标名称</div>
				<div field="indValue" width="80" numberFormat="#,0.00" align="center" headerAlign="center" renderer="onIndValueRenderer">本期值</div>
				<div field="sqCon" width="80" numberFormat="#,0.00" align="center" headerAlign="center">比上期</div>
				<div field="ncCon" width="80" numberFormat="#,0.00" align="center" headerAlign="center">比年初</div>
				<div field="qntqCon" width="80" numberFormat="#,0.00" align="center" headerAlign="center">比去年同期</div>
			</div>
		</div>
	</div>
</body>
</html>