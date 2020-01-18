function onCancel() {
	CloseWindow("cancel");
}
function onUploadSuccess(e) {
	var data = mini.decode(e.serverData);
	mini.unmask(document.body);
	if (data.success) {
		mini.alert("导入成功","提示",function(){
			CloseWindow("ok");
		}); 
	}else{
		mini.alert("导入失败！请检查"+data.data+"列值是否填写规范");
	}
	this.setText("");
}
function onUploadError(e) {
	var data = mini.decode(e.serverData);
	mini.unmask(document.body);
	if (!data.success) {
		mini.alert("上传失败");
	}
}
function startUpload() {
	var form = new mini.Form("#importForm");
	form.validate();
	if (form.isValid()) {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '处理中...'
		});
		var fileupload = mini.get("uploadExcel");
		fileupload.startUpload(); 
	}
}