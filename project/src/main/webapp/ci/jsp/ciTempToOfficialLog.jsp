<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>入库日志</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ci/js/ciTempToOfficialLog.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="tempToOfficialLogGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/ci/tempToOfficial/log/getTempToOfficialLogList.nut?reportDate=${param.reportDate}"  showPager="false" allowCellWrap="true" allowAlternating="true">
			<div property="columns">
				<div field="reportDate" width="100" align="center" headerAlign="center">报文日期</div>
				<div field="typeName" width="100" align="center" headerAlign="center">报文文件种类</div>
				<div field="logDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="100" align="center" headerAlign="center">入库日期</div>
				<div field="logUser" width="100" align="center" headerAlign="center">入库用户</div>
			</div>
		</div>
	</div>
	
</body>
</html>