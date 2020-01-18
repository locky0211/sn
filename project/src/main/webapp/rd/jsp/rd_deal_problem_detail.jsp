<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>问题详情查看</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/rd/js/rd_deal_problem_detail.js"></script>
<script type="text/javascript">
	var isOrgReporter = "${param.isOrgReporter}";
	var userRole='${sessionUserRoleId}';
	var checkType = '${param.checkType}';
</script>
</head>
<body style="overflow: auto"> 
	<form id="promptWarnForm" method="post">
		<div>
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td class="tab_label" style="width: 16%" align="center">报表编号：</td>
					<td class="tab_field_nr" style="width: 34%">
						<input id="reportNoStr" name="reportNoStr" class="mini-textbox" style="width: 90%; " value="${obj.reportNoStr }" readonly="readonly"/>
					</td>
					<td class="tab_label" style="width: 16%" align="center">报表日期：</td>
					<td class="tab_field_nr"  style="width: 34%">
						<input id="reportDate" name="reportDate" class="mini-monthpicker" format="yyyyMM" value="${obj.reportDate }" style="width: 90%; " readonly="readonly"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 16%" align="center">报表名称：</td>
					<td class="tab_field_nr" colspan="3" style="width: 100%; ">
						<input id="reportName" name="reportName" class="mini-textbox" style="width: 96%; " value="${obj.reportName }" readonly="readonly"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 16%" align="center">机构：</td>
					<td class="tab_field_nr" colspan="3" style="width: 100%; ">
						<input id="organNo" name="organNo" class="mini-textbox" style="width: 96%; " value="${obj.organNo }" readonly="readonly"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 16%" align="center">报表类型：</td>
					<td class="tab_field_nr" style="width: 34%">
						<input id="tabType" name="tabType" class="mini-textbox" style="width: 90%; " value="${obj.tabType }" readonly="readonly"/>
					</td>
					<td class="tab_label" style="width: 16%" align="center">校验类型：</td>
					<td class="tab_field_nr" style="width: 34%">
						<input id="checkType" name="checkType" class="mini-textbox" value="${obj.checkType }" style="width: 90%; " readonly="readonly"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 16%" align="center">审核类型：</td>
					<td class="tab_field_nr" style="width: 34%">
						<input id="reExamine" name="reExamine" class="mini-textbox" style="width: 90%; " value="${obj.reExamine }" readonly="readonly"/>
					</td>
					<c:if test="${param.checkType == '0'}">
						<td class="tab_label" style="width: 16%" align="center">差值：</td>
							<td class="tab_field_nr" style="width: 34%">
							<input id="diffValue" name="diffValue" class="mini-textbox" value="${obj.diffValue }" style="width: 90%; " readonly="readonly"/>
						</td>
					</c:if>
					<c:if test="${param.checkType == '1'}">
						<td class="tab_label" style="width: 16%" align="center">波动差：</td>
							<td class="tab_field_nr" style="width: 34%">
							<input id="diffValue" name="diffValue" class="mini-textbox" value="${obj.diffValue }" style="width: 90%; " readonly="readonly"/>
						</td>
					</c:if>
				</tr>
				<tr>
					<td class="tab_label" style="width: 16%" align="center">反馈记录：</td>
					<td class="tab_field_nr" colspan="3" style="width: 100%; ">
						<input id="remarkRecord" name="remarkRecord" class="mini-textarea" style="width: 96%;height:130px;" value="${obj.remarkRecord }" readonly="readonly"/>
					</td>
				</tr>
				<c:if test="${param.isOrgReporter != '1'}">
				<tr>
					<td class="tab_label" style="width: 16%" align="center">附件：</td>
					<td class="tab_field_nr" style="width: 100%; " colspan="3">
						<div id="combobox2" class="mini-combobox" style="width: 96%;"
							popupWidth="420" textField="fileName" valueField="id"
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
				</c:if>
			</table>
		</div>
	
		<c:if test="${param.isOrgReporter != '1'}">
			<div style="text-align: center; padding: 10px;">
				<font color="red">浏览附件后请选择需要下载的文件，点击下载按钮！！</font><br>
			</div>
		</c:if>
	
		<div style="text-align: center; padding: 10px;">
		<c:if test="${param.isOrgReporter != '1'}">
				<a class="mini-button" onclick="downLoadFile()"
					style="width: 60px; margin-right: 20px;">下载</a> 
		</c:if>
			<a class="mini-button" onclick="onCancel()" style="width: 60px;">关闭</a>
		</div>
	</form>
</body>
</html>