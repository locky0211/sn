<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>监管指标维护</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<script type="text/javascript">
	var regType = '${obj.regType}';
	var isPercentage = '${obj.isPercentage}';
</script>
<script type="text/javascript" src="${base }/sam/js/sam_reg_info.js"></script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="west" border="false" style="width: 450px; padding: 8px; overflow: hidden;">
			<form id="sriForm" action="${base }/reg/saveOrUpdateSamRegIndexInfo" method="post">
				<table style="font-size: 12px; width: 100%;" cellpadding="3" border="0">
					<tr>
						<td style="width: 70px;">指标名称：<input type="hidden" id="regId" name="id" value="${obj.id }"><input type="hidden" id="regOrgansId" name="regOrgans" value="">
						</td>
						<td colspan="3"><input type="text" style="width: 250px;" name="regName" value="${obj.regName }" class="required" /></td>
					</tr>
					<tr>
						<td style="width: 80px;">关联报表：</td>
						<td style="width: 220px;"><input type="text" style="width: 180px;" name="regTables" class="required" value="${obj.regTables }" /></td>
					</tr>
					<tr>
						<td style="width: 60px;">指标类型：</td>
						<td><select id="regTypeId" name="regType" class="required">
								<option value="">请选择</option>
								<option value="1">月度</option>
								<option value="2">季度</option>
								<option value="3">半年</option>
								<option value="4">年度</option>
						</select></td>
					</tr>
					<tr>
						<td valign="top">指标公式：</td>
						<td><textarea rows="8" cols="45" name="regIndex" class="required">${obj.regIndex }</textarea></td>
					</tr>
					<tr>
						<td valign="top">显示为百分比：</td>
						<td><select id="IsPercentageId" name="isPercentage" class="required">
								<option value="">请选择</option>
								<option value="1">是</option>
								<option value="0">否</option>
						</select></td>
					</tr>
					<tr>
						<td valign="top">排序：</td>
						<td><input type="text" style="width: 80px;" name="sortNum" class="required" value="${obj.sortNum }" /></td>
					</tr>
					<tr>
						<td colspan="2" style="text-align: center;"><a id="btnAdd" target="_parent" class="easyui-linkbutton" target="_parent" icon="icon-ok" href="javascript:void(0)"> 确定</a> <a
							class="easyui-linkbutton" target="_parent" id="btnCancel" icon="icon-cancel" href="javascript:void(0)">取消</a></td>
					</tr>
				</table>
			</form>
		</div>
		<div region="center" border="false" style="text-align: center; width: 100%; padding: 8px;">
			<div style="width: 98%; height: 93%; float: left; border: 1px solid #6F9FF1; overflow: auto;">
				<ul id="bankOrganTree" class="ztree"></ul>
			</div>
		</div>
	</div>
</body>
</html>