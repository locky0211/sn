<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>报文导入</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/common/js/miniui/swfupload/swfupload.js"></script>
<script type="text/javascript" src="${base }/pi/js/piReportIn.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body ">
	<form id="khfxtzForm" method="post">
		<div>
		<input id="id" name="id" class="mini-hidden" value="${param.id}"/>
			<table class="tab" cellpadding="10" cellspacing="0">
			    <!-- <tr>
					<td style="width: 80px;" class="tab_label tab_align_c ">导入方式:</td>
					<td class="tab_field_nr "><input name="method" required="true" id="method" class="mini-combobox" style="width: 240px;" data="[{method:'快速插入',val:'fast'},{method:'普通插入',val:'slow'}]"
						valueField="val" showClose="false" textField="method" value="fast" valueFromSelect='true' allowInput='false'/></td>
				</tr>-->
				
				<tr>
					<td class="tab_label tab_align_c">导入文件:</td>
					<td class="tab_field_nr "><input id="uploadExcel" required="true" class="mini-fileupload" name="file" limitType="*.xls;" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf"
						onuploadsuccess="onUploadSuccess" onuploaderror="onUploadError" onfileselect="onFileSelect"  uploadUrl="${base }/pi/doReportImport.nut" uploadOnSelect="false"
						style="cursor: pointer; width: 180px;" /></td>
				</tr>
				<!--  <tr>
				<td colspan='5' class="tab_field_nr "><label><input class='method' name="method" type="radio" value="fast" checked="checked"/>快速导入</label></td>
				<td colspan='5'  class="tab_field_nr "><label><input class='method' name="method" type="radio" value="slow" />普通导入</label></td>
				</tr>-->
			</table>
		</div>
		
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" iconCls="icon-ok" onclick="startUpload" style="width: 60px; margin-right: 20px;">上传</a> <a class="mini-button" iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>