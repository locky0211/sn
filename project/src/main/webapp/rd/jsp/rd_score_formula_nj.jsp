<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>校验公式维护</title>
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_score_formula_nj.js"></script>
<script>
	var flag = '${param.flag}'
</script>
</head>
<body>
	<form id="editForm">
		<input class="mini-hidden"  id="id" name="id" value="${obj.id}" style="width: 99%" />
		<table class="tab" style="width: 100%; height: 20px;" cellpadding="6" cellspacing="0">
			<tr>
				<td class="tab_label" style="width: 12%">指标名称</td>
				<td class="tab_field_nr" style="width: 38%"><input class="mini-textbox" required="true" id="zbmc" name="zbmc" value="${obj.zbmc}" style="width: 99%" /></td>
				<td class="tab_label" style="width: 12%">扣分上限</td>
				<td class="tab_field_nr" style="width: 38%"><input class="mini-textbox" required="true" id="maxPoints" name="maxPoints" value="${obj.maxPoints}" style="width: 99%" /></td>

			</tr>
			<tr>
				<td class="tab_label">指标类别</td>
				<td class="tab_field_nr" style="width: 38%"><input class="mini-combobox" required="true" id="zblb" name="zblb" value="${obj.zblb}" textField="zdName" valueField="zdValue" url="${base}/sys/ggzd/getGgzdList.nut?groupId=INDEXTYPE"  allowInput="false" style="width: 99%" /></td>
				<td class="tab_label">分值</td>
				<td class="tab_field_nr" style="width: 38%"><input id="fz" class="mini-textbox" value="${obj.fz}" style="width: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">公式内容</td>
				<td class="tab_field_nr" colspan="3" style="height: 150px;"><input class="mini-textarea" required="true" id="formula" name="formula" value="${obj.formula}" style="width: 99%; height: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">打分标准</td>
				<td class="tab_field_nr" colspan="3" style="height: 40px;"><input class="mini-textarea" required="true" id="scoreStandard" name="scoreStandard" value="${obj.scoreStandard}" style="width: 99%; height: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">指标说明</td>
				<td class="tab_field_nr" colspan="3" style="height: 40px;"><input class="mini-textarea" id="zbsm" name="zbsm" value="${obj.zbsm}" style="width: 99%; height: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">扣分说明</td>
				<td class="tab_field_nr" colspan="3" style="height: 40px;"><input class="mini-textarea" id="kfsm" name="kfsm" value="${obj.kfsm}" style="width: 99%; height: 99%" /></td>
			</tr>
			<tr>
				<td class="tab_label">计算方法说明</td>
				<td class="tab_field_nr" colspan="3" style="height: 40px;"><input class="mini-textarea" id="jsffsm" name="jsffsm" value="${obj.jsffsm}" style="width: 99%; height: 99%" /></td>
			</tr>
		</table>
	</form>
	<p>打分标准说明  ：1.比如打分标准显示11-20-1 表示经公式计算出的结果在11至20（含）之间扣1分。2.打分标准显示"="表示直接采用打分公式计算出来的结果作为扣分。3.扣分上限表示该条公式以及其子类的扣分总和最大不得超过扣分上限，超过按扣分上限扣分。</p>
	<br>
	<div style="text-align: center;">
		<a class="mini-button" onclick="onSave" style="width: 60px; margin-right: 10px;" iconCls="icon-ok">确定</a> <a class="mini-button" onclick="onCancel" style="width: 60px;" iconCls="icon-cancel">取消</a>
	</div>
</body>
</html>