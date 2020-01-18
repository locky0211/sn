<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增指标信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_indicators_info.js"></script>
</head>
<body style="overflow: auto">
	<form id="indicatorsInfoForm" method="post">
		<div style="display: none;">
			<input id="id" name="id" class="mini-hidden" value="${obj.id}" /> <input id="bId" name="bId" class="mini-hidden" value="${param.bId}" />
		</div>
		<table style="width: 100%" cellpadding="5" cellspacing="0">
			<tr>
				<td style="width: 90px;" class="tab_label">指标版本：</td>
				<td class="tab_field_nr" colspan="3"><input name="indDate" id="indDate" onvalidation="checkIndDate" class="mini-combobox" required="true"
					style="width: 150px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_IND_DATE" value="${obj.indDate }"
					allowInput="false" /></td>
			</tr>
			<tr>
				<td class="tab_label">报表代码：</td>
				<td class="tab_field_nr" colspan="3"><input id="tabCode" name="tabCode" class="mini-textbox" style="width: 250px;" required="true"
					value="${obj.tabCode}" /></td>

			</tr>
			<tr>
				<td class="tab_label" valign="top">指标公式：</td>
				<td class="tab_field_nr" colspan="3"><input id="indFormula" name="indFormula" class="mini-textarea" style="width: 100%; height: 220px;"
					required="true" value="${obj.indFormula}" /></td>
			</tr>
			<tr>
				<td class="tab_label">启用日期：</td>
				<td class="tab_field"><input id="startDate" name="startDate" class="mini-monthpicker" required="true" validateOnChanged="false"
					style="width: 100px;" format="yyyyMM" value="${obj.startDate }" /></td>
				<td class="tab_label">停用日期：</td>
				<td class="tab_field_nr"><input id="endDate" name="endDate" class="mini-monthpicker" required="true" onvalidation="endDateValid"
					validateOnChanged="false" style="width: 100px;" format="yyyyMM" value="${obj.endDate }" /></td>
			</tr>
		</table>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button"
				onclick="javascript:CloseWindow('cancel')" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>