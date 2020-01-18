<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/evidence_table_info.js"></script>
<title>新增材料</title>
</head>
<body>
	<form id="evidenceTableInfoForm" method="post">
		<table>
		<input id="fg" name="fg" class="mini-hidden" value="${param.id }" />
			<tr>
				<td style="width: 10%;" class="tab_label tab_align_r">名称：</td>
				<td class="tab_field_nr" colspan="3"><input id=evidenceName 
					name="evidenceName" class="mini-textbox" style="width: 100%;"
					required="true" emptyText="请输入材料名称" value="${obj.evidenceName }" /></td>
			</tr>
			<tr>
				<td class="tab_label tab_align_r" style="width: 10%;">上级：</td>
				<td class="tab_field_nr" style="width: 40%;"><input id="parent"
					name="parent" style="width: 100%;" class="mini-treeselect"
					url="${base }/evidence/tableInfo/getAllEvidence.nut" multiSelect="false"
					expandOnLoad="false" valueFromSelect="true" showClose="true"
					oncloseclick="onCloseClick" textField="evidenceName" valueField="id"
					parentField="parent" popupWidth="300" allowInput="false"
					popupHeight="150" value="${obj.parent}" /></td>
			</tr>
		</table>
			<div style="text-align: center; padding: 18px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>