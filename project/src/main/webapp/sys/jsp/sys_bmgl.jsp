<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>新增机构</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript">
	var objId = '${obj.bmCode}';
</script>
<script type="text/javascript" src="../js/sys_bmgl.js"></script>
</head>
<body>
	<form id="bmForm" method="post" action="${base }/sys/bm/addOrUpdateBmgl.nut">
		<div >
			<table style="table-layout: fixed; width: 100%;" border="0" cellpadding="6" cellspacing="0">
				<tr>
					<td style="width: 30%;" class="tab_label tab_align_r">机构编号：</td>
					<td class="tab_field_nr"><input id="bmCode" name="bmCode" class="mini-textbox" style="width: 98%;" required="true" value="${obj.bmCode}"
						onvalidation="checkBmCode" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">机构名称：</td>
					<td class="tab_field_nr"><input id="bmName" name="bmName" style="width: 98%;" class="mini-textbox"  required="true" value="${obj.bmName}" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">所属区域：</td>
					<td class="tab_field_nr"><input name="bmArea"  class="mini-treeselect" url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_USER_ORGAN"
						textField="zdName" multiSelect="false" style="width: 98%;" popupWidth="150px;" parentField="pId" valueField="zdValue" value="${obj.bmArea}" resultAsTree="false" allowInput="false"
						onbeforenodeselect="beforenodeselect" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">机构类别：</td>
					<td class="tab_field_nr"><input id="bmCategory" name="bmCategory" style="width: 98%;" class="mini-combobox" required="true"  url="${base }/sys/ggzd/getGgzdList.nut?groupId=BM_TYPE" parentField="pId" valueField="zdValue" textField="zdName" allowInput="false" emptyText="请选择" value="${obj.bmCategory }" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">机构类型：</td>
					<td class="tab_field_nr"><input name="bmType" showClose="true" style="width: 98%;" oncloseclick="onCloseClick" class="mini-treeselect"
						url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_BM_TYPE" textField="zdName" multiSelect="false" parentField="pId" valueField="zdValue"
						value="${obj.bmType}" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /></td>
				</tr>
				<tr>
					<td class="tab_label tab_align_r">上级机构：</td>
					<td class="tab_field_nr"><input id="sjbmId"  name="pId" class="mini-treeselect" style="width: 98%;" url="${base }/sys/bm/getSysBmList.nut" multiSelect="false"
						textField="bmName" valueField="bmCode" parentField="pId" checkRecursive="true" showFolderCheckBox="false" expandOnLoad="true" showClose="true"
						oncloseclick="onCloseClick" popupWidth="250" popupHeight="150px;" value="${obj.pId}" /></td>

				</tr>
				<tr>
					<td class="tab_label tab_align_r">参与统计：</td>
					<td class="tab_field_nr"><input id="countFlag" required="true" name="countFlag" style="width: 98%;" class="mini-combobox" data="[{id:'1',text:'是'},{id:'0',text:'否'}]"
						emptyText="请选择" value="${obj.countFlag }" /></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 10px;">
			<a class="mini-button" onclick="onAdd()" style="width: 60px; margin-right: 20px;">确定</a> <a class="mini-button" onclick="onCancel()"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>