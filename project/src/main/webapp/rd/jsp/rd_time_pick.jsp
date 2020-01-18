<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>确认正确</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_time_pick.js"></script>
</head>
<body>
	<form id="timePickForm" method="post">
			<div style="display: none;">
				<input id="id" name="id" class="mini-hidden" value="${obj.id}" />
			</div>
		请选择处罚决定书下发时间:&nbsp;
		<br>
		<input id="punishTime" name="punishTime" style="width: 100px;" class="mini-datepicker" format="yyyyMMdd" required="true" value="${obj.punishTime}"/>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="CloseWindow('cancel')"
				style="width: 60px;">取消</a>
		</div>
		
	</form>
</body>
</html>