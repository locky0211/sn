<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>表外业务明细</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_bwywxx.js"></script>
<script type="text/javascript">
	var khjtxxId = '${param.khid}';
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addBwywmx()">新增</a> <a class="mini-button" iconCls="icon-edit" plain="true" onclick="editBwywmx()">编辑</a>
					<a class="mini-button" iconCls="icon-remove" plain="true" onclick="delBwywmx()">删除</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="bwywmxGrid" class="mini-datagrid" style="width: 100%; height: 92%;" url="${base}/bwyw/getDspBwywmxList.nut" showPager="true" showModified="false">
		<div property="columns">
			<div type="indexcolumn" align="center" headerAlign="center">序号</div>
			<div field="cbyhjgdm" align="center" headerAlign="center">承办银行机构</div>
			<div field="sxhm" align="center" headerAlign="center">授信号</div>
			<div field="bwywlxmc" align="center" headerAlign="center">表外业务类型</div>
			<div field="hth" align="center" headerAlign="center">合同号</div>
			<div field="ywhm" align="center" headerAlign="center">业务号码</div>
			<div field="ywye" align="center" headerAlign="center">业务余额</div>
			<div field="fsrq" align="center" headerAlign="center">发生日期</div>
			<div field="dqrq" align="center" headerAlign="center">到期日期</div>
		</div>
	</div>
</body>
</html>