/**
 * 
 */
$(function() {
	
});

function SetData(data) {
    if (data.action == "edit") {
      data = mini.clone(data);
      mini.get("userId").setValue(data.userId);
      mini.get("userName").setValue(data.userName);
      mini.get("beforeCheckTime").setValue(data.beforeCheckTime);
    }
}

//取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function update() {
	var form = new mini.Form("#userCheckTimeForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '信息处理中...'
		});
		$.ajax({
			url : base + 'check/time/updateUserTime.nut',
			type : 'post',
			data : {
				beforeCheckTime : mini.get('beforeCheckTime').getFormValue(),
				userId: mini.get("userId").getValue(),
				userName : mini.get("userName").getValue()
			},
			dataType : 'json',
			cache : false,
			success : function(text) {
				if (text) {
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