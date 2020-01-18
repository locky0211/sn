<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>法人关系人信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/cr/js/cr_frkhxx_gxrxx.js"></script>
<script type="text/javascript">
	var frkhxxId = '${param.khid}';
	var sjrq = '${param.sjrq}';
	var ghr = '${param.ghr}';
	var userId = '${sessionScope.sessionUser.userId || sessionScope.isgly ==1}';
	var sessionUserAccessKeys = '${sessionScope.sessionUserAccessKeys}';
	var isHdata = '${param.isHdata}';
</script>
</head>
<body>
	<div>法人关系人信息</div>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<c:if test="${param.isHdata == 1}">
						<td style="width: 100%;"><a class="mini-button" iconCls="icon-search" plain="true" onclick="toHFrgxrxxView()">查看</a></td>
					</c:if>
					<c:if test="${param.isHdata != 1}">
						<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addFrgxrxx()">新增</a> <a class="mini-button"
							iconCls="icon-edit" plain="true" onclick="editFrgxrxx()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
							onclick="delFrgxrxx()">删除</a></td>
					</c:if>
				</tr>
			</table>
		</div>
	</div>
	<div id="frgxrxxGrid" class="mini-datagrid" style="width: 100%; height: 28%;" url="${base}/frgxr/getCrFrgxrList.nut"
		showPager="false" showModified="false" onrowclick="onGxrzjClick">
		<div property="columns">
			<div type="indexcolumn" align="center" headerAlign="center">序号</div>
			<div field="gxrlxmc" align="center" headerAlign="center">关系人类型</div>
			<div field="xm" align="center" headerAlign="center">姓名</div>
			<div field="gjmc" align="center" headerAlign="center">国家名称</div>
			<div field="sfzhm" align="center" headerAlign="center">身份证号码</div>
			<div field="gxxxrq" align="center" headerAlign="center">更新信息日期</div>
		</div>
	</div>
	<div>关系人证件信息</div>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<c:if test="${param.isHdata == 1}">
						<td style="width: 100%;"><a class="mini-button" iconCls="icon-search" plain="true" onclick="toHgxrzjxxView()">查看</a></td>
					</c:if>
					<c:if test="${param.isHdata != 1}">
						<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addGxrzjxx()">新增</a> <a class="mini-button"
							iconCls="icon-edit" plain="true" onclick="editGxrzjxx()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true"
							onclick="delGxrzjxx()">删除</a></td>
					</c:if>
				</tr>
			</table>
		</div>
	</div>
	<div id="gxrzjxxGrid" class="mini-datagrid" style="width: 100%; height: 44%;" url="${base}/gxrzj/getCrGxrzjList.nut" showPager="false"
		showModified="false" allowUnselect="true">
		<div property="columns">
			<div type="checkcolumn" align="center" headerAlign="center"></div>
			<div field="zjmc" align="center" headerAlign="center">证件类型</div>
			<div field="zjdm" align="center" headerAlign="center">证件代码</div>
			<div field="qfrq" align="center" headerAlign="center">签发日期</div>
			<div field="dqrq" align="center" headerAlign="center">到期日期</div>
		</div>
	</div>
</body>
</html>