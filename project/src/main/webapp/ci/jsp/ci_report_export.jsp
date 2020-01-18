<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导出</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ci_report_export.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportImportForm">
		<div style="display: none;">
			<input id="textFile" name="textFile" class="mini-hidden" value="${tInfo.textFile }" /> <input id="flag" name="flag" class="mini-hidden" value="${param.flag }" /> <input id="textFilePath"
				name="textFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">

			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						报文文件种类：<input id="bwwjzl" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_BWWJZL" textField="zdName" valueField="zdValue"
									oncloseclick="onCloseClick" showClose="true" style="width: 200px;" />
						<span class="separator"></span> 
						数据相关日期：<input id="sjscrq" name="sjscrq" style="width: 120px;" class="mini-DatePicker" format="yyyy-MM-dd""/>
						<span class="separator"></span> 
						报文导入日期：<input id="updateDate" name="updateDate" style="width: 120px;" class="mini-DatePicker" format="yyyy-MM-dd""/>
						<span class="separator"></span> 
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>
						<a class="mini-button" iconCls="icon-txt" onclick="downLoadTxts()">导出选中txt</a>
						<a class="mini-button" iconCls="icon-txt" onclick="downLoadEncs()">导出选中enc</a>
						</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%;" url="${base}/ci/report/export/getCiReportInfoList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="fileId" width="40" align="center" headerAlign="center">报文名称</div>
				<div field="sjscrq" width="20" align="center" headerAlign="center">数据相关日期</div>
				<div field="bwwjzl" width="20" align="center" headerAlign="center" renderer="bwwjzlRenderer">报文文件种类</div>
				<div field="bwwjsjlx" width="20" align="center" headerAlign="center" renderer="bwwjsjlxRenderer">报文文件数据类型</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="40" align="center" headerAlign="center">报文导入时间</div>
				<div field="errorMsg" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">数据状态</div>
				<div field="id" headerAlign="center" width="40" align="center" renderer="onRenderer">数据文件</div>
			</div>
		</div>
	</div>
</body>
</html>