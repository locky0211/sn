<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>法人客户担保信息</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_dgdbxx.js"></script>
<script type="text/javascript">
	var khjbxxId = '${param.khid}';
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;"><a class="mini-button" iconCls="icon-add" plain="true" onclick="addFrkhdb()">新增</a><a class="mini-button"
					iconCls="icon-edit" plain="true" onclick="editFrkhdb()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true" onclick="delFrkhdb()">删除</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit">
		<div id="frkhdbGrid" class="mini-datagrid" style="width: 100%; height: 100%;" url="${base}/dgdb/getDspDgdbList.nut" showPager="true" allowUnselect="true"
			showModified="false">
			<div property="columns">
				<div type="checkcolumn" align="center" headerAlign="center"></div>
				<div field="dbhth" align="center" headerAlign="center">担保合同号</div>
				<div field="dkhbwywhth" align="center" headerAlign="center">贷款或表外业务合同号</div>
				<div field="ypmc" align="center" headerAlign="center">押品名称</div>
				<div field="ypdm" align="center" headerAlign="center">押品代码</div>
				<div field="yppgjzhbzje" align="center" headerAlign="center">押品评估价值</div>
				<div field="ypqsrhbzrmc" align="center" headerAlign="center">押品权属人名称</div>
				<div field="ypqsrhbzrzjdm" align="center" headerAlign="center">押品权属人证件代码</div>
			</div>
		</div>
	</div>
</body>
</html>