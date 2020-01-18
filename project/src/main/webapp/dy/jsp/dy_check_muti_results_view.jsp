<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验结果信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var formula = '${obj.formula}';
	var tabType = '${obj.tabType }';
</script>
<script type="text/javascript" src="../js/dy_check_muti_results_view.js"></script>
</head>
<body style="overflow: auto;">
	<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
		<tr>
			<td style="width: 80px;" class="tab_label" valign="center">
				自定义机构：
				<input id="organNo" type="hidden" value="${obj.organNo }" /> 
				<input id="reportDate" type="hidden" value="${obj.reportDate }" />
				<input id="tabType" type="hidden" value="${obj.tabType }" />
				<input id="formula" type="hidden" value="${obj.formula }" />
				<input id="reportNoStr" type="hidden" value="${obj.reportNoStr }" />
				<input id="content" type="hidden" value="${obj.content }" />
			</td>
			<td colspan="3" class="tab_field_nr" valign="center">${obj.organName }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="center">数据日期：</td>
			<td class="tab_field" valign="center">${obj.reportDate }</td>
			<td class="tab_label" valign="center">报表类型</td>
			<td class="tab_field_nr" valign="center">${obj.tabTypeName }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="center">关联报表：</td>
			<td colspan="3" valign="center" class="tab_field_nr" id="reportNoStrTd"></td>
		</tr>
		<tr>
			<td class="tab_label" valign="center">公式：</td>
			<td colspan="3" class="tab_field_nr" valign="center">${obj.formula }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="center">符号解释：</td>
			<td colspan="3" class="tab_field_nr" valign="center">“_”：表示本期值,“$”：表示上期值,“@”：表示年初值,“~”：表示去年同期值
			</td>
		</tr>
		<tr>
			<td class="tab_label" valign="center">校验结果：</td>
			<td colspan="3" class="tab_field_nr" valign="center">${obj.content }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="center">公式说明：</td>
			<td colspan="3" class="tab_field_nr" valign="center"></td>
		</tr>
		<tr>
			<td colspan="4" class="tab_align_c"><a class="mini-button" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">关闭</a></td>
		</tr>
	</table>
</body>
</html>