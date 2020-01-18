<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>总分平衡指标计算公式表</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base}/ews/js/score_zfph_sql_sls.js"></script>


<script>
	var zbbh = '${obj.zbbh}'
</script> 

</head>
<body>
	
	<form id="scoreZfghForm">
		
		<table class="tab" style="width: 100%;  height: 20px;" cellpadding="6"
				cellspacing="0">
								
				<tr>
					
					<td class="tab_label" style="width: 12%">指标编号</td>
					<td class="tab_field_nr" style="width: 38%"><input     
						class="mini-textbox" required="true" id="zbbh" name="zbbh"
						value="${obj.zbbh}" style="width: 90%" readonly="readonly" onvalidation="zbbhIsOnly"/></td>
					
					<td class="tab_label" style="width: 12%">指标名称</td>
					<td class="tab_field_nr" style="width: 38%"><input
						class="mini-textbox" required="true" id="zbmc" name="zbmc"
						value="${obj.zbmc}" style="width: 98%" /></td>
				</tr>
				<tr>
					<td class="tab_label">计算公式</td>
					<td class="tab_field_nr" colspan="3" style="height: 140px"><input
						class="mini-textarea" required="true" id="staSql" name="staSql"
						value="${obj.staSql}" style="width: 99%;height:130px" /></td>
				</tr>
				<tr>
					<td class="tab_label">公式说明</td>
					<td class="tab_field_nr" colspan="3" style="height: 110px"><input
						class="mini-textarea" required="true" id="sqlExplain" name="sqlExplain"
						value="${obj.sqlExplain}" style="width: 99%;height: 100px" /></td>
				</tr>
	
			</table>
	</form>
	
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onSave"
			style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a
			class="mini-button" onclick="onCancel" style="width: 60px;"
			iconCls="icon-cancel">取消</a>
	</div>
	
</body>
</html>