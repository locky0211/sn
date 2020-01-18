$(function() {
});

function onCancel() {
	CloseWindow("cancel");
}

function edit() {
	var form = new mini.Form("#dataForm");
	var o = form.getData(true);
	var json = mini.encode(o);
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '处理中...'
	});
	$.ajax({
		url : base + 'dck/result/updateReportData.nut',
		type : 'post',
		data : {
			tableName : tableName,
			dataId : dataId,
			data : json
		},
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text.success) {
				mini.alert('操作成功!!', '提醒', function() {
					CloseWindow("ok");
				});
			} else {
				mini.alert('操作失败!!', '提醒');
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