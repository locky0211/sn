<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_check_report.js"></script>
</head>
<body>
	<input type="hidden" id="cUserInput" value="${param.cUser}">
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM"
						required="true" onvaluechanged="gridLoad()" /> &nbsp;&nbsp;报表类型:&nbsp; <input id="tabType" name="tabType" class="mini-combobox"
						style="width: 60px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" required="true"
						allowInput="false" onvaluechanged="gridLoad()" /> <a class="mini-button" iconCls="icon-search" onclick="gridLoad()">查询</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkReportGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/rd/check/getCheckReport.nut" allowAlternating="true"
			showPager="false">
			<div property="columns">
				<div field="field2" align="center" headerAlign="center">机构名称</div>
				<div field="field3" align="center" width="20" headerAlign="center">需上报报表数</div>
				<div field="field4" align="center" width="20" headerAlign="center" renderer="onField4Renderer">已上报报表数</div>
				<div field="field5" align="center" width="20" headerAlign="center" renderer="onField5Renderer">数值准确</div>
				<div field="field6" align="center" width="20" headerAlign="center" renderer="onField6Renderer">敏感关注</div>
			</div>
		</div>
	</div>
</body>
</html>