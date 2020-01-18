<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" import="java.util.*"%>
<%@ page language="java" import="com.efraiser.pi.model.ShowReportPisaHelp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/rd/css/rd_table_report.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
var tarStr = '${tarStr}';
</script>
<script type="text/javascript" src="${base }/pi/js/showReportPisa.js"></script>
<style>
#tbmain0{
margin:auto;
}
</style>
<%-- <c:if test="${tableInfo!=null}">
	<script type="text/javascript" src="${base }/rd/autojs/${tableInfo.tabCode }_${tableInfo.versionNo }.js"></script>
</c:if> --%>
<title>报表数据页</title>
</head>
<body onload="ReWritable()">
<% List<ShowReportPisaHelp> list=(List)request.getAttribute("obj") ;%>
	<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
	          <c:if test="${checkFormula!=null }">
			 <div title="north" visible="false" region="north" height="90" bodyStyle="word-break:break-all;padding-left:5px;" showHeader="false" showSplit="false"
				allowResize="false">
				&nbsp;错误公式:<br>${checkFormula }
			</div>
			</c:if>
			<div title="center" region="center" style="border: 0;" bodyStyle="padding: 0px;">
				<form id="rdTableReportForm" action="">
					<input id="isChanged" name="isChanged" value="n" type="hidden">
					<input type="hidden" id="tableCode" name="tableCode" value="${tableCode }">
					<input type="hidden" id="brNo" name="brNo" value="${brNo }">
					<input type="hidden" id="subNo" name="subNo" value="${subNo }"> 
					<input type="hidden" id="frequentness" name="frequentness" value="${frequentness}">
					<input type="hidden" id="bjFlag" name="bjFlag" value="${bjFlag }"> 
					<input type="hidden" id="errorColor" name="errorColor" value="${errorColor }"> 
					<p class="pTitle">${tableName }</p>
				<table id="tbmain0" cellspacing='0' cellpadding='4' border='1' width="98%" >
				<thead>
				<tr>
				<th style="width: 14%"><nobr>指标代码</nobr></th>
				<th style="width: 14%"><nobr>维度代码</nobr></th>
				<th style="width: 14%"><nobr>维度名称</nobr></th>
				<th style="width: 14%"><nobr>指标名称</nobr></th>
				<th style="width: 14%"><nobr>数据类型</nobr></th>
				<th style="width: 14%"><nobr>值1</nobr></th>
				<th style="width: 14%"><nobr>值2</nobr></th>
				</tr>
				</thead>
				<tbody>
				<%for(ShowReportPisaHelp show:list) {%>
				<tr class="odd_row">
				 <td id='' class="td-param-cell">
				  <input id='' type='hidden'  value="<%=show.getQuotaCode() %>">
				  <nobr class="valNoBr"><%=show.getQuotaCode() %> </nobr>
				 </td>
				  <td id='' class="td-param-cell">
				  <input id='' type='hidden'  value="<%=show.getLatCode() %>">
				  <nobr class="valNoBr"><%=show.getLatCode() %> </nobr>
				 </td>
				 <td id='' class="td-param-cell">
				  <input id='' type='hidden'  value="<%=show.getLatName() %>">
				  <nobr class="valNoBr"><%=show.getLatName() %> </nobr>
				 </td>
				 <td id='' class="td-param-cell">
				  <input id='' type='hidden'  value="<%=show.getQuotaName() %>">
				  <nobr class="valNoBr"><%=show.getQuotaName() %> </nobr>
				 </td>
				 <td id='' class="td-param-cell">
				  <input id='' type='hidden'  value="<%=show.getDataType() %>">
				  <nobr class="valNoBr"><%=show.getDataType()%> </nobr>
				 </td>
				 <td id='<%=show.getQuotaCode() %>_<%=show.getLatCode() %>_1_TD' class="td-data_1">
				 <input id='<%=show.getQuotaCode() %>_<%=show.getLatCode() %>_1' style="display:none" type="text" dtype="LD" class="input_out" value="<%=show.getValue1()%>">
				 <nobr class="valNoBr"><%=show.getValue1()%></nobr>
				 </td>
				  <td id='<%=show.getQuotaCode() %>_<%=show.getLatCode() %>_2_TD' class="td-data_1">
				 <input id='<%=show.getQuotaCode() %>_<%=show.getLatCode() %>_2' style="display:none" type="text" dtype="LD" class="input_out" value="<%=show.getValue2()%>">
				 <nobr class="valNoBr"><%=show.getValue2()%></nobr>
				 </td>
				</tr>
				<%} %>
				</tbody>
				</table>
				</form>
			</div>
			
		</div>
	
</body>
</html>