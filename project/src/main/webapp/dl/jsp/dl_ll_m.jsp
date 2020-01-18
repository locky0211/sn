<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>基准利率</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/dl/js/dl_ll_m.js"></script>
</head>
<body>
	<div style="width: 100%;"   id="reportImportForm">
		<div style="display: none;">
			<input id="datFile" name="datFile" class="mini-hidden" /> 
			<input id="datFilePath" name="datFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 80%;">
						<input id="datFileUpload" style="width: 250px;" uploadUrl="${base }/upload/uploadFile.nut" 
						class="mini-fileupload" name="file" limitType="*.xls" flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" 
						uploadOnSelect="true" onuploadsuccess="onUploadsuccess" /> 
						<a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入</a> 
						<span class="separator"></span> 
						<a iconCls="icon-add" class="mini-button" onclick="add()">新增</a>
						&nbsp;&nbsp;
						利率日期:&nbsp;
						<input id="rq" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 120px;">
						业务分类：
						<input id="ywlx" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=LV_YWLX" 
								textField="zdName" valueField="zdValue" oncloseclick="onCloseClick" showClose="true" style="width: 100px;" /> 
						<span class="separator"></span> 
						产品大类：
						<input id="cplb" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=LV_CPLB" 
								textField="zdName" valueField="zdValue" oncloseclick="onCloseClick" showClose="true" style="width: 200px;" /> 
						<span class="separator"></span>
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a> 
					</td>
					<td style="width:20%;text-align: right;"><a class="mini-button" iconCls="icon-excel" onclick="downLoadExcels()">下载基准利率模板</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="formulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/dl/ll/getDljzlvsList.nut" 
			pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="rq" width="70" align="center"  headerAlign="center">利率日期</div>
				<div field="ywlx" width="70" align="center" renderer="onYwlxRenderer" headerAlign="center">业务类型</div>
				<div field="cplb" width="120" align="center" renderer="onCplbRenderer" headerAlign="center">产品类别</div>
				<div field="qx" width="120" align="center" renderer="onQxRenderer" headerAlign="center">期限</div>
				<div field="lv" width="60" align="center" headerAlign="center">利率</div>
				<div name="edit" width="120" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>