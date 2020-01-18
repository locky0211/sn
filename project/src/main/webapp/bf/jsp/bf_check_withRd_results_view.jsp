<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验结果信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var formula = '${obj.formula}';
	var tabCode = '${obj.tabCode}';
</script>
<script type="text/javascript" src="../../js/bf_check_withRd_results_view.js"></script>
</head>
<body style="overflow: auto;">
	<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
		<tr>
			<td style="width: 80px;" class="tab_label">1104机构：
				<input id="rdBmcode" type="hidden" value="${obj.rdBmcode }" /> 
				<input id="bfBmcode" type="hidden" value="${obj.bfBmcode }" />
				<input id="reportDate" type="hidden" value="${obj.reportDate }" /> 
				<input id="formula" type="hidden" value="${obj.formula }" />
			</td>
			<td colspan="3" class="tab_field_nr">${obj.rdBmname }</td>
		</tr>
		<tr>
			<td style="width: 80px;" class="tab_label">大集中机构</td>
			<td colspan="3" class="tab_field_nr">${obj.bfBmname }</td>
		</tr>
		<tr>
			<td class="tab_label">数据日期：</td>
			<td class="tab_field">${obj.reportDate }</td>
			<td class="tab_label">校验类型：</td>
			<td class="tab_field_nr">${obj.checkType }</td>
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
			<td class="tab_label">波动幅度：</td>
			<td colspan="3" class="tab_field_nr">${obj.result }</td>
		</tr>
	    <tr>
			<td class="tab_label">公式描述：</td>
			<td colspan="3" class="tab_field_nr">${obj.formulaExplain }</td>
		</tr>
		<tr>
			<td colspan="4" class="tab_align_c"><a class="mini-button" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">关闭</a></td>
		</tr>
	</table>
</body>
</html>