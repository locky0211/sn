<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_report_check_yd_zs_nj.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
<script>
var brNo ='${param.brNo}'
var reportDate = '${param.reportDate}'
var checkFormula = '${param.formula}'
var formulaId = '${param.formulaId}'
var tabType = '${param.tabType}'
var checkArea = '${param.checkArea}'
var tabType1 = '${param.tabType1}'
</script>
</head>
<body>
<div>
		<input id="brNo" name="brNo" class="mini-hidden" value="${param.brNo }"/>
		<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate }"/>
		<input id="checkFormula" name="checkFormula" class="mini-hidden" value="${param.formula }"/>
		<input id="formulaId" name="formulaId" class="mini-hidden" value="${param.formulaId }"/>
	</div>
<div id="reportCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"></label>
						追溯结果:&nbsp;&nbsp;
						
						<a id="checkRole" class="mini-button" onclick="issued()" iconCls="icon-txt" style="width: 100px;float: right;margin-right: 15px">问题下发</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<!-- <a class="mini-button" onclick="agreeToIssue()"  iconCls="icon-txt" style="width: 100px;float: right;margin-right: 15px">确认采纳</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
						</td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%" url="${base}/rd/check/wave/getRdReportCheckResultsSearchNj_zs.nut" showPager="false"
			 allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="true">
			<div property="columns">
			<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="organName" sortField="ORGAN_NAME" allowSort="true" name="organName" width="100" align="center" headerAlign="center">机构</div>
				<div field="reportNoStr" sortField="report_no_str" allowSort="true" name="reportNoStr" width="40" align="center" headerAlign="center">报表名称</div>
				<div field="checkProject" autoEscape="true" width="40" headerAlign="left">项目</div>
				<!--<div field="checkRisk" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onCheckRiskRendeder">关注等级</div> -->
				<div field="reportRate" autoEscape="true" width="40" headerAlign="center" align="center">校验频度</div>
				<div field="valueArea" autoEscape="true" width="60" headerAlign="center" align="center">阈值</div>
				<!-- <div field="dValue" autoEscape="true" width="40" headerAlign="center" align="center" renderer="ondValueRenderer">允许差值</div> -->
				<div field="value" autoEscape="true" width="40" headerAlign="center" align="right">波动幅度</div>
				<div field="dValue" autoEscape="true" width="40" headerAlign="center" align="right">波动差</div>
				<div field="ydDesc" width="100" headerAlign="center" >机构说明信息</div>
				<!--<div field="cUser" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onUserRenderer">公式属性</div>-->
				<div field="bzInformation" width="100" headerAlign="center"  align="left">备注问题
				<input property="editor" class="mini-textarea" style="width:100%;"/></div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>
				
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="操作结果" style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true" allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>