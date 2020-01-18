
function onCancel() {
	CloseWindow("cancel");
}

function onAdd() {
	var form = new mini.Form('#addTableInfoForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			url : base + 'pi/addOrUpdateTableInfo.nut',
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
};