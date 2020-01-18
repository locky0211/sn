<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>确认正确</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_error_record_updateTbStatus.js"></script>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript">
 var tbFlag = '${obj.tbFlag}';
</script>
</head>
<body>
	<form id="errorRemarkForm" method="post">
			<div style="display: none;">
				<input id="id" name="id" class="mini-hidden" value="${param.id}" />
				<input id="excelFile" name="excelFile" class="mini-hidden" /> 
				<input id="excelFilePath" name="excelFilePath" class="mini-hidden"/>
			</div>
		<div>
			<table class="tab" cellpadding="3" cellspacing="0">
				<tr>
					<td class="tab_label tab_align_r style="width: 65px;">机构申辩材料：</td>
					<td class="tab_field" colspan="3">
					<input id="jgsbclUpload"  required="true" style="width: 250px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
					flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/><a class="mini-button" iconCls="icon-upload2" onclick="upLoadTbStatus()">上传</a>
					<span style="color: red">*</span>
					</td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r style="width: 65px;">监管认定意见：</td>
					<td class="tab_field" colspan="3">
							<input id="jgrdyjUpload" required="true" style="width: 250px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
					flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/><a class="mini-button" iconCls="icon-upload2" onclick="upLoadTbStatus()">上传</a>
					<span style="color: red">*</span>
					</td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r style="width: 65px;">修改通报状态理由：</td>
					<td class="tab_field" colspan="3"><input id="tbReason" name="tbReason" class="mini-textarea" style="width: 95%;" required="true"
						value="${obj.tbReason}" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r style="width: 65px;">通报状态（时间）：</td>
					<td class="tab_field" colspan="3"><input id="tbFlag" name="tbFlag" class="mini-combobox" style="width: 95%; height: 40px;" required="true" 
						textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_REEOR_RECORD_TBFLAG" allowInput="false" value="${obj.tbFlag}" />
						<br><font color="red">*如果进行通报，请选择相应的通报时间</font></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="CloseWindow('cancel')"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>