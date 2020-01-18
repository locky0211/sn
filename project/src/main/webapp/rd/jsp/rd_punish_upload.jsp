<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>确认正确</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_punish_upload.js"></script>
</head>
<body>
	<form id="errorFalseForm" method="post">
			<div style="display: none;">
				<input id="id" name="id" class="mini-hidden" value="${obj.id}" />
				<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" value=""/>
			</div>
		<div>
			<table style="width: 100%" cellpadding="5">
				<tr>
			<td style="width: 90px;">附件：</td>
			<td >
					<div id="combobox2" class="mini-combobox" style="width: 360px;"
						popupWidth="400" textField="fileName" valueField="id"
						url="${base}/rd/error/dispose/getAttachedAll.nut?problemId=${obj.id}" value="" multiSelect="true" 
						 oncloseclick="onCloseClick" showClose="true">
						<div property="columns">
							<div header="文件名" field="fileName"></div>
							<div header="上传时间" field="operationTime" dateFormat="yyyy-MM-dd HH:mm:ss" ></div>
						</div>
					</div>
				</td>
				<tr id="uploadDiv">
					<td style="width: 90px;">上传材料：</td>
					<td >
						<input id="excelUpload"  style="width: 250px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
							flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/><a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">上传</a>
					</td>
				</tr>
		</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<font color="red">附件选择好后请点击上传按钮，点击上传按钮之后附件不可撤销！！</font><br />
			<a class="mini-button" onclick="onCancel()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="CloseWindow('cancel')"
				style="width: 60px;">取消</a>
		</div>
		
	</form>
</body>
</html>