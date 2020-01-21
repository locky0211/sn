<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base}/sys/js/sys_user.js"></script>
<title>新增用户</title>
</head>
<body>
	<form id="sysUserForm" method="post">
		<input class="mini-hidden" id="OPStatus" name="OPStatus" value="${OPStatus }">
		<div style="height: 100%; padding: 10px">
			<div id="js" style="width: 43%; height: 350px; float: left; padding: 10px 20px 20px 20px">
				<table style="table-layout: fixed;">
					<tr style="height: 35px">
						<td style="width: 70px;">用户名ID：</td>
						<td style="width: 200px;"><input id="userId" name="userId" class="mini-textbox" required="true" onvalidation="idIsOnly" emptyText="请输入用户ID"
							value="${obj.userId }" style="width: 200px;" /></td>
					</tr>
					<tr>
						<td>用户姓名：</td>
						<td><input id="userName" name="userName" style="width: 200px;" class="mini-textbox" required="true" value="${obj.userName }"
							emptyText="请输入用户姓名" /></td>
					</tr>
					<tr>
						<td>性别：</td>
						<td><div id="userGenger" data="[{id : '男',	text : '男'	}, {id : '女',text : '女'}]" name="userGenger" class="mini-radiobuttonlist"
								repeatItems="1" repeatLayout="table" repeatDirection="vertical" textField="text" valueField="id" value="${obj.userGenger }"></div></td>
					</tr>

					<tr>
						<td>用户角色：</td>
						<td><div id="userRole" name="userRole" class="mini-combobox" style="width: 200px;" popupWidth="260" textField="jsName" valueField="jsId"
								url="${base}/sys/jus/getSysJsqlListForYonghu.nut" required="true" multiSelect="true" showClose="true" oncloseclick="onCloseClick"
								value="${roleData }">
								<div property="columns">
									<div header="ID" headerAlign="center" width="80" field="jsId"></div>
									<div header="角色名称" headerAlign="center" width="100" field="jsName"></div>
								</div>
							</div></td>
					</tr>
					<tr>
						<td>到期日：</td>
						<td><input id="dDate" name="dDate" style="width: 120px;" class="mini-datepicker" format="yyyy-MM-dd" required="true" value="${obj.dDate }" /></td>
					</tr>
					<tr>
						<td>限定登录：</td>
						<td><input id="dDip" name="dDip" style="width: 200px;" class="mini-textbox" required="true" value="${obj.dDip }" /></td>
					</tr>
					<tr>
						<td>所属机构：</td>
						<td><input id="userOrgan" name="userOrgan" style="width: 200px;" required="true" class="mini-treeselect"
							url="${base }/sys/ggzd/getGgzdList.nut?groupId=SYS_USER_ORGAN" textField="zdName" multiSelect="false" parentField="pId" valueField="zdValue"
							value="${obj.userOrgan}" resultAsTree="false" allowInput="false" onbeforenodeselect="beforenodeselect" /></td>
					</tr>
					<tr>
						<td>邮箱：</td>
						<td><input id="userEmail" name="userEmail" vtype="email" style="width: 200px;" class="mini-textbox" value="${obj.userEmail }"
							emptyText="请输入常用邮箱" /></td>
					</tr>
					<tr>
						<td>联系电话：</td>
						<td><input id="userTelephone" name="userTelephone" vtype="int" style="width: 200px;" class="mini-textbox" value="${obj.userTelephone }"
							emptyText="请输入联系电话" /></td>
					</tr>
				</table>
				<div style="text-align: center; padding: 10px;">
					<a class="mini-button" onclick="add()" style="width: 60px; margin-right: 10px;">确定</a> <a class="mini-button" onclick="onCancel"
						style="width: 60px;">取消</a>
				</div>
			</div>
			<div id="yh" class="mini-panel" title="管辖机构" style="width: 50%; height: 350px; float: right;" showHeader="true">
				<ul id="userGxOrganTree" class="mini-tree" url="${base}/sys/bm/getSysBmList.nut" style="width: 100%; padding: 5px;" showTreeIcon="true"
					textField="bmName" idField="bmCode" parentField="pId" resultAsTree="false" showCheckBox="true" checkRecursive="false" enableHotTrack="false"
					value="${depData}">
				</ul>
			</div>
		</div>
	</form>
</body>
</html>