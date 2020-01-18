<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>跨期异动公式</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_check_formula_yidong.js"></script>
<script>
$(function() {
	mini.get("type").setValue("2");
});
</script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${rdFormula.id}" /> <input class="mini-hidden" id="validFlag" name="validFlag"
				value="${rdFormula.validFlag}" />
			<c:if test="${not empty param.cUser}">
				<input class="mini-hidden" id="cUser" name="cUser" value="${param.cUser}" />
			</c:if>
			<c:if test="${empty param.cUser}">
				<input class="mini-hidden" id="cUser" name="cUser" value="${rdFormula.cUser}" />
			</c:if>
		</div>
		<div>
			<table cellpadding="4" cellspacing="4" style="padding-left: 12px;">
				<tr>
					<td>报表代码：</td>
					<td colspan="3"><input id="tabcode" name="tabcode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 400px;"
						value="${rdFormula.tabcode }" onvaluechanged="onDeptChanged"/></td>
				</tr>
				<tr id="typeCombox">
					<td>公式类型：</td>
					<td><input id="type" name="type" class="mini-combobox" required="true" style="width: 150px;" textField="typeName" valueField="typeValue"
						data="[{typeValue:'2',typeName:'异动'}]" value="${rdFormula.type }" allowInput="false" onvaluechanged="whatfuck()" /></td>
				</tr>
				<tr>
					<td valign="top">校验项目：</td>
					<td colspan="3"><input id="checkProject" name="checkProject" required="true" class="mini-textarea"
						style="width: 400px; height: 50px;" value="${rdFormula.checkProject }" /></td>
				</tr>
				<tr>
					<td>风险等级：</td>
					<td><input id="checkRisk" name="checkRisk"  class="mini-combobox" required="true" style="width: 150px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_CHECK_RISK" value="${rdFormula.checkRisk }" allowInput="false" /></td>
				</tr>
				<tr>
					<td>校验频度</td>
					<td><input id="reportRate" name="reportRate" class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_YIDONG_FORMULA_TYPE" required="true"
						multiSelect="true" value="${rdFormula.reportRate}" allowInput="false" showClose="true" oncloseclick="onCloseClick" /></td>
					<td>阈值：</td>
					<td><input id="leftValue" name="leftValue" required="true" onvalidation="isNumber" class="mini-textbox"
						style="width: 70px;" value="${rdFormula.leftValue }" />~<input id="rightValue" name="rightValue" required="true" onvalidation="isNumber" class="mini-textbox"
						style="width: 70px;" value="${rdFormula.rightValue }" /></td>
				</tr>
				<tr>
					<td>本期坐标：</td>
					<td colspan="3"><input id="element" name="element" required="true"  class="mini-textarea" onvalidation="checkElement"
						style="width: 400px;" value="${rdFormula.element }" /></td>
				</tr>
				<tr>
					<td>本期版本号：</td>
					<td><input id="startDate" name="startDate" style="width: 150px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/rd/table/getTableVersionNo.nut?tabCode=${rdFormula.tabcode }" textField="versionNo" multiSelect="false" 
						valueField="versionNo" value="${rdFormula.startDate}" resultAsTree="false" allowInput="true" expandOnNodeClick="true"/></td>
					<td>上期版本号：</td>
					<td><input id="endDate" name="endDate"  style="width: 150px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/rd/table/getTableVersionNo.nut?tabCode=${rdFormula.tabcode }" textField="versionNo" multiSelect="false" 
						valueField="versionNo" value="${rdFormula.endDate}" resultAsTree="false" allowInput="true" expandOnNodeClick="true"/></td>
				</tr>
				<tr>
					<td>上期坐标：</td>
					<td colspan="3"><input id="lastElement" name="lastElement" class="mini-textarea" 
						style="width: 400px;" value="${rdFormula.lastElement }"></input></td>
				</tr>
				<tr>
					<td>校验范围: </td>
					<td><input id="checkArea" name="checkArea" class="mini-combobox" required="true" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=CHECK_AREA"
						style="width: 150px;" value="${rdFormula.checkArea }" allowInput="false" /></td>
					<td>适用机构: </td>
					<td><input id="checkBrno" name="checkBrno" style="width: 150px;" showClose="true" oncloseclick="onCloseClick" style="width: 250px;"  popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" 
						checkRecursive="true" multiSelect="false" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="false" parentField="pId" 
						valueField="bmCode" resultAsTree="false" allowInput="false"  value="${rdFormula.checkBrno}" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>