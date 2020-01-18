<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增指标类型</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_indicators_basic_info.js"></script>
</head>
<body style="overflow: auto">
	<form id="indicatorsBasicInfoForm" method="post">
		<div style="display: none;">
			<input id="id" name="id" class="mini-hidden" value="${obj.id}" /> <input id="cUser" name="cUser" class="mini-hidden" value="${obj.cUser}" /> <input
				id="validFlag" name="validFlag" class="mini-hidden" value="${obj.validFlag}" /> <input id="sortNum" name="sortNum" class="mini-hidden"
				value="${obj.sortNum}" /> <input id="isParent" name="isParent" class="mini-hidden" value="${param.isParent}" /> <input id="iconCls"
				name="iconCls" class="mini-hidden" value="${param.iconCls}" />
		</div>
		<table style="width: 100%" cellpadding="5" cellspacing="0">
			<tr>
				<td style="width: 80px;" class="tab_label">指标名称：</td>
				<td class="tab_field_nr" colspan="3"><input id="indName" name="indName" class="mini-textbox" style="width: 200px;" required="true"
					value="${obj.indName}" /></td>
			</tr>
			<c:if test="${param.isParent=='y'}">
				<tr>
					<td class="tab_label">上级节点：</td>
					<td class="tab_field_nr" colspan="3"><input name="pId" style="width: 220px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-treeselect" url="${base }/dy/indicators/getIndicatorsTypeList.nut" textField="indName" parentField="pId" valueField="id"
						value="${obj.pId}" resultAsTree="false" allowInput="false" expandOnNodeClick="true" /></td>
				</tr>
			</c:if>
			<c:if test="${param.isParent=='n'}">
				<tr>
					<td class="tab_label">是否百分比：</td>
					<td class="tab_field_nr" colspan="3"><input name="isPercent" class="mini-combobox" required="true" style="width: 80px;" textField="zdName"
						valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=COM_YES_NO" value="${obj.isPercent }" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label">指标类型：</td>
					<td class="tab_field" colspan="3"><input name="pId" style="width: 200px;" required="true" class="mini-treeselect"
						url="${base }/dy/indicators/getIndicatorsTypeList.nut" textField="indName" parentField="pId" valueField="id" value="${obj.pId}"
						resultAsTree="false" allowInput="false" expandOnNodeClick="true" /></td>
				</tr>
				<tr>
					<td class="tab_label">指标周期：</td>
					<td class="tab_field_nr" colspan="3"><input id="indType" name="indType" class="mini-combobox" style="width: 100px;" textField="zdName"
						valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_IND_CYCLE" required="true" allowInput="false" value="${obj.indType }" /></td>
				</tr>
				<tr>
					<td class="tab_label">机构类型：</td>
					<td class="tab_field_nr" colspan="3"><input id="indBrType" name="indBrType" class="mini-combobox"
						data="[{id:'法人',text:'法人'},{id:'分支',text:'分支'}]" emptyText="请选择" required="true" value="${obj.indBrType }" /></td>
				</tr>
				<tr>
					<td class="tab_label">上报机构：</td>
					<td class="tab_field_nr" colspan="3"><input name="indOrgans" style="width: 400px;" showClose="true" required="true"
						oncloseclick="onCloseClick" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_BM_TYPE" textField="zdName"
						multiSelect="true" parentField="pId" valueField="zdValue" value="${obj.indOrgans}" resultAsTree="false" allowInput="false"
						expandOnNodeClick="true" /></td>
				</tr>
			</c:if>
		</table>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button"
				onclick="javascript:CloseWindow('cancel')" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>