<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>贷款汇总配置</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dl/js/dlReportSummaryLOEdit.js"></script>
</head>
<body>
	<form id="editForm">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" />
		</div>
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" colspan="4" style="width: 100%; text-align: center">存款报文数据</td>
				<td class="tab_label_nr" colspan="4" style="width: 100%; text-align: center">大集中报表数据</td>
			</tr>
			<tr>
				<td class="tab_label">类别编码</td>
				<td class="tab_field" colspan="3">
					<input class="mini-textbox" required="true" id="typeCode" name="typeCode" value="${obj.typeCode}" style="width: 100%" />
				</td>
				<td class="tab_label">指标编码</td>
				<td class="tab_field_nr" colspan="3">
					<input class="mini-textbox" id="bfCode" name="bfCode" value="${obj.bfCode}" style="width: 100%" />
				</td>
			</tr>
			<tr>
				<td class="tab_label">类别名称</td>
				<td class="tab_field" colspan="3">
					<input class="mini-textbox" id="typeName" name="typeName" value="${obj.typeName}" style="width: 100%" />
				</td>
				<td class="tab_label">指标名称</td>
				<td class="tab_field_nr" colspan="3">
					<input class="mini-textbox" id="bfName" name="bfName" value="${obj.bfName}" style="width: 100%" />
				</td>
			</tr>
			<tr>
				<td class="tab_label">是否合计项</td>
				<td class="tab_field" colspan="3">
					<input id="isSum" name="isSum" class="mini-combobox" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DL_SUMMARY_ISSUM" 
						style="width: 100%" value="${obj.isSum}" required="true" textField="zdName" valueField="zdValue" oncloseclick="onCloseClick" showClose="true" />
				</td>
				<td class="tab_label">报表编号</td>
				<td class="tab_field_nr" colspan="3">
					<input class="mini-textbox" id="bfTabCode" name="bfTabCode" value="${obj.bfTabCode}" style="width: 100%" />
				</td>
			</tr>
			<tr>
				<td class="tab_label_nr" colspan="8" style="text-align: center">余额取数语句</td>
			</tr>
			<tr>
				<td class="tab_field_nr" colspan="8" style="height: 45px; text-align: center">
					<input class="mini-textarea" required="true" id="balSql" name="balSql" value="${obj.balSql}" style="width: 100%; height: 100%" />
				</td>
			</tr>
			<tr>
				<td class="tab_label_nr" colspan="8" style="text-align: center">发放额取数语句</td>
			</tr>
			<tr>
				<td class="tab_field_nr" colspan="8" style="height: 45px; text-align: center">
					<input class="mini-textarea" required="true" id="grSql" name="grSql" value="${obj.grSql}" style="width: 100%; height: 100%" />
				</td>
			</tr>
			<tr>
				<td class="tab_label_nr" colspan="8" style="text-align: center">回收额取数语句</td>
			</tr>
			<tr>
				<td class="tab_field_nr" colspan="8" style="height: 45px; text-align: center">
					<input class="mini-textarea" required="true" id="reSql" name="reSql" value="${obj.reSql}" style="width: 100%; height: 100%" />
				</td>
			</tr>
		</table>
	</form>
	<div style="text-align: center; margin-top: 15px;">
		<a class="mini-button" onclick="onSave" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> 
		<a class="mini-button" onclick="onCancel" style="width: 60px; margin-right: 10px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>