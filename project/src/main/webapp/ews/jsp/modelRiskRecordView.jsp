<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看排查进度</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/modelRiskRecordView.js"></script>
</head>
<body>
	<div style="width: 100%; text-align: center;">
		<br> <span class="tab_head">风险问题排查</span><br> <br>
	</div>
	<table class="tab" style="width: 90%; font-size: 12px; border-left: 1px solid #99BBE8; border-top: 1px solid #99BBE8; border-right: 1px solid #99BBE8;" cellpadding="6" cellspacing="0">
		<colgroup>
			<col style="width: 120px"></col>
			<col></col>
			<col style="width: 120px"></col>
			<col></col>
		</colgroup>
		<tr>
			<td class="tab_label">标题</td>
			<td class="tab_field_nr" colspan="3">${obj.title }</td>
		</tr>
		<tr>
			<td class="tab_label">排查进度</td>
			<td class="tab_field_nr" colspan="3">${obj.status }</td>
		</tr>
		<tr>
			<td class="tab_label">模型执行人</td>
			<td class="tab_field">${obj.createUser }</td>
			<td class="tab_label">执行日期</td>
			<td class="tab_field_nr">${obj.createDate }</td>
		</tr>
		<tr>
			<td class="tab_label">问题指派人</td>
			<td class="tab_field">${obj.orderUser }</td>
			<td class="tab_label">指派日期</td>
			<td class="tab_field_nr">${obj.orderDate }</td>
		</tr>
		<tr>
			<td class="tab_label">指派给</td>
			<td class="tab_field_nr" colspan="3">${obj.designateUser }</td>
		</tr>
	</table>
	<br>
	<div style="width: 100%; text-align: center;">
	 	<span class="tab_head">问题追踪</span><br> <br>
	</div>
	<div style="width: 90%; height: 250px; margin: auto;">
		<div class="mini-fit">
			<div id="riskRecordGrid" class="mini-datagrid" allowDrag="true" defaultRowHeight="28" style="width: 100%; height: 200px" url="${base }/modelRisk/getRiskRecordList.nut?modelRiskId=${obj.id}" allowResize="false" showPager="false">
				<div property="columns">
					<div type="indexcolumn" width="5" align="center" headerAlign="center">序号</div>
					<div field="content" align="center" headerAlign="center" width="60">内容</div>
					<div field="recordUserName" align="center" headerAlign="center" width="15">登记人</div>
					<div field="recordDate" align="center" headerAlign="center" width="15" dateFormat="yyyy-MM-dd HH:mm:ss">登记日期</div>
				</div>
			</div>
		</div>
	</div>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="CloseWindow('cancel')" iconCls="icon-cancel" style="width: 60px;">关闭</a>
	</div>
	<br>
</body>
</html>