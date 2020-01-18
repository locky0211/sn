var addParamForm;

function onAdd() {
	addParamForm = new mini.Form('#addParamForm');
	addParamForm.validate();
	if (addParamForm.isValid()) {
		var o = addParamForm.getData();
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + "sys/param/addOrUpdateSysParam.nut",
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

function valueIsOnly(e) {
	// 判断是否value唯一
	if (mini.get("id").getValue() == '')
		$.ajax({
					url : base + "sys/param/checkIsOnly.nut?value=" + e.value + "&gId=" + mini.get("gId").getValue(),
					dataType : 'json',
					async : false,
					success : function(data) {
						if (!data.success) {
							e.errorText = "已存在!";
							e.isValid = false;
						}

					}
				});
}

function onCancel() {
	CloseWindow("cancel");
};
function reload() {
	questionGrid.reload();
};
