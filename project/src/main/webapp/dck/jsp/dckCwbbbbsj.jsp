<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式维护</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dckCwbbbbsj.js"></script>
</head>
<body>
	<form id="editForm">
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 30%;">报送机构代码</td>
				<td class="tab_field_nr"><input class="mini-textbox" required="true" id="bsyhdm" name="bsyhdm" value="${obj.bsyhdm}" style="width: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">客户代码</td>
				<td class="tab_field_nr"><input class="mini-textbox" required="true" id="khdm" name="khdm" value="${obj.khdm}" style="width: 99%; height: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">客户客户名称</td>
				<td class="tab_field_nr"><input class="mini-textbox" required="true" id="khmc" name="khmc" value="${obj.khmc}" style="width: 99%; height: 99%" /></td>
			</tr>
		</table>
	</form>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onSave" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 10px;">取消</a>
	</div>
</body>
</html>