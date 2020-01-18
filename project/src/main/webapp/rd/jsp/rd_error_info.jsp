<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>差错认定详细信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_error_info.js"></script>
</head>
<body style="overflow: auto">
	<form id="errorTrueForm" method="post">
			<div style="display: none;">
				<input id="id" name="id" class="mini-hidden" value="${obj.id}" />
				<input id="flag" name="flag" class="mini-hidden" value="${param.flag}" />
			</div>
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td class="tab_label">机构：</td>
					<td class="tab_field_nr" colspan="3"><input id="organNo" name="organNo" style="width: 375px;" showClose="true" required="true" oncloseclick="onCloseClick"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" parentField="pId" valueField="bmCode"
						resultAsTree="false"  allowInput="false" expandOnNodeClick="true" value="${obj.organNo}"/> <font color="red">*</font></td>
				</tr>
				<c:if test="${param.flag == '1'}">
					<td class="tab_label">报表名称：</td>
						<td class="tab_field_nr" colspan="3"><input id="reportName"
							name="reportName" class="mini-textbox" required="true"
							style="width: 375px;" value="${obj.reportName}"/> <font color="red">*</font></td>
				</c:if>

				<c:if test="${param.flag == '2'}">
					<tr>
						<td class="tab_label">报表名称：</td>
						<td class="tab_field_nr" colspan="3"><input id="reportName"
							name="reportName" class="mini-combobox" showNullItem="true"
							required="true" allowInput="true" textField="zdName"
							valueField="zdValue"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_REPORT_TABLE"
							style="width: 375px;" <%--  value="${obj.reportName}" --%>
							onvaluechanged="onReportNameChanged" /> <font color="red">*</font></td>
					</tr>
				</c:if>

				<tr>
					<td class="tab_label">报表编号：</td>
					<td class="tab_field_nr"><input id="reportNoStr" name="reportNoStr" class="mini-textbox" style="width: 105px;" required="true"  value="${obj.reportNoStr}" onvaluechanged="onTableType"/> <font color="red">*</font></td> <!-- onvaluechanged="reportNameChange()" -->
					<td class="tab_label">发现人：</td>
					<td class="tab_field_nr"><input id="cUser" name="cUser" class="mini-combobox" style="width: 105px;" oncloseclick="onCloseClick" showClose="true" required="true" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_ERROR_CUSER" value="${obj.cUser}" /> <font color="red">*</font></td>
				</tr>
				<tr>
					<td class="tab_label">报表日期：</td>
					<td class="tab_field_nr"><input id="reportDate" name="reportDate" class="mini-monthpicker" style="width: 105px;" format="yyyyMM" required="true" value="${obj.reportDate}" /> <font color="red">*</font></td>
					<td class="tab_label">报表类型：</td>
					<td class="tab_field_nr"><input id="tabType" name="tabType" class="mini-combobox" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_TABLE_TAB_TYPE" required="true" allowInput="false" oncloseclick="onCloseClick" showClose="true" style="width: 105px;" value="${obj.tabType}" /> <font color="red">*</font></td>
				</tr>
				<tr>	
					<td class="tab_label">差错类型：</td>
					<td class="tab_field_nr"><input id="errorFlag" name="errorFlag" class="mini-combobox" style="width: 105px;" oncloseclick="onCloseClick" showClose="true" required="true" data="[{id:'1',text:'迟报'},{id:'2',text:'错漏报'}]" value="${obj.errorFlag}" /> <font color="red">*</font></td>
					<td class="tab_label">差错金额(万元)：</td>
					<td class="tab_field_nr"><input id="errorMoney" name="errorMoney" class="mini-textbox" style="width: 105px;" value="${obj.errorMoney}" /></td>
				</tr>
				<tr>
					<td class="tab_label">问题描述：</td>
					<td class="tab_field_nr" colspan="3"><input id="remark" name="remark" class="mini-textarea" style="width: 375px;" value="${obj.remark}" required="true"/> <font color="red">*</font></td>
				</tr>
				<tr>
					<td class="tab_label">迟报天数：</td>
					<td class="tab_field_nr"><input id="lateDays" name="lateDays" class="mini-textbox" style="width: 105px;" value="${obj.lateDays}" /></td>
					<td class="tab_label">是否解锁重报：</td>
					<td class="tab_field_nr"><input id="deblocFlag" name="deblocFlag" class="mini-combobox" style="width: 105px;" oncloseclick="onCloseClick" showClose="true" data="[{id:'1',text:'是'},{id:'2',text:'否'}]" value="${obj.deblocFlag}" /></td>
				</tr>
				<tr>
					<td class="tab_label">其他监管措施：</td>
					<td class="tab_field_nr" colspan="3"><input id="otherMeasures" name="otherMeasures" class="mini-textarea" style="width: 375px;" value="${obj.otherMeasures}" /></td>
				</tr>
			</table>
		<div id="checkDiv" style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>