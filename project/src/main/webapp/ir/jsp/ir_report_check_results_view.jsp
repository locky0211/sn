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
<script type="text/javascript" src="../js/ir_report_check_results_view.js"></script>
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
			<td class="tab_label">数据类型</td>
			<td class="tab_field_nr">${obj.tabType }</td>
		</tr>
		<tr>
			<td class="tab_label">公式类型：</td>
			<td colspan="3" class="tab_field">${obj.cUser }</td>
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
			<td class="tab_label" valign="top">校验结果：</td>
			<td colspan="3" class="tab_field_nr">${obj.content }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">公式说明：</td>
			<td colspan="3" class="tab_field_nr">${obj.formulaMark }</td>
		</tr>
		<tr>
			<td colspan="4" class="tab_align_c"><a class="mini-button" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">关闭</a></td>
		</tr>
	</table>
</body>
</html>