function doReportImport() {
	if ($('#pc').val() == '') {
		mini.alert('请选择批次!!', '提醒');
	} else {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '处理中...'
				});
		$.ajax({
					url : base + 'rd/ddd/doDdd.nut',
					type : 'post',
					dataType : 'json',
					data : {
						pc : $('#pc').val(),
						excelFilePath : mini.get('excelFilePath').getValue()
					},
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('成功!!', '提醒', function() {
										toDownLoadFileByFilePath(text.data);
									});
						} else {
							mini.alert("失败", '提醒');
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
		mini.get('excelFile').setValue(e.file.name);
		mini.get('excelFilePath').setValue(data.data);
	} else {
		mini.alert('文件上传失败!!', '提醒');
		mini.get('excelFile').setValue('');
		mini.get('excelFilePath').setValue('');
	}

}
