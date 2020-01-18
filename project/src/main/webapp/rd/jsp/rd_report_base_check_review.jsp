<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>南京省局追溯</title>
<%@include file="../../common/quote/boot.html"%>

<script type="text/javascript" src="../js/rd_report_base_check_review.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
<script>
var brNo ='${param.brNo}';
var reportDate = '${param.reportDate}';
var checkFormula = '${param.checkFormula}';
var tabType = '${param.tabType}';
var checkArea = '${param.checkArea}';
var tabType1 = '${param.tabType1}';
var reExamine = '${param.reExamine}';
</script>
</head>
<body>
	<div>
		<input id="brNo" name="brNo" class="mini-hidden" value="${param.brNo }"/>
		<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate }"/>
		<input id="checkFormula" name="checkFormula" class="mini-hidden" value="${param.checkFormula }"/>
		<input id="reExamine" name="reExamine" class="mini-hidden" value="${param.reExamine }"/>
	</div>
	<div id="reportCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"></label>
						<a id="checkRole" class="mini-button" iconCls="icon-redo" onclick="issued()" style="float: right;margin-right: 15px">问题下发</a>
						</td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%"
			url="${base}/rd/problem/summary/getRdReportCheckResultNj.nut" showPager="false" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="true">
			<div property="columns" >
				<div type="checkcolumn" width="10" align="center" headerAlign="center" ></div>
				<div field="organName" sortField="ORGAN_NAME" allowSort="true" name="organNo" width="20" align="center" headerAlign="center">机构</div>
				<div field="checkRisk" sortField="CHECK_RISK" allowSort="true" width="20" align="center" headerAlign="center" renderer="onRiskRenderer">风险等级</div>
				<div field="formula" autoEscape="true" width="40" headerAlign="center">校验公式</div>
				<div field="content" width="40" headerAlign="center" >校验结果</div>
				<div field="CZ" width="40" allowSort="true" headerAlign="center" align="right" renderer="onValueRender" >差值</div>
				<div field="formulaMark" width="80" headerAlign="center">公式描述</div>
				<div field="bzInformation" width="80" headerAlign="center" >备注信息 
				<input property="editor" class="mini-textarea" style="width:100%;"/></div>
				<div width="20" renderer="relatedExist" headerAlign="center">操作</div>
			</div>
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="操作结果" style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true"
		allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>