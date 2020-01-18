<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>模型分配部门</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="../js/modelConfig.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;"> 
			<tr>
				<td style="width: 100%;">名称: <input id="key" class="mini-textbox" emptyText="请输入模型名称" /> <a class="mini-button" iconCls="icon-search" onclick="search()">查询</a><span class="separator"></span><a class="mini-button" iconCls="icon-add" onclick="addCategroy()">添加分类</a><span class="separator"></span><a class="mini-button" iconCls="icon-add" onclick="addModel()">添加模型</a><span class="separator"></span><a class="mini-button" iconCls="icon-edit" onclick="editModel()">编辑</a><span class="separator"></span><a class="mini-button" iconCls="icon-remove" onclick="delModelOrCategroy()">删除</a>
				</td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="modelfltreegrid" style="width: 100%; height: 100%;" class="mini-treegrid" url="" showTreeIcon="true" treeColumn="name" idField="id" parentField="parent" resultAsTree="false" expandOnLoad="true" expandOnDblClick="true" allowDrag="true" allowDrop="true">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div name="name" field="name">模型名称</div>
				<div width="60" headerAlign="center" align="center" renderer="onActionRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>