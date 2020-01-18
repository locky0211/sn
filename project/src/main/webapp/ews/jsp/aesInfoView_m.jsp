<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/aesInfoView_m.js"></script>

<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
  String dateformat = (String)Session.getAttribute("DateFormat");
%>

</head>
<body>
<input type="hidden" id="a" value="<%=dateformat%>"/>
<c:set var="dateformat" value="${sessionScope.DateFormat }"></c:set>
	<div style="width: 100%;"id="checkForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" style="width: 240px;" parentField="pId"
                        valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>报表日期:<input
                        id="reportDate" class="mini-DatePicker" format="yyyy-MM-dd" style="width: 120px;"><span class="separator"></span>
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>
						&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>
				</tr>
			</table>
		</div>
	</div>
	
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;"  onrowdblclick="rowdblclick" url="${base}/aes/info/getAesInfoTotal.nut" allowCellEdit="true" showPager="false"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="5%" headerAlign="center">序号</div>
				<div field="dataDate" width="10%" align="center"  headerAlign="center">数据日期</div>
				<div field="jgName" width="15%" align="center" headerAlign="center">机构名</div>
				<div field="impTimeEnd" width="15%" align="center" dateFormat="yyyy-MM-dd HH:mm:ss" headerAlign="center">报送时间</div>
				<div field="bsCount" width="5%" align="center"  headerAlign="center">报送次数</div>
				<div field="expectedRows" width="15%" align="center" headerAlign="center">读取数</div>
				<div field="totalRows" width="15%" align="center" headerAlign="center">入库数</div>
				<div field="jgbm" name="jgbm"></div>
			</div>
		</div>
	</div>

</body>
</html>