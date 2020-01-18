<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>贷款汇总配置</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dl/js/dlReportSummaryLO.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						&nbsp;&nbsp;
						<a iconCls="icon-add" class="mini-button" onclick="add()">新增</a>
						&nbsp;&nbsp;汇总类别码：
						<input id="typeCode" class="mini-textbox" style="width: 150px;"/>
						&nbsp;&nbsp;大集中报表编号：
						<input id="bfTabCode" class="mini-textbox" style="width: 150px;"/>
						&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a> 
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="reportSummaryGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/dl/reportSummary/getReportSummaryLOList.nut" 
			pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="10" headerAlign="center">序号</div>
				<div field="typeCode" width="15" align="center" headerAlign="center">类别码</div>
				<div field="typeName" width="70" align="center" headerAlign="center">类别名称</div>
				<div field="isSum" width="20" align="center" headerAlign="center" renderer="onIsSumRenderer">是否合计项</div>
				<div field="bfTabCode" width="40" align="center" headerAlign="center">大集中报表编号</div>
				<div field="bfCode" width="60" align="center" headerAlign="center">大集中指标</div>
				<div field="bfName" width="70" align="center" headerAlign="center">大集中指标名称</div>
				<div name="edit" width="40" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>