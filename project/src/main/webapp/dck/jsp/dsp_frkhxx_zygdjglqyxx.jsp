<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>股东及关联企业</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_zygdjglqyxx.js"></script>
<script type="text/javascript">
	var frkhxxId = '${param.khid}';
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addZygdjglqy()">新增</a> <a class="mini-button"
						iconCls="icon-edit" plain="true" onclick="editZygdjglqy()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
						onclick="deleteZygdjglqy()">删除</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div id="gdjglqyGrid" class="mini-datagrid" style="width: 100%; height: 87%;" url="${base}/zygdjglqy/getZygdjglqyList.nut"
		showPager="false" showModified="false">
		<div property="columns">
			<div type="indexcolumn" align="center" headerAlign="center">序号</div>
			<div field="gllxmc" align="center" headerAlign="center">关联类型</div>
			<div field="gdhglqymc" align="center" headerAlign="center">股东或关联企业名称</div>
			<div field="gdhglqykhdm" align="center" headerAlign="center">股东或关联企业客户代码</div>
			<div field="gdhglqylxmc" align="center" headerAlign="center">股东或关联企业类型</div>
			<div field="djzcdm" align="center" headerAlign="center">登记注册代码</div>
		</div>
	</div>
</body>
</html>