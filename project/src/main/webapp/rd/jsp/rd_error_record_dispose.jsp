<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>监管措施-通报</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_error_record_dispose.js"></script>
</head>
<body>
	<div id="issuedResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						&nbsp;&nbsp;报表起始日期:&nbsp;
						<input id="startDate" name="startDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="false" value="" />
						&nbsp;&nbsp;报表截止日期:&nbsp;
						<input id="endDate" name="endDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="false" value="" />
						&nbsp;&nbsp;是否通报&nbsp;
						<input id="tbFlag" name="tbFlag" style="width: 80px;" class="mini-combobox" data="[{id:'1',text:'是'},{id:'2',text:'否'}]" oncloseclick="onCloseClick" showClose="true" value="" />
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="doSearch()">查询</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-setup" onclick="doNotiFy()">通报</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="issuedResultGrid" allowAlternating="true" class="mini-datagrid" onrowdblclick="showCheckView" style="width: 100%; height: 100%;" url="${base}/rd/error/dispose/getNotifyList.nut"
			pageSize="20" allowAlternating="true" showPager="true" showModified="true" allowCellEdit="true" allowCellSelect="true"  multiSelect="true" allowCellWrap="false">
			<div property="columns" >
			   <div type="checkcolumn" width="30" align="center" headerAlign="center"></div>
				<div field="organNo" name="organNo" allowSort="true" width="140" align="center" headerAlign="center" renderer="onBrNo">机构</div>
				<div field="reportDate" width="40" allowSort="true" align="center" headerAlign="center" name="reportDate">报表日期</div>
				<div field="tabType" width="50" allowSort="true" align="center" headerAlign="center" name="tabType">报表类型</div>
				<div field="reportNoStr" width="40" allowSort="true" align="center" headerAlign="center" name="reportNoStr">报表编号</div>
				<div field="reportName" width="100" allowSort="true" align="center" headerAlign="center" name="reportName">报表名称</div>
				<div field="cUser" width="40" allowSort="true" align="center" headerAlign="center" name="cUser">发现人</div>
				<div field="errorFlag" width="40" allowSort="true" align="center" headerAlign="center" name="errorFlag" renderer="onErrorType">差错类型</div>
				<div field="remark" width="150" allowSort="true" align="center" headerAlign="center" name="remark" >问题描述</div>
				<div field="errorMoney" width="60" allowSort="true" align="center" headerAlign="center" name="errorMoney" >差错金额</div>
				<div field="lateDays" width="40" allowSort="true" align="center" headerAlign="center" name="lateDays" >迟报天数</div>
				<!--<div field="errorSource" width="50" allowSort="true" align="center" headerAlign="center" name="errorSource" renderer="theRenderer">差错来源</div>-->
				<div name="action" width="100" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			</div>
		</div>
	</div>
</body>
</html>