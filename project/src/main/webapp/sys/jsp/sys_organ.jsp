<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统机构</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_organ.js"></script>
<script type="text/javascript">
	var pOrgan = '${organ.parentOrgan }';
</script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 350px; padding: 8px;">
			<form id="organManagerForm" action="${base }/sys/organ/saveOrUpdateOrgan" method="post">
				<table style="font-size: 12px;" cellpadding="3">
					<tr>
						<td>机构ID：</td>
						<td><input type="text" id="organId" style="width: 150px" name="organId" class="required" value="${organ.organId }" /></td>
					</tr>
					<tr>
						<td>机构简称：</td>
						<td><input type="text" id="organShortName" style="width: 200px" name="organShortName" class="required" value="${organ.organShortName }" /></td>
					</tr>
					<tr>
						<td>上级机构：</td>
						<td><select id="pOrgan" name="parentOrgan" class="required"></select></td>
					</tr>
					<tr>
						<td>机构全称：</td>
						<td><input type="text" id="organName" style="width: 280px" name="organName" class="required" value="${organ.organName }" /></td>
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