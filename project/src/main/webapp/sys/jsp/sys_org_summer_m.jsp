<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>机构汇总配置展示</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_org_summer_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增</a>
					&nbsp;&nbsp;<span class="separator"></span>
					汇总机构：
					<input id="sumOrg" class="mini-combobox" style="width: 300px;" textField="sumName" valueField="sumCode" 
						url="${base }/sys/orgSummer/findAllSumOrg.nut" allowInput="false" showClose="true" oncloseclick="onCloseClick" />
					&nbsp;&nbsp;
					<a class="mini-button" iconCls="icon-search" onclick="search()">搜索</a>
				</td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="orgSummerGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/orgSummer/getOrgSummerList.nut" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="sumCode" width="50" headerAlign="center" align="center" renderer="orgRenderer">汇总机构</div>
				<div field="subCode" width="50" headerAlign="center" align="center" renderer="orgRenderer">子机构</div>
				<div name="action" width="30" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			 </div>
		</div>
	</div>
</body>
</html>