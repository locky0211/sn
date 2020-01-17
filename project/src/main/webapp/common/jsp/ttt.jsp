<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>111</title>
<%@include file="../quote/jquery.html"%>
<%@include file="../quote/jquery.easyui.html"%>
<script type="text/javascript">
	$(function() {
		$('.up').bind('click', function() {
			$('#formDiv').slideUp('fast');
			$('.up').hide();
			$('.down').show();
		});
		$('.down').bind('click', function() {
			$('#formDiv').slideDown('fast');
			$('.up').show();
			$('.down').hide();
		});
	});
</script>
<style type="text/css">
table td {
	vertical-align: middle;
}

.toolbar {
	background-image: url("../images/x-toolbar-background.png");
	background-repeat: repeat-x;
}

.sep {
	background-image: url("../images/x-toolbar-sep.png");
	background-repeat: no-repeat;
	background-position: center;
	width: 4px;
	height: 16px;
	margin: 0 2px 0;
}

.first {
	background-image: url("../images/x-toolbar-image.png") !important;
	background-repeat: no-repeat;
	background-position: 0px -54px;
}

.pre {
	background-image: url("../images/x-toolbar-image.png") !important;
	background-repeat: no-repeat;
	background-position: 0px -72px;
}

.next {
	background-image: url("../images/x-toolbar-image.png") !important;
	background-repeat: no-repeat;
	background-position: 0px -90px;
}

.last {
	background-image: url("../images/x-toolbar-image.png") !important;
	background-repeat: no-repeat;
	background-position: 0px -108px;
}

.export {
	background-image: url("../images/x-toolbar-image.png") !important;
	background-repeat: no-repeat;
	background-position: 0px -395px;
}

.up {
	background-image: url("../images/x-toolbar-pane-up.png") !important;
	background-repeat: no-repeat;
	cursor: pointer;
	width: 114px;
	height: 7px;
	position: relative;
	margin: auto;
}

.down {
	background-image: url("../images/x-toolbar-pane-down.png") !important;
	background-repeat: no-repeat;
	cursor: pointer;
	width: 114px;
	height: 7px;
	display: none;
	position: relative;
	margin: auto;
}

.background {
	width: 100%;
	height: 32px;
	opacity: 0.4;
	filter: alpha(opacity =                                   50);
	background: #F6F6F6;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2000;
}

#reportFormControlPanelDiv {
	width: 100%;
	padding: 0px;
	text-align: center;
	height: 7px;
	background-color: red;
	margin: 0px;
}

#reportFormControlPanelDivUp {
	background-image: url("../images/x-toolbar-pane-up.png");
	background-repeat: no-repeat;
	cursor: pointer;
	width: 114px;
	height: 7px;
	position: relative;
	margin: auto;
	background-color: blue;
}

#reportFormControlPanelDivDown {
	background-image: url("../images/x-toolbar-pane-down.png");
	background-repeat: no-repeat;
	cursor: pointer;
	width: 114px;
	height: 7px;
	position: relative;
	margin: auto;
	display: none;
}
</style>
</head>
<body style="padding: 0px; margin: 0px; height: 100%">
	<form action="">
		<div class="toolbar" style="width: 100%; overflow: hidden;">
			<table cellspacing="0" style="height: 32px;">
				<tbody>
					<tr>
						<td>&nbsp;<select><option>10</option>
								<option>20</option>
								<option>50</option>
								<option>80</option></select></td>
						<td><span class="sep">&nbsp;</span></td>
						<td><a href="javascript:void(0)"  class="easyui-linkbutton" target="_parent"  plain="true" iconCls="first">首页</a></td>
						<td><span class="sep">&nbsp;</span></td>
						<td><a href="javascript:void(0)"  class="easyui-linkbutton" target="_parent"  plain="true" iconCls="pre">上一页</a></td>
						<td><span class="sep">&nbsp;</span></td>
						<td>第 <input style="width: 42px; height: 14px; text-align: center;"> 共 200 页
						</td>
						<td><span class="sep">&nbsp;</span></td>
						<td><a href="javascript:void(0)"  class="easyui-linkbutton" target="_parent"  plain="true" iconCls="next">下一页</a></td>
						<td><span class="sep">&nbsp;</span></td>
						<td><a href="javascript:void(0)"  class="easyui-linkbutton" target="_parent"  plain="true" iconCls="last">末页</a></td>
						<td><span class="sep">&nbsp;</span></td>
						<td>共 2000 条记录</td>
						<td><span class="sep">&nbsp;</span></td>
						<td><a href="javascript:void(0)" id="sb" class="easyui-menubutton" data-options="menu:'#mm',iconCls:'export'">导出</a>
							<div id="mm" style="width: 100px;">
								<div iconCls="icon-excel">
									<span>excel</span>
									<div style="width: 150px;">
										<div iconCls="icon-excel">当前页</div>
										<div iconCls="icon-excel">所有页</div>
									</div>
								</div>
							</div></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="dd" style="width: 100%; background-color: #EEEEEE;">
			<table id="formDiv">
				<tr>
					<td>所属机构:</td>
					<td colspan="3"><input type="text"></td>
				</tr>
				<tr>
					<td>角色ID</td>
					<td><input type="text"></td>
					<td>角色名称</td>
					<td><input type="text"></td>
					<td><a href="javascript:void(0)"  class="easyui-linkbutton" target="_parent"  plain="true" iconCls="icon-search">&nbsp;查询&nbsp;</a></td>
				</tr>
			</table>
			<div style="width: 100%; background-color: #EEEEEE; height: 7px; padding: 0px; text-align: center;">
				<div class="up"></div>
				<div class="down"></div>
			</div>
		</div>
		<div id="reportFormControlPanelDiv">
			<div id="reportFormControlPanelDivUp"></div>
			<div id="reportFormControlPanelDivDown"></div>
		</div>
		</div>
		<div style="height: 200px; background-color: red; overflow: scroll;">
			123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>23123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>123123<br>
		</div>
	</form>
</body>
</html>