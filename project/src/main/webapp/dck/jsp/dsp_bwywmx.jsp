<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>法人表外业务信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_bwywmx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
</head>
<body style="overflow: auto;">
	<form id="dgdkForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="bwywid" name="id" value="${obj.id}" /><input class="mini-hidden" id="id" name="id" value="${obj.id}" /> <input class="mini-hidden" id="sjrq" name="sjrq" value="${obj.sjrq }" /> <input class="mini-hidden" id="khid" name="khid"
				value="${obj.khid}" /> <input class="mini-hidden" id="bwywlx" value="${bwywlx}" />
		</div>
		<!-- <div style="float: right"><a class="mini-button" onclick="openTableView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a></div> -->
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 120px;" class="tab_label tab_align_c tab_top ">承办银行机构：</td>
					<td colspan="3"  class="tab_field_nr tab_top "><input id="cbyhjgdm" name="cbyhjgdm" style="width: 220px;" class="mini-treeselect" url="${base }/sys/bm/getSysBmListToRy.nut" textField="bmName" valueField="bmCode"
						parentField="pId" value="${obj.cbyhjgdm }" allowInput="false" /></td>
				</tr>
				<tr>	
					<td class="tab_label tab_align_c ">发生日期：</td>
					<td class="tab_field_nr tab_field_nb"><input id="fsrq" name="fsrq" class="mini-datepicker" required="true" onvalidation="dateValidate" validateOnChanged="false" style="width: 120px;" format="yyyyMMdd" value="${obj.fsrq }" /></td>
					<td class="tab_label tab_align_c ">到期日期：</td>
					<td class="tab_field_nr "><input id="dqrq" name="dqrq" class="mini-textbox" style="width: 120px;" value="${obj.dqrq }" required="true" onvalidation="dqrqValidate" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">授信号：</td>
					<td class="tab_field_nr tab_field_nb"> <input id="sxhm" name="sxhm" required="true" style="width: 120px;" vtype="minLength:2" class="mini-combobox" showNullItem="true" url="${base }/sxqk/getDspsxqkList.nut?khid=${obj.khid}" textField="sxhm" valueField="sxhm"
						value="${obj.sxhm }"/></td>
					<td class="tab_label tab_align_c ">表外业务类型：</td>
					<td class="tab_field_nr "><input name="bwywlx" required="true"  class="mini-combobox" url="${base }/sys/ggzd/getGgzdList.nut?groupId=bwywlx" textField="zdName" valueField="zdValue" style="width: 120px;"
						value="${obj.bwywlx }" showNullItem="true" popupHeight="160"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">合同号：</td>
					<td class="tab_field_nr tab_field_nb"><input id="hth" name="hth" class="mini-textbox" style="width: 120px;" value="${obj.hth }" /></td>
					<td class="tab_label tab_align_c ">业务号：</td>
					<td class="tab_field_nr "><input id="ywhm" name="ywhm" class="mini-textbox" style="width: 120px;" vtype="minLength:2" value="${obj.ywhm}" onvalidation="ywhmValidate" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">币种：</td>
					<td colspan="3" class="tab_field_nr "><input name="bzdm" class="mini-combobox" showNullItem="true" required="true" style="width: 120px;" popupHeight="140" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=bz" value="${obj.bzdm }" allowInput="false" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">业务余额：</td>
					<td class="tab_field_nr tab_field_nb"><input name="ywye" style="width: 120px;" class="mini-spinner" value="${obj.ywye }" allowLimitValue="false" decimalPlaces="2" onvalidation="ywyeValidate" changeOnMousewheel="false"/></td>
					<td class="tab_label tab_align_c ">保证金金额：</td>
					<td class="tab_field_nr "><input name="bzjje" class="mini-spinner" value="${obj.bzjje }" allowLimitValue="false" decimalPlaces="2" onvalidation="bzjjeValidate" changeOnMousewheel="false"/></td>
				</tr>
			</table>
		</div>
	</form>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" iconCls="icon-ok" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>