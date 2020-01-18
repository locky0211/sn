<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>审核历史记录</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bf_review_search.js"></script>
<script type="text/javascript"> 

</script>

</head>
<body>
	<div id="remarksResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 250px;"
						popupHeight="300px;" popupWidth="350px;" multiSelect="true" showFolderCheckBox="true" checkRecursive="false" required="false" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut?bmCategory=BF"
						textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect"/> &nbsp;&nbsp;报表起始日期:&nbsp;<input id="startDate" name="startDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" value="" />
						&nbsp;&nbsp;报表截止日期:&nbsp;<input id="endDate" name="endDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" value="" />
						&nbsp;&nbsp;校验类型:&nbsp; <input id="tabType" name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" showNullItem="true" valueField="zdValue" value=""
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_TABLE_TAB_TYPE" allowInput="false" />
						&nbsp;&nbsp;审核状态:&nbsp;<input id="reviewStatus" name="reviewStatus" class="mini-combobox" style="width: 80px;" showNullItem="true"  style="width: 60px;"
						textField="statusName" valueField="statusValue" data="[{statusValue:'0',statusName:'待审核'},{statusValue:'1',statusName:'审核未通过'},{statusValue:'2',statusName:'审核通过'}]" allowInput="false" value="" />  
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearchRemarks()">查找</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel" onclick="doReportExport()">导出</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
	<div id="remarksResultGrid" allowAlternating="true" class="mini-datagrid"  style="width: 100%; height: 100%;" url="${base}/bf/remarks/getBfRemarksHistoryRecord.nut"
			pageSize="150" allowAlternating="true" showPager="true" showModified="true" allowCellEdit="true" allowCellSelect="true"  multiSelect="true" allowCellWrap="false">
			<div property="columns" >
			   <div type="checkcolumn" width="30" align="center" headerAlign="center"></div>
				<div field="organNo" sortField="ORGAN_NO" allowSort="true" name="organNo" width="80" align="center" headerAlign="center" renderer="onBrNo">机构</div>
				<div field="tabType" sortField="TAB_Type" allowSort="true" width="80" align="center" headerAlign="center" name="tabType">校验类型</div>
                <div field="formula" autoEscape="true" headerAlign="center">校验公式</div>
				<div field="content" headerAlign="center" >错误信息</div>
				<div field="reportUser" headerAlign="center" >校验员</div>
				<div field="remarks" headerAlign="center" renderer="onColor">备注信息</div>
				<div field="reportDate" headerAlign="center" >报表日期</div>
				<div field="reportReviewer" headerAlign="center" >审核员</div>
				<div field="reviewAdvice" headerAlign="center">审核意见</div>
				<div field="flag" headerAlign="center" renderer="onGetStatus">审核状态</div>
				<div field="cancelFlag" headerAlign="center" renderer="onGetCancelStatus">撤销审核状态</div>
			</div>
		
	</div>
</body>
</html>