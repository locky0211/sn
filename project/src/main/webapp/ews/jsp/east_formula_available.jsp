<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/east_formula_available.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="formulagrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/formulatype/getFormulaList.nut?row=${param.row}" pageSize="100" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="zd_name" width="70" align="center" renderer="onNameRenderer" headerAlign="center">校验表名</div>
				<div field="fieldName" width="60" align="center" headerAlign="center">校验字段名</div>
				<div field="fieldCode" width="60" align="center" headerAlign="center">校验字段</div>
				<div field="formulaType" width="40" align="center" renderer="onRendererType" headerAlign="center">公式类型</div>
				<div field="formulaDesc" width="120" align="center" headerAlign="center">校验公式描述</div>
			</div>
		</div>
	</div>
</body>
</html>