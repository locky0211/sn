<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/common/js/miniui/swfupload/swfupload.js"></script>
<script type="text/javascript" src="${base }/dck/js/dckCwbbbbsj_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">客户名称：<input id="khmc" class="mini-textbox" style="width: 150px;" /><span class="separator"></span> 客户代码：
						<input id="khdm" class="mini-textbox" style="width: 150px;"/> <a iconCls="icon-search"
						class="mini-button" plain="true" onclick="search()">查询</a> <a iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>
						报备数据批量导入：<input id="uploadExcel" required="true" class="mini-fileupload" name="file" limitType="*.xls;" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf"
						onuploadsuccess="onUploadSuccess" onuploaderror="onUploadError" onfileselect="onFileSelect" uploadUrl="${base }/dck/cwsjbb/doImport.nut" uploadOnSelect="false"
						style="cursor: pointer; width: 240px;" /><a class="mini-button" iconCls="icon-upload2" onclick="doImport()">导入</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="dataGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/dck/cwsjbb/getDataList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="bsyhdm" width="70" align="center" headerAlign="center">报数银行代码</div>
				<div field="khdm" width="60" align="center" headerAlign="center">客户代码</div>
				<div field="khmc" width="60" align="center" headerAlign="center">客户名称</div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>

			</div>
		</div>
	</div>
</body>
</html>