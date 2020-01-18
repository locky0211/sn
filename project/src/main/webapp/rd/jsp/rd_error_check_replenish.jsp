<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>上海差错审核认定</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_error_check_replenish.js"></script>
</head>
<body>
	<div id="issuedResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<a class="mini-button" iconCls="icon-add" onclick="add()">新增</a>
						<label style="font-family: Verdana;"> 机构: </label> 
						<input id="bmCode" showClose="true" oncloseclick="onCloseClick" name="brNo" style="width: 250px;"
							popupHeight="300px;" popupWidth="350px;" multiSelect="true" showFolderCheckBox="true" checkRecursive="true" required="false" class="mini-treeselect" 
							url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" parentField="pId" valueField="bmCode" resultAsTree="false" 
							allowInput="false" /> 
						&nbsp;&nbsp;报表起始日期:&nbsp;
						<input id="startDate" name="startDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="false" value="" />
						&nbsp;&nbsp;报表截止日期:&nbsp;
						<input id="endDate" name="endDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="false" value="" />
						&nbsp;&nbsp;报表类型:&nbsp; 
						<input id="tabType" name="tabType" class="mini-combobox" style="width: 80px;" textField="zdName" showNullItem="true" valueField="zdValue" value=""
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" allowInput="false" />
						&nbsp;&nbsp;校验类型:&nbsp;
						<input id="checkFlag" name="checkFlag" class="mini-combobox" style="width: 80px;" showNullItem="true"  style="width: 60px;"
							textField="checkFlagName" valueField="checkFlagValue" data="[{checkFlagValue:'1',checkFlagName:'基础'},{checkFlagValue:'2',checkFlagName:'异动'}]" allowInput="false" value="" />  
						&nbsp;&nbsp;处室:&nbsp;
						<input id="blameRoom" name="blameRoom" class="mini-combobox" style="width: 100px;" showClose="true" oncloseclick="onCloseClick"  textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_YGBMGL"/>  
						&nbsp;&nbsp;
						<a class="mini-button" iconCls="icon-search" onclick="doSearchIssued()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="issuedResultGrid" allowAlternating="true" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%;" url="${base}/rd/error/check/confirm/getRdErrorCheckReplenishList.nut"
			pageSize="20" allowAlternating="true" showPager="true" showModified="true" allowCellEdit="true" allowCellSelect="true"  multiSelect="true" allowCellWrap="false">
			<div property="columns" >
			   <div type="checkcolumn" width="30" align="center" headerAlign="center"></div>
				<div field="organNo" name="organNo" allowSort="true" width="140" align="center" headerAlign="center" renderer="onBrNo">机构</div>
				<div field="reportNoStr" width="40" allowSort="true" align="center" headerAlign="center" name="reportNoStr">报表编号</div>
				<div field="reportName" width="100" allowSort="true" align="center" headerAlign="center" name="reportName">报表名称</div>
				<div field="reportDate" width="40" allowSort="true" align="center" headerAlign="center" name="reportDate">报表日期</div>
				<div field="tabType" width="50" allowSort="true" align="center" headerAlign="center" name="tabType">报表类型</div>
				<div field="checkFlag" width="40" allowSort="true" align="center" headerAlign="center" name="checkFlag" renderer="issuedTypeRenderer">校验类型</div>
				<div field="blameUser" width="50" allowSort="true" align="center" headerAlign="center" name="blameUser" >审核人员</div>
				<div field="blameRoom" width="60" allowSort="true" align="center" headerAlign="center" name="blameRoom" >审核处室</div>
				<div field="sysTips" width="150" allowSort="true" align="center" headerAlign="center" name="sysTips" >系统提示</div>
				<div field="errorSource" width="50" allowSort="true" align="center" headerAlign="center" name="errorSource" renderer="theRenderer">差错来源</div>
				<div name="action" width="90" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			</div>
		</div>
	</div>
</body>
</html>