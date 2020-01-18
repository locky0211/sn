<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>权限管理</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_qxgl_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增权限</a> <span class="separator"></span> <a
					class="mini-button" iconCls="icon-save" plain="true" onclick="doSaveJG()">保存结构</a></td>
				<td style="white-space: nowrap;"><label style="font-family: Verdana;">权限名称: </label> <input id="key" class="mini-textbox"
					onenter="onKeyEnter()" /> <a class="mini-button" iconCls="icon-search" onclick="search()">查询</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="qxTreeGrid" class="mini-treegrid" style="width: 100%; height: 100%" url="${base }/sys/qx/getSysQxglList.nut" showTreeIcon="true"
			treeColumn="qxName" idField="qxId" parentField="pId" resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true"
			imgPath="${base }/common/js/miniui/themes/icons/">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div name="qxName" field="qxName">权限名称</div>
				<div field="qxId">权限ID</div>
				<div field="flag" width="40" headerAlign="center" align="center" renderer="onStatusRenderer">节点属性</div>
				<div name="action" width="40" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			</div>
		</div>
	</div>
</body>
</html>