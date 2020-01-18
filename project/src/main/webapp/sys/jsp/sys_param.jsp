<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>参数配置</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_param.js"></script>

</head>
<body>
	<div style="width: 100%;"id="checkForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<a iconCls="icon-goto" class="mini-button" plain="true" onclick="addParam()">新增参数</a>
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/param/getSysParamList.nut" pageSize="10" allowCellEdit="true" showPager="true"
			idField="id" showModified="false" showLoading="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="30" headerAlign="center">序号</div>
				<div field="paramName" name="paramName" align="center" width="120" headerAlign="center">参数中文名称</div>
				<div field="param" name="param" align="center" width="120" headerAlign="center">参数名称</div>
				<div field="paramValue" align="paramValue" width="90" headerAlign="center">参数值</div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<tr>
					<td>
						参数配置修改记录
					</td>
				</tr>
	</div>
	<div id="checkTempGrid" class="mini-datagrid" style="width: 100%; height: 40%;" url="${base}/sys/param/getSysParamRecordList.nut" pageSize="10" allowCellEdit="true" showPager="true"
		showModified="false" showLoading="false">
		<div property="columns">
			<div type="indexcolumn" align="center" width="30" headerAlign="center">序号</div>
			<div field="paramName" name="paramName" align="center" width="150" headerAlign="center">参数中文名称</div>
			<div field="param" name="param" align="center" width="150" headerAlign="center">参数名称</div>
			<div field="originalValue" align="center" width="90" headerAlign="center">原始参数值</div>
			<div field="presentValue" align="center" width="90" headerAlign="center">修改后参数值</div>
			<div field="reason" align="center" width="150" headerAlign="center">修改理由</div>
			<div field="cUser" align="center" width="50" headerAlign="center">修改人</div>
			<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" align="center" width="150" headerAlign="center">修改时间</div>
		</div>
	</div>
	

</body>
</html>