<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>权限添加</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var flagData = [ {
		id : 1,
		text : '功能节点'
	}, {
		id : 0,
		text : '操作节点'
	} ];
</script>
<script type="text/javascript" src="${base }/sys/js/sys_qxgl.js"></script>
</head>
<body>
	<form id="qxForm" method="post" action="${base }/sys/qx/addOrUpdateQxgl.nut">
		<input class="mini-hidden" name="fg" id="fg" value="${obj.qxId}" />
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 70px;" class="tab_label tab_align_r">权限ID：</td>
					<td class="tab_field_nr"><input id="qxId" name="qxId" class="mini-textbox" style="width: 200px;" required="true" emptyText="请输入权限ID"
						onvalidation="qxIdValid" value="${obj.qxId }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">权限名称：</td>
					<td class="tab_field_nr"><input id="qxName" name="qxName" class="mini-textbox" style="width: 250px;" required="true" emptyText="请输入权限名称"
						value="${obj.qxName }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">上级权限：</td>
					<td class="tab_field_nr"><input id="pId" name="pId"  style="width: 200px;" class="mini-treeselect" url="${base }/sys/qx/getSysQxListForPid.nut?qxId=${obj.qxId}"
						multiSelect="false" expandOnLoad="false" valueFromSelect="true" showClose="true" oncloseclick="onCloseClick" textField="qxName"
						valueField="qxId" parentField="pId" popupWidth="250" allowInput="false" popupHeight="150" value="${obj.pId }" /><input type="button" value="清空" onclick="onClearSjqx()"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">节点属性：</td>
					<td class="tab_field_nr"><input id="flag" name="flag" class="mini-combobox" data="flagData" emptyText="请选择" required="true"
						value="${obj.flag }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r" style="vertical-align: top;">节点URL：</td>
					<td class="tab_field_nr"><input id="url" name="url" class="mini-textarea" style="width: 360px; height: 110px;" value="${obj.url }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">节点图标：</td>
					<td class="tab_field_nr"><input id="iconCls" name="iconCls" class="mini-textbox" value="${obj.iconCls }" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 18px;">
			<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>