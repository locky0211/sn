<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>填写说及上传相关文件材料</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_deal_problem_upload_file_nj.js"></script>
<script type="text/javascript">
	var isOrgReporter = "${param.isOrgReporter}";
	var userRole='${sessionUserRoleId}';
	var isOrgReporter = '${param.isOrgReporter}';
	var confirmError = '${param.confirmError}';
	var formula = '${param.formula}';
	var problemCell = '${param.problemCell}';
	var checkType = '${param.checkType}';
	var reportDate = '${param.reportDate}';
	var state = '${param.state}';
	var errorLevelBz = '${param.errorLevelBz}';
</script>
</head>
<body>
	<div style="display: none">
		<div id="fileName" class="mini-textbox"></div>
		<div id="filePath" class="mini-textbox"></div>
		<div id="problemId" class="mini-textbox"></div>
		<div id="isAgree" class="mini-textbox" ></div>
		<div id="reExamine" class="mini-textbox"></div>
	</div>
		<table class="tab" style="width: 100%" cellpadding="5">
		<tr>
			<td class="tab_label" style="width: 18%" align="left">反馈记录：</td>
			<td class="tab_field_nr">
				<input id="remarkRecord" name="remarkRecord" class="mini-textarea" style="width: 370px;height:130px;"/>
			</td>
		</tr>
		<c:if test="${param.isOrgReporter == '1' && param.confirmError}">
			<tr>
			<td class="tab_label" style="width: 18%" align="left">错误单元格：</td>
			<td class="tab_field_nr">
				<div id="errorCeilValue" class="mini-combobox" style="width:370px;"
    					textField="text" valueField="id" required="true">
				</div>
			</td>
		</tr>
		</c:if>
		<c:if test="${param.state == 'C3' || param.state == 'R3' || (param.state == 'P5' && param.errorLevelBz == 'L')}">
			<tr>
			<td class="tab_label" style="width: 18%" align="left">错误等级：</td>
			<td class="tab_field_nr">
				<div id="errorLevel" name="errorLevel" class="mini-combobox" style="width:370px;"
    					textField="zdName" valueField="zdValue" url="${base}/sys/ggzd/getGgzdList.nut?groupId=ERRORLEVEL" required="true" allowInput="false">
				</div>
			</td>
			</tr>
		</c:if>
		<tr>
			<td class="tab_label" style="width: 18%" align="left">问题说明：</td>
			<td class="tab_field_nr">
				<input id="remark" name="remark" class="mini-textarea" style="width: 370px;height:50px;" required="true"/>
			</td>
		</tr>
		<tr>
			<td class="tab_label" style="width: 18%" align="left">附件：</td>
			<td class="tab_field_nr" style="width: 100%; ">
				<div id="combobox2" class="mini-combobox" style="width: 96%;"
					popupWidth="360" textField="fileName" valueField="id"
					url="${base}/rd/problemIssued/attached/getAttachedByJGTBY.nut?problemId=${param.problemId}"
					value="0" multiSelect="false" showClose="true" >
					<div property="columns">
						<div header="文件名" field="fileName"></div>
						<div header="上传时间" field="operationTime"
							dateFormat="yyyy-MM-dd HH:mm:ss"></div>
					</div>
				</div>
			</td>
		</tr>
		<c:if test="${param.isOrgReporter == '1'}">
		<tr>
			<td class="tab_label" style="width: 18%;" align="left">浏览文件:</td>
			<td class="tab_field_nr" style="width: 32%">
			<input id="excelUpload"  style="width: 300px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.*"
					flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess"/> &nbsp;&nbsp;
					<a class="mini-button" iconCls="icon-upload2" onclick="uploadFile()">上传</a>
					</td>
		</tr>
		</c:if>
	</table>
	
	<div style="text-align: center; padding: 10px;">
		<c:choose>
			<c:when test="${param.isOrgReporter == '1'}">
				<div style="text-align: center; padding: 10px;">
					<font color="red">附件浏览好后请点击上传按钮，点击上传按钮之后附件不可撤销！！</font><br>
				</div>
			</c:when>
			<c:otherwise>
				<div style="text-align: center; padding: 10px;">
					<font color="red">浏览附件后请选择需要下载的文件，点击下载按钮！！</font><br>
				</div>
			</c:otherwise>
		</c:choose>
		<a class="mini-button" onclick="confirmDealProblem()" style="width: 60px; margin-right: 20px;">确定</a> 
		<c:choose>
			<c:when test="${param.isOrgReporter != '1'}">
				<a class="mini-button" onclick="downLoadFile()"
					style="width: 60px; margin-right: 20px;">下载</a> 
			</c:when>
		</c:choose>
		<a class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
	</div>
	
</body>
</html>