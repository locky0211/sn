<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>总分平衡指标值记录</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/scoreZfphSum.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>

</head>
<body>
	<form id="jusForm" method="post">
	<div style="width: 100%;" id="scoreZfphSumForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构:<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" style="width: 300px;" parentField="pId"
						valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" checkRecursive="true" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>报表日期:<input
                        id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 120px;">
						<span class="separator"></span><a iconCls="icon-search" class="mini-button" plain="true"
						onclick="search()">查询</a>&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="reCalculate()">重新计算</a>&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>
						
						
				</tr>
			</table>
		</div>
	</div>
	</form>
	
	<div class="mini-fit">
		<!-- onrowdblclick注意 -->
		<div id="scoreZfphSumGrid" class="mini-treegrid" style="width: 100%; height: 100%;" url="${base}/scoreZfphSum/getScoreZfphSumList.nut" showTreeIcon="true"
			treeColumn="zbbh" idField="zbbh"   onbeforeload="onBeforeTreeLoad" resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true"
			imgPath="${base }/common/js/miniui/themes/icons/addfolder.gif">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>	
				<div field="brno" width="60" align="center" headerAlign="center">机构名称</div>
				<div field="nbjgh" width="30" align="center"  headerAlign="center">内部机构号</div>		
				<div name="zbbh" field="zbbh" width="30" align="center" headerAlign="center">指标编号</div>
				<div field="zbmc" width="50" align="center" headerAlign="center">指标名称</div>
				<div field="sjbh" width="30" align="center"  headerAlign="center">上级编号</div>
				<div field="zbye" width="30" align="right" headerAlign="center">指标余额（万元）</div>
				<div field="sjrq" width="30" align="center" headerAlign="center">数据日期</div>

			</div>
		</div>
	</div>
</body>
</html>