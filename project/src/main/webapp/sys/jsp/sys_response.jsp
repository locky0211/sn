<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>问题回复</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_response.js"></script>
</head>
<body>
		<table class="tab" cellpadding="4" cellspacing="0" style="width: 100%">
			<input id="Pid" name="Pid" class="mini-hidden" value="${question.id}" />
			<tr>
				<td class="tab_label" width="80px">标题：</td>
				<td class="tab_field_nr" >${question.title }</td>
			</tr>
					
			<tr>
				<td class="tab_label" width="80px">问题内容：</td>
				<td class="tab_field_nr" >${question.content }</td>
			</tr>
		</table>
		<div id="responsegrid" class="mini-datagrid" onrowclick="showResponse" allowCellWrap="true" allowAlternating="true"  style="width: 100%; height: 50%;" url="${base}/sys/response/getSysResponseList.nut?&Pid=${question.id }" pageSize="10">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="Content" headerAlign="center" width="135">回复内容</div>
				<div field="Createuser" headerAlign="center" align="center" width="20">回复人</div>
				<div field="Createtime" dateFormat="yyyy-MM-dd HH:mm:ss"  width="35" align="center"  headerAlign="center">回复日期</div>
			</div>
	    </div>
	<div>
	<form id="reForm" method="post" action="${base }/sys/response/addOrUpdateRe.nut"> 
	    <div>
		    <tr >
				<td valign="top" style="text-align: right;">回复内容：</td>
			</tr>
			<tr >		
				<td ><input id="Content" name="Content" class="mini-TextArea" style="width: 100%; height:80px;" value="${obj.Content}" /></td>
			</tr>
		</div>	
		<div style="text-align: center; padding:5px;">
			<a class="mini-button" onclick="onAdd()" iconCls="icon-ok"  >提交</a> <a class="mini-button" onclick="onCancel()"
				iconCls="icon-cancel">取消</a>
		</div>
	</form>
	</div>
</body>
</html>