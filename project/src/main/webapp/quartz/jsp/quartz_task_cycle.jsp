<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>任务周期管理</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<script type="text/javascript" src="${base }/quartz/js/quartz_task_cycle.js"></script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 350px; padding: 8px;">
			<form id="quartzForm" action="${base }/quartz/saveOrUpdateTaskCycle" method="post">
				<table style="font-size: 12px;" cellpadding="5">
					<tr>
						<td>周期名称：</td>
						<td><input type="hidden" name="id" value="${obj.id }" /><input type="text" style="width: 220px;" name="cycleName" class="required" value="${obj.cycleName }" /></td>
					</tr>
					<tr>
						<td>周期表达式：</td>
						<td><input type="text" name="runExpr" style="width: 180px;" class="{required:true,remote:'${base }/quartz/checkRunExper',messages:{remote:'格式错误!'}}" value="${obj.runExpr }" /></td>
					</tr>
					<tr style="text-align: center;">
						<td colspan="2"><a id="btnAdd" target="_parent"  class="easyui-linkbutton" target="_parent"  icon="icon-ok" href="javascript:void(0)"> 确定</a> <a  class="easyui-linkbutton" target="_parent"  id="btnCancel" icon="icon-cancel"
							href="javascript:void(0)">取消</a></td>
					</tr>
				</table>
			</form>
		</div>
	</div>
</body>
</html>