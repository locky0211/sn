<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异动说明导入</title>
<%@include file="../../common/quote/boot.html"%>
<%-- <script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script> --%>
<script type="text/javascript" src="../js/rd_import_wave_description.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>

<body>
	<div id="reportImportForm">
		<div style="display: none;">
			<input id="excelFile" name="excelFile" class="mini-hidden" />
			<input id="excelFilePath" name="excelFilePath" class="mini-hidden" />
		</div>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 80%;">
						<form id="upload" action="" method="post" enctype='multipart/form-data'>
						    <input id="file" name="files[]" type="file"  onchange='upload()' accept="application/vnd.ms-excel" /><a class="mini-button" iconCls="icon-upload2" onclick="doReportImport()">导入异动说明</a> 
							<span class="separator"></span>
							<label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" required="true"
							class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" textField="bmName" multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
							onbeforenodeselect="beforenodeselect" onvaluechanged="gridLoad()" resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true" value="<%= brno%>"/>
							&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" onvaluechanged="gridLoad()" /> &nbsp;&nbsp;
							
							<a class="mini-button" iconCls="icon-save" onclick="saveDesc">保存说明内容</a> 
							<a class="mini-button" iconCls="icon-up" onclick="commitDesc()">提交异动说明</a> 
						</form>
						</td>
						<td style="width:200px;text-align: right;"><a class="mini-button" iconCls="icon-excel" onclick="downLoadExcels()">下载异动说明模板</a></td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%" url="${base}/importWaveDesc/getWaveDescInfo.nut"
			showPager="true" pageSize="20" allowAlternating="true" allowCellEdit="true" allowCellSelect="true">
			<div property="columns">
				<div field="organNo" width="30" align="center" headerAlign="center">机构名称</div>
				<div field="reportDate" width="10" align="center" headerAlign="center">报表日期</div>
				<div field="tabCode" width="15" align="center" headerAlign="center">报表代码</div>
				<!-- <div field="tabType" width="15" align="center" headerAlign="center">报表类型</div> -->
				<div field="element" width="15" align="center" headerAlign="center">单元格</div>
				<div field="checkProject" width="20" align="center" headerAlign="center">指标</div>
				<div field="value" width="15" align="center" headerAlign="center">波动幅度</div>
				<div field="dValue" width="15" align="center" headerAlign="center">波动差</div>
				<div field="content"   headerAlign="center">异动说明
				<input property="editor" class="mini-textarea" style="width:100%;"/></div>
				<div field="commitState" width="20" align="center" headerAlign="center" renderer="onCommitRenderer">提交状态</div>
				<div field="descState" width="20" align="center" headerAlign="center" renderer="onErrorMsgRenderer">采纳状态</div>
				<div field="id" name="id"></div>
			</div>
		</div>
	</div>
	
	
</body>
</html>