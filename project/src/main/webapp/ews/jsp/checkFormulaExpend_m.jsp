<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式扩展</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/checkFormulaExpend_m.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构：<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" style="width: 240px;" parentField="pId"
                        valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span> 表名称：
						<div id="repCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="350px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=EastTableName" textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div> <span class="separator"></span>公式扩展状态：<input id="expendState" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=formulaState" textField="zdName" valueField="zdValue"
						oncloseclick="onCloseClick" showClose="true" style="width: 150px;" />
						<span class="separator"></span>
						公式版本：<input id="version" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CheckVersion" textField="zdName" valueField="zdValue" showClose="true" oncloseclick="onCloseClick" style="width: 100px;" />
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a> 
						<a	iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a> 
						<a iconCls="icon-start" class="mini-button" plain="true" onclick="updateAllState(1)">全部启用</a> 
						<a iconCls="icon-stop" class="mini-button" plain="true" onclick="updateAllState(0)">全部停用</a> 
						<a iconCls="icon-goto" class="mini-button" plain="true" onclick="changeCondition('<')">启用12年之前取数的条件</a> 
						<a iconCls="icon-goto" class="mini-button" plain="true" onclick="changeCondition('>=')">启用12年之后取数的条件</a> 
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="formulaExpendGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/formulaExpend/getFormulaExpendList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="2%" headerAlign="center">序号</div>
				<div field="brName" align="center" width="15%" headerAlign="center">机构名称</div>
				<div name="repCode" width="15%" align="center" renderer="onNameRenderer" headerAlign="center">校验表名</div>
				<div field="version" width="6%" renderer="onVersionNameRenderer" headerAlign="center" align="center">公式版本</div>  
				<div field="formulaExpend" width="48%" align="center" headerAlign="center">公式扩展</div>
				<div name="edit" width="12%" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>