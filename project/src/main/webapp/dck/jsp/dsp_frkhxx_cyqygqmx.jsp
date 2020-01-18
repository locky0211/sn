<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>持有企业股权明细</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_cyqygqmx.js"></script>
<script type="text/javascript">
	var frkhxxId = '${param.frkhxxId}';
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addCyqygqmx()">新增</a> <a class="mini-button"
					iconCls="icon-edit" plain="true" onclick="editCyqygqmx()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
					onclick="delCyqygqmx()">删除</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="cyqygqmxGrid" class="mini-datagrid" style="width: 100%; height: 92%;" url="${base}/cyqygqmx/getDspCyqygqmxList.nut"
		showPager="true" showModified="false">
		<div property="columns">
			<div type="indexcolumn" align="center" headerAlign="center">序号</div>
			<div field="cyhjgdm" align="center" headerAlign="center">持有行机构</div>
			<div field="sxhm" align="center" headerAlign="center">授信号</div>
			<div field="zmye" align="center" headerAlign="center">账面余额</div>
		</div>
	</div>
</body>
</html>