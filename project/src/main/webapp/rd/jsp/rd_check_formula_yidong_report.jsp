<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" import="java.util.*"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异动公式可视化</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/rd_check_formula_yidong_report.js"></script>
<%
  HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("brNo");
  List<String> list=(List)Session.getAttribute("sessionUserRoleId");
%>
</head>
<body>
	<div id="autoCheckFormula">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						报表日期:&nbsp; <input id="reportDate" name="reportDate" class="mini-DatePicker"  validateOnChanged="false" style="width: 140px;" format="yyyy-MM-dd" showClose="true" oncloseclick="onCloseClick"/>&nbsp;&nbsp;
						机构:&nbsp;<input id="searchBrno" name="searchBrno" style="width: 180px;" showClose="true" oncloseclick="onCloseClick" style="width: 250px;"  popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" 
							checkRecursive="true" multiSelect="true" required="false" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="false" parentField="pId" 
							valueField="bmCode" resultAsTree="false" allowInput="false" value="<%=brno %>"/>&nbsp;&nbsp;
						<%if(list.contains("admin")){%>
							<a class="mini-button" onclick="autoAddCheckFormula()" style="width: 140px; margin-right: 30px;">同版本批量添加</a>
							<a class="mini-button" onclick="autoAddCheckFormulaVersion()" style="width: 120px; margin-right: 30px;">不同版本批量添加</a>
							<a class="mini-button" onclick="exportFormula()" style="width: 120px; margin-right: 30px;">异动公式导出</a>
						<%}%>
						<input id="cUser" name="cUser" class="mini-hidden" value="${param.cUser }" />
					</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="YidongFormulaReportGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="toReportView" style="width: 100%; height: 100%" url="${base}/rd/check/wave/getCheckFormulaYidongReport.nut" showPager="false" allowAlternating="true">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tabCode" width="20" align="center" headerAlign="center">报表代码</div>
				<div field="tabName" headerAlign="center">报表名称</div>
				<div field="tabType" width="20" align="center" headerAlign="center">报表类型</div>
				<div field="formulaWaveNum" width="20" align="center" headerAlign="center">异动公式数量</div>
				<div field="tableId" headerAlign="center" width="20" align="center" renderer="onRenderer">操作</div>
		<%-- 		<%if(list.contains("admin")){%>
				    <div field="tableId" headerAlign="center" width="20" align="center" renderer="onRendererAdmin">操作</div>
				<%}else{%>
				    <div field="tableId" headerAlign="center" width="20" align="center" renderer="onRenderer">操作</div>
				<%}%> --%>
			</div>
		</div>
	</div>
</body>
</html>