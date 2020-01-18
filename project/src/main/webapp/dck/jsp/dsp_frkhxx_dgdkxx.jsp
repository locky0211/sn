<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>对公贷款明细</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_dgdkxx.js"></script>
<script type="text/javascript">
	var khjtxxId = '${param.khid}';
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addDgdkmx()">新增</a> <a class="mini-button"
						iconCls="icon-edit" plain="true" onclick="editDgdkmx()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true" onclick="delDgdkmx()">删除</a><a
						class="mini-button" iconCls="icon-reload" plain="true" onclick="onFrdkhtxxClick()">刷新</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="frkhdkGrid" class="mini-datagrid" style="width: 100%; height: 92%;" url="${base}/dkmx/getDkmxList.nut" showPager="true"
		showModified="false" allowUnselect="true">
		<div property="columns">
			<div type="indexcolumn" align="center" headerAlign="center">序号</div>
			<div field="sxhm" align="center" headerAlign="center">授信号</div>
			<div field="dkhth" align="center" headerAlign="center">贷款合同号</div>
			<div field="dklxmc" align="center" headerAlign="center">贷款类型</div>
			<div field="dkywzlmc" align="center" headerAlign="center">贷款业务种类</div>
			<div field="jjh" align="center" headerAlign="center">借据号</div>
			<div field="dkye" align="center" headerAlign="center">贷款余额</div>
		</div>
	</div>
</body>
</html>