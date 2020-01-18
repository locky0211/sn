function onAdd() {
	var form = new mini.Form('#riskForm');
	form.validate();
	if (form.isValid()) {
		var nodes = mini.get('userTree').getCheckedNodes(false);
		var userStr = '';
		var userNameStr = '';
		$.each(nodes, function(i) {
			userStr += nodes[i].id + ',';
			userNameStr += nodes[i].name + ',';
		});
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		$.ajax({
			type : 'POST',
			dataType : 'json',
			url : base + 'modelRisk/createRiskDesignate.nut',
			data : {
				modelRiskId : mini.get('modelRiskId').getValue(),
				content : mini.get('content').getValue(),
				userStr : userStr.substring(0, userStr.length - 1),
				userNameStr : userNameStr.substring(0, userNameStr.length - 1)
			},
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