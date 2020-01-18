$(function() {
			mini.mask({
						el : document.body,
						cls : 'mini-mark-loading',
						html : '数据加载中...'
					});
			$.ajax({
						url : base + 'modelfl/getUrlData.nut?url=' + apiGetModelDesc + modelId,
						type : 'post',
						dataType : 'json',
						cache : false,
						success : function(text) {
							var mj = mini.decode(text.data);
							$('#mName').append(mj.name);
							$('#mDesc').append(mj.desc);
						},
						error : function(jqXHR, textStatus, errorThrown) {
							alert('访问服务器失败!!');
						},
						complete : function() {
							mini.unmask(document.body);
						}
					});
		});