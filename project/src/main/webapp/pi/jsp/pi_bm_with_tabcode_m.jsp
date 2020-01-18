<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>部门与PISA报表对应情况</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/pi_bm_with_tabcode_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
					<a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增</a> 
					<span class="separator"></span>
					部门：<input id="bm" name="bm" style="width: 140px;" popupHeight="80px;" popupWidth="310px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='BM_PI'" textField="bmName"  showFolderCheckBox="true" parentField="pId"  valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect" resultAsTree="false" expandOnLoad="true" showClose="true" oncloseclick="onCloseClick" checkRecursive="true" />
					&nbsp;&nbsp;报表：<div id="tabcode" name="tabcode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" popupHeight="200px;" style="width: 300px;;" popupWidth="450px;"  multiSelect="false" textField="tableName" valueField="tableCode"
							url="${base}/pi/getTableInfoListForBm.nut" >
							<div property="columns">
								<div header="表中文名称" field="tableName"></div>
								<div header="表数据库名称" field="tableCode"></div>
							</div> 
						</div>
					&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="bmWithTabcodeGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/pi/bmWithTabCode/getList.nut"
		 showPager="false" allowAlternating="true" multiSelect="true">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tabcode" sortField="TABCODE" autoEscape="true" align="center" allowSort="true" headerAlign="center">报表</div>
				<div field="bm" sortField="bm" name="bm"width="40" align="center" allowSort="true" headerAlign="center">部门</div>
				<div field="id" width="30" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>