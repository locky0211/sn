<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>选择报表汇总</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../../rd/js/rd_report_summary_taskList.js"></script>
<script type="text/javascript">
	var dataDate = '${param.dataDate }';
</script>
</head>
<body>
	<div id="reportSummaryForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td>
						<input id="brNo" name="brNo" required="true" class="mini-hidden" value="${param.brNo}"/>
						<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate}" /> 
						<input id="tabType" name="tabType" class="mini-hidden" value="${param.tabType}"/>
						<a class="mini-button" iconCls="icon-excel" onclick="doPartTaskSummary()">开始汇总</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="reportSummaryGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="showReportView" style="width: 100%; height: 100%"
			url="${base}/rd/report/Summary/getRdTableInfoListByBrNo.nut" showPager="false"  allowAlternating="true" >
			<div property="columns" >
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" headerAlign="center">报表名称</div>
				<div field="versionNo" width="20" align="center" headerAlign="center">版本号</div>
			</div>
		</div>
	</div>
</body>
</html>