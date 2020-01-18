<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_score_formula_m_nj.js"></script>
</head>
<body>
		<div style="width: 100%;"id="scoreForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<a iconCls="icon-add" class="mini-button" plain="true" onclick="add()">新增</a>
						指标名称：<input id="zbmc" class="mini-textbox" style="width: 150px;" />
						<span class="separator"></span>指标类别：<input id="zblb" class="mini-textbox" style="width: 150px;" />
						<span class="separator"></span>公式:<input id="formula" class="mini-textbox" style="width: 150px;"><span class="separator"></span>
						<a iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp;
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="formulaDataGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/rd/score/formula/getScoreFormula.nut" showPager="true" pageSize="20" allowAlternating="true" allowCellEdit="true" allowCellSelect="true" multiSelect="false">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div field="zbmc" width="30" align="center" headerAlign="center">指标名称</div>
				<div field="zblb" width="30" align="center" headerAlign="center">指标类别</div>
				<div field="zbsm" width="100" align="left" headerAlign="center">指标说明</div>
				<div field="kfsm" width="30" align="center"  headerAlign="center">扣分说明</div>
				<div field="jsffsm" width="30" align="center" headerAlign="center">计算方法说明</div>
				<div field="scoreStandard" width="20" align="center" headerAlign="center">扣分标准</div>
				<div field="maxPoints" width="20" align="center" headerAlign="center">扣分上限</div>
				<div field="updateTime" width="20" align="center" headerAlign="center">更新时间</div>
				<div width="40" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>