<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表模板管理</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.zTree.html"%>
<%@include file="/common/quote/jquery.validate.html"%>
<script type="text/javascript">
	var checkType = '${obj.checkType}';
	var checkStatus = '${obj.checkStatus}';
	var riskLevel = '${obj.riskLevel}';
</script>
<script type="text/javascript" src="${base }/sam/js/sam_report_formulal_info.js"></script>
</head>
<body>
	<div class="easyui-layout" fit="true">
		<div region="west" border="false" style="width: 470px; padding: 8px;">
			<form id="srfForm" action="${base }/sam/srf/saveOrUpdateReportFormulaInfo" method="post">
				<table style="font-size: 12px;" cellpadding="3">
					<tr>
						<td colspan="3">勾选右侧机构,赋予模板应用金融机构</td>
					</tr>
					<tr>
						<td>模板编号：<input type="hidden" name="id" id="formulaId" value="${obj.id }"><input type="hidden" name="formulaOrgans" id="formulaOrgansId" value=""></td>
						<td colspan="3"><input type="text" style="width: 230px" name="reportNoStr" class="required" value="${obj.reportNoStr }" /></td>
					</tr>
					<tr>
						<td>校验类型：</td>
						<td><select id="checkTypeId" name="checkType" class="required">
								<option value="">请选择</option>
								<option value="1">月报</option>
								<option value="2">季报</option>
								<option value="3">半年报</option>
								<option value="4">年报</option>
						</select></td>
						<td>风险等级：</td>
						<td><select id="riskLevelId" name="riskLevel" class="required">
								<option value="">请选择</option>
								<option value="1">数值准确</option>
								<option value="2">敏感关注</option>
						</select></td>
					</tr>
					<tr>
						<td valign="top">校验公式：</td>
						<td colspan="3"><textarea rows="6" cols="45" name="formula" class="required">${obj.formula }</textarea></td>
					</tr>
					<tr>
						<td>容忍波动值：</td>
						<td colspan="3"><input type="text" style="width: 100px" name="deviationValue" value="${obj.deviationValue }" /></td>
					</tr>
					<tr>
						<td>公式状态：</td>
						<td colspan="3"><select id="checkStatusId" name="checkStatus" class="required">
								<option value="">请选择</option>
								<option value="1" selected="selected">启用</option>
								<option value="0">停用</option>
						</select></td>
					</tr>
					<tr>
						<td valign="top">备注说明：</td>
						<td colspan="3"><textarea rows="4" cols="45" name="checkRemark">${obj.checkRemark }</textarea></td>
					</tr>
					<tr style="text-align: center; height: 60px;">
						<td colspan="4"><a id="btnAdd" target="_parent" class="easyui-linkbutton" target="_parent" icon="icon-ok" href="javascript:void(0)"> 确定</a> <a class="easyui-linkbutton" target="_parent"
							id="btnCancel" icon="icon-cancel" href="javascript:void(0)">取消</a></td>
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