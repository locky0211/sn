<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dckCheckBase.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;" id="dckCheckForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DCK'" style="width: 240px;" parentField="pId"
						valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>报表日期:<input
						id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 150px;"><span class="separator"></span> 表名称：
						<div id="repCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="600px" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DckImportTableName"
							textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" field="zdName" width="80"></div>
								<div header="表数据库名称" width="20" field="zdValue"></div>
							</div>
						</div> <span class="separator"></span> <a iconCls="icon-search"
						class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="excute()">开始校验</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="searchCheckLog()">查看校验日志</a>
						<a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" onrowdblclick="rowdblclick" url="${base}/dck/base/getResultList.nut" pageSize="20" allowCellEdit="true" showPager="true"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="zd_name" width="50" align="center" renderer="onNameRenderer" headerAlign="center">错误表名</div>
				<div field="fieldCode" width="30" align="center" headerAlign="center">错误字段</div>
				<div field="fieldName" width="50" align="center" headerAlign="center">错误字段名</div>
				<div field="number" width="20" align="center" renderer="onColorRenderer" headerAlign="center">错误条数</div>
				<div field="dataNumber" width="20" align="center" headerAlign="center">校验条数</div>
				<div field="checkDesc" width="70" align="center" headerAlign="center">错误描述</div>
				<div field="checkDate" width="20" align="center" headerAlign="center">检验时间</div>
				<div name="edit" width="50" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>