<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式维护</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dl/js/dlFormula.js"></script>
</head>
<body>
	<form id="editForm">
		<div style="display: none;">
			<input class="mini-hidden" id="formulaId" name="id" value="${obj.id}" /> 
			<input class="mini-hidden" id="updateTime" name="updateTime" value="${obj.updateTime}" />
		</div>
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label">校验表名</td>
				<td class="tab_field_nr" colspan="3">
					<div class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DL_TABLENAME" 
						textField="zdName" valueField="zdValue" oncloseclick="onCloseClick" showClose="true" 
						required="true" id="tabCode" name="tabCode" value="${obj.tabCode}" popupWidth="300px" style="width: 98%">
						<div property="columns">
							<div header="表中文名称" field="zdName" style="width: 20px"></div>
							<div header="表数据库名称" field="zdValue" style="width: 20px"></div>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 12%">校验字段</td>
				<td class="tab_field_nr" style="width: 38%">
					<input class="mini-textbox" required="true" id="fieldCode" name="fieldCode" value="${obj.fieldCode}" style="width: 98%" />
				</td>
				<td class="tab_label" style="width: 12%">校验字段名</td>
				<td class="tab_field_nr" style="width: 38%">
					<input class="mini-textbox" required="true" id="fieldName" name="fieldName" value="${obj.fieldName}" style="width: 98%" />
				</td>
			</tr>
			<tr>
				<td class="tab_label">公式描述</td>
				<td class="tab_field_nr" colspan="3">
					<input class="mini-textarea" required="true" id="formulaDesc" name="formulaDesc" value="${obj.formulaDesc}" style="width: 99%" />
				</td>
			</tr>
			<tr>
				<td class="tab_label">公式内容</td>
				<td class="tab_field_nr" colspan="3" style="height: 150px;">
					<input class="mini-textarea" required="true" id="formula" name="formula" value="${obj.formula}" style="width: 99%; height: 99%" />
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