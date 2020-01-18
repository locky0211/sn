$(function() {
			if (modelId != '') {
				mini.mask({
							el : document.body,
							cls : 'mini-mask-loading',
							html : '数据加载中...'
						});

				$.ajax({
							url : base + 'model/getModelResultTableNumByProblem.nut?id=' + modelId,
							type : 'post',
							dataType : 'json',
							success : function(text) {
								if (text == '1') {
									initDataGrid(modelId);
								} else if (text == '0') {
									mini.alert('风险数据尚未生成，请稍候再试！', '警告', function() {
												CloseWindow('ok');
											});
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

		});
function initDataGrid(id) {
	mini.mask({
				el : document.body,
				cls : 'mini-mask-loading',
				html : '数据加载中...'
			});
	$.ajax({
				url : base + 'model/getModelResultStructByProblem.nut?id=' + id,
				type : 'post',
				dataType : 'json',
				success : function(text) {
					if (!text.success) {
						
					} else {
						var gird = mini.get('modelDataGrid');
						gird.set({
									columns : text.data
								});
						gird.load();
						
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

function xiada() {
	return;
	var row = mini.get('modelDataGrid').getSelected();
	if (row) {
		mini.alert('风险已确认!!', '提醒', function() {
					$.ajax({
								url : 'http://115.28.226.191:8080/rms-ha/rms/testAddVp',
								type : 'post',
								dataType : 'json'

							});
					mini.get('modelDataGrid').removeRow(row);
				});
	}

}

function hunue() {
	return;
	var row = mini.get('modelDataGrid').getSelected();
	if (row) {
		mini.alert('风险点已忽略!!', '提醒', function() {

					mini.get('modelDataGrid').removeRow(row);
				});
	}
}