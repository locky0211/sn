<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>展示导数步骤</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/rd/js/dm_import_task_part_nj.js"></script>
<script type="text/javascript">
	var dataDate = '${param.dataDate }';
	var dataType = '${param.dataType }';
</script>
</head>
<body>
	<div class="mini-toolbar" style="padding: 2px; border-bottom: 0;">
		<tr>
			<td style="width: 100%;"><a class="mini-button" iconCls="icon-save" plain="true" onclick="excute()">执行</a> </td>
		</tr>
		</table>
	</div>
	<div class="mini-fit">
		<div id="taskGrid" style="width: 100%; height: 100%;" class="mini-datagrid" url="${base}/rd/dm/getDmDataTaskListHelp.nut?dataDate=${param.dataDate }&dataType=${param.dataType }"
			multiSelect="true" pageSize="50" showPager="false">
			<div property="columns">
			    <div type="checkcolumn" width="10" align="center" headerAlign="center"></div>
				<div field="taskName" name="taskName" headerAlign="center" width="150">任务名</div>
				<div field="taskContent" name="taskContent" headerAlign="center" width="150">任务内容</div>
				<div field="taskIndex" width="20" align="center" headerAlign="center">执行顺序</div>
			</div>
		</div>
	</div>
</body>
</html>