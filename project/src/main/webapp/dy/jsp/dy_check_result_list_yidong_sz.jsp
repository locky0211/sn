<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验结果列表</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_check_result_list_yidong_sz.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="checkResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" multiSelect="true" showFolderCheckBox="true" checkRecursive="true"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DY'" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect"/>
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true"
						value="${param.reportDate }" /> &nbsp;&nbsp;报表类型:&nbsp; <input id="tabType" name="tabType" class="mini-combobox" style="width: 80px;"
						textField="zdName" showNullItem="true" valueField="zdValue" value="${param.tabType }"url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE" allowInput="false" />
						&nbsp;&nbsp;校验频度:&nbsp; <input id="reportRate" name="reportRate" class="mini-combobox" style="width: 100px;" textField="zdName"
						valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_YIDONG_FORMULA_TYPE" allowInput="false"  showNullItem="true"/>
						
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearchCheckResult()">查找</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doExportExcel()">导出Excel</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkResultGrid" allowAlternating="true" class="mini-datagrid" onrowclick="showCheckView" style="width: 100%; height: 100%;"
			url="${base}/dy/check/wave/getDyReportCheckResultsForSearch.nut"  allowAlternating="true" showPager="false" showModified="false">
			<div property="columns">
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="40" align="center" headerAlign="center">机构</div>
				<div field="reportNoStr" sortField="report_no_str" allowSort="true" name="reportNoStr" width="40" align="center" headerAlign="center">报表名称</div>
				<div field="checkProject" autoEscape="true" width="40" headerAlign="center">项目</div>
				<div field="reportRate" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onFormulaRenderer">公式</div>
				<div field="valueArea" autoEscape="true" width="40" headerAlign="center" align="center">阈值</div>
				<div field="value" autoEscape="true" width="40" headerAlign="center" align="center">波动幅度</div>
				<div field="dValue" autoEscape="true" width="40" headerAlign="center" align="center">波动差</div>
				<div field="cUser" autoEscape="true" width="40" headerAlign="center" align="center" renderer="onUserRenderer">公式属性</div>
			</div>
		</div>
	</div>
</body>
</html>