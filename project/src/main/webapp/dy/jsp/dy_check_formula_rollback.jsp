<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公回滚</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_check_formula_rollback.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="rollbackgrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/dy/check/getDyCheckFormulaTemp.nut" showPager="false">
			<div property="columns">
				<div field="updateDate" align="center" dateFormat="yyyy-MM-dd HH:mm:ss" headerAlign="center" width="86">操作时间</div>
				<div width="120" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>