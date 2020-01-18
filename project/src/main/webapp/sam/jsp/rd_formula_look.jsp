<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式维护</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sam/js/rd_formula_look.js"></script>
<script>
	var flagData = [ {
		id : '=',
		text : '1104等于客户风险'
	}, {
		id : '<=',
		text : '1104大于等于客户风险'
	}, {
		id : '<',
		text : '1104大于客户风险'
	} ];
	var formulaType = [ {
		id : '1',
		text : '月报校验公式'
	}, {
		id : '2',
		text : '季报校验公式'
	}, {
		id : '3',
		text : '半年报校验公式'
	}, {
		id : '4',
		text : '年报校验公式'
	} ];
</script>
</head>
<body>
	<form id="editForm">
		<div style="display: none;">
			<input class="mini-hidden" id="formulaId" name="id" value="${obj.id}" /> <input class="mini-hidden" id="updateTime" name="updateTime" value="${obj.updateTime}" />
		</div>
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" colspan="4" style="width: 50%; text-align: center">客户风险校验数据</td>
				<td class="tab_label" colspan="4" style="width: 50%; text-align: center">1104报表检验数据</td>
			</tr>
			<tr>
				<td class="tab_label">校验表名</td>
				<td class="tab_field_nr" colspan="3"><div class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DckImportTableName" textField="zdName" valueField="zdValue"
						oncloseclick="onCloseClick" showClose="true" readOnly="true"  id="dckTableName" name="dckTableName" value="${obj.dckTableName}" popupWidth="50%" style="width: 100%">
						<div property="columns">
							<div header="表中文名称" field="zdName"></div>
							<div header="表数据库名称" field="zdValue"></div>
						</div>
					</div></td>
				<td class="tab_label">校验表名</td>
				<td class="tab_field_nr" colspan="3"><div class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=1104ReportName" textField="zdName" valueField="zdValue"
						oncloseclick="onCloseClick" showClose="true" readOnly="true"  id="samTableName" name="samTableName" value="${obj.samTableName}" popupWidth="80%" style="width: 100%">
						<div property="columns">
							<div header="表中文名称" field="zdName" style="width: 70%"></div>
							<div header="表数据库名称" field="zdValue" style="width: 30%"></div>
						</div>
					</div></td>
			</tr>
			<tr>
				<td class="tab_label">取数公式</td>
				<td class="tab_field_nr" colspan="3" style="height: 100px;"><input class="mini-textarea" readOnly="true"  id="dckContent" name="dckContent" value="${obj.dckContent}"
					style="width: 100%; height: 100%;" /></td>
				<td class="tab_label">取数公式</td>
				<td class="tab_field_nr" colspan="3" style="height: 100px;"><input class="mini-textarea" readOnly="true"  id="samContent" name="samContent" value="${obj.samContent}"
					style="width: 100%; height: 100%;" /></td>
			</tr>
			<tr>
				<td class="tab_label">取数公式解释</td>
				<td class="tab_field_nr" colspan="3" style="height: 60px;"><input class="mini-textarea" id="dckExplain" name="dckExplain" readOnly="true" value="${obj.dckExplain}" style="width: 100%; height: 100%;" /></td>
				<td class="tab_label">取数公式解释</td>
				<td class="tab_field_nr" colspan="3" style="height: 60px;"><input class="mini-textarea" id="samExplain" name="samExplain" readOnly="true" value="${obj.samExplain}" style="width: 100%; height: 100%;" /></td>
			</tr>
			<tr>
				<td class="tab_label" colspan="2" style="text-align: center">校验公式运算符</td>
				<td class="tab_field_nr" colspan="2" style="text-align: center"><input class="mini-combobox" id="formulaOp" name="formulaOp" data="flagData" readOnly="true" value="${obj.formulaOp}" style="width: 98%" /></td>
				<td class="tab_label" colspan="2" style="text-align: center">校验公式类型</td>
				<td class="tab_field_nr" colspan="2" style="text-align: center"><input class="mini-combobox" id="formulaType" name="formulaType" data="formulaType" readOnly="true" value="${obj.formulaType}"
					style="width: 98%" /></td>
			</tr>
			<tr>
				<td class="tab_label" colspan="8" style="text-align: center">校验公式描述</td>
			</tr>
			<tr>
				<td class="tab_field_nr" colspan="8" style="height: 66px; text-align: center"><input class="mini-textarea" id="formulaDesc" name="formulaDesc" readOnly="true" value="${obj.formulaDesc}"
					style="width: 76%; height: 99%" /></td>
			</tr>
		</table>
	</form>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>