<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>上海跨期异动公式</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/rd/js/rd_check_formula_wave_avg.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" />
		</div>
		<div>
			<table cellpadding="4" cellspacing="4" style="padding-left: 12px;">
				<tr>
					<td>报表代码：</td>
					<td colspan="3">
						<input id="tabcode" name="tabcode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 400px;"
							value="${obj.tabcode }" onvaluechanged="onDeptChanged"/>
						<input id="cUser" name="cUser" class="mini-hidden" value="${obj.cUser }"/>
					</td>
				</tr>
				<tr>
					<td valign="top">校验项目：</td>
					<td colspan="3">
						<input id="checkProject" name="checkProject" required="true" class="mini-textarea"
						style="width: 400px; height: 50px;" value="${obj.checkProject }" />
					</td>
				</tr>
				<tr>
					<td>关注等级：</td>
					<td>
						<input id="checkRisk" name="checkRisk" class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=WAVE_CHECK_RISK" required="true"
							multiSelect="false" value="${obj.checkRisk}" allowInput="false" showClose="true" oncloseclick="onCloseClick" />
					</td>
					<td>类型：</td>
					<td>
						<input id="type" name="type" class="mini-combobox" style="width: 150px;" required="true"
							textField="typeName" valueField="typeValue" data="[{typeValue:'fr',typeName:'法人'},{typeValue:'fz',typeName:'分支'}]" allowInput="false" value="${obj.type}" />
					</td>
				</tr>
				<tr>
					<td>校验频度：</td>
					<td>
						<input id="reportRate" name="reportRate" class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_YIDONG_FORMULA_TYPE" required="true"
							multiSelect="true" value="${obj.reportRate}" allowInput="false" showClose="true" oncloseclick="onCloseClick" />
					</td>
					<td>阈值：</td>
					<td><input id="leftValue" name="leftValue" required="true" class="mini-textbox"
						style="width: 70px;" value="${obj.leftValue }" />~<input id="rightValue" name="rightValue" required="true" class="mini-textbox"
						style="width: 70px;" value="${obj.rightValue }" /></td>
				</tr>
				<tr>
					<td>本期坐标：</td>
					<td colspan="3"><input id="element" name="element" required="true"  class="mini-textarea" onvalidation="checkElement"
						style="width: 400px;" value="${obj.element }" /></td>
				</tr>
				<tr>
					<td>本期版本号：</td>
					<td><input id="thisVersion" name="thisVersion" style="width: 150px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/rd/table/getTableVersionNo.nut?tabCode=${obj.tabcode }" textField="versionNo" multiSelect="false" 
						valueField="versionNo" value="${obj.thisVersion}" resultAsTree="false" allowInput="true" expandOnNodeClick="true"/></td>
					<td>上期版本号：</td>
					<td><input id="lastVersion" name="lastVersion"  style="width: 150px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/rd/table/getTableVersionNo.nut?tabCode=${obj.tabcode }" textField="versionNo" multiSelect="false" 
						valueField="versionNo" value="${obj.lastVersion}" resultAsTree="false" allowInput="true" expandOnNodeClick="true"/></td>
				</tr>
				<tr>
					<td>上期坐标：</td>
					<td colspan="3"><input id="lastElement" name="lastElement" class="mini-textarea" 
						style="width: 400px;" value="${obj.lastElement }"></input></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 5px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>