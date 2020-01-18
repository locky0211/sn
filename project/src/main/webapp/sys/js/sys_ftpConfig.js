$(function(){
	if(OPStatus === "1"){
		mini.get('ftpName').setReadOnly(true);
	}
});

function add() {
	var form = new mini.Form("#form");
	form.validate();
	if (form.isValid()) {
		var o = form.getData();
		var json = mini.encode(o);
		console.log(json)
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '信息处理中...'
				});
		$.ajax({
					url : base + 'ftpConfig/addOrUpdate.nut',
					type : 'post',
					data : json,
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

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function valueIsOnly(e) {
	var ftpName = mini.get('ftpName').getValue();
	// 判断是否value唯一
	if (ftpNameOld == '')
		$.ajax({
					url : base + "ftpConfig/checkIsOnly.nut",
					dataType : 'json',
					async : false,
					data:{
						ftpName : e.value
					},
					success : function(data) {
						if (!data.success) {
							e.errorText = "名称" + e.value + "已存在!";
							e.isValid = false;
						}
					}
				});
}
