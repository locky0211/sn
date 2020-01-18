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
	var str='';
	form.validate();
	if (form.isValid()) {
		messageid = mini.loading("正在生成, 请稍等....", "报文导入");
		var date = mini.get("drrq").getText()+"01"; 
		var fileupload = mini.get("uploadExcel");
		var brNo = mini.get("brNo").getValue();
		var method=$('.method');
		for(var i=0;i<method.length;i++){
			if(method[i].checked){
				str=method[i].value;
			}
		}
		fileupload.setPostParam({date:date,fileName:fileupload.getValue(),brNo:brNo,method:str});
		fileupload.startUpload(); 
	}
}

