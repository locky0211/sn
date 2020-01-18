<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>法人客户贷款信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_dgdkmx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
</head>
<body style="overflow-y: auto; position: relative;">
	<div style="position: relative;">
		<form id="dgdkForm" method="post">
			<div style="display: none;">
				<input class="mini-hidden" id="dgdkid" name="id" value="${obj.id}" /> <input class="mini-hidden" id="id" name="id" value="${obj.id}" /><input
					class="mini-hidden" id="sjrq" name="sjrq" value="${obj.sjrq }" /> <input class="mini-hidden" id="khid" name="khid" value="${param.khid }" />
			</div>
			<!-- <div style="float: right">
				<a class="mini-button" onclick="openTableView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a>
			</div> -->
			<div>
				<table class="tab" cellpadding="6" cellspacing="0">
					<tr>
						<td style="width: 120px;" class="tab_label tab_align_c tab_top ">授信号：</td>
						<td style="width: 220px;" class="tab_field tab_top">
							<input id="sxhm" name="sxhm" required="true" showNullItem="true" vtype="minLength:2" class="mini-combobox" url="${base }/sxqk/getDspsxqkList.nut?khid=${obj.khid}" textField="sxhm" valueField="sxhm"
							style="width: 220px;" value="${obj.sxhm }" />
							</td>
						<td style="width: 120px;" class="tab_label tab_align_c tab_top ">贷款发放类型：</td>
						<td class="tab_field_nr tab_top"><input name="dklx" class="mini-combobox" showNullItem="true" required="true" style="width: 150px;"
							textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=dklx" value="${obj.dklx }" allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">贷款合同号：</td>
						<td class="tab_field "><input id="dkhth" style="width: 220px;" required="true" name="dkhth" class="mini-textbox" value="${obj.dkhth }" ></td>
						<td class="tab_label tab_align_c">借据号:</td>
						<td class="tab_field_nr"><input id="jjh" name="jjh" required="true" vtype="minLength:2" class="mini-textbox" style="width: 200px;"
							value="${obj.jjh }" onvalidation="jjhValid" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">五级分类：</td>
						<td colspan="3" class="tab_field_nr"><input id="wjfl" name="wjfl" class="mini-combobox" showNullItem="true" style="width: 100px;"
							textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=wjfl" value="${obj.wjfl }" allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">贷款类型：</td>
						<td class="tab_field "><input id="dklx" name="dklx" class="mini-combobox" showNullItem="true" required="true" style="width: 150px;"
							textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=dklx" value="${obj.dklx }" allowInput="false"
							onvaluechanged="dklxValuechanged" /></td>
						<td class="tab_label tab_align_c ">贷款业务种类：</td>
						<td class="tab_field_nr"><input id="dkyw" name="dkyw" class="mini-combobox" showNullItem="true" textField="zdName" valueField="zdValue"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=dkywzl" value="${obj.dkyw }" allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">币种：</td>
						<td colspan="3" class="tab_field_nr"><input name="bzdm" class="mini-combobox" showNullItem="true" required="true" style="width: 100px;"
							textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=bz" value="${obj.bzdm }" allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">担保方式：</td>
						<td class="tab_field "><input id="dbfs" name="dbfs" class="mini-combobox" showNullItem="true" style="width: 80px;" textField="zdName"
							valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=dbfs" value="${obj.dbfs }" allowInput="false" /></td>
						<td class="tab_label tab_align_c ">投向行业：</td>
						<td class="tab_field_nr"><input id="txhy" name="txhy" style="width: 220px;" class="mini-treeselect"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=hyfl" onbeforenodeselect="beforenodeselect" textField="zdName" valueField="zdValue" parentField="pId" value="${obj.txhy }"
							allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">发放金额：</td>
						<td class="tab_field "><input id="ffje" name="ffje" class="mini-spinner" required="true" decimalPlaces="2" allowLimitValue="false"
							value="${obj.ffje }" onvalidation="ffjeValid" changeOnMousewheel="false"/></td>
						<td class="tab_label tab_align_c ">发放日期：</td>
						<td class="tab_field_nr"><input id="ffrq" name="ffrq" class="mini-datepicker" required="true" format="yyyyMMdd" value="${obj.ffrq }"
							onvalidation="ffrqValid" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">贷款余额：</td>
						<td class="tab_field "><input id="dkye" name="dkye" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" value="${obj.dkye }"
							validateOnChanged="false" onvalidation="dkyeValid" changeOnMousewheel="false"/></td>
						<td class="tab_label tab_align_c ">到期日期：</td>
						<td class="tab_field_nr"><input id="dqrq" name="dqrq" class="mini-textbox" value="${obj.dqrq }" required="true" onvalidation="dqrqValid" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">欠本余额：</td>
						<td class="tab_field "><input id="qbye" name="qbye" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" value="${obj.qbye }"
							onvalidation="qbyeValid" changeOnMousewheel="false"/></td>
						<td class="tab_label tab_align_c ">欠本天数：</td>
						<td class="tab_field_nr"><input id="qbts" name="qbts" class="mini-textbox" vtype="int" style="width: 120px;" value="${obj.qbts }"
							onvalidation="qbtsValid" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">欠息余额：</td>
						<td class="tab_field "><input id="qxye" name="qxye" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" value="${obj.qxye }"
							onvalidation="qxyeValid" changeOnMousewheel="false"/></td>
						<td class="tab_label tab_align_c ">欠息天数：</td>
						<td class="tab_field_nr"><input id="qxts" name="qxts" class="mini-textbox" value="${obj.qxts }" vType="int" style="width: 120px;"
							onvalidation="qxtsValid" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">本期还款：</td>
						<td colspan="3" class="tab_field_nr"><input id="bqhk" name="bqhk" class="mini-spinner" decimalPlaces="2" allowLimitValue="false"
							value="${obj.bqhk }" onvalidation="bqhkValid" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">还本方式：</td>
						<td class="tab_field "><input name="hbfs" class="mini-combobox" showNullItem="true" required="true" textField="zdName" valueField="zdValue"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=hbfs" value="${obj.hbfs }" allowInput="false" /></td>
						<td class="tab_label tab_align_c ">还息方式：</td>
						<td class="tab_field_nr"><input name="hxfs" class="mini-combobox" showNullItem="true" required="true" textField="zdName"
							valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=hxfs" value="${obj.hxfs }" allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">下期还本金额：</td>
						<td class="tab_field "><input id="xqhbje" name="xqhbje" class="mini-spinner" decimalPlaces="2" allowLimitValue="false"
							value="${obj.xqhbje }" onvalidation="xqhbjeValid" changeOnMousewheel="false"/></td>
						<td class="tab_label tab_align_c ">下期还本日期：</td>
						<td class="tab_field_nr"><input id="xqhbrq" name="xqhbrq" class="mini-datepicker" format="yyyyMMdd" value="${obj.xqhbrq }"
							onvalidation="xqhbrqValid" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">下期还息金额：</td>
						<td class="tab_field "><input id="xqhxje" name="xqhxje" class="mini-spinner" decimalPlaces="2" allowLimitValue="false"
							value="${obj.xqhxje }" onvalidation="xqhxjeValid" changeOnMousewheel="false"/></td>
						<td class="tab_label tab_align_c ">下期还息日期：</td>
						<td class="tab_field_nr"><input id="xqhxrq" name="xqhxrq" class="mini-datepicker" format="yyyyMMdd" value="${obj.xqhxrq }"
							onvalidation="xqhxrqValid" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">减值准备：</td>
						<td colspan="3" class="tab_field_nr"><input id="jzzb" name="jzzb" class="mini-spinner" decimalPlaces="2" allowLimitValue="false"
							value="${obj.jzzb }" onvalidation="jzzbValid" changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">产业结构调整类型：</td>
						<td class="tab_field "><input name="cyjgtzlx" class="mini-combobox" showNullItem="true" style="width: 120px;" textField="zdName"
							valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=cyjgtzlx" value="${obj.cyjgtzlx }" allowInput="false" /></td>
						<td class="tab_label tab_align_c ">工业转型升级标识：</td>
						<td class="tab_field_nr"><input id="gyzxsjbs" name="gyzxsjbs" class="mini-combobox" style="width: 80px;" textField="zdName"
							valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=bs" value="${obj.gyzxsjbs }" allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">战略新兴产业类型：</td>
						<td class="tab_field "><input name="zlxxcylx" class="mini-combobox" showNullItem="true" style="width: 120px;" textField="zdName"
							valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zlxxcylx" value="${obj.zlxxcylx }" allowInput="false" /></td>
						<td class="tab_label tab_align_c ">银团贷款标志：</td>
						<td class="tab_field_nr"><input name="ytdkbs" showNullItem="true" class="mini-combobox" style="width: 100px;" textField="zdName"
							valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=ytdkbs" value="${obj.ytdkbs }" allowInput="false" /></td>
					</tr>
					<tr>
						<td class="tab_label tab_align_c ">支付方式：</td>
						<td colspan="3" class="tab_field_nr"><input id="zffs" name="zffs" class="mini-combobox" showNullItem="true" style="width: 100px;"
							textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zffs" value="${obj.zffs }" allowInput="false" /></td>
					</tr>
				</table>
			</div>
		</form>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" iconCls="icon-ok" onclick="onAdd" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button"
				iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
		</div>
		<br />
	</div>
</body>
</html>