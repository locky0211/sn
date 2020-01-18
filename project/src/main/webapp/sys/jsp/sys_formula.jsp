<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>公式校验集合</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_formula.js" charset="utf-8"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="formulagrid" class="mini-datagrid" allowAlternating="true"  style="width: 100%; height: 100%;" 
		url="${base}/sys/formulatype/getSysFormulaTypeList.nut" pageSize="80">
			<div property="columns">
				<div field="typeName" align="center" headerAlign="center">校验公式名称</div>
				<div field="availableFormulaCount" align="center" headerAlign="center">未过期和未停用公式数量</div>
				<div field="query" align="center" headerAlign="center" renderer="onRenderer" >查看</div>
			</div>
		</div>
	</div>
</body>
</html>