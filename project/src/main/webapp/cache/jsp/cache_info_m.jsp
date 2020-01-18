<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>缓存任务信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/cache/js/cache_info_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addRow()">新增</a> <span class="separator"></span><input
						id="beanName" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a><span
						class="separator"></span><a iconCls="icon-start" class="mini-button" onclick="doCacheInit()">执行</a></td>
				</tr>
			</table>
		</div>

	</div>
	<div class="mini-fit">
		<div id="cacheInfoGrid" multiSelect="true" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/cache/getCacheInfoList.nut">
			<div property="columns">
				<div type="checkcolumn" width="20" align="center" headerAlign="center"></div>
				<div field="beanName" width="80" align="center" headerAlign="center">Bean名</div>
				<div field="cacheDes" align="center" headerAlign="center">描述</div>
				<div field="sortNum" width="20" align="center" headerAlign="center">顺序</div>
				<div field="errorMsg" width="80" renderer="onErrorMsgRenderer" align="center" headerAlign="center">处理结果</div>
				<div field="" width="60" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>