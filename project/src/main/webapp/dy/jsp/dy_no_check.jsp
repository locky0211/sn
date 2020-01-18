<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_check_log.js"></script>
</head>
<body>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="checkLogViewGrid" class="mini-datagrid"  allowAlternating="true"  borderStyle="border:0" style="width: 100%; height: 100%"
			url="${base}/dy/check/log/getRdNoCheckList.nut?areaCode=${param.areaCode}&reportDate=${param.reportDate}&tabType=${param.tabType}"
			showPager="false">
			<div property="columns">
				<div type="indexcolumn" width='10'></div>
				<div field="bmName" align="left" headerAlign="center">机构名称</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		mini.parse();
		mini.get("checkLogViewGrid").load();
	</script>
</body>
</html>