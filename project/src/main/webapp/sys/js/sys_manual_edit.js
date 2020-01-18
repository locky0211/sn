$(function() {
	if ($('#fg').val() != '') {
		mini.get('manualId').setReadOnly(true);
	}
});

function manualIdValid(e) {
	if ($('#fg').val() == '') {
		$.ajax({
			type : "POST",
			url : base + 'sys/manual/checkManualId.nut?manualId=' + e.value,
			dataType : 'json',
			async : false,
			success : function(data) {
				if (!data.success) {
					e.errorText = '已存在';
					e.isValid = false;
				}
			}
		});
	}
}

function update() {
	var form = new mini.Form('#manualForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var str = o.manualId;
		var reg = /^[A-Z0-9]{1,}(_[A-Z0-9]{1,})*$/;
		var r = str.match(reg);
		if (r == null) {
			mini.alert('模块ID必须符合大写字母或数字加下划线。', '提醒');
		} else {
			var json = mini.encode(o);
			mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '信息处理中...'
			});
			$.ajax({
				url : base + 'sys/manual/addOrUpdateManual.nut',
				type : 'post',
				data : json,
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
	}
}

function onCancel(e) {
	CloseWindow("cancel");
}