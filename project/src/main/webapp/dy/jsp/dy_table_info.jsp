<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增报表模板信息</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script src="${base }/common/js/miniui/swfupload/swfupload.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/dy_table_info.js"></script>
</head>
<body style="overflow: auto">
	<form id="tableInfoForm" method="post">
		<fieldset style="border: solid 1px #aaa;">
			<legend>报表基本信息</legend>
			<div style="display: none;">
				<input id="tableId" name="tableId" class="mini-hidden" value="${tInfo.tableId}" /> <input id="status" name="status" class="mini-hidden"
					value="${tbInfo.status}" /> <input id="excelFile" name="excelFile" class="mini-hidden" value="${tInfo.excelFile }" /> <input id="excelFilePath"
					name="excelFilePath" class="mini-hidden" />
			</div>
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td style="width: 90px;">报表编号：</td>
					<td colspan="3"><input id="tabCode" name="tabCode" class="mini-textbox" style="width: 130px;" required="true" value="${tInfo.tabCode}" /></td>
				</tr>
				<tr>
					<td style="width: 90px;">报表名称：</td>
					<td colspan="3"><input id="tabName" name="tabName" class="mini-textbox" style="width: 370px;" required="true" value="${tInfo.tabName}" /></td>
				</tr>
				<tr>
					<td>报表类型：</td>
					<td><input id="tabType" name="tabType" class="mini-combobox" style="width: 130px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_TAB_TYPE" required="true" allowInput="false" value="${tInfo.tabType}" /></td>
					 <td>报送类型：</td>
					<td><input id="tabBrType" name="tabBrType" class="mini-combobox" style="width: 115px;" data="[{id:'法人分支',text:'法人分支'},{id:'法人',text:'法人'},{id:'分支',text:'分支'}]" emptyText="请选择"
						required="true" value="${tInfo.tabBrType }" /></td>
				</tr>
				<tr>
					<td>部门机构：</td>
					<td colspan="3"><input id="reportOrganTypes" name="reportOrganTypes" style="width: 370px;" showClose="true" required="true" oncloseclick="onCloseClick"
						class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_BM_TYPE" textField="zdName" multiSelect="true" parentField="pId"
						valueField="zdValue" value="${tInfo.reportOrganTypes}" resultAsTree="false" allowInput="false" expandOnNodeClick="true" /></td>
				</tr>
			</table>
		</fieldset>
		<fieldset style="border: solid 1px #aaa;">
			<legend>报表模板信息</legend>
			<table style="width: 100%" cellpadding="5">
				<tr>
					<td>版本号：</td>
					<td><input id="versionNo" name="versionNo" class="mini-combobox" style="width: 120px;" textField="zdName" valueField="zdValue"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=DY_TABLE_VERSION_NO" required="true" allowInput="false" value="${tInfo.versionNo}" /></td>
				</tr>
				<tr>
					<td>启用日期：</td>
					<td><input id="startDate" name="startDate" class="mini-datepicker" style="width: 120px;" format="yyyyMMdd" required="true"
						value="${tInfo.startDate }" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;停用日期：&nbsp;&nbsp; <input id="endDate" name="endDate" class="mini-datepicker" style="width: 120px;"
						format="yyyyMMdd" required="true" value="${tInfo.endDate }" /></td>
				</tr>
				<tr>
					<td>报表行信息：</td>
					<td>
						<input id="rowInfo" name="rowInfo" class="mini-hidden" style="width: 360px;" required="true" value="${tInfo.rowInfo}" />
						<table id=tableRow>
							<tr  class="tableRow_tr">
								<td>行数：<input name="allRow"  class="mini-textbox"  style="width: 36px;" required="true" value=""  vtype="int"/></td>
								<td>数据行：<input name="dataRow" class="mini-textbox" style="width: 36px;" required="true" value="" vtype="int"/></td>
								<td>取数行：<input  name="getDataRow" class="mini-textbox" style="width: 36px;" required="true" value="" vtype="int"/></td>
								<td><input type="button" value="+" style="width: 30px;" onclick="addTableRow();" /></td>
								<td><input type="button" value="-" style="width: 30px;" onclick="delTableRow(this);" /></td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td>报表列信息：</td>
					<td>
						<input id="colInfo" name="colInfo" class="mini-hidden"  style="width: 360px;" required="true" value="${tInfo.colInfo}" />

						<table id=tableCol>
							<tr  class="tableCol_tr">
								<td>列数：<input name="allCol"  class="mini-textbox"  style="width: 36px;" required="true" value=""  vtype="int"/></td>
								<td>取数列：<input name="getDataCol" class="mini-textbox" style="width: 36px;" required="true" value="" vtype="int"/></td>
								<td>参数列：<input name="paramCol" class="mini-textbox" style="width: 90px;" required="true" value="" emptyText= "多列逗号','分割"/></td>
								<td><input type="button" value="+" style="width: 30px;" onclick="addTableCol();" /></td>
								<td><input type="button" value="-" style="width: 30px;" onclick="delTableCol(this);" /></td>
							</tr>
						</table>

					</td>
				</tr>
				<tr>
					<td>匹配关键字：</td>
					<td><input name="keys" class="mini-textarea" style="width: 360px;" value="${tInfo.keys}" /></td>
				</tr>
				<tr>
					<td>子报表名称：</td>
					<td><input id="subTabname" name="subTabname" class="mini-textbox" style="width: 360px;" value="${tInfo.subTabname}" /></td>
				</tr>
				<tr>
					<td>Excel模板文件：</td>
					<td><input style="width: 360px;" uploadUrl="${base }/upload/uploadFile.nut" class="mini-fileupload" name="file" limitType="*.xls"
						flashUrl="${base }/common/js/miniui/swfupload/swfupload.swf" uploadOnSelect="true" onuploadsuccess="onUploadsuccess" /></td>
				</tr>
			</table>
		</fieldset>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>