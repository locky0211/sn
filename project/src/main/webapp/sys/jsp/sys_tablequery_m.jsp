<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>执行sql</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/sys/js/sys_tablequery_m.js"></script>
</head>
<body style="overflow-y: auto; overflow-x: auto">
<div id="reportImportForm">
	<div style="width: 100%;">
		<input class="mini-hidden" id="excelSql" value="">
		<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="excelFilePath"
				name="excelFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px; margin: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"></span>sql语句：<input id="sqlstr" class="mini-textarea" style="width: 520px;" />
					SQL文件：<input id="excelUpload" style="width: 180px;"
						uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.txt;*.sql" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true"
						onuploadsuccess="onUploadsuccess" /> <a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入</a>常用sql:<input id="utilSql" class="mini-combobox"
						style="width: 150px;" textField="text" valueField="id" onitemclick="itemClick" emptyText="请选择..." url="../sqls.txt"   allowInput="false"
						showNullItem="true" nullItemText="请选择..." /> <a iconCls="icon-edit" class="mini-button" plain="true" onclick="excute()">执行</a> &nbsp;&nbsp;<a
						iconCls="icon-download" class="mini-button" plain="true" onclick="exportExcel()">导出excel</a><a iconCls="icon-search" class="mini-button"
						plain="true" onclick="rzView()">查看日志</a></td>
				</tr>
			</table>
		</div>
	</div>
</div>	
	<iframe id="ifream1" width="100%" height="400px;" frameborder=0 scrolling=auto src="${base }/sys/jsp/sys_tablequery_iframe.jsp"></iframe>
	<iframe id="goToDownload" style="display: none" src=""></iframe>
</body>
</html>