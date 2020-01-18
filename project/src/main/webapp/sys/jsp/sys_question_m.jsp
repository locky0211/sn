<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>问题提交</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/sys_question_m.js"></script>
<script type="text/javascript">
	var userId = '${sessionUser.userId}';
	var roleId = '${sessionUserRoleId}';
</script>
</head>
<body>
	<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="add()">新增问题</a> <span class="separator"></span>
				<span class="separator"></span> &nbsp;&nbsp;
				<span>关键字：</span>
					<input id="Title" name="Title" class="mini-textbox" style="width: 150px;" />&nbsp;&nbsp;
					创建人：<input id="Createuser" name="Createuser" class="mini-textbox" style="width: 150px;"/>&nbsp;&nbsp;
					<a class="mini-button" iconCls="icon-search" onclick="search()">搜索</a>
				</td>
			</tr>
		</table>
	</div>
	<div class="mini-fit">
	
	<div id="questiongrid" class="mini-datagrid" oncellclick="cellclick" allowCellSelect="true" multiSelect="true"  allowCellEdit="true" allowCellWrap="true" allowAlternating="true"  style="width: 100%; height: 100%;" url="${base}/sys/question/getSysQuestionList.nut" pageSize="10">
			<div property="columns">
				<div type="indexcolumn" width="10" headerAlign="center" cellStyle="cursor: pointer;">序号</div>
				<div field="Title" headerAlign="center"  width="110">标题</div>
				<div field="Createuser" headerAlign="center" align="center" width="20">创建人</div>
				<div field="Createtime" dateFormat="yyyy-MM-dd HH:mm:ss"  width="35" align="center"  headerAlign="center">创建日期</div>
				<div field="Updatetime" dateFormat="yyyy-MM-dd HH:mm:ss"  width="35" align="center"  headerAlign="center">更新日期</div>
				<div width="60" headerAlign="center" align="center" renderer="onActionRenderer">操作</div>
			</div>
	</div>
</body>
</html>