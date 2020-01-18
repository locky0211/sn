<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>法人持有企业债券明细</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_cyqyzqmx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
</head>
<body style="overflow: auto;">
	<form id="cyqyzqForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="bwywid" name="id" value="${obj.id}" /><input class="mini-hidden" id="id" name="id" value="${obj.id}" />
			<input class="mini-hidden" id="sjrq" name="sjrq" value="${obj.sjrq }" />
			<input class="mini-hidden" id="khid" name="khid" value="${obj.khid }" /> 
		</div>
		<!-- <div style="float: right"><a class="mini-button" onclick="openTableView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a></div> -->
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 120px;" class="tab_label tab_align_c tab_top ">持有行机构：</td>
					<td colspan="3"  class="tab_field_nr tab_top "><input name="cyhjgdm" style="width: 220px;" class="mini-treeselect" url="${base }/sys/bm/getSysBmListToRy.nut" textField="bmName" valueField="bmCode" parentField="pId"
						value="${obj.cyhjgdm }" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">授信号：</td>
					<td class="tab_field_nr tab_field_nb"><input id="sxhm" name="sxhm" required="true" vtype="minLength:2" class="mini-combobox" showNullItem="true" url="${base }/sxqk/getDspsxqkList.nut?khid=${obj.khid}" textField="sxhm" valueField="sxhm"
						style="width: 150px;" value="${obj.sxhm }" /></td>
					<td class="tab_label tab_align_c ">账户类型：</td>
					<td class="tab_field_nr "><input name="zhlx" class="mini-combobox" required="true" style="width: 150px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zhlx"
						value="${obj.zhlx }" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">债券代码：</td>
					<td class="tab_field_nr tab_field_nb"><input name="zqdm" class="mini-textbox" required="true" style="width: 150px;" vtype="minLength:2" value="${obj.zqdm }" onvalidation="zqdmValidate" /></td>
					<td class="tab_label tab_align_c ">债券类型：</td>
					<td  class="tab_field_nr "><input name="zqlx" class="mini-combobox" showNullItem="true" required="true" style="width: 150px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zqlx"
						value="${obj.zqlx }" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">发行日期：</td>
					<td class="tab_field_nr tab_field_nb"><input id="fxrq" name="fxrq" class="mini-datepicker" required="true" style="width: 150px;" format="yyyyMMdd" value="${obj.fxrq }" onvalidation="dateValidate" /></td>
					<td class="tab_label tab_align_c ">到期兑付日期：</td>
					<td  class="tab_field_nr "><input id="dqdfrq" name="dqdfrq" class="mini-datepicker" style="width: 150px;" format="yyyyMMdd" value="${obj.dqdfrq }" required="true" validateOnChanged="false"
						onvalidation="dqdfrqValidate" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">债券面值：</td>
					<td class="tab_field_nr tab_field_nb"><input name="zqmz" style="width: 150px;" class="mini-spinner" required="true" decimalPlaces="2" allowLimitValue="false" value="${obj.zqmz }" onvalidation="jeValidate" changeOnMousewheel="false"/></td>
					<td class="tab_label tab_align_c ">账面余额：</td>
					<td  class="tab_field_nr "><input name="zmye" style="width: 150px;" class="mini-spinner" required="true" decimalPlaces="2" allowLimitValue="false" value="${obj.zmye }" onvalidation="jeValidate" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">内部评级：</td>
					<td class="tab_field_nr tab_field_nb"><input name="nbpj" class="mini-textbox" style="width: 150px;" vtype="minLength:2" value="${obj.nbpj }" /></td>
					<td class="tab_label tab_align_c ">外部评级：</td>
					<td  class="tab_field_nr "><input name="wbpj" class="mini-textbox" style="width: 150px;" vtype="minLength:2" value="${obj.wbpj }" /></td>
				</tr>
			</table>
		</div>
	</form>
	<br/>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" iconCls="icon-ok" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" iconCls="icon-cancel"  onclick="onCancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>