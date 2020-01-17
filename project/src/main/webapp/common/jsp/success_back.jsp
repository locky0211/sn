<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>操作成功页面</title>
<%@include file="../quote/jquery.html"%>
<%@include file="../quote/jquery.easyui.html"%>
<script language=javascript>
	$(function() {
		$('#btnCancel').click(function() {
			window.history.go(-1);
		});
	});
</script>
<style type="text/css">
#warp {
	position: absolute;
	width: 400px;
	height: 260px;
	left: 50%;
	top: 50%;
	margin-left: -200px;
	margin-top: -150px;
	text-align: center;
}
</style>
</head>
<body style="text-align: center;overflow: hidden;">
	<div id="warp">
		<p align="center" class="title">
			<img src="${base }/common/images/success_1.gif">
		</p>
		<p align="center" class="title">
			<img src="${base }/common/images/success_2.gif"></img>
		</p>
		<p align="center" class="title">
			<a id="btnCancel"  class="easyui-linkbutton" target="_parent"  icon="icon-ok" href="javascript:void(0)"> 返回</a>
		</p>
	</div>

</body>
</html>
