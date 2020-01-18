<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统角色</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.loading2.jsp"%>
<script type="text/javascript">
	$(function() {
		$('#roleStatus').val('${role. roleStatus}');
	});
</script>
<script type="text/javascript" src="${base }/sys/js/sys_role.js"></script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="west" border="false" style="width: 350px; padding: 8px;">
			<form id="roleManagerForm" method="post">
				<table cellpadding=3 style="font-size: 12px;">
					<tr>
						<td colspan="2" style="text-align: left; height: 40px;">勾选右边功能点,赋予角色操作权限</td>
					</tr>
					<tr>
						<td>角色ID：</td>
						<td><input type="text" id="roleId" name="roleId" class="required" value="${role. roleId}" /></td>
					</tr>
					<tr>
						<td>角色名称：</td>
						<td><input type="text" id="roleName" name="roleName" class="required" value="${role. roleName}" /></td>
					</tr>
					<tr>
						<td style="vertical-align: top;">角色描述：</td>
						<td><textarea id="roleDesc" name="roleDesc" rows="3" cols="25">${role. roleDesc}</textarea></td>
					</tr>
					<tr>
						<td style="vertical-align: top;">角色状态：</td>
						<td><select id="roleStatus" name="roleStatus">
								<option value="1">启用</option>
								<option value="0">停用</option>
						</select></td>
					</tr>
					<tr style="text-align: center;">
						<td colspan="2"><a id="btnAdd" target="_parent"  class="easyui-linkbutton" target="_parent"  icon="icon-ok" href="javascript:void(0)"> 确定</a> <a  class="easyui-linkbutton" target="_parent"  id="btnCancel" icon="icon-cancel"
							href="javascript:void(0)">取消</a></td>
					</tr>
				</table>
			</form>
		</div>
		<div region="center" border="false" style="text-align: center; width: 100%; padding: 8px;">
			<div style="width: 98%; height: 93%; float: left; border: 1px solid #6F9FF1; overflow: auto;">
				<ul id="tree" class="ztree"></ul>
			</div>

		</div>
	</div>
</body>
</html>