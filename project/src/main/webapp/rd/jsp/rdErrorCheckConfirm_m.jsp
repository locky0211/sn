<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>存档问题</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rdErrorCheckConfirm_m.js"></script>
</head>
<body>
		<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">机构: </label> <input id="organNo" name="organNo" style="width: 200px;" popupHeight="350px;" popupWidth="450px;" 
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						 resultAsTree="false" showClose="true" oncloseclick="onCloseClick" checkRecursive="true"/>&nbsp;&nbsp;
						开始日期:&nbsp;<input id="reportDate" name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM"/> &nbsp;&nbsp;
						结束日期:&nbsp;<input id="endDate" name="endDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM"/> &nbsp;&nbsp;
						审核处室:&nbsp; <input id="blameRoom" name="blameRoom" class="mini-combobox" style="width: 100px;" showClose="true" oncloseclick="onCloseClick"  textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_YGBMGL"/>&nbsp;&nbsp;
						监管认定:&nbsp; <input id="jgFlag" name="jgFlag" class="mini-combobox" textField="jgName" valueField="jgValue" data="[{jgValue:'1',jgName:'同意'},{jgValue:'2',jgName:'不同意'}]" allowInput="false" style="width: 80px;" showClose="true" oncloseclick="onCloseClick" />&nbsp;&nbsp;
						统计认定:&nbsp; <input id="tjFlag" name="tjFlag" class="mini-combobox" textField="tjName" valueField="tjValue" data="[{tjValue:'1',tjName:'同意'},{tjValue:'2',tjName:'不同意'}]" allowInput="false" style="width: 80px;" showClose="true" oncloseclick="onCloseClick" />&nbsp;&nbsp;
						差错来源:&nbsp; <input id="errorSource" name="errorSource" class="mini-combobox" textField="errorName" valueField="errorValue" data="[{errorValue:'1',errorName:'系统'},{errorValue:'2',errorName:'人工录入'}]" allowInput="false" style="width: 80px;" showClose="true" oncloseclick="onCloseClick" />&nbsp;&nbsp;
						<a iconCls="icon-search"
						class="mini-button" onclick="search()">查询</a>&nbsp;&nbsp; <a
						iconCls="icon-reload" class="mini-button" onclick="clear()">重置</a>&nbsp;&nbsp;
					</td>
				</tr>
				<tr>
					<td style="white-space: nowrap;" align="right">
						<a iconCls="icon-download" class="mini-button"
						onclick="exportWord()">导出Word</a>&nbsp;&nbsp; <a
						class="mini-menubutton " id="exportExcelBtn" menu="#popupMenu"
						iconCls="icon-excel">导出..</a>
						<ul id="popupMenu" class="mini-menu" style="display: none;">
							<li iconCls="icon-excel" onclick="exportExcel(true)">导出已勾选数据</li>
							<li iconCls="icon-excel" onclick="exportExcel(false)">导出已查询数据</li>
						</ul></td>
				</tr>
			</table>
		</div>
	</div>	
	
	<div class="mini-fit">
		<div id="errorCheckConfirmGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/rd/error/check/confirm/getAllErrorCheck.nut" pageSize="100" multiSelect="true" >
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div type="indexcolumn" width="12" align="center" headerAlign="center">序号</div>
				<div field="organNo" sortField="organNo" width="35" align="center" headerAlign="center" renderer="onBrNo">机构名称</div>
				<div field="reportDate" sortField="reportDate" width="30" align="center" allowSort="true" headerAlign="center">报表日期</div>
				<div field="reportNoStr" sortField="reportNoStr" width="30" align="center" allowSort="true" headerAlign="center">报表编号</div>
				<div field="reportName" width="40" align="center" headerAlign="center">报表名称</div>
				<div field="blameUser" width="40" align="center" headerAlign="center">审核人</div>
				<!-- <div field="blameRoom" width="40" align="center" headerAlign="center">审核处室</div> -->
				<div field="remark"  width="60" align="center" headerAlign="center" >问题描述</div>
	<!-- 			<div field="errorSource" sortField="errorSource" width="20"  allowSort="true" align="center" headerAlign="center" renderer="errorSourceRenderer">差错来源</div> -->
				<div field="errorMoney" width="20"  align="center" headerAlign="center">差错金额</div>
				<div field="jgFlag" width="32"  align="center" headerAlign="center" renderer="jgRenderer">监管人员认定情况</div>
				<div field="tjFlag" width="32"  align="center" headerAlign="center" renderer="tjRenderer">统计人员认定情况</div>
				
				<div field="updateTime" sortField="updateTime" dateFormat="yyyy-MM-dd HH:mm:ss" width="30" align="center" allowSort="true" headerAlign="center">问题更新时间</div>
				<div width="45" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>