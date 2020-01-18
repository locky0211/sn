<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dckCheckCoincide.js"></script>
<%HttpSession Session = request.getSession();
  String brno = (String)Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;" id="dckCheckCoincide">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<label style="font-family: Verdana;">客户风险机构:&nbsp;</label><input id="brNo" showClose="true" onvaluechanged="dckChange()" oncloseclick="onCloseClick"
						name="brNo" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="false" checkRecursive="true" multiSelect="false"
						required="true" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='DCK'"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" expandOnLoad="false"/> 
						
						<label style="font-family: Verdana;">&nbsp;&nbsp;EAST机构:&nbsp;</label><input id="eastBmcode" showClose="true" onvaluechanged="eastChange()" oncloseclick="onCloseClick"
						name="eastBmcode" style="width: 200px;" popupHeight="300px;" popupWidth="350px;" showFolderCheckBox="false" checkRecursive="true" multiSelect="false"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'"  textField="bmName" parentField="pId"
						valueField="bmCode" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" expandOnLoad="false"/>
						
						<span class="separator"></span>报表日期:<input
						id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 120px;"><span class="separator"></span> 客户风险表名称：
						<div id="repCode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" style="width: 180px;" popupWidth="600px" url="${base}/sys/ggzd/getGgzdList.nut?groupId=DckImportTableName"
							textField="zdName" valueField="zdValue">
							<div property="columns">
								<div header="表中文名称" width="80" field="zdName"></div>
								<div header="表数据库名称" width="20" field="zdValue"></div>
							</div>
						</div>
						<span class="separator"></span> <a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<!--  
							<a iconCls="icon-goto" class="mini-button"
							plain="true" onclick="importEast()">导入EAST报表</a> 
						-->
						<span class="separator"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="excute()">开始校验</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">					<!-- onrowdblclick="rowdblclick" -->
		<div id="checkGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/dck/coincide/getResultList.nut" pageSize="20" allowCellEdit="true"
			showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="dspTable" width="50" align="center" renderer="onDspNameRenderer" headerAlign="center">客户风险表名</div>
				<div name="eastTable" width="40" align="center" renderer="onEastNameRenderer" headerAlign="center">EAST表名</div>
				<div name="zd_name" width="40" align="center" renderer="onformulaTypeRenderer" headerAlign="center">校验类型</div>
				<div field="dspValue" width="40" align="center" headerAlign="center">客户风险值</div>
				<div field="eastValue" width="40" align="center"  headerAlign="center">EAST值</div>
				<!--  <div field="dataNumber" width="20" align="center" headerAlign="center">校验条数</div>-->
				 <div field="diffValue" width="20" align="center" headerAlign="center">差值</div>
				<div field="checkDesc" width="90" align="center" headerAlign="center">校验描述</div>
				<div field="checkDate" width="30" align="center" headerAlign="center">检验时间</div>

			</div>
		</div>
	</div>
</body>
</html>