<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>loading.html</title>

		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="this is my page">
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<script type="text/javascript" src="${base }/jquery/jquery-1.7.1.js"></script>
		<style>
.background {
	width: 100%;
	height: 100%;
	opacity: 0.4;
	filter: alpha(opacity = 50);
	background: #535353;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2000;
}

.progressBar {
	background: white url(${base }/jsp/quote/loading.gif) no-repeat 10px 10px;
}

.progressBar {
	display: block;
	width: 248px;
	height: 58px;
	position: fixed;
	top: 50%;
	left: 50%;
	margin-left: -74px;
	margin-top: -14px;
	font-size: 12px;
	padding: 10px 10px 10px 60px;
	text-align: left;
	line-height: 29px;
	font-weight: bold;
	position: absolute;
	z-index: 2001;
}
</style>
	</head>
	<script type="text/javascript">
		function loadingShow(msg){
			if(msg!=''){
				$('#progressBar').text(msg);
			}
			$("#background").width($(document).width());
			$("#background").height($(document).height());
			$('#progressBar').css('top',$(window).height()*0.5+$(document).scrollTop());
			$("#background,#progressBar").show();
		}
		function loadingHide(msg){
			$("#background,#progressBar").hide();
		}
		
	</script>

	<body style="margin: 0;">
		<div id="background" class="background" style="display: none;overflow: hidden;"></div>
		<div id="progressBar" class="progressBar" style="display: none;">
			数据加载中，请稍等...
		</div>
		<script type="text/javascript">
				var ajaxbg = $("#background,#progressBar"); 
				ajaxbg.hide(); 
				$(document).ajaxStart(function () { 
				ajaxbg.show(); 
				}).ajaxStop(function () { 
				ajaxbg.hide(); 
				}); 
		</script>
	</body>
</html>