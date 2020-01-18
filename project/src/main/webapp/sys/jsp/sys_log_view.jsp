<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>日志查看</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_log_view.js"></script>
</head>
<body>
	<div style="width: 100%;"id="checkForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						日志日期:
						<input id="checkDate" class="mini-DatePicker" format="yyyy-MM-dd" style="width: 120px;" onchange="changeDate()">
						<a id="refresh" class="mini-button"  onclick="refresh()">刷新</a>
						<a class="mini-button" iconCls="icon-txt" onclick="downLoadTxt()">下载日志</a>
					</td>
					<td style="white-space: nowrap;">
						<input id="searchField" class="mini-textbox" style="width: 120px;">
						<a id="nextField" class="mini-button" onclick="nextField()">查找</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="logData" style="overflow: scroll;white-space: nowrap;height: 100%;width: 100%"></div>	
	</div>
</body>
</html>