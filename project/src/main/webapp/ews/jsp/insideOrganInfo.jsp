<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>内部机构号信息页面</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base}/ews/js/insideOrganInfo.js"></script>
</head>
<body>
<div style="display: none">
		<div id="fileName" class="mini-textbox"></div>
		<div id="filePath" class="mini-textbox"></div>
		<div id="loadFilePath" class="mini-textbox"></div>
	</div>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add"  plain="true"   onclick="add()">新增机构</a><span class="separator"></span><label style="font-family: Verdana;">内部机构号: </label> <input id="keyCode" class="mini-textbox"
					/> &nbsp;&nbsp;<label style="font-family: Verdana;">银行名称: </label> <input id="keyName" class="mini-textbox"
					 />&nbsp;&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search"   onclick="search()">查询</a></td>
				<td style="white-space: nowrap;">  <input id="excelUpload" style="width: 180px;"
						uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.xls;*.zip;*.rar" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true"
						onuploadsuccess="onUploadsuccess" /> <a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入</a>
						<a class="mini-button" iconCls="icon-excel" onclick="downLoadExcels()">模板下载</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="organGrid" style="width: 100%; height: 100%;" class="mini-datagrid" url="${base }/getorganinfo/getInfoList.nut" sallowAlternating="true" pageSize="100" ">
			<div property="columns">
			<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="organCode" align="center" headerAlign="center">内部机构号</div>
				<div field="organName" align="center" headerAlign="center" >银行机构名称</div>
				<div width="100px" headerAlign="center" align="center" renderer="onActionRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>