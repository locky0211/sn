<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异动公式生成维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/pi_check_formula_wave_JN.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td id="reportCheckForm" style="width: 100%;">
						<label style="font-family: Verdana;">&nbsp;上报地区: </label> 
					<input id="bmCode" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='PI'" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />
						&nbsp;&nbsp;报表日期:&nbsp;
						<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" /> 
						&nbsp;&nbsp;报表类型:&nbsp; 
						<input id="tabType" name="tabType" class="mini-combobox" style="width: 120px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=PI_TABLE_TAB_TYPE" required="true"
						allowInput="false"/>
						&nbsp;&nbsp;校验频度:&nbsp; 
						<input id="Rate" name="reportRate" class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=PI_YIDONG_FORMULA_TYPE" required="true"
						multiSelect="true"  allowInput="false" showClose="true" oncloseclick="onCloseClick" />
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-goto" onclick="makeFormula()">生成公式</a>
					</td>
				</tr>
				<tr>
					<td>
						<a class="mini-button" iconCls="icon-add" plain="true" onclick="addCheckFormula()">新增校验公式</a>
						<span class="separator"></span>
						<a class="mini-button" iconCls="icon-edit" plain="true" onclick="edit()">编辑</a>
						<span class="separator"></span>
						<a class="mini-button" iconCls="icon-remove" plain="true" onclick="del()">删除</a> 
						<span class="separator"></span>
						报表代码：
						<input id="tablecode"class="mini-textbox" style="width: 80px;" />
						&nbsp;&nbsp;指标代码：
						<input id="quotacode" class="mini-textbox" style="width: 100px;" />
						&nbsp;&nbsp;维度：
						<input id="latcode" class="mini-textbox" style="width: 100px;" />
						&nbsp;&nbsp;状态:
						<input id="vFlag" showNullItem="false" name="vFlag" class="mini-combobox" style="width: 80px;" data="[{id:'y',text:'启用'},{id:'n',text:'停用'}]"allowInput="false" />
						&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkFormulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/pi/check/wave/getPiCheckFormulaWaveList.nut" allowAlternating="true" pageSize="100" multiSelect="true"
			showModified="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tablecode" width="30" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<div field="quotacode" width="30" align="center" headerAlign="center">指标代码</div>
				<div field="latcode" width="25" headerAlign="center" align="center" >维度代码</div>
				<div field="quotaname" width="30" align="center" headerAlign="center">指标名称</div>
				<div field="element" width="40" align="center" allowSort="true" headerAlign="center">坐标</div>
				<div field="valueArea" width="25" align="center" allowSort="true" headerAlign="center">阈值</div>
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