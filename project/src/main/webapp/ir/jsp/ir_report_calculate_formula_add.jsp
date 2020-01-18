<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>校验公式维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ir_report_calculate_formula_add.js"></script>
</head>
<body style="overflow: auto;">
	<form id="checkformulaForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> <input class="mini-hidden" id="formulaStatus" name="formulaStatus"
				value="${obj.formulaStatus}" />
		</div>
		<div>
			<table style="width: 100%; height: 20px;" cellpadding="4" cellspacing="0" class="tab">
				
				<tr>
					<td class="tab_label">报表代码：</td>
					<td class="tab_field_nr"><input id="tabcode" name="tabcode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 127px;"
						value="${obj.tabcode }" /></td>
					<td class="tab_label">报表版本号：</td>
					<td class="tab_field_nr"> <input id="versionNo" name="versionNo" class="mini-combobox" style="width: 125px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=IR_VERSION_NO" required="true" allowInput="false" value="${tInfo.versionNo}" /></td>
				</tr>
				<tr>
					<td class="tab_label">计算目标：</td>
					<td class="tab_field_nr"><input id="calAim" name="calAim" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 127px;"
						value="${obj.calAim }" /></td>
					<td class="tab_label">计算顺序：</td>
					<td class="tab_field_nr"><input id="calOrder" name="calOrder" class="mini-textbox" required="true"  onchange="isincludSpace" value="${obj.calOrder }"
						 style="width: 125px;" /></td>
				</tr>
				
				<tr>
					<td valign="top" class="tab_label">计算公式：</td>
					<td colspan="3" class="tab_field_nr"><input id="calFormula" name="calFormula" required="true"  class="mini-textarea"
						style="width: 412px; height: 100px;" value="${obj.calFormula }" /></td>
				</tr>
				
				 
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>