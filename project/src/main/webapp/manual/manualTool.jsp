<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统操作手册</title>
<%@include file="/common/quote/boot.html"%>
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<script type="text/javascript" src="js/manualTool.js"></script>
</head>
<body>
	<div class="mini-splitter" style="width: 100%; height: 100%;">
		<div size="200" showCollapseButton="true">
			<div class="mini-fit">
				<ul class="mini-tree" url="${base}/sys/manual/getSysManualListByStatus.nut" style="width: 100%; padding: 5px;" showTreeIcon="true" textField="manualName" idField="manualId" parentField="pId"
					resultAsTree="false" expandOnLoad="true" showArrow="true" expandOnNodeClick="true" onNodeClick="onManualClick" id="manualTree">
				</ul>
			</div>
		</div>
		<div>
			<div class="mini-fit">
				<iframe id="manualBody" src="" frameborder="0" style="padding: 0px; width: 100%; height: 100%;"></iframe>
			</div>
		</div>
	</div>
</body>
</html>
