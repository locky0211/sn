<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>客户风险修改数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/dck_report_import_update.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportImportForm">
		<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" /> 
			<input id="excelFilePath" name="excelFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<label style="font-family: Verdana;margin-left: 5px;">选择修改后的报表（支持xls、zip、rar格式）：</label>
						<input id="excelUpload" style="width: 180px;" class="mini-fileupload" name="file"
							uploadUrl="${base }/upload/uploadFile.nut" limitType="*.xls;*.zip;*.rar" uploadOnSelect="true"
							flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" onuploadsuccess="onUploadsuccess" /> 
						<a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入</a>
						<span class="separator"></span>
						<label style="font-family: Verdana;margin-left: 5px;">表名：</label>
						<div id="tableCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="600px" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DckImportTableName"
							textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" width="80" field="zdName"></div>
								<div header="表数据库名称" width="20" field="zdValue"></div>
							</div>
						</div>
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/dck/update/getUpdateInfoList.nut"
			showPager="false" showModified="false" allowCellEdit="true" pageSize="20">
			<div property="columns">
				<div type="indexcolumn" align="center" width="10" headerAlign="center">序号</div>
				<div field="tableCode" width="30" align="center" headerAlign="center">表编号</div>
				<div name="zd_name" width="50" align="center" renderer="onNameRenderer" headerAlign="center">表名称</div>
				<div field="changeNum" width="20" align="center" headerAlign="center" renderer="onColorRenderer">更新条数</div>
				<div field="dataNum" width="20" align="center"  headerAlign="center">导入条数</div>
				<div field="checkTime" dateFormat="yyyy-MM-dd HH:mm:ss" width="40" align="center" headerAlign="center">导入时间</div>
				<div field="Cuser" width="20" align="center"  headerAlign="center">操作用户</div>
				<div name="edit" width="20" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>