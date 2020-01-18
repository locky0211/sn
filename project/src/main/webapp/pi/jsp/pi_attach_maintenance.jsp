<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/pi_attach_maintenance.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportImportForm">
		 
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					
				   <td ><label style="font-family: Verdana;">主表名称: </label> <input id="tableCode" name="tableCode" style="width: 200px;" required="true"
						class="mini-combobox" url="${base }/pi/getPiTableInfo.nut" textField="tableName" multiSelect="false"   valueField="tableCode" allowInput="false"
						 showClose="true" />
						&nbsp;&nbsp; <a class="mini-button" iconCls="icon-excel" onclick="search()">查找</a> 
					</td>
					
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportImportGrid" class="mini-datagrid" multiSelect="false" onrowdblclick="showReportView" style="width: 100%; height: 100%" url="${base}/pi/getPiTableInfo.nut"
			showPager="false" allowAlternating="true">
			<div property="columns">
			    <div field="tableCode" width="15" align="center" headerAlign="center">报表代码</div>
				<div field="tableName" width="15" headerAlign="center" align="center">报表名称</div>
				<div field="tableFlag" width="15" align="center" headerAlign="center" renderer="onErrorMsgRenderer">导入状态</div>
				<div field="updateTime"  width="15" align="center" dateFormat="yyyy-MM-dd HH:mm:ss"  headerAlign="center">导入时间</div>
				</div>
		</div>
	</div>
	
</body>
</html>