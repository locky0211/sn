<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/ddd.js"></script>
<title>银监苏燕Excel处理</title>
</head>
<body>
<br>

	<input id="excelFile" name="excelFile" class="mini-hidden" value="" />
	<input id="excelFilePath" name="excelFilePath" class="mini-hidden" value="" />
	
	&nbsp;&nbsp;<input id="excelUpload" style="width: 200px;" uploadUrl="${base }/upload/uploadFile.nut"
		class="mini-fileupload" name="file" limitType="*.xls"
		flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true"
		onuploadsuccess="onUploadsuccess" />&nbsp;&nbsp;
	批次:<input id="pc" name="pc" style="width: 80px;" type="text" />
	<a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">处理</a>
</body>
</html>