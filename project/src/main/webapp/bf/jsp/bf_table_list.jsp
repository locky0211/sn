<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>批量导入公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../../bf/js/bf_table_list.js"></script>
</head>
<body>
	<div id="tableListForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td>日期：</td>
					<td><input id="reportDate" name="reportDate" class="mini-Datepicker" style="width: 150px;" format="yyyyMMdd" onvaluechanged="getList()" /> 
					<td>校验频度:</td>
					<td><input id="rate" name="rate" class="mini-combobox" style="width: 150px;"  popupWidth="150" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=BF_YIDONG_FORMULA_TYPE" required="true"
						multiSelect="true"  allowInput="false" showClose="true" oncloseclick="onCloseClick" /></td>
				</tr>
				<tr>
					<td>阈值：</td>
					<td><input id="leftValue" name="leftValue" required="true" class="mini-textbox"
						style="width: 90px;" />~<input id="rightValue" name="rightValue" required="true"  class="mini-textbox"
						style="width: 90px;" /></td>
					<td></td>	
					<td><a class="mini-button" iconCls="icon-excel" onclick="doInsert()">开始生成公式</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="tableListGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="showReportView" style="width: 100%; height: 100%"
			url="${base}/bf/table/getRdTableInfoListByReportDate.nut" showPager="false"  allowAlternating="true" >
			<div property="columns" >
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" headerAlign="center">报表名称</div>
				<div field="tabType" headerAlign="center">报表类型</div>
			</div>
		</div>
	</div>
</body>
</html>