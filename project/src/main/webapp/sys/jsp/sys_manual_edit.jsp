<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>操作手册新增修改</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var statusData = [ {
		id : 1,
		text : '启用'
	}, {
		id : 0,
		text : '停用'
	} ];
</script>
<script type="text/javascript" src="../js/sys_manual_edit.js"></script>
</head>
<body style="overflow: auto;">
	<form id="manualForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" name="fg" id="fg" value="${obj.manualId}" /> 
		</div>
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 70px;" class="tab_label tab_align_r">模块ID：</td>
					<td class="tab_field_nr"><input id="manualId" name="manualId" class="mini-textbox" style="width: 200px;" required="true" emptyText="请输入模块ID"
						onvalidation="manualIdValid" value="${obj.manualId }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">模块名称：</td>
					<td class="tab_field_nr"><input id="manualName" name="manualName" class="mini-textbox" style="width: 250px;" required="true" emptyText="请输入模块名称"
						value="${obj.manualName }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r" style="vertical-align: top;">URL：</td>
					<td class="tab_field_nr"><input id="manualUrl" name="manualUrl" class="mini-textarea" style="width: 360px; height: 110px;" value="${obj.manualUrl }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">启用状态：</td>
					<td class="tab_field_nr"><input id="status" name="status" class="mini-combobox" data="statusData" emptyText="请选择" required="true"
						value="${obj.status }" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="update()" style="width: 60px; margin-right: 30px;" iconCls="icon-ok">确定</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
		</div>
	</form>
</body>
</html>