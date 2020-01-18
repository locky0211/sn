<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_ggzd.js"></script>
<title>添加公共字典</title>
</head>
<body>
	<form id="addGgzdForm" method="post" action="${base}/sys/ggzd/addOrUpdateGgzd.nut">
		<div style="padding-left: 11px; padding-bottom: 5px;">
			<input id="id" name="id" class="mini-hidden" value="${obj.id }" /><input id="gId" name="gId" class="mini-hidden" value="${obj.gId }" />
			<table style="table-layout: fixed;" cellspacing="10">
				<tr>
					<td style="width: 80px;">数据值：</td>
					<td style="width: 250px;"><input id="zdValue" name="zdValue" class="mini-textbox" required="true" emptyText="请输入数据值"
						onvalidation="valueIsOnly" value="${obj.zdValue }" /></td>
				</tr>
				<tr>
					<td style="width: 80px;">数据名称：</td>
					<td style="width: 250px;"><input id="zdName" name="zdName" class="mini-textbox" required="true" emptyText="请输入数据名称" value="${obj.zdName }" /></td>
				</tr>
				<tr>
					<td style="width: 80px;">上级节点：</td>
					<td><input id="sjsjId" width="160" name="pId" class="mini-treeselect"
						url="${base}/sys/ggzd/getSysGgzdListbyId.nut?id=${obj.id }&gId=${obj.gId}" multiSelect="false" valueFromSelect="true" textField="zdName"
						valueField="zdValue" oncloseclick="onCloseClick" showClose="true" parentField="pId" allowInput="false" value="${obj.pId }" popupHeight="100" /></td>
				</tr>
			</table>
		</div> 
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add" iconCls="icon-ok" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				iconCls="icon-cancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>