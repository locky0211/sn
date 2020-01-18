$(function() {
			$.ajax({
						url : base + 'modelfl/getUrlData.nut?url=' + apiGetModelDesc + modelId,
						type : 'post',
						dataType : 'json',
						cache : false,
						success : function(text) {
							var mj = mini.decode(text.data);
							$('#mName').append(mj.name);
							mini.get('#modelDesc').setValue(mj.desc);
						},
						error : function(jqXHR, textStatus, errorThrown) {
							alert('访问服务器失败!!');
						}
					});
		});

function onEdit() {
	mini.mask({
				el : document.body,
				cls : 'mini-mark-loading',
				html : '处理中...'
			});
	$.ajax({
				url : base + 'modelDept/setModelDesc.nut',
				type : 'post',
				data : {
					url : apiSetModelDesc,
					id : modelId,
					desc : mini.get('#modelDesc').getValue()
				},
				dataType : 'json',
				cache : false,
				success : function(text) {
					if (text.success) {
						var mj = mini.decode(text.data);
						if (mj.result == 'ok') {
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
						} else {
							mini.alert('操作失败!!', '提醒');
						}

					} else {
						mini.alert('请求失败!!', '提醒');
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