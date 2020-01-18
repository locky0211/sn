<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
<title>法人客户信息管理</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/cr_bwsc.js"></script>
</head>
<body>
	<form id="bwscForm" method="post">
		<div style="width: 100%;">
			<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
				<table style="width: 100%;">
					<td><label style="font-family: Verdana;"> 机构: </label> <input id="brno" showClose="true" oncloseclick="onCloseClick"
						name="brNoDy" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="true" checkRecursive="true" multiSelect="true"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DCK'" textField="bmName" multiSelect="false" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /> 
						&nbsp;&nbsp;日期:&nbsp;<input id="rDate"
						name="reportDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" required="true" />
						 <a class="mini-button" iconCls="icon-add" plain="true" onclick="ondo()">生成报文</a></td>
				</table>
			</div>
		</div>
		</form>
		<div class="mini-fit">
			<div id="bwjlGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/xml/getCrXmlscjlList.nut" pageSize="20" showPager="true"
				showModified="false">
				<div property="columns">
					<div type="indexcolumn" align="center" headerAlign="center">序号</div>
					<div field="bbsj" width="80" align="center" headerAlign="center">数据日期</div>
					<div field="scsj" width="80" align="center" headerAlign="center">生成时间</div>
					<div field="wjmc" width="80" align="center" headerAlign="center">文件名称</div>
					<div field="ttt" width="60" renderer="onRenderer" align="center" headerAlign="center">操作</div>
				</div>
			</div>
		</div>
</body>
</html>