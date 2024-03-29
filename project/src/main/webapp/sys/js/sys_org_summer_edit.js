function update() {
	// 编辑校验公式
	var form = new mini.Form("#OrgSummerForm");
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
			url : base + 'sys/orgSummer/updateOrgSummer.nut',
			type : 'post',
			data : json,
			dataType : 'json',
            contentType : "application/json",
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert('操作成功!!', '提醒', function() {
						CloseWindow("ok");
					});
				} else{
					mini.alert(text.data, '提醒');
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

function onCancel(e) {
	CloseWindow("cancel");
}