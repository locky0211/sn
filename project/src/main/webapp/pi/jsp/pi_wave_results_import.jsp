<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/pi_wave_results_import.js"></script>
</head>
<body>
	<div id="piWaveResultsForm">
		<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="0" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><input id="excelUpload" style="width: 180px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.xls;*.zip;*.rar" 
						flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess" /> 
						<a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入</a>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="piWaveResultsGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/pi/wave/results/getImportInfo.nut" pageSize="20" showPager="true" showModified="false" allowAlternating="true">
			<div property="columns">
				<div field="resultDate" width="80" align="center" headerAlign="center">数据日期</div>
				<div field="importDate" width="80" align="center" headerAlign="center">导入时间</div>
				<div field="filePath" width="80" align="center" headerAlign="center">文件位置</div>
				<div field="fileName" width="80" align="center" headerAlign="center">文件名称</div>
				<div field="cUser" width="80" align="center" headerAlign="center">操作人</div>
				<div width="80" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>