<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>总分平衡指标计算公式表</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/score_zfph_sql_m.js"></script>
</head>
<body>

	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">指标编号：<input id="zbbh" class="mini-textbox" style="width: 150px;" /><span class="separator">
						<a iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>
						
						 <a iconCls="icon-search"
						class="mini-button" plain="true" onclick="search()">查询</a> 
				</tr>
			</table>
		</div>
	</div>

	<div class="mini-fit">
		<div id="scoreZfpgGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/scoreZfphSql/getScoreZfphSqlList.nut" pageSize="20" allowCellEdit="true" showPager="true" showModified="false">
			<div property="columns">
				<div field="zbbh" width="30" align="center" headerAlign="center">指标编号</div>
				<div field="zbmc" width="50" align="center" headerAlign="center">指标名称</div>
				<div field="staSql" width="120" align="center"  headerAlign="center">计算公式</div>
				<div field="sqlExplain" width="120" align="center" headerAlign="center">公式说明</div>
				<div name="edit" width="60" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>

</body>
</html>