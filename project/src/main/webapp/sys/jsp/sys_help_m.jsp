<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统公告管理</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_help_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add"  plain="true"   onclick="addNotice()">新增帮助</a> <span class="separator"></span>
						<span>模式：</span><input id="schemaType" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;<span>标题：</span> <input id="title"
						class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp; <a
						iconCls="icon-search" class="mini-button"   onclick="search()">查询</a></td>
				</tr>
			</table>
		</div>

	</div>
	<div class="mini-fit">
		<div id="sysNoticeGrid" multiSelect="true" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/help/getSysHelpList.nut">
			<div property="columns">
				<div field="id"  width="0" align="center" headerAlign="center">标题</div>
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="schemaType"  width="20" align="center" headerAlign="center">模式</div>
				<div field="title" align="center" headerAlign="center">标题</div>
				<div width="30" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>