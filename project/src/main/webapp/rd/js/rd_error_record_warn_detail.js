/**
 * 
 */
function onAdd() {
	var form = new mini.Form("#promptWarnForm");
	form.validate();
	if(form.isValid()){
		var o = form.getData(true);
		var json = mini.encode(o);
		console.log("json: " + json);
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		
		$.ajax({
			url : base + 'rd/promptwarn/insertPromptWarn.nut',
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
			},
			complete : function() {
				mini.unmask(document.body);
			}
		});
	}
}
function onUploadsuccess(e) {
	var data = mini.decode(e.serverData);
	if (data.success) {
		mini.get('fileName').setValue(e.file.name);
		mini.get('filePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('fileName').setValue('');
		mini.get('filePath').setValue('');
	}
}
//取消按钮关闭窗口
function onCancel(e) {
	CloseWindow("cancel");
}

function onReportNameChanged(){
	var reportNoStr = mini.get('reportName').getFormValue();
	mini.get('reportNoStr').setValue(reportNoStr);
}

function beforenodeselect(e) {
	// 禁止选中父节点
	if (e.isLeaf == false)
		e.cancel = true;
}
