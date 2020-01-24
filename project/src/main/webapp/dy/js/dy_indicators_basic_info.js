$(function() {
			/*
			 * if (mini.get('id').getValue() != '' &&
			 * mini.get('isParent').getValue() == 'n') {
			 * mini.get('indName').setReadOnly(true); }
			 */

		});

function checkIndName(e) {
	if (mini.get('id').getValue() == '') {
		if (e.isValid) {
			$.ajax({
						type : 'post',
						async : false,
						url : base + "dy/indicators/checkIndName.nut?indName=" + e.value,
						dataType : 'json',
						success : function(data) {
							if (data) {
								e.errorText = "名称已存在";
								e.isValid = false;
							}
						}
					});
		}
	}
}
function onAdd() {
	// 添加和编辑校验公式类型
	var form = new mini.Form("#indicatorsBasicInfoForm");
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
					url : base + 'dy/indicators/addOrUpdateIndicatorsBasicInfo.nut',
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
