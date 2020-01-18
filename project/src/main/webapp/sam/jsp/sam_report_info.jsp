<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<%@include file="/common/quote/jquery.loading.jsp"%>
<%@include file="../../common/quote/jquery.uploadify.html"%>
<script type="text/javascript" src="${base }/sam/js/sam_report_info.js"></script>
<script type="text/javascript" src="${base }/common/My97DatePicker/WdatePicker.js"></script>
<style type="text/css">
ul.ztree {
	border: 1px solid #617775;
	background: #F9FAFB;
	width: 300px;
	height: 360px;
	overflow-y: scroll;
	overflow-x: auto;
}
</style>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="west" border="false" style="width: 430px; padding: 8px; overflow: hidden;">
			<form id="sriForm"  method="post">
				<table style="font-size: 12px; width: 420px;" cellpadding="3" border="0">
					<tr>
						<td style="width: 70px;">机构：<input type="hidden" id="bankOrganNoId" name="bankOrganNo" value="">
							<div id="ztree_comboTree_content" style="position: absolute; z-index: 9999; display: none;">
								<ul id="ztree_comboTree_tree" class="ztree"></ul>
							</div>
						</td>
						<td colspan="3"><input type="text" style="width: 250px;cursor: pointer;" id="bankOrganNoText" readonly="readonly" class="required" /></td>
					</tr>
					<tr>
						<td style="width: 80px;">数据日期：</td>
						<td><input type="text" style="width: 80px;" onfocus="WdatePicker({dateFmt:'yyyyMM'})" id="reportDateId" name="reportDate" class="required" /></td>
						<td>报表类型：</td>
						<td><select id="reportTypeId" name="reportType" class="required">
								<option value="">请选择</option>
								<option value="1">月报</option>
								<option value="2">季报</option>
								<option value="3">半年报</option>
								<option value="4">年报</option>
						</select></td>
					</tr>
					<tr>
						<td colspan="4"><div>
								<span style="float: left;">需上传文件列表:</span><span style="color: red; float: right; margin-right: 5px;" id="modelErrorMsgSpan"></span>
							</div>
							<div style="border: 1px solid #6F9FF1; width: 410px;; height: 290px; overflow-x: hidden; overflow-y: scroll; margin-top: 2px;">
								<table id="needModelTable" border="0">
								</table>
							</div></td>
					</tr>
					<tr>
						<td colspan="4" style="text-align: center;"><a id="btnAdd" target="_parent"  class="easyui-linkbutton" target="_parent"  icon="icon-ok" href="javascript:void(0)"> 开始导入</a></td>
					</tr>
				</table>
			</form>
		</div>
		<div region="center" border="false" style="text-align: left; width: 100%; padding: 8px;">
			<div>
				<span style="float: left;">上传文件列表:</span><span style="float: right; margin-right: 5px; cursor: pointer;" id="clearAllData">清空列表</span>
			</div>
			<div style="width: 98%; height: 95%; float: left; border: 1px solid #6F9FF1; overflow-x: hidden; overflow-y: scroll; margin-top: 2px;">
				<input type="hidden" id="iSessionId" value="<%=session.getId()%>"> <input type="file" name="file" id="file_upload" />
			</div>
		</div>
	</div>
</body>
</html>