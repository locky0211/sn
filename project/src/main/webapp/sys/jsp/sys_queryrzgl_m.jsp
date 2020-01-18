<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>日志信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_queryrzgl_m.js"></script>
<script type="text/javascript">
	
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">关联用户：<input id="rzYh" class="mini-textbox" style="width: 120px;" />&nbsp;&nbsp;日志日期：<input id="rzDate"  class="mini-datepicker" style="width: 100px;"  format="yyyyMMdd" />&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" plain="true"
						onclick="search()">查询</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="queryRzGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/table/query/getQueryRzgl.nut" pageSize="20" showPager="true"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="30" align="center" headerAlign="center">序号</div>
				<div field="rzYh" width="70" align="center" headerAlign="center">关联用户</div>
				<div field="rzNr" width="200" align="center" headerAlign="center">日志内容</div>
				<div field="rzDate" width="100" dateFormat="yyyy-MM-dd HH:mm:ss"  align="center" headerAlign="center">执行日期</div>
			</div>
		</div>
	</div>
</body>
</html>