<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>导出校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/export_formula.js"></script>
</head>
<body>
		<div style="width: 100%;" id="exportForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">模块选择: <input name="selectModule" required="true" id="selectModule" class="mini-combobox" url="${base }/sys/ggzd/getGgzdList.nut?groupId=EXPORTFORMULA" style="width: 240px;"
						textField="zdName" valueField="zdValue" multiSelect="true"/>
						<span class="separator"></span> 
						<a iconCls="icon-excel" class="mini-button" onclick="exportSqlFile()">导出</a>
						<span class="separator"></span> 
						<!--  <a iconCls="icon-search" class="mini-button" onclick="search()">导出</a>-->
				</tr>
			</table>
		</div>
	</div>
	
	<div class="mini-fit">
		<div id="formulaGrid" class="mini-datagrid" url="${base}/export/formula/getRecordingDataList.nut?tableCode=${param.tableCode}&schemaCode=${param.schemaCode}" style="width: 100%; height: 100%"
			 pageSize="20"  showPager="true">
			
		</div>
	</div>
</body>
</html>