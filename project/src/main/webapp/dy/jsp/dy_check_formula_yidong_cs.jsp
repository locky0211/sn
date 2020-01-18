<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>跨期异动公式</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../../js/dy_check_formula_yidong_cs.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${dyFormula.id}" /> <input class="mini-hidden" id="validFlag" name="validFlag"
				value="${dyFormula.validFlag}" />
			<c:if test="${not empty param.cUser}">
				<input class="mini-hidden" id="cUser" name="cUser" value="${param.cUser}" />
			</c:if>
			<c:if test="${empty param.cUser}">
				<input class="mini-hidden" id="cUser" name="cUser" value="${dyFormula.cUser}" />
			</c:if>
		</div>
		<div>
			<table cellpadding="4" cellspacing="4" style="padding-left: 12px;">
				<tr>
					<td>报表代码：</td>
					<td colspan="3"><input id="tabcode" name="tabcode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 650px;"
						value="${dyFormula.tabcode }" /></td>
				</tr>
				<%-- <tr id="typeCombox">
					<td>公式类型：</td>
					<td><input id="type" name="type" class="mini-combobox" required="true" style="width: 150px;" textField="typeName" valueField="typeValue"
						data="[{typeValue:'2',typeName:'异动'}]" value="${rdFormula.type }" allowInput="false" onvaluechanged="whatfuck()" /></td>
				</tr> --%>
				<tr id="type1">
					<td valign="top">校验项目：</td>
					<td colspan="3"><input id="checkProject" name="checkProject" required="true" class="mini-textarea"
						style="width: 650px; height: 50px;" value="${dyFormula.checkProject }" /></td>
				</tr>
				<tr>
					<td>公式定义说明：</td>
					<td>A1:报表指标本期值;A0:报表指标上期值;C0:报表指标去年同期值</td>
				</tr>
			</table>
		</div>
		<div>
			<table id="formulaForm" cellpadding="4" cellspacing="4" style="padding-left: 12px;">
				<tr>
					<td>关注程度</td>
					<td>校验频度</td>
					<td>本期坐标</td>
					<td>上期坐标</td>
					<td>阈值</td>
					<td>本期版本号</td>
					<td>上期版本号</td>
					<td></td>
				</tr>
				<c:forEach var="a" items="${dyFormulas}" varStatus="num">
					<tr id="formula${num.index }">
						<td><input id="id${num.index }" name="id${num.index }" class="mini-hidden"  value="${a.id}"/>
						<input id="checkRisk${num.index }" name="checkRisk${num.index }" class="mini-combobox" style="width: 100px;"  popupWidth="100" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=WAVE_CHECK_RISK" required="true"
						multiSelect="false" value="${a.checkRisk}" allowInput="false" showClose="true" oncloseclick="onCloseClick"/></td>
						<td><input id="reportRate${num.index }" name="reportRate${num.index }" class="mini-combobox" style="width: 100px;"  popupWidth="100" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_YIDONG_FORMULA_TYPE" required="true"
						multiSelect="true" value="${a.reportRate}" allowInput="false" showClose="true" oncloseclick="onCloseClick"/></td>
						<td><input id="element${num.index }" name="element${num.index }" required="true"  class="mini-textbox" onvalidation="checkElement"
						style="width: 100px;" value="${a.element }" /></td>
						<td><input id="lastElement${num.index }" name="lastElement${num.index }" class="mini-textbox" 
						style="width: 100px;" value="${a.lastElement }"></input></td>
						<td><input id="leftValue${num.index }" name="leftValue${num.index }" required="true" onvalidation="isNumber" class="mini-textbox"
						style="width: 50px;" value="${a.leftValue }" />~<input id="rightValue${num.index }" name="rightValue${num.index }" required="true" onvalidation="isNumber" class="mini-textbox"
						style="width: 50px;" value="${a.rightValue }" /></td>
						<td><input id="thisVersion${num.index }" name="thisVersion${num.index }" style="width: 100px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/dy/table/getTableVersionNo.nut?tabCode=${dyFormula.tabcode }" textField="versionNo" multiSelect="false" 
						valueField="versionNo" value="${a.thisVersion}" resultAsTree="false" allowInput="true" expandOnNodeClick="true"/></td>
						<td><input id="lastVersion${num.index }" name="lastVersion${num.index }"  style="width: 100px;" showClose="true" oncloseclick="onCloseClick"
						class="mini-combobox" url="${base }/dy/table/getTableVersionNo.nut?tabCode=${dyFormula.tabcode }" textField="versionNo" multiSelect="false" 
						valueField="versionNo" value="${a.lastVersion}" resultAsTree="false" allowInput="true" expandOnNodeClick="true"/></td>
						<td><a class="mini-button" onclick="delCheckFormula('${num.index }')" style="width: 40px;">删除</a>
							<input class="mini-hidden" id="isDel${num.index }" name="isDel${num.index }" value="0" style="width: 10px;"/></td>
					</tr>
				</c:forEach>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="addCheckFormula()" style="width: 80px; margin-right: 30px;">增加指标</a>
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> 
			<a class="mini-button" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>