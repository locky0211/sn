<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>审核问题详情</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/rd_review_search_sj_detail.js"></script>
</head>
<body>
<form id="issuedDetailForm" method="post">
	<div style="display: none;">
		<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
	</div>
	<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" value=""/>
		</div>
	<table class="tab" style="width: 100%; height: 100px;" cellpadding="6" cellspacing="0">
		<tr>
			<td class="tab_label" style="width: 14%" align="center">反馈记录：</td>
			<td class="tab_field_nr">
				<input id="remark" name="remark" class="mini-textarea" style="width: 98%; height:180px" value="${obj.remark }" />
			</td>
		</tr>
		<tr>
			<td class="tab_label" style="width: 14%" align="center">回复内容：</td>
			<td class="tab_field_nr">
				<input id="content" name="content" class="mini-textarea" style="width: 98%;height:60px" value="${obj.content }"/>
			</td>
		</tr>
		<tr>
			<td class="tab_label" style="width: 14%" align="center">附件：</td>
			<td class="tab_field_nr">
			<!--  
				<input class="mini-textbox" style="width: 98%" id="document1" name="document1" emptyText="未上传附件。" value="${obj.document }" />
				<input class="mini-hidden" style="width: 98%" id="document" name="document" emptyText="未上传附件。" value="${obj.document }" />
			-->
					<div id="combobox2" class="mini-combobox" style="width: 250px;"
						popupWidth="400" textField="fileName" valueField="id"
						url="${base}/rd/problemIssued/attached/getAttachedAll.nut?problemId=${obj.id}" value="" multiSelect="true"
						 showClose="true">
						<div property="columns">
							<!-- <div header="id" field="id" visible="false"></div>-->
							<div header="文件名" field="fileName"></div>
							<div header="上传时间" field="operationTime" dateFormat="yyyy-MM-dd HH:mm:ss" ></div>
						</div>
					</div>
				</td>
		</tr>
		
		<tr id="checkDiv">
			<td class="tab_label" style="width: 14%" align="center">上传附件：</td>
			<td class="tab_field_nr">
				<input id="excelUpload"  style="width: 300px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
					flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/><a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">上传</a>
			</td>
		</tr>
		<!-- <tr id="checkDiv1">
			<td class="tab_label" style="width: 14%" align="center">上传附件：</td>
			<td class="tab_field_nr">
				<a class="mini-button" onclick="openW">点击打开上传页面</a>
			</td>
		</tr> -->
	</table>
	<div id="checkUser" style="text-align: center; padding: 10px;">
		<a class="mini-button" iconCls="icon-download" style="margin-right: 30px;" onclick="expo()">下载附件</a>
		<a class="mini-button" iconCls="icon-cancel" onclick="javascript:CloseWindow('cancel')" style="width: 80px;">取消</a>
	</div>
	<div id="checkReportUser" style="text-align: center; padding: 10px;">
		<a class="mini-button" onclick="update()" style="width: 120px; margin-right: 30px;" iconCls="icon-ok">提交回复内容</a> 
		<a class="mini-button" iconCls="icon-download" style="margin-right: 30px;" onclick="expo()">下载附件</a>
		<a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</form>
</body>
</html>