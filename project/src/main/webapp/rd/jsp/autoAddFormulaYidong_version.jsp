<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="rdr" uri="../tld/table_report.tld"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/rd/css/rd_table_report.css" rel="stylesheet" type="text/css" />
<link href="${base }/rd/css/rd_table_report_2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${base }/rd/js/autoAddFormulaYidong_version.js"></script>
<title>不同版本批量导入</title>
</head>
<body>
	<div>
		<input id="tabCode" name="tabCode" class="mini-hidden" value="${param.tabCode }"/>
		<input id="tabType" name="tabType" class="mini-hidden" value="${param.tabType }"/>
		<input id="reportDate" name="reportDate" class="mini-hidden" value="${param.reportDate }"/>
		<input id="cUser" name="cUser" class="mini-hidden" value="${param.cUser }">
	</div>
	<div>
		<form id="autoFormula">
			<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
				<tr>
					<td class="tab_label">关注等级：</td>
					<td class="tab_field"><input id="checkRisk" name="checkRisk" class="mini-combobox" required="true" style="width: 180px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=WAVE_CHECK_RISK"  allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label">校验频度：</td>
					<td class="tab_field"><input id="reportRate" name="reportRate" class="mini-combobox" style="width: 180px;"  popupWidth="180" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=RD_YIDONG_FORMULA_TYPE" required="true"
						multiSelect="true" value="${rdFormula.reportRate}" allowInput="false" showClose="true" oncloseclick="onCloseClick" onvaluechanged="typeCodeValid"/></td>
				</tr>
				<tr>
					<td class="tab_label">阈值：</td>
					<td class="tab_field">
						<input id="leftValue" name="leftValue" required="true" onvalidation="isNumber" class="mini-textbox" style="width: 84px;"  />~
						<input id="rightValue" name="rightValue" required="true" onvalidation="isNumber" class="mini-textbox" style="width: 84px;"  />
					</td>
				</tr>
				<tr>
					<td class="tab_label">本期版本号：</td>
					<td class="tab_field"><input id="thisVersion" name="thisVersion" style="width: 180px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/rd/table/getTableVersionNo.nut?tabCode=${param.tabCode }&reportDate=${param.reportDate}" textField="versionNo" multiSelect="false" 
						valueField="versionNo"  resultAsTree="false" allowInput="false" expandOnNodeClick="true" required="true"/></td>
				</tr>
				<tr>
					<td class="tab_label">上期版本号：</td>
					<td class="tab_field"><input id="lastVersion" name="lastVersion" style="width: 180px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/rd/table/getTableVersionNo.nut?tabCode=${param.tabCode }" textField="versionNo" multiSelect="false" 
						valueField="versionNo"  resultAsTree="false" allowInput="false" expandOnNodeClick="true" required="true"/></td>
				</tr>
				<tr>
					<td class="tab_label">适用机构：</td>
					<td class="tab_field"><input id="checkBrno" name="checkBrno" style="width: 180px;" showClose="true" oncloseclick="onCloseClick" style="width: 250px;"  popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" 
						checkRecursive="true" multiSelect="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdAndTabcode.nut?tabcode=${param.tabCode}&reportDate=${param.reportDate}" textField="bmName" multiSelect="false" parentField="pId" 
						valueField="bmCode" resultAsTree="false" allowInput="false"/></td>
				</tr>
				
			</table>
			<table id="formulaForm" cellpadding="4" cellspacing="0" style="width: 100%;">
				<tr>
					<td class="tab_label">本期位置变更指标坐标</td>
					<td class="tab_label">上期指标坐标</td>
					<td class="tab_label">操作</td>
				</tr>
			</table>
			<table id="formulaFormNew" cellpadding="4" cellspacing="0" style="width: 100%;">
				<tr>
					<td class="tab_label">本期新增指标坐标</td>
				</tr>
				<tr>
					<td class="tab_field"><input id="elementNew" name="elementNew" class="mini-textarea" style="width: 390px; height: 60px;"  emptyText="请输入坐标   例：G0100_6_A   多个坐标用,号隔开" onvalidation='checkElementNew'/></td>
				</tr>
				
			</table>
		</form>
	</div>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" onclick="addCheckFormula()" style="width: 80px; margin-right: 30px;">增加坐标</a>
		<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> 
		<a class="mini-button" onclick="onCancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>