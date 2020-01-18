<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/ci_report_import.js"></script>
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
						<input id="textUpload" style="width: 180px;" placeholder="text"
						uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.xls;*.zip;*.rar;*.xml;*.txt" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true"
						onuploadsuccess="onUploadsuccess" /> 
						<a class="mini-button" iconCls="icon-upload2" onclick="checkReportImport()">导入</a>
						<span class="separator"></span>
						<a class="mini-button" iconCls="icon-txt" onclick="downLoadExcels()">下载选中文件</a>
						<!-- 
						<a class="mini-button" iconCls="icon-txt" onclick="truncateAllTempleTable()">清除缓存</a>
						 -->
						<br/>
						<!-- 
						金融机构代码：<input id="jrjgdm" class="mini-textbox" style="width: 120px;" />
						<span class="separator"></span> 
						-->
						文件种类：<input id="bwwjzl" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_BWWJZL" textField="zdName" valueField="zdValue"
									oncloseclick="onCloseClick" showClose="true" style="width: 183px;" />
						<span class="separator"></span> 
						数据相关日期：<input id="sjscrq" name="sjscrq" style="width: 120px;" class="mini-DatePicker" format="yyyy-MM-dd"/>
						<span class="separator" ></span> 
						反馈标识：<input id="fkbz" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_FKBZ" textField="zdName" valueField="zdValue"
									oncloseclick="onCloseClick" showClose="true" style="width: 100px;" />
						<span class="separator"></span> 
						<!-- 
						报文文件数据类型：<input id="bwwjsjlx" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_BWWJSJLX" textField="zdName" valueField="zdValue"
									oncloseclick="onCloseClick" showClose="true" style="width: 150px;" />
						<span class="separator"></span> 
						 -->
						
						报文导入日期：<input id="updateDate" name="updateDate" style="width: 120px;" class="mini-DatePicker" format="yyyy-MM-dd""/>
						<span class="separator"></span> 
						
						
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>
						
						
						<!-- <a class="mini-button" iconCls="icon-ok" onclick="showTab('RD_REPORT_CHECK_OLD','报表校验','rd/jsp/rd_report_check_old.jsp')">开始校验</a> -->
						</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%;" url="${base}/ci/report/import/getCiReportInfoList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="fileId" width="40" align="center" headerAlign="center">报文名称</div>
				<div field="sjscrq" width="20" align="center" headerAlign="center">数据相关日期</div>
				<!-- <div field="jrjgdm" width="20" align="center" headerAlign="center">金融机构代码</div> -->
				<div field="bwwjzl" width="20" align="center" headerAlign="center" renderer="bwwjzlRenderer">文件种类</div>
				<div field="bwwjsjlx" width="20" align="center" headerAlign="center" renderer="bwwjsjlxRenderer">文件数据类型</div>
				<div field="fkbz" width="20" align="center" headerAlign="center" renderer="fkbzRenderer">反馈文件</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="40" align="center" headerAlign="center">报文导入时间</div>
				<div field="errorMsg" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">数据状态</div>
				<div field="id" headerAlign="center" width="40" align="center" renderer="onRenderer">数据文件</div>
			</div>
		</div>
	</div>
</body>
</html>