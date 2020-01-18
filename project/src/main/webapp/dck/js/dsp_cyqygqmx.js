function onAdd() {
	form = new mini.Form('#cyqygqForm');
	form.validate();
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
			el:document.body,
			cls:'mini-mark-loading',
			html:'处理中...'
		});
		$.ajax({
			url : base + 'cyqygqmx/addOrUpdateDspCyqygqmx.nut',
			type : 'post',
			data : json,
			dataType : 'json',
			success : function(data) {
				if (data) {
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
			complete:function(){
				mini.unmask(document.body);
			} 
		});
	}
}

function sxidValuechanged(e){
	var sxh = mini.get('sxid').getText();
	mini.get('sxh').setValue(sxh);
}

/**
 * 金额大于0验证
 * @param e
 */
function jeValidate(e) {
	if (parseFloat(e.value) <= 0) {
		e.errorText = "金额必须大于0";
		e.isValid = false;
	}
}

function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}

function onCancel() {
	window.CloseOwnerWindow();
}