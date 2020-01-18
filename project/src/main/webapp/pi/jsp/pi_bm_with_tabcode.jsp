<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>部门与PISA报表关系维护</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/pi_bm_with_tabcode.js"></script>
</head>
<body style="overflow: auto;">
	<form id="bmWithTabcodeForm" method="post">
		<div>
			<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
				<tr>
					<td class="tab_label">报表：</td>
					<td class="tab_field" colspan="4">
						<input id="id" name="id" class="mini-hidden" value="${obj.id }"/>
						<div id="tabcode" name="tabcode" class="mini-combobox" oncloseclick="onCloseClick" showClose="true" popupHeight="100px;" style="width: 310px;;" popupWidth="310px;"  multiSelect="false" textField="tableName" valueField="tableCode"
							url="${base}/pi/getTableInfoListForBm.nut" value="${obj.tabcode }" onvalidation="checkIsOnly">
							<div property="columns">
								<div header="表中文名称" field="tableName"></div>
								<div header="表数据库名称" field="tableCode"></div>
							</div> 
						</div>
					</td>
				</tr>
				<tr>
					<td class="tab_label">部门：</td>
					<td class="tab_field" colspan="4"><input id="bm" name="bm" style="width: 310px;" popupHeight="80px;" popupWidth="310px;" required="true"
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByBmCategory.nut?bmCategory='BM_PI'" textField="bmName"  showFolderCheckBox="true" parentField="pId"  valueField="bmCode" allowInput="false"
						onbeforenodeselect="beforenodeselect" resultAsTree="false" expandOnLoad="true" showClose="true" oncloseclick="onCloseClick" checkRecursive="true" value="${obj.bm }"/></td>
				</tr>
			</table>
		</div>
		<div style="text-align: center; padding: 40px;">
			<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 30px;">确定</a> <a class="mini-button" onclick="onCancel"
				style="width: 60px;">取消</a>
		</div>
	</form>
</body>
</html>