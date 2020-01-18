<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>授信信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_sxqk.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript">
	var flagData = [ {
		id : '1',
		text :'是'
	}, {
		id : '2',
		text :'否'
	} ];
	var khlx = '${obj.khlx }';
	var sxhm = '${obj.sxhm }';
	var cwzdm = '${cwzdm }';
</script>

</head>
<body style="overflow-y: auto; position: relative;">
<div style="position: relative;">
	<form id="sxqkForm" method="post">
		<div style="display: none">
			<input class="mini-hidden" id="sxid" name="id" value="${obj.id}" /><input class="mini-hidden" id="id"  value="${obj.id}" /> 
			<input class="mini-hidden" id="khid" name="khid" value="${obj.khid }" /> <input class="mini-hidden" id="sjrq" name="sjrq" value="${obj.sjrq }" />
			<input class="mini-hidden" id="khlx" name="khlx" value="${obj.khlx }" />
			<input class="mini-hidden" id="brno" name="brno" value="${obj.brno }" />
			<input class="mini-hidden" id="khmc" name="khmc" value="${obj.khmc }" />
			<input class="mini-hidden" id="khdm" name="khdm" value="${obj.khdm }" />
		</div>
		<!-- <div style="float: right"><a class="mini-button" onclick="openTableView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a></div> -->
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 120px;" class="tab_label tab_align_c tab_top ">
						授信号：
					</td>
					<td style="width:220px;" class="tab_field tab_top">
						<input name="sxhm" id="sxhm" required="true" vtype="minLength:2" onvalidation="checkSxh"
						class="mini-textbox" style="width: 200px;" value="${obj.sxhm }" />
					</td>
					
					<td style="width: 120px;" class="tab_label tab_align_c tab_top ">
						授信额度:
					</td>
					<td class="tab_field_nr tab_top">
						<input id="sxed" name="sxed" class="mini-spinner" value="${obj.sxed }"
						allowLimitValue="fasle" onvalidation="sxedValid" decimalPlaces="2" changeOnMousewheel="false"/>
					</td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">贷款授信额度：</td>
					<td class="tab_field "><input id="dksxed" name="dksxed" class="mini-spinner" value="${obj.dksxed }"
						onvalidation="dksxedValid" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/>
						</td>
					<td class="tab_label tab_align_c">授信起始日期：</td>
					<td class="tab_field_nr">
						<input name="sxqsrq" id="sxqsrq" class="mini-datepicker"
						onvalidation="sxqsrqValid" format="yyyyMMdd" value="${obj.sxqsrq }" />
					</td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">授信到期日期：</td>
					<td class="tab_field "><input name="sxdqrq" id="sxdqrq" class="mini-datepicker"
						format="yyyyMMdd" onvalidation="sxdqrqValid" value="${obj.sxdqrq }" /></td>
					<td class="tab_label tab_align_c ">贷款余额：</td>
					<td class="tab_field_nr"><input id="dkye" name="dkye" class="mini-spinner" value="${obj.dkye }"
						onvalidation="tykhyeValid" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">持有债券余额：</td>
					<td class="tab_field "><input id="cyzqye" name="cyzqye" class="mini-spinner" value="${obj.cyzqye }"
						onvalidation="tykhyeValid" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/></td>
					<td class="tab_label tab_align_c ">持有股权余额：</td>
					<td class="tab_field_nr"><input id="cygqye" name="cygqye" class="mini-spinner" value="${obj.cygqye }"
						onvalidation="tykhyeValid" allowLimitValue="fasle" decimalPlaces="2" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">其他表内信用风险资产余额：</td>
					<td class="tab_field "><input name="qtbnxyfxzcye" id="qtbnxyfxzcye" class="mini-spinner" decimalPlaces="2"
						value="${obj.qtbnxyfxzcye }" allowLimitValue="false" onvalidation="tykhyeValid" changeOnMousewheel="false"/></td>
					<td class="tab_label tab_align_c ">表外业务余额：</td>
					<td class="tab_field_nr"><input name="bwywye" id="bwywye" class="mini-spinner" decimalPlaces="2"
						value="${obj.bwywye }" allowLimitValue="false" validateOnChanged="false"
						onvalidation="tykhyeValid" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">现有业务余额占用授信额度：</td>
					<td class="tab_field "><input name="xyywyezysxed" id="xyywyezysxed" allowLimitValue="fasle"
						class="mini-spinner" decimalPlaces="2" value="${obj.xyywyezysxed }" onvalidation="tykhyeValid" changeOnMousewheel="false"/></td>
					<td class="tab_label tab_align_c ">贷款余额占用贷款授信额度：</td>
					<td class="tab_field_nr"><input name="dkyezydksxed" id="dkyezydksxed" class="mini-spinner" decimalPlaces="2"
						value="${obj.dkyezydksxed }" allowLimitValue="false" onvalidation="dkyezydksxedValid" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">尚可使用授信额度：</td>
					<td class="tab_field "><input name="sksysxed" id="sksysxed" class="mini-spinner" decimalPlaces="2"
						value="${obj.sksysxed }" allowLimitValue="false" onvalidation="sksysxedValid" changeOnMousewheel="false"/></td>
					<td class="tab_label tab_align_c ">尚可使用贷款授信额度：</td>
					<td class="tab_field_nr"><input name="sksydksxed" id="sksydksxed" class="mini-spinner" decimalPlaces="2"
						style="width: 80px;" value="${obj.sksydksxed }" onvalidation="sksysxedValid"
						allowLimitValue="false" changeOnMousewheel="false"/></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_c ">关联方授信标志：</td>
					<td colspan="3" class="tab_field_nr"><input id="glfsxbz" name="glfsxbz"  class="mini-combobox" style="width: 150px;"
						textField="text" valueField="id" emptyText="请选择..." data="flagData" required="true"
						onvalidation="glfsxbzValid" value="${obj.glfsxbz }" showNullItem="true"
						nullItemText="请选择关联方授信标志..." /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd" iconCls="icon-ok" style="width: 60px; margin-right: 20px;">确定</a>
			<a class="mini-button" iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
	</form>
	</div>
</body>
</html>