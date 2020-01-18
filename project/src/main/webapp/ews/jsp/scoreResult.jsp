<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>打分结果</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/ews/js/scoreResult.js"></script>
<%
	HttpSession Session = request.getSession();
	String brno = (String) Session.getAttribute("SystemBrNo");
%>
</head>
<body>
	<div style="width: 100%;"id="scoreForm">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">机构<input name="brNo" required="true" id="brNo" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByIsExistBmCategory.nut?bmCategory='EAST'" checkRecursive="true" style="width: 300px;" parentField="pId"
						valueField="bmCode" multiSelect="true" showFolderCheckBox="true" oncloseclick="onCloseClick" showClose="true" textField="bmName" value="<%= brno%>" /><span class="separator"></span>报表日期:<input
						id="reportDate" class="mini-DatePicker" required="true" format="yyyy-MM-dd" style="width: 150px;"><span class="separator"></span><a
						iconCls="icon-search" class="mini-button" plain="true" onclick="search()">查询</a>&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="excute()">开始打分</a>&nbsp;&nbsp;<a iconCls="icon-goto" class="mini-button" plain="true" onclick="exportToExcel()">导出Excel</a>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="resultGrid" class="mini-treegrid" style="width: 100%; height: 100%;" showTreeIcon="true"
		treeColumn="formulaName" parentField="parentCode" expandOnLoad="true" idField="formulaCode" resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true"
		imgPath="${base }/common/js/miniui/themes/icons/" url="${base}/score/result/getSelectList.nut" allowAlternating="true">
			<div property="columns">
				<div type="indexcolumn" align="center" width="15" headerAlign="center">序号</div>
				<div name="formulaName" field="formulaName" width="100" align="left" headerAlign="center">公式名称</div>
				<div field="formulaCode" width="30" align="center"  headerAlign="center">公式编号</div>
				<div field="errorRatio" width="30" align="center" headerAlign="center">错误率（%，条）
				<input property="editor" class="mini-textbox" width="80" vtype="float" /></div>
				<div field="deductPoints" width="20" align="center" headerAlign="center">扣分
				<input property="editor" class="mini-textbox" width="80" vtype="int" /></div>
				<div field="remark" width="80" align="center" headerAlign="center">备注<input property="editor" class="mini-textbox" width="300" vtype="float" /></div>
				<div name="action" width="50" headerAlign="center" align="center" renderer="onActionRenderer"></div>
			</div>
		</div>
	</div>
</body>
</html>