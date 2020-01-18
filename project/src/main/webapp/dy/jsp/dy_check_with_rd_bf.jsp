<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_check_with_rd_bf.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
<script>
$(function() {
});
var brNoDy ='${param.brNoDy}'
var reportDate = '${param.reportDate}'
var tabType = '${param.tabType}'
</script>

</head>
<body>
	<div id="reportCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 自定义机构: </label> <!--  <input id="bmCodeDy" showClose="true" oncloseclick="onCloseClick"
						name="brNoDy" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" />--> 
						 
						 <input id="bmCodeDy" showClose="true" onvaluechanged="dyChange()" oncloseclick="onCloseClick"
						name="brNoDy" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="false"
						required="false" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" expandOnLoad="false"/> 
						 
						 <label style="font-family: Verdana;"> 1104机构: </label> <!--  <input id="bmCodeRd"  showClose="true" oncloseclick="onCloseClick"
						name="brNoRd" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						required="false" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /> -->
						 
						 
						 <input id="bmCodeRd" showClose="true" onvaluechanged="rdChange()" oncloseclick="onCloseClick"
						name="brNoRd" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="false"
						required="false" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" expandOnLoad="false"/> 
						 
						<!--   <label style="font-family: Verdana;">  </label> <input id="bmCodeBf" class="mini-hidden" showClose="true" oncloseclick="onCloseClick"
						name="brNoBf" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						required="false" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut?bmCategory=BF" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /> -->&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate"
						name="reportDate" style="width: 100px;" class="mini-monthpicker" format="yyyyMM" required="true" />
						 
						&nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE" required="true" allowInput="false" />
						
						
						
						 <!-- <div id="isRepay" name="isRepay" class="mini-checkbox" readOnly="false" text="校验补报数据"></div> &nbsp;&nbsp; -->
						<a class="mini-button" iconCls="icon-ok" onclick="doReportCheck()">开始校验</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel"
						onclick="doExportExcel()">导出Excel</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div style="width: 100%;">
		校验结果:&nbsp;&nbsp; <font color='blue' style="font-size: 15px" id="noPassFont"></font>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportCheckGrid" class="mini-datagrid" onrowclick="showCheckView" style="width: 100%; height: 100%"
			url="${base}/dy/RdBf/getDyReportCheckResults.nut" showPager="false" onload="onGridLoad" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="true">
			<div property="columns">
				<div field="organNameDy" sortField="ORGAN_NO_DY" allowSort="true" name="organNoDy" width="30" align="center" headerAlign="center">自定义机构</div>
				<div field="organNameRd" sortField="ORGAN_NO_RD" allowSort="true" name="organNoRd" width="30" align="center" headerAlign="center">1104机构</div>
				<!--  <div field="organNameBf" sortField="ORGAN_NO_BF" allowSort="true" name="organNoBf" width="30" align="center" headerAlign="center">大集中机构</div>-->
				<div field="formula" autoEscape="true" width="40" headerAlign="center">校验公式</div>
				<div field="content" width="80" headerAlign="center" renderer="onErrorMsgRenderer">错误信息</div>
				<div field="formulaRemark" width="100" headerAlign="center" align="center">备注信息 
				<input property="editor" class="mini-textarea" style="width:100%;"/></div>
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="操作结果" style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true"
		allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>