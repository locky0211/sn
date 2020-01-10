<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>


    <script type="text/javascript"
            src="/web/js/map.js"></script>


    <meta charset="UTF-8">

    <title>登陆页面</title>

</head>

<body>

<form action="/web/login" method="post">


    <img src="/web/pic/a.jpg" />
    登陆：<br/>

    用户名：<input name="username" id="username" type="text"/><br/>

    密&nbsp;&nbsp;&nbsp;码：<input name="password" id="password" type="password"/><br/>

    <input type="submit" value="登陆"/>

</form>

</body>
