<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>指派人员排查</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/modelRiskDesUser.js"></script>
</head>
<body>
	<form id="riskForm" method="post">
		<div style="display: none;">
			<input id="modelRiskId" id="modelRiskId" class="mini-textbox" value="${param.modelRiskId }" />
		</div>
		<div style="height: 100%; padding: 10px">
			<div id="js" style="width: 53%; height: 350px; float: left; padding: 50px 10px 20px 20px">
				<table style="table-layout: fixed;">
					<tr style="height: 35px">
						<td style="width: 70px;">风险问题：</td>
						<td>${param.title }</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
					</tr>
					<tr style="height: 35px">
						<td style="width: 70px;" valign="top">问题描述：</td>
						<td><textarea id="content" name="content" class="mini-textarea" style="width: 90%; height: 60px" /></textarea></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
					</tr>
				</table>
				<div style="text-align: center; padding: 10px;">
					<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
				</div>
			</div>
			<div id="qx" class="mini-panel" title="指派排查人员" style="width: 40%; height: 330px; float: right;" showHeader="true" bodyStyle="padding:10px;">
				<ul id="userTree" class="mini-tree" url="${base }/sys/user/getBmUser.nut" style="width: 100%; padding: 5px;" showTreeIcon="true" textField="name" idField="id" parentField="pId" resultAsTree="false" showCheckBox="true" expandOnLoad="true" enableHotTrack="false">
				</ul>
			</div>
		</div>
	</form>
</body>
</html>