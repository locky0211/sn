<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>指标公式信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="test.js"></script>
</head>
<body>
	
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addCheckFormula()">新增校验公式</a><span
						class="separator"></span> <a class="mini-button" iconCls="icon-edit" plain="true" onclick="edit()">编辑</a><span class="separator"></span> <a
						class="mini-button" iconCls="icon-remove" plain="true" onclick="del()">删除</a> <span class="separator"></span>tableId：<input id="tableid" class="mini-textbox" style="width: 80px;" />
						tabCode：<input id="tabCode" class="mini-textbox" style="width: 80px;" />&nbsp;&nbsp;checkFormula：<input id="checkFormula" class="mini-textbox" style="width: 150px;" />
						&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>&nbsp;&nbsp;<a iconCls="icon-reload"
						class="mini-button" onclick="reloadForm()">重置</a> <!-- &nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>  --><!--&nbsp;&nbsp;<a iconCls="icon-excel"
						class="mini-button" onclick="importExcel()">导入</a> &nbsp;&nbsp;<a iconCls="icon-excel"
						class="mini-button" onclick="rollback()">还原</a> --></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkFormulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/ir/test/getList.nut" allowAlternating="true" pageSize="100" multiSelect="true"
			showModified="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tabCode" width="40" align="center" allowSort="true" headerAlign="center">tabcode</div>
				<div field="tableid" width="40" align="center" allowSort="true" headerAlign="center">tableId</div>
				<div field="checkFormula" sortField="CHECK_FORMULA" autoEscape="true" align="center" allowSort="true" headerAlign="center">checkFormula</div>
			</div>
		</div>
	</div>
</body>
</html>