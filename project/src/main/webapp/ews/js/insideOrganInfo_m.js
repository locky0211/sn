$(function() {
	mini.parse();
});


function onAdd() {
	// 添加和编辑
	var form = new mini.Form("#jusForm");
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
						url : base + 'getorganinfo/addOrUpdateOrganInfo.nut',
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


function onCancel() {
	CloseWindow("cancel");
}

function idIsOnly(e) {
	//var organCode=e.organCode;
		$.ajax({
					url : base + "getorganinfo/checkIsOnly.nut?organCode=" + e.value,
					async : false,
					dataType : 'json',
					success : function(data) {
						if (!data.success) {
							e.errorText = "已存在!";
							e.isValid = false;
						}
					}
				});
	
}

