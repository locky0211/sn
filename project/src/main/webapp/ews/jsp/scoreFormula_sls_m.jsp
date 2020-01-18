<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/scoreFormula_sls_m.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">公式编号：<input id="formulaCode" name="formulaCode" class="mini-textbox" style="width: 150px;"> <span class="separator"></span>公式名称：<input id="formulaName"
						name="formulaName" class="mini-textbox" style="width: 150px;">&nbsp;&nbsp;&nbsp;<a iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>&nbsp;&nbsp;<a
						iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp;<a
						iconCls="icon-txt" class="mini-button" plain="true" onclick="help()">打分标准介绍</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="formulaGrid" class="mini-treegrid" style="width: 100%; height: 100%;" showTreeIcon="true"
		treeColumn="formulaName" parentField="parentCode" expandOnLoad="true" idField="formulaCode" resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true"
		imgPath="${base }/common/js/miniui/themes/icons/" url="${base}/score/formula/sls/getSelectList.nut" allowAlternating="true">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="formulaName" field="formulaName" width="100" align="left" headerAlign="center">公式名称</div>
				<div field="formulaCode" width="30" align="center" headerAlign="center">公式编号</div>			
				<div field="formula" width="80" align="center" headerAlign="center">公式</div>
				<div field="scoreDesc" width="80" align="center" headerAlign="center">公式说明</div>
				<div field="scoreStandard" width="40" align="center" headerAlign="center">打分标准</div>
				<div field="maxPoints" width="25" align="center" headerAlign="center">扣分上限</div>
				<div name="edit" width="60" align="center" renderer="onRenderer" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>