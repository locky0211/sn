<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>客户风险往期对比</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dckReportCompare.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
<script>
var brNo ='${param.brNo}'
var reportDate = '${param.reportDate}'
</script>

</head>
<body>
	<div id="dckCompareForm">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;"> 机构: </label> <input id="brNo" showClose="true" oncloseclick="onCloseClick"
						name="brNo" style="width: 250px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" 
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DCK'" value="<%= brno%>" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /> &nbsp;&nbsp;报表日期:&nbsp;<input id="reportDate"
						name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" />&nbsp;&nbsp;
						<a class="mini-button" iconCls="icon-ok" onclick="excute()">上期对比</a>&nbsp;&nbsp;&nbsp;<a class="mini-button" iconCls="icon-excel"
						onclick="doExportExcel()">导出Excel</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div style="width: 100%;">
		对比结果:&nbsp;&nbsp; <font color='blue' style="font-size: 15px" id="noPassFont"></font>
	</div>
	<!--撑满页面-->
	<div class="mini-fit">
		<div id="dckCompareGrid" class="mini-datagrid" style="width: 100%; height: 100%"
			url="${base}/dck/compare/toStartCheck.nut" showPager="true" onload="onGridLoad" allowAlternating="true">
			<div property="columns">
				<div field="zzjgdm" sortField="zzjgdm" allowSort="true" name="zzjgdm" width="30" align="center" headerAlign="center">组织机构代码</div>
				<div field="khmc1" name="khmc1" width="20" align="center" headerAlign="center" renderer="onRenderer1">客户名称（本期）</div>
				<div field="khmc2" name="khmc2" width="20" align="center" headerAlign="center" renderer="onRenderer1">客户名称（上期）</div>
				<div field="dkkh1" name="dkkh1" width="30" align="center" headerAlign="center" renderer="onRenderer3">贷款卡号（本期）</div>
				<div field="dkkh2" name="dkkh2" width="30" align="center" headerAlign="center" renderer="onRenderer3">贷款卡号（上期）</div>
				<div field="xzqhdm1" name="xzqhdm1" width="30" align="center" headerAlign="center" renderer="onRenderer4">行政区划代码（本期）</div>
				<div field="xzqhdm2" name="xzqhdm2" width="30" align="center" headerAlign="center" renderer="onRenderer4">行政区划代码（上期）</div>
				<div field="xm1" name="gllx1" width="30" align="center" headerAlign="center" renderer="onRenderer2">法定代表人（本期）</div>
				<div field="xm2" name="gllx2" width="30" align="center" headerAlign="center" renderer="onRenderer2">法定代表人（上期）</div>
			</div>
		</div>
	</div>
	<div id="win1" class="mini-window" title="对比结果" style="width: 600px; height: 250px;" onbuttonclick="onWinClosed()" visible="false" showModal="true"
		allowResize="false">
		<div id="rMsgDiv"></div>
	</div>
</body>
</html>