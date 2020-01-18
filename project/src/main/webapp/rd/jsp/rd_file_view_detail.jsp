<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>存档问题详情</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_file_view_detail.js"></script>
</head>
<body>
<form id="issuedDetailForm" method="post">
	<div style="display: none;">
		<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
	</div>
	<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" />
		</div>
	<table class="tab" style="width: 100%; height: 100px;" cellpadding="6" cellspacing="0">
		<tr>
			<td class="tab_label" style="width: 14%" align="center">反馈记录：</td>
			<td class="tab_field_nr">
				<input id="remark" name="remark" class="mini-textarea" style="width: 98%; height:200px" value="${obj.remark }" />
			</td>
		</tr>
		<tr>
			<td class="tab_label" style="width: 14%" align="center">附件路径：</td>
			<td class="tab_field_nr">
				<input class="mini-textbox" style="width: 98%" id="document1" name="document1" emptyText="未上传附件。" value="${obj.document }" />
				<input class="mini-hidden" style="width: 98%" id="document" name="document" emptyText="未上传附件。" value="${obj.document }" />
			</td>
		</tr>
	</table>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" iconCls="icon-download" style="margin-right: 30px;" onclick="expo()">下载附件</a>
		<a class="mini-button" iconCls="icon-cancel" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">关闭</a>
	</div>
</form>
</body>
</html>