<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>系统操作手册配置</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_manual_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="manualGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/manual/getSysManualList.nut" allowCellEdit="true"
			 showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="manualId" width="30" headerAlign="center" align="center">模块ID</div>
				<div field="manualName" width="30" headerAlign="center" align="center">模块名称</div>
				<div field="manualUrl"  width="80" headerAlign="center" align="center">URL</div>
				<div field="status" width="10" headerAlign="center" align="center" renderer="onValidRenderer">状态</div>
				<div name="action" width="50" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			 </div>
		</div>
	</div>
</body>
</html>