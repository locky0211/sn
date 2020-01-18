<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>报文数据项信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/ciReportDataitemInfo.js"></script>
</head>
<body style="overflow: auto">

	<form id="reportDataitemInfoForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${crdInfo.id}" /> 
		</div>
		<div>
			<table style="width: 100%; height: 20px;" cellpadding="4" cellspacing="0" class="tab">
				
				<tr>
					<td class="tab_label">所属报文编号：</td>
					<td class="tab_field_nr"><input id="reportCode" name="reportCode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crdInfo.reportCode }" /></td>
					<td class="tab_label">所属段标号：</td>
					<td class="tab_field_nr"><input id="segmentNo" name="segmentNo" class="mini-textbox" required="true"  onchange="isincludSpace" value="${crdInfo.segmentNo }"
						 style="width: 100%;" /></td>
				</tr>
				<tr>
					<td valign="top" class="tab_label">数据项名称：</td>
					<td colspan="3" class="tab_field_nr"><input id="itemName" name="itemName" required="true"  class="mini-textarea"
						style="width: 100%; height: 40px;" value="${crdInfo.itemName}" /></td>
				</tr>
				<tr>
					<td class="tab_label">数据项类型：</td>
					<td  colspan="3" class="tab_field_nr"><input id="itemType" name="itemType" class="mini-combobox" required="true"  onchange="isincludSpace" value="${crdInfo.itemType}"
						 style="width: 100%;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_ITEMTYPE"/></td>
				</tr>
				<tr>
					<td class="tab_label">数据项标识符：</td>
					<td class="tab_field_nr"><input id="itemTag" name="itemTag" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crdInfo.itemTag}" /></td>
					<td class="tab_label">数据项长度：</td>
					<td class="tab_field_nr"><input id="itemLength" name="itemLength" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crdInfo.itemLength}" /></td>
				</tr>
				<tr>
					<td class="tab_label">数据项位置：</td>
					<td class="tab_field_nr"><input id="itemLocation" name="itemLocation" class="mini-textbox" required="true"  onchange="isincludSpace" value="${crdInfo.itemLocation}"
						 style="width: 100%;" /></td>
					<td class="tab_label">数据项状态：</td>
					<td class="tab_field_nr"><input id="itemStatus" name="itemStatus" class="mini-combobox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crdInfo.itemStatus}"  textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_ITEMSTATUS"/></td>
				</tr>
				<tr>

					<td class="tab_label">基础段关联字段标识：</td>
					<td class="tab_field_nr"><input id="relateFlag" name="relateFlag" class="mini-combobox" required="true" onchange="isincludSpace" value="${crdInfo.relateFlag}"
						 textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_RELATEFLAG" style="width: 100%;" /></td>
					<td class="tab_label">主键标识：</td>
					<td class="tab_field_nr">
					<input id="isPrimary" name="isPrimary" class="mini-combobox" required="true" style="width: 100%;" value="${crdInfo.isPrimary}"
						textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_ISPRIMARY" /></td>
				</tr>


				<tr>
					<td valign="top" class="tab_label">数据项描述：</td>
					<td colspan="3" class="tab_field_nr"><input id="itemDes" name="itemDes" required="true"  class="mini-textarea"
						style="width: 100%; height: 40px;" value="${crdInfo.itemDes}" /></td>
				</tr>
				<tr>
					<td class="tab_label">映射表名：</td>
					<td class="tab_field_nr"><input id="mapTable" name="mapTable" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crdInfo.mapTable}" /></td>
					<td class="tab_label">映射字段名：</td>
					<td class="tab_field_nr"><input id="mapColumn" name="mapColumn" class="mini-textbox" required="true"  onchange="isincludSpace" value="${crdInfo.mapColumn}"
						 style="width: 100%;" /></td>
				</tr>
				
				
				 
			</table>

		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="edit()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>