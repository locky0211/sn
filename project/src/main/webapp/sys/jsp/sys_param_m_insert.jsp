<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_param_m.js"></script>
<title>参数配置</title>
</head>
<body>
	<form id="addParamForm" method="post" action="${base}/sys/param/addOrUpdateSysParam.nut">
		<div style="padding-left: 11px; padding-bottom: 5px;">
			<input id="id" name="id" class="mini-hidden" value="${obj.id }" />
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td class="tab_label" >参数中文名称：</td>
					<td class="tab_field_nr" colspan="3" ><input id="paramName" name="paramName" class="mini-textbox" style="width: 200px;" required="true" value="${obj.paramName }" /></td>
				</tr>
				<tr>
					<td class="tab_label" >参数名：</td>
					<td class="tab_field_nr" colspan="3" ><input id="param" name="param" class="mini-textbox" style="width: 200px;" required="true" value="${obj.param }" /></td>
				</tr>
				<tr>
					<td class="tab_label" >参数值：</td>
					<td class="tab_field_nr" colspan="3" ><input id="paramValue" name="paramValue" class="mini-textbox" style="width: 200px;" required="true" value="${obj.paramValue }" /></td>
				</tr>
			</table>
		</div> 
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" iconCls="icon-ok" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				iconCls="icon-cancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>