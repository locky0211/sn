<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>授权页面</title>
<script type="text/javascript">
	function toSubmit() {
		var gk = document.getElementById("genKey").value;
		if (gk.length <= 0) {
			alert('请输入授权码!!');
			return false;
		}
		return true;

	}
</script>
</head>
<body>
	<div style="text-align: center; margin-top: 30px;">
		程序未授权,请联系相关人员并发送机器标识码,获取授权码<br>
		<br> 机器标识码:<font style="font-size: 14px; font-weight: bold;">${param.pId }</font><br>
		<br>
		<form action="${base }/upGenKey" onsubmit="return toSubmit()" method="post">
			授权码:<input type="text" name="genKey" id="genKey" value="" style="width: 300px;">
			<button type="submit">提交</button>
			<br> ${errorMsg }
		</form>
	</div>
</body>
</html>