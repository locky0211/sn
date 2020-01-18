<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bf_check_formula_wave_m_t.js"></script>
</head>
<body>
	<input type="hidden" id="cUserInput" value="${param.cUser}">
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addCheckFormula()">新增校验公式</a><span
						class="separator"></span> <a class="mini-button" iconCls="icon-edit" plain="true" onclick="edit()">编辑</a><span class="separator"></span> <a
						class="mini-button" iconCls="icon-remove" plain="true" onclick="del()">删除</a> <span class="separator"></span>报表代码：<input id="tabcode"
						class="mini-textbox" style="width: 80px;" />&nbsp;&nbsp;项目：<input id="checkProject" class="mini-textbox" style="width: 150px;" />
						&nbsp;&nbsp;状态:&nbsp;
						<input id="vFlag" showNullItem="false" name="vFlag" class="mini-combobox" style="width: 80px;" data="[{id:'y',text:'启用'},{id:'n',text:'停用'}]"
						allowInput="false" />
						&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doAutoInsert()">批量导入</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkFormulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/bf/check/wave/temp/getBfCheckFormulaWaveList.nut" allowAlternating="true" pageSize="100" multiSelect="true"
			showModified="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tabcode" width="40" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<!-- <div field="checkRisk" width="40" align="center" allowSort="true" headerAlign="center">风险等级</div> -->
				<div field="checkProject" width="40" align="left" allowSort="true" headerAlign="center">校验项目</div>
				<div field="rate" width="40" align="center" allowSort="true" headerAlign="center" renderer="onRateRendeder">校验频度</div>
				<div field="element" width="40" align="center" allowSort="true" headerAlign="center">坐标</div>
				<div field="valueArea" width="40" align="center" allowSort="true" headerAlign="center">阈值</div>
				<div field="validFlag" sortField="VALID_FLAG" width="10" renderer="onValidRenderer" allowSort="true" align="center" headerAlign="center">状态</div>
				<div field="startDate" width="30" align="center" allowSort="true" headerAlign="center">启用日期</div>
				<div field="endDate" width="30" align="center" allowSort="true" headerAlign="center">停用日期</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" sortField="UPDATE_DATE" width="30" align="center" allowSort="true" headerAlign="center">最后更新日期</div>
				<div width="20" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>