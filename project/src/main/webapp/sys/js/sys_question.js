var questionForm;

function onAdd() {
	questionForm = new mini.Form('#quForm');
	questionForm.validate();
	if (questionForm.isValid()) {
		var o = questionForm.getData();
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + "sys/question/addOrUpdateQu.nut",
					type : 'post',
					data :  json,
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
					},
					complete : function() {
						mini.unmask(document.body);
					}
				});
	}

};

function onCancel() {
	CloseWindow("cancel");
};
function reload() {
	questionGrid.reload();
};
