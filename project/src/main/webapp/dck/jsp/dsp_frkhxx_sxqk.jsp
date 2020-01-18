<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>授信情况</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/dck/js/dsp_frkhxx_sxqk.js"></script>
<script type="text/javascript">
	var khjtxxId = '${param.khid}';
</script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						<a class="mini-button" iconCls="icon-add" plain="true" onclick="addSxqk()">新增</a> <a class="mini-button"
						iconCls="icon-edit" plain="true" onclick="editSxqk()">编辑</a> <a class="mini-button" iconCls="icon-remove" plain="true" onclick="delSxqk()">删除</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div id="sxqkGrid" class="mini-datagrid" style="width: 100%; height: 92%;" url="${base}/sxqk/getDspsxqkList.nut" showPager="true"
		showModified="false">
		<div property="columns">
			<div type="indexcolumn" width="40" align="center" headerAlign="center">序号</div>
			<div field="sxhm" width="160" align="center" headerAlign="center">授信号码</div>
			<div field="sxed" align="center" headerAlign="center">授信额度</div>
			<div field="dksxed" align="center" headerAlign="center">贷款授信额度</div>
			<div field="sxqsrq" align="center" headerAlign="center">授信起始日期</div>
			<div field="sxdqrq" align="center" headerAlign="center">授信到期日期</div>
			<div field="dkye" align="center" headerAlign="center">贷款余额</div>
			<div field="cyzqye" align="center" headerAlign="center">持有资产余额</div>
			<div field="cygqye" align="center" headerAlign="center">持有股权余额</div>
			<div field="qtbnxyfxzcye" width="160" align="center" headerAlign="center">其他表内信用风险资产余额</div>
			<div field="bwywye" align="center" headerAlign="center">表外业务余额</div>
			<div field="xyywyezysxed" width="160" align="center" headerAlign="center">现有业务余额占用授信额度</div>
			<div field="dkyezydksxed" width="160" align="center" headerAlign="center">贷款余额占用贷款授信额度</div>
			<div field="sksysxed" width="110" align="center" headerAlign="center">尚可使用授信额度</div>
			<div field="sksydksxed" width="130" align="center" headerAlign="center">尚可使用贷款授信额度</div>
		</div>
	</div>
</body>
</html>