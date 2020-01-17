
function submitForm() {
	var userName = document.loginForm.elements["userName"];
	var password = document.loginForm.elements["password"];
	if (userName.value.length <= 0) {
		alert("请输入用户名！");
		userName.focus();
		return false;
	}
	if (password.value.length <= 0) {
		alert("请输入密码！");
		password.focus();
		return false;
	}
	return true;
}
function loadPage() {
	document.loginForm.elements["userName"].focus();
}
window.onload = function() {
	loadPage();
	$.get("sys/properties/loginImg1.nut", function(data){
		$("#logo").attr("src",data);
	});
	$.get("sys/properties/loginImg2.nut", function(data){
		$("#loginDiv").css("background",data);
	});
};