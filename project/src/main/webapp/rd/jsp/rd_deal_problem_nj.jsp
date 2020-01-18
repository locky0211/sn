<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>南京问题处置页面</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_deal_problem_nj.js"></script>
<script type="text/javascript">
var userRole='${sessionUserRoleId}';
</script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="dealProblemForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
					&nbsp;&nbsp;待处理问题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="font-family: Verdana;">机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						 class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />
						 &nbsp;&nbsp;开始日期:&nbsp;<input id="rDate"
						name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" />
						 &nbsp;&nbsp;结束日期:&nbsp;<input id="endDate"
						name="endDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" />
						&nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue" url="${base}/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE"  allowInput="false" />
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-ok" onclick="searchCL()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	
		<div id="dealProblemGrid" class="mini-datagrid" style="width: 100%; height: 44%" onrowdblclick="showRelateCheckResultsCL"
			url="${base}/rd/problem/summary/getProblemSummary.nut" showPager="true" pageSize="20" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="true">
			<div property="columns" >
				<div type="checkcolumn" width="10" align="center" headerAlign="center" ></div>
				<div field="organNo"   width="30" align="center" headerAlign="center">机构</div>
				<div field="reportNoStr"  width="30" align="center" headerAlign="center" >报表编号</div>
				<div field="reportName" width="50" headerAlign="center">报表名称</div>
				<div field="reportDate" width="20" align="center" headerAlign="center" >报表日期</div>
				<div field="tabType" width="20" headerAlign="center" align="center" renderer="tabTypeRenderer">报表类型</div>
				<div field="checkType" width="20" align="center" headerAlign="center"  renderer="checkTypeRenderer">校验类型</div>
				<div field="reExamine" width="20" align="center" headerAlign="center" renderer="reExamineRenderer">审核类型</div>
				<div field="errorLevel" width="20" visible="false" align="center" headerAlign="center">错误等级</div>
				<div width="60" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
		
		<div id="dealProblemSaveForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
					&nbsp;&nbsp;问题流转信息&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style="font-family: Verdana;">机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						 class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />
						 &nbsp;&nbsp;报表日期:&nbsp;<input id="rDate"
						name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" />
						&nbsp;&nbsp;结束日期:&nbsp;<input id="endDate"
						name="endDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" />
						&nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue" url="${base}/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE"  allowInput="false" />
						审核类型:&nbsp;<input id="reExamine" name="reExamine" class="mini-combobox" textField="reExamineName" valueField="reExamineValue" data="[{reExamineValue:'0',reExamineName:'初审'},{reExamineValue:'1',reExamineName:'复审'}]" allowInput="false" style="width: 80px;" showClose="true" oncloseclick="onCloseClick" />&nbsp;&nbsp;
						问题状态:&nbsp;<input id="problemState" name="problemState" class="mini-combobox" textField="stateName" valueField="stateValue" data="[{stateValue:'0',stateName:'已存档'},{stateValue:'1',stateName:'正在处理'}]" allowInput="false" style="width: 100px;" showClose="true" oncloseclick="onCloseClick" />&nbsp;&nbsp;
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-ok" onclick="searchCD()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
		<div id="dealProblemSaveGrid" class="mini-datagrid" style="width: 100%; height: 44%" onrowdblclick="showRelateCheckResultsCL"
			url="${base}/rd/problem/summary/getDealProblemSave.nut" showPager="true" pageSize="20"  allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="true">
			<div property="columns" >
				<div type="checkcolumn" width="10" align="center" headerAlign="center" ></div>
				<div field="organNo"   width="80" align="center" visible="false" headerAlign="center">机构</div>
				<div field="organName"   width="80" align="center" headerAlign="center">机构</div>
				<div field="reportNoStr"  width="30" align="center" headerAlign="center" >报表编号</div>
				<div field="reportName" width="100" headerAlign="center">报表名称</div>
				<div field="reportDate" width="20" align="center" headerAlign="center" >报表日期</div>
				<div field="tabType" width="20" headerAlign="center" align="center" renderer="tabTypeRenderer">报表类型</div>
				<div field="checkType" width="20" align="center" headerAlign="center"  renderer="checkTypeRenderer">校验类型</div>
				<div field="reExamine" width="20" align="center" headerAlign="center" renderer="reExamineRenderer">审核类型</div>
				<div field="state" renderer="onDealProblemState" align="center" headerAlign="center">问题状态</div>
				<div width="30" renderer="onSaveRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
</body>
</html>