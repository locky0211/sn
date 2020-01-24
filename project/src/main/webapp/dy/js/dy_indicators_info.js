function endDateValid(e) {
	if (e.isValid && mini.get('startDate').isValid()) {
		if (e.value < mini.get('startDate').getValue()) {
			e.errorText = "截止日期应大于启用日期";
			e.isValid = false;
		}
	}
}

function checkIndDate(e) {
	if (mini.get('id').getValue() == '') {
		$.ajax({
					url : base + "dy/indicators/checkIndDate.nut?indDate=" + mini.get('indDate').getFormValue() + "&bId="
							+ mini.get('bId').getValue(),
					type : 'post',
					cache : false,
					dataType : 'json',
					async : false,
					success : function(data) {
						if (data) {
							e.isValid = false;
							e.errorText = "指标版本已存在";
						}
					}
				});
	}
}
function onAdd() {
	// 添加和编辑校验公式类型
	var form = new mini.Form("#indicatorsInfoForm");
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
					url : base + 'dy/indicators/addOrUpdateIndicatorsInfo.nut',
					type : 'post',
					data : json,
					dataType : 'json',
            		contentType : "application/json",
					cache : false,
					success : function(text) {
						if (text) {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
						} else {
							mini.alert('操作失败', '提醒');
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
