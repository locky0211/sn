<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验结果列表</title>
<%@include file="../../common/quote/boot.html"%>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
  List<String> list=(List)Session.getAttribute("sessionUserRoleId");
  String flag="";
  
	%>
<script type="text/javascript" src="../js/rd_report_review_cs.js"></script>
<script type="text/javascript"> 
$(function() {
	mini.get("checkType").setValue("1");
});
var brno='<%=(String) request.getSession().getAttribute("SystemBrNo")%>';
var flag='<%=flag%>';
var brNo='${param.brNo }';
</script>
</head>
<body>
	<div id="remarksResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 250px;"
						popupHeight="300px;" popupWidth="350px;" multiSelect="true" showFolderCheckBox="true" checkRecursive="true" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut"
						textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect"
						value="${param.brNo }" /> &nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" value="${param.reportDate }" />
						&nbsp;&nbsp;校验类型:&nbsp; <input id="tabType" name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" showNullItem="true" valueField="zdValue" value="${param.tabType }"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" allowInput="false" /> <input id="checkType" name="checkType" showNullItem="true" class="mini-hidden" style="width: 60px;"
						textField="typeName" valueField="typeValue" data="[{typeValue:'1',typeName:'普通'},{typeValue:'2',typeName:'异动'}]" allowInput="false" value="${param.checkType }" />
						&nbsp;&nbsp;审核状态:&nbsp;<input id="reviewStatus" name="reviewStatus" class="mini-combobox" style="width: 80px;" showNullItem="true"  style="width: 60px;"
						textField="statusName" valueField="statusValue" data="[{statusValue:'0',statusName:'待审核'},{statusValue:'1',statusName:'审核未通过'},{statusValue:'2',statusName:'审核通过'}]" allowInput="false" value="${param.checkType }" />  
						  &nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearchRemarks()">查找</a>
						<%if(list.contains("rdReporter")||list.contains("admin")){%>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="updateRemark()" style="color: green">提交备注</a>
						<%};%>
						<%if(list.contains("rdReviewer")||list.contains("admin")){%>
						&nbsp;&nbsp;&nbsp;<a  class="mini-button" iconCls="icon-txt" onclick="onlyUpdateRemark()" style="color: green">保存审核意见</a>
						&nbsp;&nbsp;&nbsp;<a  class="mini-button" iconCls="icon-txt" onclick="updateRemarkTH()" style="color: green">提交审核意见并退回</a>
						&nbsp;&nbsp;&nbsp;<a  class="mini-button" iconCls="icon-txt" onclick="reviewSuccess()" style="color: green">审核通过</a>
						&nbsp;&nbsp;&nbsp;<a  class="mini-button" iconCls="icon-txt" onclick="deleteRemarks()" style="color: red">去除记录</a>
					    <%};%>
						<%if(list.contains("rdReporter")||list.contains("admin")){%>
						&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="cancelRemark()" style="color: blue">申请撤销审核</a>
						<%};%>
						<%if(list.contains("rdReviewer")||list.contains("admin")){%>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="agreeNCancel()"style="color: blue">不同意撤销</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="agreeCancel()" style="color: blue">同意撤销</a>
	                    <%};%>
						</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
	<div id="remarksResultGrid" allowAlternating="true" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%;" url="${base}/rd/remarks/getRdReportRemarksResultListArea.nut"
			pageSize="150" allowAlternating="true" showPager="true" showModified="true" allowCellEdit="true" allowCellSelect="true" allowCellWrap="false" multiSelect="true">
			<div property="columns">
			<div type="checkcolumn" width="20" align="center" headerAlign="center"></div>
			  <div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="75"  align="center" headerAlign="center" renderer="onBrNo">机构</div>
				<div field="tabType" sortField="TAB_Type" allowSort="true" width="75" align="center" headerAlign="center" name="tabType">校验类型</div>
				<div field="formula" autoEscape="true" headerAlign="center">校验公式</div>
				<div field="content" headerAlign="center" >错误信息</div>
				<div field="reportUser" headerAlign="center" >校验员</div>
				<div field="remarks" headerAlign="center" renderer="onColor">备注信息<%if(list.contains("rdReporter")||list.contains("admin")){%><input property="editor" class="mini-textarea" style="width:100%;"/><%};%></div>
				<div field="reportDate" headerAlign="center" >报表日期</div>
				<div field="reportReviewer" headerAlign="center" >审核员</div>
				<div field="reviewAdvice" headerAlign="center">审核意见<%if(list.contains("rdReviewer")||list.contains("admin")){%><input property="editor" class="mini-textarea" style="width:100%;"/><%};%></div>
				<div field="flag" headerAlign="center" renderer="onGetStatus">审核状态</div>
				<div field="cancelFlag" headerAlign="center" renderer="onGetCancelStatus">撤销审核状态</div>
			</div>
		</div>
		</div>
</body>
</html>