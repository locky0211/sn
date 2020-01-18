<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>卸数配置</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_ftpConfig_m.js"></script>
<script type="text/javascript">
	var userId = '${sessionUser.userId}';
</script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">
				    <a class="mini-button" iconCls="icon-add" plain="true" onclick="addRow()">添加Ftp配置</a>
				</td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="ftpDataGrid" class="mini-datagrid"  style="width: 100%; height: 100%;" url="${base}/ftpConfig/getFtpConfigList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="ftpName" align="left" headerAlign="center" width="86">名称</div>
				<div field="ftpUrl" align="left" headerAlign="center">FTP地址</div>
				<div field="ftpPort" align="left" headerAlign="center">FTP端口号</div>
				<div field="ftpPath" align="left" headerAlign="center">FTP目录</div>
				<div field="ftpLoginName" align="left" headerAlign="center">FTP用户名</div>
				<div field="ftpPwd" align="left" headerAlign="center">FTP密码</div>
				<div field="ftpExplain" align="left" headerAlign="center">FTP用途</div>
				<div field="status" width="50" allowSort="true" renderer="onStatusRenderer" align="center" headerAlign="center">状态</div>
				<div width="100" allowSort="true" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>