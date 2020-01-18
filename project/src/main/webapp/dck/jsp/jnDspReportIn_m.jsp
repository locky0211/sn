<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>法人客户信息管理</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/jnDspReportIn_m.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<form id="bwscForm" method="post">
		<div style="width: 100%;">
			<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
				<table style="width: 100%;">
				<tr>
				<td><a class="mini-button" iconCls="icon-add" plain="true" onclick="onin()">导入报文</a></td>
				<td style="text-align: right;">
					清理日期：<input name="qlrq" id="qlrq" class="mini-monthpicker" style="width: 140px;" format="yyyyMM" />
					清理机构：<input name="brNo" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DCK'" style="width: 200px;" parentField="pId"
						valueField="bmCode" showClose="true" textField="bmName" value="<%= brno%>"/>
					<a class="mini-button" iconCls="icon-remove" plain="true" align="right" onclick="clear()">清理数据</a>
			    </td>
			   </tr>
				</table>
			</div>
		</div>
	</form>
	<div class="mini-fit">
		<div id="bwjlGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/jnckreport/getCKXmldrjlList.nut" pageSize="20" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" headerAlign="center">序号</div>
				<div field="bbsj" width="80" align="center" headerAlign="center">数据日期</div>
				<div field="drsj" width="80" align="center" headerAlign="center">导入时间</div>
				<div field="wjmc" width="140" align="center" headerAlign="center">文件名称</div>
				<div field="ttt" width="60" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>