<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>总分平衡指标值记录</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/scoreZfphSum_sls.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>

</head>
<body>
	<div style="width: 100%;" id="scoreZfphSumForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
					总机构:<input name="zbrNo" required="true" id="zbrNo" class="mini-treeselect" 
					url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" style="width: 300px;" parentField="pId" valueField="bmCode"
						showFolderCheckBox="true" showClose="true" textField="bmName" value="<%= brno%>" multiSelect="false" oncloseclick="onCloseClick"/>
						<span class="separator">
					</span>法人机构:<input name="fbrNo" required="true" id="fbrNo" class="mini-treeselect" 
						url="${base }/sys/bm/getSysBmListByIsExistBmCategoryBySls.nut?bmCategory='EAST'" style="width: 240px;" parentField="pId"
						valueField="bmCode" multiSelect="false" showFolderCheckBox="true" showClose="true" textField="bmName" value="<%= brno%>" onvaluechanged="onchange()" 
						oncloseclick="onCloseClick"/><span class="separator">
						</span>报表日期:<input id="reportDate" class="mini-DatePicker"  required="true" format="yyyy-MM-dd" style="width: 120px;">&nbsp;&nbsp;指标名称:&nbsp; <input id="tabType"
						name="tabType" class="mini-combobox"  textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=EAST-ZBMC" allowInput="false" style="width:180px;"/>
						<span class="separator"></span><a iconCls="icon-search" class="mini-button" plain="true"
						onclick="search()">查询</a>&nbsp;&nbsp; <a iconCls="icon-excel" class="mini-button" onclick="reCalculate()" id="calculation">开始计算</a>&nbsp;&nbsp; <a id="exportExcel" iconCls="icon-excel" class="mini-button" onclick="exportExcel()">导出</a>
						&nbsp;&nbsp; <a id="exportExcelForOrgan" iconCls="icon-excel" class="mini-button" onclick="exportExcelForOrgan()">分法人导出</a>
				</tr>
			</table>
		</div>
	</div>
	
	<div class="mini-fit">
		<!-- onrowdblclick注意 -->
		<div id="scoreZfphSumGrid" class="mini-treegrid" style="width: 100%; height: 100%;" url="${base}/scoreZfphSumSls/getScoreZfphSumList.nut" showTreeIcon="true"
			treeColumn="zbbh" idField="zbbh" parentField="parent" resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true"
			imgPath="${base }/common/js/miniui/themes/icons/addfolder.gif">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>	
				<div field="brno" width="60" align="center" headerAlign="center">机构名称</div>
				<div field="nbjgh" width="30" align="center"  headerAlign="center">内部机构号</div>		
				<div name="zbbh" field="zbbh" width="30" align="center" headerAlign="center">指标编号</div>
				<div field="zbmc" width="50" align="center" headerAlign="center">指标名称</div>
				<div field="sjbh" width="30" align="center"  headerAlign="center">上级编号</div>
				<div field="zzye" width="30" align="right" renderer="zzyeToString"  headerAlign="center">总账余额（万元）</div>
				<div field="fhye" width="30" align="right" renderer="fhyeToString"  headerAlign="center">分户账余额（万元）</div>
				<div field="sjrq" width="30" align="center" headerAlign="center">数据日期</div>

			</div>
		</div>
	</div>
</body>
</html>