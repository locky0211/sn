<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>监管措施-通报</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_error_record_warn.js"></script>
<script type="text/javascript">
var fileType = "${param.fileType}";
</script>
</head>
<body>
	<div id="issuedResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<!-- <td style="width: 100%;">
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-down" onclick="doDownLoadFile()">下载附件</a>
					</td> -->
					<td>
						<c:if test="${param.fileType == '0'}">
						<a class="mini-button" iconCls="icon-add" plain="true" onclick="addPromptWarn()">新增警示单</a>
						</c:if>
						<c:if test="${param.fileType == '1'}">
						<a class="mini-button" iconCls="icon-add" plain="true" onclick="addPromptWarn()">新增提示单</a>
						</c:if>
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-down" onclick="doDownLoadFile()">下载模板</a>&nbsp;&nbsp;
						<label style="font-family: Verdana;">机构: </label> 
						<input id="organNo" name="organNo" style="width: 200px;" popupHeight="350px;" popupWidth="450px;" 
						class="mini-treeselect" url="${base }/sys/bm/getSysBmListByUserId.nut" textField="bmName" multiSelect="false" parentField="pId" valueField="bmCode" allowInput="false"
						 resultAsTree="false" checkRecursive="true" showClose="true" oncloseclick="onCloseClick" onbeforenodeselect="beforenodeselect" showFolderCheckBox="true"/>&nbsp;&nbsp;
						报表名称:&nbsp;<input id="reportName" name="reportName" style="width: 80px;" class="mini-textbox" /> &nbsp;&nbsp;
						开始日期:&nbsp;<input id=startTime name="startTime" style="width: 80px;" class="mini-datepicker" format="yyyyMMdd"/> &nbsp;&nbsp;
						结束日期:&nbsp;<input id="endTime" name="endTime" style="width: 80px;" class="mini-datepicker" format="yyyyMMdd"/> &nbsp;&nbsp;
						<a iconCls="icon-search"
						class="mini-button" onclick="search()">查询</a>&nbsp;&nbsp; 
							<a iconCls="icon-remove"
						class="mini-button" onclick="deletePromptWarn()">删除</a>&nbsp;&nbsp;
						<a
						iconCls="icon-reload" class="mini-button" onclick="clear()">重置</a>&nbsp;&nbsp;
						<a iconCls="icon-download" class="mini-button"
						onclick="doDownLoad()">下载</a>
						&nbsp;&nbsp;
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit" style="align: center;">
	<!-- <img src="../images/warn.jpg" style="width:100%;heigh:90%;"></img> -->
			<div id="promptWarnGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/rd/promptwarn/getAllInfo.nut" pageSize="100" multiSelect="false" >
			<div property="columns">
				<div type="indexcolumn" width="12" align="center" headerAlign="center">序号</div>
				<div field="organNo" sortField="organNo" width="35" align="center" headerAlign="center" renderer="onBrNo">机构名称</div>
				<div field="reportNoStr" sortField="reportNoStr" width="30" align="center" allowSort="true" headerAlign="center">报表编号</div>
				<div field="reportName" width="40" align="center" headerAlign="center">报表名称</div>
				<div field="issuedTime" width="30" align="center"  headerAlign="center">下发时间</div>
				<c:if test="${param.fileType == '0'}">
				<div field="fileName" sortField="fileName" width="30" align="center" allowSort="true" headerAlign="center">警示单信文件</div>
				</c:if>
				<c:if test="${param.fileType == '1'}">
				<div field="fileName" sortField="fileName" width="30" align="center" allowSort="true" headerAlign="center">提示单文件</div>
				</c:if>
			</div>
		</div>
	
	</div>
</body>
</html>