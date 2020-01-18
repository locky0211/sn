var um;
$(function(){
	um = UM.getEditor('content',{
		autoHeightEnabled: false
	});
	um.setContent(content);
});

function onAdd() {
	var form = new mini.Form('#riskBaseForm');
	form.validate();
	if (form.isValid()) {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		var content = um.getContent();
		$.ajax({
			type : 'POST',
			dataType : 'json',
			url : base + 'riskBase/insertOrupdateRiskBase.nut',
			data : {
				id : mini.get('id').getValue(),
				code : mini.get('code').getValue(),
				name : mini.get('name').getValue(),
				state : mini.get('state').getValue(),
				classify : mini.get('classify').getValue(),
				kwyword : mini.get('type').getValue(),
				type : mini.get('type').getValue(),
				type : mini.get('type').getValue(),
				type : mini.get('type').getValue(),
				createUser : mini.get('createUser').getValue(),
				createDate : mini.get('createDate').getValue(),
				title : mini.get('title').getValue(),
				pId : mini.get('pId').getValue(),
				content : content
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