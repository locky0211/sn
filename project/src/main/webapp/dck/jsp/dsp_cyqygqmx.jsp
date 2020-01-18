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
<script type="text/javascript" src="${base }/dck/js/dsp_cyqygqmx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
</head>
<body style="overflow: auto;">
	<form id="cyqygqForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="bwywid" name="id" value="${obj.id}" /><input class="mini-hidden" id="id" name="id" value="${obj.id}" /> 
			<input class="mini-hidden" id="sjrq" name="sjrq" value="${obj.sjrq }" />  <input class="mini-hidden" id="khid" name="khid" value="${obj.khid }" />
		</div>
		<br />
		<!-- <div style="float: right;margin-bottom: 5px;">	<a class="mini-button" onclick="openTableView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a></div> -->
		<div>
			<table class="tab" cellpadding="8" cellspacing="0">
				<tr>
					<td style="width: 90px;" class="tab_label tab_align_r tab_top ">持有行机构：</td>
					<td class="tab_field_nr tab_top "><input name="cyhjgdm" style="width:200px;" popupHeight="180" class="mini-treeselect" url="${base }/sys/bm/getSysBmListToRy.nut" textField="bmName" valueField="bmCode"
						parentField="pId" value="${obj.cyhjgdm }" allowInput="false" /></td>
				</tr>
				<tr>
					<td  class="tab_label tab_align_r">授信号：</td>
					<td class="tab_field_nr "><input id="sxhm" name="sxhm" showNullItem="true" required="true" vtype="minLength:2" class="mini-combobox" url="${base }/sxqk/getDspsxqkList.nut?khid=${obj.khid}" textField="sxhm" valueField="sxhm"
						style="width: 200px;" value="${obj.sxhm }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">账面余额：</td>
					<td class="tab_field_nr "><input name="zmye" class="mini-spinner" required="true" decimalPlaces="2" value="${obj.zmye }" validateOnChanged="false" onvalidation="jeValidate" changeOnMousewheel="false"/></td>
				</tr>
			</table>
		</div>
	</form>
	<div style="text-align: center; padding: 10px;">
		<a class="mini-button" onclick="onAdd" iconCls="icon-ok" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>