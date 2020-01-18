function onAdd() {
	form = new mini.Form('#dmForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		$.ajax({
			url : base + '/rd/config/addOrUpdateConfig.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text) {
					mini.alert('操作成功!!', '提醒');
				} else {
					mini.alert('操作失败!!', '提醒');
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				mini.alert('访问服务器失败!!');
			}
		});
	}
}