<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>监管措施-通报</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_error_record_punish.js"></script>
</head>
<body>
	<div id="issuedResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						&nbsp;&nbsp;报表起始日期:&nbsp;
						<input id="startDate" name="startDate" style="width: 100px;" class="mini-datepicker" format="yyyyMMdd" required="false" value="" />
						&nbsp;&nbsp;报表截止日期:&nbsp;
						<input id="endDate" name="endDate" style="width: 100px;" class="mini-datepicker" format="yyyyMMdd" required="false" value="" />
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearch()">查询</a>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请先选中父节点，再点击行政处罚按钮！
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-setup" onclick="doPunish()">行政处罚</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<%-- <div id="issuedResultGrid" allowAlternating="true" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 45%;" url="${base}/rd/error/dispose/getPunishList.nut"
			pageSize="20" allowAlternating="true" showPager="true" showModified="true" allowCellEdit="true" allowCellSelect="true"  multiSelect="true" allowCellWrap="false">
			<div property="columns" >
			   <div type="checkcolumn" width="30" align="center" headerAlign="center"></div>
				<div field="organNo" name="organNo" allowSort="true" width="140" align="center" headerAlign="center">机构</div>
				<div field="reportDate" width="40" allowSort="true" align="center" headerAlign="center" name="reportDate">报表日期</div>
				<div field="tabType" width="50" allowSort="true" align="center" headerAlign="center" name="tabType">报表类型</div>
				<div field="reportNoStr" width="40" allowSort="true" align="center" headerAlign="center" name="reportNoStr">报表编号</div>
				<div field="reportName" width="100" allowSort="true" align="center" headerAlign="center" name="reportName">报表名称</div>
				<div field="cUser" width="40" allowSort="true" align="center" headerAlign="center" name="cUser">发现人</div>
				<div field="errorFlag" width="40" allowSort="true" align="center" headerAlign="center" name="errorFlag" renderer="onErrorType">差错类型</div>
				<div field="remark" width="150" allowSort="true" align="center" headerAlign="center" name="remark" >问题描述</div>
				<div field="errorMoney" width="60" allowSort="true" align="center" headerAlign="center" name="errorMoney" >差错金额</div>
				<div field="lateDays" width="40" allowSort="true" align="center" headerAlign="center" name="lateDays" >迟报天数</div>
				<!--<div field="errorSource" width="50" allowSort="true" align="center" headerAlign="center" name="errorSource" renderer="theRenderer">差错来源</div>
				<div name="action" width="100" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>-->
			</div>
		</div> --%>
		<!-- treegrid -->
		 <div id="issuedResultGrid" allowAlternating="true" class="mini-treegrid" onrowdblclick="showCheckView" style="width: 100%; height: 45%;" url="${base}/rd/error/dispose/getPunishList.nut"
			 expandOnLoad="false" showTreeIcon="true" treeColumn="organNo" idField="id" parentField="pId" resultAsTree="false" allowDrag="true" allowDrop="true" showModified="false" showCheckBox="true" checkRecursive="true">
			<div property="columns" >
			    <div type="indexcolumn" width="25" align="center" headerAlign="center">序号</div>
				<div field="organNo" name="organNo" allowSort="true" width="140" align="center" headerAlign="center">机构</div>
				<div field="reportDate" width="40" allowSort="true" align="center" headerAlign="center" name="reportDate">报表日期</div>
				<div field="tabType" width="50" allowSort="true" align="center" headerAlign="center" name="tabType">报表类型</div>
				<div field="reportNoStr" width="40" allowSort="true" align="center" headerAlign="center" name="reportNoStr">报表编号</div>
				<div field="reportName" width="100" allowSort="true" align="center" headerAlign="center" name="reportName">报表名称</div>
				<div field="cUser" width="40" allowSort="true" align="center" headerAlign="center" name="cUser">发现人</div>
				<div field="errorFlag" width="40" allowSort="true" align="center" headerAlign="center" name="errorFlag" renderer="onErrorType">差错类型</div>
				<div field="remark" width="150" allowSort="true" align="center" headerAlign="center" name="remark" >问题描述</div>
				<div field="errorMoney" width="60" allowSort="true" align="center" headerAlign="center" name="errorMoney" >差错金额</div>
				<div field="lateDays" width="40" allowSort="true" align="center" headerAlign="center" name="lateDays" >迟报天数</div>
			</div>
		</div> 
	<div id="cfForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
						<td style="width: 100%;">
							&nbsp;&nbsp;处罚状态：&nbsp;
							<input id="cfFlag" name="cfFlag" class="mini-combobox" style="width: 90px;" oncloseclick="onCloseClick" showClose="true" required="true" data="[{id:'1',text:'处罚中'},{id:'2',text:'处罚结束'}]" value="" />&nbsp;&nbsp;
							<a class="mini-button" iconCls="icon-setup" onclick="searchCf()">查询</a>
						</td>
						
					</tr>
			</table>
		</div>
	</div>
		<div id="punishGrid" allowAlternating="true" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height:49%;" url="${base}/rd/error/dispose/getPunishListFlag.nut"
			pageSize="20" allowAlternating="true" showPager="true" showModified="true" allowCellEdit="true" allowCellSelect="true"  multiSelect="true" allowCellWrap="false">
			<div property="columns" >
			   	<div type="indexcolumn" width="25" align="center" headerAlign="center">序号</div>
				<div field="organNo" name="organNo" allowSort="true" width="100" align="center" headerAlign="center">机构</div>
				<div field="ay" width="190" allowSort="true" align="center" headerAlign="center" name="reportDate">案由</div>
				<div field="laDate" width="50" allowSort="true" align="center" headerAlign="center" name="tabType">立案日期</div>
				<div field="cfDate" width="40" allowSort="true" align="center" headerAlign="center" name="reportNoStr">处罚决定日期</div>
				<div field="cfFlag" width="30" allowSort="true" align="center" headerAlign="center" name="reportName" renderer="onCfFlag">处罚状态</div>
<!-- 				<div field="cUser" width="40" allowSort="true" align="center" headerAlign="center" name="cUser">发现人</div>
				<div field="errorFlag" width="40" allowSort="true" align="center" headerAlign="center" name="errorFlag" renderer="onErrorType">差错类型</div>
				<div field="remark" width="100" allowSort="true" align="center" headerAlign="center" name="remark" >问题描述</div>
				<div field="errorMoney" width="40" allowSort="true" align="center" headerAlign="center" name="errorMoney" >差错金额</div>
				<div field="lateDays" width="40" allowSort="true" align="center" headerAlign="center" name="lateDays" >迟报天数</div> -->
				<div name="action" width="150" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			</div>
		</div>
		
	</div>
</body>
</html>