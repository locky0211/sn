<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_easturl_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" style="width: 300px;" parentField="pId"
						valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="" /><span class="separator"></span> <a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a> <a
						iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="formulaGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/easturl/getEastUrlList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="brNo" width="60" align="center" headerAlign="center" renderer="onBrNo">机构名称</div>
				<div field="brNo" width="60" align="center" headerAlign="center">机构代码</div>
				<div field="driver" width="60" align="center" headerAlign="center">驱动程序</div>
				<div field="urlStr" width="60" align="center" headerAlign="center">数据库地址</div>
				<div field="userName" width="60" align="center" headerAlign="center">数据库用户名</div>
				<div field="password" width="60" align="center" headerAlign="center">数据库用户密码</div>
				<div field="tableSchema" width="60" align="center" headerAlign="center">EAST表模式名</div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>

			</div>
		</div>
	</div>
</body>
</html>