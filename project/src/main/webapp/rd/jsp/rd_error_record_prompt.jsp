<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>监管措施-通报</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="../js/rd_error_record_prompt.js"></script>
</head>
<body>
	<div id="issuedResultForm" method="post">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td style="width: 100%;">
						&nbsp;&nbsp;<a class="mini-button" iconCls="icon-down" onclick="doDownLoad()">下载附件</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mini-fit" style="align: center;">
	<img src="../images/prompt.jpg" style="width:100%;heigh:90%;"></img>
	</div>
</body>
</html>