<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>配置预校验使用时间</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_user_check_time_m.js"></script>
</head>
<body>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;">
					用户姓名:&nbsp;&nbsp;<input id="keyName" name="keyName" class="mini-textbox" style="width: 150px;" />&nbsp;
					用户账号:&nbsp;&nbsp;<input id="keyId" name="keyId"
					class="mini-textbox" style="width: 150px;"/> <a iconCls="icon-search" class="mini-button" onclick="search()">查询</a></td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="userCheckTime" class="mini-datagrid"  allowAlternating="true"  style="width: 100%; height: 100%;" url="${base}/check/time/getUserCheclTimeList.nut" pageSize="80" onrowdblclick="showColumnInfoView">
			<div property="columns">
				<div field="userId" align="center" headerAlign="center" width="86">用户帐号</div>
				<div field="userName" align="center" headerAlign="center">用户姓名</div>
				<div field="beforeCheckTime" align="center" headerAlign="center" format="yyyy-mm-dd">到期日期</div>
			</div>
		</div>
	</div>
</body>
</html>