function add() {
	// 添加和编辑用户
	var form = new mini.Form("#addUserForm");
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		$.ajax({
					url : base + 'sys/user/updateUserPassword.nut',
					type : 'post',
					data : json,
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
					}
				});
	}
}

function oldPasswordValid(e) {
	var userId = mini.get('userId').getValue();
	$.ajax({
				type : 'POST',
				url : base + 'sys/user/checkPassword.nut',
				data : {
					'userId' : userId,
					'userPass' : e.value
				},
				async : false,
				dataType : 'json',
				success : function(data) {
					if (!data.success) {
						e.errorText = '旧密码不正确';
						e.isValid = false;
					}
				}
			});
}

function passwordValid(e) {
	var newPassword = mini.get('newPassword').getValue();
	if (newPassword != e.value) {
		e.errorText = '两次输入的密码不一致';
		e.isValid = false;
	}
}

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}
