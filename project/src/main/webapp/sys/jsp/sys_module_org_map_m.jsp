<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>模块机构映射配置</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_module_org_map_m.js"></script>
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
		<div id="moduleOrgGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/moduleOrgMap/getModuleOrgMapList.nut" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="oldModule" width="30" headerAlign="center" align="center" renderer="oldModuleRenderer">原模块</div>
				<div field="oldOrg" width="50" headerAlign="center" align="center" renderer="oldOrgRenderer">原机构</div>
				<div field="newModule"  width="30" headerAlign="center" align="center" renderer="oldModuleRenderer">映射模块</div>
				<div field="newOrg" width="50" headerAlign="center" align="center" renderer="oldOrgRenderer">映射机构</div>
				<div name="action" width="40" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			 </div>
		</div>
	</div>
</body>
</html>