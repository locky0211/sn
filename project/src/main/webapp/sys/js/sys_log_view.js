//日志数据
var logData;
//查询标记
var searchIndex;

$(function() {	
});


function changeDate(){
	console.log(mini.get('#checkDate').getFormValue());
}

//刷新日志
function refresh(){
	var logDate = mini.get('#checkDate').getFormValue()
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '日志文件加载中...'
	});
	$.ajax({
		type : "POST",
		url : base + "sys/logView/getSysLogView.nut",
		data :"logDate=" + logDate,
		dataType : 'json',
		success : function(text) {
			if (text.success) {
				logData = return2Br(html2Escape(text.data));
				$("#logData").html(logData);
			} else {
				mini.alert(text.data, '提醒');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}

//下载日志
function downLoadTxt() {
	var logDate = mini.get('#checkDate').getFormValue()
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '文件下载中...'
	});
	$.ajax({
		url : base + 'sys/logView/downLoadTxt.nut',
		type : 'post',
		dataType : 'json',
		data : {
			logDate : logDate
		},
		cache : false,
		success : function(text) {
			if (text.success) {
				toDownLoadFileByFilePath(text.data);
			} else {
				mini.alert(text.data, '提醒');
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('访问服务器失败!!');
		},
		complete : function() {
			mini.unmask(document.body);
		}
	});
}

//查找匹配字符串并标红加粗
function nextField() {
	var searchField = mini.get('#searchField').getFormValue();
	if (searchField == null || searchField == '') {
		if (logData == null) {
			mini.alert('日志未加载，请先加载日志再查询', '提醒');
		} else {
			$("#logData").html(logData);
		}
	} else {
		if (logData == null) {
			mini.alert('日志未加载，请先加载日志再查询', '提醒');
		} else if (logData.indexOf(searchField) == -1){
			mini.alert('找不到字段:' + searchField, '提醒');
		}else{
			$("#logData").html(logData.replaceAll (searchField,"<b style=\"color:#F00\">" + searchField + "</b>"));
		}
	}
}

//替换所有字符串方法
String.prototype.replaceAll = function (findText, repText){  
    var newRegExp = new RegExp(findText, 'gm');  
    return this.replace(newRegExp, repText);  
};

//普通字符装换成转义字符
function html2Escape(sHtml) {
	return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
}

//换行转换为<br />
function return2Br(str) {
	return str.replace(/\r?\n/g,"<br />");
}