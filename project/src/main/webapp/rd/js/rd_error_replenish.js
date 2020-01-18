$(function() {
	//判断用户是监管员还是审核员
	/*$.ajax({
		url : base + 'rd/error/check/confirm/checkUser.nut',
		type : 'post',
		dataType : 'json',
		cache : false,
		success : function(text) {
			if (text.success) {
				$("#checkDiv").hide();
			} else {
				$("#checkDiv").show();
			}
		},
	});*/
});

function add(){
	 mini.confirm("确认补录信息并反馈？", "提醒",
		        function (action) {
		            if (action == "ok") {
		            	onAdd();
		            } 
		        }
		    );
}
   
function onAdd() {
	var form = new mini.Form("#errorTrueForm");
	form.validate();
	if (form.isValid()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '信息处理中...'
					});
			$.ajax({
						url : base + 'rd/error/check/confirm/UpdateErrorReplenishInfo.nut',
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
								mini.alert('操作失败,' + text.data, '提醒');
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

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}
