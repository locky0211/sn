<%@ page language="java" import="java.util.*" pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>文件上传</title>
<script type="text/javascript" src="../jquery-1.7.1.js"></script>

<!-- easyui-CSS -->
<link rel="stylesheet" href="../easyui/default/easyui.css" type="text/css">
<link rel="stylesheet" href="../easyui/icon.css" type="text/css">
<!-- easyui-javascript -->
<script type="text/javascript" src="../easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="../easyui/easyui-lang-zh_CN.js"></script>
<%@include file="loading.jsp"%>
<script type="text/javascript" src="jquery.uploadify-3.1.js"></script>
<script type="text/javascript" src="uploaderFiles.js"></script>
<link rel="stylesheet" type='text/css' href="uploadify.css">
<style type="text/css">
.uploadify-button {
	background-color: transparent;
	border: none;
	padding: 0;
}

.uploadify:hover .uploadify-button {
	background-color: transparent;
}
</style>
</head>

<body>
	<div>
		<p>
			<input type="file" name="file" id="file_upload" />
		</p>
		<a id="btnUpload"  class="easyui-linkbutton" target="_parent"  icon="icon-upload" href="javascript:void(0)"> 添加文件</a>
		<div id="fileQueue" style="height: 200px; overflow-y: auto; width: 450px; padding: 5px;"></div>
		<img alt="" src="${base }/jquery/easyui/icons/upload.png"><span style="font-size: 12px;">添加文件</span>
	</div>
</body>
</html>
