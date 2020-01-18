<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_report_check_yd_nj.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<script>
var brNo ='${param.brNo}'
var reportDate = '${param.reportDate}'
var formulaId = '${param.formulaId}'
</script>
<body>
	<div>
		<input id="brNo" name="brNo" class="mini-hidden" value="${param.brNo }"/>
		<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate }"/>
		<input id="formulaId" name="formulaId" class="mini-hidden" value="${param.formulaId }"/>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" onrowclick="showCheckView" style="width: 100%; height: 100%" url="${base}/rd/check/wave/getRdReportCheckResultsSearchNj.nut" showPager="false"
			onload="onGridLoad" allowAlternating="true" allowCellEdit="true" allowCellSelect="true">
			<div property="columns">
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="40" align="center" headerAlign="center">机构</div>
				<div field="reportNoStr" sortField="report_no_str" allowSort="true" name="reportNoStr" width="40" align="center" headerAlign="center">报表名称</div>
				<div field="checkProject" autoEscape="true" width="40" headerAlign="left">项目</div>
				<div field="checkRisk" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onCheckRiskRendeder">关注等级</div>
				<div field="reportRate" autoEscape="true" width="40" headerAlign="center" align="center">校验频度</div>
				<div field="valueArea" autoEscape="true" width="40" headerAlign="center" align="center">阈值</div>
				<!-- <div field="dValue" autoEscape="true" width="40" headerAlign="center" align="center" renderer="ondValueRenderer">允许差值</div> -->
				<div field="value" autoEscape="true" width="40" headerAlign="center" align="center">波动幅度</div>
				<div field="dValue" autoEscape="true" width="40" headerAlign="center" align="center">波动差</div>
				<div field="cUser" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onUserRenderer">公式属性</div>
				<!-- <div field="content" width="100" headerAlign="center" >异动说明 
				<input property="editor" class="mini-textarea" style="width:100%;"/></div> -->
			</div>
		</div>
	</div>
</body>
</html>