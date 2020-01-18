var messageid;
function onCancel() {
	window.CloseOwnerWindow();
}
function CloseWindow(action) {
	if (window.CloseOwnerWindow)
		return window.CloseOwnerWindow(action);
	else
		window.close();
}
function onUploadSuccess(e) {
	var d = mini.decode(e.serverData);
	if (d.success) {
		mini.alert("导入成功","提示",function(){
			mini.hideMessageBox(messageid);
			CloseWindow("ok");
		}); 
	}else{
		mini.alert("导入失败",'提醒',function(){
			mini.hideMessageBox(messageid);
			alert(d.data);
			CloseWindow("ok");
		}); 
	}
	this.setText("");
}
function onUploadError(e) {
	if (!e) {
		mini.alert("上传失败","提示",function(){
			mini.hideMessageBox(messageid);
		}); 
	}
} 
function onFileSelect(e) {
	// alert("选择文件");
}
function startUpload() {
	var form = new mini.Form("#khfxtzForm");
	form.validate();
	if (form.isValid()) {
		messageid = mini.loading("正在生成, 请稍等....", "报文导入");
		var fileupload = mini.get("uploadExcel");
		var id=mini.get('id').getValue();
		fileupload.setPostParam({fileName:fileupload.getValue(),id:id});
		fileupload.startUpload(); 
	}
}

