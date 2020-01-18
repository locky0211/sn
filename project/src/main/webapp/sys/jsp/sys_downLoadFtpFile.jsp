<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>下载ftp文件</title>
<%@include file="../../common/quote/boot.html"%>
<script type="text/javascript" src="${base }/sys/js/sys_downLoadFtpFile.js"></script>
</head>
<body>
	<div style="width: 100%;">
		<div class="mini-toolbar" style="border-bottom: 0; padding: 0px;">
			<table style="width: 100%;">
				<tr>
					<td>
						FTP名称：&nbsp;&nbsp;<input id="ftpName"
								name="ftpName"
								url="${base }/ftpConfig/getAllFtpConfigs.nut"
								class="mini-combobox" textField="ftpName" valueField="id"
								style="width: 200px;" showNullItem="true" allowInput="true"/> 
						<a iconCls="icon-download" class="mini-button" plain="true" onclick="downLoad()">下载</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>