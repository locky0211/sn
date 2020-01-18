// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function add() {
	var form = new mini.Form("#OrgSummerForm");
	form.validate();
	if (form.isValid()) {
		var sumCode = mini.get("sumCode").getValue();
		var subCode = mini.get("subCode").getValue();
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		$.ajax({
			url : base + 'sys/orgSummer/addOrgSummer.nut?sumCode=' + encodeURIComponent(sumCode)
					+ '&subCode=' + encodeURIComponent(subCode),
			type : 'post',
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text.success) {
					mini.alert('操作成功!!', '提醒', function() {
						CloseWindow("ok");
					});
				} else {
					mini.alert(text.data, '提醒');
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