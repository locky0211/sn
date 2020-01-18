<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>

<script type="text/javascript" src="../js/rd_report_check_old_sj.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
<script>
/* $(function() {
	mini.get("formulaType").setValue("1");
}); */
var brNo ='${param.brNo}'
var reportDate = '${param.reportDate}'
var checkFormula = '${param.checkFormula}'
var tabType = '${param.tabType}'
var checkArea = '${param.checkArea}'
var tabType1 = '${param.tabType1}'
</script>

</head>
<body>
<div>
		<input id="brNo" name="brNo" class="mini-hidden" value="${param.brNo }"/>
		<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate }"/>
		<input id="checkFormula" name="checkFormula" class="mini-hidden" value="${param.checkFormula }"/>
		
	</div>
	<div id="reportCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"></label>
					 <%-- 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" value="<%= brno%>" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" onvaluechanged="checks()" /> &nbsp;&nbsp;报表日期:&nbsp;<input id="rDate"
						name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" onvaluechanged="checks()"/>
						 
						&nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" required="true" allowInput="false" onvaluechanged="checks()"/>
						
						<input id="formulaType"  name="formulaType" class="mini-hidden" textField="typeName" valueField="typeValue" class="mini-combobox"  style="width: 80px;" data="[{typeValue:'1',typeName:'普通'}]"
						allowInput="false" />
						
						&nbsp;&nbsp;校验范围:&nbsp;
						<input id="checkArea" name="checkArea" class="mini-combobox" style="width:80px" textField="areaName" valueField="areaValue" data="[{areaValue:'0',areaName:'全部校验'},{areaValue:'1',areaName:'表内校验'},{areaValue:'2',areaName:'表间校验'}]" allowInput="false" required="true" />
						
						<div id="isRepay" name="isRepay" class="mini-checkbox" readOnly="false" text="校验补报数据"></div> &nbsp;&nbsp;
						<a class="mini-button" iconCls="icon-ok" onclick="doReportCheck()">开始校验</a> --%>
						<!-- <a class="mini-button" iconCls="icon-excel"
						onclick="doExportExcel()">导出Excel</a> <a class="mini-button" iconCls="icon-txt" onclick="saveRemark()">提交备注</a> -->
						<!-- &nbsp;&nbsp;<a id='review' class="mini-button" iconCls="icon-ok" onclick="review()">提交复审</a>
						<a id='otherReview' class="mini-button" iconCls="icon-ok" onclick="otherReview()">校验通过部分提交复审</a> -->
						<a id="checkRole" class="mini-button" iconCls="icon-txt" onclick="issued()" style="float: right;margin-right: 15px">问题下发</a>
						</td>
				</tr>
			</table>
		</div>
	</div>
	<!-- <div style="width: 100%;">
		校验结果:&nbsp;&nbsp; <font color='blue' style="font-size: 15px" id="noPassFont"></font>
	</div> -->
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%"
			url="${base}/rd/error/check/confirm/getRdReportCheckResultSj.nut" showPager="false" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="true">
			<div property="columns" >
				<div type="checkcolumn" width="10" align="center" headerAlign="center" ></div>
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="20" align="center" headerAlign="center" renderer="onBrNo">机构</div>
				<div field="checkRisk" sortField="CHECK_RISK" allowSort="true" width="20" align="center" headerAlign="center" renderer="onRiskRenderer">风险等级</div>
				<div field="formula" autoEscape="true" width="40" headerAlign="center">校验公式</div>
				<div field="content" width="40" headerAlign="center" >校验结果</div>
				<div field="CZ" width="40" allowSort="true" headerAlign="center" align="right" renderer="onValueRender" >差值</div>
				<div field="formulaMark" width="80" headerAlign="center">公式描述</div>
				<div field="bzInformation" width="80" headerAlign="center" >备注信息 
				<input property="editor" class="mini-textarea" style="width:100%;"/></div>
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