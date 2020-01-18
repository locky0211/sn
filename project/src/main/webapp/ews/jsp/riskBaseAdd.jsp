<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增风险知识</title>
<%@include file="/common/quote/boot.html"%>
<link href="${base }/common/js/umeditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet"/>
<script type="text/javascript" src="${base }/common/js/umeditor/umeditor.config.js"></script>
<script type="text/javascript" src="${base }/common/js/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="${base }/common/js/umeditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="${base }/ews/js/riskBaseAdd.js"></script>
<script type="text/javascript">
var content = '${obj.content }';
</script>
</head>
<body>
	<form id="riskBaseForm">
		<div style="display: none;">
			<input class="mini-textbox" id="id" name="id" value="${obj.id}" /> <input class="mini-textbox" id="type" name="type" value="1" /> <input
				class="mini-textbox" id="createUser" name="createUser" value="${obj.createUser}" /> <input class="mini-textbox" id="createDate" name="createDate" value="${obj.createDate}" />
		</div>
		<table class="tab" style="width: 100%;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 15%">风险名称</td>
				<td class="tab_field_nr" style="width: 85%"><input class="mini-textbox" required="true" id="title" name="title" value="${obj.title}"
					style="width: 90%" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 15%">目录</td>
				<td class="tab_field_nr" style="width: 85%"><input id="pId" name="pId" required="true" class="mini-treeselect"
					url="${base }/riskBase/getRiskBaseFolderList.nut" textField="title" valueField="id" parentField="pId" value="${obj.pId }" allowInput="false"
					style="width: 90%" /></td>
			</tr>
			<tr>
				<td class="tab_label" style="width: 15%" valign="top">风险内容</td>
				<td class="tab_field_nr" style="width: 85%"><script type="text/plain" id="content" style="width:95%;height:240px;overflow:auto;" ></script></td>
			</tr>
		</table>
	</form>
	<br>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel"
			style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>