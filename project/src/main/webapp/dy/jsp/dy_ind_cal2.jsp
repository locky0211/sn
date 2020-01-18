<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>机构指标运算</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/dy_ind_cal2.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body style="overflow: hidden;">
	<div id="rdIndCalForm" method="post">
		<div class="mini-toolbar">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><label style="font-family: Verdana;">指标：<input id="indTree" required="true" style="width: 250px;"
							popupHeight="450px;" popupWidth="380px;" required="true" class="mini-treeselect" url="${base }/dy/indicators/getIndicatorsBasicInfoList.nut"
							textField="indName" multiSelect="false" parentField="pId" valueField="id" resultAsTree="false" allowInput="false"
							onbeforenodeselect="beforenodeselect" onvaluechanged="indchanged" />&nbsp;&nbsp;&nbsp;机构:
					</label> <input id="brNo" name="brNo" style="width: 250px;" popupHeight="450px;" showClose="true" oncloseclick="onCloseClick" popupWidth="350px;"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="true" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" checkRecursive="true" showFolderCheckBox="true" />&nbsp;&nbsp;&nbsp;开始日期:&nbsp;<input
						id="sDate" name="sDate" style="width: 80px;" class="mini-monthpicker" format="yyyyMM" />&nbsp;&nbsp;&nbsp;<a class="mini-button"
						iconCls="icon-setup"   onclick="doCalInd()">计算</a></td>
				</tr>
			</table>
		</div>
	</div>
	<!--撑满页面-->
	<div id="rmsg" style="width: 100%; overflow: auto; height: 100%"></div>
</body>
</html>