var oldData;
$(function() {
		});
function onCancel(e) {
	CloseWindow("cancel");
}
function add() {
	// 添加和编辑用户
	var form = new mini.Form("#sysUserForm");
	if (form.isValid()) {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + 'sys/userDepartment/addOrUpdateSysUser.nut',
					type : 'post',
					data : {
						userId : mini.get('userId').getValue(),
						userName : mini.get('userName').getValue(),
						id : mini.get('id').getValue(),
						userDepartment : mini.get('userDepartment').getValue()
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