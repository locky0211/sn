<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>模型数据展示</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var modelId = '${param.id}';
</script>
<script type="text/javascript" src="../js/modelDataViewByProblem.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="modelDataGrid" multiSelect="true" class="mini-datagrid" url="${base}/model/getModelResultByProblem.nut?id=${param.id}" style="width: 100%; height: 100%"
			borderStyle="border-top:0" pageSize="60" showPager="true">
			
		</div>
	</div>
</body>
</html>