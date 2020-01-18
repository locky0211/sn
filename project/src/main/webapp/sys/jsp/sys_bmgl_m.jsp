<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>机构信息管理</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_bmgl_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增机构</a> <span class="separator"></span> <a
					class="mini-button" iconCls="icon-save" plain="true" onclick="doSaveJG()">保存结构</a><span class="separator"></span> &nbsp;&nbsp;<span>机构名称：</span>
					<input id="bmName" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;机构类别：<input id="bmType" class="mini-combobox" style="width: 150px;"
					textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_BM_TYPE" allowInput="false" value="${obj.bmType}" />&nbsp;&nbsp;<a
					class="mini-button" iconCls="icon-search" onclick="search()">搜索</a>
					</div></td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="bmTreeGrid" style="width: 100%; height: 100%;" class="mini-treegrid" url="${base }/sys/bm/getSysBmList.nut" showTreeIcon="true"
			treeColumn="bmName" idField="bmCode" parentField="pId" resultAsTree="false" expandOnLoad="false" expandOnDblClick="true" allowDrag="true"
			allowDrop="true">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div name="bmName" field="bmName">机构名称</div>
				<div field="bmCode" headerAlign="center" align="center" width="60">机构编号</div>
				<div field="bmTypeName" headerAlign="center" align="center" width="60">机构类型</div>
				<div width="40" headerAlign="center" align="center" renderer="onActionRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>