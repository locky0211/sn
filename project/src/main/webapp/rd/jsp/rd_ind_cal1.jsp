<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>机构指标运算</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_ind_cal1.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body style="overflow: hidden;">
	<div id="rdIndCalForm" method="post">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">机构: </label> <input id="bmCode" name="brNo" style="width: 250px;" popupHeight="350px;" popupWidth="450px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" value="<%= brno%>" textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" resultAsTree="false"
						allowInput="false" onbeforenodeselect="beforenodeselect" />&nbsp;&nbsp;&nbsp;开始日期:&nbsp;<input id="sDate" name="sDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" />&nbsp;&nbsp;&nbsp;<a
						class="mini-button" iconCls="icon-setup" onclick="doCalInd()">计算</a></td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div id="rmsg" style="width: 100%; overflow: auto; height: 100%"></div>
</body>
</html>