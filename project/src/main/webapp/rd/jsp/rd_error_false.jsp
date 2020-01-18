<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>确认正确</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_error_false.js"></script>
</head>
<body>
	<form id="errorFalseForm" method="post">
			<div style="display: none;">
			<input class="mini-hidden"  id="fg" name="fg" value="${param.fg }"/>
				<input id="id" name="id" class="mini-hidden" value="${obj.id}" />
				<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" value=""/>
			</div>
		<div>
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td class="tab_label" style="width: 90px;">认定理由：</td>
					<td class="tab_field_nr" colspan="3"><input id="jgReason" name="jgReason" class="mini-textarea" style="width: 360px; height: 70px;" required="true" value="${obj.jgReason}" /> <font color="red">*</font></td>
				</tr>
				<tr>
			<td class="tab_label" style="width: 90px;">附件：</td>
			<td class="tab_field_nr" >
					<div id="combobox2" class="mini-combobox" style="width: 360px;"
						popupWidth="400" textField="fileName" valueField="id"
						url="${base}/rd/problemIssued/attached/getAttachedAll.nut?problemId=${obj.id}" value="" 
						 showClose="true">
						<div property="columns">
							<div header="文件名" field="fileName"></div>
							<div header="上传时间" field="operationTime" dateFormat="yyyy-MM-dd HH:mm:ss" ></div>
						</div>
					</div>
				</td>
				<tr class="tab_label" id="uploadDiv">
					<td class="tab_field_nr" style="width: 90px;">上传附件：</td>
					<td >
						<input id="excelUpload"  style="width: 250px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
							flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/><span id="checkDiv2"><a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">上传</a></span>
					</td>
				</tr>
		</tr>
			</table>
		</div>
		<span id="checkDiv">
		<div style="text-align: center; padding: 10px;">
			<font color="red">附件选择好后请点击上传按钮，点击上传按钮之后附件不可撤销！！</font><br />
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="CloseWindow('cancel')"
				style="width: 60px;">取消</a>
		</div>
		</span>
		<span id="checkDiv1">
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" iconCls="icon-download" style="margin-right: 30px;" onclick="expo()">下载附件</a>
		</div>
		</span>
	</form>
</body>
</html>