<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>差错认定信息填写</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/rd/js/rd_error_replenish.js"></script>
</head>
<body style="overflow: auto">
	<form id="errorTrueForm" method="post">
			<div style="display: none;">
				<input id="id" name="id" class="mini-hidden" value="${obj.id}" />
			</div>
			<table style="width: 100%" cellpadding="9">
				<tr>
					<td class="tab_label" style="width: 90px;">其他监管措施：</td>
					<td class="tab_field_nr"><input id="otherMeasures" name="otherMeasures" class="mini-textarea" style="width: 250px;" value="${obj.otherMeasures}" emptyText="例如：监管会谈;警示单等等"/></td>
				</tr>
				<tr>
					<td class="tab_label" style="width: 90px;">是否解锁重报：</td>
					<td class="tab_field_nr"><input id="deblocFlag" name="deblocFlag" class="mini-combobox" style="width: 130px;" oncloseclick="onCloseClick" showClose="true" data="[{id:'1',text:'是'},{id:'2',text:'否'}]" value="${obj.deblocFlag}" /></td>
				</tr>
			</table>
		<span id="checkDiv">
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				style="width: 60px;">取消</a>
		</div>
		</span>
	</form>
</body>
</html>