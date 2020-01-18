<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_formula_available.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="formulagrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/sys/formulatype/getFormulaList.nut?row=${param.row }" pageSize="100" showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tabcode" width="40" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<div field="checkFormula" sortField="CHECK_FORMULA" autoEscape="true" align="center" allowSort="true" headerAlign="center">校验公式</div>
				<div field="deviationValue" sortField="DEVIATION_VALUE" width="20" align="center" headerAlign="center">容忍波动</div>
				<div field="checkRisk" sortField="CHECK_RISK" width="20" align="center" headerAlign="center" allowSort="true" renderer="onRiskRenderer">风险等级</div>
				<div field="validFlag" sortField="VALID_FLAG" width="10" renderer="onValidRenderer" allowSort="true" align="center" headerAlign="center">状态</div>
				<div field="type" width="10" renderer="onRenderType" align="center" headerAlign="center">类型</div>
				<div field="startDate" sortField="START_DATE" width="20" align="center" allowSort="true" headerAlign="center">启用日期</div>
				<div field="endDate" sortField="END_DATE" width="20" align="center" allowSort="true" headerAlign="center">截止日期</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" sortField="UPDATE_DATE" width="30" align="center" allowSort="true" headerAlign="center">最后更新日期</div>
			</div>
		</div>
	</div>
</body>
</html>