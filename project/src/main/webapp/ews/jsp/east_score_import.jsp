<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>报文导入</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/common/js/miniui/swfupload/swfupload.js"></script>
<script type="text/javascript" src="${base }/ews/js/east_score_import.js"></script>
</head>
<body style="overflow: auto;">
	<form id="khfxtzForm" method="post">
		<div>
			<table class="tab" cellpadding="10" cellspacing="0">
				<tr>
					<td style="width: 80px;" class="tab_label tab_align_c ">导入日期:</td>
					<td class="tab_field_nr "><input name="drrq" required="true" id="drrq" class="mini-monthpicker" style="width: 240px;" format="yyyyMM" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c">导入文件:</td>
					<td class="tab_field_nr "><input id="uploadExcel" required="true" class="mini-fileupload" name="file" limitType="*.xls;" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf"
						onuploadsuccess="onUploadSuccess" onuploaderror="onUploadError" onfileselect="onFileSelect" uploadUrl="${base }/east/rank/importExcel.nut" uploadOnSelect="false"
						style="cursor: pointer; width: 240px;" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" iconCls="icon-ok" onclick="startUpload" style="width: 60px; margin-right: 20px;">上传</a> <a class="mini-button" iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>