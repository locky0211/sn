<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看缺失率</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/checkMissRate.js"></script>

<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>

</head>
<body>
<c:set var="dateformat" value="${sessionScope.DateFormat }"></c:set>
	<div style="width: 100%;"id="checkForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserIdForRd.nut" style="width: 240px;" parentField="pId"
                        valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>报表日期:<input
                        id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 120px;"><span class="separator"></span>
                        <a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>
						&nbsp;&nbsp; <a iconCls="icon-txt" class="mini-button" onclick="backup(1)">全体数据非空校验结果备份</a>
						&nbsp;&nbsp; <a iconCls="icon-txt" class="mini-button" onclick="backup(2)">12年后数据非空校验结果备份</a>
				</tr>
			</table>
		</div>
	</div>
	
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/check/missRate/getResultList.nut" pageSize="20" allowCellEdit="true" showPager="true"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="5%" headerAlign="center">序号</div>
				<div name="zd_name" width="20%" align="center" renderer="onNameRenderer" headerAlign="center">错误表名</div>
				<div field="fieldName" width="20%" align="center" headerAlign="center">错误字段名</div>
				<div header="总体">
					<div property="columns">
						<div field="missRate" width="25%" align="center" headerAlign="center">缺失率</div>	
					</div>
				</div>
				<div header="2012年后">
					<div property="columns">
						<div field="missRate2" width="25%" align="center" headerAlign="center">缺失率</div>
					</div>	
				</div>				
			</div>
		</div>
	</div>


</body>
</html>