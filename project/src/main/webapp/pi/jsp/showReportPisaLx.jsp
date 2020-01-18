<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" import="java.util.*"%>
<%@ page language="java" import="com.efraiser.pi.model.ShowReportPisaHelpLx"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<link href="${base }/rd/css/rd_table_report.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
var tarStr = '${tarStr}';
</script>
<script type="text/javascript" src="${base }/pi/js/showReportPisaLx.js"></script>
<style>
#tbmain0{
margin:auto;
}
</style>
<title>报表数据页</title>
</head>
<body onload="ReWritable()">
<% List<ShowReportPisaHelpLx> list=(List)request.getAttribute("obj") ;%>
	<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;" splitSize="0">
	       
			<div title="center" region="center" style="border: 0;" bodyStyle="padding: 0px;">
				<form id="rdTableReportForm" action="">
				<c:if test="${frequentness=='AC' }">
					<p class="pTitle">商业银行流量流向采集表单（地区间）</p>
				<table id="tbmain0" cellspacing='0' cellpadding='4' border='1' width="98%" >
				<thead>
				<tr>
				<th style="width: 14%"><nobr>流入地区</nobr></th>
				<th style="width: 14%"><nobr>流出地区</nobr></th>
				<th style="width: 14%"><nobr>笔数</nobr></th>
				<th style="width: 14%"><nobr>金额</nobr></th>
				</tr>
				</thead>
				<tbody>
				<%for(ShowReportPisaHelpLx show:list) {%>
				<tr class="odd_row">
				 <td id='' class="td-param-cell">
				  <nobr class="valNoBr"><%=show.getIcode() %> </nobr>
				 </td>
				 <td id='' class="td-param-cell">
				  <nobr class="valNoBr"><%=show.getDn()%> </nobr>
				 </td>
				 <td id='' class="td-data_1">
				 <nobr class="valNoBr"><%=show.getValue1()%></nobr>
				 </td>
				  <td id='' class="td-data_1">
				 <nobr class="valNoBr"><%=show.getValue2()%></nobr>
				 </td>
				</tr>
				<%} %>
				</tbody>
				</table>
				</c:if>
				
				<c:if test="${frequentness=='IN' }">
					<p class="pTitle">商业银行流量流向采集表单（行业间）</p>
					<table id="tbmain0" cellspacing='0' cellpadding='4' border='1' width="98%" >
				<thead>
				<tr>
				<th style="width: 14%"><nobr>流入行业</nobr></th>
				<th style="width: 14%"><nobr>流出行业</nobr></th>
				<th style="width: 14%"><nobr>笔数</nobr></th>
				<th style="width: 14%"><nobr>金额</nobr></th>
				</tr>
				</thead>
				<tbody>
				<%for(ShowReportPisaHelpLx show:list) {%>
				<tr class="odd_row">
				 <td id='' class="td-param-cell">
				  <nobr class="valNoBr"><%=show.getIcode() %> </nobr>
				 </td>
				 <td id='' class="td-param-cell">
				  <nobr class="valNoBr"><%=show.getDn()%> </nobr>
				 </td>
				 <td id='' class="td-data_1">
				 <nobr class="valNoBr"><%=show.getValue1()%></nobr>
				 </td>
				  <td id='' class="td-data_1">
				 <nobr class="valNoBr"><%=show.getValue2()%></nobr>
				 </td>
				</tr>
				<%} %>
				</tbody>
				</table>
					
				</c:if>
				
				</form>
			</div>
			
		</div>
	
</body>
</html>