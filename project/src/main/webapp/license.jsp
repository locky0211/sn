<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*,java.io.*,java.text.*"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>提示</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript">
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

var cj=parseInt(getUrlParam("cj"));

if(cj>0)
{
	$(function(){
		var i=60;
		setTimeout(function(){
				CloseWindow();
			},60000);
		window.setInterval(function(){
				i--;
				document.getElementById("time").innerHTML="维保期限仅剩："+cj+"天"+"("+i+"秒后关闭提示)";
			},1000);
	});
}
else
{
	$(function(){
		document.getElementById("time").innerHTML="提示：维保已经过期！";
	});
	
}
	

</script>
</head>
<body>
	<div style="padding:5px"><img src="/sam/common/js/miniui/themes/icons/tip.png"/>提示：系统维保事宜请致电0512-87818837</div>
	<div id="time" style="padding:5px;text-align:center"></div>
</body>
</html>