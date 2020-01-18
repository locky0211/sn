<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>指标信息维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var uId = '${sessionUser.userId}';
</script>
<script type="text/javascript" src="../js/dy_indicators_info_m.js"></script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><c:if test="${sessionUser.userId=='admin'}">
						<a class="mini-button" iconCls="icon-add" plain="true" onclick="addIndicatorsBasicInfo()">新增风险类别</a>
						<span class="separator"></span>
					</c:if> <a class="mini-button" iconCls="icon-add" plain="true" onclick="addIndicatorsInfo()">新增指标信息</a><span class="separator"></span> <a
					class="mini-button" iconCls="icon-edit" plain="true" onclick="update()">编辑</a><span class="separator"></span> <a class="mini-button"
					iconCls="icon-remove" plain="true" onclick="del()">删除</a><span class="separator"></span> <a class="mini-button" iconCls="icon-save" plain="true"
					onclick="saveDataRowSort()">保存结构</a> <a class="mini-button" iconCls="icon-down" plain="true" onclick="exTree('up')">展开</a> <a class="mini-button"
					iconCls="icon-up" plain="true" onclick="exTree('down')">收起</a></td>
				<td style="white-space: nowrap;"><label style="font-family: Verdana;">指标名称: </label> <input id="indName" class="mini-textbox" />&nbsp;&nbsp;<a
					class="mini-button" iconCls="icon-search" onclick="search()">查询</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="indicatorsInfoGrid" style="width: 100%; height: 100%;" class="mini-treegrid" url="${base}/dy/indicators/getIndicatorsBasicInfoList.nut"
			expandOnLoad="false" showTreeIcon="true" treeColumn="indName" idField="id" parentField="pId" resultAsTree="false" allowDrag="true" allowDrop="true"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="indName" name="indName" headerAlign="center">指标名称</div>
				<div field="isPercent" width="15" align="center" headerAlign="center" renderer="onPcRenderer">是否百分比</div>
				<div field="indType" width="10" align="center" headerAlign="center" renderer="onIndTypeRenderer">指标周期</div>
				<div field="cUser" width="10" align="center" headerAlign="center" renderer="onCURenderer">指标类型</div>
				<div field="validFlag" align="center" width="10" headerAlign="center" renderer="onStatusRenderer">启用状态</div>
				<div name="action" headerAlign="center" width="30" align="center" renderer="onRenderer">操作</div>
			</div>
		</div>
	</div>
</body>
</html>