<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="java.util.*,java.net.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>常见问题说明</title>
<script type="text/javascript" src="${base }/common/js/jquery.min.js"></script>
<script type="text/javascript" src="${base }/common/js/miniui/miniui.js"></script>
<script type="text/javascript" src="${base }/common/js/base_method.js"></script>
<link href="${base }/common/js/miniui/themes/default/miniui.css" rel="stylesheet" type="text/css" />
<link href="${base }/common/js/miniui/themes/icons.css" rel="stylesheet" type="text/css" />

<script type="text/javascript">
	var base = '${base}/';
	function downLoadChrome(fileName){
		toDownLoadFile(base + "ch/downloadFile.nut?fileName="+fileName);
	}
</script>
<style type="text/css">
.problem :HOVER{
	background-color: #DDDDDD;
}
.problem .helpUL {
	list-style-type: none;
	margin: 0px;
	padding: 0px;
}
.problem .helpUL li:not(:first-child){
	margin-left: 2em;
}
</style>
</head>
<body>
	<div>
		<div class="problem">
			<ul class="helpUL">
				<li><h3>1.系统推荐使用浏览器</h3></li>
				<li>谷歌chrome浏览器，下载地址：
					<a class="mini-button" onclick="downLoadChrome('69.0.3497.81_chrome_installer_x64.exe')">点我下载windows64位chrome浏览器</a>
					<a class="mini-button" onclick="downLoadChrome('chromedev_x86-v70.0.3534.4.exe')">点我下载windows32位chrome浏览器</a>
				</li>
			</ul>
		</div>
		
		<div class="problem">
			<ul class="helpUL">
				<li><h3>2.chrome浏览器清空缓存</h3></li>
				<li><h5>1)打开谷歌浏览器。点击右上方的设置图标，进入设置选项，后点击选择中的【设置】，进入到设置页面。</h5></li>
				<li><img alt="chrome浏览器清除缓存步骤1设置"
					src="../images/file/syshelp1.png" width="50%"></li>
				<li><h5>2)在最下方，点击【高级】，打开chrome高级设置</h5></li>
				<li><img alt="chrome浏览器清除缓存步骤2高级设置"
					src="../images/file/syshelp2.png" width="60%"></li>
				<li><h5>3)在展开的高级设置里面，在隐私设置和安全性中可以找到清除浏览数据的选项(最后一项)，点击【清除浏览数据】</h5></li>
				<li><img alt="chrome浏览器清除缓存步骤3清除浏览数据"
					src="../images/file/syshelp3.png" width="60%"></li>
				<li><h5>4)勾选要清理的内容，以及清理的时间范围，确认后，点击【清除浏览数据】进行清除</h5></li>
				<li><img alt="chrome浏览器清除缓存步骤4清除浏览数据弹窗"
					src="../images/file/syshelp4.png" width="60%"></li>
			</ul>
		</div>
		
	</div>
</body>
</html>