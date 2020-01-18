<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>股东及关联企业维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_zygdjglqyxx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
</head>
<body style="overflow: auto;">
	<form id="gdjglqyForm" method="post">
		<div style="display: none">
			<input class="mini-hidden" name="id" id="id" value="${obj.id}" /> <input class="mini-hidden" name="khid" id="khid" value="${obj.khid}" /> <input class="mini-hidden" id="sjrq" name="sjrq"
				value="${obj.sjrq}" />
		</div>
		<!-- <div style="float: right"><a class="mini-button" onclick="openTableView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a></div> -->
		<div>
			<table class="tab" cellpadding="10" cellspacing="0" >
				<tr>
					<td style="width: 120px;" class="tab_label tab_align_c tab_top ">关系类型：</td>
					<td colspan="3"  class="tab_field_nr tab_top "><input id="gllx" showNullItem="true" name="gllx" required="true" class="mini-combobox" style="width: 250px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=gllx" value="${obj.gllx }" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">国别代码：</td>
					<td colspan="3"  class="tab_field_nr "><input id="gbdm" name="gbdm" style="width: 180px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=GBDM" textField="zdName" parentField="pId" valueField="zdValue"
						value="${obj.gbdm }" onbeforenodeselect="beforegbdmselect" resultAsTree="false" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">股东及关联企业类型:</td>
					<td class="tab_field_nr tab_field_nb"><input id="gdhglqylx" name="gdhglqylx" required="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=sjkzrlx" class="mini-combobox" style="width: 180px;" textField="zdName"
						valueField="zdValue" showNullItem="true" value="${obj.gdhglqylx }" onvalidation="qylxValidate" /></td>
					<td class="tab_label tab_align_c ">股东及关联企业名称:</td>
					<td class="tab_field_nr "><input id="gdhglqymc" name="gdhglqymc" required="true" class="mini-textbox" vtype="minLength:2" style="width: 180px;" value="${obj.gdhglqymc }"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">股东及关联企业证件类型:</td>
					<td class="tab_field_nr tab_field_nb"><input id="gdhgkqyzjlx" name="gdhgkqyzjlx" required="true" class="mini-combobox" showNullItem="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zjlx" style="width: 180px;" textField="zdName"
						valueField="zdValue" value="${obj.gdhgkqyzjlx }" onvalidation="zjlxValidate" /></td>
					<td class="tab_label tab_align_c ">股东及关联企业证件代码:</td>
					<td class="tab_field_nr "><input id="gdhglqyzjdm" name="gdhglqyzjdm" class="mini-textbox" style="width: 180px;" value="${obj.gdhglqyzjdm }" onvalidation="zjdmValidate" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">登记注册代码:</td>
					<td class="tab_field_nr tab_field_nb"><input name="djzcdm" vtype="minLength:2" class="mini-textbox" style="width: 180px;" value="${obj.djzcdm }" onvalidation="djzcdmValidate" /></td>
					<td class="tab_label tab_align_c ">股东及关联企业客户代码:</td>
					<td class="tab_field_nr "><input id="gdhglqykhdm" name="gdhglqykhdm" required="true" vtype="minLength:2" class="mini-textbox" style="width: 180px;" value="${obj.gdhglqykhdm }" onvalidation="gdhglqykhdmValidate" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">持股比例:</td>
					<td colspan="3" class="tab_field_nr "><input id="cgbl" name="cgbl" vtype="range:0,100" class="mini-textbox" style="width: 180px;" value="${obj.cgbl }" onvaluechanged="cgblValuechanged" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">股东结构对应日期:</td>
					<td class="tab_field_nr tab_field_nb"><input id="gdjgdyrq" name="gdjgdyrq" class="mini-textbox" style="width: 180px;" value="${obj.gdjgdyrq }" onvalidation="gdjgdyrqValidate" /></td>
					<td class="tab_label tab_align_c ">实际控制人标识:</td>
					<td class="tab_field_nr "><input name="sjkzrbs" required="true" class="mini-combobox" showNullItem="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=bs" style="width: 180px;" value="${obj.sjkzrbs }" textField="zdName"
						valueField="zdValue" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">更新信息日期:</td>
					<td colspan="3" class="tab_field_nr "><input id="gxxxrq" name="gxxxrq" class="mini-textbox" style="width: 180px;" value="${obj.gxxxrq }" onvalidation="dateValidate" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" iconCls="icon-ok" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>