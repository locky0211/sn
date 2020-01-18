<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="/common/quote/jquery.html"%>
<link rel="stylesheet" href="${base }/common/css/table2.css" type="text/css">
<script type="text/javascript">
	$(function() {
		$('#cc').bind('click', function() {
			if ($('#osId').val() != '') {
				$.ajax({
					type : "POST",
					dataType : 'json',
					url : base + '/getGenKey',
					data : "OSID=" + $('#osId').val(),
					success : function(data) {
						if (data.success) {
							$('#sqmTd').html(data.msg);
						} else {
							$.messager.alert('警告', data.msg, 'warning');
						}
					}
				});
			}
		});
	});
</script>
</head>
<body>
	<table id="recTab" class="tab" style="width: 600px; font-size: 12px; margin-top: 30px;" border="0" cellpadding="6" cellspacing="0">
		<tr>
			<td style="width: 100px" class="tab_label_c">机器识别码</td>
			<td class="tab_field"><input type="text" id="osId" style="width: 300px;"><input type="button" id="cc" value="生成授权码"></td>
		</tr>
		<tr>
			<td style="width: 100px" class="tab_label_c">授权码</td>
			<td class="tab_field" id="sqmTd"></td>
		</tr>
	</table>
</body>
</html>