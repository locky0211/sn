<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据效验</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ir_attention_check.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
<script>
$(function() {
var brNo ='${param.brNo}'
var reportDate = '${param.reportDate}'
var tabType = '${param.tabType}'
var tabType1 = '${param.tabType1}'
});
</script>

</head>
<body>
	<div id="attentionCheckForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>                             <!--url="${base }/sys/bm/getSysBmListByUserId.nut"  -->
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="false" multiSelect="true"
						required="true" class="mini-treeselect"  url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='IR'" textField="bmName"  parentField="pId"

						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" onvaluechanged="checks()" />&nbsp;&nbsp;
						<div id="recursive" name="recursive" class="mini-checkbox"  text="是否级联"  onvaluechanged='checkRecursive()'></div>
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" onvaluechanged="checks()"/>
						 
						&nbsp;&nbsp;报表类型:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=IR_TABLE_TAB_TYPE" required="true" allowInput="false" />
						
						<!-- <input id="formulaType"  name="formulaType" class="mini-hidden" textField="typeName" valueField="typeValue" class="mini-combobox"  style="width: 80px;" data="[{typeValue:'1',typeName:'普通'}]"
						allowInput="false"  onvaluechanged="checks()"/>
						 -->
					
						 <!-- <div id="isRepay" name="isRepay" class="mini-checkbox" readOnly="false" text="校验补报数据"></div> &nbsp;&nbsp; -->
						<a class="mini-button" iconCls="icon-ok" onclick="doReportCheck()">开始校验</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel"
						onclick="doExportExcel()">导出Excel</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="saveRemark()">提交备注</a>
						
						
						</td>
				</tr>
			</table>
		</div>
	</div>
	<div style="width: 100%;">
		校验结果:&nbsp;&nbsp; <font color='blue' style="font-size: 15px" id="noPassFont"></font>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="attentionCheckGrid" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%"
			url="${base}/ir/attentionCheck/getIrAttentionCheckResults.nut" showPager="false" onload="onGridLoad" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="true">
			<div property="columns">
			
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="organName" sortField="ORGAN_NO" allowSort="true" name="organNo" width="30" align="center" headerAlign="center">机构</div>
                <div field="attention" autoEscape="true" width="30" headerAlign="center" align="center">关注指标</div>
				<div field="content" width="60" headerAlign="center" renderer="onErrorMsgRenderer" align="center">指标说明</div>
				<div field="bzInformation" width="100" headerAlign="center" align="center">备注信息 
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