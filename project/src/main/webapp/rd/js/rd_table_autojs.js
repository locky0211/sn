$(function() {
			mini.get('tableInfoGrid').load();
		});

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

function search() {
	mini.get('tableInfoGrid').load({
				tabCode : mini.get('tabCode').getValue()
			});
}

function toCreateAutoJs() {
	var rows = mini.get('tableInfoGrid').getSelecteds();
	if (rows.length > 0) {
		var dataStr = '';
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			dataStr = dataStr + row.tabCode + ";";
		}

		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '生成JS文件中...'
				});
		$.ajax({
					url : base + 'rd/autojs/toGenerationAutoJs.nut?tabCodes=' + dataStr.substring(0, dataStr.length - 1) + '&allVersion='
							+ mini.get('allVersion').getValue(),
					type : 'post',
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							toDownLoadFileByFilePath(text.data);
						} else {
							mini.alert('生成JS文件异常', '提醒');
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

function doImportAutoJs() {
	if (mini.get('excelFile').getValue() == '' || mini.get('excelFilePath').getValue() == '') {
		mini.alert('请选择上传文件!!', '提醒');
		return false;
	} else {
		mini.mask({
					el : document.body,
					cls : 'mini-mask-loading',
					html : '文件上传中...'
				});
		$.ajax({
					url : base + 'rd/autojs/toUploadAutoJsFile.nut?excelFile=' + mini.get('excelFile').getValue() + '&excelFilePath='
							+ mini.get('excelFilePath').getValue(),
					type : 'post',
					dataType : 'json',
					cache : false,
					success : function(text) {
						if (text.success) {
							mini.alert('上传成功!!', '提醒', function() {
										mini.get('excelFile').setValue('');
										mini.get('excelFilePath').setValue('');
									});
						} else {
							mini.alert(text.data, '提醒');
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
