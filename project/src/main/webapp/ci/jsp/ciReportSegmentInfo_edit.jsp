<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增报表模板信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/ciReportSegmentInfo_edit.js"></script>
</head>
<body style="overflow: auto">

	<form id="reportSegmentInfoForm" method="post">
		<div style="display: none;">
			<input class="mini-hidden" id="id" name="id" value="${crsInfo.id}" />
		</div>
		
			<table style="width: 100%; height: 20px;" cellpadding="4" cellspacing="0" class="tab">
				
				<tr>
					<td class="tab_label">报文编号：</td>
					<td class="tab_field_nr"><input id="reportCode" name="reportCode" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crsInfo.reportCode}" /></td>
					</tr>
				<tr>
					<td class="tab_label">段标号：</td>
					<td class="tab_field_nr"><input id="segmentNo" name="segmentNo" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crsInfo.segmentNo}" /></td>
					</tr>	
					<tr>
					<td class="tab_label">段名称：</td>
					<td class="tab_field_nr"><input id="segmentName" name="segmentName" class="mini-textbox" required="true" onchange="isincludSpace" style="width: 100%;"
						value="${crsInfo.segmentName}" /></td>
					</tr>	
					<tr>
					<td class="tab_label">段描述：</td>
					<td class="tab_field_nr"><input id="segmentDes" name="segmentDes" class="mini-textarea" style="width: 100%; height: 80px;" 
						value="${crsInfo.segmentDes}" /></td>
					</tr>	
					<tr>
					<td class="tab_label">段出现次数：</td>
						<td class="tab_field_nr"><input id="appearNum" name="appearNum" class="mini-combobox" style="width: 100%;" textField="zdName" valueField="zdValue"
					url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_APPEARNUM" required="true" allowInput="false" value="${crsInfo.appearNum}" /></td>	
					</tr>	
					<tr>
					<td class="tab_label">段状态：</td>
					<td class="tab_field_nr"><input id="segmentStatus" name="segmentStatus" class="mini-combobox" required="true" style="width: 100%;"
						textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=CI_SEGMENTSTATUS" value="${crsInfo.segmentStatus}" /></td>
					</tr>	
					<tr>
					<td class="tab_label">映射表名：</td>
					<td class="tab_field_nr"><input id="mapTable" name="mapTable" class="mini-textbox" required="true" onchange="isincludSpace" style="width:100%;"
						value="${crsInfo.mapTable}" /></td>
					</tr>	
			</table>

		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="edit()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>