<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增提示单与警示单</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript"
	src="../js/rd_error_record_warn_detail.js"></script>
<script src="${base }/common/js/miniui/swfupload/swfupload.js"
	type="text/javascript"></script>

</head>
<body style="overflow: auto">
	<form id="promptWarnForm" method="post">
		<div style="display: none">
			<input id="filePath" name="filePath" class="mini-textbox"
				style="width: 90%" value="${obj.filePath}" /> <input id="fileName"
				name="fileName" class="mini-textbox" style="width: 90%"
				value="${obj.filePath}" /> <input id="fileType" name="fileType"
				class="mini-textbox" style="width: 90%" value="${param.fileType}" />
		</div>
		<div>
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td>机构：</td>
					<td colspan="3"><input id="organNo" name="organNo"
						style="width: 395px;" showClose="true" required="true"
						oncloseclick="onCloseClick" class="mini-treeselect"
						url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName"
						parentField="pId" valueField="bmCode" resultAsTree="false"
						allowInput="false" expandOnNodeClick="true" onbeforenodeselect="beforenodeselect" value="${obj.organNo}" />
				</tr>
				<tr>
					<td>报表名称：</td>
					<td colspan="3"><input id="reportName"
							name="reportName" class="mini-combobox" showNullItem="true"
							required="true" allowInput="true" textField="zdName"
							valueField="zdValue"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_REPORT_TABLE"
							style="width: 395px;" <%--  value="${obj.reportName}" --%>
							onvaluechanged="onReportNameChanged" /> </td>
				</tr>
				<tr>
					<td>报表编号：</td>
					<td><input id="reportNoStr" name="reportNoStr"
						class="mini-textbox" style="width: 150px"
						value="${obj.reportNoStr}" required="true"/></td>

					<td>下发时间期：</td>
					<td><input id="issuedTime" name="issuedTime"
						style="width: 150px" class="mini-datepicker" format="yyyyMMdd"
						value="${obj.issuedTime}" required="true"/></td>
				</tr>
				<tr>
					<td>提示单文件：</td>
					<td colspan="3"><input style="width: 220px;"
						uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload"
						name="file" limitType="*.*"
						flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf"
						uploadOnSelect="true" onuploadsuccess="onUploadsuccess" required="true"/></td>
				</tr>
			</table>
		</div>

		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()"
				style="width: 60px; margin-right: 20px;">确定</a> <a
				class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>