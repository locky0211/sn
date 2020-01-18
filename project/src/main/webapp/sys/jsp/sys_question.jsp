<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增问题</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_question.js"></script>
</head>
<body>
	<form id="quForm" method="post" action="${base }/sys/qusetion/addOrUpdateQu.nut">
		<input id="id" name="id" class="mini-hidden" value="${obj.Id }" />
		<table style="width: 100%" cellpadding="5" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 100px; text-align: right;">标&nbsp;题&nbsp;：</td>
				<td class="tab_field_nr"><input id="Title" name="Title" style="width: 500px;" vtype="maxLength:50" class="mini-textbox" required="true"
					value="${obj.Title }" />&nbsp;&nbsp;<font style="font-size: 10px;">限50字</font></td>
			</tr>
			<tr>
				<td class="tab_label" valign="top" style="text-align: right;">问题内容：</td>
				<td class="tab_field_nr"><input id="Content" name="Content" class="mini-TextArea" style="width: 600px; height: 310px;" value="${obj.Content }" /></td>
			</tr>
			<tr>
				<td><input id="Createtime" name="Createtime" class="mini-hidden" style="width: 600px; height: 310px;" value="${obj.Createtime }" /></td>
			</tr>
			<tr>
				<td><input id="Createuser" name="Createuser" class="mini-hidden" style="width: 600px; height: 310px;" value="${obj.Createuser }" /></td>
			</tr>
		</table>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" iconCls="icon-ok" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				iconCls="icon-cancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>