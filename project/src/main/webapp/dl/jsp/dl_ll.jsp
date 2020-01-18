<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>利率维护界面</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dl/js/dl_ll.js"></script>
</head>
<body>
	<form id="editForm">
		<div style="display: none;">
			<input class="mini-hidden" id="formulaId" name="id" value="${obj.id}" /> 
		</div>
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 25%">日期</td>
				<td class="tab_field_nr">
					<input id="rq" name="rq" class="mini-datepicker" required="true" validateOnChanged="false" style="width: 99%;"
						format="yyyy-MM-dd" value="${obj.rq }" />
				</td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 12%">业务类型</td>
				<td class="tab_field_nr" style="width: 38%">
					<input name="ywlx" class="mini-combobox" required="true" style="width: 99%;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=LV_YWLX" value="${obj.ywlx }" allowInput="true"/>
				</td>
			</tr>
			<tr>
				<td class="tab_label">产品类别</td>
				<td class="tab_field_nr">
					<input name="cplb" class="mini-combobox" style="width: 99%;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=LV_CPLB" value="${obj.cplb }" allowInput="true"/>
				</td>
			</tr>
			<tr>
				<td class="tab_label">期限</td>
				<td class="tab_field_nr">
					<input name="qx" class="mini-combobox" style="width: 99%;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=LV_QX" popupHeight="100" value="${obj.qx }" allowInput="true"/>
				</td>
			</tr>
			<tr>
				<td class="tab_label">利率</td>
				<td class="tab_field_nr">
					<input class="mini-textbox" required="true" id="lv" name="lv" value="${obj.lv}" style="width: 99%;" />
				</td>
			</tr>
		</table>
	</form>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onSave" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> 
		<a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 10px;">取消</a>
	</div>
</body>
</html>