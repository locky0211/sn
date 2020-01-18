<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>个人客户信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var cwzdm = '${cwzdm }';
</script>
<script type="text/javascript" src="${base }/dck/js/dsp_setCls.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_grkhdb.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_openQdxjyView.js"></script>
<script type="text/javascript" src="${base }/dck/js/dsp_grkhdb_check.js"></script>
</head>
<body style="overflow: auto; height: 100%">
	<div class="pTitle">
		个人客户信息填报
		<c:if test="${not empty obj.jkrxm}">
			(${obj.jkrxm })
		</c:if>
		<!-- <div style="float: right">
			<a class="mini-button" onclick="openView" iconCls="icon-view" plain="true" style="width: 120px;">查看校验结果</a>
		</div> -->
	</div>
	<div id="tabs1" class="mini-tabs" activeIndex="0" style="width: 100%; height: 80%;" plain="false" tabPosition="left">
		<div title="客户基本信息">
			<form id="grkhdbForm" method="post" action="">
				<div style="display: none;">
					<input class="mini-hidden" id="grkhdbId" name="id" value="${obj.id}" /> <input
						class="mini-hidden" name="id" id="khjbxxid" value="${obj.id}" /> <input class="mini-hidden" id="sjrq" name="sjrq"
						value="${obj.sjrq}" />
				</div>
				<table cellpadding="6" cellspacing="0">
					<tr>
						<td style="width: 90px;">机构名称：</td>
						<td colspan="3">
							<input id="brno" style="width: 240px;" class="mini-treeselect" url="${base }/sys/bm/getSysBmList.nut"
								textField="bmName" valueField="bmCode" parentField="pId" popupHeight="300" popupWidth="220"
								allowInput="false" value="${obj.brno }" />	
						</td>
					</tr>
					<tr>
						<td style="width: 90px;">客户名称：</td>
						<td colspan="3"><input id="jkrxm" name="jkrxm" required="true" class="mini-textbox"  value="${obj.jkrxm }" /></td>
					</tr>
					<tr>
						<td style="width: 90px;">有效证件类型：</td>
						<td><input id="yxsfzjlx" name="yxsfzjlx" required="true" class="mini-combobox" style="width: 170px;" textField="zdName"
							valueField="zdValue" emptyText="请选择..." url="${base }/sys/ggzd/getGgzdList.nut?groupId=zjlx2" value="${obj.yxsfzjlx }" showNullItem="true"
							allowInput="false" onvaluechanged="onZjlxValueChange" /></td>
						<td>证件号码：</td>
						<td><input id="zjhm" name="zjhm" required="true" vtype="minLength:2"  class="mini-textbox"
							style="width: 220px;" value="${obj.zjhm }" /></td>
					</tr>
					<tr>
						<td >贷款合同号:</td>
						<td ><input id="dkhth" name="dkhth" required="true" showNullItem="true" class="mini-combobox" style="width: 180px;" textField="dkhth" valueField="dkhth" emptyText="请选择贷款或表外业务合同号..."
							url="${base }/grwydkdb/getDspDkmxAndBwywmxList.nut?zjhm=${obj.zjhm}&sjrq=${obj.sjrq}&brno=${obj.brno}" value="${obj.dkhth }" allowInput="true" /></td>
						<td >担保合同类型:</td>
						<td><input name="dbhtlx" required="true" class="mini-combobox" style="width: 180px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=dbhtlx"
							value="${obj.dbhtlx }" showNullItem="true" allowInput="false" popupHeight="120"/></td>
					</tr>
					<tr>
						<td >担保合同号:</td>
						<td><input id="dbhth" style="width:180px;" name="dbhth" class="mini-textbox" value="${obj.dbhth }" /></td>
						<td  >押品评估价值：</td>
						<td><input name="yppgjz" class="mini-spinner" decimalPlaces="1" allowLimitValue="false" style="width: 100px;" value="${obj.yppgjz }"  changeOnMousewheel="false"/></td>
					</tr>
					<tr>
						<td>押品类型：</td>
						<td><input id="yplx" name="yplx" style="width: 180px;" class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=ypfl" textField="zdName" parentField="pId" valueField="zdValue"
							value="${obj.yplx }" onbeforenodeselect="beforenodeselect" resultAsTree="false" allowInput="false" /></td>
						<td>押品名称：</td>
						<td><input id="ypmc" name="ypmc" class="mini-textbox" style="width: 180px;" value="${obj.ypmc }" vtype="minLength:2" /></td>
					</tr>
					<tr>
						<td >押品代码：</td>
						<td><input id="ypdm" name="ypdm" class="mini-textbox" style="width: 180px;" value="${obj.ypdm }" /></td>
						<td >首次估值日期：</td>
						<td><input id="scgzrq" name="scgzrq" class="mini-datepicker" style="width: 180px;" format="yyyyMMdd" value="${obj.scgzrq }"  /></td>
					</tr>
					<tr>
						<td >最新估值日期：</td>
						<td ><input id="zxgzrq" name="zxgzrq" class="mini-datepicker" style="width: 180px;" format="yyyyMMdd" value="${obj.zxgzrq }"  /></td>
						<td >估值到期日期：</td>
						<td><input id="gzdqrq" name="gzdqrq" class="mini-datepicker" style="width: 180px;" format="yyyyMMdd" value="${obj.gzdqrq }"  /></td>
					</tr>
					<tr>
						<td >审批抵质押率：</td>
						<td ><input id="spdzyl" name="spdzyl" class="mini-spinner" decimalPlaces="2"  style="width: 180px;" value="${obj.spdzyl }" vType="float" changeOnMousewheel="false"/></td>
						<td >实际抵质押率：</td>
						<td ><input id="sjdzyl" name="sjdzyl" class="mini-spinner" decimalPlaces="2"  style="width: 180px;" value="${obj.sjdzyl }" vType="float" changeOnMousewheel="false"/></td>
					</tr>
				</table>
				<fieldset style="border-top: solid 1px #aaa;padding: 5px;">
					<legend>押品权属人（或保证人）信息</legend>
						<table class="tab" cellpadding="4" cellspacing="0" style="border-left: 1px solid #99BBE8;border-right: 1px solid #99BBE8;" >
							<tr>
								<td style="width: 120px;" class="tab_label tab_align_c tab_top ">类型：</td>
								<td style="width:180px;" class="tab_field tab_top"><input id="ypqsrlx" name="ypqsrlx" class="mini-combobox" showNullItem="true" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=ypqsrhbzrlx"
									value="${obj.ypqsrlx }" allowInput="false" /></td>
								<td style="width: 160px;" class="tab_label tab_align_c tab_top ">名称：</td>
								<td class="tab_field_nr tab_top"><input id="ypqsrmc" name="ypqsrmc" class="mini-textbox" required="true" style="width: 166px;" value="${obj.ypqsrmc }" /></td>
							</tr>
							<tr>
								<td class="tab_label tab_align_c ">证件类型：</td>
								<td class="tab_field "><input id="ypqsrzjlx" name="ypqsrzjlx" style="width: 170px;" class="mini-combobox" showNullItem="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=zjlx" textField="zdName" valueField="zdValue"
									required="true" value="${obj.ypqsrzjlx }"  /></td>
								<td class="tab_label tab_align_c ">证件代码：</td>
								<td class="tab_field_nr"><input id="ypqsrzjdm" name="ypqsrzjdm" class="mini-textbox" style="width: 166px;" vType="minLength:2" value="${obj.ypqsrzjdm }" /></td>
							</tr>
							<tr>
								<td class="tab_label tab_align_c ">保证人保证能力上限：</td>
								<td class="tab_field "><input id="bzrbznlsx" name="bzrbznlsx" class="mini-textbox" value="${obj.bzrbznlsx }"  /></td>
								<td class="tab_label tab_align_c ">是否第三方：</td>
								<td class="tab_field_nr"><input id="ypqsrsfdsf" name="ypqsrsfdsf" class="mini-combobox" showNullItem="true" url="${base }/sys/ggzd/getGgzdList.nut?groupId=bs" textField="zdName" valueField="zdValue" value="${obj.ypqsrsfdsf }" /></td>
							</tr>
						</table>
					</fieldset>
			</form>
		</div>
	
	</div>
	<div style="text-align: center; padding: 18px;">
		<a class="mini-button" onclick="onAdd" iconCls="icon-save" style="width: 60px; margin-right: 20px;">保存</a> <a class="mini-button"
			iconCls="icon-cancel" onclick="onCancel" style="width: 60px;">取消</a>
	</div>
</body>
</html>