<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>法人客户担保信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhdb.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
</head>
<body style="overflow: auto;">
	<form id="frdbForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="frdbid" name="id" value="${obj.id}" /><input class="mini-hidden" id="id" name="id" value="${obj.id}" /><input id="sjrq" name="sjrq" class="mini-hidden" value="${obj.sjrq }" /> <input id="dbhth" name="dbhth" class="mini-hidden"
				value="${obj.dbhth }" /> <input class="mini-hidden" name="khid" value="${obj.khid}" /><input id="dbhtlx" name="dbhtlx" class="mini-textbox" value="${obj.dbhtlx }" />
		</div>
		<!-- <div style="float: right"><a class="mini-button" onclick="openTableView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a></div> -->
		<div>
			<table class="tab" cellpadding="4" cellspacing="0">
				<tr>
					<td style="width: 120px;" class="tab_label tab_align_c tab_top ">贷款合同号:</td>
					<td style="width:180px;" class="tab_field tab_top"><input id="dkhbwywhth" name="dkhbwywhth" required="true" showNullItem="true" class="mini-combobox" style="width: 180px;" textField="dkhth" valueField="dkhth" emptyText="请选择贷款或表外业务合同号..."
						url="${base }/dkmx/getDspDkmxAndBwywmxList.nut?khid=${obj.khid }" value="${obj.dkhbwywhth }" allowInput="false" /></td>
					<td style="width: 160px;" class="tab_label tab_align_c tab_top ">合同类型:</td>
					<td class="tab_field_nr tab_top"><input name="dbhtlx" required="true" class="mini-combobox" style="width: 180px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=dbhtlx"
						value="${obj.dbhtlx }" showNullItem="true" allowInput="false" popupHeight="120"/></td>
				</tr>
			
				<tr>
					<td style="width: 120px;" class="tab_label tab_align_c tab_top ">担保合同号:</td>
					<td style="width:200px;" class="tab_field tab_top"><input id="dbhth" style="width:180px;" name="dbhth" class="mini-textbox" value="${obj.dbhth }" /></td>
					<td style="width: 160px;" class="tab_label tab_align_c tab_top ">押品评估价值(或保证金额)：</td>
					<td class="tab_field_nr tab_top"><input name="yppgjzhbzje" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 100px;" value="${obj.yppgjzhbzje }"  onvalidation="yppgjzhbzjeValidate" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">押品类型：</td>
					<td class="tab_field "><input id="yplx" name="yplx" style="width: 180px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=ypfl" textField="zdName" parentField="pId" valueField="zdValue"
						value="${obj.yplx }" onbeforenodeselect="beforenodeselect" resultAsTree="false" allowInput="false" /></td>
					<td class="tab_label tab_align_c">押品名称：</td>
					<td class="tab_field_nr"><input id="ypmc" name="ypmc" class="mini-textbox" style="width: 180px;" value="${obj.ypmc }" vtype="minLength:2" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">押品代码：</td>
					<td class="tab_field "><input id="ypdm" name="ypdm" class="mini-textbox" style="width: 180px;" value="${obj.ypdm }" onvalidation="ypdmValidate" /></td>
					<td class="tab_label tab_align_c ">首次估值日期：</td>
					<td class="tab_field_nr"><input id="scgzrq" name="scgzrq" class="mini-datepicker" style="width: 180px;" format="yyyyMMdd" value="${obj.scgzrq }" onvalidation="scgzrqValidate" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">最新估值日期：</td>
					<td class="tab_field "><input id="zxgzrq" name="zxgzrq" class="mini-datepicker" style="width: 180px;" format="yyyyMMdd" value="${obj.zxgzrq }" onvalidation="zxgzrqValidate" /></td>
					<td class="tab_label tab_align_c ">估值到期日期：</td>
					<td class="tab_field_nr"><input id="gzdqrq" name="gzdqrq" class="mini-datepicker" style="width: 180px;" format="yyyyMMdd" value="${obj.gzdqrq }" onvalidation="gzdqrqValidate" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">审批抵质押率：</td>
					<td class="tab_field_nr" colspan="3"><input id="spdzyl" name="spdzyl" class="mini-spinner" decimalPlaces="2" onvalidation="spsjdzyl" style="width: 180px;" value="${obj.spdzyl }" vType="float" changeOnMousewheel="false"/></td>
				</tr>
			</table>
			<fieldset style="border-top: solid 1px #aaa;padding: 5px;">
				<legend>押品权属人（或保证人）信息</legend>
				<table class="tab" cellpadding="4" cellspacing="0" style="border-left: 1px solid #99BBE8;border-right: 1px solid #99BBE8;" >
					<tr>
						<td style="width: 120px;" class="tab_label tab_align_c tab_top ">类型：</td>
						<td style="width:180px;" class="tab_field tab_top"><input id="ypqsrhbzrlx" name="ypqsrhbzrlx" class="mini-combobox" showNullItem="true" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=ypqsrhbzrlx"
							value="${obj.ypqsrhbzrlx }" allowInput="false" /></td>
						<td style="width: 160px;" class="tab_label tab_align_c tab_top ">名称：</td>
						<td class="tab_field_nr tab_top"><input id="ypqsrhbzrmc" name="ypqsrhbzrmc" class="mini-textbox" required="true" style="width: 166px;" value="${obj.ypqsrhbzrmc }" onvalidation="ypqsrhbzrmcValidate" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">证件类型：</td>
						<td class="tab_field "><input id="ypqsrhbzrzjlx" name="ypqsrhbzrzjlx" style="width: 170px;" class="mini-combobox" showNullItem="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zjlx" textField="zdName" valueField="zdValue"
							required="true" value="${obj.ypqsrhbzrzjlx }" onvalidation="ypqsrhbzrzjlxValidate" /></td>
						<td class="tab_label tab_align_c ">证件代码：</td>
						<td class="tab_field_nr"><input id="ypqsrhbzrzjdm" name="ypqsrhbzrzjdm" class="mini-textbox" style="width: 166px;" vType="minLength:2" value="${obj.ypqsrhbzrzjdm }" onvalidation="ypqsrhbzrzjdmValidate" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">保证人保证能力上限：</td>
						<td class="tab_field "><input id="bzrbznlsx" name="bzrbznlsx" class="mini-textbox" value="${obj.bzrbznlsx }" onvalidation="spdzylValidate" /></td>
						<td class="tab_label tab_align_c ">是否第三方：</td>
						<td class="tab_field_nr"><input id="ypqsrsfdsf" name="ypqsrsfdsf" class="mini-combobox" showNullItem="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=bs" textField="zdName" valueField="zdValue" value="${obj.ypqsrsfdsf }" /></td>
					</tr>
				</table>
			</fieldset>
		</div>
		<br />
			<div style="text-align: center; padding: 10px;">
				<a class="mini-button" iconCls="icon-ok" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" iconCls="icon-cancel"  onclick="onCancel" style="width: 60px;">取消</a>
			</div>
	</form>
</body>
</html>