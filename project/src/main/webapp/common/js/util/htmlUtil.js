String.prototype.endWith = function(s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length)
		return false;
	if (this.substring(this.length - s.length) == s)
		return true;
	else
		return false;
	return true;
};

String.prototype.startWith = function(s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length)
		return false;
	if (this.substr(0, s.length) == s)
		return true;
	else
		return false;
	return true;
};
function HtmlDecode(str) {
	var s = "";
	if (str.length == 0)
		return "";
	s = str.replace(/&amp;/g, "&");
	s = s.replace(/&lt;/g, "<");
	s = s.replace(/&gt;/g, ">");
	s = s.replace(/&nbsp;/g, "");
	s = s.replace(/'/g, "\'");
	s = s.replace(/&quot;/g, "\"");
	return s;
}

function HTMLEncode(str) {
	var s = "";
	if (str.length == 0)
		return "";
	s = str.replace(/&/g, "&amp;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/\'/g, "'");
	s = s.replace(/ /g, "&nbsp;");
	s = s.replace(/\"/g, "&quot;");
	return s;
}

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null){
		return decodeURIComponent(r[2]);
	}
	return null;
}

function myfocus(myid) {
	if (isNav) {
		document.getElementById(myid).focus();// 获取焦点

	} else {
		setFocus.call(document.getElementById(myid));
	}
}
var isNav = (window.navigator.appName.toLowerCase().indexOf("netscape") >= 0);
var isIE = (window.navigator.appName.toLowerCase().indexOf("microsoft") >= 0);
function setFocus() {
	var range = this.createTextRange(); // 建立文本选区
	range.moveStart('character', this.value.length); // 选区的起点移到最后去
	range.collapse(true);
	range.select();
}
