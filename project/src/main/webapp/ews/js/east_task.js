function onAdd() {
	form = new mini.Form('#etForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'east/task/addOrUpdateTaskList.nut',
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
					}
				});
	}
}

function onCancel() {
	CloseWindow("cancel");
}