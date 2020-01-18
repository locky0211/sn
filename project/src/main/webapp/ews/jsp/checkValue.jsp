<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/checkValue.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
  String dateformat = (String)Session.getAttribute("DateFormat");
%>
</head>
<body>
<input type="hidden" id="a" value="<%=dateformat%>"/>
<c:set var="dateformat" value="${sessionScope.DateFormat }"></c:set>
<c:if test="${dateformat =='1'}">
	<div style="width: 100%;"id="checkForm"">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" style="width: 240px;" parentField="pId"
						valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>报表日期:<input
                        id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 120px;">
                        	 <span class="separator"></span>
						公式版本：<input id="version" class="mini-combobox" required="true" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CheckVersion" textField="zdName" valueField="zdValue" showClose="true" oncloseclick="onCloseClick" style="width: 100px;" />
                        <span class="separator"></span> 表名称：
						<div id="repCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="350px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=EastTableName" textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div> <span class="separator"></span><a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button"
						plain="true" onclick="excute()">开始校验</a>
						&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>
						&nbsp;&nbsp; <a iconCls="icon-search" class="mini-button" onclick="searchCheckLog()">查看校验日志</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" onrowdblclick="rowdblclick" url="${base}/check/value/getResultList.nut" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="zd_name" width="70" align="center" renderer="onNameRenderer" headerAlign="center">错误表名</div>
				<div field="fieldCode" width="30" align="center" headerAlign="center">错误字段</div>
				<div field="fieldName" width="50" align="center" headerAlign="center">错误字段名</div>
				<div field="number" width="20" align="center" renderer="onColorRenderer" headerAlign="center">错误条数</div>
				<div field="dataNumber" width="20" align="center" headerAlign="center">校验条数</div>
				<div field="checkDesc" width="100" align="center" headerAlign="center">错误描述</div>
				<div field="checkDate" width="20" align="center" headerAlign="center">校验日期</div>

			</div>
		</div>
	</div>
	</c:if>
	
	<c:if test="${dateformat =='2'}">
	<div style="width: 100%;"id="checkForm"">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" style="width: 240px;" parentField="pId"
						valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>起始日期:<input
						id="startDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 150px;">结束日期:<input
						id="endDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 150px;">
						<span class="separator"></span>
						公式版本：<input id="version" class="mini-combobox" required="true" url="${base}/sys/ggzd/getGgzdList.nut?groupId=CheckVersion" textField="zdName" valueField="zdValue" showClose="true" oncloseclick="onCloseClick" style="width: 100px;" />
						<span class="separator"></span> 表名称：
						<div id="repCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="350px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=EastTableName" textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div> <span class="separator"></span><a iconCls="icon-search" class="mini-button" plain="true" onclick="search_sd()">查询</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button"
						plain="true" onclick="excute_sd()">开始校验</a>
						&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="exportExcel_sd()">导出</a>
						&nbsp;&nbsp; <a iconCls="icon-search" class="mini-button" onclick="searchCheckLog()">查看校验日志</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" onrowdblclick="rowdblclick_sd" url="${base}/check/valuesd/getResultList.nut" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="zd_name" width="70" align="center" renderer="onNameRenderer" headerAlign="center">错误表名</div>
				<div field="fieldCode" width="30" align="center" headerAlign="center">错误字段</div>
				<div field="fieldName" width="50" align="center" headerAlign="center">错误字段名</div>
				<div field="number" width="20" align="center" renderer="onColorRenderer" headerAlign="center">错误条数</div>
				<div field="dataNumber" width="20" align="center" headerAlign="center">校验条数</div>
				<div field="checkDesc" width="100" align="center" headerAlign="center">错误描述</div>
				<div field="checkDate" width="20" align="center" headerAlign="center">校验日期</div>

			</div>
		</div>
	</div>
	</c:if>
</body>
</html>