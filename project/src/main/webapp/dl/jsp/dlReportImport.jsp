<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>存贷款报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/dlReportImport.js"></script>
<%
	HttpSession Session = request.getSession();
	String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportImportForm">
		<div style="display: none;">
			<input id="datFile" name="datFile" class="mini-hidden" /> 
			<input id="datFilePath" name="datFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						&nbsp;&nbsp;
						<input id="datFileUpload" style="width: 250px;" uploadUrl="${base }/upload/uploadFile.nut" 
							class="mini-fileupload" name="file" limitType="*.dat;*.zip;*.rar" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" 
							uploadOnSelect="true" onuploadsuccess="onUploadsuccess" /> 
						<a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入</a> 
						&nbsp;&nbsp;
						<label style="font-family: Verdana;">机构: </label> 
						<input id="brNo" name="brNo" style="width: 200px;" popupHeight="350px;" popupWidth="300px;"
							class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='DL'" textField="bmName" 
							multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
							resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="false" allowSelect="true"/>
						&nbsp;&nbsp;报表日期:&nbsp;
						<input id="rDate" name="reportDate" style="width: 100px;" class="mini-DatePicker" format="yyyy-MM-dd"/> 
						&nbsp;&nbsp;文件种类:&nbsp;
						<input id="reportType" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DL_REPORT_TYPE" textField="zdName" valueField="zdValue"
							oncloseclick="onCloseClick" showClose="true" style="width: 130px;" />
						&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/dl/report/import/getDlReportInfoList.nut"
			pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div field="brNo" name="brNo" width="60" align="center" headerAlign="center" renderer="brNoRenderer">机构</div>
				<div field="fileName" width="60" align="center" headerAlign="center">报文名称</div>
				<div field="reportDate" width="20" align="center" headerAlign="center">报表日期</div>
				<div field="reportType" width="40" align="center" headerAlign="center" renderer="reportTypeRenderer">文件种类</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="40" align="center" headerAlign="center">导入时间</div>
				<div field="errorMsg" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">数据状态</div>
				<div field="reportId" headerAlign="center" width="20" align="center" renderer="onRenderer">数据文件</div>
			</div>
		</div>
	</div>
</body>
</html>