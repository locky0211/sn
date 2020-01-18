<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>分析汇总</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rdGeneralAnalyzes.js"></script>
</head>
<body>
		<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;white-space: nowrap;" >
						开始日期:&nbsp;<input id="startDate" name="startDate" style="width: 100px;" class="mini-monthpicker" format="yyyyMM"/> &nbsp;&nbsp;
						结束日期:&nbsp;<input id="endDate" name="endDate" style="width: 100px;" class="mini-monthpicker" format="yyyyMM"/> &nbsp;&nbsp;
						汇总方式:&nbsp;<input id="hzStyle" name="hzStyle" class="mini-combobox" class="mini-combobox" textField="text" valueField="id" data="[{id:'1',text:'按机构汇总'},{id:'2',text:'按处室汇总'}]" showNullItem="true" nullItemText="" allowInput="false" style="width: 120px;" showClose="true" oncloseclick="onCloseClick" required="true"/> &nbsp;&nbsp;
						<label style="font-family: Verdana;">机构: </label> <input id="organNo" name="organNo" style="width: 200px;" popupHeight="350px;" popupWidth="450px;" 
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="true" showFolderCheckBox="true" parentField="pId" valueField="bmCode" allowInput="false"
						 resultAsTree="false" showClose="true" oncloseclick="onJgCloseClick" checkRecursive="true" onvaluechanged="jsValueChanged"/>&nbsp;&nbsp;
						 审核处室:&nbsp; <input id="blameRoom" name="blameRoom" class="mini-combobox" style="width: 200px;"  onvaluechanged="csValueChanged" multiSelect="true" showClose="true"  oncloseclick="onCsCloseClick" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_YGBMGL"/>&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>&nbsp;&nbsp;
						<a iconCls="icon-reload" class="mini-button" onclick="clear()">重置</a>
					</td>
				</tr>
			</table>
		</div>
	</div>	
	
	<%-- <div class="mini-fit">
		<div id="errorCheckConfirmGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/rd/error/check/confirm/getQueryGeneral.nut" pageSize="100" multiSelect="false">
			<div property="columns">
				<div type="indexcolumn" width="10" align="center" headerAlign="center">序号</div>
				<div field="jgmc" width="30" align="center" allowSort="true" headerAlign="center" renderer="onBrNo">机构名称</div>
				<div field="shcs" width="30" align="center" allowSort="true" headerAlign="center">审核处室</div>
				<div field="cccs" width="40" align="center" headerAlign="center">差错次数</div>
				<div field="ccje" width="20"  align="center" headerAlign="center">差错金额</div>>
				<div field="jgryrdwccdcs" width="32"  align="center" headerAlign="center">监管人员认定为差错的次数</div>
				<div field="tjryrdwccdcs" width="32"  align="center" headerAlign="center">统计人员认定为差错的次数</div>
				<div field="tbcs" width="40" align="center" headerAlign="center">通报次数</div>
				<div field="jscbcs" width="40" align="center" headerAlign="center">解锁重报次数</div>
			</div>
		</div>
	</div> --%>
	
	<!--动态列-->
	<div class="mini-fit">
		<div id="rdAnalyzesGrid" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" 
			multiSelect="true" class="mini-datagrid" style="width: 100%; height: 100%" 
			url="${base}/rd/error/check/confirm/getRdAnalyzes.nut"
			bordercolor="#003366" borderStyle="border-top:0" pageSize="60" showPager="true" >
		</div>
	</div>
</body>
</html>