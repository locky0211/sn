<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>风险知识库管理</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="../js/riskBase.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addFolder()">新增文件夹</a><span class="separator"></span><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增风险知识</a><span class="separator"></span>名称: <input id="title" class="mini-textbox" emptyText="请输入模型名称" /> <a class="mini-button" iconCls="icon-search" onclick="search()">查询</a>
				</td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="riskbaseTreegrid" style="width: 100%; height: 100%;" class="mini-treegrid" url="${base }/riskBase/getRiskBaseList.nut" showTreeIcon="true" treeColumn="title" idField="id" parentField="pId" resultAsTree="false" expandOnLoad="true" expandOnDblClick="true" allowDrag="true" allowDrop="true">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div name="title" field="title">风险名称</div>
				<div width="40" headerAlign="center" align="center" renderer="onActionRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>