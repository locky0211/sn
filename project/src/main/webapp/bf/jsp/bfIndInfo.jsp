<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>报文信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/bfIndInfo.js"></script>

</head>
<body style="overflow: auto;">
	<form id="indInfoForm" method="post">
	<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${indInfo.id}" /> 
		</div>
		<div >
			<table style="width: 100%; height: 20px;" cellpadding="3" cellspacing="2" class="tab">
				
				<tr>
					<td class="tab_label" style="width:100px">报文编号：</td>
					
					<td class="tab_field_nr"><input id="tabCode" name="tabCode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 200px;"
						value="${indInfo.tabCode }" /></td>
						
					</tr>
					
				<tr>
					<td class="tab_label">指标编号：</td>
					<td class="tab_field_nr"><input id="indCode" name="indCode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 200px;"
						value="${indInfo.indCode }" /></td>
					</tr>
				
				<tr>
					<td class="tab_label">解释说明：</td>
					<td class="tab_field_nr"><input id="indExplain" name="indExplain" class="mini-textarea" required="true" onchange="isincludSpace" style="width: 200px;height:100px;"
						value="${indInfo.indExplain }" /></td>
					</tr>
				 
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>