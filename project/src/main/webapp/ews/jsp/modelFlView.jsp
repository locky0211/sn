<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>模型分类</title>
<%@include file="/common/quote/boot.html"%>
<link rel="stylesheet" href="${base }/css/portal.css" type="text/css">
<script type="text/javascript" src="../js/modelFlView.js"></script>
</head>
<body>
	<div class="mini-splitter" style="width: 100%; height: 100%;">
		<div size="300" showCollapseButton="true">
			<div class="mini-toolbar" style="padding: 2px; border-top: 0; border-left: 0; border-right: 0;">
				<table style="width: 100%;">
					<tr>
						<td style="width: 100%;">名称: <input id="key" class="mini-textbox" emptyText="请输入模型名称" /> <a class="mini-button" iconCls="icon-search"
							onclick="search()">查询</a> <a class="mini-button" iconCls="icon-reload" onclick="Refresh">刷新</a>
						</td>
					</tr>
				</table>
			</div>
			<div class="mini-fit">
				<ul id="modelfltreegrid" class="mini-tree" style="width: 100%; padding: 5px;" showTreeIcon="true" textField="name" idField="id" value="base"
					expandOnNodeClick="true" resultAsTree="true" onnodeclick="onTreeClick">
				</ul>
			</div>
		</div>
		<div>
			<div class="mini-toolbar" style="padding: 2px; border-top: 0; border-left: 0; border-right: 0;">
				<table style="width: 100%;">
					<tr>
						<td style="width: 100%;"><input id="modelId" /> <a class="mini-button" iconCls="icon-search" onclick="getModelDesc">模型解读</a></td>
					</tr>
				</table>
			</div>
			<div class="mini-fit">
				<div id="modelfldatagrid" class="mini-datagrid" borderStyle="border-bottom:0;border-left:0;border-right:0;border-top:0;"
					style="width: 100%; height: 100%;" url="" showReloadButton="false">
					<div property="columns">
						<div type="indexcolumn" align="center" headerAlign="center">序号</div>
						<div field="modelName" align="center" headerAlign="center" width="160">任务</div>
						<div field="desc" align="center" headerAlign="center">描述</div>
						<div field="startTime" align="center" headerAlign="center">开始时间</div>
						<div renderer="onRenderer" align="center" headerAlign="center">状态</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>