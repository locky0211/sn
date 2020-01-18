<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报文基础信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/bfIndInfo_m.js"></script>
</head>
<body>
<div id="reportImportForm">
		<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" value="" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" />
		</div>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增</a><span class="separator"></span>
					<a class="mini-button" iconCls="icon-edit" plain="true" onclick="update()">编辑</a><span class="separator"></span> <a class="mini-button"
					iconCls="icon-remove" plain="true" onclick="del()">删除</a></td>
					<td><input id="excelUpload" style="width: 180px;"
						uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.xls" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true"
						onuploadsuccess="onUploadsuccess" /></td><td> <a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()" style="width:60px;">导入</a> </td>
				<td style="white-space: nowrap;"><label style="font-family: Verdana;">报文编号: </label> <input id="tabCode" class="mini-textbox" />&nbsp;&nbsp;<a
					class="mini-button" iconCls="icon-search" onclick="search()">查询</a></td>
			</tr>
		</table>
	</div>
</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="indInfoGrid"  allowAlternating="true"  class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/bf/indInfo/getIndInfoList.nut" showPager="false"
			showModified="false" >
			<div property="columns">
				<div field="id" width="0">信息记录编号</div>
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="tabCode" width="10" align="center" headerAlign="center">报文编号</div>
				<div field="indCode" width="10" align="center" headerAlign="center">指标编号</div>
				<div field="indExplain" align="left" headerAlign="center">指标说明</div>
				<div name="action" headerAlign="center" width="0" align="center" renderer="onRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>