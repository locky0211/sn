<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式维护</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/checkFormulaExpend.js"></script>
<script>
	var id = '${obj.id}'
</script>
</head>
<body>
	<form id="editForm">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> <input class="mini-hidden" id="updateTime" name="updateTime" value="${obj.updateTime}" />
		</div>
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 12%">机构</td>
				<td class="tab_field_nr" style="width: 38%">
					<input id="brno" name="brno" style="width: 98%;" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'"
								textField="bmName" valueField="bmCode" parentField="pId" popupHeight="300" popupWidth="220" required="true"
								allowInput="false" value="${obj.brno }" />
				</td>
				<td class="tab_label" style="width: 12%">公式版本</td>
				<td class="tab_field_nr" style="width: 38%"><input class="mini-combobox" required="true" id="version" name="version" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CheckVersion" textField="zdName" valueField="zdValue" value="${obj.version}" style="width: 98%" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 12%">表名称</td>
				<td class="tab_field_nr" colspan="3" style="width: 88%">
				<div id="repCode" name="repCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 98%;" popupWidth="350px" allowInput="true"
						url="${base}/sys/ggzd/getGgzdList.nut?groupId=EastTableName" textField="zdName" valueField="zdValue" value="${obj.repCode}" required="true">
						<div property="columns">
							<div header="表中文名称" field="zdName"></div>
							<div header="表数据库名称" field="zdValue"></div>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="tab_label">公式扩展内容</td>
				<td class="tab_field_nr" colspan="3" style="height: 150px;"><input class="mini-textarea" required="true" id="formulaExpend" name="formulaExpend" value="${obj.formulaExpend}" style="width: 99%; height: 99%" /></td>
			</tr>
		</table>
	</form>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onSave" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>