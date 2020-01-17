<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>非现场监管报送预审核系统</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<%@include file="/common/quote/boot.html"%>
	<script type="text/javascript" src="${base}/js/main.js"></script>
	<link rel="stylesheet" href="${base}/css/main.css" type="text/css" />

	<script type="text/javascript">
        $(function(){

            $.get("${base }/sys/properties/mainImg.nut", function(data){
                $("#logo").attr("src",data);
            });

        });
	</script>

	<%HttpSession Session = request.getSession();
		String eastScoreShow = (String)Session.getAttribute("EastScoreShow");
	%>
	<style>
		*html body{height:100%}
		.mask{
			position:absolute;
			left:0;
			top:0;
			z-index:100;
			height:100%;
			width:100%;
			color: #FFFFFF;
			background-color: grey
		}
	</style>
</head>

<body>
<input type="hidden" id="a" value="<%=eastScoreShow%>"/>
<c:set var="eastScoreShow" value="${sessionScope.EastScoreShow }"></c:set>
<c:if test="${eastScoreShow =='1'}">
	<div id="mask" class="mask" >
		<%@include file="show.jsp"%>
	</div>
</c:if>
<div id="layout1" class="mini-layout" style="width: 100%; height: 100%;">
	<div title="north" region="north" bodyStyle="overflow:hidden;padding:0px;min-width:990px;" height="84" showHeader="false" showSplit="false"
		 allowResize="false">
		<div style="width: 490px; height: 80px; float: left;">
			<img id="logo" src="" style=" height: 80px;" alt="" />
		</div>
		<div style="width: 429px; height: 80px; float: right; z-index: 1">
			<table style="width: 100%; height: 80px; font-size: 12px; font-weight: normal;" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td valign="middle" style="text-align: right; padding-top: 5px;"><a class="mini-button" onclick="loadHomePage" iconCls="icon-home"
																						plain="true">系统首页</a><a class="mini-button" iconCls="icon-edit" plain="true" onclick="editUserPassword">修改密码</a><a class="mini-button"
																																																		   onclick="loadManualPage" iconCls="icon-manual" plain="true">系统操作手册</a><a class="mini-button" iconCls="icon-shutdown" onclick="exit"
																																																																					plain="true">安全退出</a><a class="mini-button" iconCls="icon-txt" onclick="about" plain="true">关于</a></td>
				</tr>
				<tr>
					<td valign="middle" style="text-align: right; padding-right: 10px; width: 140px;">风格:<select id="skinSel">
						<option value="default">默认</option>
						<option value="blue" selected="selected">blue</option>
						<option value="gray">Gray</option>
						<option value="olive2003">Olive2003</option>
						<option value="blue2003">Blue2003</option>
						<option value="blue2010">Blue2010</option>
						<option value="bootstrap">Bootstrap</option>
						<option value="metro">metro</option>
						<option value="metro-green">metro-green</option>
						<option value="metro-orange">metro-orange</option>
						<option value="jqueryui-uilightness">ju-uilightness</option>
						<option value="jqueryui-humanity">ju-humanity</option>
						<option value="jqueryui-excitebike">ju-excitebike</option>
						<option value="jqueryui-cupertino">ju-cupertino</option>
					</select></td>
				</tr>
			</table>
		</div>
	</div>
	<div title="south" region="south" showSplit="false" showHeader="false" allowResize="false" height="36" style="border: 0;" splitSize="0">
		<div style="line-height: 34px; float: left;">&nbsp;&nbsp;&nbsp;&nbsp;Copyright © 江苏银信融通信息有限公司版权所有&nbsp;&nbsp;&nbsp;</div>
		<div style="line-height: 34px; float: right;">
			<span>客服电话：0512-87818837&nbsp;&nbsp;</span>
		</div>
	</div>
	<div region="west" title="非现场监管管理平台" showHeader="true" showSplitIcon="true" width="200" minWidth="150" maxWidth="350">
		<ul id="leftTree" class="mini-outlookmenu" activeIndex="0" expandeOnLoad="false" url="${base }/initLeftTreeByUser.nut"
			style="width: 100%; height: 100%;" borderStyle="border:0;" textField="qxName" idField="qxId" parentField="pId" resultAsTree="false"
			showExpandButtons="false" onitemclick="onitemselect">
		</ul>
	</div>
	<div title="center" region="center" style="border: 0;">
		<div id="mainTabs" class="mini-tabs" activeIndex="0" style="width: 100%; height: 100%" contextMenu="#tabsMenu">
			<div title="首页" url="home.jsp"></div>
		</div>
	</div>
</div>
<ul id="tabsMenu" class="mini-contextmenu" onbeforeopen="onBeforeOpen">
	<li name="remove" onclick="onRemoveActiveNode">关闭当前</li>
	<li class="separator"></li>
	<li name="remove" onclick="onRemoveOthersNodes">关闭其他</li>
	<li class="separator"></li>
	<li name="remove" onclick="onRemoveAllNodes">关闭所有</li>
</ul>
</body>
</html>