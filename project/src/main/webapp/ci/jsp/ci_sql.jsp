<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>征信两端核对量化评分SQL维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/ci_sql.js"></script>
</head>
<body style="overflow: auto;">
	<form id="CiSqlForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
		</div>
		<div>
			<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
				<tr>
					<td class="tab_label" style="width: 12%">表名称：</td>
					<td class="tab_field_nr" style="width: 38%">
						<input class="mini-textbox" required="true" id="tableName" name="tableName" onchange="isincludSpace" value="${obj.tableName}" style="width: 98%" />
					</td>
					<td class="tab_label" style="width: 12%">表编号：</td>
					<td class="tab_field_nr" style="width: 38%">
						<input class="mini-textbox" required="true" id="number" name="number" onchange="isincludSpace" value="${obj.number}" style="width: 98%" />
					</td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 12%">SQL类型：</td>
					<td class="tab_field_nr" colspan="3">
						<input id="type" name="type" class="mini-combobox" required="true" style="width: 150px;" textField="zdName" valueField="zdValue" 
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_SQL_TYPE"   value="${obj.type }" allowInput="false" />
					</td>
				</tr>
				<tr>
					<td class="tab_label">SQL语句：</td>
					<td class="tab_field_nr" colspan="3" style="height: 200px;">
						<input class="mini-textarea" required="true" id="sql" name="sql" value="${obj.sql}" style="width: 99%;height:99%" />
					</td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;" iconCls="icon-cancel">取消</a>
		</div>
	</form>
</body>
</html>