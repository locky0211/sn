<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表模板管理</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<script type="text/javascript">
	var reportTypeValue = '${obj.reportType}';
	var reportStatusValue = '${obj.reportStatus}';
</script>
<script type="text/javascript" src="${base }/sam/js/sam_report_model_info.js"></script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="west" border="false" style="width: 350px; padding: 8px;">
			<form id="srmForm" action="${base }/sam/srm/saveOrUpdateSamReportModelInfo" method="post">
				<table style="font-size: 12px;" cellpadding="3">
					<tr>
						<td colspan="2" style="text-align: left; height: 40px;">勾选右侧机构,赋予模板应用金融机构</td>
					</tr>
					<tr>
						<td>模板编号：<input type="hidden" id="reportOrgansId" name="reportOrgans" value=""></td>
						<td><input type="text" style="width: 130px" id="reportNoId" name="reportNo" class="required" value="${obj.reportNo }" /></td>
					</tr>
					<tr>
						<td>模板名称：</td>
						<td><input type="text" style="width: 220px" name="reportName" class="required" value="${obj.reportName }" /></td>
					</tr>
					<tr>
						<td>模板类型：</td>
						<td><select id="reportTypeId" name="reportType" class="required">
								<option value="">请选择</option>
								<option value="1">月报</option>
								<option value="2">季报</option>
								<option value="3">半年报</option>
								<option value="4">年报</option>
						</select></td>
					</tr>
					<tr>
						<td>模板数据行：</td>
						<td><input type="text" name="reportRows" class="required" value="${obj.reportRows }" /></td>
					</tr>
					<tr>
						<td>模板数据列：</td>
						<td><input type="text" name="reportCols" class="required" value="${obj.reportCols }" /></td>
					</tr>
					<tr>
						<td>匹配关键字：</td>
						<td><input type="text" style="width: 220px" name="reportNameKeys" class="required" value="${obj.reportNameKeys }" /></td>
					</tr>
					<!-- 
					<tr>
						<td>模板版本：</td>
						<td><select pubDicGroup="report_version" name="reportVersion" allText="请选择" selectValue="${obj.reportVersion }" class="required"></select></td>
					</tr> -->
					<tr>
						<td>模板状态：</td>
						<td><select id="reportStatusId" name="reportStatus" class="required">
								<option value="">请选择</option>
								<option value="1" selected="selected">启用</option>
								<option value="0">停用</option>
						</select></td>
					</tr>
					<tr style="text-align: center;">
						<td colspan="2"><a id="btnAdd" target="_parent" class="easyui-linkbutton" target="_parent" icon="icon-ok" href="javascript:void(0)"> 确定</a> <a class="easyui-linkbutton" target="_parent"
							id="btnCancel" icon="icon-cancel" href="javascript:void(0)">取消</a></td>
					</tr>
				</table>
			</form>
		</div>
		<div region="center" border="false" style="text-align: center; width: 100%; padding: 8px;">
			<div style="width: 98%; height: 93%; float: left; border: 1px solid #6F9FF1; overflow: auto;">
				<ul id="bankOrganTree" class="ztree"></ul>
			</div>
		</div>
	</div>
</body>
</html>