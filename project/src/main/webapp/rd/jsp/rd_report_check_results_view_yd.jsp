<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
<script type="text/javascript" src="../js/rd_report_check_results_view_yd.js"></script>
</head>
<body style="overflow: auto;">
	<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
		<tr>
			<td style="width: 80px;" class="tab_label">机构：<input id="organNo" type="hidden" value="${obj.organNo }" /> <input id="reportDate"
				type="hidden" value="${obj.reportDate }" /> <input id="formula" type="hidden" value="${obj.formula }" />
			</td>
			<td colspan="3" class="tab_field_nr">${obj.organName }</td>
		</tr>
		<tr>
			<td class="tab_label">数据日期：</td>
			<td class="tab_field">${obj.reportDate }</td>
			<td class="tab_label">跨期频度</td>
			<td class="tab_field_nr">${obj.tabType }</td>
		</tr>
		<tr>
			<td class="tab_label">公式类型：</td>
			<td class="tab_field">${obj.cUser }</td>
			<td class="tab_label">风险等级</td>
			<td class="tab_field_nr">${obj.checkRisk }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">关联报表：</td>
			<td colspan="3" class="tab_field_nr" id="reportNoStrTd"></td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">定位：</td>
			<td colspan="3" class="tab_field_nr">${obj.formula }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">阈值：</td>
			<td class="tab_field" class="tab_field_nr">${obj.valueArea }</td>
			<td class="tab_label" valign="top">校验结果：</td>
			<td class="tab_field" class="tab_field_nr">${obj.content }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">差值：</td>
			<td colspan="3" class="tab_field_nr">${obj.dValue }</td>
		</tr>
		<tr>
			<td colspan="4" class="tab_align_c"><a class="mini-button" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">关闭</a></td>
		</tr>
	</table>
</body>
</html>