<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>征信校验</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ci/js/ciReportCheck.js"></script>
</head>
<body>
	<div style="width: 100%;"id="checkForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">报文日期:<input
                        id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 120px;"> <span>表名称：</span>
						<div id="tableName" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 300px;" popupWidth="550px" allowInput="true"
							url="${base}/sys/ggzd/getGgzdList.nut?groupId=CI_TABLENAME" textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName"></div>
								<div header="表数据库名称" field="zdValue"></div>
							</div>
						</div> <a iconCls="icon-search" class="mini-button" plain="true"
						onclick="search()">查询</a>&nbsp;&nbsp;&nbsp;<span class="separator"></span>&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="excute()">开始校验</a>
						<span class="separator"></span>&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>
						&nbsp;&nbsp; <a iconCls="icon-search" class="mini-button" onclick="searchCheckLog()">查看校验日志</a>
						<span class="separator"></span>&nbsp; <a iconCls="icon-addfolder" class="mini-button" plain="true" onclick="isSaveIntoOfficial()">入库</a>
						&nbsp; <a iconCls="icon-search" class="mini-button" onclick="searchTempToOfficialLog()">查看入库日志</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" onrowdblclick="showTableDataView" url="${base}/ci/check/result/getResultList.nut" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="reportDate" width="30" align="center" headerAlign="center">报文日期</div>
				<div name="Name" width="90" align="center" renderer="onTableNameRenderer" headerAlign="center">错误表名称</div>
				<div field="tableName" width="70" align="center"  headerAlign="center">错误表名</div>
				<div field="fieldName" width="40" align="center" headerAlign="center">错误字段名</div>
				<div field="number" width="25" align="center" renderer="onColorRenderer" headerAlign="center">错误条数</div>
				<div field="checkDesc" width="100" align="center" headerAlign="center">错误描述</div>
				<div field="errorCode" width="25" align="center" headerAlign="center">错误代码</div>
				<div field="checkDate" dateFormat="yyyy-MM-dd HH:mm:ss" width="60" align="center" headerAlign="center">校验时间</div>

			</div>
		</div>
	</div>
	
</body>
</html>