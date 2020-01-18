<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>指标各版本信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_indicators_info_update.js"></script>
</head>
<body>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="indicatorsInfoGrid" class="mini-datagrid" borderStyle="border:0;" style="width: 100%; height: 100%"
			url="${base}/dy/indicators/getIndicatorsInfoList.nut?indName=${param.indName}" showPager="false">
			<div property="columns">
				<div field="indName" width="40" align="center" headerAlign="center">指标名称</div>
				<div field="versionNo" width="40" align="center" headerAlign="center">版本号</div>
				<div field="indType" width="40" align="center" headerAlign="center">指标类型</div>
				<div field="startDate" width="40" align="center" headerAlign="center">启用时间</div>
				<div field="endDate" width="40" align="center" headerAlign="center">结束时间</div>
				<div name="action" headerAlign="center" width="60" align="center" renderer="onRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>