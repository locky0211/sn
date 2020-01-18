<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>数据重新导入</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.loading2.jsp"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="../../common/quote/jquery.uploadify.html"%>
<script type="text/javascript" src="${base }/sam/js/sam_report_info_revise.js"></script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 350px; padding: 8px;">
			<table style="font-size: 12px; width: 450px;" border="0" cellpadding="3">
				<tr>
					<td style="width: 80px;">机构名称：</td>
					<td colspan="3"><input type="hidden" id="reportModelNoId" value="${obj.reportModelNo }" /><input type="hidden" id="keys" value="${keys }" /><input type="hidden" id="bankOrganNoId"
						value="${obj.bankOrganNo }" /> <input type="hidden" id="reportDateId" value="${obj.reportDate }" /> <input type="hidden" id="reportTypeId" value="${obj.reportType }" /> ${obj.bankOrganName }</td>
				</tr>
				<tr>
					<td style="width: 80px;">数据日期：</td>
					<td>${obj.reportDate }</td>
					<td style="width: 80px;">数据类型：</td>
					<td>${obj.reportTypeName }</td>
				</tr>
				<tr>
					<td>文件名称：</td>
					<td colspan="3" id="fileNameTd">${obj.fileName }</td>
				</tr>
			</table>
			<table style="font-size: 12px; width: 450px;" border="0" cellpadding="3">
				<tr>
					<td colspan="4"><input type="hidden" id="iSessionId" value="<%=session.getId()%>"> <input type="file" name="file" id="file_upload" /></td>
				</tr>
				<tr style="text-align: center;">
					<td colspan="4"><span id="errorMsgId" style="color: red"></span></td>
				</tr>
				<tr style="text-align: center; height: 40px;">
					<td colspan="4"><a id="btnAdd" target="_parent" class="easyui-linkbutton" target="_parent" icon="icon-ok" href="javascript:void(0)"> 确定</a> <a class="easyui-linkbutton" target="_parent"
						id="btnCancel" icon="icon-cancel" href="javascript:void(0)">取消</a></td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>