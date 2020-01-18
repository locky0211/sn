<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>1104与EAST校验</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sam/js/rd_check_east_m.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;"id="rdCheckForm" >
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<label style="font-family: Verdana;">1104机构:&nbsp;</label><input id="brNo" showClose="true" onvaluechanged="rdChange()" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="false" checkRecursive="true" multiSelect="false"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" expandOnLoad="false"/> 
						
						<label style="font-family: Verdana;">&nbsp;&nbsp;EAST机构:&nbsp;</label><input id="eastBmcode" showClose="true" onvaluechanged="eastChange()" oncloseclick="onCloseClick"
						name="eastBmcode" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="false" checkRecursive="true" multiSelect="false"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" expandOnLoad="false"/>
						
						<span class="separator"></span>报表日期:<input
						id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 150px;"><span class="separator"></span> <a iconCls="icon-search" class="mini-button"
						plain="true" onclick="search()">查询</a> <a iconCls="icon-add" class="mini-button" plain="true" onclick="excute()">开始校验</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/rd/check/east/getCheckEastList.nut" onrowdblclick="rowdblclick" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="samTableName" width="25" align="left" headerAlign="center">报表编号</div>
				<div name="samName" width="100" align="left" renderer="onSamNameRenderer" headerAlign="center">报表名称</div>
				<div field="samExplain" width="100" align="left" headerAlign="center">报表指标</div>
				<div field="samValue" width="35" align="center" headerAlign="center">1104报表数值</div>
				<div field="eastValue" width="35" align="center" headerAlign="center">EAST数值</div>
				<div name="balance" width="35" align="center" headerAlign="center" renderer="onBalanceRenderer">数值差额</div>
				<div field="eastExplain" width="100" align="left" headerAlign="center">EAST取数逻辑</div>
				<div field="checkDate" width="40" align="center" headerAlign="center">校验日期</div>

			</div>
		</div>
	</div>
</body>
</html>