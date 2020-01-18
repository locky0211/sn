<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>证件上传材料页面</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/evidence_table_info_m.js"></script>
</head>
<body>
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addEvidenceTableInfo()">新增材料信息</a><span class="separator"></span>
				 <a class="mini-button" iconCls="icon-save" plain="true" onclick="doSaveJG()">保存结构</a>
				 <a class="mini-button" iconCls="icon-remove" plain="true" onclick="del()">删除</a></td>
			</tr>
		</table>
	</div>

	<div class="mini-fit">
		<div id="evidenceTreeGrid" class="mini-treegrid"
			style="width: 100%; height: 100%" 
			url="${base}/evidence/tableInfo/getAllEvidence.nut"
			showTreeIcon="true" treeColumn="evidenceName" idField="id"
			parentField="parent" resultAsTree="false" expandOnDblClick="true" allowDrag="true" allowDrop="true">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div name="evidenceName" field="evidenceName" width="200">证据材料</div>
				<div name="action" width="40" headerAlign="center" align="center" renderer="onActionRenderer" cellStyle="padding:0;">操作</div>
			</div>
		</div>
	</div>

</body>
</html>