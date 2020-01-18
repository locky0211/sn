<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异动校验公式修改记录</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_check_formula_record.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="checkFormulaRecordGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/rd/check/getRdCheckFormulaRecord.nut" allowAlternating="true" pageSize="100" multiSelect="true"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="operate"  width="20" align="center" allowSort="true" headerAlign="center">操作</div>
				<div field="reportRate"  width="20" align="center" allowSort="true" headerAlign="center" renderer="onRateRenderer">校验频度</div>
				<div field="tabcode" width="20" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<div field="checkRisk" sortField="CHECK_RISK" width="20" align="center" headerAlign="center" allowSort="true" renderer="onRiskRenderer">风险等级</div>
				<div field="element"  width="20" align="center" allowSort="true" headerAlign="center">本期坐标</div>
				<div field="lastElement"  width="20" align="center" allowSort="true" headerAlign="center">上期坐标</div>
				<div field="startDate" sortField="START_DATE" width="20" align="center" allowSort="true" headerAlign="center">本期版本号</div>
				<div field="endDate" sortField="END_DATE" width="20" align="center" allowSort="true" headerAlign="center">上期版本号</div>
				<div field="leftValue"  width="20" align="center" allowSort="true" headerAlign="center">阈值左区间</div>
				<div field="rightValue"  width="20" align="center" allowSort="true" headerAlign="center">阈值右区间</div>
				<div field="checkBrno"  width="20" align="center" allowSort="true" headerAlign="center">校验机构</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" sortField="UPDATE_DATE" width="30" align="center" allowSort="true" headerAlign="center">最后更新日期</div>
				<div width="20" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>