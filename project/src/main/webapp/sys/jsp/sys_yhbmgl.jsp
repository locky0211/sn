<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/sys/js/sys_yhbmgl.js"></script>
<title>新增用户</title>
</head>
<body>
	<form id="sysUserForm" method="post">
	<input class="mini-hidden" id="id" name="id" value="${obj.id }">
			<table style="width: 100%; height: 20px;" cellpadding="4" cellspacing="0" class="tab">
				<tr>
					<td class="tab_label">用户账户：</td>
					<td  class="tab_field_nr"><input id="userId" name="userId" class="mini-textbox" style="width: 95%;" required="true" value="${obj.userId }" /></td>
				</tr>
				<tr>
					<td class="tab_label">用户名：</td>
					<td class="tab_field_nr"><input id="userName" name="userName" class="mini-textbox" style="width: 95%;" required="true" value="${obj.userName }" /></td>
				</tr>
				
				<tr>
					<td class="tab_label">所属部门：</td>
					<td class="tab_field_nr"><input  id="userDepartment" name="userDepartment"  popupHeight="100px;" popupWidth="155px;" class="mini-combobox" style="width: 95% ;"  textField="zdName" valueField="zdValue"
								url="${base}/sys/ggzd/getGgzdList.nut?groupId=SYS_YGBMGL" required="true" multiSelect="true" showClose="true" oncloseclick="onCloseClick"
								value="${obj.userDepartment }">
								<!-- <div property="columns">
									<div header="ID" headerAlign="center" width="80" field="zdValue"></div>
									<div header="角色名称" headerAlign="center" width="100" field="zdName"></div>
								</div> -->
							</tr>
			</table>
				<div style="text-align: center; padding: 10px;">
					<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 10px;">确定</a> <a class="mini-button" onclick="onCancel"
						style="width: 60px;">取消</a>
				</div>
			
	</form>
</body>
</html>