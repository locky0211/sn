<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增机构</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/cache/js/cache_info.js"></script>
</head>
<body>
	<form id="cacheInfoForm" method="post" action="${base }/cache/addOrUpdateCacheInfo.nut">
		<div>
			<table class="tab" cellpadding="6" cellspacing="0">
				<tr>
					<td class="tab_label tab_align_r" style="width: 80px;">IocBean名称：</td>
					<td class="tab_field_nr"><input id="flag" name="flag" class="mini-hidden" value="${obj.flag}" /> <input id="beanName" name="beanName"
						class="mini-textbox" style="width: 200px;" required="true" value="${obj.beanName}" onvalidation=checkBeanName /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r" valign="top">描述说明：</td>
					<td class="tab_field_nr"><input id="cacheDes" name="cacheDes" class="mini-textarea" style="width: 250px; height: 100px;" required="true"
						value="${obj.cacheDes}" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r" valign="top">执行顺序：${obj.sortNum }</td>
					<td class="tab_field_nr"><input id="sortNum" name="sortNum" value="${obj.sortNum }" class="mini-spinner" minValue="1" maxValue="1000" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="CloseWindow('cancel')"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>