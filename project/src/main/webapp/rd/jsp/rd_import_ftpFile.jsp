<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>FTP文件引入管理界面</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_import_ftpFile.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					
					<td style="width: 100%;">
					机构: </label> <input id="orgId" showClose="true" oncloseclick="onCloseClick"
						name="orgId" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						 class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="true" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" showClose="true" oncloseclick="onCloseClick"/>	&nbsp;&nbsp;&nbsp;&nbsp;
					报表名称: <input id="repName" name="repName" class="mini-textbox" style="width: 150px;"/>&nbsp;&nbsp;&nbsp;&nbsp;
					报表日期：<input id="dataDate" name="dataDate" format="yyyy-MM-dd" showClose="true" oncloseclick="onCloseClick" class="mini-datepicker" style="width: 120px;" />&nbsp;&nbsp;&nbsp;&nbsp;
					文件是否下载: <input id="isDownLoad" name="isDownLoad" class="mini-combobox" showClose="true" oncloseclick="onCloseClick" textField="errorName" valueField="errorValue" data="[{errorValue:'0',errorName:'未导入'},{errorValue:'1',errorName:'已导入'}]" allowInput="false"  style="width: 100px;" />&nbsp;&nbsp;&nbsp;&nbsp;
					文件是否入库: <input id="isImportDb" name="isImportDb" class="mini-combobox" showClose="true" oncloseclick="onCloseClick" textField="errorName" valueField="errorValue" data="[{errorValue:'0',errorName:'未入库'},{errorValue:'1',errorName:'已入库'}]" allowInput="false"  style="width: 100px;" />&nbsp;&nbsp;&nbsp;&nbsp;
					<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a></td>
				</tr>
			</table>
		</div>
	</div>
	
		<div class="mini-fit">
		<div id="recordNewReportGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/newReportLog/getAllNewReportLogList.nut" pageSize="50"
			showPager="true">
			<div property="columns">
				<div type="indexcolumn" width="20" align="center" headerAlign="center">序号</div>
				<div field="orgId" visible="false"  align="center" width="80" headerAlign="center">机构</div>
				<div field="orgName" align="center" width="80" headerAlign="center">机构</div>
				<div field="repName" align="center" width="100" headerAlign="center">报表名称</div>
				<div field="dataDate" align="center" width="30" headerAlign="center">报表日期</div>
				<div field="freqId"  width="30" align="center" headerAlign="center" renderer="typeRenderer" >报表类型</div>
				<div field="isDownLoad" width="20" align="center" headerAlign="center" renderer="downloadRenderer" >是否下载</div>
				<div field="isImportDB" width="20" align="center" headerAlign="center" renderer="importDBRenderer" >是否入库</div>
				<div field="errorReason" width="100" align="center" headerAlign="center">错误原因</div>
				<div width="40" allowSort="true" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
	
	
</body>
</html>