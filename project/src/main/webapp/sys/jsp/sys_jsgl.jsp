<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增角色</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_jsgl.js"></script>
<script type="text/javascript">
	var statusData = [ {
		id : 1,
		text : '启用'
	}, {
		id : 0,
		text : '停用'
	} ];
</script>
</head>
<body>
	<form id="jusForm" method="post">
		<input type="hidden" name="flag" id="flag" value="${jsgl.jsId}" />
		<div style="height: 100%; padding: 10px">
			<div id="js" style="width: 43%; height: 350px; float: left; padding: 10px 20px 20px 20px">
				<table style="table-layout: fixed;">
					<tr style="height: 35px">
						<td style="width: 70px;">角色ID：</td>
						<td><input id="jsId" name="jsId" class="mini-textbox" style="width: 150px;" required="true" emptyText="请输入角色ID" onvalidation="idValidation"
							value="${jsgl.jsId}" /></td>
					</tr>
					<tr style="height: 35px">
						<td style="width: 70px;">角色名称：</td>
						<td><input id="jsName" name="jsName" class="mini-textbox" style="width: 150px;" required="true" emptyText="请输入角色名称" value="${jsgl.jsName}" /></td>
					</tr>
					<tr style="height: 35px">
						<td style="width: 70px;">角色描述：</td>
						<td><input id="jsDescription" name="jsDescription" class="mini-textbox" style="width: 150px;" emptyText="请输入角色描述"
							value="${jsgl.jsDescription}" /></td>
					</tr>
					<tr style="height: 35px">
						<td style="width: 70px;">角色状态：</td>
						<td><input id="jsStatus" name="jsStatus" class="mini-combobox" data="statusData" emptyText="请选择" required="true" value="${jsgl.jsStatus}" /></td>
					</tr>
				</table>
				<div style="text-align: center; padding: 10px;">
					<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 10px;">确定</a> <a class="mini-button" onclick="onCancel"
						style="width: 60px;">取消</a>
				</div>
			</div>
			<div id="qx" class="mini-panel" title="权限分配" style="width: 50%; height: 350px; float: right;" showHeader="true" bodyStyle="padding:10px;">
				<ul id="qxTreeGrid" class="mini-tree" url="${base }/sys/qx/getSysQxglList.nut" style="width: 100%; padding: 5px;" showTreeIcon="true"
					textField="qxName" idField="qxId" parentField="pId" resultAsTree="false" showCheckBox="true" expandOnLoad="true" checkRecursive="false"
					enableHotTrack="false" value="${jsqxStr}" imgPath="${base }/common/js/miniui/themes/icons/">
				</ul>
			</div>
		</div>
	</form>
</body>
</html>