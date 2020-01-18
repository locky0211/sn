<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>上传页面</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/uploadEvidence_brown.js"></script>
<script type="text/javascript">
	var isUpload = "${param.isUpload}";
</script>
</head>
<body>
	<div style="display: none">
		<div id="fileName" class="mini-textbox"></div>
		<div id="filePath" class="mini-textbox"></div>
		<div id="parentNodeId" class="mini-textbox"></div>
		<div id="evidenceTableId" class="mini-textbox"></div>
		<input id="organNo" name="organNo" class="mini-textbox"
			style="width: 90%" />
		<input id="ay" name="ay" class="mini-textbox" style="width: 90%" />
		<input id="laDate" name="laDate" class="mini-datepicker" format="yyyyMMdd" allowInput="false" style="width: 90%"/>
		<input id="cfDate" name="cfDate" style="width: 90%" class="mini-datepicker" format="yyyyMMdd" />
		<input id="cfMoney" name="cfMoney" class="mini-textbox">
	</div>
	<table class="tab" style="width: 100%" cellpadding="5">
		<tr>
			<td class="tab_label" style="width: 14%" align="center">附件：</td>
			<td class="tab_field_nr">
				<div id="combobox2" class="mini-combobox" style="width: 250px;"
					popupWidth="300" textField="fileName" valueField="id"
					url="${base}/rd/problemIssued/attached/getAttachedByTableIDAndLaDateAndParentNodeId.nut?laDate=${param.laDate}&parentNodeId=${param.parentNodeId}&evidenceTableId=${param.evidenceTableId}"
					value="0" multiSelect="false" showClose="true" >
					<div property="columns">
						<!-- <div header="id" field="id" visible="false"></div>-->
						<div header="文件名" field="fileName"></div>
						<div header="上传时间" field="operationTime"
							dateFormat="yyyy-MM-dd HH:mm:ss"></div>
					</div>
				</div>
			</td>
		</tr>
		<c:if test="${param.isUpload == '1'}">
		<tr>
			<td class="tab_label" style="width: 16%;">浏览数据:</td>
			<td class="tab_field_nr" style="width: 34%">
			<input id="excelUpload"  style="width: 250px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
					flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/><a class="mini-button" iconCls="icon-upload2" onclick="upLoad()">上传</a></td>
		</tr>
		</c:if>
	</table>
	
	<div style="text-align: center; padding: 10px;">
		<font color="red">附件浏览好后请点击上传按钮，点击上传按钮之后附件不可撤销！！</font>
		<c:if test="${param.isUpload == '1'}">
		<a class="mini-button" onclick="confirm()"
			style="width: 60px; margin-right: 20px;">确定</a> 
	</c:if>
		<c:if test="${param.isUpload == '2'}">
		<a class="mini-button" onclick="downLoadFile()"
			style="width: 60px; margin-right: 20px;">下载</a> 
		<a class="mini-button" onclick="onCancel()"
			style="width: 60px; margin-right: 20px;">关闭</a> 
	</c:if>
			<a
			class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
	</div>
</body>
</html>