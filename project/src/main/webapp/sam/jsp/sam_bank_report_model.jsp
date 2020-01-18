<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>机构模板维护</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<%@include file="/common/quote/jquery.loading.jsp"%>
<script type="text/javascript" src="${base }/sam/js/sam_bank_report_model.js"></script>
<link rel="stylesheet" href="${base }/common/css/table.css" type="text/css">
<style type="text/css">
ul.ztree {
	border: 1px solid #617775;
	background: #F9FAFB;
	width: 300px;
	height: 360px;
	overflow-y: scroll;
	overflow-x: auto;
}

.lightRow {
	background-color: #E6EFFE;
	text-align: center;
	cursor: pointer;
}
</style>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 100%; padding: 8px; overflow: auto;">
			<form id="ssForm" action="${base }/sam/sbo/saveBankOrganReportModel">
				机构：<input type="hidden" id="bankOrganNoId" name="bankOrganNo" value="">
				<div id="ztree_comboTree_content" style="position: absolute; z-index: 9999; display: none;">
					<ul id="ztree_comboTree_tree" class="ztree"></ul>
				</div>
				<input type="text" style="width: 200px; cursor: pointer;" id="bankOrganNoText" readonly="readonly" class="required" value="" /><a id="btnSave" target="_parent"  class="easyui-linkbutton" target="_parent" 
					icon="icon-save" href="javascript:void(0)" plain="false" style="margin-left: 20px;">保存</a> <br> <br>报表模板信息列表:
				<table id="reportModelTab" style="width: 100%; margin-top: 10px;" class="sub_table" cellpadding="0" cellspacing="1">
					<thead>
						<tr style="height: 22px;">
							<td class="sub_table_label_td_center" style="width: 80px;"><input type="checkbox" value="" id="checkAll"></td>
							<td class="sub_table_label_td_center" style="width: 100px;">编号</td>
							<td class="sub_table_label_td_center" style="text-align: center;">表名</td>
							<td class="sub_table_label_td_center" style="width: 100px;">报表类型</td>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="srm" items="${srmList}">
							<tr>
								<td class="sub_table_field_td_center"><input type="checkbox" value="${srm.reportNo }" name="reportNoStrs" class="srmCheckBox"></td>
								<td class="sub_table_field_td_center">${srm.reportNo }</td>
								<td class="sub_table_field_td_center">${srm.reportName }</td>
								<td class="sub_table_field_td_center">${srm.reportTypeName }</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</form>
		</div>
	</div>
</body>
</html>