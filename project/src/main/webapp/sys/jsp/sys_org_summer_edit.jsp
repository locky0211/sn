<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>汇总机构修改</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_org_summer_edit.js"></script>
</head>
<body style="overflow: auto;">
	<form id="OrgSummerForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
		</div>
		<div>
			<table class="tab" style="width: 100%; height: 100px;" cellpadding="6" cellspacing="0">
				<tr>
					<td class="tab_label" style="width: 28%" align="center">汇总机构：</td>
					<td class="tab_field_nr">
						<input id="sumCode" name="sumCode" popupHeight="250px;" popupWidth="350px;" required="true" style="width: 98%;"
							class="mini-treeselect" url="${base}/sys/bm/getSysBmList.nut"  textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
							resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="false" allowSelect="true" value="${obj.sumCode}"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 28%" align="center">子机构：</td>
					<td class="tab_field_nr">
						<input id="subCode" name="subCode" popupHeight="250px;" popupWidth="350px;" required="true" style="width: 98%;"
							class="mini-treeselect" url="${base}/sys/bm/getSysBmList.nut"  textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
							resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="false" allowSelect="true" value="${obj.subCode}"/>
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