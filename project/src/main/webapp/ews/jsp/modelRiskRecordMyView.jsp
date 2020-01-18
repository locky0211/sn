<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>我的反馈记录</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/modelRiskRecordMyView.js"></script>
</head>
<body>
	<div style="height: 75%">
		<div class="mini-fit">
			<div id="riskDataGrid" class="mini-datagrid" allowDrag="true" defaultRowHeight="28" style="width: 100%; height: 100%;" borderStyle="border:0;border-bottom:1px solid #99BBE8" url="${base }/modelRisk/getMyRecordView.nut?modelRiskUserId=${param.id}" allowResize="false" showPager="false" virtualScroll="true">
				<div property="columns">
					<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
					<div field="content" align="center" headerAlign="center" width="100">内容</div>
					<div field="recordDate" align="center" headerAlign="center" width="30" dateFormat="yyyy-MM-dd HH:mm:ss">日期</div>
				</div>
			</div>
		</div>
	</div>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="CloseWindow('cancel')" iconCls="icon-cancel" style="width: 60px;">关闭</a>
	</div>
	<br>
</body>
</html>