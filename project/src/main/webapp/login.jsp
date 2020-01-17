<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/login.css" type="text/css">
<%@include file="/common/quote/boot.html"%>
<script type="text/javascript" src="js/login.js"></script>
<title> </title>
</head>
<body style="overflow: hidden; text-align: center; background-color: #0650A6">
	<div id="warp">
		<table border="0" style="width: 100%; text-align: center;">
			<tr>
				<td><img id="logo" src="" width="652" /></td>
			</tr>
			<tr>
				<td style="text-align: center;"><div id="loginDiv" class="loginwrapexam">
						<form onsubmit="return submitForm()" method=post name=loginForm action="${base }/doLogin.nut" target=_top focus="userName">
							<table border="0" style="width: 100%">
								<tr>
									<td style="height: 95px">&nbsp;</td>
								</tr>
								<tr>
									<td style="text-align: left;"><input class="logininput" id="userName" name="userId" value="${userId }" type="text">&nbsp;</td>
								</tr>
								<tr>
									<td style="height: 18px;">&nbsp;</td>
								</tr>
								<tr>
									<td style="text-align: left;"><input id="password" class="logininput" type="password" name="userPass">&nbsp;</td>
								</tr>
								<tr>
									<td style="height: 25px;">&nbsp;</td>
								</tr>
								<tr>
									<td style="text-align: right;" valign="middle"><div class="errorDiv">&nbsp;${loginMsg }</div>
										<div style="float: right;">
											<input src="images/login/btn_login.png" type="image" style="margin-right: 56px;">&nbsp;
										</div></td>
								</tr>
								<tr>
									<td colspan="2" style="height: 25px;">&nbsp;</td>
								</tr>
							</table>
						</form>
					</div></td>
			</tr>
		</table>
	</div>
</body>
</html>