<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>会计标准化管理</title>
<%@include file="../quote/jquery.html"%>
<%@include file="../quote/jquery.easyui.html"%>
<%@include file="../quote/jquery.zTree.html"%>
<%@include file="../quote/jquery.validate.html"%>
<%@include file="../quote/jquery.loading2.jsp"%>
<script type="text/javascript">
	var pId = '${param.pId}';
</script>
<script type="text/javascript" src="${base }/common/js/content_page.js"></script>

</head>
<body class="easyui-layout" style="overflow-y: hidden" scroll="no">
	<div region="west" split="true" title="${param.pTitle}" style="width: 220px; background-color: #F8F8F8" id="west">
		<ul id="tree" class="ztree"></ul>
	</div>
	<div id="mainPanle" region="center" style="background: #eee; overflow-y: hidden">
		<div id="tabs" class="easyui-tabs" fit="true" border="false"></div>
	</div>
	<div id="mm" class="easyui-menu" style="width: 150px; display: none;">
		<div id="mm-tabclose">关闭</div>
		<div id="mm-tabcloseall">全部关闭</div>
		<div id="mm-tabcloseother">除此之外全部关闭</div>
		<div class="menu-sep"></div>
		<div id="mm-tabcloseleft">当前页左侧全部关闭</div>
		<div id="mm-tabcloseright">当前页右侧全部关闭</div>
	</div>
	</div>

</body>
</html>