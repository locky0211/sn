<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/sys/js/sys_ggzd_group.js"></script>
<title>公共字典组信息</title>
</head>
<body>
	<form id="addGgzdForm" method="post" action="${base}/sys/ggzd/addOrUpdateGgzdzu.nut">
		<div style="padding-left: 11px; padding-bottom: 5px;">
			<input id="idFlag" name="idFlag" class="mini-hidden" required="true" value="${obj.gId }" />
			<table style="table-layout: fixed;" cellspacing="8">
				<tr height="8px;"></tr>
				<tr>
					<td style="width: 60px;">数据ID：</td>
					<td><input id="gId" name="gId" style="width: 200px;" class="mini-textbox" value="${obj.gId }" required="true" onvalidation="idIsOnly"
						emptyText="请输入数据ID" /></td>
				</tr>
				<tr>
					<td>数据名称：</td>
					<td><input id="gName" name="gName" style="width: 200px;" class="mini-textbox" value="${obj.gName }" required="true" emptyText="请输入数据名称" /></td>
				</tr>
				<tr height="8px;">
					<td>上级数据：</td>
					<td><input id="pId" width="160" name="pId" class="mini-treeselect" url="${base}/sys/ggzd/getSysGgzdzuListbyId.nut?gId=${obj.gId }"
						multiSelect="false" valueFromSelect="true" textField="gName" valueField="gId" oncloseclick="onCloseClick" showClose="true" parentField="pId"
						allowInput="false" value="${obj.pId }" popupHeight="100" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" iconCls="icon-ok" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button"
				onclick="onCancel()" iconCls="icon-cancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>