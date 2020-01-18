<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户添加报表管理配置</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/dy_sh/js/dy_user_report_list.js"></script>
<script type="text/javascript">
	var userId = '${param.userId}';
</script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">
					<a iconCls="icon-save" class="mini-button" plain="true" onclick="save()" style="float:right;">保存</a>
				</td>
			</tr>
		</table>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="tableInfoGrid" class="mini-datagrid" allowAlternating="true"  borderStyle="border:0;" multiSelect="true"
			style="width: 100%; height: 100%" url="${base}/dy/sh/table/searchTableNotInUser.nut?userId=${param.userId}" showPager="true" pageSize="20">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" align="center" headerAlign="center">报表名称</div>
				<div field="tabType" width="20" align="center" headerAlign="center" renderer="onRendererType">报表类型</div>
				<div field="versionNo" width="20" align="center" headerAlign="center">版本号</div>
			</div>
		</div>
	</div>
</body>
</html>