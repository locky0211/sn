<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/ir_create_report.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" 
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='IR'" textField="bmName" multiSelect="false" showFolderCheckBox="false" parentField="pId" valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect"  resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true"/>
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true"  /> &nbsp;&nbsp;报表类型:&nbsp; <input
						id="tabType" name="tabType" class="mini-combobox" style="width: 120px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=IR_TABLE_TAB_TYPE" required="true"
						allowInput="false" /></div> &nbsp;&nbsp; <a class="mini-button" iconCls="icon-upload2" onclick="doCreateReport()">报文生成</a> 
						</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
		<div class="mini-fit">
			<div id="bwjlGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/ir/cReport/getRecordList.nut" pageSize="20" showPager="true"
				showModified="false">
				<div property="columns">
					<div type="indexcolumn" align="center"  width="25" headerAlign="center">序号</div>
					<div field="reportDate" width="40" align="center" headerAlign="center">数据日期</div>
					<div field="reportType" width="35" align="center" renderer="onReportTypeRenderer" headerAlign="center">报表类型</div>
					<div field="brNo" width="60" align="center" renderer="onBrNameRenderer" headerAlign="center">区域名称</div>
					<div field="createDate" width="80" align="center" headerAlign="center">生成时间</div>
					<div field="fileName" width="160" align="center" headerAlign="center">文件名称</div>
					<div field="op" width="60" renderer="onRenderer" align="center" headerAlign="center">操作</div>
				</div>
			</div>
		</div>
</body>
</html>