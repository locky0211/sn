<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>个人客户信息管理</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_grkhdb_m.js"></script>
<script type="text/javascript">
	var dataSatuts = '${sessionScope.dataSatuts}';
	var sessionUserAccessKeys = '${sessionScope.sessionUserAccessKeys}';
	var flagData = [ {
		id : '',
		text : ''
	}, {
		id : '1',
		text : '已通过'
	}, {
		id : '2',
		text : '未校验'
	}, {
		id : '0',
		text : '未通过'
	} ];
	var flagDk = [ {
		id : '',
		text : ''
	}, {
		id : '1',
		text : '贷款余额为0'
	}];
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
		<input class="mini-hidden" id="nowSjrq" name="nowSjrq" value="${sessionScope.nowSjrq }" /> 
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<a class="mini-button" iconCls="icon-add" plain="true" onclick="addRow()">新增</a>
						<span class="separator"></span>
						<a class="mini-button" iconCls="icon-reload" onclick="fresh()" plain="true">刷新</a><span
						class="separator"></span>机构名称:<input id="brno"
						style="width: 240px;" class="mini-treeselect" url="${base }/sys/bm/getSysBmList.nut"
						textField="bmName" valueField="bmCode" parentField="pId" popupHeight="300" popupWidth="220"
						allowInput="false" />&nbsp;&nbsp;数据日期：<input id="sjrq" class="mini-monthpicker"
						style="width: 100px;" format="yyyyMM" />&nbsp;&nbsp;&nbsp;&nbsp;客户名称：<input	id="jkrxm" class="mini-textbox" style="width: 120px;" />
						&nbsp;&nbsp;
						
					<!-- 	&nbsp;&nbsp;&nbsp;&nbsp;确定性校验结果：<input
						id="qdxjyjg" class="mini-combobox" data="flagData" style="width: 80px;" />&nbsp;&nbsp;行内一致性校验结果：<input
						id="hnyzxjy" class="mini-combobox" data="flagData" style="width: 80px;" /> -->
						
						&nbsp;&nbsp;<a iconCls="icon-search" class="mini-button" plain="true"
						onclick="search()">查询</a></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="grkhdbGrid" class="mini-datagrid" style="width: 100%; height: 100%;"
			url="${base}/grwydkdb/getDspGrwydkdbList.nut" pageSize="20" showPager="true" showModified="false">
			<div property="columns">
				<div type="indexcolumn" width="30" align="center" headerAlign="center">序号</div>
				<div field="sjrq" width="66" align="center" headerAlign="center">数据日期</div>
				<div field="jkrxm" width="66" align="center" headerAlign="center">客户名称</div>
				<div field="zjlx" width="100" align="center" headerAlign="center">证件类型</div>
				<div field="zjhm" width="120" headerAlign="center">证件号码</div>
				<div field="dkhth" width="120" headerAlign="center">贷款合同号</div>
				<div field="dbhth" width="120" headerAlign="center">担保合同号</div>
				<div field="dbhtlxmc" width="120" headerAlign="center">担保合同类型</div>
				<!-- <div field="qdxjyjg" align="center" headerAlign="center" renderer="jyjgRenderer">确定性校验</div>
				<div field="hnyzxjyjg" align="center" headerAlign="center" renderer="jyjgRenderer">行内一致性校验</div>
				<div field="tsxjyjg" align="center" headerAlign="center" renderer="jyjgRenderer">提示性校验</div> -->
				<div field="ttt" width="120" renderer="onRenderer" align="center" headerAlign="center">操作</div>
			</div>
		</div>
	</div>
</body>
</html>