<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>存贷款报文校验</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dl/js/dlReportCheck.js"></script>
<%
	HttpSession Session = request.getSession();
	String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;" id="dlCheckForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						&nbsp;&nbsp;机构:&nbsp;
						<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DL'" 
							style="width: 300px;" parentField="pId" valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" 
							showClose="true" textField="bmName" />
						<span class="separator"></span>
						报表日期:&nbsp;
						<input id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 150px;">
						<span class="separator"></span> 
						表名称:&nbsp;
						<div id="tabCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 130px;" 
							popupWidth="250px" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DL_TABLENAME"
							textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName" style="width:20px"></div>
								<div header="表数据库名称" field="zdValue" style="width:20px"></div>
							</div>
						</div>
						&nbsp;&nbsp;
						<a iconCls="icon-goto" class="mini-button" onclick="excute()">开始校验</a>
						&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
						&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="searchCheckLog()">查看日志</a>
						&nbsp;&nbsp;
						<a class="mini-button" iconCls="icon-excel" onclick="doExportExcel()">导出</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" onrowdblclick="rowdblclick" url="${base}/dl/check/getResultList.nut" pageSize="20" allowCellEdit="true" showPager="true"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="tabCode" width="50" align="center" renderer="onNameRenderer" headerAlign="center">错误表名</div>
				<div field="fieldCode" width="20" align="center" headerAlign="center">错误字段</div>
				<div field="fieldName" width="30" align="center" headerAlign="center">错误字段名</div>
				<div field="number" width="15" align="center" renderer="onColorRenderer" headerAlign="center">错误条数</div>
				<div field="checkDesc" width="70" align="center" headerAlign="center">错误描述</div>
				<div field="checkDate" width="20" align="center" headerAlign="center">检验时间</div>
				<div name="edit" width="50" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>