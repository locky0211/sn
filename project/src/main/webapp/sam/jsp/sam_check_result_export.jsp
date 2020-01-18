<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	response.setContentType("application/vnd.ms-excel;charset=UTF-8");
	String str = new String("数据质量报告".getBytes("gbk"), "iso8859-1");
	response.setHeader("Content-disposition", "attachment; filename=" + str + ".xls");
%><html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>数据质量校验报告</title>
<style type="text/css">
table {
	border-collapse: collapse;
	font-size: 14px;
}

td {
	border: black solid 1px;
	padding: 4px;
}

.bg {
	background-color: #BFBFBF;
	text-align: center;
}
</style>

</head>
<body scroll="no">
	<table style="width: 100%">
		<thead>
			<tr>
				<th colspan="2" height="60px;" align="center" style="font-size: 24px; border-right: 0px;">数据质量校验报告</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="width: 100px;" class="bg">上报机构</td>
				<td>${bankOrganName }</td>
			</tr>
			<tr>
				<td class="bg">数据日期</td>
				<td>${checkDate }</td>
			</tr>
			<tr>
				<td class="bg">数据类型</td>
				<td>${checkTypeName }</td>
			</tr>
			<tr>
				<td class="bg">校验结果</td>
				<td>${jyjg }</td>
			</tr>
			<tr>
				<td colspan="2" style="border: 0px;">&nbsp;</td>
			</tr>
			<c:forEach var="sri" items="${sriList}">
				<tr>
					<td class="bg">表名</td>
					<td>${sri.bm }</td>
				</tr>
				<tr>
					<td class="bg">指标</td>
					<td>${sri.zb }</td>
				</tr>
				<tr>
					<td class="bg">风险等级</td>
					<td>${sri.fxdj }</td>
				</tr>
				<tr>
					<td class="bg">校验公式</td>
					<td>${sri.jygs }</td>
				</tr>
				<tr>
					<td class="bg">公式涉及表</td>
					<td>${sri.gssjb }</td>
				</tr>
				<tr>
					<td class="bg">校验关系</td>
					<td>${sri.jylx }</td>
				</tr>
				<tr>
					<td class="bg">公式说明</td>
					<td>${sri.gssm }</td>
				</tr>
				<tr>
					<td colspan="2" style="border: 0px;">&nbsp;</td>
				</tr>
			</c:forEach>
			<tr>
				<td class="bg">公式说明</td>
				<td>GF0102_6_A=GF0100_87_A 公式中[GF0102_6_A]表示GF0102表的excel第6行的A项指标</td>
			</tr>
			<tr>
				<td class="bg" style="text-align: right;">即</td>
				<td>GF0102_6_A表示:G01资产负债项目统计表附注第Ⅱ部分：贷款质量五级分类情况简表/1各项贷款/人民币</td>
			</tr>
			<tr>
				<td class="bg" style="text-align: right;">&nbsp;</td>
				<td>GF0100_87_A表示:GF01资产负债项目统计表/62. 各项贷款/人民币</td>
			</tr>
			<tr>
				<td colspan="2" style="border: 0px;">&nbsp;</td>
			</tr>
			<tr>
				<td style="border: 0px;">&nbsp;</td>
				<td style="border: 0px;">GF0102_6_A:本期数据</td>
			</tr>
			<tr>
				<td style="border: 0px;">&nbsp;</td>
				<td style="border: 0px;">GF0102$6$A:上期数据</td>
			</tr>
		</tbody>
	</table>
</body>
</html>