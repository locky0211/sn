<%@page import="java.util.Date"%>
<%@page import="com.efraiser.test.common.util.DateUtil"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>监管管理平台首页</title>
<%@include file="/common/quote/boot.html"%>
<%@include file="../../common/quote/highCharts.html"%>
<link rel="stylesheet" href="${base }/css/portal.css" type="text/css">
<link rel="stylesheet" href="${base }/css/home.css" type="text/css">
<script type="text/javascript" src="${base }/js/portal.js"></script>
<script type="text/javascript" src="js/home.js"></script>

</head>
<body style="overflow: auto">
	<div  id="acdChartDiv" style="width: 320px; height: 250px;"></div>

	<div id="checkLogGrid" allowAlternating="true" class="mini-datagrid" onrowclick="showCheckView" style="width: 100%; height: 100%"
		url="${base}/rd/check/log/getRdReportCheckLogForUser.nut" borderStyle="border:0" showPager="false">
		<div property="columns">
			<div field="areaCodeName" allowSort="true" align="center" headerAlign="center" renderer="onRendererNoCheck">机构</div>
			<div field="checkNoPassNum1" width="30" align="center" headerAlign="center" allowSort="true" renderer="onRendererNoPass1">数值准确</div>
			<div field="checkNoPassNum2" width="30" align="center" headerAlign="center" allowSort="true" renderer="onRendererNoPass2">敏感关注</div>
		</div>
	</div>

	<div id="sysNoticeGrid" class="mini-datagrid" allowAlternating="true" onrowclick="showNoticeView" style="width: 100%; height: 100%"
		url="${base}/sys/notice/getSysNoticeList.nut" borderStyle="border:0" showPager="true" pageSize="20">
		<div property="columns">
			<div field="title" align="center" headerAlign="center">标题</div>
			<div field="releaseUser" width="30" align="center" headerAlign="center">发布人</div>
			<div field="releaseDate" width="40" dateFormat="yyyy-MM-dd HH:mm:ss" align="center" headerAlign="center">发布时间</div>
		</div>
	</div>
	<div id="lmDiv">
		<ul class="homeLmUL">
			<li>欢迎登录平台:&nbsp;&nbsp;&nbsp;${sessionUser.userName }</li>
			<li>今天是:&nbsp;<%=DateUtil.format(new Date(), "yyyy年MM月dd日 E")%></li>
			<li>本月登录次数:&nbsp;${sessionUser.loginCount }</li>
			<li>最近登录地址:&nbsp;${sessionUser.lastLoginIP }</li>
			<li>最近登录时间:&nbsp;${sessionUser.lastLoginDate }</li>
		</ul>
	</div>
</body>
</html>