<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>存档详细问题查看</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rdErrorCheckConfirm.js"></script>
<!-- <script type="text/javascript">
var errorSource = "${obj.errorSource}";
var jgFlag = "${obj.jgFlag}";
var tjFlag = "${obj.tjFlag}";
var tbFlag = "${obj.tbFlag}";
var deblocFlag = "${obj.deblocFlag}";
</script> -->
</head>
<body style="overflow: auto">
	<form id="saveFileForm" method="post">
			<table class="tab" style="width: 100%" cellpadding="5">
			<tr>
				<td class="tab_label" style="width: 16%;">报表编号：</td>
				<td class="tab_field_nr" style="width: 34%"><input
					id="reportNoStr" name="reportNoStr" class="mini-textbox" style="width: 90%"
					allowInput="false" value="${obj.reportNoStr}" /></td>
				<td class="tab_label" style="width: 16%;">报表名称：</td>
				<td class="tab_field_nr" style="width: 34%"><input
					id="reportName" name="reportName" class="mini-textbox" style="width: 90%"
					allowInput="false" value="${obj.reportName}" /></td>
			</tr>

			<tr>
					<td class="tab_label" style="width:16%;">报表频度：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="tabType" name="tabType" style="width: 90%"
						class="mini-textbox" allowInput="false"
						/></td>
					<td class="tab_label" style="width:16%;">报表日期：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="reportDate" name="reportDate" style="width: 90%"
						class="mini-datepicker"  format="yyyyMM" allowInput="false"
						value="${obj.reportDate}" /></td>
				</tr>

				<tr>
					<td class="tab_label" style="width:16%;">机构名称：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="organNo" name="tabType" class="mini-textbox"
						 allowInput="false" value="${obj.organNo}" style="width: 90%"/></td>
					<td class="tab_label" style="width:16%;">发现人：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="cUser" name="cUser"
						class="mini-textbox"  
						allowInput="false" value="${obj.cUser}" style="width: 90%"/></td>
				</tr>

				<tr>
					<td class="tab_label" style="width:16%;">差错金额：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="errorMoney" name="errorMoney" class="mini-textbox"
						style="width: 90%" allowInput="false" value="${obj.errorMoney}" /></td>
					<td class="tab_label" style="width:16%;">差错来源：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="errorSource" name="errorSource"
						class="mini-textbox" style="width: 90%" allowInput="false"
						value="" /></td>
				</tr>
				
				<tr>
					<td class="tab_label" style="width:16%;">审核人员：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="blameUser" name="blameUser" class="mini-textbox"
						style="width: 90%" allowInput="false" value="${obj.blameUser}" /></td>
					<td class="tab_label" style="width:16%;">审核处室：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="blameRoom" name="blameRoom"
						class="mini-textbox" style="width: 90%" allowInput="false"
						 /></td>
				</tr>

				<tr>
					<td class="tab_label" style="width:16%;">问题描述：</td>
					<td class="tab_field_nr" colspan="3"><input id="remark" name="remark" class="mini-textarea"
						style="width: 96%;height: 100px;" allowInput="false" value="${obj.remark}" /></td>
				</tr>

				<tr>
					<td class="tab_label" style="width:16%;">监管认定情况：</td>
					<td class="tab_field_nr" colspan="3"><input id="jgFlag" name="jgFlag" class="mini-textbox"
						style="width: 200px;" allowInput="false"  /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width:16%;">监管人员认定<br>理由：</td>
					<td class="tab_field_nr" colspan="3"><input id="jgReason" name="jgReason"
						class="mini-textarea" style="width: 96%;height: 100px;" allowInput="false"
						value="${obj.jgReason}" /></td>
				</tr>
				
				<tr>
					<td class="tab_label" style="width:16%;">统计认定情况：</td>
					<td class="tab_field_nr" colspan="3"><input id="tjFlag" name="tjFlag" class="mini-textbox"
						style="width: 200px;" allowInput="false"  /></td>
				</tr>
				<tr>
					<td class="tab_label" style="width:16%;">统计人员认定<br>理由：</td>
					<td class="tab_field_nr" colspan="3"><input id="tjReason" name="tjReason"
						class="mini-textarea" style="width: 96%;height: 100px;" allowInput="false"
						value="${obj.tjReason}" /></td>
				</tr>

				<tr>
					<td class="tab_label" style="width:16%;">是否通报：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="tbFlag" name="tbFlag" class="mini-textbox"
						style="width: 90%" allowInput="false"  /></td>
					<td class="tab_label" style="width:16%;">是否解锁重报：</td>
					<td class="tab_field_nr" style="width: 34%"><input id="deblocFlag" name="deblocFlag"
						class="mini-textbox" style="width: 90%;" allowInput="false"
						 /></td>
				</tr>

				<tr>
					<td class="tab_label" style="width:16%;">其他监管措施：</td>
					<td class="tab_field_nr" colspan="3"><input id="otherMeasures" name="otherMeasures" class="mini-textarea"
						style="width: 96%;height: 100px;" value="${obj.otherMeasures}" /></td>
				</tr>
			</table>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="confirm()"
				style="width: 60px; margin-right: 20px;">确定</a> <a
				class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>