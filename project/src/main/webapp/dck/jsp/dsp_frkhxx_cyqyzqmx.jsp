<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>持有企业债券明细</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_cyqyzqmx.js"></script>
<script type="text/javascript">
	var frkhxxId = '${param.frkhxxId}';
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addCyqyzqmx()">新增</a> <a class="mini-button"
					iconCls="icon-edit" plain="true" onclick="editCyqyzqmx()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
					onclick="delCyqyzqmx()">删除</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="cyqyzqmxGrid" class="mini-datagrid" style="width: 100%; height: 92%;" url="${base}/cyqyzqmx/getDspCyqyzqmxList.nut"
		showPager="true" showModified="false">
		<div property="columns">
			<div type="indexcolumn" align="center" headerAlign="center">序号</div>
			<div field="cyhjgmc" align="center" headerAlign="center">持有行机构</div>
			<div field="sxhm" align="center" headerAlign="center">授信号</div>
			<div field="zqlxmc" align="center" headerAlign="center">债券类型</div>
			<div field="zqdm" align="center" headerAlign="center">债券代码</div>
			<div field="zqmz" align="center" headerAlign="center">债券面值</div>
			<div field="zmye" align="center" headerAlign="center">账面余额</div>
			<div field="fxrq" align="center" headerAlign="center">发行日期</div>
			<div field="dqdfrq" align="center" headerAlign="center">到期兑付日期</div>
		</div>
	</div>
</body>
</html>