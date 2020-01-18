<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>差错认定</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_error_comfirm.js"></script>
</head>
<body>
<div style="display: none;">
		<input class="mini-hidden"  id="id" name="id" value="${param.errorId }"/>
			<input class="mini-hidden"  id="fg" name="fg" value="${param.fg }"></input>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="errortrue()" style="width: 80px; margin-right: 20px;">确认差错</a> 
			<a class="mini-button" onclick="errorfalse()" style="width: 80px; margin-right: 20px;">确认正确</a> 
			<a class="mini-button" onclick="CloseWindow('cancel')"
				style="width: 60px;">取消</a>
		</div>
</body>
</html>