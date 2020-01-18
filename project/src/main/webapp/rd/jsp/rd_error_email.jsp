<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link rel="stylesheet" href="${base }/common/js/editor/themes/default/default.css" />
<script charset="utf-8" src="${base }/common/js/editor/kindeditor-min.js"></script>
<script charset="utf-8" src="${base }/common/js/editor/lang/zh_CN.js"></script>
<script type="text/javascript" src="${base }/rd/js/rd_error_email.js"></script>
<title>公告信息</title>
</head>
<body style="overflow: auto;">
	<form id="sysNoticeForm" method="post">
		<input id="id" name="id" class="mini-hidden" value="${obj.id }" />
		<table style="width: 100%" cellpadding="5" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 100px; text-align: right;">标&nbsp;题&nbsp;：</td>
				<td class="tab_field_nr"><input id="title" name="title" style="width: 500px;" vtype="maxLength:50" class="mini-textbox" required="true"
					value="${obj.title }" />&nbsp;&nbsp;<font style="font-size: 10px;">限50字</font></td>
			</tr>
			<tr>
				<td class="tab_label" valign="top" style="text-align: right;">公告内容：</td>
				<td class="tab_field_nr"><textarea id="editor_id" name="content" style="width: 600px; height: 310px;">${obj.content }</textarea></td>
			</tr>
		</table>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add" iconCls="icon-ok" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				iconCls="icon-cancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>