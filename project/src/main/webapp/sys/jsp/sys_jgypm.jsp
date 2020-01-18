<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>监管员排名</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_jgypm.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;"id="searchForm" >
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">区域:<input id="region" name="region" style="width: 200px;" required="true" class="mini-treeselect"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_USER_ORGAN" textField="zdName" multiSelect="false" parentField="pId" valueField="zdValue"
							resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /><span class="separator"></span>开始日期:<input
						id="startMonths" class="mini-MonthPicker" required="true" format="yyyyMM" style="width: 150px;"><span class="separator"></span>截至日期:<input
						id="endMonths" class="mini-MonthPicker" required="true" format="yyyyMM" onvalidation="endDateValid" style="width: 150px;"><span class="separator"></span><a iconCls="icon-search" class="mini-button"
						plain="true" onclick="search()">查询</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="jgypm" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/sys/jgy/jgypm.nut"  allowCellEdit="true"
			showPager="false" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="35" headerAlign="center">序号</div>
				<div field="months" align="center" width="35" headerAlign="center">月份</div>
				<div field="userId" align="center" width="35" headerAlign="center">监管员ID</div>
				<div field="userName" width="35" align="center" headerAlign="center">监管员姓名</div>
				<div field="score" width="45" align="center" headerAlign="center">得分</div>
			</div>
		</div>
	</div>
</body>
</html>