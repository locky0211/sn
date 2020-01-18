<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异动校验公式信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_check_formula_yidong_m.js"></script>
</head>
<body>
	<input type="hidden" id="cUserInput" value="${param.cUser}">
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addCheckFormula()">新增异动校验公式</a><span
						class="separator"></span> <a class="mini-button" iconCls="icon-edit" plain="true" onclick="edit()">编辑</a><span class="separator"></span> <a
						class="mini-button" iconCls="icon-remove" plain="true" onclick="del()">删除</a> 
					<td style="white-space: nowrap;">
				    <label style="font-family: Verdana;">名称: </label><input id="key" class="mini-textbox" onenter="onKeyEnter()" />
					<a class="mini-button" iconCls="icon-search" onclick="search()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkFormulaGrid" class="mini-treegrid" style="width: 100%; height: 100%"  showTreeIcon="true"
			treeColumn="checkProject" idField="id" parentField="parent" resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true"
			imgPath="${base }/common/js/miniui/themes/icons/" url="${base}/rd/check/getRdCheckFormulaYiDongList.nut?cUser=${param.cUser}" allowAlternating="true">
			<div property="columns">
				<div type="indexcolumn" width="4px" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="checkProject" sortField="CHECK_PROJECT" name="checkProject" allowSort="true" headerAlign="center">项目</div>
				<div field="startDate" sortField="START_DATE" name="startDate" allowSort="true" headerAlign="center">本期版本号</div>
				<div field="endDate" sortField="END_DATE" name="endDate" allowSort="true" headerAlign="center">上期版本号</div>
				<!-- <div width="20" renderer="onRenderer" align="center" headerAlign="center">操作</div> -->
			</div>
		</div>
	</div>
</body>
</html>