<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_wave_description_count.js"></script>
<%
  HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
<script type="text/javascript">
	var bmCode = "${param.brNo}";
	var rDate = "${param.reportDate}";
	console.log(bmCode + " , " + rDate);
</script>
<title>异动报备统计</title>
</head>
<body>
	<div id="waveCountForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 80%;">
						<input id="bmCode" name="brNo" style="width: 250px;" class="mini-hidden" value="${param.brNo}" />
						<input id="rDate" name="reportDate" style="width: 80px;" class="mini-hidden" format="yyyyMM"  value="${param.reportDate}"/> &nbsp;&nbsp;
						<a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a> 
					</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="waveCountGrid" class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%" url="${base}/importWaveDesc/countWaveDesc.nut?brNo=${param.brNo}"
			showPager="false" allowAlternating="true" allowCellEdit="true" allowCellSelect="true">
			<div property="columns">
				<div type="indexcolumn" width="8" align="center" headerAlign="center">序号</div>
				<div field="organNo" width="30" align="center" headerAlign="center" visible="false">机构名称</div>
				<div field="organName" width="30" align="center" headerAlign="center">机构名称</div>
				<div field="reportDate" width="15" align="center" headerAlign="center">报表日期</div>
				<div field="tabCode" width="15" align="center" headerAlign="center">报表代码</div>
				<!-- <div field="tabType" width="15" align="center" headerAlign="center">报表类型</div> -->
				<div field="element" width="24" align="center" headerAlign="center">单元格</div>
				<div field="checkProject" width="30" align="center" headerAlign="center">指标</div>
				<div field="value" width="18" align="center" headerAlign="center">波动幅度</div>
				<div field="dValue" width="18" align="center" headerAlign="center">波动差</div>
				<div field="content"   headerAlign="center">异动说明
				<input property="editor" class="mini-textarea" style="width:100%;" readOnly/></div>
				<div field="descState" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">采纳状态</div>
				<div field="id" name="id" visible="false"></div>
			</div>
		</div>
	</div>
	
</body>
</html>