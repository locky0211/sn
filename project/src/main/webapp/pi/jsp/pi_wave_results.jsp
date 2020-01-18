<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" import="java.util.*"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
  List<String> list=(List)Session.getAttribute("sessionUserRoleId");
%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/pi_wave_results.js"></script>
</head>
<body>
<div id="reportImportForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<label style="font-family: Verdana;">报表日期: </label><input id="reportDate" name="reportDate" style="width: 120px;" class="mini-monthpicker" format="yyyy-MM" required="true"/>
						&nbsp;&nbsp;指标代码：<input id="quotaCode" name="quotaCode" style="width: 120px;" class="mini-textbox" />
						&nbsp;&nbsp;地区：<input id="areaCode" name="areaCode" style="width: 120px;"  class="mini-combobox" textField="bmName" valueField="bmCode" url="${base }/sys/bm/getSysBmListByBmCategoryIgnoreUserId.nut?bmCategory='PI'"
						required="true" allowInput="false" showClose="true" oncloseclick="onCloseClick"/>
						&nbsp;&nbsp;状态：<input id="confim" name="confim" style="width: 120px;"  class="mini-combobox" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=PISA_CONFIM"
						required="true" allowInput="false" showClose="true" oncloseclick="onCloseClick"/>
						&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
						<%if(list.contains("PI_CHECKER")||list.contains("admin")||list.contains("supeuUser")){%>
							&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="confimPass()">审核通过</a>
							&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="confimError()">审核不通过</a>
							&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-download" onclick="download()">导出报文</a>
						<%}else{%>
							&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="saveRemark()">提交备注</a>
						<%};%>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="piWaveResultsGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/pi/wave/results/getPiWaveResultsByUserRoleAndBm.nut" 
			pageSize="20" showPager="true"  showModified="true" allowCellWrap="true" multiSelect="true"  allowAlternating="true"  allowCellEdit="true" allowCellSelect="true">
			<div property="columns">
				<div type="checkcolumn" width="20" align="center" headerAlign="center"></div>
				<div field="index" width="40" align="center" headerAlign="center">序号</div>
				<div field="quotaName" width="40" align="center" headerAlign="center">指标名称</div>
				<div field="quotaCode" width="40" align="center" headerAlign="center">指标代码</div>
				<div field="latCode" width="40" align="center" headerAlign="center">维度代码</div>
				<div field="areaName" width="40" align="center" headerAlign="center">地区名称</div>
				<div field="value1" width="40" align="center" headerAlign="center">数值1</div>
				<div field="value2" width="40" align="center" headerAlign="center">数值2</div>
				<div field="value1h" width="40" align="center" headerAlign="center">历史数值1</div>
				<div field="value2h" width="40" align="center" headerAlign="center">历史数值2</div>
				<div field="checkExplain" width="60" align="center" headerAlign="center">校验描述</div>
				<div field="errorExplain" width="60" align="center" headerAlign="center">错误描述</div>
				<div field="content" width="100" headerAlign="center" >说明 
				<input property="editor" class="mini-textarea" style="width:100%;"/></div>
				<div field="confim" width="40" headerAlign="center" renderer="onRenderer">状态</div>
			</div>
		</div>
	</div>
</body>
</html>