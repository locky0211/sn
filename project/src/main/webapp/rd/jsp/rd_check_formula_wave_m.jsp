<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_check_formula_wave_m.js"></script>
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
						&nbsp;&nbsp;关注等级：<input id="checkRisk" class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=WAVE_CHECK_RISK" required="true"
						multiSelect="false" allowInput="false" showClose="true" oncloseclick="onCloseClick"  />
						&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="showTab('RD_CHECK_FORMULA_WAVE_AUTO','异动可视化维护','rd/jsp/rd_check_formula_yidong_report.jsp')">可视化维护</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkFormulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/rd/check/wave/getCheckFormulaWaveList.nut" allowAlternating="true" pageSize="100" multiSelect="true"
			showModified="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tabcode" width="20" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<div field="checkRisk" width="20" align="center" allowSort="true" headerAlign="center"  renderer="onCheckRiskRendeder">关注等级</div>
				<div field="checkProject" width="40" align="left" allowSort="true" headerAlign="center">校验项目</div>
				<div field="reportRate" width="20" align="center" allowSort="true" headerAlign="center" renderer="onRateRendeder">校验频度</div>
				<div field="element" width="40" align="center" allowSort="true" headerAlign="center">本期坐标</div>
				<div field="lastElement" width="40" align="center" allowSort="true" headerAlign="center">上期坐标</div>
				<div field="thisVersion" width="20" align="center" allowSort="true" headerAlign="center">本期版本号</div>
				<div field="lastVersion" width="20" align="center" allowSort="true" headerAlign="center">上期版本号</div>
				<div field="valueArea" width="40" align="center" allowSort="true" headerAlign="center">阈值</div>
				<div field="cUser" width="20" align="center" allowSort="true" headerAlign="center" renderer="onUserRenderer">公式属性</div>
				<div width="20" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>