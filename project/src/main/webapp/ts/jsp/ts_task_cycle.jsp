<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>任务周期</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ts/js/ts_task_cycle.js"></script>
</head>
<body>
	<form id="tcForm" method="post" action="${base }/ts/addOrUpdateTaskCycle.nut">
		<input class="mini-hidden" name="id" value="${obj.id}" />
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 90px;" class="tab_label tab_align_r">cron表达式：</td>
					<td class="tab_field_nr"><input id="runExpr" name="runExpr" class="mini-textbox" style="width: 170px;" required="true"
						emptyText="请输入cron表达式" onvalidation="cronExpressionValid" value="${obj.runExpr }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">周期名称：</td>
					<td class="tab_field_nr"><input id="cycleName" name="cycleName" class="mini-textarea" style="width: 250px;" required="true"
						emptyText="周期描述说明" value="${obj.cycleName }" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 18px;">
			<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>