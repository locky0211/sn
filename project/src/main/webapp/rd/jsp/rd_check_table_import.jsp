<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>报表数据导入统计</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/rd_check_table_import.js"></script>
</head>
<body>
	<div class="mini-fit">
		<div id="checkTableImportGrid" class="mini-datagrid" style="width: 100%; height: 100%;" borderStyle="border: 0; padding: 0px;"
			url="${base}/rd/check/getCheckTableImport.nut?brNo=${param.brNo}&tabType=${param.tabType}&reportDate=${param.reportDate}" allowAlternating="true"
			showPager="false">
			<div property="columns">
				<div field="field1" width="20" align="center" allowSort="true" headerAlign="center">报表代码</div>
				<div field="field2" width="20" align="center" allowSort="true" headerAlign="center">报表版本</div>
				<div field="field3" align="center" allowSort="true" headerAlign="center">报表名称</div>
				<div field="field4" width="20" align="center" allowSort="true" headerAlign="center" renderer="onField4Renderer">上报状态</div>

			</div>
		</div>
	</div>
</body>
</html>