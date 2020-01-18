<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>模块机构映射维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_module_org_map_edit.js"></script>
<script type="text/javascript">
$(function() {
	var oldModuleStr = mini.get("oldModule").getValue();
	var oldUrl = base + "sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='" + oldModuleStr + "'";
	mini.get("oldOrg").setUrl(oldUrl);
	mini.get("oldOrg").setValue("${obj.oldOrg}");
	
	newModuleStr = mini.get("newModule").getValue();
	var newUrl = base + "sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='" + newModuleStr + "'";
	mini.get("newOrg").setUrl(newUrl);
	mini.get("newOrg").setValue("${obj.newOrg}");
});

function oldModuleChange(e){ 
	mini.get("oldOrg").setValue("");
	var oldModuleValue = mini.get("oldModule").getValue();
	var oldModuleUrl = base + "sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='" + oldModuleValue + "'";
	mini.get("oldOrg").setUrl(oldModuleUrl);
}
function newModuleChange(e){ 
	mini.get("newOrg").setValue("");
	var newModuleValue = mini.get("newModule").getValue();
	var newModuleUrl = base + "sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='" + newModuleValue + "'";
	mini.get("newOrg").setUrl(newModuleUrl);
}
</script>
</head>
<body style="overflow: auto;">
	<form id="moduleOrgForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
		</div>
		<div>
			<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
				<tr>
					<td class="tab_label" style="width: 28%" align="center">原模块：</td>
					<td class="tab_field_nr">
						<div id="oldModule" name="oldModule" required="true" onvaluechanged="oldModuleChange()" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 98%;" popupWidth="350px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=SYS_MODULE" textField="zdName" valueField="zdValue" value="${obj.oldModule}">
							<div property="columns">
								<div header="中文名称" field="zdName"></div>
								<div header="数据库名称" field="zdValue"></div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 28%" align="center">原机构：</td>
					<td class="tab_field_nr">
						<input id="oldOrg" name="oldOrg" popupHeight="300px;" popupWidth="350px;" required="true" style="width: 98%;"
						class="mini-treeselect"  textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="false" allowSelect="true" value="${obj.oldOrg}"/>
					</td>
				</tr>
			</table>
		</div>
		<div>
			<table id="moduleOrgNewForm" cellpadding="4" cellspacing="0" style="width: 100%;">
				<tr>
					<td class="tab_label" align="center" style="width: 28%">映射模块</td>
					<td class="tab_label" align="center">映射机构</td>
				</tr>
				<tr>
					<td class="tab_label" align="center">
						<div id="newModule" name="newModule" onvaluechanged="newModuleChange()" required="true" class="mini-combobox" onvaluechanged="newModuleChange" oncloseclick="onCloseClick" showClose="true" style="width: 80%;" popupWidth="200px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=SYS_MODULE" textField="zdName" valueField="zdValue" value="${obj.newModule}" >
							<div property="columns">
								<div header="中文名称" field="zdName"></div>
								<div header="数据库名称" field="zdValue"></div>
							</div>
						</div>
					</td>
					<td class="tab_label" align="center">
						<input id="newOrg" name="newOrg" popupHeight="200px;" popupWidth="350px;" required="true" style="width: 96%;"
						class="mini-treeselect" textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="false" allowSelect="true" value="${obj.newOrg}"/>
					</td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="update()" style="width: 60px; margin-right: 30px;" iconCls="icon-ok">确定</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
		</div>
	</form>
</body>
</html>