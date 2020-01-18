<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>公共字典信息</title>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_ggzd_m.js"></script>
</head>
<body>
	<div class="mini-splitter" style="width: 100%; height: 100%;">
		<div size="240" showCollapseButton="true">
			<div class="mini-toolbar" style="padding: 2px; border-top: 0; border-left: 0; border-right: 0;">
				<a class="mini-button" iconCls="icon-add" plain="true" onclick="addZu()">新增</a> <span class="separator"></span> <a class="mini-button"
					iconCls="icon-edit" plain="true" onclick="editZu()">编辑</a><span class="separator"></span> <a class="mini-button" plain="true"
					iconCls="icon-remove" onclick="deleteZu()">删除</a>
			</div>
			<div class="mini-fit">
				<ul id="groupTree" class="mini-tree" onnodeclick="onGroupTreeClick" url="${base}/sys/ggzd/getGgzdZuList.nut" style="width: 100%; height: 100%;"
					showTreeIcon="true" parentField="pId" textField="gName" idField="gId" resultAsTree="false" expandOnNodeClick="true">
				</ul>
			</div>
		</div>
		<div>
			<div class="mini-toolbar" borderStyle="border-top:0;border-left:0;border-right:0;" style="padding: 2px; border-bottom: 0;">
				<table style="width: 100%;">
					<tr>
						<td style="width: 100%;"><a class="mini-button" iconCls="icon-add"  plain="true"  onclick="addGgzd()">新增数据</a> <a class="mini-button" plain="true"  iconCls="icon-edit"
							onclick="edit()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"  onclick="ondelete">删除</a> <span class="separator"></span> <a
							class="mini-button" iconCls="icon-save" plain="true"  onclick="doSaveJG()">保存结构</a> <span class="separator"></span> <a class="mini-button"
							iconCls="icon-download" plain="true"  onclick="allExpand">全部展开</a> <a class="mini-button" iconCls="icon-upload" plain="true"  onclick="allCollapse">全部收缩</a></td>
						<td style="white-space: nowrap;"><label style="font-family: Verdana;">名称: </label> <input id="key" class="mini-textbox" emptyText="请输入数据名称" />
							<a class="mini-button" iconCls="icon-search" onclick="search()">查询</a> <a class="mini-button" iconCls="icon-reload" onclick="doCleanCache()">缓存重置</a>


						</td>
					</tr>
				</table>
			</div>
			<div class="mini-fit">
				<div id="ggzdm" class="mini-treegrid" borderStyle="border-bottom:0;border-left:0;border-right:0;" style="width: 100%; height: 100%;"
					url="${base}/sys/ggzd/getGgzdListToDb.nut" showTreeIcon="true" treeColumn="zdName" idField="zdValue" parentField="pId" allowUnselect="true"
					resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true">
					<div property="columns">
						<div type="indexcolumn" headerAlign="center" align="center" width="15">排序</div>
						<div name="zdName" headerAlign="center" field="zdName" width="140px;">数据名称</div>
						<div field="zdValue" headerAlign="center">数据值</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>