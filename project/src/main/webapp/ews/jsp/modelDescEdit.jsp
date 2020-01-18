<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>模型描述</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript">
	var modelId = '${param.id}';
</script>
<script type="text/javascript" src="${base }/ews/js/modelDescEdit.js"></script>
</head>
<body style="overflow: auto;">
	<table style="width: 100%" cellpadding="5" cellspacing="0">
		<tr>
			<td class="tab_label" style="width: 100px; text-align: right;">模型名称：</td>
			<td class="tab_field_nr" id="mName"></td>
		</tr>
		<tr>
			<td class="tab_label" valign="top" style="text-align: right;">模型描述：</td>
			<td class="tab_field_nr"><input class="mini-textarea" style="width: 100%; height: 420px" id="modelDesc" /></td>
		</tr>

		<tr>
			<td colspan="2" style="text-align: center; height: 80px;"><a class="mini-button" onclick="onEdit" style="width: 60px; margin-right: 10px;"
				iconCls="icon-ok">确定</a> <a class="mini-button" iconCls="icon-cancel" onclick="CloseWindow('cancel')" style="width: 60px;">关闭</a></td>
		</tr>
	</table>
</body>
</html>