$(function() {
	mini.get("remark").setEnabled(false);
	mini.get("document").setEnabled(false);
	mini.get("content").setEnabled(false);
	var document = mini.get("document").getValue();
	mini.get('document1').setValue(document.substring(document.lastIndexOf("\\")+1,document.length));
});

function onCancel(e) {
	CloseWindow("cancel");
}

function expo(){
	var document = mini.get('document').getValue();
	if (document == null || document == "未上传附件。" || document == "") {
		mini.alert('没有附件!!', '提醒');
	} else {
		mini.mask({
			el : document.body,
			cls : 'mini-mask-loading',
			html : '导出Excel模板中...'
		});
		$.ajax({
			url : base + 'rd/table/doExportExcelsj.nut',
			type : 'post',
			dataType : 'json',
			data : {
				excelFilePath : mini.get('document').getValue(),
			},
			cache : false,
			success : function(text) {
				if (text) {
					toDownLoadFileForBf(text);
					mini.alert("导出成功！");
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

function toDownLoadFileForBf(path) {
	var url = base + "upload/downLoadFile.nut?filePath=" +  encodeURIComponent(encodeURIComponent(path));
	$("<iframe   id='Frame1'  style='display:none'></iframe>").prependTo('body').attr("src", url);
}
