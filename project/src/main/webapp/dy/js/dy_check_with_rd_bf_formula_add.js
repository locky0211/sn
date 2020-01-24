$(function() {
			if (mini.get("id").getValue() == '') {
				
			}
		});
function add() {
	// 添加和编辑校验公式
	var form = new mini.Form("#checkformulaForm");
	form.validate();
	
	if(mini.get("id").getValue() == ''){
	if (form.isValid()) {
		var o = form.getData(true);
		var json = mini.encode(o);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'dy/checkRdBf/addFormula.nut',
					type : 'post',
					data : json,
					dataType : 'json',
            		contentType : "application/json",
					cache : false,
					success : function(text) {
						if (text.success) {
							if(text.data=="0"){
								mini.alert('无操作权限!!', '提醒', function() {
									CloseWindow("ok");
								});
							} else{
							mini.alert('操作成功!!', '提醒', function() {
										CloseWindow("ok");
									});
							}
						}   else {
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
	}else{
		if (form.isValid()) {
			var o = form.getData(true);
			var json = mini.encode(o);
			mini.mask({
						el : document.body,
						cls : 'mini-mask-loading',
						html : '处理中...'
					});
			$.ajax({
						url : base + 'dy/checkRdBf/updateFormula.nut',
						type : 'post',
						data : json,
						dataType : 'json',
                		contentType : "application/json",
						cache : false,
						success : function(text) {
							if (text.success) {
								if(text.data=="0"){
									mini.alert('无操作权限!!', '提醒', function() {
										CloseWindow("ok");
									});
								} else{
								mini.alert('操作成功!!', '提醒', function() {
											CloseWindow("ok");
										});
								}
							}   else {
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
}

// 取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}




