<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表映射管理</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_table_coord_version_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add"  plain="true"   onclick="add()">新增记录</a></td>
				<td style="white-space: nowrap;"><label style="font-family: Verdana;">报表编号: </label> <input id="key" class="mini-textbox"
					onenter="onKeyEnter" /> <a class="mini-button" iconCls="icon-search"   onclick="search()">查询</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="jsDataGrid" class="mini-datagrid" style="width: 100%; height: 100%" url="${base}/rd/tabcoord/getTableCoordinateVersionList.nut" allowAlternating="true" pageSize="20">
			<div property="columns">
				<div field="tabCode" width="60" align="center" headerAlign="center">报表编号</div>
				<div field="oldVersionNo" align="center" headerAlign="center">老版本编号信息</div>
				<div field="oldLocate" align="center" headerAlign="center">老版本定位信息</div>
				<div field="newVersionNo" align="center" headerAlign="center">新版本编号信息</div>
				<div field="newLocate" align="center" headerAlign="center">新版本定位信息</div>
				<div field="fieldName" align="center" headerAlign="center">指标信息</div>
				<div name="action"  width="150"  headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			</div>
		</div>
	</div>
</body>
</html>