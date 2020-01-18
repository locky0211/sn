<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统机构</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_pub_dic.js"></script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 350px; padding: 8px;">
			<form id="pubDicForm" action="${base }/sys/saveOrUpdateSysPubDic" method="post">
				<table style="font-size: 12px;" cellpadding="3">
					<tr>
						<td>数据组：</td>
						<td><input type="hidden" name="id" value="${obj.id }" /><input type="text" style="width: 220px;" name="dGroup" class="required" value="${obj.dGroup }" /></td>
					</tr>
					<tr>
						<td>数据值：</td>
						<td><input type="text" name="dValue" style="width: 220px;" class="required" value="${obj.dValue }" /></td>
					</tr>
					<tr>
						<td>数据名称：</td>
						<td><input type="text" name="dText" style="width: 220px;" class="required" value="${obj.dText }" /></td>
					</tr>
					<tr>
						<td>排序：</td>
						<td><input type="text" name="dSortNum" style="width: 100px;" class="required" value="${obj.dSortNum }" /></td>
					</tr>
					<tr style="text-align: center;">
						<td colspan="2"><a id="btnAdd" target="_parent"  class="easyui-linkbutton" target="_parent"  icon="icon-ok" href="javascript:void(0)"> 确定</a> <a  class="easyui-linkbutton" target="_parent"  id="btnCancel" icon="icon-cancel"
							href="javascript:void(0)">取消</a></td>
					</tr>
				</table>
			</form>
		</div>
	</div>
</body>
</html>