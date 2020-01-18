<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入</title>
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/addVisualBrno.js"></script>
</head>
<body>
	<div id="visualBrno">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
					<label for="brnoName$text">虚拟机构名:</label><input id="brnoName" name="brnoName" errorMode="none" class="mini-textbox" required="true" requiredErrorText="虚拟机构名不能为空"/> 
					<label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;"
						popupHeight="350px;" popupWidth="450px;" required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut"
						textField="bmName" multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode"  allowInput="false"
						onbeforenodeselect="beforenodeselect"  resultAsTree="false"  showClose="true" oncloseclick="onCloseClick" checkRecursive="true"  />
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="addVisualBrno()">增加</a>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-txt" onclick="deleteVisualBrno()">删除</a>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<!--撑满页面-->
	<div class="mini-fit">
		<div id="visualBrnoGrid" class="mini-datagrid" multiSelect="true" onrowdblclick="" style="width: 100%; height: 100%"
			url="${base}/sys/bm/getXNJGByPid.nut" showPager="false"  allowAlternating="true" >
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="bmName" width="100" align="center" headerAlign="center">汇总机构名</div>
				<div field="bmCode" width="200" headerAlign="center" renderer="acceptBrno">详细机构</div>
				
			</div>
		</div>
	</div>
</body>
</html>