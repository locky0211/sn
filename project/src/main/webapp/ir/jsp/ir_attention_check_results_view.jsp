<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验结果信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var reportNoStr = '${obj.reportNoStr}';

	var attention = '${obj.attention}';
</script>
<script type="text/javascript" src="../js/ir_attention_check_results_view.js"></script>
</head>
<body style="overflow: auto;">
	<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
		<tr>
			<td style="width: 80px;" class="tab_label">机构：<input id="organNo" type="hidden" value="${obj.organNo }" /> <input id="reportDate"
				type="hidden" value="${obj.reportDate }" /> <input id="attention" type="hidden" value="${obj.attention }" />
			</td>

			<td colspan="2" class="tab_field_nr">${obj.organName }</td> 
			
			<td class="tab_label">校验员：</td>
			<td colspan="2"  class="tab_field_nr">${obj.cUser }</td>
			
		</tr>
		<tr>
			<td class="tab_label">数据日期：</td>
			<td class="tab_field" colspan="2" >${obj.reportDate }</td>
			<td class="tab_label">报表类型</td>
			<td class="tab_field_nr" colspan="2" >${obj.tabType }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">关联报表：</td>
			<td colspan="5" class="tab_field_nr" id="reportNoStrTd"></td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">关注指标：</td>
			<td colspan="5" class="tab_field_nr">${obj.attention }</td>
		</tr>
		<tr>
			<td class="tab_label" valign="top">校验结果：</td>
			<td colspan="5" class="tab_field_nr">${obj.content }</td>
		</tr>
	
		<tr>
			<td colspan="6" class="tab_align_c"><a class="mini-button" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">关闭</a></td>

		</tr>
	</table>
</body>
</html>