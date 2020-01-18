<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>征信两端核对量化评分SQL维护</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ci/js/ci_sql_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<span>表名称：</span>
						<input id="tableName" class="mini-textbox" style="width: 150px;" />
						<span class="separator"></span> 
						<span>编号：</span>
						<input id="number" class="mini-textbox" style="width: 150px;" />
						<span class="separator"></span>
						<span>SQL类型：</span>
						<input id="type" name="type" class="mini-combobox" required="true" style="width: 100px;" textField="zdName" valueField="zdValue" 
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_SQL_TYPE"  allowInput="false" />
						<span class="separator"></span>
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>	
						<a iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>
						<span class="separator"></span> 生成TXT文件日期：<input id="excuteDate" name="excuteDate" style="width: 120px;" class="mini-DatePicker" format="yyyy-MM-dd""/>
						<a class="mini-button" iconCls="icon-txt" onclick="doExportTxtAll()">批量导出</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="sqlGrid" class="mini-datagrid" multiSelect="true" style="width: 100%; height: 100%;" url="${base}/ci/sql/getFormulaList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false" allowAlternating="true">
			<div property="columns">
				<div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="tableName" width="40" align="center" headerAlign="center">表名称</div>
				<div field="number" width="10" align="center" headerAlign="center">编号</div>
				<div field="type" width="30" align="center" renderer="onTypeRenderer" headerAlign="center">类型</div>
				<div field="sql" width="200" align="center" headerAlign="center">SQL语句</div>
				<div name="edit" width="80" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>