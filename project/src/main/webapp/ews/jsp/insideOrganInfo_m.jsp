<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增机构</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var organCode = '${rep_zjzhb.organCode}';
</script>
<script type="text/javascript" src="${base }/ews/js/insideOrganInfo_m.js"></script>
</head>
<body>
	<form id="jusForm" method="post">
		<div style="height: 100%; padding: 10px">
				<table style="width: 100%" cellpadding="5">
				<tr>
					<td>内部机构号：</td>
                       <td><input id="organCode" name="organCode" class="mini-textbox" style="width: 200px;" onvalidation="idIsOnly" required="true" value="${rep_zjzhb.organCode}" /></td> 
				</tr>
				<tr>
					<td>银行机构名称：</td>
					<td><input id="organName" name="organName" class="mini-textbox" style="width: 200px;" required="true" value="${rep_zjzhb.organName}" /></td>
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