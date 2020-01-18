<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验结果信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var reportNoStr = '${obj.reportNoStr}';
	var formula = '${obj.formula}';
</script>
<script type="text/javascript" src="${base }/rd/js/rd_report_check_results_view_wave.js"></script>
</head>
<body style="overflow: auto;">
	<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
		<tr>
			<td style="width: 80px;" class="tab_label">机构：
				<input id="organNo" class="mini-hidden" value="${obj.organNo }" /> 
				<input id="reportDate" class="mini-hidden" value="${obj.reportDate }" /> 
				<input id="formula" class="mini-hidden" value="${obj.formula }" />
				<input id="reportRate" class="mini-hidden" value="${obj.reportRate }" />
				<input id="tabType" class="mini-hidden" value="${obj.tabType }" />
				<input id="formulaId" name="formulaId" class="mini-hidden" value="${obj.id}" /> 
				<input id="descId" class="mini-hidden" name="descId"  value="${obj.descId}" /> 
				<input id="ydDesc" class="mini-hidden" name="ydDesc"  value="${obj.ydDesc}" /> 
			</td>
			<td colspan="3" class="tab_field_nr">${obj.organName }</td>
		</tr>
		<tr>
			<td class="tab_label">数据日期：</td>
			<td class="tab_field">${obj.reportDate }</td>
			<td class="tab_label">校验频度</td>
			<td class="tab_field_nr">${obj.tabType }</td>
		</tr>
		<tr>
			<td class="tab_label">公式类型：</td>
			<td colspan="3"  class="tab_field_nr">${obj.cUser }</td>
			
		</tr>
		<tr>
			<td class="tab_label" valign="top">关联报表：</td>
			<td colspan="3" class="tab_field_nr" id="reportNoStrTd"></td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">公式：</td>
			<td colspan="3" class="tab_field_nr">${obj.formula }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">符号解释：</td>
			<td colspan="3" class="tab_field_nr">“_”：表示本期值,“$”：表示上期值,“@”：表示年初值,“~”：表示去年同期值,“^”：表示同期补报值,“&”:表示上月值,“|”：表示上季度值,“`”：表示半年前值,“￥”:表示前三季度值,“￠”：表示第四季度值,“:”：表示上半年度值,“;”表示下半年度值
			</td>
		</tr>
		<tr>
			<td class="tab_label">波动幅度：</td>
			<td class="tab_field">${obj.value }</td>
			<td class="tab_label">波动差</td>
			<td class="tab_field_nr">${obj.dValue }<input id="dValue" class="mini-hidden" name="dValue"  value="${obj.dValue}" /> </td>
			
		</tr>
			<tr>
			<td class="tab_label">异动说明：</td>
			<td class="tab_field" colspan="3">${obj.ydDesc }</td>
		</tr>
	
		<tr>
			<td class="tab_label">备注：</td>
			<td class="tab_field" colspan="3"><input id="bzInfo" name="bzInfo" class="mini-textarea" style="width: 98%" value="${obj.bzInfo }"></input></td>
		</tr>
		<tr>
			
			<td colspan="4" class="tab_align_c">
			<c:if test="${obj.descState=='0' }">
			<a class="mini-button" onclick="agreeToIssue(1)" style="width: 80px;">确认采纳</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a class="mini-button" onclick="agreeToIssue(2)" style="width: 80px;">问题下发</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</c:if>	
			<c:if test="${empty  obj.ydDesc && empty  obj.bzInfo}">
			<a class="mini-button" onclick="downIssue()" style="width: 80px;">问题下发</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</c:if>
			<a class="mini-button" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">关闭</a></td>
		</tr>
	</table>
</body>
</html>