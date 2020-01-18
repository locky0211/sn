<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报文生成</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dlReportExport.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportExportForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<label style="font-family: Verdana;">机构: </label> 
						<input id="brNo" name="brNo" style="width: 200px;" popupHeight="350px;" popupWidth="300px;" required="true"
							class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='DL'" textField="bmName" 
							multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
							resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="false" allowSelect="true"/>
						&nbsp;&nbsp;报表日期:&nbsp;
						<input id="reportDate" name="reportDate" style="width: 100px;" class="mini-DatePicker" format="yyyy-MM-dd" required="true"/> 
						&nbsp;&nbsp;
						<a class="mini-button" iconCls="icon-text" onclick="makeReport()">生成报文</a>
						&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportExportGrid" class="mini-datagrid" multiSelect="false" style="width: 100%; height: 100%;" url="${base}/dl/report/export/getDlReportExportInfoList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div field="brNo" name="brNo" width="60" align="center" headerAlign="center" renderer="brNoRenderer">机构</div>
				<div field="fileName" width="60" align="center" headerAlign="center">报文名称</div>
				<div field="reportDate" width="20" align="center" headerAlign="center">报表日期</div>
				<div field="filePath" width="80" align="center" headerAlign="center" >文件路径</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="40" align="center" headerAlign="center">生成时间</div>
				<div field="errorMsg" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">生成状态</div>
				<div field="id" headerAlign="center" width="40" align="center" renderer="onRenderer">数据文件</div>
			</div>
		</div>
	</div>
</body>
</html>