<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表展示</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/pi_report_view.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div id="reportViewForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">区域: </label> <input id="bmCode" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='PI'" textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect" resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true"/>
						部门: </label> <input id="bmGl" name="brGl" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='BM_PI'" textField="bmName" multiSelect="false" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect" resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true"/>
						&nbsp;&nbsp;报表日期:&nbsp;<input id="rDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true"/> &nbsp;&nbsp;报送频度:<input
						id="tabType" name="tabType" class="mini-combobox" style="width: 120px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=PI_TABLE_TAB_TYPE" required="true"
						allowInput="false"/>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-search" onclick="gridLoad()">查看</a>
                       </td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="reportViewGrid" class="mini-datagrid" multiSelect="false"  style="width: 100%; height: 100%" url="${base}/pi/getPiSearchTableInfo.nut"
			showPager="false" allowAlternating="true">
			<div property="columns">
			    <div type="indexcolumn" width="5" align="center" headerAlign="center">序号</div>
			    <div field="brNo" width="10" align="center" headerAlign="center" renderer='onBrNo'>区域</div>
			    <div field="brGl" width="10" align="center" headerAlign="center" renderer='onBrGl'>部门</div>
				<div field="tableCode" width="10" align="center" headerAlign="center">报表代码</div>
				<div field="tableName" width="25" headerAlign="center" align="center">报表名称</div>
				<div field="frequentness" width="8" align="center" headerAlign="center" renderer='onFrequentness'>报送频度</div>
				<div field="subNo" width="8" align="center" headerAlign="center">报送日期</div>
				<div field="flag" width="7" align="center" headerAlign="center" renderer='onFlag'>是否导入</div>
				<div field="" width="15" renderer="onRenderer" align="center" headerAlign="center">操作</div>
				</div>
		</div>
	</div>
</body>
</html>