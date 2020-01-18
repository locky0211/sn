<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sam/js/rd_dck_formula_available.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="formulagrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/formulatype/getFormulaList.nut?row=${param.row}" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="dspName" width="80" align="center" renderer="onNameRenderer_Dck" headerAlign="center">校验客户风险报表名</div>
				<div field="formulaOp" width="20" align="center" headerAlign="center">运算符</div>
				<div name="samName" width="140" align="center" renderer="onNameRenderer_Rd" headerAlign="center">校验1104报表名</div>				
				<div field="formulaDesc" width="120" align="center" headerAlign="center">校验公式描述</div>
			</div>
		</div>
	</div>
</body>
</html>