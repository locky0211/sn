<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/pi_report_import.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportImportForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">PISA报文导入: </label> <input id="uploadExcel" required="true" class="mini-fileupload" name="file" limitType="*.zip;*.xml" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf"
						onuploadsuccess="onUploadSuccess" onuploaderror="onUploadError" onfileselect="onFileSelect" uploadUrl="${base }/pireport/importXml.nut" uploadOnSelect="false"
						style="cursor: pointer; width: 240px;" /> <a class="mini-button" iconCls="icon-upload2" onclick="startUpload">导入</a> <!--<a class="mini-button" iconCls="icon-excel" onclick="doReportExport()">导出</a>
						<a class="mini-button" iconCls="icon-excel" onclick="downLoadExcels()">全部下载</a>-->
						</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="bwjlGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/pireport/getPIXmldrjlList.nut" pageSize="20" showPager="true" showModified="false" allowAlternating="true">
			<div property="columns">
				<div type="indexcolumn" align="center" headerAlign="center">序号</div>
				<div field="bbsj" width="80" align="center" headerAlign="center">期数</div>
				<div field="drsj" width="80" align="center" headerAlign="center">导入时间</div>
				<div field="wjmc" width="140" align="center" headerAlign="center">文件名称</div>
			</div>
		</div>
	</div>
</body>
</html>