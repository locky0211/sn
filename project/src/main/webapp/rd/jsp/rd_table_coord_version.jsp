<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增报表</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_table_coord_version.js"></script>
<script type="text/javascript">
	var statusData = [ {
		id : 1,
		text : '启用'
	}, {
		id : 0,
		text : '停用'
	} ];
</script>
</head>
<body>
	<form id="jusForm" method="post">
		<input class="mini-hidden" id="id" name="id"  value="${rep_zjzhb.id}" /><input class="mini-hidden" id="validFlag" name="validFlag"
				value="${rep_zjzhb.validFlag}" />
		<div style="height: 100%; padding: 10px">
				<table style="width: 100%" cellpadding="5">
				<tr>
					<td>报表编号：</td>
					<td><input id="tabCode" name="tabCode" class="mini-textbox" style="width: 120px;" required="true" value="${rep_zjzhb.tabCode}" /></td>
				</tr>
				<tr>
					<td>老版本编号信息：</td>
					<td><input id="oldVersionNo" name="oldVersionNo" class="mini-textbox" style="width: 120px;" required="true" value="${rep_zjzhb.oldVersionNo}" /></td>
				</tr>
				<tr>
					<td>老版本定位信息：</td>
					<td><input id="oldLocate" name="oldLocate" class="mini-textbox" style="width: 360px;" required="true" value="${rep_zjzhb.oldLocate}" /></td>
				</tr>
				<tr>
					<td>新版本编号信息：</td>
					<td><input id="newVersionNo" name="newVersionNo" class="mini-textbox" style="width: 120px;" required="true" value="${rep_zjzhb.newVersionNo}" /></td>
				</tr>
				<tr>
					<td>新版本定位信息：</td>
					<td><input id="newLocate" name="newLocate" class="mini-textbox" style="width: 360px;" required="true" value="${rep_zjzhb.newLocate}" /></td>
				</tr>
				<tr>
					<td>指标信息：</td>
					<td><input id="fieldName" name="fieldName" class="mini-textarea" style="width: 360px;" value="${rep_zjzhb.fieldName}" /></td>
				</tr>
			</table>
				<div style="text-align: center; padding: 10px;">
					<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 10px;">确定</a> <a class="mini-button" onclick="onCancel"
						style="width: 60px;">取消</a>
				</div>
			</div>
			
	</form>
</body>
</html>