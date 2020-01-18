<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>数据库配置</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dc/js/dc_url.js"></script>
<script>
	var flag = '${param.flag}'
</script>
</head>
<body>
	<form id="editForm">
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 24%">机构名称</td>
				<td class="tab_field_nr" style="width: 76%"><input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" style="width: 99%;"
					parentField="pId" valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="${obj.brNo}" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 24%">数据库驱动程序</td>
				<td class="tab_field_nr" style="width: 72%"><input class="mini-combobox" required="true" id="driver" name="driver" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DataBaseDriver"
					textField="zdName" valueField="zdValue" value="${obj.driver}" style="width: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 24%">数据库地址</td>
				<td class="tab_field_nr" style="width: 76%"><input class="mini-textbox" required="true" id="urlStr" name="urlStr" value="${obj.urlStr}" style="width: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 24%">数据库用户名</td>
				<td class="tab_field_nr" style="width: 76%"><input class="mini-textbox" required="true" id="userName" name="userName" value="${obj.userName}" style="width: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">数据库用户密码</td>
				<td class="tab_field_nr"><input class="mini-textbox" required="true" id="password" name="password" value="${obj.password}" style="width: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">数据模式名</td>
				<td class="tab_field_nr"><input class="mini-textbox" required="true" id="tableSchema" name="tableSchema" value="${obj.tableSchema}" style="width: 99%;" /></td>
			</tr>
		</table>
	</form>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onSave" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>