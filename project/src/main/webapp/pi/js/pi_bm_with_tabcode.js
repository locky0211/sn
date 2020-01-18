function add(){
	var form = new mini.Form("#bmWithTabcodeForm");
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
					url : base + 'pi/bmWithTabCode/addOrUpdate.nut',
					type : 'post',
					data : json,
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text) {
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

function checkIsOnly(e){
	var tabcode = mini.get("tabcode").getValue();
	var bm = mini.get("bm").getValue();
	$.ajax({
		url : base + "pi/bmWithTabCode/checkIsOnly.nut?tabcode=" + tabcode + "&bm=" + bm + "&id=" + mini.get("id").getValue(),
		async : false,
		dataType : 'json',
		success : function(data) {
			if (!data.success) {
				e.errorText = "已配置!";
				e.isValid = false;
			}
		}
	});
}

function onCancel(e) {
	CloseWindow("cancel");
}
