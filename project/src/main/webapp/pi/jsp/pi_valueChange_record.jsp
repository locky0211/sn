<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表修改记录</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/pi_valueChange_record.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						日期：<input id="date" name="date" class="mini-monthpicker" format="yyyyMM" required="true" style="width: 100px;" />&nbsp;&nbsp;
						报送频度:<input id="frequentness" name="frequentness" class="mini-combobox" style="width: 120px;" textField="zdName" valueField="zdValue" url="${base }/sys/ggzd/getGgzdList.nut?groupId=PI_TABLE_TAB_TYPE" required="true"
						allowInput="false" />
						修改人账号：<input id="userId" name="userId" class="mini-textbox" style="width: 80px;" />&nbsp;&nbsp;
						报表代码：<input id="tabCode" name="tabCode" class="mini-textbox" style="width: 80px;" />&nbsp;&nbsp;
						<a iconCls="icon-search" class="mini-button" onclick="search()">查询</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="valueChangeRecordGird" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/pireport/getValueChangeRecordList.nut?" allowAlternating="true" pageSize="100" multiSelect="true"
			showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="20" align="center" headerAlign="center">序号</div>
				<div field="reportDate" width="60" align="center" allowSort="true" headerAlign="center">报表日期</div>
				<div field="organNo" width="120" align="center" allowSort="true" headerAlign="center">机构</div>
				<div field="tabCode" width="60" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<div field="userName" width="80" align="center" allowSort="true" headerAlign="center">修改人</div>
				<div field="changeLocate" width="80" align="center" allowSort="true" headerAlign="center">坐标</div>
				<div field="originalValue" width="80" align="center" allowSort="true" headerAlign="center" numberFormat="0.000000">修改前值</div>
				<div field="presentValue" width="80" align="center" allowSort="true" headerAlign="center" numberFormat="0.000000">修改后值</div>
				<div field="updateDate" dateFormat="yyyy-MM-dd HH:mm:ss" sortField="UPDATE_DATE"  width="80" align="center" allowSort="true" headerAlign="center">更新日期</div>
				<div width="40" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>

</body>
</html>