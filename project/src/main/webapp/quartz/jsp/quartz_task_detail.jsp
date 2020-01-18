<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>任务周期管理</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<script type="text/javascript" src="${base }/quartz/js/quartz_task_detail.js"></script>
<script type="text/javascript" src="${base }/common/js/util/sys_pub_dic.js"></script>
<script type="text/javascript">
	var cycleId = '${obj.cycleId}';
	var flag = '${obj.flag}';
</script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="center" border="false" style="width: 350px; padding: 8px;">
			<form id="quartzForm" action="${base }/quartz/saveOrUpdateTaskDetail" method="post">
				<table style="font-size: 12px; width: 100%" cellpadding="5" border="0">
					<tr>
						<td>任务名称：</td>
						<td><input type="text" name="taskName" style="width: 180px;" class="required" value="${obj.taskName }" /></td>
					</tr>
					<tr>
						<td style="width: 80px">任务周期：</td>
						<td><input type="hidden" name="id" value="${obj.id }" /> <select class="required" name="cycleId" id="cycleId" ajaxUrl="quartz/getTaskCycleListForSelect"></select></td>
					</tr>
					<tr>
						<td>任务类型：</td>
						<td><select name="taskType" id="taskType" class="required" pubDicGroup="q_type" allText="请选择" selectValue="${obj.taskType }"></select>&nbsp;&nbsp;<span id="typeSpan"
							style="color: red; font-size: 12px;"></span></td>
					</tr>
					<tr>
						<td valign="top">执行内容：</td>
						<td><textarea name="taskCommand" rows="9" cols="65" class="required">${obj.taskCommand }</textarea></td>
					</tr>

					<tr>
						<td>执行顺序：</td>
						<td><input type="text" name="taskIndex" style="width: 80px;" class="{required:true,digits:true}" value="${obj.taskIndex }" /></td>
					</tr>
					<tr>
						<td>任务状态：</td>
						<td><select name="flag" id="flagId"><option value="1">启动</option>
								<option value="0">停用</option></select></td>
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