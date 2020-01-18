function onAdd() {
	mini.mask({
		el : document.body,
		cls : 'mini-mask-loading',
		html : '信息处理中...'
	});
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : base + 'modelRisk/addModelRiskRecord.nut',
		data : {
			modelrRiskUserId : mini.get('id').getValue(),
			content : mini.get('content').getValue()
		},
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

function onCancel() {
	CloseWindow("cancel");
}