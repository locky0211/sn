<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/uploadEvidence.js"></script>
<script type="text/javascript">
	var flag = "${param.flag}";
</script>
<title>上传证据材料</title>
</head>
<body>
	<div style="width:1000px;height: 800px;">
		<form id="uploadEvidenceForm" method="post">
			<div style="display:none;">
				<input id="id" name="id" class="mini-textbox"
							style="width: 90%"  value="${obj.id}"/>	
			</div>
			<fieldset style="border: solid 1px #aaa;">
				<legend>立案基本信息</legend>
				<table class="tab" style="width: 100%" cellpadding="5">
					<tr>
						<td class="tab_label" style="width: 14%;">机构名称：</td>
						<td class="tab_field_nr" style="width: 34%"><input
							id="organNo" name="organNo" class="mini-textbox"
							style="width: 90%" allowInput="false" value="${obj.organNo}" required="true"/></td>
					</tr>
					<tr>
						<td class="tab_label" style="width: 14%;">案由：</td>
						<td class="tab_field_nr" style="width: 34%"><input id="ay"
							name="ay" class="mini-textbox" style="width: 90%"  value="${obj.ay}" required="true"/> <font color="red">*</font></td>
						<td class="tab_label" style="width: 5%;">立案日期：</td>
						<td class="tab_field_nr" style="width: 34%"><input
							id="laDate" name="laDate" class="mini-datepicker" format="yyyyMMdd"
							allowInput="false" style="width: 90%" value="${obj.laDate}" required="true" oncloseclick="onCloseClick" showClose="true" /> <font color="red">*</font></td>
					</tr>
					<tr>
						<td class="tab_label" style="width: 14%;">处罚决定书下发时间：</td>
						<td class="tab_field_nr" style="width: 34%"><input
							id="cfDate" name="cfDate" style="width: 37%"
							class="mini-datepicker" format="yyyyMMdd" allowInput="false" oncloseclick="onCloseClick" showClose="true" 
							value="${obj.cfDate}" /> <font color="red">请在上传处罚决定书前填写该项！</font></td>
						<td class="tab_label" style="width: 5%;">处罚金额：</td>
						<td class="tab_field_nr" style="width: 34%"><input id="cfMoney"
							name="cfMoney" class="mini-textbox" style="width: 24%"  value="${obj.cfMoney}"/> <font color="red">请在上传处罚决定书前填写该项！</font></td>
					</tr>
				</table>
			</fieldset>
			<fieldset style="border: solid 1px #aaa;">
				<legend>上传证据</legend>
				<div id="evidenceTreeGrid" class="mini-treegrid"
					style="width: 970px; height: 280px;"
					url="${base}/punish/evidence/Info/getPunishEvidences.nut"
					showTreeIcon="true" treeColumn="evidenceName" idField="id"
					parentField="parent" resultAsTree="false" expandOnLoad="true">
					<div property="columns">
						<div type="indexcolumn" width="10"></div>
						<div name="evidenceName" field="evidenceName" width="100" >证据材料</div>
						<div field="isImport" width="30" align="center" headerAlign="center" renderer="importRenderer">导入状态</div>
						<div field="operationTime" width="40" align="center" headerAlign="center" dateFormat="yyyy-MM-dd HH:mm:ss" >操作时间</div>
						<div width="60" renderer="onRenderer" align="center" headerAlign="center">操作</div>
					</div>
				</div>
			</fieldset>
			<div style="text-align: center; padding: 10px;">
				<a class="mini-button" onclick="onConfirm()"
					style="width: 60px; margin-right: 20px;">确定</a> <a
					class="mini-button" onclick="onCancel()" style="width: 60px;">取消</a>
			</div>
		</form>
	</div>

</body>
</html>