<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>法人客户信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
var xzqhdm = '${obj.xzqhdm}';
var fxyjxh = '${obj.fxyjxh}';
var gzsj = "${obj.gzsj}";
var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_check.js"></script>

</head>
<body style="overflow: auto; height: 100%">
	<div class="pTitle">
		法人客户信息填报${sessionScope.isgly}
		<c:if test="${not empty obj.khmc}">
			(${obj.khmc })
		</c:if>
	<!-- <div style="float: right">	<a class="mini-button" onclick="openView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a></div> -->
	</div>
	<div id="tabs1" class="mini-tabs" activeIndex="0" style="width: 100%; height: 80%;" plain="false" tabPosition="left">
		<div title="法人客户基本信息">
			<form id="frkhxxForm" method="post" action="">
				<div style="display: none;">
					<input class="mini-hidden" id="frkhxxId" name="id" value="${obj.id}" />
					<input class="mini-hidden" id="sjrq" name="sjrq" value="${obj.sjrq}" /> 
					<input class="mini-hidden" name="khlx" value="${obj.khlx}" />
					<input class="mini-hidden" name="gxrid" id="gxrid" value="" />
					<input name="hjhshfxfl" id="hjhshfxfl" class="mini-hidden" style="width: 180px;" value="" /> 
				</div>
				<table cellpadding="6" cellspacing="0">
					<tr>
						<td style="width: 90px;">机构代码：</td>
						<td colspan="2"><input id="brno" name="brno" style="width: 240px;" class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" valueField="bmCode" parentField="pId"
							value="${obj.brno }" allowInput="false" /></td>
					</tr>
					<tr>
						<td style="width: 120px;">客户号：</td>
						<td><input id="khdm" name="khdm" required="true" class="mini-textbox" style="width: 180px;" value="${obj.khdm }" /></td>
						<td>客户名称：</td>
						<td><input id="khmc" name="khmc" required="true" class="mini-textbox" style="width: 180px;" value="${obj.khmc }"/></td>
					</tr>
					<tr>
						<td>国别代码：</td>
						<td><input name="gbdm" id="gbdm" style="width: 180px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=GBDM" textField="zdName" parentField="pId"
							valueField="zdValue" value="${obj.gbdm }" onbeforenodeselect="beforegbdmselect" resultAsTree="false" allowInput="false" /></td>
						<td valign="top">国别名称：</td>
						<td><input name="zcgjhdq" id="gbmc" vtype="minLength:2" validateOnChanged="false" class="mini-textbox" style="width: 180px;" value="${obj.zcgjhdq }" readonly="readonly" /></td>
					</tr>
					<tr>
						<td style="width: 120px;">组织机构代码：</td>
						<td><input name="zzjgdm" id="zzjgdm" class="mini-textbox" style="width: 180px;" value="${obj.zzjgdm }"  onvalidation="zzjgdmValidate" /></td>
						<td>组织机构更新日期：</td>
						<td><input name="jgdmgxrq" id="jgdmgxrq" class="mini-textbox" style="width: 180px;" value="${obj.jgdmgxrq }" onvalidation="jgdmgxrqValidate" /></td>
					</tr>
					<tr>
						<td style="width: 120px;">登记注册代码：</td>
						<td><input name="djzcdm" id="djzcdm" class="mini-textbox" vtype="minLength:2" style="width: 180px;" value="${obj.djzcdm }"  onvalidation="djzcdmValidate" /></td>
						<td>登记更新日期：</td>
						<td><input name="zcdmgxrq" id="zcdmgxrq" class="mini-textbox" style="width: 180px;" value="${obj.zcdmgxrq }" onvalidation="zcdmgxrqValidate" /></td>
					</tr>
					<tr>
						<td style="width: 120px;">行政区划代码：</td>
						<td><input id="xzqhdmMc" name="xzqhdmMc" style="width: 180px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=xzqhdm" textField="zdName" parentField="pId" valueField="zdValue"
							 onbeforenodeselect="beforXzqhdmselect" resultAsTree="false" allowInput="false" /></td>
						<td><input name="xzqhdm" id="xzqhdm" required="true" vtype="minLength:2" validateOnChanged="false" onvalidation="xzqudavalidat" class="mini-textbox" style="width: 90px;" value="${obj.xzqhdm }" readonly="readonly" /></td>
					</tr>
					<tr>
						<td>注册地址：</td>
						<td colspan='3'><input name="zcdz" id="zcdz"  required="true" class="mini-textbox" vtype="minLength:2" style="width: 282px;" value="${obj.zcdz }" onvalidation="zcdzValidate" /></td>
					</tr>
					<tr>
						<td>上市公司信息：</td>
						<td colspan='3'><input name="ssbz" id="ssbz"  class="mini-textbox" style="width: 282px;" value="${obj.ssbz }" /></td>
					</tr>
					<tr><!-- TODO  -->
						<td valign="top">风险预警信号：</td>
						<td colspan='3'><input name="fxyjxh" id="fxyjxh" style="width: 400px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=frfxyj" textField="zdName" multiSelect="true"
							parentField="pId" valueField="zdValue"  resultAsTree="false" allowInput="false" /></td>
					</tr>
					<tr><!-- TODO  -->
						<td valign="top">关注事件：</td>
						<td colspan='3'><input name="gzsj" id="gzsj" style="width: 400px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=frgzsj" textField="zdName" multiSelect="true"
							parentField="pId" valueField="zdValue"  resultAsTree="false" allowInput="false" /></td>
					</tr>
					<tr>
						<td style="width: 120px;">违约概率：</td>
						<td><input name="wygl" id="wygl" class="mini-spinner" decimalPlaces="2" allowLimitValue="true" maxValue="1" style="width: 180px;" value="${obj.wygl }" onvalidation="wyglValidate" vType="float" changeOnMousewheel="false"/></td>
						<td>信用评级结果：</td>
						<td><input name="xypjjg" id="xypjjg" class="mini-textbox" style="width: 180px;" value="${obj.xypjjg }" /></td>
					</tr>
					<tr>
						<td>客户类型：</td>
						<td><input id="khlx" showNullItem="true" name="khlx" class="mini-combobox" style="width: 180px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=khlx"
							value="${obj.khlx }" allowInput="false" onvalidation="khlxvalidat"/></td>
					</tr>
					<tr>
						<td style="width: 120px;">客户所属行业代码：</td>
						<td><input id="khsshymc" style="width: 180px;" required="true" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=hyfl" textField="zdName" parentField="pId"
							onbeforenodeselect="beforekhsshymcselect" valueField="zdValue" value="${obj.khsshydm }" resultAsTree="false" allowInput="false" /></td>
						<td><input name="khsshydm" id="khsshydm" required="true" class="mini-textbox" style="width: 90px;" value="${obj.khsshydm }" readonly="readonly" /></td>
					</tr>
					<tr>
						<td>贷款卡号：</td>
						<td><input name="dkkh" id="dkkh" class="mini-textbox" style="width: 180px;" value="${obj.dkkh }" onvalidation="onICCardsValidation" /></td>
					</tr>
				</table>
				<fieldset style="border: solid 1px #aaa;">
					<legend>财务报表信息</legend>
					<table cellpadding="4" cellspacing="2">
						<tr>
							<td>财务报表类型：</td>
							<td><input id="cwbblx" showNullItem="true" name="cwbblx" class="mini-combobox" style="width: 180px;" textField="zdName" valueField="zdValue"
								url="${base }/sys/ggzd/getGgzdList.nut?groupId=cwbblx" value="${obj.cwbblx }" allowInput="false" onvalidation="cwbblxvalidat"/></td>
							<td style="width: 120px;">财务报表日期：</td>
							<td><input name="cwbbrq" id="cwbbrq" class="mini-datepicker" style="width: 180px;" format="yyyyMMdd" value="${obj.cwbbrq }" onvalidation="cwbbrqValidate" /></td>
						</tr>
						<tr>
							<td style="width: 120px;">资产总额：</td>
							<td><input name="zcze" id="zcze" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.zcze }" onvalidation="zczeValidate" changeOnMousewheel="false"/></td>
							<td>负债总额：</td>
							<td><input name="fzze" id="fzze" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.fzze }" onvalidation="fzzeValidate" changeOnMousewheel="false"/></td>
						</tr>
						<tr>
							<td style="width: 120px;">税前利润：</td>
							<td><input name="sqlr" id="sqlr" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.sqlr }" onvalidation="sqlrValidate" changeOnMousewheel="false"/></td>
							<td>主营业务收入：</td>
							<td><input name="zyywsr" id="zyywsr" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.zyywsr }" onvalidation="fzzeValidate" changeOnMousewheel="false"/></td>
						</tr>
						<tr>
							<td>应收账款：</td>
							<td><input name="yszk" id="yszk" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.yszk }"  changeOnMousewheel="false"/></td>
							<td style="width: 120px;">其他应收款：</td>
							<td><input name="qtysk" id="qtysk" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.qtysk }" changeOnMousewheel="false"/></td>
						</tr>
						<tr>
							<td>流动资产合计：</td>
							<td><input name="ldzchj" id="ldzchj" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.ldzchj }" onvalidation="wyglValidate" changeOnMousewheel="false"/></td>
							<td style="width: 120px;">流动负债合计：</td>
							<td><input name="ldfzhj" id="ldfzhj" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.ldfzhj }" onvalidation="wyglValidate" changeOnMousewheel="false"/></td>
						</tr>
						<tr>
							<td style="width: 120px;">存货：</td>
							<td><input name="ch" id="ch" class="mini-spinner" decimalPlaces="2" allowLimitValue="false" style="width: 125px;" value="${obj.ch }" changeOnMousewheel="false"/></td>
						</tr>
					</table>
				</fieldset>
			</form>
		</div>
		<c:if test="${not empty obj.id}">
			<div title="股东及关联企业" name="gdjglqy" url="${base }/dck/jsp/dsp_frkhxx_zygdjglqyxx.jsp?khid=${obj.id}"></div>
			<div title="授信情况" name="sxqk" url="${base }/dck/jsp/dsp_frkhxx_sxqk.jsp?khid=${obj.id}"></div>
			<div title="对公贷款明细" name="dgdk" url="${base }/dck/jsp/dsp_frkhxx_dgdkxx.jsp?khid=${obj.id}"></div>
			<div title="表外合同明细" name="bwht" url="${base }/dck/jsp/dsp_frkhxx_bwywxx.jsp?khid=${obj.id}"></div>
			<div title="持有企业债券明细" name="cyqyzq" url="${base }/dck/jsp/dsp_frkhxx_cyqyzqmx.jsp?frkhxxId=${obj.id }"></div>
			<div title="持有企业股权明细" name="cyqygq" url="${base }/dck/jsp/dsp_frkhxx_cyqygqmx.jsp?frkhxxId=${obj.id }"></div>
			<div title="法人客户担保信息" name="frdb" url="${base }/dck/jsp/dsp_frkhxx_dgdbxx.jsp?khid=${obj.id}"></div>
		</c:if>
	</div>

	<div style="text-align: center; padding: 18px;">
		<a class="mini-button" onclick="onAdd" iconCls="icon-save" style="width: 60px; margin-right: 20px;">保存</a> <a class="mini-button" onclick="onCancel" iconCls="icon-cancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>