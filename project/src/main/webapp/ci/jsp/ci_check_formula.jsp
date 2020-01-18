<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>征信校验公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ci_check_formula.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
			<input class="mini-hidden" id="formulaState" name="formulaState" value="${obj.formulaState}" />
		</div>
		<div>
			<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
				<tr>
					<td class="tab_label" style="width: 12%">校验表名：</td>
					<td class="tab_field_nr" style="width: 38%">
						<div id="tableName" name="tableName" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 98%;" popupWidth="550px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_TABLENAME" textField="zdName" valueField="zdValue" value="${obj.tableName}">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div>
					</td>
					<td class="tab_label" style="width: 12%">字段数据库名：</td>
					<td class="tab_field_nr" style="width: 38%">
						<input class="mini-textbox" required="true" id="fieldName" name="fieldName" onchange="isincludSpace" value="${obj.fieldName}" style="width: 98%" />
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 12%">字段名：</td>
					<td class="tab_field_nr" style="width: 38%">
						<input class="mini-textbox" required="true" id="fieldCode" name="fieldCode" onchange="isincludSpace" value="${obj.fieldCode}" style="width: 98%" />
					</td>
					<td class="tab_label" style="width: 12%">公式类型：</td>
					<td class="tab_field_nr" style="width: 38%">
						<input id="formulaType" name="formulaType" class="mini-combobox" required="true" style="width: 150px;" textField="zdName" valueField="zdValue" 
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_FORMULATYPE"   value="${obj.formulaType }" allowInput="false" />
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 12%">错误代码：</td>
					<td class="tab_field_nr" colspan="3">
						<input class="mini-textbox" required="false" id="errorCode" name="errorCode" value="${obj.errorCode}" style="width: 40%" />
					</td>
				</tr>
				<tr>
					<td class="tab_label">校验公式：</td>
					<td class="tab_field_nr" colspan="3" style="height: 80px;">
						<input class="mini-textarea" required="true" id="formula" name="formula" value="${obj.formula}" style="width: 99%;height:99%" />
					</td>
				</tr>
				<tr>
					<td class="tab_label">公式说明：</td>
					<td class="tab_field_nr" colspan="3" style="height: 80px;">
						<input class="mini-textarea" required="true" id="formulaDesc" name="formulaDesc" value="${obj.formulaDesc}" style="width: 99%;height:99%" />
					</td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;" iconCls="icon-ok">确定</a><a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 30px;">取消</a>
			<a class="mini-button" onclick="help()" style="width: 60px;">帮助</a>
		</div>
	</form>
</body>
</html>