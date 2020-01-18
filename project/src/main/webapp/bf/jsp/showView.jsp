<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/showView.js"></script>
</head>
<body>
<input id="tabType" name="tabType" class="mini-hidden" value="${param.tabType}" />
<input id="organNo" name="organNo" class="mini-hidden" value="${param.organNo}" />
<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate}" />
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="showViewGrid" class="mini-datagrid"  style="width: 100%; height: 100%"
			url="${base}/bf/bfAuditSchedule/showView.nut" showPager="false"  allowAlternating="true" onrowdblclick="showBfCheckResultView" >
			<div property="columns">
				<div field="reportCode" width="100" align="center" headerAlign="center">报表名称</div>
				<div field="importFlag" width="100" headerAlign="center" align="center" renderer="importFlag">导入情况</div>
				<div field="checkFlag" width="100" headerAlign="center" align="center" renderer="checkFlag">校验情况</div>
				<div field="PendingApproval" width="100" headerAlign="center" align="center" >待审核</div>
				<div field="noEgis" width="100" headerAlign="center" align="center" >审核不通过</div>
				<div field="egis" width="100" headerAlign="center" align="center" >审核通过</div>
				</div>
		</div>
	</div>
</body>
</html>