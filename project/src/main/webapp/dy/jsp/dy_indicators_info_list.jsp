<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增指标信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_indicators_info_list.js"></script>
</head>
<body style="overflow: auto;">
	<div style="display: none;">
		<input id="id" name="id" class="mini-hidden" value="${obj.id}" /> <input id="pId" name="pId" class="mini-hidden" value="${param.pId}" />
	</div>
	<div class="mini-toolbar" style="border-top: 0; border-left: 0; border-right: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增公式</a><span class="separator"></span> <a
					class="mini-button" iconCls="icon-edit" plain="true" onclick="edit()">编辑</a><span class="separator"></span> <a class="mini-button"
					iconCls="icon-remove" plain="true" onclick="del()">删除</a></td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="indInfoGrid" class="mini-datagrid"  allowAlternating="true"  borderStyle="border:0;" style="width: 100%; height: 100%"
			url="${base}/dy/indicators/getIndicatorsInfoList.nut?bId=${param.pId}" showPager="false">
			<div property="columns">
				<div field="indDate" width="20" align="center" headerAlign="center">指标版本</div>
				<div field="tabCode" width="40" align="center" headerAlign="center">报表代码</div>
				<div field="indFormula" align="center" headerAlign="center">指标公式</div>
				<div field="startDate" width="20" align="center" headerAlign="center">启用日期</div>
				<div field="endDate" width="20" align="center" headerAlign="center">停用日期</div>
			</div>
		</div>
	</div>
</body>
</html>