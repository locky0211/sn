<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>分局统计员处理省局统计员下发的问题</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_report_check_reExamine_fullIn_bz.js"></script>
<script type="text/javascript">
var back = '${param.back}';
</script>
</head>
<body>
		<div style="display: none">
			<div id="fileName" class="mini-textbox"></div>
			<div id="filePath" class="mini-textbox"></div>
		</div>
		<table class="tab" style="width: 100%" cellpadding="5">
		<tr>
			<td class="tab_label" style="width: 16%" align="center">反馈记录：</td>
			<td class="tab_field_nr">
				<input id="id" name="id" class="mini-hidden" style="width: 370px;height:130px;" />  <%-- value="${obj.id }" --%>
				<input id="remarkRecord" name="remarkRecord" class="mini-textarea" style="width: 370px;height:130px;" />   <%-- value="${obj.remarkRecord }" --%>
			</td>
		</tr>
		<tr>
			<td class="tab_label" style="width: 16%" align="center">问题说明：</td>
			<td class="tab_field_nr">
				<input id="remark" name="remark" class="mini-textarea" style="width: 370px;height:50px;" required="true"/>
			</td>
		</tr>
		<c:choose>
			<c:when test="${param.back == 1}">
				<tr>
					<td class="tab_label" style="width: 16%" align="center">附件：</td>
					<td class="tab_field_nr">
						<div id="combobox2" class="mini-combobox" style="width: 370px;"
							popupWidth="300" textField="fileName" valueField="id"
							url="${base}/rd/problemIssued/attached/getAttachedByJGTBY.nut?problemId=${param.problemId}"
							value="0" multiSelect="false" showClose="true">
							<div property="columns">
								<div header="文件名" field="fileName"></div>
								<div header="上传时间" field="operationTime"
									dateFormat="yyyy-MM-dd HH:mm:ss"></div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 16%;">浏览文件:</td>
					<td class="tab_field_nr" style="width: 34%"><input
						id="excelUpload" style="width: 300px;"
						uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload"
						name="file" limitType="*.*"
						flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf"
						uploadOnSelect="true" onuploadsuccess="onUploadsuccess" />
						&nbsp;&nbsp; <a class="mini-button" iconCls="icon-upload2"
						onclick="uploadFile()">上传</a></td>
				</tr>
			</c:when>
		</c:choose>
	</table>
	
	<div style="text-align: center; padding: 10px;">
		<c:choose>
			<c:when test="${param.back == 1}">
				<div style="text-align: center; padding: 10px;">
						<font color="red">附件浏览好后请点击上传按钮，点击上传按钮之后附件不可撤销！！</font><br>
				</div>
				<a class="mini-button" onclick="feedBack()" style="width: 60px; margin-right: 20px;">反馈</a> 
			</c:when>
			<c:otherwise>
				<a class="mini-button" onclick="issued()" style="width: 60px; margin-right: 20px;">下发</a> 
			</c:otherwise>
		</c:choose>
		<a class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
	</div>
</body>
</html>