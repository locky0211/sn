$(function() {
			if (mini.get('flag').getValue() != '') {
				mini.get('beanName').setReadOnly(true);
			}
		});
function onAdd() {
	var cacheInfoForm = new mini.Form('#cacheInfoForm');
	cacheInfoForm.validate();
	if (cacheInfoForm.isValid()) {
		var o = cacheInfoForm.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + "cache/addOrUpdateCacheInfo.nut",
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

function checkBeanName(e) {
	if (e.isValid) {
		if (mini.get('flag').getValue() == '') {
			$.ajax({
						async : false,
						url : base + "cache/checkIsOnly.nut?beanName=" + e.value,
						dataType : 'json',
						success : function(data) {
							if (!data.success) {
								e.errorText = "名称已存在";
								e.isValid = false;
							}
						}
					});
		}
	}
};
