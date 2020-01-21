$(function() {
			if (mini.get("id").getValue() != '') {
				mini.get('zdValue').setReadOnly(false);
			}
		});
// form提交公共字典
function add() {
	var ggzdForm = new mini.Form("#addGgzdForm");
	ggzdForm.validate();
	if (ggzdForm.isValid()) {
		var o = ggzdForm.getData();
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + "sys/ggzd/addOrUpdateGgzd.nut",
					type : 'post',
					data : json,
            		contentType : "application/json",
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
}

function valueIsOnly(e) {
	// 判断是否value唯一
	if (mini.get("id").getValue() == '')
		$.ajax({
					url : base + "sys/ggzd/checkIsOnly.nut?value=" + e.value + "&gId=" + mini.get("gId").getValue(),
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

function onCancel(e) {
	// 关闭页面
	CloseWindow("cancel");
}

// 清除行内值
function onCloseClick(e) {
	var obj = e.sender;
	obj.setText("");
	obj.setValue("");
}
