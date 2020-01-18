$(function() {
	
});

function add(){
	 mini.confirm("备注无误并提交？", "提醒",
		        function (action) {
		            if (action == "ok") {
		            	onAdd();
		            } 
		        }
		    );
}

function onAdd() {
	var cacheInfoForm = new mini.Form('#errorRemarkForm');
	cacheInfoForm.validate();
	if (cacheInfoForm.isValid()) {
		var o = cacheInfoForm.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'rd/error/check/confirm/UpdateTjReason.nut',
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

/*function onCancel(e) {
	CloseWindow("cancel");
}*/

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}


