<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>执行sql</title>
<style type="text/css">   
.fixedHeaderTr     
{   
z-index:10;   
position:relative;     
top:expression(this.offsetParent.scrollTop);     
}; 
</style>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_tablequery_iframe.js"></script> 
<script type="text/javascript">
var list = '${requestScope.mapList}';
</script>
</head>
<body style="overflow-y: auto;overflow-x: auto; position: relative; width:100%;height:400px;">
	<div style="position: relative; width: 100%;height:100%">
		<font color="green">${info }</font>
		<font color="red">${ex }</font>
		<form action="${base}/sys/table/query/excuteQuery.nut" method="post" id="iform" name="iform">
			<div style="display: none">
			<input id="sqls" name="sqls" class="mini-hidden" value="">
			</div>
			<table width="100%" border="1" class="tab" style="border-spacing:0px; border-color: #E6EFFE"> 
				<c:forEach var="list" items="${requestScope.mapList}" begin="0" end="0">
					<tr>
						<c:forEach items="${list }" var="list">
							<td width="120px;" class="tab_align_c " style="background-color: #E6EFFE;color: #15428B;">${list }</td>
						</c:forEach>
					</tr>
				</c:forEach>
				<c:forEach var="list" items="${requestScope.mapList}" begin="1">
					<tr>
						<c:forEach items="${list }" var="list">
							<td width="120px;" class="tab_align_c " >${list }</td>
						</c:forEach>
					</tr>
				</c:forEach>
			</table>
		</form>
	</div>
</body>
</html>