<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ir_report_calculate_formula.js"></script>
</head>
<body>
	
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addCheckFormula()">新增计算公式</a><span
						class="separator"></span> <a class="mini-button" iconCls="icon-edit" plain="true" onclick="edit()">编辑</a><span class="separator"></span> <a
						class="mini-button" iconCls="icon-remove" plain="true" onclick="del()">删除</a> <span class="separator"></span>报表代码：<input id="tabcode"
						class="mini-textbox" style="width: 80px;" />
						&nbsp;&nbsp;
						报表版本号：<input id="tabVision" class="mini-textbox" style="width: 80px;" />
						
						&nbsp;&nbsp;
						计算公式：<input id="calFormula" class="mini-textbox" style="width: 80px;" />
						&nbsp;&nbsp;状态:&nbsp;
						<input id="formulaStatus" showNullItem="false" name="formulaStatus" class="mini-combobox" style="width: 80px;" data="[{id:'y',text:'启用'},{id:'n',text:'停用'}]"
						allowInput="false" />
						
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
			url="${base}/ir/calculate/getIrReportCalculateFormulaList.nut" allowAlternating="true" pageSize="100" multiSelect="true"
			showModified="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tabcode" width="40" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<div field="tabVision" width="40" align="center" allowSort="true" headerAlign="center">报表版本号</div>
				<div field="calAim" width="20" align="center" allowSort="true" headerAlign="center">计算目标</div>
				<div field="calFormula" sortField="CAL_FORMULA" autoEscape="true" align="center" allowSort="true" headerAlign="center">计算公式</div>
				<div field="formulaStatus" sortField="FORMULA_STATUS" width="15"  renderer="onValidRenderer" allowSort="true" align="center" headerAlign="center">公式状态</div>
				<div width="20" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>