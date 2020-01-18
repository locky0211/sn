$(function() {
	//alert(mini.get('#punishTime').getValue());
	if(mini.get('#punishTime').getValue() == ""){
		var dt = new Date();
		mini.get('#punishTime').setValue(dt.getFullYear() + '-' + (Number(dt.getMonth()) + 1) + "-" + dt.getDate());
	}
});

function onAdd() {
	var timePickForm = new mini.Form('#timePickForm');
	timePickForm.validate();
	if (timePickForm.isValid()) {
		var o = timePickForm.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'rd/error/dispose/UpdatePunishTime.nut',
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

};

function onCancel(e) {
	CloseWindow("cancel");
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}


