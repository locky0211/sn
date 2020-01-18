<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>差错认定信息填写</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_error_true.js"></script>
</head>
<body style="overflow: auto">
	<form id="errorTrueForm" method="post">
			<div style="display: none;">
			<input class="mini-hidden"  id="fg" name="fg" value="${param.fg }"/>
				<input id="id" name="id" class="mini-hidden" value="${obj.id}" />
				<input id="tableCode" name="tableCode" class="mini-hidden" value="${obj.reportNoStr}" />
				<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" value=""/>
			</div>
			
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td class="tab_label" style="width: 90px;">差错类型：</td>
					<td class="tab_field_nr" style="width: 38%"><input id="errorFlag" name="errorFlag" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 130px;" data="[{id:'1',text:'迟报'},{id:'2',text:'错漏报'}]" emptyText="请选择"
						required="true" value="${obj.errorFlag }" /> <font color="red">*</font></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 90px;">错误表编号：</td>
					<td class="tab_field_nr" style="width: 38%"><input id="errorTabcode" name="errorTabcode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 130px;"  emptyText="请选择"
						required="true" value="${obj.errorTabcode }" /> <font color="red">*</font></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 100px;">差错金额(万元)：</td>
					<td class="tab_field_nr" style="width: 38%" colspan="3"><input id="errorMoney" name="errorMoney" class="mini-textbox" style="width: 130px;" value="${obj.errorMoney}" /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 90px;">迟报天数：</td>
					<td class="tab_field_nr" style="width: 38%" colspan="3"><input id="lateDays" name="lateDays" class="mini-textbox" style="width: 130px;" value="${obj.lateDays}" /></td>
				</tr>
				<tr>
					<td class="tab_label" >问题描述：</td>
					<td class="tab_field_nr" style="width: 38%"><input id="remark" name="remark" class="mini-textarea" style="width: 340px;" value="${obj.remark}" required="true"/> <font color="red">*</font></td>
				</tr>
		<tr>
			<td class="tab_label" style="width: 90px;">附件：</td>
			<td class="tab_field_nr" style="width: 38%">
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
				<tr id="uploadDiv">
					<td class="tab_label" style="width: 90px;">上传附件：</td>
					<td class="tab_field_nr" style="width: 38%">
						<input id="excelUpload"  style="width: 300px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
							flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/><span id="checkDiv2"><a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">上传</a></span>
					</td>
				</tr>
		</tr>
			</table>
		<span id="checkDiv">
		<div style="text-align: center; padding: 10px;">
			<font color="red">附件选择好后请点击上传按钮，点击上传按钮之后附件不可撤销！！</font><br />
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> 
			<a class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
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