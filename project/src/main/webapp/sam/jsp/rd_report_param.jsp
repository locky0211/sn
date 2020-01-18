<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>数据导入参数配置</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sam/js/rd_report_param.js"></script>
</head>
<body style="overflow: auto;">
	<form id="dmForm" method="post" action="${base }/rd/config/addOrUpdateConfig.nut">
		<div class="pTitle">上报参数配置</div>
		<div style="width: 100%; text-align: center;">
			<table class="tab_top_left" style="width: 800px;" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 200px;" class="tab_label tab_align_r">EAST校验执行允许最大错误量:</td>
					<td class="tab_field tab_align_l" style="width: 400px;"><input id="exeNum" name="exeNum" class="mini-spinner" allowLimitValue="false" decimalPlaces="2" changeOnMousewheel="false" style="width: 500px;" value="${obj.exeNum}" required="true"  /></td>
				</tr>
				<tr>
					<td style="width: 200px;" class="tab_label tab_align_r">EAST校验查看允许最大错误量:</td>
					<td class="tab_field tab_align_l" style="width: 400px;"><input id="maxErrorNum" name="maxErrorNum" class="mini-spinner" allowLimitValue="false" decimalPlaces="2" changeOnMousewheel="false" style="width: 500px;" value="${obj.maxErrorNum}" required="true"  /></td>
				</tr>
				<tr>
					<td style="width: 200px;" class="tab_label tab_align_r">1104与客户风险校验允许差额:</td>
					<td class="tab_field tab_align_l" style="width: 400px;"><input id="dspBalance" name="dspBalance" class="mini-spinner" allowLimitValue="false" decimalPlaces="2" changeOnMousewheel="false" style="width: 500px;" value="${obj.dspBalance}" required="true" /></td>
				</tr>
				<tr>
					<td style="width: 200px;" class="tab_label tab_align_r">1104与EAST校验允许差额:</td>
					<td class="tab_field tab_align_l" style="width: 400px;"><input id="eastBalance" name="eastBalance" class="mini-spinner" allowLimitValue="false" decimalPlaces="2" changeOnMousewheel="false" style="width: 500px;" value="${obj.eastBalance}" required="true"  /></td>
				</tr>
				<tr>
					<td style="width: 200px;" class="tab_label tab_align_r">异动允许差额:</td>
					<td class="tab_field tab_align_l" style="width: 400px;"><input id="rdWaveBalance" name="rdWaveBalance" class="mini-spinner" allowLimitValue="false" decimalPlaces="0" changeOnMousewheel="false" style="width: 500px;" value="${obj.rdWaveBalance}" required="true"  /></td>
				</tr>
				<tr>
					<td style="width: 200px;" class="tab_label tab_align_r">大集中报表匹配模式参数:</td>
					<td class="tab_field tab_align_l" style="width: 400px;"><input id="bfTableMatch" name="bfTableMatch" class="mini-textbox" style="width: 500px;" value="${obj.bfTableMatch}"  /></td>
				</tr>
				<tr>
					<td style="width: 200px;" class="tab_label tab_align_r">PISA报文私钥:</td>
					<td class="tab_field tab_align_l" style="width: 400px;"><input id="piReportKey" name="piReportKey" class="mini-textarea" style="width: 500px;" value="${obj.piReportKey}"  /></td>
				</tr>
			</table>
			<div style="text-align: center; padding: 18px;">
				<a class="mini-button" onclick="onAdd" style="width: 60px; margin-right: 20px;">保存</a>
			</div>
		</div>
	</form>
</body>
</html>