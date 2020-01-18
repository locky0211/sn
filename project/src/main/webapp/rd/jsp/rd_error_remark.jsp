<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>确认正确</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_error_remark.js"></script>
</head>
<body>
	<form id="errorRemarkForm" method="post">
			<div style="display: none;">
				<input id="id" name="id" class="mini-hidden" value="${obj.id}" />
			</div>
		<div>
			<table class="tab" cellpadding="3" cellspacing="0">
				<tr>
					<td style="width: 65px;">认定理由：</td>
					<td colspan="3"><input id="tjReason" name="tjReason" class="mini-textarea" style="width: 250px; height: 100px;" required="true"
						value="${obj.tjReason}" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="CloseWindow('cancel')"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>