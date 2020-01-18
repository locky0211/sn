<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表校验</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<%@include file="/common/quote/jquery.loading.jsp"%>
<script type="text/javascript" src="${base }/sam/js/sam_reg_data.js"></script>
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
<body style="padding: 10px; overflow: auto;background-color: #F8F8F8">
	<form id="srcForm" method="post">
		<div style="float: left;">
			<table border="0">
				<tr>
					<td>机构：<input type="hidden" id="bankOrganNoId" name="organId" value="">
						<div id="ztree_comboTree_content" style="position: absolute; z-index: 9999; display: none;">
							<ul id="ztree_comboTree_tree" class="ztree"></ul>
						</div>
					</td>
					<td><input type="text" style="width: 250px; cursor: pointer;" id="bankOrganNoText" readonly="readonly" class="required" value="" /></td>
					<td>日期：</td>
					<td><input type="text" style="width: 80px;" onfocus="WdatePicker({dateFmt:'yyyyMM'})" id="reportDateId" name="date" class="required" value="" /></td>
					<td>数据类型：</td>
					<td><select id="checkTypeId" name="regType" class="required">
							<option value="">请选择</option>
							<option value="1">月报</option>
							<option value="2">季报</option>
							<option value="3">半年报</option>
							<option value="4">年报</option>
					</select></td>
					<td>&nbsp;&nbsp;<a id="btnAdd" target="_parent" class="easyui-linkbutton" target="_parent" icon="icon-ok" href="javascript:void(0)">生成报告</a>&nbsp;&nbsp;<a id="btnAddRe" target="_parent" class="easyui-linkbutton" target="_parent" icon="icon-ok" href="javascript:void(0)">重新计算生成</a></td>
				</tr>
			</table>
		</div>
		<div style="float: right;">
			<a id="btnExportExcel" style="margin-left: 0px;" target="_parent" class="easyui-linkbutton" target="_parent" icon="icon-excel" href="javascript:void(0)" plain="true">导出报告</a>
		</div>
	</form>
	<iframe frameborder="0" name="myCheckFrame" scrolling="auto" src="" id="checkFrame" width="100%"> </iframe>
	<iframe frameborder="0"  scrolling="auto" src="" id="downFrame" width="100%"> </iframe>
</body>
</html>