<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>数据重新导入</title>
<%@include file="/common/quote/jquery.html"%>
<%@include file="/common/quote/jquery.loading2.jsp"%>
<%@include file="/common/quote/jquery.easyui.html"%>
<%@include file="/common/quote/jquery.uploadify.html"%>
<script type="text/javascript" src="${base }/sam/js/sam_report_formula_info_pl.js"></script>
</head>
<body>
	<table style="font-size: 12px; width: 550px;" border="0" cellpadding="3" cellspacing="5">
		<tr>
			<td><a title="" style="color: blue; text-decoration: underline;" href="${base }/sam/srf/getSriTemplate">模板下载</a></td>
		</tr>
		<tr>
			<td>批量导入公式请按模板填写内容，不可修改excel模板布局，不可填写格式。数据一律大写</td>
		</tr>
		<tr>
			<td>导入时系统只会<font color="red">读取第一个sheet工作薄</font>中的数据信息。
			</td>
		</tr>
		<tr>
			<td>报表编号：用"@"符号分割</td>
		</tr>
		<tr>
			<td>校验周期：月报-季报-半年报-年报</td>
		</tr>
		<tr>
			<td>风险等级 ：数值准确-敏感关注</td>
		</tr>
		<tr>
			<td>容忍波动值 ：校验运算为!=时,波动值不用填写</td>
		</tr>
		<tr>
			<td><input type="hidden" id="iSessionId" value="<%=session.getId()%>"> <input type="file" name="file" id="file_upload" /></td>
		</tr>
		<tr>
			<td style="text-align: center;"><a id="btnAdd" target="_parent" class="easyui-linkbutton" icon="icon-import" href="javascript:void(0)">导入</a></td>
		</tr>
		<tr>
			<td><input type="text" id="errorMsgId" style="border: 0px; color: red; margin-left: 10px;" readonly="readonly" value="" /></td>
		</tr>
	</table>
</body>
</html>