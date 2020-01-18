<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加模型</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/pi/js/attachTableInfo.js"></script>
</head>
<body>
<input id="id" name="id" class="mini-hidden" value="${param.id}"/>
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="false" onrowdblclick="showReportView" style="width: 100%; height: 100%" url="${base}/pi/findAttachTableInfo.nut"
			showPager="false" allowAlternating="true">
			<div property="columns">
			    <div field="quotaCode" width="15" align="center" headerAlign="center">指标代码</div>
				<div field="latCode" width="15" headerAlign="center" align="center" >维度代码</div>
				<div field="quotaName" width="15" align="center" headerAlign="center">指标名称</div>
				<div field="latName" width="15" align="center" headerAlign="center">维度名称</div>
				<div field="dataType" width="15" align="center" headerAlign="center" >数据类型</div>
				<div field="dataProperty"  width="15" align="center"   headerAlign="center">数据属性</div>
				<div field="frequentness" width="15" align="center" headerAlign="center">报送频度</div>
				<div field="submissionLevel" width="15" align="center" headerAlign="center">报送级别</div>
				<div field="latGroup"  width="15" align="center"   headerAlign="center">维度组</div>
				</div>
		</div>
	</div>
	
	
</body>
</html>