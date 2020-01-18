<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>生成自动计算JS</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/dy_table_autojs.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">报表代码:&nbsp;&nbsp;<input
					id="tabCode" style="width: 80px;" class="mini-textbox" />&nbsp;&nbsp; <a class="mini-button" iconCls="icon-search" plain="true"
					onclick="search()">查询</a><span class="separator"></span>
					<div id="allVersion" name="allVersion" class="mini-checkbox" readOnly="false" text="所有版本"></div> &nbsp;&nbsp;<a class="mini-button"
					iconCls="icon-js" plain="true" onclick="toCreateAutoJs()">生成JS</a>
				</td>
				<td style="white-space: nowrap;"><input id="excelFile" name="excelFile" class="mini-hidden" /> <input id="excelFilePath"
					name="excelFilePath" class="mini-hidden" /><input id="excelUpload" style="width: 200px;" uploadUrl="${base }/upload/uploadFile.nut"
					class="mini-fileupload" name="file" limitType="*.js;*.zip;*.rar" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf"
					uploadOnSelect="true" onuploadsuccess="onUploadsuccess" /> <a class="mini-button" iconCls="icon-upload2" onclick="doImportAutoJs()">上传JS</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="tableInfoGrid"  allowAlternating="true"  class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%" url="${base}/dy/table/getTableBasicInfoList.nut"
			showPager="false" showModified="false" allowUnselect="true">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="15" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" align="left" headerAlign="center">报表名称</div>
			</div>
		</div>
	</div>
</body>
</html>