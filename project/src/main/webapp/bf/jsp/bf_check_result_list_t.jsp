<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验结果列表</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bf_check_result_list_t.js"></script>
<script type="text/javascript"> 
$(function() {
	mini.get("checkType").setValue("1");
});
var brno='<%=(String) request.getSession().getAttribute("SystemBrNo")%>'
</script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="checkResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 250px;"
						popupHeight="300px;" popupWidth="350px;" multiSelect="true" showFolderCheckBox="true" checkRecursive="false" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut?bmCategory=BF"
						textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" value="${param.brNo }"
						 /> &nbsp;&nbsp;<div id="recursive" name="recursive" class="mini-checkbox"  text="是否级联"  onvaluechanged='checkRecursive()'></div>&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" value="${param.reportDate }" />
						&nbsp;&nbsp;<%-- 校验类型:&nbsp; <input id="tabType" name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" showNullItem="true" valueField="zdValue" value="${param.tabType }"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_TABLE_TAB_TYPE" allowInput="false" /> --%> <input id="checkType" name="checkType" showNullItem="true" class="mini-hidden" style="width: 60px;"
						textField="typeName" valueField="typeValue" data="[{typeValue:'1',typeName:'普通'},{typeValue:'2',typeName:'异动'}]" allowInput="false" value="${param.checkType }" /> &nbsp;&nbsp;校验范围:&nbsp; <input
						id="checkArea" name="checkArea" showNullItem="true" class="mini-combobox" style="width: 80px;" textField="areaName" valueField="areaValue"
						data="[{areaValue:'0',areaName:'全部校验'},{areaValue:'1',areaName:'表内校验'},{areaValue:'2',areaName:'表间校验'}]" allowInput="false" /> &nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearchCheckResult()">查找</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel"
						onclick="doExportExcel()">导出Excel</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkResultGrid" allowAlternating="true" class="mini-datagrid" onrowclick="showCheckView" style="width: 100%; height: 100%;" url="${base}/bf/check/temp/getBfReportCheckResultListArea.nut"
			pageSize="150" showPager="true" showModified="false">
			<div property="columns">
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="60" align="center" headerAlign="center">机构</div>
				<div field="tabType" sortField="TAB_Type" allowSort="true" width="40" align="center" headerAlign="center">校验类型</div>
				<div field="reportNoStr" sortField="report_no_str" allowSort="true" width="40" align="center" headerAlign="center">关联报表</div>
			    <div field="formula" autoEscape="true" headerAlign="center">校验公式</div>
				<div field="content" headerAlign="center" renderer="onErrorMsgRenderer">错误信息</div>
				<div field="bzInformation" width="80" headerAlign="center" >备注信息 </div>
				<div field="flag" headerAlign="center" renderer="onGetStatus">审核状态</div>
			</div>
		</div>
	</div>
</body>
</html>