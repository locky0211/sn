<%@ page language="java" pageEncoding="UTF-8"%>
<%@page contentType="application/msword;charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String name = request.getAttribute("fileName").toString();
	name = new String(name.getBytes("GBK"), "ISO8859-1") + "";
	response.setHeader("Content-disposition", "attachment; filename=" + name + ".doc");
%>
<html>
<head>
<meta http-equiv="Content-Type" content="application/msword; charset=UTF-8" />
<title>Insert title here</title>
</head>
<body>
	${fileContent }
</body>
</html>