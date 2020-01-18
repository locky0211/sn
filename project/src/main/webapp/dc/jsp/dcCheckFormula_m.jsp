<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dc/js/dcCheckFormula_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">字段名称：<input id="fieldName" class="mini-textbox" style="width: 150px;" /><span class="separator"></span> 表名称：
						<div id="repCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="350px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=DcTableName" textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div> <span class="separator"></span> 公式类型：<input id="formulaType" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DcCheckType" textField="zdName" valueField="zdValue"
						oncloseclick="onCloseClick" showClose="true" style="width: 150px;" /><span class="separator"></span>公式状态：<input id="formulaState" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=formulaState" textField="zdName" valueField="zdValue"
						oncloseclick="onCloseClick" showClose="true" style="width: 150px;" /> <a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a> <a
						iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="formulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/dcFormula/getDcFormulaList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="zd_name" width="70" align="center" renderer="onNameRenderer" headerAlign="center">校验表名</div>
				<div field="fieldName" width="60" align="center" headerAlign="center">校验字段名</div>
				<div field="fieldCode" width="60" align="center" headerAlign="center">校验字段</div>
				<div field="formulaType" width="40" align="center" renderer="typeRenderer" headerAlign="center">公式类型</div>
				<div field="formulaDesc" width="120" align="center" headerAlign="center">校验公式描述</div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>

			</div>
		</div>
	</div>
</body>
</html>