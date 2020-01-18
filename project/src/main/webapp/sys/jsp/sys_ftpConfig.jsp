<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/sys/js/sys_ftpConfig.js"></script>
<script type="text/javascript">
	var OPStatus = '${param.OPStatus}';
	var ftpNameOld = '${obj.ftpName}'
</script>
<title>新增ftp配置</title>
</head>
<body>
	<form id="form" method="post">
		<input class="mini-hidden" id="OPStatus" name="OPStatus" value="${param.OPStatus}">
		<input class="mini-hidden" id="id" name="id" value="${param.id}">
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">				
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">名称：</td>
					<td class="tab_field_nr" colspan="3"><input id="ftpName" name="ftpName" class="mini-textbox" style="width: 100%;"  onvalidation="valueIsOnly"  required="true" emptyText="请设置ftp名称"
						value="${obj.ftpName }" /></td>
				</tr>
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">FTP地址：</td>
					<td class="tab_field_nr" colspan="3"><input id="ftpUrl" name="ftpUrl" class="mini-textbox" style="width: 100%;" required="true" emptyText="FTP地址"
						value="${obj.ftpUrl }" /></td>
				</tr>
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">FTP端口号：</td>
					<td class="tab_field_nr" colspan="3"><input id="ftpPort" name="ftpPort" class="mini-textbox" style="width: 100%;" required="true" emptyText="FTP端口号"
						value="${obj.ftpPort}" /></td>
				</tr>
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">FTP目录：</td>
					<td class="tab_field_nr" colspan="3"><input id="ftpPath" name="ftpPath" class="mini-textbox" style="width: 100%;" required="true" emptyText="FTP目录"
						value="${obj.ftpPath }" /></td>
				</tr>
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">FTP用户名：</td>
					<td class="tab_field_nr" colspan="3"><input id="ftpLoginName" name="ftpLoginName" class="mini-textbox" style="width: 100%;" required="true" emptyText="请输入FTP用户名"
						value="${obj.ftpLoginName }" /></td>
				</tr>
				<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">FTP密码：</td>
					<td class="tab_field_nr" colspan="3"><input id="ftpPwd" name="ftpPwd" class="mini-textbox" style="width: 100%;" required="true" emptyText="请输入FTP密码"
						value="${obj.ftpPwd }" /></td>
				</tr>
								<tr>
					<td style="width: 20%;" class="tab_label tab_align_r">FTP说明：</td>
					<td class="tab_field_nr" colspan="3"><input id="ftpExplain" name="ftpExplain" class="mini-textarea" style="width: 100%;" emptyText="请填写此配置用途"
						value="${obj.ftpExplain }" /></td>
				</tr>
				
			</table>
		</div>
		<div style="text-align: center; padding: 18px;">
			<a class="mini-button" onclick="add();" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>