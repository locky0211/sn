<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>征信校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ci/js/ci_check_formula_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<span>表名称：</span>
						<div id="tableName" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 250px;" popupWidth="550px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_TABLENAME" textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div>
						<span class="separator"></span> 
						<span>字段名称：</span>
						<input id="fieldCode" class="mini-textbox" style="width: 150px;" />
						<span class="separator"></span>
						<span>公式类型：</span>
						<input id="formulaType" name="formulaType" class="mini-combobox" required="true" style="width: 100px;" textField="zdName" valueField="zdValue" 
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_FORMULATYPE"  allowInput="false" />
						<span class="separator"></span>
						<span>公式状态：</span>
						<input id="formulaState" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_FORMULASTATE" textField="zdName" valueField="zdValue"
							oncloseclick="onCloseClick" showClose="true" style="width: 100px;" />
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>	
						<a iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="formulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/ci/formula/getFormulaList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="tableName" width="100" align="center" renderer="onTableNameRenderer" headerAlign="center">校验表名</div>
				<div field="tableName" width="85" align="center" headerAlign="center">数据库表名</div>
				<div field="fieldCode" width="45" align="center" headerAlign="center">校验字段名</div>
				<div field="fieldName" width="40" align="center" headerAlign="center">数据库字段名</div>
				<div field="formulaDesc" width="140" align="center" headerAlign="center">校验公式描述</div>
				<div field="errorCode" width="30" align="center" headerAlign="center">错误代码</div>
				<div name="edit" width="95" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>