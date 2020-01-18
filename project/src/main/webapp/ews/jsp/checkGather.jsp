<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/checkGather.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;"id="checkForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"></span> 表名称：
						<div id="tableCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="350px" allowInput="true" textField="zdName" valueField="zdValue"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=EastTableName">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div> <span class="separator"></span>报表日期:<input id="reportDate" class="mini-DatePicker" format="yyyy-MM-dd" style="width: 150px;"><span class="separator"></span><a iconCls="icon-search"
						class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="excute()">手动汇总</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" onrowdblclick="rowdblclick" url="${base}/check/gather/getGatherList.nut" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="tableCode" width="50" align="left" headerAlign="center">校验表</div>
				<div field="tableName" width="50" align="left" headerAlign="center">校验表名</div>
				<div field="notnullNum" width="25" align="center" headerAlign="center" renderer="onNumberRender">非空校验</div>
				<div field="lengthNum" width="25" align="center" headerAlign="center" renderer="onNumberRender">长度校验错</div>
				<div field="rangeNum" width="25" align="center" headerAlign="center" renderer="onNumberRender">范围校验错</div>
				<div field="valueNum" width="25" align="center" headerAlign="center" renderer="onNumberRender">数值校验错</div>
				<div field="relativeNum" width="25" align="center" headerAlign="center" renderer="onNumberRender">关联校验</div>
				<div field="complexNum" width="25" align="center" headerAlign="center" renderer="onNumberRender">银监校验</div>
				<div field="sjrq" width="30" align="center" headerAlign="center">数据时间</div>

			</div>
		</div>
	</div>
</body>
</html>